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
		)
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
		}
	) => {
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
		addressDetails: v.optional(v.string())
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
			addressDetails?: string;
		}
	) => {
		return await ctx.db.insert('venues', {
			...args,
			socialNetworks: []
		});
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
		)
	},
	handler: async (
		ctx: MutationCtx,
		args: {
			name: string;
			url?: string;
			logo?: Id<'_storage'>;
			socialNetworks?: {
				type: string;
				url: string;
			}[];
		}
	) => {
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
	args: { value: v.string() },
	handler: async (ctx: MutationCtx, args: { value: string }) => {
		// Check if tag already exists
		const existing = await ctx.db
			.query('tags')
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			.withIndex('by_value', (q: any) => q.eq('value', args.value))
			.unique();

		if (existing) {
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
		username: v.string(),
		email: v.string(),
		confirmed: v.optional(v.boolean()),
		blocked: v.optional(v.boolean())
	},
	handler: async (
		ctx: MutationCtx,
		args: {
			username: string;
			email: string;
			confirmed?: boolean;
			blocked?: boolean;
		}
	) => {
		return await ctx.db.insert('users', {
			...args,
			confirmed: args.confirmed ?? false,
			blocked: args.blocked ?? false
		});
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
