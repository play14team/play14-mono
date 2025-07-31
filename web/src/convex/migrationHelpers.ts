import type { MutationCtx } from './_generated/server';
import type { Id } from './_generated/dataModel';

// Configuration - loaded from environment variables in actions only
// This helper file is used by mutations which cannot access process.env directly

// Helper to build full URL for Strapi media
function buildMediaUrl(url: string, strapiApiUrl: string): string {
	if (url.startsWith('http://') || url.startsWith('https://')) {
		return url;
	}
	// Handle relative URLs
	if (url.startsWith('/')) {
		return `${strapiApiUrl}${url}`;
	}
	return `${strapiApiUrl}/${url}`;
}

// Process a single Strapi image and upload to Convex
// Note: strapiApiUrl parameter needed since mutations can't access process.env
export async function migrateSingleImage(
	ctx: MutationCtx,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	imageData: any,
	strapiApiUrl: string = 'https://community.play14.org' // fallback default
): Promise<Id<'_storage'> | undefined> {
	try {
		if (!imageData?.attributes?.url) {
			console.log('No image URL found');
			return undefined;
		}

		const imageUrl = buildMediaUrl(imageData.attributes.url, strapiApiUrl);
		console.log(`📥 Skipping image migration (storage API needs fix): ${imageUrl}`);

		// TODO: Uncomment when storage API is fixed
		// // Download the image
		// const imageBlob = await downloadImage(imageUrl);
		//
		// // Upload to Convex storage
		// const storageId = await uploadToConvexStorage(ctx, imageBlob);
		// console.log(`✅ Image uploaded to Convex storage: ${storageId}`);
		//
		// return storageId;

		return undefined;
	} catch (error) {
		console.error(`❌ Failed to migrate image:`, error);
		// Return undefined instead of throwing to allow migration to continue
		return undefined;
	}
}

// Process multiple Strapi images and upload to Convex
export async function migrateMultipleImages(
	ctx: MutationCtx,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	imagesData: any[],
	strapiApiUrl: string = 'https://community.play14.org' // fallback default
): Promise<Id<'_storage'>[]> {
	const storageIds: Id<'_storage'>[] = [];

	if (!imagesData || !Array.isArray(imagesData)) {
		return storageIds;
	}

	for (const imageData of imagesData) {
		const storageId = await migrateSingleImage(ctx, imageData, strapiApiUrl);
		if (storageId) {
			storageIds.push(storageId);
		}
	}

	return storageIds;
}

// Process images from Strapi response data
export async function processImageField(
	ctx: MutationCtx,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	fieldData: any,
	strapiApiUrl: string = 'https://community.play14.org' // fallback default
): Promise<Id<'_storage'> | undefined> {
	if (!fieldData?.data) {
		return undefined;
	}

	// Handle single image
	if (!Array.isArray(fieldData.data)) {
		return await migrateSingleImage(ctx, fieldData.data, strapiApiUrl);
	}

	// Handle array of images (take first one for default image)
	if (fieldData.data.length > 0) {
		return await migrateSingleImage(ctx, fieldData.data[0], strapiApiUrl);
	}

	return undefined;
}

// Process multiple images from Strapi response data
export async function processImagesField(
	ctx: MutationCtx,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	fieldData: any,
	strapiApiUrl: string = 'https://community.play14.org' // fallback default
): Promise<Id<'_storage'>[]> {
	if (!fieldData?.data) {
		return [];
	}

	// Ensure data is an array
	const imagesArray = Array.isArray(fieldData.data) ? fieldData.data : [fieldData.data];

	return await migrateMultipleImages(ctx, imagesArray, strapiApiUrl);
}
