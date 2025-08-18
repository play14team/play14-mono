import { query, mutation } from './_generated/server';
import { v } from 'convex/values';
import type { QueryCtx } from './_generated/server';

// Query: Get homepage data (events, articles, home content, expectations)
export const getHomePage = query({
  args: {
    locale: v.optional(v.string())
  },
  handler: async (ctx: QueryCtx, args) => {
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

    // Get expectations (filter by locale if provided, default to 'en' for backward compatibility)
    const expectationsQuery = ctx.db.query('expectations');
    const expectations = args.locale
      ? await expectationsQuery.filter((q) => q.eq(q.field('locale'), args.locale)).collect()
      : await expectationsQuery.collect();

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

// Query: Get expectations by locale
export const getExpectations = query({
  args: {
    locale: v.string()
  },
  handler: async (ctx: QueryCtx, args: { locale: string }) => {
    return await ctx.db
      .query('expectations')
      .withIndex('by_locale', (q) => q.eq('locale', args.locale))
      .collect();
  }
});

// Query: Get all expectations grouped by locale
export const getAllExpectations = query({
  args: {},
  handler: async (ctx: QueryCtx) => {
    const allExpectations = await ctx.db.query('expectations').collect();

    // Group by locale (use 'en' as default for expectations without locale)
    const grouped = allExpectations.reduce(
      (acc, expectation) => {
        const locale = expectation.locale || 'en';
        if (!acc[locale]) {
          acc[locale] = [];
        }
        acc[locale].push(expectation);
        return acc;
      },
      {} as Record<string, typeof allExpectations>
    );

    return grouped;
  }
});

// Mutation: Add or update an expectation with locale
export const upsertExpectation = mutation({
  args: {
    strapiId: v.optional(v.string()),
    title: v.string(),
    type: v.union(v.literal('Main'), v.literal('Secondary')),
    icon: v.string(),
    content: v.string(),
    locale: v.string()
  },
  handler: async (ctx, args) => {
    // Check if expectation exists for this locale
    const existing = args.strapiId
      ? await ctx.db
          .query('expectations')
          .filter((q) =>
            q.and(q.eq(q.field('strapiId'), args.strapiId), q.eq(q.field('locale'), args.locale))
          )
          .first()
      : null;

    if (existing) {
      // Update existing expectation
      await ctx.db.patch(existing._id, {
        title: args.title,
        type: args.type,
        icon: args.icon,
        content: args.content
      });
      return existing._id;
    } else {
      // Create new expectation
      return await ctx.db.insert('expectations', {
        strapiId: args.strapiId,
        title: args.title,
        type: args.type,
        icon: args.icon,
        content: args.content,
        locale: args.locale
      });
    }
  }
});

// Mutation: Add locale field to existing expectations (migration helper)
export const addLocaleToExistingExpectations = mutation({
  args: {
    defaultLocale: v.optional(v.string())
  },
  handler: async (ctx, args) => {
    const locale = args.defaultLocale || 'en';
    const expectations = await ctx.db.query('expectations').collect();

    let updated = 0;
    for (const expectation of expectations) {
      if (!expectation.locale) {
        await ctx.db.patch(expectation._id, { locale });
        updated++;
      }
    }

    return {
      total: expectations.length,
      updated,
      message: `Updated ${updated} expectations with locale '${locale}'`
    };
  }
});
