import { query } from '../_generated/server';

/**
 * Get storage usage statistics for all content types
 */
interface StorageExample {
  name?: string;
  title?: string;
  storageId: string;
}

export const getStorageStatus = query({
  args: {},
  handler: async (ctx) => {
    const stats: Record<string, number> = {};
    const examples: Record<string, StorageExample[]> = {};

    // Players - avatarId
    const players = await ctx.db.query('players').take(1000);
    const playersWithAvatars = players.filter((p) => p.avatarId);
    stats.playerAvatars = playersWithAvatars.length;
    if (playersWithAvatars.length > 0) {
      examples.playerAvatars = playersWithAvatars.slice(0, 3).map((p) => ({
        name: p.name,
        storageId: p.avatarId!
      }));
    }

    // Home - imageIds array
    const homes = await ctx.db.query('home').collect();
    let homeImageCount = 0;
    homes.forEach((h) => {
      if (h.imageIds) {
        homeImageCount += h.imageIds.length;
      }
    });
    stats.homeImages = homeImageCount;

    // History - items may have imageId
    const histories = await ctx.db.query('history').collect();
    let historyImageCount = 0;
    histories.forEach((h) => {
      if (h.items) {
        h.items.forEach((item) => {
          if (item.imageId) historyImageCount++;
        });
      }
    });
    stats.historyImages = historyImageCount;

    // Games - defaultImageId and resourceIds
    const games = await ctx.db.query('games').take(200);
    const gamesWithImages = games.filter((g) => g.defaultImageId);
    let gameResourceCount = 0;
    games.forEach((g) => {
      if (g.resourceIds) {
        gameResourceCount += g.resourceIds.length;
      }
    });
    stats.gameImages = gamesWithImages.length;
    stats.gameResources = gameResourceCount;
    if (gamesWithImages.length > 0) {
      examples.gameImages = gamesWithImages.slice(0, 3).map((g) => ({
        title: g.name,
        storageId: g.defaultImageId!
      }));
    }

    // Articles - defaultImageId
    const articles = await ctx.db.query('articles').collect();
    const articlesWithImages = articles.filter((a) => a.defaultImageId);
    stats.articleImages = articlesWithImages.length;
    if (articlesWithImages.length > 0) {
      examples.articleImages = articlesWithImages.slice(0, 3).map((a) => ({
        title: a.title,
        storageId: a.defaultImageId!
      }));
    }

    // Events - defaultImageId
    const events = await ctx.db.query('events').take(200);
    const eventsWithImages = events.filter((e) => e.defaultImageId);
    stats.eventImages = eventsWithImages.length;
    if (eventsWithImages.length > 0) {
      examples.eventImages = eventsWithImages.slice(0, 3).map((e) => ({
        name: e.name,
        storageId: e.defaultImageId!
      }));
    }

    // Testimonials - audio
    const testimonials = await ctx.db.query('testimonials').collect();
    const testimonialsWithAudio = testimonials.filter((t) => t.audio);
    stats.testimonialAudio = testimonialsWithAudio.length;

    // Sponsors - logo
    const sponsors = await ctx.db.query('sponsors').take(200);
    const sponsorsWithLogos = sponsors.filter((s) => s.logo);
    stats.sponsorLogos = sponsorsWithLogos.length;
    if (sponsorsWithLogos.length > 0) {
      examples.sponsorLogos = sponsorsWithLogos.slice(0, 3).map((s) => ({
        name: s.name,
        storageId: s.logo!
      }));
    }

    // Venues - logo
    const venues = await ctx.db.query('venues').take(100);
    const venuesWithLogos = venues.filter((v) => v.logo);
    stats.venueLogos = venuesWithLogos.length;

    // Calculate total
    const totalFiles = Object.values(stats).reduce((sum, count) => sum + count, 0);

    return {
      totalFiles,
      stats,
      examples
    };
  }
});
