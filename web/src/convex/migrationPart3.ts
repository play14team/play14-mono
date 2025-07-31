import { mutation } from './_generated/server';
import type { MutationCtx } from './_generated/server';
import type { Id } from './_generated/dataModel';
import { processImageField } from './migrationHelpers';

// Helper function to find existing record by strapiId
async function findByStrapiId(ctx: MutationCtx, table: string, strapiId: number) {
	const records = await ctx.db
		.query(table as never)
		.withIndex('by_strapi_id', (q) => q.eq('strapiId', strapiId))
		.collect();
	return records.length > 0 ? records[0] : null;
}

// Helper function to upsert record (insert or update based on strapiId)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function upsertRecord(ctx: MutationCtx, table: string, strapiId: number, data: any) {
	const existing = await findByStrapiId(ctx, table, strapiId);

	if (existing) {
		// Update existing record
		await ctx.db.patch(existing._id, { ...data, strapiId });
		console.log(`✏️ Updated existing ${table} record with strapiId ${strapiId}`);
		return existing._id;
	} else {
		// Insert new record
		const newId = await ctx.db.insert(table as never, { ...data, strapiId });
		console.log(`➕ Created new ${table} record with strapiId ${strapiId}`);
		return newId;
	}
}

// Migration for Expectations
export const migrateExpectations = mutation({
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	args: { expectationsData: {} as any },

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
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	args: { testimonialsData: {} as any },

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
				const avatarId = await processImageField(ctx, attrs.avatar);

				// Find related event if specified
				let eventId: Id<'events'> | undefined;
				if (attrs.event?.data) {
					const events = await ctx.db.query('events').collect();
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					const event = events.find((e: any) => e.strapiId === attrs.event.data.id);
					eventId = event?._id;
				}

				await upsertRecord(ctx, 'testimonials', testimonial.id, {
					name: attrs.name,
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
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	args: { formatsData: {} as any },

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

				await upsertRecord(ctx, 'formats', format.id, {
					name: attrs.name,
					slug: attrs.slug,
					description: attrs.description || '',
					publishedAt: attrs.publishedAt ? new Date(attrs.publishedAt).getTime() : undefined,
					updatedAt: new Date(attrs.updatedAt).getTime()
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
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	args: { historyData: {} as any },

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
				const imageId = await processImageField(ctx, attrs.image);

				await upsertRecord(ctx, 'history', historyItem.id, {
					year: attrs.year || new Date().getFullYear(),
					title: attrs.title,
					description: attrs.description || '',
					imageId,
					publishedAt: attrs.publishedAt ? new Date(attrs.publishedAt).getTime() : undefined,
					updatedAt: new Date(attrs.updatedAt).getTime()
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
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	args: { hostingData: {} as any },

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

				await upsertRecord(ctx, 'hosting', hostingItem.id, {
					title: attrs.title,
					content: attrs.content || '',
					step: attrs.step || undefined,
					publishedAt: attrs.publishedAt ? new Date(attrs.publishedAt).getTime() : undefined,
					updatedAt: new Date(attrs.updatedAt).getTime()
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
