import { query, mutation } from './_generated/server';
import { v } from 'convex/values';
import type { Id, Doc } from './_generated/dataModel';
import type { QueryCtx, MutationCtx } from './_generated/server';

// Query: Get single game by slug (matches GraphQL Game query)
export const get = query({
	args: { slug: v.string() },
	handler: async (ctx: QueryCtx, args: { slug: string }) => {
		const game = await ctx.db
			.query('games')
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			.withIndex('by_slug', (q: any) => q.eq('slug', args.slug))
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			.filter((q: any) => q.neq(q.field('publishedAt'), undefined))
			.unique();

		if (!game) {
			return null;
		}

		// Get related data to match GraphQL GameDetails fragment
		const [firstPlayedAtEvent, documenters, proposers] = await Promise.all([
			game.firstPlayedAtEventId ? ctx.db.get(game.firstPlayedAtEventId) : null,
			getGameDocumenters(ctx, game._id),
			getGameProposers(ctx, game._id)
		]);

		return {
			...game,
			firstPlayedAt: firstPlayedAtEvent,
			documentedBy: documenters,
			proposedBy: proposers
		};
	}
});

// Query: List games with pagination and filtering (matches GraphQL Games query)
export const list = query({
	args: {
		page: v.number(),
		pageSize: v.number(),
		category: v.optional(v.string()),
		tag: v.optional(v.string())
	},
	handler: async (
		ctx: QueryCtx,
		args: { page: number; pageSize: number; category?: string; tag?: string }
	) => {
		// Get all games based on category, filter by published
		const allGames = args.category
			? await ctx.db
					.query('games')
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					.withIndex('by_category', (q: any) => q.eq('category', args.category as any))
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					.filter((q: any) => q.neq(q.field('publishedAt'), undefined))
					.collect()
			: await ctx.db
					.query('games')
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					.filter((q: any) => q.neq(q.field('publishedAt'), undefined))
					.collect();

		// Apply tag filter (post-query since tags are embedded arrays)
		let filteredGames = allGames;
		if (args.tag) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			filteredGames = allGames.filter((game: any) =>
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				game.tags.some((tag: any) => tag.value.toLowerCase().includes(args.tag!.toLowerCase()))
			);
		}

		// Sort by name (ascending)
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		filteredGames.sort((a: any, b: any) => a.name.localeCompare(b.name));

		// Apply pagination
		const total = filteredGames.length;
		const offset = (args.page - 1) * args.pageSize;
		const paginatedGames = filteredGames.slice(offset, offset + args.pageSize);

		// Get proposer data for each game (for GameItem fragment)
		const gamesWithProposers = await Promise.all(
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			paginatedGames.map(async (game: any) => {
				const proposers = await getGameProposers(ctx, game._id);
				return {
					...game,
					proposedBy: proposers
				};
			})
		);

		return {
			data: gamesWithProposers,
			meta: {
				pagination: {
					page: args.page,
					pageSize: args.pageSize,
					total,
					pageCount: Math.ceil(total / args.pageSize)
				}
			}
		};
	}
});

// Mutation: Create new game
export const create = mutation({
	args: {
		name: v.string(),
		slug: v.string(),
		category: v.union(
			v.literal('Game'),
			v.literal('IceBreaker'),
			v.literal('WarmUp'),
			v.literal('Facilitation'),
			v.literal('Retrospective'),
			v.literal('CoolDown')
		),
		scale: v.string(),
		timebox: v.string(),
		summary: v.string(),
		description: v.string(),
		credits: v.string(),
		firstPlayedAtEventId: v.optional(v.id('events')),
		publishedAt: v.optional(v.number()),
		strapiId: v.optional(v.number())
	},
	handler: async (
		ctx: MutationCtx,
		args: {
			name: string;
			slug: string;
			category: 'Game' | 'IceBreaker' | 'WarmUp' | 'Facilitation' | 'Retrospective' | 'CoolDown';
			scale: string;
			timebox: string;
			summary: string;
			description: string;
			credits: string;
			firstPlayedAtEventId?: Id<'events'>;
			publishedAt?: number;
			strapiId?: number;
		}
	) => {
		// Check if game already exists by strapiId
		if (args.strapiId) {
			const existing = await ctx.db
				.query('games')
				.withIndex('by_strapi_id', (q) => q.eq('strapiId', args.strapiId))
				.unique();

			if (existing) {
				// Update existing record
				await ctx.db.patch(existing._id, {
					...args,
					imageIds: existing.imageIds || [],
					resourceIds: existing.resourceIds || [],
					materials: existing.materials || [],
					preparationSteps: existing.preparationSteps || [],
					safety: existing.safety || [],
					tags: existing.tags || [],
					updatedAt: Date.now()
				});
				return existing._id;
			}
		}

		const gameId = await ctx.db.insert('games', {
			...args,
			imageIds: [],
			resourceIds: [],
			materials: [],
			preparationSteps: [],
			safety: [],
			tags: [],
			updatedAt: Date.now()
		});

		return gameId;
	}
});

