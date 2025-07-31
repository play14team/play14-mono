import { query } from './_generated/server';
import { v } from 'convex/values';
import type { Id, Doc } from './_generated/dataModel';
import type { QueryCtx } from './_generated/server';

// Global search across all content types (matches GraphQL Search query)
export const global = query({
	args: { input: v.string() },
	handler: async (ctx: QueryCtx, args: { input: string }) => {
		const searchTerm = args.input.toLowerCase().trim();

		if (!searchTerm) {
			return {
				events: [],
				players: [],
				games: [],
				articles: []
			};
		}

		// Search events
		const allEvents = await ctx.db
			.query('events')
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			.filter((q: any) => q.neq(q.field('publishedAt'), undefined))
			.collect();

		const matchingEvents = await Promise.all(
			allEvents
				.filter(
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					(event: any) =>
						event.name.toLowerCase().includes(searchTerm) ||
						event.description.toLowerCase().includes(searchTerm) ||
						(event.tagline && event.tagline.toLowerCase().includes(searchTerm))
				)
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				.map(async (event: any) => {
					const location = event.locationId ? await ctx.db.get(event.locationId) : null;
					return {
						...event,
						location
					};
				})
		);

		// Search players
		const allPlayers = await ctx.db.query('players').collect();

		const matchingPlayers = allPlayers.filter(
			(player: Doc<'players'>) =>
				player.name.toLowerCase().includes(searchTerm) ||
				(player.company && player.company.toLowerCase().includes(searchTerm)) ||
				(player.tagline && player.tagline.toLowerCase().includes(searchTerm)) ||
				(player.bio && player.bio.toLowerCase().includes(searchTerm))
		);

		// Search games
		const allGames = await ctx.db
			.query('games')
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			.filter((q: any) => q.neq(q.field('publishedAt'), undefined))
			.collect();

		const matchingGames = await Promise.all(
			allGames
				.filter(
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					(game: any) =>
						game.name.toLowerCase().includes(searchTerm) ||
						game.summary.toLowerCase().includes(searchTerm) ||
						game.description.toLowerCase().includes(searchTerm) ||
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						game.tags.some((tag: any) => tag.value.toLowerCase().includes(searchTerm)) ||
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						game.materials.some((material: any) =>
							material.value.toLowerCase().includes(searchTerm)
						)
				)
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				.map(async (game: any) => {
					const proposers = await getGameProposers(ctx, game._id);
					return {
						...game,
						proposedBy: proposers
					};
				})
		);

		// Search articles
		const allArticles = await ctx.db
			.query('articles')
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			.filter((q: any) => q.neq(q.field('publishedAt'), undefined))
			.collect();

		const matchingArticles = await Promise.all(
			allArticles
				.filter(
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					(article: any) =>
						article.title.toLowerCase().includes(searchTerm) ||
						article.summary.toLowerCase().includes(searchTerm) ||
						article.content.toLowerCase().includes(searchTerm)
				)
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				.map(async (article: any) => {
					const author = article.authorId ? await ctx.db.get(article.authorId) : null;
					return {
						...article,
						author
					};
				})
		);

		return {
			events: matchingEvents,
			players: matchingPlayers,
			games: matchingGames,
			articles: matchingArticles
		};
	}
});

