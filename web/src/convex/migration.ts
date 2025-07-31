import { api } from './_generated/api';
import type { ActionCtx, MutationCtx } from './_generated/server';
import { action, mutation, query } from './_generated/server';
import { processImageField, processImagesField } from './migrationHelpers';

// Environment variables are configured in Convex Dashboard
// and accessible in actions only (not in mutations)

export const getMigrationStatus = query({
	args: {},
	handler: async (ctx) => {
		const tables = [
			'events',
			'games',
			'players',
			'articles',
			'eventLocations',
			'venues',
			'sponsors',
			'tags',
			'home',
			'eventHosts',
			'eventMentors',
			'eventAttendees',
			'gameDocumenters',
			'gameProposers',
			'articleTags',
			'expectations',
			'testimonials',
			'formats',
			'history',
			'hosting'
		];

		const status: Record<string, number> = {};

		for (const table of tables) {
			try {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				const count = await ctx.db.query(table as any).collect();
				status[table] = count.length;
			} catch {
				status[table] = -1; // Error
			}
		}

		return status;
	}
});

// Helper function to find existing record by strapiId
async function findByStrapiId(ctx: MutationCtx, table: string, strapiId: number) {
	const records = await ctx.db
		.query(table as never)
		.withIndex('by_strapi_id', (q) => q.eq('strapiId', strapiId))
		.collect();
	return records.length > 0 ? records[0] : null;
}

// Helper function to upsert record (insert or update based on strapiId)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function upsertRecord(ctx: MutationCtx, table: string, strapiId: number, data: any) {
	const existing = await findByStrapiId(ctx, table, strapiId);

	if (existing) {
		// Update existing record
		await ctx.db.patch(existing._id, { ...data, strapiId });
		console.log(`✏️ Updated existing ${table} record with strapiId ${strapiId}`);
		return existing._id;
	} else {
		// Insert new record
		const newId = await ctx.db.insert(table as never, { ...data, strapiId });
		console.log(`➕ Created new ${table} record with strapiId ${strapiId}`);
		return newId;
	}
}

// Internal function for Home migration
// Note: This function can only work when called from an action that provides the data
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function migrateHomeInternal(ctx: MutationCtx, homeData?: any) {
	console.log('🏠 Starting Home migration...');

	try {
		if (!homeData) {
			throw new Error('Home data must be provided - mutations cannot fetch from external APIs');
		}

		// homeData is now passed as parameter
		if (!homeData) {
			console.log('No home data found');
			return { success: true, message: 'No home data to migrate' };
		}

		// Clear existing home data
		const existingHome = await ctx.db.query('home').collect();
		await Promise.all(existingHome.map((h) => ctx.db.delete(h._id)));

		// Process images
		const imageIds = await processImagesField(ctx, homeData.images);

		await ctx.db.insert('home', {
			imageIds
		});

		console.log('✅ Home migration completed');
		return { success: true, message: 'Home migrated successfully' };
	} catch (error) {
		console.error('❌ Home migration failed:', error);
		throw error;
	}
}

// Migration for Home page (single type)
export const migrateHome = mutation({
	args: {},
	handler: migrateHomeInternal
});

// Internal function for Tags migration
// Note: This function can only work when called from an action that provides the data
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function migrateTagsInternal(ctx: MutationCtx, tags?: any[]) {
	console.log('🏷️ Starting Tags migration...');

	try {
		if (!tags) {
			throw new Error('Tags data must be provided - mutations cannot fetch from external APIs');
		}

		// Clear existing tags
		const existingTags = await ctx.db.query('tags').collect();
		await Promise.all(existingTags.map((t) => ctx.db.delete(t._id)));

		let migratedCount = 0;
		for (const tag of tags) {
			await upsertRecord(ctx, 'tags', tag.id, {
				value: tag.attributes.value
			});
			migratedCount++;
		}

		console.log(`✅ Tags migration completed: ${migratedCount} tags`);
		return { success: true, message: `${migratedCount} tags migrated successfully` };
	} catch (error) {
		console.error('❌ Tags migration failed:', error);
		throw error;
	}
}

// Migration for Tags
export const migrateTags = mutation({
	args: {},
	handler: migrateTagsInternal
});

