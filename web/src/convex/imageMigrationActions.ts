import { action } from './_generated/server';
import { v } from 'convex/values';
import type { ActionCtx } from './_generated/server';

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

// Generate organized file path for storage
function generateImagePath(
	contentType: string,
	contentName: string,
	originalFileName: string,
	strapiId: number
): string {
	// Clean and normalize the content name for use in path
	const cleanName = contentName
		.toLowerCase()
		.replace(/[^a-z0-9]/g, '-')
		.replace(/-+/g, '-')
		.replace(/^-|-$/g, '');

	// Create organized path: contentType/contentName/strapiId-originalName.ext
	return `${contentType}/${cleanName}/strapi-${strapiId}-${originalFileName.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
}

// Download image from URL
async function downloadImage(imageUrl: string): Promise<Blob> {
	console.log(`📥 Downloading image: ${imageUrl}`);
	const response = await fetch(imageUrl);
	if (!response.ok) {
		throw new Error(`Failed to download image: ${response.status} ${response.statusText}`);
	}
	return await response.blob();
}

// Upload blob to Convex storage - NOW WORKING IN ACTIONS!
async function uploadToConvexStorage(ctx: ActionCtx, blob: Blob): Promise<string> {
	console.log(`📤 Uploading blob to Convex storage (${blob.size} bytes)`);
	const storageId = await ctx.storage.store(blob);
	console.log(`✅ Upload successful, storage ID: ${storageId}`);
	return storageId;
}

// Internal helper - migrate a single image
async function migrateSingleImageInternal(
	ctx: ActionCtx,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	imageData: any,
	contentType: string,
	contentName: string,
	strapiApiUrl: string = 'https://community.play14.org'
): Promise<string | undefined> {
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

		// Upload to Convex storage
		const storageId = await uploadToConvexStorage(ctx, imageBlob);
		console.log(`✅ Image uploaded to Convex storage: ${storageId} (${imagePath})`);

		return storageId;
	} catch (error) {
		console.error(`❌ Failed to migrate image:`, error);
		return undefined;
	}
}

// Migrate a single image - ACTION VERSION (public API)
export const migrateSingleImage = action({
	args: {
		imageData: v.any(),
		contentType: v.string(),
		contentName: v.string(),
		strapiApiUrl: v.optional(v.string())
	},
	handler: async (
		ctx: ActionCtx,
		{ imageData, contentType, contentName, strapiApiUrl = 'https://community.play14.org' }
	) => {
		return await migrateSingleImageInternal(ctx, imageData, contentType, contentName, strapiApiUrl);
	}
});

// Internal helper - migrate multiple images for a single content item
async function migrateContentImagesInternal(
	ctx: ActionCtx,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	contentData: any,
	contentType: string,
	strapiApiUrl: string = 'https://community.play14.org'
) {
	const results = {
		defaultImageId: undefined as string | undefined,
		imageIds: [] as string[],
		totalProcessed: 0,
		totalUploaded: 0
	};

	try {
		const attrs = contentData.attributes;
		const contentName = attrs.name || attrs.title || `${contentType}-${contentData.id}`;

		console.log(`🖼️ Processing images for ${contentType}: ${contentName}`);

		// Process default/featured image
		if (attrs.defaultImage?.data) {
			console.log('📸 Processing default image...');
			results.totalProcessed++;
			const defaultImageId = await migrateSingleImageInternal(
				ctx,
				attrs.defaultImage.data,
				contentType,
				contentName,
				strapiApiUrl
			);
			if (defaultImageId) {
				results.defaultImageId = defaultImageId;
				results.totalUploaded++;
			}
		}

		// Process image gallery/collection
		if (attrs.images?.data && Array.isArray(attrs.images.data)) {
			console.log(`📸 Processing ${attrs.images.data.length} gallery images...`);
			for (const imageData of attrs.images.data) {
				results.totalProcessed++;
				const imageId = await migrateSingleImageInternal(
					ctx,
					imageData,
					contentType,
					contentName,
					strapiApiUrl
				);
				if (imageId) {
					results.imageIds.push(imageId);
					results.totalUploaded++;
				}
			}
		}

		// Handle other image fields based on content type
		if (contentType === 'players' && attrs.photo?.data) {
			console.log('📸 Processing player photo...');
			results.totalProcessed++;
			const photoId = await migrateSingleImageInternal(
				ctx,
				attrs.photo.data,
				contentType,
				contentName,
				strapiApiUrl
			);
			if (photoId) {
				results.defaultImageId = photoId; // Use photo as default for players
				results.totalUploaded++;
			}
		}

		console.log(
			`✅ Image migration completed for ${contentName}: ${results.totalUploaded}/${results.totalProcessed} images uploaded`
		);
		return results;
	} catch (error) {
		console.error(`❌ Failed to migrate images for ${contentType}:`, error);
		return results;
	}
}

// Migrate multiple images for a single content item - ACTION VERSION
export const migrateContentImages = action({
	args: {
		contentData: v.any(), // Full Strapi content object
		contentType: v.string(), // 'events', 'games', 'players', etc.
		strapiApiUrl: v.optional(v.string())
	},
	handler: async (
		ctx: ActionCtx,
		{ contentData, contentType, strapiApiUrl = 'https://community.play14.org' }
	) => {
		return await migrateContentImagesInternal(ctx, contentData, contentType, strapiApiUrl);
	}
});

// Batch migrate images for multiple content items
export const migrateBatchImages = action({
	args: {
		contentItems: v.array(v.any()),
		contentType: v.string(),
		strapiApiUrl: v.optional(v.string())
	},
	handler: async (
		ctx: ActionCtx,
		{ contentItems, contentType, strapiApiUrl = 'https://community.play14.org' }
	) => {
		const batchResults = [];
		let totalProcessed = 0;
		let totalUploaded = 0;

		console.log(
			`🖼️ Starting batch image migration for ${contentItems.length} ${contentType} items`
		);

		for (const contentData of contentItems) {
			const results = await migrateContentImagesInternal(
				ctx,
				contentData,
				contentType,
				strapiApiUrl
			);

			batchResults.push({
				contentId: contentData.id,
				contentName:
					contentData.attributes?.name ||
					contentData.attributes?.title ||
					`${contentType}-${contentData.id}`,
				...results
			});

			totalProcessed += results.totalProcessed;
			totalUploaded += results.totalUploaded;
		}

		console.log(
			`🎉 Batch image migration completed: ${totalUploaded}/${totalProcessed} images uploaded across ${contentItems.length} items`
		);

		return {
			batchResults,
			summary: {
				totalItems: contentItems.length,
				totalProcessed,
				totalUploaded,
				successRate: totalProcessed > 0 ? ((totalUploaded / totalProcessed) * 100).toFixed(1) : '0'
			}
		};
	}
});
