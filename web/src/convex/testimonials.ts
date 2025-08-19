import { query } from './_generated/server';
import { v } from 'convex/values';
import type { QueryCtx } from './_generated/server';

// List latest testimonials with optional randomization
export const list = query({
  args: {
    limit: v.optional(v.number()),
    random: v.optional(v.boolean())
  },
  handler: async (ctx: QueryCtx, args) => {
    const limit = args.limit ?? 15;
    // Fetch all (no publishedAt; assume all visible)
    const all = await ctx.db.query('testimonials').order('desc').collect();

    // Attach author + media URLs
    const withExpanded = await Promise.all(
      all.map(async (t) => {
        const author = t.authorId ? await ctx.db.get(t.authorId) : null;
        let authorAvatarUrl: string | null = null;
        if (author?.avatarId) {
          authorAvatarUrl = (await ctx.storage.getUrl(author.avatarId)) ?? null;
        }
        let audioUrl: string | null = null;
        if (t.audio) {
          audioUrl = (await ctx.storage.getUrl(t.audio)) ?? null;
        }
        return { ...t, author, authorAvatarUrl, audioUrl };
      })
    );

    // Filter out testimonials without an author (avoid anonymous)
    let items = withExpanded.filter((t) => t.author);
    if (args.random) {
      items = [...withExpanded];
      for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]];
      }
    }

    return items.slice(0, limit);
  }
});
