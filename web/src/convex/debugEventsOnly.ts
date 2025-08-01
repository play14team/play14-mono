import { mutation } from './_generated/server';
import type { MutationCtx } from './_generated/server';
import type { Id } from './_generated/dataModel';
import { v } from 'convex/values';

// Helper function to find existing record by strapiId
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function findByStrapiId(ctx: MutationCtx, table: string, strapiId: number): Promise<any> {
	try {
		switch (table) {
			case 'events': {
				const records = await ctx.db
					.query('events')
					.withIndex('by_strapi_id', (q) => q.eq('strapiId', strapiId))
					.collect();
				return records.length > 0 ? records[0] : null;
			}
			default:
				return null;
		}
	} catch (error) {
		console.error(`Error finding record in ${table}:`, error);
		return null;
	}
}

// Helper function to upsert record (insert or update based on strapiId)
async function upsertRecord(
	ctx: MutationCtx,
	table: string,
	strapiId: number,
	data: Record<string, unknown>
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<Id<any> | null> {
	const existing = await findByStrapiId(ctx, table, strapiId);

	if (existing) {
		// Update existing record
		await ctx.db.patch(existing._id, { ...data, strapiId });
		console.log(`✏️ Updated existing ${table} record with strapiId ${strapiId}`);
		return existing._id;
	} else {
		// Insert new record with strapiId included
		const recordData = { ...data, strapiId };
		let newId;
		switch (table) {
			case 'events':
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				newId = await ctx.db.insert('events', recordData as any);
				break;
			default:
				throw new Error(`Unsupported table: ${table}`);
		}
		console.log(`➕ Created new ${table} record with strapiId ${strapiId}`);
		return newId;
	}
}

// Migration for Events WITHOUT image processing to debug
export const migrateEventsSimple = mutation({
	args: { events: v.any() },
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	handler: async (ctx: MutationCtx, args: { events?: any[] }) => {
		console.log('📅 Starting Simple Events migration (NO images)...');

		try {
			if (!args.events) {
				throw new Error('Events data must be provided - mutations cannot fetch from external APIs');
			}

			console.log(`📊 Processing ${args.events.length} events WITHOUT image processing`);

			// Count before
			const beforeCount = await ctx.db
				.query('events')
				.collect()
				.then((events) => events.length);
			console.log(`📋 Events in DB before: ${beforeCount}`);

			let migratedCount = 0;
			for (const event of args.events) {
				const attrs = event.attributes;
				console.log(`🔄 Processing: ${attrs.name} (ID: ${event.id})`);

				await upsertRecord(ctx, 'events', event.id, {
					name: attrs.name,
					slug: attrs.slug,
					start: new Date(attrs.start).getTime(),
					end: new Date(attrs.end).getTime(),
					timezone: attrs.timezone || 'UTC',
					status: attrs.status as 'Announced' | 'Open' | 'Over' | 'Cancelled',
					description: attrs.description || '',
					contactEmail: attrs.contactEmail || '',
					tagline: attrs.tagline || undefined,
					defaultImageId: undefined, // Skip images
					imageIds: [], // Skip images
					locationId: undefined, // Skip relationships for now
					venueId: undefined, // Skip relationships for now
					publishedAt: attrs.publishedAt ? new Date(attrs.publishedAt).getTime() : undefined,
					updatedAt: new Date(attrs.updatedAt).getTime(),
					// Components
					timetable: [], // Skip complex components
					registration: attrs.registration
						? {
								link: attrs.registration.link || undefined,
								widgetCode: attrs.registration.widgetCode || undefined
							}
						: undefined,
					sponsorships: [], // Skip complex components
					media: [], // Skip media
					finance: undefined
				});
				migratedCount++;
			}

			// Count after
			const afterCount = await ctx.db
				.query('events')
				.collect()
				.then((events) => events.length);
			console.log(`📋 Events in DB after: ${afterCount}`);

			console.log(`✅ Simple Events migration completed: ${migratedCount} events processed`);
			return {
				success: true,
				message: `${migratedCount} events migrated successfully`,
				beforeCount,
				afterCount
			};
		} catch (error) {
			console.error('❌ Simple Events migration failed:', error);
			throw error;
		}
	}
});
