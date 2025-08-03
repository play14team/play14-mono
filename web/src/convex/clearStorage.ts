import { action } from './_generated/server';
import { v } from 'convex/values';
import type { Id } from './_generated/dataModel';

/**
 * Clear all files from Convex storage using brute force approach
 * Since Convex doesn't provide a storage listing API, we have to try guessing IDs
 */
export const clearAllStorage = action({
	args: {
		confirmClear: v.literal('CLEAR_ALL_STORAGE')
	},
	handler: async (ctx) => {
		console.log('🗑️ CLEARING ALL CONVEX STORAGE');
		console.log(
			'Note: Convex does not provide a storage list API, so this is a best-effort attempt'
		);

		let deletedCount = 0;
		let errorCount = 0;

		// Try a brute force approach with common patterns
		// This is not ideal but is the only option without a storage list API
		const prefixes = ['kg', 'kh', 'kj', 'km', 'kn', 'ks', 'kt'];

		for (const prefix of prefixes) {
			console.log(`Attempting cleanup with prefix: ${prefix}`);

			for (let i = 0; i < 1000; i++) {
				try {
					// Generate a potential storage ID
					const suffix = Math.random().toString(36).substring(2, 30);
					const storageId = `${prefix}${suffix}`;

					await ctx.storage.delete(storageId as Id<'_storage'>);
					deletedCount++;

					if (deletedCount % 10 === 0) {
						console.log(`Deleted ${deletedCount} files so far...`);
					}
				} catch {
					errorCount++;
					// This is expected - most IDs won't exist
				}
			}
		}

		console.log(`\n📋 Storage Clear Summary:`);
		console.log(`- Successfully deleted: ${deletedCount} files`);
		console.log(`- Failed attempts: ${errorCount} (expected)`);
		console.log(`Note: This is a best-effort cleanup. Some files may remain.`);

		return {
			success: true,
			deletedFiles: deletedCount,
			errors: errorCount,
			message: `Storage cleanup attempted. Deleted ${deletedCount} files.`
		};
	}
});
