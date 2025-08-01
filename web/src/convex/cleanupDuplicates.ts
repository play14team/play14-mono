import { mutation } from './_generated/server';
import type { MutationCtx } from './_generated/server';

// Cleanup duplicate events that don't have strapiId
export const cleanupDuplicateEvents = mutation({
	args: {},
	handler: async (ctx: MutationCtx) => {
		console.log('🧹 Starting cleanup of duplicate events...');

		try {
			// Find all events
			const allEvents = await ctx.db.query('events').collect();
			console.log(`📊 Found ${allEvents.length} total events`);

			// Find events without strapiId
			const eventsWithoutStrapiId = allEvents.filter(
				(event) => event.strapiId === undefined || event.strapiId === null
			);
			console.log(`🚫 Found ${eventsWithoutStrapiId.length} events without strapiId`);

			// Group by slug to find actual duplicates
			const slugGroups: Record<string, typeof allEvents> = {};
			allEvents.forEach((event) => {
				if (!slugGroups[event.slug]) {
					slugGroups[event.slug] = [];
				}
				slugGroups[event.slug].push(event);
			});

			// Find duplicate slugs
			const duplicateSlugs = Object.entries(slugGroups).filter(([, events]) => events.length > 1);
			console.log(`🔄 Found ${duplicateSlugs.length} duplicate slugs`);

			let deletedCount = 0;

			// For each duplicate slug, keep the one with strapiId and delete the one without
			for (const [slug, events] of duplicateSlugs) {
				const withStrapiId = events.filter((e) => e.strapiId !== undefined && e.strapiId !== null);
				const withoutStrapiId = events.filter(
					(e) => e.strapiId === undefined || e.strapiId === null
				);

				console.log(
					`🔍 Slug "${slug}": ${withStrapiId.length} with strapiId, ${withoutStrapiId.length} without`
				);

				// Delete events without strapiId (these are the problematic duplicates)
				for (const event of withoutStrapiId) {
					console.log(`🗑️ Deleting duplicate event: ${event.name} (${event._id}) - no strapiId`);
					await ctx.db.delete(event._id);
					deletedCount++;
				}
			}

			console.log(`✅ Cleanup completed: deleted ${deletedCount} duplicate events`);

			// Verify the cleanup
			const remainingEvents = await ctx.db.query('events').collect();
			const remainingSlugs = remainingEvents.map((e) => e.slug);
			const uniqueSlugs = [...new Set(remainingSlugs)];

			console.log(
				`📊 After cleanup: ${remainingEvents.length} events, ${uniqueSlugs.length} unique slugs`
			);

			if (remainingEvents.length === uniqueSlugs.length) {
				console.log('✅ All duplicate slugs resolved!');
			} else {
				console.log('⚠️ Still have duplicate slugs - manual intervention needed');
			}

			return {
				success: true,
				deletedCount,
				remainingEvents: remainingEvents.length,
				uniqueSlugs: uniqueSlugs.length
			};
		} catch (error) {
			console.error('❌ Cleanup failed:', error);
			throw error;
		}
	}
});
