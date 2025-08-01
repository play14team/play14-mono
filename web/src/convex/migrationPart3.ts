import { mutation } from './_generated/server';
import type { MutationCtx } from './_generated/server';
import type { Id } from './_generated/dataModel';
import { v } from 'convex/values';
import { processImageField } from './migrationHelpers';

// Helper function to find existing record by strapiId
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function findByStrapiId(ctx: MutationCtx, table: string, strapiId: number): Promise<any> {
	try {
		switch (table) {
			case 'expectations': {
				const records = await ctx.db
					.query('expectations')
					.withIndex('by_strapi_id', (q) => q.eq('strapiId', strapiId))
					.collect();
				return records.length > 0 ? records[0] : null;
			}
			case 'testimonials': {
				const records = await ctx.db
					.query('testimonials')
					.withIndex('by_strapi_id', (q) => q.eq('strapiId', strapiId))
					.collect();
				return records.length > 0 ? records[0] : null;
			}
			case 'formats': {
				const records = await ctx.db
					.query('formats')
					.withIndex('by_strapi_id', (q) => q.eq('strapiId', strapiId))
					.collect();
				return records.length > 0 ? records[0] : null;
			}
			case 'history': {
				const records = await ctx.db
					.query('history')
					.withIndex('by_strapi_id', (q) => q.eq('strapiId', strapiId))
					.collect();
				return records.length > 0 ? records[0] : null;
			}
			case 'hosting': {
				const records = await ctx.db
					.query('hosting')
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
			case 'expectations':
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				newId = await ctx.db.insert('expectations', recordData as any);
				break;
			case 'testimonials':
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				newId = await ctx.db.insert('testimonials', recordData as any);
				break;
			case 'formats':
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				newId = await ctx.db.insert('formats', recordData as any);
				break;
			case 'history':
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				newId = await ctx.db.insert('history', recordData as any);
				break;
			case 'hosting':
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				newId = await ctx.db.insert('hosting', recordData as any);
				break;
			default:
				throw new Error(`Unsupported table: ${table}`);
		}
		console.log(`➕ Created new ${table} record with strapiId ${strapiId}`);
		return newId;
	}
}

// Migration for Expectations
export const migrateExpectations = mutation({
	args: { expectationsData: v.any() },

	handler: async (ctx: MutationCtx, { expectationsData }) => {
		console.log('🎯 Starting Expectations migration...');

		try {
			const expectations = Array.isArray(expectationsData) ? expectationsData : [];

			// Clear existing expectations
			const existingExpectations = await ctx.db.query('expectations').collect();
			await Promise.all(existingExpectations.map((e) => ctx.db.delete(e._id)));

			let migratedCount = 0;
			for (const expectation of expectations) {
				const attrs = expectation.attributes;

				await upsertRecord(ctx, 'expectations', expectation.id, {
					title: attrs.title,
					description: attrs.description || '',
					publishedAt: attrs.publishedAt ? new Date(attrs.publishedAt).getTime() : undefined,
					updatedAt: new Date(attrs.updatedAt).getTime()
				});
				migratedCount++;
			}

			console.log(`✅ Expectations migration completed: ${migratedCount} expectations`);
			return { success: true, message: `${migratedCount} expectations migrated successfully` };
		} catch (error) {
			console.error('❌ Expectations migration failed:', error);
			throw error;
		}
	}
});

// Migration for Testimonials
export const migrateTestimonials = mutation({
	args: { testimonialsData: v.any() },

	handler: async (ctx: MutationCtx, { testimonialsData }) => {
		console.log('💬 Starting Testimonials migration...');

		try {
			const testimonials = Array.isArray(testimonialsData) ? testimonialsData : [];

			// Clear existing testimonials
			const existingTestimonials = await ctx.db.query('testimonials').collect();
			await Promise.all(existingTestimonials.map((t) => ctx.db.delete(t._id)));

			let migratedCount = 0;
			for (const testimonial of testimonials) {
				const attrs = testimonial.attributes;

				// Process avatar if present
				const avatarId = await processImageField(
					ctx,
					attrs.avatar,
					'testimonials',
					attrs.name || `testimonial-${testimonial.id}`
				);

				// Find related event if specified
				let eventId: Id<'events'> | undefined;
				if (attrs.event?.data) {
					const events = await ctx.db.query('events').collect();
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					const event = events.find((e: any) => e.strapiId === attrs.event.data.id);
					eventId = event?._id;
				}

				await upsertRecord(ctx, 'testimonials', testimonial.id, {
					name: attrs.name || undefined,
					position: attrs.position || undefined,
					company: attrs.company || undefined,
					quote: attrs.quote || '',
					avatarId,
					eventId,
					publishedAt: attrs.publishedAt ? new Date(attrs.publishedAt).getTime() : undefined,
					updatedAt: new Date(attrs.updatedAt).getTime()
				});
				migratedCount++;
			}

			console.log(`✅ Testimonials migration completed: ${migratedCount} testimonials`);
			return { success: true, message: `${migratedCount} testimonials migrated successfully` };
		} catch (error) {
			console.error('❌ Testimonials migration failed:', error);
			throw error;
		}
	}
});

// Migration for Formats
export const migrateFormats = mutation({
	args: { formatsData: v.any() },

	handler: async (ctx: MutationCtx, { formatsData }) => {
		console.log('📋 Starting Formats migration...');

		try {
			const formats = Array.isArray(formatsData) ? formatsData : [];

			// Clear existing formats
			const existingFormats = await ctx.db.query('formats').collect();
			await Promise.all(existingFormats.map((f) => ctx.db.delete(f._id)));

			let migratedCount = 0;
			for (const format of formats) {
				const attrs = format.attributes;

				// Handle format single type data structure from Strapi
				const name = 'Event Format';
				const slug = 'event-format';
				let description = '';

				// Combine openspace and schedule content into description
				if (attrs.openspace || attrs.schedule) {
					description = [attrs.openspace, attrs.schedule].filter(Boolean).join('\n\n');
				}

				await upsertRecord(ctx, 'formats', format.id, {
					name,
					slug,
					description: description || '',
					publishedAt: attrs.publishedAt ? new Date(attrs.publishedAt).getTime() : undefined,
					updatedAt: attrs.updatedAt ? new Date(attrs.updatedAt).getTime() : Date.now()
				});
				migratedCount++;
			}

			console.log(`✅ Formats migration completed: ${migratedCount} formats`);
			return { success: true, message: `${migratedCount} formats migrated successfully` };
		} catch (error) {
			console.error('❌ Formats migration failed:', error);
			throw error;
		}
	}
});

// Migration for History
export const migrateHistory = mutation({
	args: { historyData: v.any() },

	handler: async (ctx: MutationCtx, { historyData }) => {
		console.log('📜 Starting History migration...');

		try {
			const historyItems = Array.isArray(historyData) ? historyData : [];

			// Clear existing history
			const existingHistory = await ctx.db.query('history').collect();
			await Promise.all(existingHistory.map((h) => ctx.db.delete(h._id)));

			let migratedCount = 0;
			for (const historyItem of historyItems) {
				const attrs = historyItem.attributes;

				// Process image if present
				const imageId = await processImageField(ctx, attrs.image, 'history', 'play14-history');

				// Handle history single type data structure from Strapi
				const title = '#play14 History';
				let description = '';
				const year = new Date().getFullYear();

				// Combine intro, founders, and keyMoments content into description
				if (attrs.intro || attrs.founders || attrs.keyMoments) {
					const sections = [];
					if (attrs.intro) sections.push(attrs.intro);
					if (attrs.founders) sections.push(`<h2>Founders</h2>${attrs.founders}`);
					if (attrs.keyMoments) sections.push(`<h2>Key Moments</h2>${attrs.keyMoments}`);
					description = sections.join('\n\n');
				}

				await upsertRecord(ctx, 'history', historyItem.id, {
					year,
					title,
					description: description || '',
					imageId,
					publishedAt: attrs.publishedAt ? new Date(attrs.publishedAt).getTime() : undefined,
					updatedAt: attrs.updatedAt ? new Date(attrs.updatedAt).getTime() : Date.now()
				});
				migratedCount++;
			}

			console.log(`✅ History migration completed: ${migratedCount} history items`);
			return { success: true, message: `${migratedCount} history items migrated successfully` };
		} catch (error) {
			console.error('❌ History migration failed:', error);
			throw error;
		}
	}
});

// Migration for Hosting
export const migrateHosting = mutation({
	args: { hostingData: v.any() },

	handler: async (ctx: MutationCtx, { hostingData }) => {
		console.log('🏠 Starting Hosting migration...');

		try {
			const hostingItems = Array.isArray(hostingData) ? hostingData : [];

			// Clear existing hosting
			const existingHosting = await ctx.db.query('hosting').collect();
			await Promise.all(existingHosting.map((h) => ctx.db.delete(h._id)));

			let migratedCount = 0;
			for (const hostingItem of hostingItems) {
				const attrs = hostingItem.attributes;

				// Handle hosting single type data structure from Strapi
				const title = 'How to Host a #play14 Event';
				const content = attrs.content || '';

				await upsertRecord(ctx, 'hosting', hostingItem.id, {
					title,
					content,
					step: attrs.step || undefined,
					publishedAt: attrs.publishedAt ? new Date(attrs.publishedAt).getTime() : undefined,
					updatedAt: attrs.updatedAt ? new Date(attrs.updatedAt).getTime() : Date.now()
				});
				migratedCount++;
			}

			console.log(`✅ Hosting migration completed: ${migratedCount} hosting items`);
			return { success: true, message: `${migratedCount} hosting items migrated successfully` };
		} catch (error) {
			console.error('❌ Hosting migration failed:', error);
			throw error;
		}
	}
});
