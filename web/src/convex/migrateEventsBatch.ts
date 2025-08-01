import { mutation } from './_generated/server';
import type { MutationCtx } from './_generated/server';
import type { Id } from './_generated/dataModel';
import { v } from 'convex/values';
import { processImageField, processImagesField } from './migrationHelpers';

// Helper function to find existing record by strapiId
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function findEventByStrapiId(ctx: MutationCtx, strapiId: number): Promise<any> {
	try {
		const records = await ctx.db
			.query('events')
			.withIndex('by_strapi_id', (q) => q.eq('strapiId', strapiId))
			.collect();
		return records.length > 0 ? records[0] : null;
	} catch (error) {
		console.error(`Error finding event with strapiId ${strapiId}:`, error);
		return null;
	}
}

// Helper function to upsert event record
async function upsertEvent(
	ctx: MutationCtx,
	strapiId: number,
	data: Record<string, unknown>
): Promise<Id<'events'> | null> {
	const existing = await findEventByStrapiId(ctx, strapiId);

	if (existing) {
		// Update existing record
		await ctx.db.patch(existing._id, { ...data, strapiId });
		console.log(`✏️ Updated existing event with strapiId ${strapiId}`);
		return existing._id;
	} else {
		// Insert new record with strapiId included
		const recordData = { ...data, strapiId };
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const newId = await ctx.db.insert('events', recordData as any);
		console.log(`➕ Created new event with strapiId ${strapiId}`);
		return newId;
	}
}

// Helper to find Convex record by name/slug
async function findConvexRecord(
	ctx: MutationCtx,
	table: string,
	field: string,
	value: string
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> {
	try {
		switch (table) {
			case 'eventLocations': {
				const results = await ctx.db.query('eventLocations').collect();
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				return results.find((r: any) => r[field] === value);
			}
			case 'venues': {
				const results = await ctx.db.query('venues').collect();
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				return results.find((r: any) => r[field] === value);
			}
			case 'sponsors': {
				const results = await ctx.db.query('sponsors').collect();
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				return results.find((r: any) => r[field] === value);
			}
			default:
				return null;
		}
	} catch (error) {
		console.error(`Error finding ${table} record:`, error);
		return null;
	}
}

// Batch migration for Events with upsert logic
export const migrateEventsBatch = mutation({
	args: { events: v.any() },
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	handler: async (ctx: MutationCtx, args: { events?: any[] }) => {
		console.log('📅 Starting Events BATCH migration with UPSERT logic...');

		try {
			if (!args.events) {
				throw new Error('Events data must be provided - mutations cannot fetch from external APIs');
			}

			let migratedCount = 0;
			for (const event of args.events) {
				const attrs = event.attributes;

				// Find location
				let locationId: Id<'eventLocations'> | undefined;
				if (attrs.location?.data) {
					const location = await findConvexRecord(
						ctx,
						'eventLocations',
						'name',
						attrs.location.data.attributes.name
					);
					locationId = location?._id;
				}

				// Find venue
				let venueId: Id<'venues'> | undefined;
				if (attrs.venue?.data) {
					const venue = await findConvexRecord(
						ctx,
						'venues',
						'name',
						attrs.venue.data.attributes.name
					);
					venueId = venue?._id;
				}

				// Process timetable
				const timetable: unknown[] = [];
				if (attrs.timetable && Array.isArray(attrs.timetable)) {
					for (const day of attrs.timetable) {
						if (day.day && day.timeslots) {
							timetable.push({
								day: day.day,
								description: day.description || '',
								// eslint-disable-next-line @typescript-eslint/no-explicit-any
								timeslots: day.timeslots.map((slot: any) => ({
									time: slot.time || '',
									description: slot.description || ''
								}))
							});
						}
					}
				}

				// Process sponsorships
				const sponsorships: unknown[] = [];
				if (attrs.sponsorships && Array.isArray(attrs.sponsorships)) {
					for (const sponsorship of attrs.sponsorships) {
						const sponsorIds: Id<'sponsors'>[] = [];

						if (sponsorship.sponsors?.data && Array.isArray(sponsorship.sponsors.data)) {
							for (const sponsor of sponsorship.sponsors.data) {
								const foundSponsor = await findConvexRecord(
									ctx,
									'sponsors',
									'name',
									sponsor.attributes.name
								);
								if (foundSponsor) {
									sponsorIds.push(foundSponsor._id);
								}
							}
						}

						if (sponsorIds.length > 0) {
							sponsorships.push({
								category: sponsorship.category || '',
								sponsorIds
							});
						}
					}
				}

				// Process images
				const defaultImageId = await processImageField(
					ctx,
					attrs.defaultImage,
					'events',
					attrs.name || `event-${event.id}`
				);
				const imageIds = await processImagesField(
					ctx,
					attrs.images,
					'events',
					attrs.name || `event-${event.id}`
				);

				await upsertEvent(ctx, event.id, {
					name: attrs.name,
					slug: attrs.slug,
					start: new Date(attrs.start).getTime(),
					end: new Date(attrs.end).getTime(),
					timezone: attrs.timezone || 'UTC',
					status: attrs.status as 'Announced' | 'Open' | 'Over' | 'Cancelled',
					description: attrs.description || '',
					contactEmail: attrs.contactEmail || '',
					tagline: attrs.tagline || undefined,
					defaultImageId,
					imageIds,
					locationId,
					venueId,
					publishedAt: attrs.publishedAt ? new Date(attrs.publishedAt).getTime() : undefined,
					updatedAt: new Date(attrs.updatedAt).getTime(),
					// Components
					timetable,
					registration: attrs.registration
						? {
								link: attrs.registration.link || undefined,
								widgetCode: attrs.registration.widgetCode || undefined
							}
						: undefined,
					sponsorships,
					media:
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						attrs.media?.map((m: any) => ({
							url: m.url || '',
							type: m.type || ''
						})) || [],
					finance: undefined // TODO: Handle finance component if needed
				});
				migratedCount++;
			}

			console.log(`✅ Events BATCH migration completed: ${migratedCount} events`);
			return { success: true, message: `${migratedCount} events migrated successfully` };
		} catch (error) {
			console.error('❌ Events BATCH migration failed:', error);
			throw error;
		}
	}
});
