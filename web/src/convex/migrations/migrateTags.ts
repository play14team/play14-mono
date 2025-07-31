import { mutation } from './_generated/server';

// Migration function for tags
export const migrateTags = mutation({
	args: {},
	handler: async (ctx) => {
		console.log('Starting migration for tags...');

		const data = [
			{
				_strapiId: 24,
				value: 'website'
			},
			{
				_strapiId: 25,
				value: 'learning'
			},
			{
				_strapiId: 26,
				value: 'coaching'
			},
			{
				_strapiId: 27,
				value: 'method'
			},
			{
				_strapiId: 28,
				value: 'process'
			},
			{
				_strapiId: 29,
				value: 'london'
			},
			{
				_strapiId: 31,
				value: 'online'
			},
			{
				_strapiId: 32,
				value: 'playfulness'
			}
		];

		const results = [];

		for (const item of data) {
			try {
				// Remove Strapi ID before insertion
				const { _strapiId, ...convexItem } = item;

				const id = await ctx.db.insert('tags', convexItem);
				results.push({ strapiId: _strapiId, convexId: id });

				console.log(`Migrated tags ${_strapiId} -> ${id}`);
			} catch (error) {
				console.error(`Failed to migrate tags ${item._strapiId}:`, error);
			}
		}

		console.log(`Migration completed for tags: ${results.length}/${data.length} records`);
		return results;
	}
});
