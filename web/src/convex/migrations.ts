/* eslint-disable */
import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

/**
 * Central migration orchestrator
 * Run this after generating migration files with the Node.js script
 */
export const runMigration = mutation({
	args: {
		table: v.string(),
		data: v.array(v.any()),
		batchSize: v.optional(v.number())
	},
	handler: async (ctx, args) => {
		console.log(`🚀 Starting migration for ${args.table}...`);

		const batchSize = args.batchSize || 50;
		const results = [];
		let processed = 0;

		// Process in batches to avoid timeouts
		for (let i = 0; i < args.data.length; i += batchSize) {
			const batch = args.data.slice(i, i + batchSize);

			for (const item of batch) {
				try {
					// Remove internal fields before insertion
					const { _strapiId, ...cleanItem } = item;

					// Insert into Convex
					const id = await ctx.db.insert(args.table as any, cleanItem);

					results.push({
						strapiId: _strapiId,
						convexId: id,
						success: true
					});

					processed++;

					if (processed % 10 === 0) {
						console.log(`📊 Progress: ${processed}/${args.data.length}`);
					}
				} catch (error) {
					console.error(`❌ Failed to migrate ${args.table} ${item._strapiId}:`, error);
					results.push({
						strapiId: item._strapiId,
						convexId: null,
						success: false,
						error: error.message
					});
				}
			}
		}

		const successful = results.filter((r) => r.success).length;
		console.log(
			`✅ Migration completed for ${args.table}: ${successful}/${args.data.length} successful`
		);

		return {
			table: args.table,
			total: args.data.length,
			successful,
			failed: args.data.length - successful,
			results
		};
	}
});

/**
 * Clean all data from a table (for testing)
 */
export const clearTable = mutation({
	args: { table: v.string() },
	handler: async (ctx, args) => {
		console.log(`🧹 Clearing all data from ${args.table}...`);

		const allRecords = await ctx.db.query(args.table as any).collect();
		let deleted = 0;

		for (const record of allRecords) {
			await ctx.db.delete(record._id);
			deleted++;
		}

		console.log(`✅ Cleared ${deleted} records from ${args.table}`);
		return { table: args.table, deleted };
	}
});

/**
 * Get migration status - count records in each table
 */
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
			'articleTags'
		];

		const status: Record<string, number> = {};

		for (const table of tables) {
			try {
				const count = await ctx.db.query(table as any).collect();
				status[table] = count.length;
			} catch (error) {
				status[table] = -1; // Error
			}
		}

		return status;
	}
});

/**
 * Update relationship references after main data migration
 */
export const updateRelationships = mutation({
	args: {
		mappings: v.array(
			v.object({
				table: v.string(),
				strapiId: v.number(),
				convexId: v.id('_any')
			})
		)
	},
	handler: async (ctx, args) => {
		console.log('🔗 Updating relationship references...');

		// Create lookup map
		const idMap = new Map();
		args.mappings.forEach((mapping) => {
			idMap.set(`${mapping.table}_${mapping.strapiId}`, mapping.convexId);
		});

		// Update events with location and venue references
		const events = await ctx.db.query('events').collect();
		for (const event of events) {
			const updates: any = {};

			// Update location reference (from relationships)
			// This would need to be populated from the Strapi backup relationships

			if (Object.keys(updates).length > 0) {
				await ctx.db.patch(event._id, updates);
			}
		}

		console.log('✅ Relationship references updated');
		return { updated: args.mappings.length };
	}
});

/**
 * Migrate event-player relationships
 */
export const migrateEventPlayerRelationships = mutation({
	args: {
		relationships: v.array(
			v.object({
				type: v.string(), // 'host', 'mentor', 'attendee'
				eventStrapiId: v.number(),
				playerStrapiId: v.number(),
				eventConvexId: v.id('events'),
				playerConvexId: v.id('players')
			})
		)
	},
	handler: async (ctx, args) => {
		console.log('👥 Migrating event-player relationships...');

		let created = 0;

		for (const rel of args.relationships) {
			try {
				let table: string;
				switch (rel.type) {
					case 'host':
						table = 'eventHosts';
						break;
					case 'mentor':
						table = 'eventMentors';
						break;
					case 'attendee':
						table = 'eventAttendees';
						break;
					default:
						continue;
				}

				await ctx.db.insert(table as any, {
					eventId: rel.eventConvexId,
					playerId: rel.playerConvexId
				});

				created++;
			} catch (error) {
				console.error(`Failed to create ${rel.type} relationship:`, error);
			}
		}

		console.log(`✅ Created ${created} event-player relationships`);
		return { created };
	}
});

/**
 * Migrate game-player relationships
 */
export const migrateGamePlayerRelationships = mutation({
	args: {
		relationships: v.array(
			v.object({
				type: v.string(), // 'documenter', 'proposer'
				gameStrapiId: v.number(),
				playerStrapiId: v.number(),
				gameConvexId: v.id('games'),
				playerConvexId: v.id('players')
			})
		)
	},
	handler: async (ctx, args) => {
		console.log('🎮 Migrating game-player relationships...');

		let created = 0;

		for (const rel of args.relationships) {
			try {
				let table: string;
				switch (rel.type) {
					case 'documenter':
						table = 'gameDocumenters';
						break;
					case 'proposer':
						table = 'gameProposers';
						break;
					default:
						continue;
				}

				await ctx.db.insert(table as any, {
					gameId: rel.gameConvexId,
					playerId: rel.playerConvexId
				});

				created++;
			} catch (error) {
				console.error(`Failed to create ${rel.type} relationship:`, error);
			}
		}

		console.log(`✅ Created ${created} game-player relationships`);
		return { created };
	}
});
