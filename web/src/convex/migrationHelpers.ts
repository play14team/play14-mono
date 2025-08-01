import type { MutationCtx } from './_generated/server';
import type { Id } from './_generated/dataModel';

// Configuration - loaded from environment variables in actions only
// This helper file is used by mutations which cannot access process.env directly

// Helper function to generate meaningful filename with folder structure
function generateImagePath(
	contentType: string, // 'events', 'games', 'players', 'articles', etc.
	contentName: string, // event name, game name, etc.
	originalFileName: string,
	strapiId?: number
): string {
	// Clean the content name for use in file path
	const cleanName = contentName
		.toLowerCase()
		.replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
		.replace(/\s+/g, '-') // Replace spaces with hyphens
		.substring(0, 50); // Limit length

	// Note: File extension is preserved in originalFileName

	// Generate organized path: contentType/cleanName/filename
	const fileName = strapiId ? `${strapiId}-${originalFileName}` : originalFileName;
	return `${contentType}/${cleanName}/${fileName}`;
}

// Download image from URL
async function downloadImage(url: string): Promise<Blob> {
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`Failed to download image: ${response.status} ${response.statusText}`);
	}
	return await response.blob();
}

// Upload blob to Convex storage - DISABLED: storage operations only work in actions, not mutations
async function uploadToConvexStorage(
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	_ctx: MutationCtx,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	_blob: Blob
): Promise<Id<'_storage'> | undefined> {
	// Note: Storage operations (ctx.storage.store) are only available in actions, not mutations
	// This function is disabled for mutations - image migration needs to be done via actions
	console.warn('⚠️ Storage operations not available in mutations - skipping image upload');
	return undefined;
}

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

// Process a single Strapi image and upload to Convex with organized storage
export async function migrateSingleImage(
	ctx: MutationCtx,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	imageData: any,
	contentType: string, // 'events', 'games', 'players', etc.
	contentName: string, // name for folder organization
	strapiApiUrl: string = 'https://community.play14.org' // fallback default
): Promise<Id<'_storage'> | undefined> {
	try {
		if (!imageData?.attributes?.url) {
			console.log('📷 No image URL found');
			return undefined;
		}

		const imageUrl = buildMediaUrl(imageData.attributes.url, strapiApiUrl);
		const originalFileName = imageData.attributes.name || 'image.jpg';
		const strapiId = imageData.id;

		// Generate organized file path
		const imagePath = generateImagePath(contentType, contentName, originalFileName, strapiId);

		console.log(`📥 Migrating image: ${imagePath}`);

		// Download the image
		const imageBlob = await downloadImage(imageUrl);

		// Upload to Convex storage (disabled in mutations)
		const storageId = await uploadToConvexStorage(ctx, imageBlob);
		if (storageId) {
			console.log(`✅ Image uploaded to Convex storage: ${storageId} (${imagePath})`);
		} else {
			console.log(`⚠️ Image storage skipped - mutations cannot store files: ${imagePath}`);
		}

		return storageId;
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
	contentType: string,
	contentName: string,
	strapiApiUrl: string = 'https://community.play14.org' // fallback default
): Promise<Id<'_storage'>[]> {
	const storageIds: Id<'_storage'>[] = [];

	if (!imagesData || !Array.isArray(imagesData)) {
		return storageIds;
	}

	for (const imageData of imagesData) {
		const storageId = await migrateSingleImage(
			ctx,
			imageData,
			contentType,
			contentName,
			strapiApiUrl
		);
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
	contentType: string,
	contentName: string,
	strapiApiUrl: string = 'https://community.play14.org' // fallback default
): Promise<Id<'_storage'> | undefined> {
	if (!fieldData?.data) {
		return undefined;
	}

	// Handle single image
	if (!Array.isArray(fieldData.data)) {
		return await migrateSingleImage(ctx, fieldData.data, contentType, contentName, strapiApiUrl);
	}

	// Handle array of images (take first one for default image)
	if (fieldData.data.length > 0) {
		return await migrateSingleImage(ctx, fieldData.data[0], contentType, contentName, strapiApiUrl);
	}

	return undefined;
}

// Process multiple images from Strapi response data
export async function processImagesField(
	ctx: MutationCtx,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	fieldData: any,
	contentType: string,
	contentName: string,
	strapiApiUrl: string = 'https://community.play14.org' // fallback default
): Promise<Id<'_storage'>[]> {
	if (!fieldData?.data) {
		return [];
	}

	// Ensure data is an array
	const imagesArray = Array.isArray(fieldData.data) ? fieldData.data : [fieldData.data];

	return await migrateMultipleImages(ctx, imagesArray, contentType, contentName, strapiApiUrl);
}
