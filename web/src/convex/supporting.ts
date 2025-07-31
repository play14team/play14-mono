import { query, mutation } from './_generated/server';
import { v } from 'convex/values';
import type { Id, Doc } from './_generated/dataModel';
import type { QueryCtx, MutationCtx } from './_generated/server';

// Event Locations
export const getEventLocations = query({
	args: {},
	handler: async (ctx: QueryCtx) => {
		return await ctx.db.query('eventLocations').collect();
	}
});

export const getEventLocationsByCountry = query({
	args: { country: v.string() },
	handler: async (ctx: QueryCtx, args: { country: string }) => {
		return await ctx.db
			.query('eventLocations')
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			.withIndex('by_country', (q: any) => q.eq('country', args.country))
			.collect();
	}
});

export const createEventLocation = mutation({
	args: {
		name: v.string(),
		country: v.string(),
		location: v.optional(
			v.object({
				lat: v.number(),
				lng: v.number()
			})
		),
		locationData: v.optional(v.any()),
		strapiId: v.optional(v.number())
	},
	handler: async (
		ctx: MutationCtx,
		args: {
			name: string;
			country: string;
			location?: {
				lat: number;
				lng: number;
			};
			locationData?: Record<string, unknown>;
			strapiId?: number;
		}
	) => {
		// Check if event location already exists by strapiId
		if (args.strapiId) {
			const existing = await ctx.db
				.query('eventLocations')
				.withIndex('by_strapi_id', (q) => q.eq('strapiId', args.strapiId))
				.unique();

			if (existing) {
				// Update existing record
				await ctx.db.patch(existing._id, args);
				return existing._id;
			}
		}

		return await ctx.db.insert('eventLocations', args);
	}
});

// Venues
export const getVenues = query({
	args: {},
	handler: async (ctx: QueryCtx) => {
		return await ctx.db.query('venues').collect();
	}
});

export const createVenue = mutation({
	args: {
		name: v.string(),
		website: v.optional(v.string()),
		location: v.optional(
			v.object({
				lat: v.number(),
				lng: v.number()
			})
		),
		locationData: v.optional(v.any()),
		addressDetails: v.optional(v.string()),
		strapiId: v.optional(v.number())
	},
	handler: async (
		ctx: MutationCtx,
		args: {
			name: string;
			website?: string;
			location?: {
				lat: number;
				lng: number;
			};
			locationData?: Record<string, unknown>;
			addressDetails?: string;
			strapiId?: number;
		}
	) => {
		// Check if venue already exists by strapiId
		if (args.strapiId) {
			const existing = await ctx.db
				.query('venues')
				.withIndex('by_strapi_id', (q) => q.eq('strapiId', args.strapiId))
				.unique();

			if (existing) {
				// Update existing record
				await ctx.db.patch(existing._id, args);
				return existing._id;
			}
		}

		return await ctx.db.insert('venues', args);
	}
});

// Sponsors
export const getSponsors = query({
	args: {},
	handler: async (ctx: QueryCtx) => {
		return await ctx.db.query('sponsors').collect();
	}
});

export const createSponsor = mutation({
	args: {
		name: v.string(),
		url: v.optional(v.string()),
		logoId: v.optional(v.id('_storage')),
		socialNetworks: v.optional(
			v.array(
				v.object({
					type: v.string(),
					url: v.string()
				})
			)
		),
		strapiId: v.optional(v.number())
	},
	handler: async (
		ctx: MutationCtx,
		args: {
			name: string;
			url?: string;
			logoId?: Id<'_storage'>;
			socialNetworks?: {
				type: string;
				url: string;
			}[];
			strapiId?: number;
		}
	) => {
		// Check if sponsor already exists by strapiId
		if (args.strapiId) {
			const existing = await ctx.db
				.query('sponsors')
				.withIndex('by_strapi_id', (q) => q.eq('strapiId', args.strapiId))
				.unique();

			if (existing) {
				// Update existing record
				await ctx.db.patch(existing._id, {
					...args,
					socialNetworks: args.socialNetworks || []
				});
				return existing._id;
			}
		}

		return await ctx.db.insert('sponsors', {
			...args,
			socialNetworks: args.socialNetworks || []
		});
	}
});