// Mutation: Update game
export const update = mutation({
	args: {
		id: v.id('games'),
		name: v.optional(v.string()),
		slug: v.optional(v.string()),
		category: v.optional(
			v.union(
				v.literal('Game'),
				v.literal('IceBreaker'),
				v.literal('WarmUp'),
				v.literal('Facilitation'),
				v.literal('Retrospective'),
				v.literal('CoolDown')
			)
		),
		scale: v.optional(v.string()),
		timebox: v.optional(v.string()),
		summary: v.optional(v.string()),
		description: v.optional(v.string()),
		credits: v.optional(v.string()),
		firstPlayedAtEventId: v.optional(v.id('events')),
		publishedAt: v.optional(v.number()),
		materials: v.optional(v.array(v.object({ value: v.string() }))),
		preparationSteps: v.optional(v.array(v.object({ value: v.string() }))),
		safety: v.optional(v.array(v.object({ key: v.string(), value: v.string() }))),
		tags: v.optional(v.array(v.object({ value: v.string() }))),
		ratings: v.optional(
			v.object({
				energy: v.optional(v.number()),
				connection: v.optional(v.number()),
				silliness: v.optional(v.number())
			})
		)
	},
	handler: async (ctx: MutationCtx, args: { id: Id<'games'>; [key: string]: unknown }) => {
		const { id, ...updates } = args;

		await ctx.db.patch(id, {
			...updates,
			updatedAt: Date.now()
		});

		return id;
	}
});

// Mutation: Delete game
export const remove = mutation({
	args: { id: v.id('games') },
	handler: async (ctx: MutationCtx, args: { id: Id<'games'> }) => {
		// Remove related relationships
		const [documenters, proposers] = await Promise.all([
			ctx.db
				.query('gameDocumenters')
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				.withIndex('by_game', (q: any) => q.eq('gameId', args.id))
				.collect(),
			ctx.db
				.query('gameProposers')
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				.withIndex('by_game', (q: any) => q.eq('gameId', args.id))
				.collect()
		]);

		// Delete all relationships
		await Promise.all([
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			...documenters.map((d: any) => ctx.db.delete(d._id)),
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			...proposers.map((p: any) => ctx.db.delete(p._id))
		]);

		// Delete the game
		await ctx.db.delete(args.id);
		return args.id;
	}
});

// Mutation: Add documenter to game
export const addDocumenter = mutation({
	args: {
		gameId: v.id('games'),
		playerId: v.id('players')
	},
	handler: async (ctx: MutationCtx, args: { gameId: Id<'games'>; playerId: Id<'players'> }) => {
		// Check if relationship already exists
		const existing = await ctx.db
			.query('gameDocumenters')
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			.withIndex('by_game', (q: any) => q.eq('gameId', args.gameId))
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			.filter((q: any) => q.eq(q.field('playerId'), args.playerId))
			.unique();

		if (existing) {
			return existing._id;
		}

		return await ctx.db.insert('gameDocumenters', args);
	}
});

// Mutation: Add proposer to game
export const addProposer = mutation({
	args: {
		gameId: v.id('games'),
		playerId: v.id('players')
	},
	handler: async (ctx: MutationCtx, args: { gameId: Id<'games'>; playerId: Id<'players'> }) => {
		// Check if relationship already exists
		const existing = await ctx.db
			.query('gameProposers')
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			.withIndex('by_game', (q: any) => q.eq('gameId', args.gameId))
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			.filter((q: any) => q.eq(q.field('playerId'), args.playerId))
			.unique();

		if (existing) {
			return existing._id;
		}

		return await ctx.db.insert('gameProposers', args);
	}
});

// Helper functions
async function getGameDocumenters(ctx: QueryCtx, gameId: Id<'games'>): Promise<Doc<'players'>[]> {
	const documenterRelations = await ctx.db
		.query('gameDocumenters')
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		.withIndex('by_game', (q: any) => q.eq('gameId', gameId))
		.collect();

	const documenters = await Promise.all(
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		documenterRelations.map((rel: any) => ctx.db.get(rel.playerId))
	);

	return documenters.filter((doc): doc is Doc<'players'> => doc !== null);
}

async function getGameProposers(ctx: QueryCtx, gameId: Id<'games'>): Promise<Doc<'players'>[]> {
	const proposerRelations = await ctx.db
		.query('gameProposers')
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		.withIndex('by_game', (q: any) => q.eq('gameId', gameId))
		.collect();

	const proposers = await Promise.all(
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		proposerRelations.map((rel: any) => ctx.db.get(rel.playerId))
	);

	return proposers.filter((prop): prop is Doc<'players'> => prop !== null);
}

// Helper query: Get game by strapiId for image migration
export const getByStrapiId = query({
	args: { strapiId: v.number() },
	handler: async (ctx: QueryCtx, { strapiId }) => {
		const records = await ctx.db
			.query('games')
			.withIndex('by_strapi_id', (q) => q.eq('strapiId', strapiId))
			.collect();
		return records.length > 0 ? records[0] : null;
	}
});

// Helper mutation: Update game images after migration
export const updateImages = mutation({
	args: {
		gameId: v.id('games'),
		defaultImageId: v.optional(v.string()),
		imageIds: v.array(v.string())
	},
	handler: async (ctx: MutationCtx, { gameId, defaultImageId, imageIds }) => {
		const updates: Record<string, unknown> = {};

		if (defaultImageId) {
			updates.defaultImageId = defaultImageId as Id<'_storage'>;
		}

		if (imageIds.length > 0) {
			updates.imageIds = imageIds as Id<'_storage'>[];
		}

		if (Object.keys(updates).length > 0) {
			await ctx.db.patch(gameId, updates);
		}
	}
});
