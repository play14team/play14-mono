import { mutation } from './_generated/server';
import type { MutationCtx } from './_generated/server';
import { v } from 'convex/values';

// Debug migration to test event upsert logic
export const debugEventMigration = mutation({
	args: { events: v.any() },
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	handler: async (ctx: MutationCtx, args: { events?: any[] }) => {
		console.log('🐛 Starting DEBUG Events migration...');

		try {
			if (!args.events) {
				throw new Error('Events data must be provided');
			}

			console.log(`📊 Received ${args.events.length} events to process`);

			// Count existing events before migration
			const existingEvents = await ctx.db.query('events').collect();
			console.log(`📋 Found ${existingEvents.length} existing events in database`);

			let processedCount = 0;

			for (const event of args.events) {
				const attrs = event.attributes;
				console.log(`🔍 Processing event: ${attrs.name} (Strapi ID: ${event.id})`);

				// Check if event already exists by strapiId
				const existingEvent = await ctx.db
					.query('events')
					.withIndex('by_strapi_id', (q) => q.eq('strapiId', event.id))
					.first();

				if (existingEvent) {
					console.log(`✏️ Event already exists, updating: ${attrs.name}`);
					await ctx.db.patch(existingEvent._id, {
						name: attrs.name,
						slug: attrs.slug,
						start: new Date(attrs.start).getTime(),
						end: new Date(attrs.end).getTime(),
						timezone: attrs.timezone || 'UTC',
						status: attrs.status as 'Announced' | 'Open' | 'Over' | 'Cancelled',
						description: attrs.description || '',
						contactEmail: attrs.contactEmail || '',
						tagline: attrs.tagline || undefined,
						defaultImageId: undefined, // Skip images for debug
						imageIds: [], // Skip images for debug
						locationId: undefined,
						venueId: undefined,
						publishedAt: attrs.publishedAt ? new Date(attrs.publishedAt).getTime() : undefined,
						updatedAt: new Date(attrs.updatedAt).getTime(),
						timetable: [],
						registration: attrs.registration
							? {
									link: attrs.registration.link || undefined,
									widgetCode: attrs.registration.widgetCode || undefined
								}
							: undefined,
						sponsorships: [],
						media: [],
						finance: undefined,
						strapiId: event.id
					});
				} else {
					console.log(`➕ Creating new event: ${attrs.name}`);
					await ctx.db.insert('events', {
						name: attrs.name,
						slug: attrs.slug,
						start: new Date(attrs.start).getTime(),
						end: new Date(attrs.end).getTime(),
						timezone: attrs.timezone || 'UTC',
						status: attrs.status as 'Announced' | 'Open' | 'Over' | 'Cancelled',
						description: attrs.description || '',
						contactEmail: attrs.contactEmail || '',
						tagline: attrs.tagline || undefined,
						defaultImageId: undefined, // Skip images for debug
						imageIds: [], // Skip images for debug
						locationId: undefined,
						venueId: undefined,
						publishedAt: attrs.publishedAt ? new Date(attrs.publishedAt).getTime() : undefined,
						updatedAt: new Date(attrs.updatedAt).getTime(),
						timetable: [],
						registration: attrs.registration
							? {
									link: attrs.registration.link || undefined,
									widgetCode: attrs.registration.widgetCode || undefined
								}
							: undefined,
						sponsorships: [],
						media: [],
						finance: undefined,
						strapiId: event.id
					});
				}
				processedCount++;
			}

			// Count events after migration
			const finalEvents = await ctx.db.query('events').collect();
			console.log(`📋 Final count: ${finalEvents.length} events in database`);

			console.log(`✅ DEBUG Events migration completed: ${processedCount} events processed`);
			return {
				success: true,
				message: `${processedCount} events processed successfully`,
				beforeCount: existingEvents.length,
				afterCount: finalEvents.length
			};
		} catch (error) {
			console.error('❌ DEBUG Events migration failed:', error);
			throw error;
		}
	}
});

// Simple count function
export const countEvents = mutation({
	handler: async (ctx: MutationCtx) => {
		const events = await ctx.db.query('events').collect();
		console.log(`📊 Total events in database: ${events.length}`);
		return { count: events.length };
	}
});