// Tags
export const getTags = query({
	args: {},
	handler: async (ctx: QueryCtx) => {
		return await ctx.db.query('tags').collect();
	}
});

export const getTagByValue = query({
	args: { value: v.string() },
	handler: async (ctx: QueryCtx, args: { value: string }) => {
		return await ctx.db
			.query('tags')
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			.withIndex('by_value', (q: any) => q.eq('value', args.value))
			.unique();
	}
});

export const createTag = mutation({
	args: {
		value: v.string(),
		strapiId: v.optional(v.number())
	},
	handler: async (ctx: MutationCtx, args: { value: string; strapiId?: number }) => {
		// Check if tag already exists by strapiId first
		if (args.strapiId) {
			const existingByStrapiId = await ctx.db
				.query('tags')
				.withIndex('by_strapi_id', (q) => q.eq('strapiId', args.strapiId))
				.unique();

			if (existingByStrapiId) {
				// Update existing record
				await ctx.db.patch(existingByStrapiId._id, args);
				return existingByStrapiId._id;
			}
		}

		// Check if tag already exists by value (fallback)
		const existing = await ctx.db
			.query('tags')
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			.withIndex('by_value', (q: any) => q.eq('value', args.value))
			.unique();

		if (existing) {
			// Update with strapiId if provided
			if (args.strapiId) {
				await ctx.db.patch(existing._id, { strapiId: args.strapiId });
			}
			return existing._id;
		}

		return await ctx.db.insert('tags', args);
	}
});

// Home page configuration
export const getHome = query({
	args: {},
	handler: async (ctx: QueryCtx) => {
		const home = await ctx.db.query('home').unique();
		return home || { imageIds: [] };
	}
});

export const updateHome = mutation({
	args: {
		imageIds: v.array(v.id('_storage'))
	},
	handler: async (
		ctx: MutationCtx,
		args: {
			imageIds: Id<'_storage'>[];
		}
	) => {
		const existing = await ctx.db.query('home').unique();

		if (existing) {
			await ctx.db.patch(existing._id, args);
			return existing._id;
		} else {
			return await ctx.db.insert('home', args);
		}
	}
});

// Users (for authentication integration)
export const getUserByEmail = query({
	args: { email: v.string() },
	handler: async (ctx: QueryCtx, args: { email: string }) => {
		return await ctx.db
			.query('users')
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			.withIndex('by_email', (q: any) => q.eq('email', args.email))
			.unique();
	}
});

export const createUser = mutation({
	args: {
		email: v.string(),
		name: v.optional(v.string())
	},
	handler: async (
		ctx: MutationCtx,
		args: {
			email: string;
			name?: string;
		}
	) => {
		return await ctx.db.insert('users', args);
	}
});

// Statistics and analytics
export const getStats = query({
	args: {},
	handler: async (ctx: QueryCtx) => {
		const [events, games, players, articles] = await Promise.all([
			ctx.db.query('events').collect(),
			ctx.db.query('games').collect(),
			ctx.db.query('players').collect(),
			ctx.db.query('articles').collect()
		]);

		const publishedEvents = events.filter((e: Doc<'events'>) => e.publishedAt);
		const publishedGames = games.filter((g: Doc<'games'>) => g.publishedAt);
		const publishedArticles = articles.filter((a: Doc<'articles'>) => a.publishedAt);

		return {
			total: {
				events: events.length,
				games: games.length,
				players: players.length,
				articles: articles.length
			},
			published: {
				events: publishedEvents.length,
				games: publishedGames.length,
				articles: publishedArticles.length
			},
			draft: {
				events: events.length - publishedEvents.length,
				games: games.length - publishedGames.length,
				articles: articles.length - publishedArticles.length
			}
		};
	}
});
