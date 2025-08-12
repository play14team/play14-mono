import { query } from './_generated/server';
import { v } from 'convex/values';
import type { QueryCtx } from './_generated/server';

// Query: Get homepage data (events, articles, home content, expectations)
export const getHomePage = query({
  args: {
    locale: v.optional(v.string())
  },
  handler: async (ctx: QueryCtx) => {
    // Get upcoming events (next 6 events where start date is in the future)
    const upcomingEvents = await ctx.db
      .query('events')
      .filter((q) =>
        q.and(q.neq(q.field('publishedAt'), undefined), q.gt(q.field('start'), Date.now()))
      )
      .order('asc')
      .take(6);

    // Get latest articles (last 3 articles)
    const latestArticles = await ctx.db
      .query('articles')
      .filter((q) => q.neq(q.field('publishedAt'), undefined))
      .order('desc')
      .take(3);

    // Get home content (images)
    const home = await ctx.db.query('home').first();

    // Convert image storage IDs to URLs
    let homeImageUrls: string[] = [];
    if (home?.imageIds && home.imageIds.length > 0) {
      const urls = await Promise.all(
        home.imageIds.map(async (imageId) => {
          const url = await ctx.storage.getUrl(imageId);
          return url;
        })
      );
      // Filter out null URLs
      homeImageUrls = urls.filter((url): url is string => url !== null);
    }

    // Get expectations
    const expectations = await ctx.db.query('expectations').collect();

    // Get event locations for map
    const eventLocations = await ctx.db.query('eventLocations').collect();

    // Get location details for events and convert image IDs to URLs
    const eventsWithLocations = await Promise.all(
      upcomingEvents.map(async (event) => {
        const location = event.locationId ? await ctx.db.get(event.locationId) : null;
        const venue = event.venueId ? await ctx.db.get(event.venueId) : null;

        // Convert default image storage ID to URL
        let defaultImageUrl: string | null = null;
        if (event.defaultImageId) {
          defaultImageUrl = await ctx.storage.getUrl(event.defaultImageId);
        }

        // Convert gallery image storage IDs to URLs
        let imageUrls: string[] = [];
        if (event.imageIds && event.imageIds.length > 0) {
          const urls = await Promise.all(
            event.imageIds.map(async (imageId) => {
              const url = await ctx.storage.getUrl(imageId);
              return url;
            })
          );
          // Filter out null URLs
          imageUrls = urls.filter((url): url is string => url !== null);
        }

        return {
          ...event,
          defaultImageUrl,
          imageUrls,
          location,
          venue
        };
      })
    );

    // Get author details for articles and convert image IDs to URLs
    const articlesWithAuthors = await Promise.all(
      latestArticles.map(async (article) => {
        const author = article.authorId ? await ctx.db.get(article.authorId) : null;

        // Convert image storage ID to URL
        let imageUrl: string | null = null;
        if (article.defaultImageId) {
          imageUrl = await ctx.storage.getUrl(article.defaultImageId);
        }

        return {
          ...article,
          imageUrl,
          author
        };
      })
    );

    return {
      upcomingEvents: eventsWithLocations,
      latestArticles: articlesWithAuthors,
      home: home ? { ...home, imageUrls: homeImageUrls } : null,
      expectations,
      eventLocations
    };
  }
});

// Query: Get upcoming events for homepage
export const getUpcomingEvents = query({
  args: {
    limit: v.optional(v.number())
  },
  handler: async (ctx: QueryCtx, args: { limit?: number }) => {
    const limit = args.limit || 6;

    const events = await ctx.db
      .query('events')
      .filter((q) =>
        q.and(q.neq(q.field('publishedAt'), undefined), q.gt(q.field('end'), Date.now()))
      )
      .order('asc')
      .take(limit);

    // Get location details for each event
    return Promise.all(
      events.map(async (event) => {
        const location = event.locationId ? await ctx.db.get(event.locationId) : null;
        const venue = event.venueId ? await ctx.db.get(event.venueId) : null;
        return {
          ...event,
          location,
          venue
        };
      })
    );
  }
});

// Query: Get latest articles for homepage
export const getLatestArticles = query({
  args: {
    limit: v.optional(v.number())
  },
  handler: async (ctx: QueryCtx, args: { limit?: number }) => {
    const limit = args.limit || 6;

    const articles = await ctx.db
      .query('articles')
      .filter((q) => q.neq(q.field('publishedAt'), undefined))
      .order('desc')
      .take(limit);

    // Get author details for each article
    return Promise.all(
      articles.map(async (article) => {
        const author = article.authorId ? await ctx.db.get(article.authorId) : null;
        return {
          ...article,
          author
        };
      })
    );
  }
});
