import { mutation } from './_generated/server';
import { v } from 'convex/values';

// Clear all data from all tables - USE WITH CAUTION
export const clearAllData = mutation({
	args: {
		confirmDelete: v.literal('DELETE_ALL_DATA')
	},
	handler: async (ctx, args) => {
		// Safety check
		if (args.confirmDelete !== 'DELETE_ALL_DATA') {
			throw new Error('Must confirm deletion with exact string');
		}

		const tables = [
			// Core content tables
			'events',
			'games',
			'players',
			'articles',
			// Relationship tables
			'eventHosts',
			'eventMentors',
			'eventAttendees',
			'gameDocumenters',
			'gameProposers',
			'articleTags',
			// Supporting tables
			'eventLocations',
			'venues',
			'sponsors',
			'tags',
			'testimonials',
			'expectations',
			// Single types
			'home',
			'history',
			'format',
			'hosting',
			// Auth tables
			'users',
			'roles',
			// Migration tables
			'idMappings',
			'migrationStatus'
		];

		const deleteCounts: Record<string, number> = {};

		for (const table of tables) {
			let count = 0;
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const documents = await ctx.db.query(table as any).collect();

			for (const doc of documents) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				await ctx.db.delete(doc._id as any);
				count++;
			}

			deleteCounts[table] = count;
		}

		return {
			success: true,
			message: 'All data cleared',
			deleteCounts
		};
	}
});

// Clear data from specific table
export const clearTable = mutation({
	args: {
		tableName: v.string()
	},
	handler: async (ctx, args) => {
		let count = 0;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const documents = await ctx.db.query(args.tableName as any).collect();

		for (const doc of documents) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			await ctx.db.delete(doc._id as any);
			count++;
		}

		return {
			success: true,
			table: args.tableName,
			deletedCount: count
		};
	}
});

// Clear only test migration data (keep schema)
export const clearMigrationData = mutation({
	args: {},
	handler: async (ctx) => {
		const tables = ['idMappings', 'migrationStatus'];
		const deleteCounts: Record<string, number> = {};

		for (const table of tables) {
			let count = 0;
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const documents = await ctx.db.query(table as any).collect();

			for (const doc of documents) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				await ctx.db.delete(doc._id as any);
				count++;
			}

			deleteCounts[table] = count;
		}

		return {
			success: true,
			message: 'Migration data cleared',
			deleteCounts
		};
	}
});
