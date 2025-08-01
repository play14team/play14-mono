import { mutation } from './_generated/server';
import type { MutationCtx } from './_generated/server';
import { v } from 'convex/values';

// Clean up duplicate events without strapiId
export const cleanupDuplicates = mutation({
	args: {},
	handler: async (ctx: MutationCtx) => {
		console.log('🧹 Cleaning up duplicate events without strapiId...');

		// Get all events
		const allEvents = await ctx.db.query('events').collect();
		console.log(`📊 Total events: ${allEvents.length}`);

		// Find events without strapiId
		const eventsWithoutStrapiId = allEvents.filter(
			(e) => e.strapiId === undefined || e.strapiId === null
		);
		console.log(`🚫 Events without strapiId: ${eventsWithoutStrapiId.length}`);

		// Delete them
		let deletedCount = 0;
		for (const event of eventsWithoutStrapiId) {
			console.log(`🗑️ Deleting: ${event.name} (${event._id})`);
			await ctx.db.delete(event._id);
			deletedCount++;
		}

		console.log(`✅ Deleted ${deletedCount} duplicate events`);

		// Verify
		const remaining = await ctx.db.query('events').collect();
		console.log(`📊 Remaining events: ${remaining.length}`);

		return { success: true, deleted: deletedCount, remaining: remaining.length };
	}
});

// Test single event insert with strapiId
export const testInsertEvent = mutation({
	args: { event: v.any() },
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	handler: async (ctx: MutationCtx, args: { event?: any }) => {
		console.log('🧪 Testing single event insert...');

		try {
			if (!args.event) {
				throw new Error('Event data must be provided');
			}

			const event = args.event;
			const attrs = event.attributes;

			console.log(`📋 Event data: ${JSON.stringify({ id: event.id, name: attrs.name })}`);

			// Clear all events first
			const existingEvents = await ctx.db.query('events').collect();
			console.log(`🗑️ Clearing ${existingEvents.length} existing events`);
			for (const e of existingEvents) {
				await ctx.db.delete(e._id);
			}

			// Insert single event with explicit strapiId
			const eventData = {
				strapiId: event.id, // Explicit strapiId
				name: attrs.name,
				slug: attrs.slug,
				start: new Date(attrs.start).getTime(),
				end: new Date(attrs.end).getTime(),
				timezone: attrs.timezone || 'UTC',
				status: attrs.status as 'Announced' | 'Open' | 'Over' | 'Cancelled',
				description: attrs.description || '',
				contactEmail: attrs.contactEmail || '',
				tagline: attrs.tagline || undefined,
				defaultImageId: undefined,
				imageIds: [],
				locationId: undefined,
				venueId: undefined,
				publishedAt: attrs.publishedAt ? new Date(attrs.publishedAt).getTime() : undefined,
				updatedAt: new Date(attrs.updatedAt).getTime(),
				timetable: [],
				registration: undefined,
				sponsorships: [],
				media: [],
				finance: undefined
			};

			console.log(`📤 Inserting event with strapiId: ${eventData.strapiId}`);
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const newId = await ctx.db.insert('events', eventData as any);
			console.log(`✅ Inserted event with ID: ${newId}`);

			// Verify the event was inserted with strapiId
			const insertedEvent = await ctx.db.get(newId);
			console.log(
				`🔍 Inserted event verification: ${JSON.stringify({
					_id: insertedEvent?._id,
					strapiId: insertedEvent?.strapiId,
					name: insertedEvent?.name
				})}`
			);

			// Test lookup by strapiId
			const foundByStrapi = await ctx.db
				.query('events')
				.withIndex('by_strapi_id', (q) => q.eq('strapiId', event.id))
				.first();

			console.log(
				`🔍 Found by strapiId: ${JSON.stringify({
					found: !!foundByStrapi,
					_id: foundByStrapi?._id,
					strapiId: foundByStrapi?.strapiId,
					name: foundByStrapi?.name
				})}`
			);

			return {
				success: true,
				message: `Event inserted successfully`,
				eventId: newId,
				strapiId: event.id,
				foundByStrapi: !!foundByStrapi
			};
		} catch (error) {
			console.error('❌ Test failed:', error);
			throw error;
		}
	}
});
