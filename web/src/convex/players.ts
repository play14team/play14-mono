import { query, mutation } from './_generated/server';
import { v } from 'convex/values';
import type { Id } from './_generated/dataModel';
import type { QueryCtx, MutationCtx } from './_generated/server';

// Query: Get single player by slug (matches GraphQL Player query)
export const get = query({
	args: { slug: v.string() },
	handler: async (ctx: QueryCtx, args: { slug: string }) => {
		const player = await ctx.db
			.query('players')
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			.withIndex('by_slug', (q: any) => q.eq('slug', args.slug))
			.unique();

		if (!player) {
			return null;
		}

		// Get related events to match GraphQL PlayerDetails fragment
		const [attendedEvents, hostedEvents, mentoredEvents] = await Promise.all([
			getPlayerAttendedEvents(ctx, player._id),
			getPlayerHostedEvents(ctx, player._id),
			getPlayerMentoredEvents(ctx, player._id)
		]);

		return {
			...player,
			attended: attendedEvents,
			hosted: hostedEvents,
			mentored: mentoredEvents
		};
	}
});

// Query: List players with pagination and filtering (matches GraphQL Players query)
export const list = query({
	args: {
		page: v.number(),
		pageSize: v.number(),
		position: v.optional(v.string())
	},
	handler: async (
		ctx: QueryCtx,
		args: {
			page: number;
			pageSize: number;
			position?: string;
		}
	) => {
		// Apply position filter and get all players
		const allPlayers = args.position
			? await ctx.db
					.query('players')
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					.withIndex('by_position', (q: any) => q.eq('position', args.position))
					.collect()
			: await ctx.db.query('players').collect();
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		allPlayers.sort((a: any, b: any) => a.name.localeCompare(b.name));

		// Apply pagination
		const total = allPlayers.length;
		const offset = (args.page - 1) * args.pageSize;
		const paginatedPlayers = allPlayers.slice(offset, offset + args.pageSize);

		return {
			data: paginatedPlayers,
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

// Mutation: Create new player
export const create = mutation({
	args: {
		name: v.string(),
		slug: v.string(),
		position: v.union(
			v.literal('Player'),
			v.literal('Host'),
			v.literal('Mentor'),
			v.literal('Founder')
		),
		company: v.optional(v.string()),
		tagline: v.optional(v.string()),
		bio: v.optional(v.string()),
		website: v.optional(v.string()),
		location: v.optional(
			v.object({
				lat: v.number(),
				lng: v.number(),
				address: v.optional(v.string())
			})
		),
		locationData: v.optional(v.any()),
		userId: v.optional(v.id('users')),
		strapiId: v.optional(v.number())
	},
	handler: async (
		ctx: MutationCtx,
		args: {
			name: string;
			slug: string;
			position: 'Player' | 'Host' | 'Mentor' | 'Founder';
			company?: string;
			tagline?: string;
			bio?: string;
			website?: string;
			location?: {
				lat: number;
				lng: number;
				address?: string;
			};
			locationData?: Record<string, unknown>;
			userId?: Id<'users'>;
			strapiId?: number;
		}
	) => {
		const playerId = await ctx.db.insert('players', {
			...args,
			socialNetworks: []
		});

		return playerId;
	}
});

// Mutation: Update player
export const update = mutation({
	args: {
		id: v.id('players'),
		name: v.optional(v.string()),
		slug: v.optional(v.string()),
		position: v.optional(
			v.union(v.literal('Player'), v.literal('Host'), v.literal('Mentor'), v.literal('Founder'))
		),
		company: v.optional(v.string()),
		tagline: v.optional(v.string()),
		bio: v.optional(v.string()),
		website: v.optional(v.string()),
		location: v.optional(
			v.object({
				lat: v.number(),
				lng: v.number(),
				address: v.optional(v.string())
			})
		),
		socialNetworks: v.optional(
			v.array(
				v.object({
					type: v.string(),
					url: v.string()
				})
			)
		),
		userId: v.optional(v.id('users'))
	},
	handler: async (
		ctx: MutationCtx,
		args: {
			id: Id<'players'>;
			name?: string;
			slug?: string;
			position?: 'Player' | 'Host' | 'Mentor' | 'Founder';
			company?: string;
			tagline?: string;
			bio?: string;
			website?: string;
			location?: {
				lat: number;
				lng: number;
				address?: string;
			};
			socialNetworks?: Array<{
				type: string;
				url: string;
			}>;
			userId?: Id<'users'>;
		}
	) => {
		const { id, ...updates } = args;

		await ctx.db.patch(id, updates);
		return id;
	}
});

// Mutation: Delete player
export const remove = mutation({
	args: { id: v.id('players') },
	handler: async (ctx: MutationCtx, args: { id: Id<'players'> }) => {
		// Remove related relationships
		const [hosted, mentored, attended, documented, proposed] = await Promise.all([
			ctx.db
				.query('eventHosts')
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				.withIndex('by_player', (q: any) => q.eq('playerId', args.id))
				.collect(),
			ctx.db
				.query('eventMentors')
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				.withIndex('by_player', (q: any) => q.eq('playerId', args.id))
				.collect(),
			ctx.db
				.query('eventAttendees')
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				.withIndex('by_player', (q: any) => q.eq('playerId', args.id))
				.collect(),
			ctx.db
				.query('gameDocumenters')
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				.withIndex('by_player', (q: any) => q.eq('playerId', args.id))
				.collect(),
			ctx.db
				.query('gameProposers')
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				.withIndex('by_player', (q: any) => q.eq('playerId', args.id))
				.collect()
		]);

		// Delete all relationships
		await Promise.all([
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			...hosted.map((h: any) => ctx.db.delete(h._id)),
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			...mentored.map((m: any) => ctx.db.delete(m._id)),
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			...attended.map((a: any) => ctx.db.delete(a._id)),
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			...documented.map((d: any) => ctx.db.delete(d._id)),
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			...proposed.map((p: any) => ctx.db.delete(p._id))
		]);

		// Delete the player
		await ctx.db.delete(args.id);
		return args.id;
	}
});

// Query: Get events attended by a player
export const getAttendedEvents = query({
	args: { playerId: v.id('players') },
	handler: async (ctx: QueryCtx, args: { playerId: Id<'players'> }) => {
		return await getPlayerAttendedEvents(ctx, args.playerId);
	}
});

// Query: Get events hosted by a player
export const getHostedEvents = query({
	args: { playerId: v.id('players') },
	handler: async (ctx: QueryCtx, args: { playerId: Id<'players'> }) => {
		return await getPlayerHostedEvents(ctx, args.playerId);
	}
});

// Query: Get events mentored by a player
export const getMentoredEvents = query({
	args: { playerId: v.id('players') },
	handler: async (ctx: QueryCtx, args: { playerId: Id<'players'> }) => {
		return await getPlayerMentoredEvents(ctx, args.playerId);
	}
});

// Helper functions
async function getPlayerAttendedEvents(ctx: QueryCtx, playerId: Id<'players'>) {
	const attendeeRelations = await ctx.db
		.query('eventAttendees')
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		.withIndex('by_player', (q: any) => q.eq('playerId', playerId))
		.collect();

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const events = await Promise.all(attendeeRelations.map((rel: any) => ctx.db.get(rel.eventId)));

	const filteredEvents = events.filter(Boolean);

	// Sort by start date (descending) to match GraphQL query
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	filteredEvents.sort((a: any, b: any) => b!.start - a!.start);

	// Get location data for each event
	const eventsWithLocations = await Promise.all(
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		filteredEvents.map(async (event: any) => {
			const location = event!.locationId ? await ctx.db.get(event!.locationId) : null;
			return {
				...event,
				location
			};
		})
	);

	return eventsWithLocations;
}

async function getPlayerHostedEvents(ctx: QueryCtx, playerId: Id<'players'>) {
	const hostRelations = await ctx.db
		.query('eventHosts')
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		.withIndex('by_player', (q: any) => q.eq('playerId', playerId))
		.collect();

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const events = await Promise.all(hostRelations.map((rel: any) => ctx.db.get(rel.eventId)));

	const filteredEvents = events.filter(Boolean);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	filteredEvents.sort((a: any, b: any) => b!.start - a!.start);

	// Get location data for each event
	const eventsWithLocations = await Promise.all(
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		filteredEvents.map(async (event: any) => {
			const location = event!.locationId ? await ctx.db.get(event!.locationId) : null;
			return {
				...event,
				location
			};
		})
	);

	return eventsWithLocations;
}

async function getPlayerMentoredEvents(ctx: QueryCtx, playerId: Id<'players'>) {
	const mentorRelations = await ctx.db
		.query('eventMentors')
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		.withIndex('by_player', (q: any) => q.eq('playerId', playerId))
		.collect();

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const events = await Promise.all(mentorRelations.map((rel: any) => ctx.db.get(rel.eventId)));

	const filteredEvents = events.filter(Boolean);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	filteredEvents.sort((a: any, b: any) => b!.start - a!.start);

	// Get location data for each event
	const eventsWithLocations = await Promise.all(
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		filteredEvents.map(async (event: any) => {
			const location = event!.locationId ? await ctx.db.get(event!.locationId) : null;
			return {
				...event,
				location
			};
		})
	);

	return eventsWithLocations;
}