// Advanced search with filters and pagination
export const advanced = query({
	args: {
		input: v.string(),
		contentTypes: v.optional(v.array(v.string())), // ["events", "games", "players", "articles"]
		page: v.optional(v.number()),
		pageSize: v.optional(v.number())
	},
	handler: async (
		ctx: QueryCtx,
		args: {
			input: string;
			contentTypes?: ('events' | 'games' | 'players' | 'articles')[];
			page?: number;
			pageSize?: number;
		}
	) => {
		const searchTerm = args.input.toLowerCase().trim();
		const contentTypes = args.contentTypes || ['events', 'games', 'players', 'articles'];
		const page = args.page || 1;
		const pageSize = args.pageSize || 20;

		const results: Record<string, unknown> = {};

		// Search each content type if requested
		if (contentTypes.includes('events')) {
			const allEvents = await ctx.db
				.query('events')
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				.filter((q: any) => q.neq(q.field('publishedAt'), undefined))
				.collect();

			const matchingEvents = await Promise.all(
				allEvents
					.filter(
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						(event: any) =>
							event.name.toLowerCase().includes(searchTerm) ||
							event.description.toLowerCase().includes(searchTerm) ||
							(event.tagline && event.tagline.toLowerCase().includes(searchTerm))
					)
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					.map(async (event: any) => {
						const location = event.locationId ? await ctx.db.get(event.locationId) : null;
						return { ...event, location };
					})
			);

			results.events = {
				data: matchingEvents.slice((page - 1) * pageSize, page * pageSize),
				total: matchingEvents.length
			};
		}

		if (contentTypes.includes('players')) {
			const allPlayers = await ctx.db.query('players').collect();

			const matchingPlayers = allPlayers.filter(
				(player: Doc<'players'>) =>
					player.name.toLowerCase().includes(searchTerm) ||
					(player.company && player.company.toLowerCase().includes(searchTerm)) ||
					(player.tagline && player.tagline.toLowerCase().includes(searchTerm)) ||
					(player.bio && player.bio.toLowerCase().includes(searchTerm))
			);

			results.players = {
				data: matchingPlayers.slice((page - 1) * pageSize, page * pageSize),
				total: matchingPlayers.length
			};
		}

		if (contentTypes.includes('games')) {
			const allGames = await ctx.db
				.query('games')
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				.filter((q: any) => q.neq(q.field('publishedAt'), undefined))
				.collect();

			const matchingGames = await Promise.all(
				allGames
					.filter(
						(game: Doc<'games'>) =>
							game.name.toLowerCase().includes(searchTerm) ||
							game.summary.toLowerCase().includes(searchTerm) ||
							game.description.toLowerCase().includes(searchTerm) ||
							game.tags.some((tag: { value: string }) =>
								tag.value.toLowerCase().includes(searchTerm)
							)
					)
					.map(async (game: Doc<'games'>) => {
						const proposers = await getGameProposers(ctx, game._id);
						return { ...game, proposedBy: proposers };
					})
			);

			results.games = {
				data: matchingGames.slice((page - 1) * pageSize, page * pageSize),
				total: matchingGames.length
			};
		}

		if (contentTypes.includes('articles')) {
			const allArticles = await ctx.db
				.query('articles')
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				.filter((q: any) => q.neq(q.field('publishedAt'), undefined))
				.collect();

			const matchingArticles = await Promise.all(
				allArticles
					.filter(
						(article: Doc<'articles'>) =>
							article.title.toLowerCase().includes(searchTerm) ||
							article.summary.toLowerCase().includes(searchTerm) ||
							article.content.toLowerCase().includes(searchTerm)
					)
					.map(async (article: Doc<'articles'>) => {
						const author = article.authorId ? await ctx.db.get(article.authorId) : null;
						return { ...article, author };
					})
			);

			results.articles = {
				data: matchingArticles.slice((page - 1) * pageSize, page * pageSize),
				total: matchingArticles.length
			};
		}

		return results;
	}
});

// Helper function (duplicated from games.ts for now)
async function getGameProposers(ctx: QueryCtx, gameId: Id<'games'>) {
	const proposerRelations = await ctx.db
		.query('gameProposers')
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		.withIndex('by_game', (q: any) => q.eq('gameId', gameId))
		.collect();

	const proposers = await Promise.all(
		proposerRelations.map((rel: Doc<'gameProposers'>) => ctx.db.get(rel.playerId))
	);

	return proposers.filter((prop): prop is Doc<'players'> => prop !== null);
}
