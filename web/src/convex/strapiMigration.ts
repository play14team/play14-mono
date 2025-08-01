import { v } from 'convex/values';
import { action, mutation, query, internalMutation, internalQuery } from './_generated/server';
import { internal } from './_generated/api';
import type { Id } from './_generated/dataModel';
import { MIGRATION_QUERIES, type MigrationContentType } from './strapiMigrationQueries';

// Base Strapi response structure
interface StrapiResponse<T> {
	data: Array<{
		id: string;
		attributes: T;
	}>;
	meta: {
		pagination: {
			page: number;
			pageSize: number;
			total: number;
			pageCount: number;
		};
	};
}

// Migration result interface
interface MigrationResult {
	success: boolean;
	contentType: string;
	totalFetched: number;
	totalMigrated: number;
	errors: string[];
	duration: number;
}

/**
 * Fetch data from Strapi GraphQL API using migration queries
 */
export const fetchStrapiData = action({
	args: {
		contentType: v.string(),
		strapiUrl: v.optional(v.string()),
		strapiSecret: v.optional(v.string())
	},
	handler: async (ctx, args): Promise<{ success: boolean; data?: unknown; error?: string }> => {
		const strapiUrl = args.strapiUrl || process.env.STRAPI_API_URL;
		const strapiSecret = args.strapiSecret || process.env.STRAPI_API_SECRET;

		if (!strapiUrl || !strapiSecret) {
			return { success: false, error: 'Strapi URL and secret must be configured' };
		}

		const contentType = args.contentType as MigrationContentType;
		const query = MIGRATION_QUERIES[contentType];

		if (!query) {
			return { success: false, error: `Unknown content type: ${contentType}` };
		}

		try {
			console.log(`Fetching ${contentType} data from Strapi GraphQL...`);
			console.log(`URL: ${strapiUrl}/graphql`);
			console.log(`Query length: ${query.length} characters`);

			const response = await fetch(`${strapiUrl}/graphql`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${strapiSecret}`
				},
				body: JSON.stringify({ query })
			});

			if (!response.ok) {
				return {
					success: false,
					error: `GraphQL request failed: ${response.status} ${response.statusText}`
				};
			}

			const result = await response.json();

			if (result.errors) {
				return {
					success: false,
					error: `GraphQL errors: ${JSON.stringify(result.errors)}`
				};
			}

			console.log(`Successfully fetched ${contentType} data from Strapi`);
			return { success: true, data: result.data };
		} catch (error) {
			console.error(`Error fetching ${contentType} data:`, error);
			return {
				success: false,
				error: error instanceof Error ? error.message : 'Unknown error'
			};
		}
	}
});

/**
 * TAGS MIGRATION - Simple content type to start with
 */

interface StrapiTag {
	value: string;
	createdAt: string;
	updatedAt: string;
}

export const migrateTagsData = mutation({
	args: {
		strapiData: v.any()
	},
	handler: async (ctx, args) => {
		const tags = args.strapiData as StrapiResponse<StrapiTag>;
		const results = [];

		for (const tag of tags.data) {
			try {
				// Check if tag already exists
				const existing = await ctx.db
					.query('tags')
					.filter((q) => q.eq(q.field('strapiId'), tag.id))
					.first();

				if (existing) {
					console.log(`Tag ${tag.attributes.value} already exists, skipping`);
					continue;
				}

				// Insert new tag
				const tagId = await ctx.db.insert('tags', {
					strapiId: tag.id,
					value: tag.attributes.value
				});

				// Track ID mapping
				await ctx.db.insert('idMappings', {
					strapiType: 'tag',
					strapiId: tag.id,
					convexId: tagId
				});

				results.push({ success: true, strapiId: tag.id, convexId: tagId });
			} catch (error) {
				console.error(`Error migrating tag ${tag.id}:`, error);
				results.push({
					success: false,
					strapiId: tag.id,
					error: error instanceof Error ? error.message : 'Unknown error'
				});
			}
		}

		return {
			totalProcessed: tags.data.length,
			successful: results.filter((r) => r.success).length,
			failed: results.filter((r) => !r.success).length,
			results
		};
	}
});

/**
 * EXPECTATIONS MIGRATION - Another simple content type
 */

interface StrapiExpectation {
	title: string;
	type: string;
	icon: string;
	content: string;
	createdAt: string;
	updatedAt: string;
}

export const migrateExpectationsData = mutation({
	args: {
		strapiData: v.any()
	},
	handler: async (ctx, args) => {
		const expectations = args.strapiData as StrapiResponse<StrapiExpectation>;
		const results = [];

		for (const expectation of expectations.data) {
			try {
				// Check if expectation already exists
				const existing = await ctx.db
					.query('expectations')
					.filter((q) => q.eq(q.field('strapiId'), expectation.id))
					.first();

				if (existing) {
					console.log(`Expectation ${expectation.attributes.title} already exists, skipping`);
					continue;
				}

				// Insert new expectation
				const expectationId = await ctx.db.insert('expectations', {
					strapiId: expectation.id,
					title: expectation.attributes.title,
					type: expectation.attributes.type as 'Main' | 'Secondary',
					icon: expectation.attributes.icon,
					content: expectation.attributes.content
				});

				// Track ID mapping
				await ctx.db.insert('idMappings', {
					strapiType: 'expectation',
					strapiId: expectation.id,
					convexId: expectationId
				});

				results.push({ success: true, strapiId: expectation.id, convexId: expectationId });
			} catch (error) {
				console.error(`Error migrating expectation ${expectation.id}:`, error);
				results.push({
					success: false,
					strapiId: expectation.id,
					error: error instanceof Error ? error.message : 'Unknown error'
				});
			}
		}

		return {
			totalProcessed: expectations.data.length,
			successful: results.filter((r) => r.success).length,
			failed: results.filter((r) => !r.success).length,
			results
		};
	}
});

/**
 * INTERNAL MUTATIONS - Database operations called from actions
 */

export const insertPlayer = internalMutation({
	args: {
		strapiId: v.string(),
		name: v.string(),
		slug: v.string(),
		position: v.union(
			v.literal('Player'),
			v.literal('Host'),
			v.literal('Mentor'),
			v.literal('Founder')
		),
		company: v.union(v.string(), v.null()),
		tagline: v.union(v.string(), v.null()),
		bio: v.union(v.string(), v.null()),
		website: v.union(v.string(), v.null()),
		avatarId: v.optional(v.string()),
		location: v.optional(
			v.object({
				lat: v.number(),
				lng: v.number(),
				address: v.optional(v.string())
			})
		),
		locationOriginal: v.optional(v.string()),
		socialNetworks: v.array(
			v.object({
				type: v.string(),
				url: v.string()
			})
		)
	},
	handler: async (ctx, args) => {
		const playerId = await ctx.db.insert('players', {
			strapiId: args.strapiId,
			name: args.name,
			slug: args.slug,
			position: args.position,
			company: args.company || undefined,
			tagline: args.tagline || undefined,
			bio: args.bio || undefined,
			website: args.website || undefined,
			avatarId: args.avatarId as Id<'_storage'> | undefined,
			location: args.location,
			locationOriginal: args.locationOriginal,
			socialNetworks: args.socialNetworks
		});

		// Track ID mapping
		await ctx.db.insert('idMappings', {
			strapiType: 'player',
			strapiId: args.strapiId,
			convexId: playerId
		});

		return playerId;
	}
});

export const insertVenue = internalMutation({
	args: {
		strapiId: v.string(),
		name: v.string(),
		website: v.optional(v.string()),
		location: v.optional(
			v.object({
				lat: v.number(),
				lng: v.number(),
				address: v.optional(v.string())
			})
		),
		locationOriginal: v.optional(v.string()),
		addressDetails: v.optional(v.string()),
		socialNetworks: v.array(
			v.object({
				type: v.string(),
				url: v.string()
			})
		)
	},
	handler: async (ctx, args) => {
		const venueId = await ctx.db.insert('venues', {
			strapiId: args.strapiId,
			name: args.name,
			website: args.website,
			location: args.location,
			locationOriginal: args.locationOriginal,
			addressDetails: args.addressDetails,
			socialNetworks: args.socialNetworks
		});

		// Track ID mapping
		await ctx.db.insert('idMappings', {
			strapiType: 'venue',
			strapiId: args.strapiId,
			convexId: venueId
		});

		return venueId;
	}
});

export const insertSponsor = internalMutation({
	args: {
		strapiId: v.string(),
		name: v.string(),
		url: v.optional(v.string()),
		logo: v.optional(v.string()),
		socialNetworks: v.array(
			v.object({
				type: v.string(),
				url: v.string()
			})
		)
	},
	handler: async (ctx, args) => {
		const sponsorId = await ctx.db.insert('sponsors', {
			strapiId: args.strapiId,
			name: args.name,
			url: args.url,
			logo: args.logo as Id<'_storage'> | undefined,
			socialNetworks: args.socialNetworks
		});

		// Track ID mapping
		await ctx.db.insert('idMappings', {
			strapiType: 'sponsor',
			strapiId: args.strapiId,
			convexId: sponsorId
		});

		return sponsorId;
	}
});

export const checkPlayerExists = internalQuery({
	args: {
		strapiId: v.string()
	},
	handler: async (ctx, args) => {
		return await ctx.db
			.query('players')
			.filter((q) => q.eq(q.field('strapiId'), args.strapiId))
			.first();
	}
});

export const checkVenueExists = internalQuery({
	args: {
		strapiId: v.string()
	},
	handler: async (ctx, args) => {
		return await ctx.db
			.query('venues')
			.filter((q) => q.eq(q.field('strapiId'), args.strapiId))
			.first();
	}
});

export const checkSponsorExists = internalQuery({
	args: {
		strapiId: v.string()
	},
	handler: async (ctx, args) => {
		return await ctx.db
			.query('sponsors')
			.filter((q) => q.eq(q.field('strapiId'), args.strapiId))
			.first();
	}
});

/**
 * PLAYERS MIGRATION - Complex content type with files and relationships
 */

interface StrapiFile {
	id: string;
	attributes: {
		name: string;
		url: string;
		blurhash?: string;
		width?: number;
		height?: number;
		hash: string;
		mime: string;
		provider: string;
		size: number;
	};
}

interface StrapiSocialNetwork {
	id: string;
	url: string;
	type: string;
}

interface StrapiPlayer {
	slug: string;
	name: string;
	position: string;
	company?: string;
	tagline?: string;
	bio?: string;
	website?: string;
	location?: {
		center?: [number, number];
		place_name?: string;
		text?: string;
		[key: string]: unknown;
	};
	avatar?: { data?: StrapiFile };
	socialNetworks: StrapiSocialNetwork[];
	createdAt: string;
	updatedAt: string;
}

export const migratePlayersData = action({
	args: {
		strapiData: v.record(v.string(), v.any())
	},
	handler: async (
		ctx,
		args
	): Promise<{
		totalProcessed: number;
		successful: number;
		failed: number;
		results: Array<{ success: boolean; strapiId: string; convexId?: string; error?: string }>;
	}> => {
		const players = args.strapiData as StrapiResponse<StrapiPlayer>;
		const results = [];

		console.log(`Starting migration of ${players.data.length} players...`);

		for (const player of players.data) {
			try {
				console.log(`Processing player: ${player.attributes.name} (${player.id})`);

				// Check if player already exists
				const existing = await ctx.runQuery(internal.strapiMigration.checkPlayerExists, {
					strapiId: player.id
				});

				if (existing) {
					console.log(`Player ${player.attributes.name} already exists, skipping`);
					continue;
				}

				console.log(`Player ${player.attributes.name} does not exist, proceeding with migration`);

				// Note: Avatar migration will be handled in a separate step
				const avatarId = undefined;

				// Parse location (Mapbox format)
				let location: { lat: number; lng: number; address?: string } | undefined;
				let locationOriginal: string | undefined;

				if (player.attributes.location) {
					locationOriginal = JSON.stringify(player.attributes.location);
					try {
						// For Mapbox format, center contains [lng, lat]
						if (
							player.attributes.location.center &&
							player.attributes.location.center.length >= 2
						) {
							location = {
								lng: player.attributes.location.center[0],
								lat: player.attributes.location.center[1],
								address: player.attributes.location.place_name || player.attributes.location.text
							};
						}
					} catch {
						// If parsing fails, just store the original
						location = undefined;
					}
				}

				// Map social networks
				const socialNetworks =
					player.attributes.socialNetworks?.map((sn) => ({
						type: sn.type,
						url: sn.url
					})) || [];

				// Validate and map position
				const validPositions = ['Player', 'Host', 'Mentor', 'Founder'] as const;
				const position = validPositions.includes(
					player.attributes.position as 'Player' | 'Host' | 'Mentor' | 'Founder'
				)
					? (player.attributes.position as 'Player' | 'Host' | 'Mentor' | 'Founder')
					: 'Player'; // Default to Player if position is invalid

				console.log(`About to insert player with data:`, {
					strapiId: player.id,
					name: player.attributes.name,
					position,
					location,
					socialNetworksCount: socialNetworks.length
				});

				// Insert new player using internal mutation
				const playerId: string = await ctx.runMutation(internal.strapiMigration.insertPlayer, {
					strapiId: player.id,
					name: player.attributes.name,
					slug: player.attributes.slug,
					position,
					company: player.attributes.company || null,
					tagline: player.attributes.tagline || null,
					bio: player.attributes.bio || null,
					website: player.attributes.website || null,
					avatarId,
					location,
					locationOriginal,
					socialNetworks
				});

				console.log(`Successfully inserted player with convex ID: ${playerId}`);

				// Note: Event relationships will be handled after events migration

				results.push({ success: true, strapiId: player.id, convexId: playerId });
				console.log(`Successfully migrated player: ${player.attributes.name}`);
			} catch (error) {
				console.error(`Error migrating player ${player.id}:`, error);
				results.push({
					success: false,
					strapiId: player.id,
					error: error instanceof Error ? error.message : 'Unknown error'
				});
			}
		}

		return {
			totalProcessed: players.data.length,
			successful: results.filter((r) => r.success).length,
			failed: results.filter((r) => !r.success).length,
			results
		};
	}
});

/**
 * VENUES MIGRATION - Supporting content type with location data
 */

interface StrapiVenue {
	name: string;
	website?: string;
	location?: {
		center?: [number, number];
		place_name?: string;
		address?: string;
		[key: string]: unknown;
	};
	addressDetails?: string;
	createdAt: string;
	updatedAt: string;
}

export const migrateVenuesData = action({
	args: {
		strapiData: v.record(v.string(), v.any())
	},
	handler: async (
		ctx,
		args
	): Promise<{
		totalProcessed: number;
		successful: number;
		failed: number;
		results: Array<{ success: boolean; strapiId: string; convexId?: string; error?: string }>;
	}> => {
		const venues = args.strapiData as StrapiResponse<StrapiVenue>;
		const results = [];

		console.log(`Starting migration of ${venues.data.length} venues...`);

		for (const venue of venues.data) {
			try {
				// Check if venue already exists
				const existing = await ctx.runQuery(internal.strapiMigration.checkVenueExists, {
					strapiId: venue.id
				});

				if (existing) {
					console.log(`Venue ${venue.attributes.name} already exists, skipping`);
					continue;
				}

				// Parse location if it exists
				let location: { lat: number; lng: number; address?: string } | undefined;
				let locationOriginal: string | undefined;

				if (venue.attributes.location) {
					locationOriginal = JSON.stringify(venue.attributes.location);
					try {
						// Extract coordinates from Mapbox location data
						if (venue.attributes.location.center && venue.attributes.location.center.length >= 2) {
							location = {
								lng: venue.attributes.location.center[0],
								lat: venue.attributes.location.center[1],
								address: venue.attributes.location.place_name || venue.attributes.location.address
							};
						}
					} catch {
						// If parsing fails, just store the original
						location = undefined;
					}
				}

				// Insert new venue using internal mutation
				const venueId: string = await ctx.runMutation(internal.strapiMigration.insertVenue, {
					strapiId: venue.id,
					name: venue.attributes.name,
					website: venue.attributes.website,
					location,
					locationOriginal,
					addressDetails: venue.attributes.addressDetails,
					socialNetworks: [] // Venues don't seem to have social networks in the query
				});

				results.push({ success: true, strapiId: venue.id, convexId: venueId });
				console.log(`Successfully migrated venue: ${venue.attributes.name}`);
			} catch (error) {
				console.error(`Error migrating venue ${venue.id}:`, error);
				results.push({
					success: false,
					strapiId: venue.id,
					error: error instanceof Error ? error.message : 'Unknown error'
				});
			}
		}

		return {
			totalProcessed: venues.data.length,
			successful: results.filter((r) => r.success).length,
			failed: results.filter((r) => !r.success).length,
			results
		};
	}
});

/**
 * SPONSORS MIGRATION - Supporting content type with logos and social networks
 */

interface StrapiSponsor {
	name: string;
	url?: string;
	logo?: { data?: StrapiFile };
	socialNetworks: StrapiSocialNetwork[];
	createdAt: string;
	updatedAt: string;
}

export const migrateSponsorsData = action({
	args: {
		strapiData: v.record(v.string(), v.any())
	},
	handler: async (
		ctx,
		args
	): Promise<{
		totalProcessed: number;
		successful: number;
		failed: number;
		results: Array<{ success: boolean; strapiId: string; convexId?: string; error?: string }>;
	}> => {
		const sponsors = args.strapiData as StrapiResponse<StrapiSponsor>;
		const results = [];

		console.log(`Starting migration of ${sponsors.data.length} sponsors...`);

		for (const sponsor of sponsors.data) {
			try {
				// Check if sponsor already exists
				const existing = await ctx.runQuery(internal.strapiMigration.checkSponsorExists, {
					strapiId: sponsor.id
				});

				if (existing) {
					console.log(`Sponsor ${sponsor.attributes.name} already exists, skipping`);
					continue;
				}

				// Note: Logo migration will be handled in a separate step
				const logoId = undefined;

				// Map social networks
				const socialNetworks =
					sponsor.attributes.socialNetworks?.map((sn) => ({
						type: sn.type,
						url: sn.url
					})) || [];

				// Insert new sponsor using internal mutation
				const sponsorId: string = await ctx.runMutation(internal.strapiMigration.insertSponsor, {
					strapiId: sponsor.id,
					name: sponsor.attributes.name,
					url: sponsor.attributes.url,
					logo: logoId,
					socialNetworks
				});

				results.push({ success: true, strapiId: sponsor.id, convexId: sponsorId });
				console.log(`Successfully migrated sponsor: ${sponsor.attributes.name}`);
			} catch (error) {
				console.error(`Error migrating sponsor ${sponsor.id}:`, error);
				results.push({
					success: false,
					strapiId: sponsor.id,
					error: error instanceof Error ? error.message : 'Unknown error'
				});
			}
		}

		return {
			totalProcessed: sponsors.data.length,
			successful: results.filter((r) => r.success).length,
			failed: results.filter((r) => !r.success).length,
			results
		};
	}
});

/**
 * Complete migration workflow for a single content type
 */
export const migrateSingleContentType = action({
	args: {
		contentType: v.string(),
		strapiUrl: v.optional(v.string()),
		strapiSecret: v.optional(v.string())
	},
	handler: async (ctx, args): Promise<MigrationResult> => {
		const startTime = Date.now();
		const result: MigrationResult = {
			success: false,
			contentType: args.contentType,
			totalFetched: 0,
			totalMigrated: 0,
			errors: [],
			duration: 0
		};

		try {
			// Step 1: Fetch data from Strapi
			const fetchResult = await ctx.runAction(
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				(internal as any).strapiMigration.fetchStrapiData,
				{
					contentType: args.contentType,
					strapiUrl: args.strapiUrl,
					strapiSecret: args.strapiSecret
				}
			);

			if (!fetchResult.success || !fetchResult.data) {
				result.errors.push(fetchResult.error || 'Failed to fetch data');
				return result;
			}

			// Step 2: Process based on content type
			let migrationResult;
			switch (args.contentType) {
				case 'tags':
					migrationResult = await ctx.runMutation(
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						(internal as any).strapiMigration.migrateTagsData,
						{
							strapiData: (fetchResult.data as { tags: unknown }).tags
						}
					);
					break;

				case 'expectations':
					migrationResult = await ctx.runMutation(
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						(internal as any).strapiMigration.migrateExpectationsData,
						{
							strapiData: (fetchResult.data as { expectations: unknown }).expectations
						}
					);
					break;

				case 'players':
					migrationResult = await ctx.runAction(
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						(internal as any).strapiMigration.migratePlayersData,
						{
							strapiData: (fetchResult.data as { players: unknown }).players
						}
					);
					break;

				case 'venues':
					migrationResult = await ctx.runAction(
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						(internal as any).strapiMigration.migrateVenuesData,
						{
							strapiData: (fetchResult.data as { venues: unknown }).venues
						}
					);
					break;

				case 'sponsors':
					migrationResult = await ctx.runAction(
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						(internal as any).strapiMigration.migrateSponsorsData,
						{
							strapiData: (fetchResult.data as { sponsors: unknown }).sponsors
						}
					);
					break;

				default:
					result.errors.push(`Migration not implemented for content type: ${args.contentType}`);
					return result;
			}

			result.totalFetched = migrationResult.totalProcessed;
			result.totalMigrated = migrationResult.successful;
			result.success = migrationResult.failed === 0;

			if (migrationResult.failed > 0) {
				result.errors.push(`${migrationResult.failed} items failed to migrate`);
			}
		} catch (error) {
			result.errors.push(error instanceof Error ? error.message : 'Unknown error');
		}

		result.duration = Date.now() - startTime;
		return result;
	}
});

/**
 * Debug function to test single player migration
 */
export const debugSinglePlayer = action({
	args: {
		playerData: v.record(v.string(), v.any())
	},
	handler: async (ctx, args) => {
		try {
			const player = args.playerData;
			console.log('Player data:', JSON.stringify(player, null, 2));

			// Validate position
			const validPositions = ['Player', 'Host', 'Mentor', 'Founder'] as const;
			const position = validPositions.includes(
				player.attributes.position as 'Player' | 'Host' | 'Mentor' | 'Founder'
			)
				? (player.attributes.position as 'Player' | 'Host' | 'Mentor' | 'Founder')
				: 'Player';
			console.log('Position validation:', player.attributes.position, '->', position);

			// Parse location
			let location: { lat: number; lng: number; address?: string } | undefined;
			let locationOriginal: string | undefined;

			if (player.attributes.location) {
				locationOriginal = JSON.stringify(player.attributes.location);
				console.log('Location original:', locationOriginal.substring(0, 200) + '...');
				try {
					// For Mapbox format, center contains [lng, lat]
					if (player.attributes.location.center && player.attributes.location.center.length >= 2) {
						location = {
							lng: player.attributes.location.center[0],
							lat: player.attributes.location.center[1],
							address: player.attributes.location.place_name || player.attributes.location.text
						};
						console.log('Parsed location:', location);
					}
				} catch (error) {
					console.log('Location parsing error:', error);
				}
			}

			// Map social networks
			const socialNetworks =
				player.attributes.socialNetworks?.map((sn: { type: string; url: string }) => ({
					type: sn.type,
					url: sn.url
				})) || [];
			console.log('Social networks:', socialNetworks);

			return {
				success: true,
				playerName: player.attributes.name,
				position,
				location,
				socialNetworks
			};
		} catch (error) {
			console.error('Debug error:', error);
			return {
				success: false,
				error: error instanceof Error ? error.message : 'Unknown error'
			};
		}
	}
});

/**
 * Test migration status and utilities
 */
export const getMigrationStatus = action({
	args: {
		contentType: v.optional(v.string())
	},
	handler: async (
		ctx,
		args
	): Promise<{ contentType?: string; count?: number; tags?: number; expectations?: number }> => {
		if (args.contentType) {
			// Get count for specific content type
			const tableName = args.contentType === 'expectations' ? 'expectations' : 'tags';
			const count = await ctx.runQuery(
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				(internal as any).strapiMigration.getContentCount,
				{
					tableName
				}
			);
			return { contentType: args.contentType, count };
		}

		// Get counts for all implemented content types
		const tagsCount = await ctx.runQuery(
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(internal as any).strapiMigration.getContentCount,
			{
				tableName: 'tags'
			}
		);
		const expectationsCount = await ctx.runQuery(
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(internal as any).strapiMigration.getContentCount,
			{
				tableName: 'expectations'
			}
		);

		return {
			tags: tagsCount,
			expectations: expectationsCount
		};
	}
});

export const getContentCount = query({
	args: {
		tableName: v.string()
	},
	handler: async (ctx, args): Promise<number> => {
		const results = await ctx.db
			.query(args.tableName as 'tags' | 'expectations' | 'players' | 'venues' | 'sponsors')
			.collect();
		return results.length;
	}
});

/**
 * Clear migration data for testing
 */
export const clearMigrationData = mutation({
	args: {
		contentType: v.string()
	},
	handler: async (ctx, args) => {
		const validContentTypes = ['tags', 'expectations', 'players', 'venues', 'sponsors'] as const;
		const tableName = validContentTypes.includes(
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			args.contentType as any
		)
			? (args.contentType as (typeof validContentTypes)[number])
			: 'tags';

		const items = await ctx.db.query(tableName).collect();
		const mappings = await ctx.db
			.query('idMappings')
			.filter((q) => q.eq(q.field('strapiType'), args.contentType))
			.collect();

		// Delete all items
		for (const item of items) {
			await ctx.db.delete(item._id);
		}

		// Delete all mappings
		for (const mapping of mappings) {
			await ctx.db.delete(mapping._id);
		}

		return {
			deletedItems: items.length,
			deletedMappings: mappings.length
		};
	}
});