// Internal function for Event Locations migration
// Note: This function can only work when called from an action that provides the data
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function migrateEventLocationsInternal(ctx: MutationCtx, locations?: any[]) {
	console.log('📍 Starting Event Locations migration...');

	try {
		if (!locations) {
			throw new Error(
				'Event Locations data must be provided - mutations cannot fetch from external APIs'
			);
		}

		// Clear existing event locations
		const existingLocations = await ctx.db.query('eventLocations').collect();
		await Promise.all(existingLocations.map((l) => ctx.db.delete(l._id)));

		let migratedCount = 0;
		for (const location of locations) {
			const attrs = location.attributes;

			await upsertRecord(ctx, 'eventLocations', location.id, {
				name: attrs.name,
				country: attrs.country || '',
				location: attrs.location
					? {
							lat: attrs.location.lat,
							lng: attrs.location.lng
						}
					: undefined
			});
			migratedCount++;
		}

		console.log(`✅ Event Locations migration completed: ${migratedCount} locations`);
		return { success: true, message: `${migratedCount} event locations migrated successfully` };
	} catch (error) {
		console.error('❌ Event Locations migration failed:', error);
		throw error;
	}
}

// Migration for Event Locations
export const migrateEventLocations = mutation({
	args: {},
	handler: migrateEventLocationsInternal
});

// Internal function for Sponsors migration
// Note: This function can only work when called from an action that provides the data
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function migrateSponsorsInternal(ctx: MutationCtx, sponsors?: any[]) {
	console.log('🏢 Starting Sponsors migration...');

	try {
		if (!sponsors) {
			throw new Error('Sponsors data must be provided - mutations cannot fetch from external APIs');
		}

		// Clear existing sponsors
		const existingSponsors = await ctx.db.query('sponsors').collect();
		await Promise.all(existingSponsors.map((s) => ctx.db.delete(s._id)));

		let migratedCount = 0;
		for (const sponsor of sponsors) {
			const attrs = sponsor.attributes;

			// Process logo
			const logoId = await processImageField(ctx, attrs.logo);

			await upsertRecord(ctx, 'sponsors', sponsor.id, {
				name: attrs.name,
				url: attrs.url || undefined,
				logoId,
				socialNetworks:
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					attrs.socialNetworks?.map((sn: any) => ({
						type: sn.type,
						url: sn.url
					})) || []
			});
			migratedCount++;
		}

		console.log(`✅ Sponsors migration completed: ${migratedCount} sponsors`);
		return { success: true, message: `${migratedCount} sponsors migrated successfully` };
	} catch (error) {
		console.error('❌ Sponsors migration failed:', error);
		throw error;
	}
}

// Migration for Sponsors
export const migrateSponsors = mutation({
	args: {},
	handler: migrateSponsorsInternal
});

// Internal function for Venues migration
// Note: This function can only work when called from an action that provides the data
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function migrateVenuesInternal(ctx: MutationCtx, venues?: any[]) {
	console.log('🏛️ Starting Venues migration...');

	try {
		if (!venues) {
			throw new Error('Venues data must be provided - mutations cannot fetch from external APIs');
		}

		// Clear existing venues
		const existingVenues = await ctx.db.query('venues').collect();
		await Promise.all(existingVenues.map((v) => ctx.db.delete(v._id)));

		let migratedCount = 0;
		for (const venue of venues) {
			const attrs = venue.attributes;

			await upsertRecord(ctx, 'venues', venue.id, {
				name: attrs.name,
				website: attrs.website || undefined,
				location: attrs.location
					? {
							lat: attrs.location.lat,
							lng: attrs.location.lng
						}
					: undefined,
				addressDetails: attrs.addressDetails || undefined
			});
			migratedCount++;
		}

		console.log(`✅ Venues migration completed: ${migratedCount} venues`);
		return { success: true, message: `${migratedCount} venues migrated successfully` };
	} catch (error) {
		console.error('❌ Venues migration failed:', error);
		throw error;
	}
}

// Migration for Venues
export const migrateVenues = mutation({
	args: {},
	handler: migrateVenuesInternal
});

// Internal function for Players migration
// Note: This function can only work when called from an action that provides the data
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function migratePlayersInternal(ctx: MutationCtx, players?: any[]) {
	console.log('👥 Starting Players migration...');

	try {
		if (!players) {
			throw new Error('Players data must be provided - mutations cannot fetch from external APIs');
		}

		// Clear existing players
		const existingPlayers = await ctx.db.query('players').collect();
		await Promise.all(existingPlayers.map((p) => ctx.db.delete(p._id)));

		let migratedCount = 0;
		for (const player of players) {
			const attrs = player.attributes;

			// Process avatar
			const avatarId = await processImageField(ctx, attrs.avatar);

			await upsertRecord(ctx, 'players', player.id, {
				name: attrs.name,
				slug: attrs.slug,
				position: attrs.position as 'Player' | 'Host' | 'Mentor' | 'Founder',
				company: attrs.company || undefined,
				tagline: attrs.tagline || undefined,
				bio: attrs.bio || undefined,
				website: attrs.website || undefined,
				avatarId,
				location: attrs.location
					? {
							lat: attrs.location.lat,
							lng: attrs.location.lng,
							address: attrs.location.address
						}
					: undefined,
				socialNetworks:
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					attrs.socialNetworks?.map((sn: any) => ({
						type: sn.type,
						url: sn.url
					})) || [],
				userId: undefined // TODO: Link to users if needed
			});
			migratedCount++;
		}

		console.log(`✅ Players migration completed: ${migratedCount} players`);
		return { success: true, message: `${migratedCount} players migrated successfully` };
	} catch (error) {
		console.error('❌ Players migration failed:', error);
		throw error;
	}
}

