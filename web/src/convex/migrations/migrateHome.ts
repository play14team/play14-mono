import { mutation } from './_generated/server';

// Migration function for home
export const migrateHome = mutation({
	args: {},
	handler: async (ctx) => {
		console.log('Starting migration for home...');

		const data = [
			{
				_strapiId: 1,
				imageIds: [
					'file_5359',
					'file_5356',
					'file_5353',
					'file_5357',
					'file_5354',
					'file_5358',
					'file_5360',
					'file_5355',
					'file_5351',
					'file_5350',
					'file_5347',
					'file_5349',
					'file_5346',
					'file_5345',
					'file_5344',
					'file_5348',
					'file_5352',
					'file_5343',
					'file_5341',
					'file_5342',
					'file_5340',
					'file_5339',
					'file_5338'
				]
			}
		];

		const results = [];

		for (const item of data) {
			try {
				// Remove Strapi ID before insertion
				const { _strapiId, ...convexItem } = item;

				const id = await ctx.db.insert('home', convexItem);
				results.push({ strapiId: _strapiId, convexId: id });

				console.log(`Migrated home ${_strapiId} -> ${id}`);
			} catch (error) {
				console.error(`Failed to migrate home ${item._strapiId}:`, error);
			}
		}

		console.log(`Migration completed for home: ${results.length}/${data.length} records`);
		return results;
	}
});