// Migration for Players
export const migratePlayers = mutation({
	args: {},
	handler: migratePlayersInternal
});

// Note: This mutation is deprecated - use runPhase1Migration action instead
// Mutations cannot fetch external data, so we need to use actions
export const runCoreDataMigration = mutation({
	args: {},
	handler: async () => {
		throw new Error(
			'This mutation is deprecated. Use runPhase1Migration action instead, which properly handles environment variables and external API calls.'
		);
	}
});

// Test connection to Strapi API
export const testConnection = action({
	args: {},
	handler: async () => {
		try {
			const STRAPI_API_URL = process.env.STRAPI_API_URL;
			const STRAPI_API_SECRET = process.env.STRAPI_API_SECRET;

			if (!STRAPI_API_URL || !STRAPI_API_SECRET) {
				throw new Error(
					'Missing required environment variables: STRAPI_API_URL and STRAPI_API_SECRET'
				);
			}

			const response = await fetch(`${STRAPI_API_URL}/api/tags?pagination[limit]=1`, {
				headers: {
					Authorization: `Bearer ${STRAPI_API_SECRET}`,
					'Content-Type': 'application/json'
				}
			});

			if (!response.ok) {
				throw new Error(`HTTP ${response.status}: ${response.statusText}`);
			}

			const data = await response.json();
			return {
				success: true,
				message: 'Connection successful',
				sampleData: data
			};
		} catch (error) {
			console.error('Connection test failed:', error);
			return {
				success: false,
				message: `Connection failed: ${error instanceof Error ? error.message : 'Unknown error'}`
			};
		}
	}
});

// ACTION: Fetch Tags data from Strapi
export const fetchTagsData = action({
	args: {},
	handler: async () => {
		const STRAPI_API_URL = process.env.STRAPI_API_URL;
		const STRAPI_API_SECRET = process.env.STRAPI_API_SECRET;

		if (!STRAPI_API_URL || !STRAPI_API_SECRET) {
			throw new Error(
				'Missing required environment variables: STRAPI_API_URL and STRAPI_API_SECRET'
			);
		}

		const response = await fetch(`${STRAPI_API_URL}/api/tags`, {
			headers: {
				Authorization: `Bearer ${STRAPI_API_SECRET}`,
				'Content-Type': 'application/json'
			}
		});

		if (!response.ok) {
			throw new Error(`Failed to fetch tags: ${response.status} ${response.statusText}`);
		}

		const data = await response.json();
		return data.data || [];
	}
});

// MUTATION: Insert Tags data into Convex
export const insertTagsData = mutation({
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	args: { tagsData: {} as any },

	handler: async (ctx: MutationCtx, { tagsData }) => {
		console.log('🏷️ Inserting Tags data...');

		// Clear existing tags
		const existingTags = await ctx.db.query('tags').collect();
		await Promise.all(existingTags.map((t) => ctx.db.delete(t._id)));

		let migratedCount = 0;
		const tags = Array.isArray(tagsData) ? tagsData : [];

		for (const tag of tags) {
			await upsertRecord(ctx, 'tags', tag.id, {
				value: tag.attributes.value
			});
			migratedCount++;
		}

		console.log(`✅ Tags migration completed: ${migratedCount} tags`);
		return { success: true, message: `${migratedCount} tags migrated successfully` };
	}
});

// COMPREHENSIVE ACTION: Run Phase 1 migration
export const runPhase1Migration = action({
	args: {},
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	handler: async (ctx: ActionCtx): Promise<{ success: boolean; results: any[]; phase: number }> => {
		console.log('🚀 Starting Phase 1 migration...');

		try {
			// Fetch Tags data
			console.log('📥 Fetching Tags from Strapi...');
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const tagsData: any = await ctx.runAction(api.migration.fetchTagsData, {});

			// Insert Tags data
			console.log('💾 Inserting Tags into Convex...');
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const tagsResult: any = await ctx.runMutation(api.migration.insertTagsData, { tagsData });

			console.log('🎉 Phase 1 migration completed successfully!');
			return {
				success: true,
				results: [{ migration: 'Tags', ...tagsResult }],
				phase: 1
			};
		} catch (error) {
			console.error('💥 Phase 1 migration failed:', error);
			throw error;
		}
	}
});
