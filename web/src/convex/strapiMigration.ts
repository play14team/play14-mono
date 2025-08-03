import { v } from 'convex/values';
import { action, mutation, query, internalMutation, internalQuery } from './_generated/server';
import { internal, api } from './_generated/api';
import type { Id } from './_generated/dataModel';
import {
	MIGRATION_QUERIES,
	type MigrationContentType,
	getEventsBatchQuery,
	getEventsBatchSize
} from './strapiMigrationQueries';

// Base Strapi response structure
interface StrapiResponse<T> {
	data: Array<{
		id: string;
		attributes: T;
	}>;
	meta: {
		pagination: {
			page: number;
			pageSize: number;
			total: number;
			pageCount: number;
		};
	};
}

// Migration result interface
interface MigrationResult {
	success: boolean;
	contentType: string;
	totalFetched: number;
	totalMigrated: number;
	errors: string[];
	duration: number;
}

/**
 * Fetch data from Strapi GraphQL API using migration queries
 */
export const fetchStrapiData = action({
	args: {
		contentType: v.string(),
		strapiUrl: v.optional(v.string()),
		strapiSecret: v.optional(v.string())
	},
	handler: async (ctx, args): Promise<{ success: boolean; data?: unknown; error?: string }> => {
		const strapiUrl = args.strapiUrl || process.env.STRAPI_API_URL;
		const strapiSecret = args.strapiSecret || process.env.STRAPI_API_SECRET;

		if (!strapiUrl || !strapiSecret) {
			return { success: false, error: 'Strapi URL and secret must be configured' };
		}

		const contentType = args.contentType as MigrationContentType;
		const query = MIGRATION_QUERIES[contentType];

		if (!query) {
			return { success: false, error: `Unknown content type: ${contentType}` };
		}

		try {
			console.log(`Fetching ${contentType} data from Strapi GraphQL...`);
			console.log(`URL: ${strapiUrl}/graphql`);
			console.log(`Query length: ${query.length} characters`);

			const response = await fetch(`${strapiUrl}/graphql`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${strapiSecret}`
				},
				body: JSON.stringify({ query })
			});

			if (!response.ok) {
				return {
					success: false,
					error: `GraphQL request failed: ${response.status} ${response.statusText}`
				};
			}

			const result = await response.json();

			if (result.errors) {
				return {
					success: false,
					error: `GraphQL errors: ${JSON.stringify(result.errors)}`
				};
			}

			console.log(`Successfully fetched ${contentType} data from Strapi`);
			return { success: true, data: result.data };
		} catch (error) {
			console.error(`Error fetching ${contentType} data:`, error);
			return {
				success: false,
				error: error instanceof Error ? error.message : 'Unknown error'
			};
		}
	}
});

/**
 * Fetch events data from Strapi in batches to avoid timeouts
 * Uses pagination to fetch events in smaller chunks and processes them in parallel
 */
export const fetchEventsBatched = action({
	args: {
		strapiUrl: v.optional(v.string()),
		strapiSecret: v.optional(v.string()),
		batchSize: v.optional(v.number()),
		maxConcurrentBatches: v.optional(v.number())
	},
	handler: async (
		ctx,
		args
	): Promise<{
		success: boolean;
		data?: { events: unknown };
		error?: string;
		totalFetched: number;
		totalPages: number;
	}> => {
		const strapiUrl = args.strapiUrl || process.env.STRAPI_API_URL;
		const strapiSecret = args.strapiSecret || process.env.STRAPI_API_SECRET;
		const batchSize = args.batchSize || getEventsBatchSize();
		const maxConcurrentBatches = args.maxConcurrentBatches || 3;

		if (!strapiUrl || !strapiSecret) {
			return {
				success: false,
				error: 'Strapi URL and secret must be configured',
				totalFetched: 0,
				totalPages: 0
			};
		}

		try {
			console.log(`🚀 Starting batched events fetch with batch size: ${batchSize}`);

			// First, get the first page to determine total count
			console.log('📊 Fetching first page to determine total count...');
			const firstPageQuery = getEventsBatchQuery(1, batchSize);

			const firstResponse = await fetch(`${strapiUrl}/graphql`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${strapiSecret}`
				},
				body: JSON.stringify({ query: firstPageQuery })
			});

			if (!firstResponse.ok) {
				return {
					success: false,
					error: `First page request failed: ${firstResponse.status} ${firstResponse.statusText}`,
					totalFetched: 0,
					totalPages: 0
				};
			}

			const firstResult = await firstResponse.json();

			if (firstResult.errors) {
				return {
					success: false,
					error: `GraphQL errors on first page: ${JSON.stringify(firstResult.errors)}`,
					totalFetched: 0,
					totalPages: 0
				};
			}

			const pagination = firstResult.data?.events?.meta?.pagination;
			if (!pagination) {
				return {
					success: false,
					error: 'No pagination metadata found in response',
					totalFetched: 0,
					totalPages: 0
				};
			}

			const { total, pageCount } = pagination;
			console.log(`📈 Found ${total} total events across ${pageCount} pages`);

			// Collect all events data starting with first page
			let allEventsData = firstResult.data.events.data || [];

			if (pageCount <= 1) {
				console.log('✅ All events fetched in single page');
				return {
					success: true,
					data: { events: { data: allEventsData } },
					totalFetched: allEventsData.length,
					totalPages: pageCount
				};
			}

			// Process remaining pages in batches
			const remainingPages = [];
			for (let page = 2; page <= pageCount; page++) {
				remainingPages.push(page);
			}

			console.log(
				`🔄 Processing ${remainingPages.length} remaining pages in batches of ${maxConcurrentBatches}...`
			);

			// Process pages in parallel batches
			for (let i = 0; i < remainingPages.length; i += maxConcurrentBatches) {
				const batchPages = remainingPages.slice(i, i + maxConcurrentBatches);
				console.log(`📦 Processing pages: ${batchPages.join(', ')}`);

				const batchPromises = batchPages.map(async (page) => {
					const query = getEventsBatchQuery(page, batchSize);

					const response = await fetch(`${strapiUrl}/graphql`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
							Authorization: `Bearer ${strapiSecret}`
						},
						body: JSON.stringify({ query })
					});

					if (!response.ok) {
						throw new Error(
							`Page ${page} request failed: ${response.status} ${response.statusText}`
						);
					}

					const result = await response.json();

					if (result.errors) {
						throw new Error(`GraphQL errors on page ${page}: ${JSON.stringify(result.errors)}`);
					}

					const pageData = result.data?.events?.data || [];
					console.log(`✅ Page ${page}: fetched ${pageData.length} events`);
					return pageData;
				});

				try {
					const batchResults = await Promise.all(batchPromises);

					// Combine results from this batch
					for (const pageEvents of batchResults) {
						allEventsData = allEventsData.concat(pageEvents);
					}

					console.log(`🔄 Progress: ${allEventsData.length}/${total} events fetched`);
				} catch (error) {
					console.error('❌ Batch processing failed:', error);
					return {
						success: false,
						error: error instanceof Error ? error.message : 'Unknown batch processing error',
						totalFetched: allEventsData.length,
						totalPages: pageCount
					};
				}
			}

			console.log(`🎉 Successfully fetched all ${allEventsData.length} events`);

			return {
				success: true,
				data: { events: { data: allEventsData } },
				totalFetched: allEventsData.length,
				totalPages: pageCount
			};
		} catch (error) {
			console.error('❌ Error in batched events fetch:', error);
			return {
				success: false,
				error: error instanceof Error ? error.message : 'Unknown error',
				totalFetched: 0,
				totalPages: 0
			};
		}
	}
});

/**
 * TIMEZONE INFERENCE HELPER FUNCTIONS
 */

// Common timezone mappings based on location patterns
const TIMEZONE_MAPPINGS = {
	// Countries and major cities
	countries: {
		france: 'Europe/Paris',
		belgium: 'Europe/Brussels',
		germany: 'Europe/Berlin',
		switzerland: 'Europe/Zurich',
		netherlands: 'Europe/Amsterdam',
		spain: 'Europe/Madrid',
		italy: 'Europe/Rome',
		'united kingdom': 'Europe/London',
		uk: 'Europe/London',
		england: 'Europe/London',
		sweden: 'Europe/Stockholm',
		denmark: 'Europe/Copenhagen',
		norway: 'Europe/Oslo',
		finland: 'Europe/Helsinki',
		poland: 'Europe/Warsaw',
		'czech republic': 'Europe/Prague',
		austria: 'Europe/Vienna',
		hungary: 'Europe/Budapest',
		romania: 'Europe/Bucharest',
		bulgaria: 'Europe/Sofia',
		greece: 'Europe/Athens',
		portugal: 'Europe/Lisbon',
		ireland: 'Europe/Dublin',
		luxembourg: 'Europe/Luxembourg',
		canada: 'America/Toronto', // Default to Eastern
		usa: 'America/New_York', // Default to Eastern
		'united states': 'America/New_York',
		australia: 'Australia/Sydney', // Default to Sydney
		'new zealand': 'Pacific/Auckland',
		japan: 'Asia/Tokyo',
		'south korea': 'Asia/Seoul',
		singapore: 'Asia/Singapore',
		india: 'Asia/Kolkata',
		china: 'Asia/Shanghai',
		israel: 'Asia/Jerusalem',
		'south africa': 'Africa/Johannesburg',
		brazil: 'America/Sao_Paulo',
		argentina: 'America/Argentina/Buenos_Aires',
		chile: 'America/Santiago',
		mexico: 'America/Mexico_City'
	},

	// Major cities with specific timezones
	cities: {
		// Europe
		paris: 'Europe/Paris',
		london: 'Europe/London',
		berlin: 'Europe/Berlin',
		madrid: 'Europe/Madrid',
		rome: 'Europe/Rome',
		amsterdam: 'Europe/Amsterdam',
		brussels: 'Europe/Brussels',
		zurich: 'Europe/Zurich',
		vienna: 'Europe/Vienna',
		stockholm: 'Europe/Stockholm',
		copenhagen: 'Europe/Copenhagen',
		oslo: 'Europe/Oslo',
		helsinki: 'Europe/Helsinki',
		warsaw: 'Europe/Warsaw',
		prague: 'Europe/Prague',
		budapest: 'Europe/Budapest',
		athens: 'Europe/Athens',
		lisbon: 'Europe/Lisbon',
		dublin: 'Europe/Dublin',
		luxembourg: 'Europe/Luxembourg',
		barcelona: 'Europe/Madrid',
		milan: 'Europe/Rome',
		munich: 'Europe/Berlin',
		lyon: 'Europe/Paris',
		marseille: 'Europe/Paris',

		// North America
		'new york': 'America/New_York',
		'los angeles': 'America/Los_Angeles',
		chicago: 'America/Chicago',
		toronto: 'America/Toronto',
		vancouver: 'America/Vancouver',
		montreal: 'America/Montreal',
		'san francisco': 'America/Los_Angeles',
		boston: 'America/New_York',
		washington: 'America/New_York',
		seattle: 'America/Los_Angeles',
		denver: 'America/Denver',
		phoenix: 'America/Phoenix',
		atlanta: 'America/New_York',
		miami: 'America/New_York',

		// Asia Pacific
		tokyo: 'Asia/Tokyo',
		sydney: 'Australia/Sydney',
		melbourne: 'Australia/Melbourne',
		singapore: 'Asia/Singapore',
		'hong kong': 'Asia/Hong_Kong',
		seoul: 'Asia/Seoul',
		mumbai: 'Asia/Kolkata',
		delhi: 'Asia/Kolkata',
		bangkok: 'Asia/Bangkok',
		manila: 'Asia/Manila',
		jakarta: 'Asia/Jakarta',
		'kuala lumpur': 'Asia/Kuala_Lumpur',
		shanghai: 'Asia/Shanghai',
		beijing: 'Asia/Shanghai',

		// Others
		'tel aviv': 'Asia/Jerusalem',
		'cape town': 'Africa/Johannesburg',
		johannesburg: 'Africa/Johannesburg',
		cairo: 'Africa/Cairo',
		istanbul: 'Europe/Istanbul',
		moscow: 'Europe/Moscow',
		dubai: 'Asia/Dubai',
		riyadh: 'Asia/Riyadh',
		'mexico city': 'America/Mexico_City',
		'são paulo': 'America/Sao_Paulo',
		'sao paulo': 'America/Sao_Paulo',
		'buenos aires': 'America/Argentina/Buenos_Aires',
		santiago: 'America/Santiago'
	}
};

/**
 * Infer timezone from event name and location data
 * Attempts to match patterns in the event name or location information
 */
function inferTimezoneFromEvent(event: {
	name?: string;
	location?: { data?: { attributes?: { name?: string; country?: string } } };
	venue?: { data?: { attributes?: { name?: string; location?: string } } };
}): string {
	// Default fallback timezone
	const DEFAULT_TIMEZONE = 'Europe/Paris'; // Most #play14 events are in Europe

	const searchTexts: string[] = [];

	// Add event name
	if (event.name) {
		searchTexts.push(event.name.toLowerCase());
	}

	// Add location data
	if (event.location?.data?.attributes) {
		const loc = event.location.data.attributes;
		if (loc.name) searchTexts.push(loc.name.toLowerCase());
		if (loc.country) searchTexts.push(loc.country.toLowerCase());
	}

	// Add venue data
	if (event.venue?.data?.attributes) {
		const venue = event.venue.data.attributes;
		if (venue.name) searchTexts.push(venue.name.toLowerCase());
		if (venue.location) searchTexts.push(venue.location.toLowerCase());
	}

	const searchText = searchTexts.join(' ');
	console.log(`🕐 Inferring timezone for: "${searchText.substring(0, 100)}..."`);

	// First try to match specific cities (more specific)
	for (const [city, timezone] of Object.entries(TIMEZONE_MAPPINGS.cities)) {
		if (searchText.includes(city)) {
			console.log(`✅ Found city match: "${city}" → ${timezone}`);
			return timezone;
		}
	}

	// Then try to match countries (less specific)
	for (const [country, timezone] of Object.entries(TIMEZONE_MAPPINGS.countries)) {
		if (searchText.includes(country)) {
			console.log(`✅ Found country match: "${country}" → ${timezone}`);
			return timezone;
		}
	}

	// Special patterns for #play14 events
	if (
		searchText.includes('online') ||
		searchText.includes('virtual') ||
		searchText.includes('remote')
	) {
		console.log('🌐 Virtual event detected, using UTC');
		return 'UTC';
	}

	// #play14 event name patterns with dates and locations
	// Examples: "#play14 Luxembourg 2024", "#play14 Milan 2019", "#play14 Singapore 2018"
	const play14Pattern = /#?play14\s+(\w+)/i;
	const match = searchText.match(play14Pattern);
	if (match) {
		const location = match[1].toLowerCase();
		console.log(`🎯 Found #play14 location pattern: "${location}"`);

		// Check if the extracted location matches our cities or countries
		if (location in TIMEZONE_MAPPINGS.cities) {
			const timezone = TIMEZONE_MAPPINGS.cities[location as keyof typeof TIMEZONE_MAPPINGS.cities];
			console.log(`✅ Found #play14 city match: "${location}" → ${timezone}`);
			return timezone;
		}
		if (location in TIMEZONE_MAPPINGS.countries) {
			const timezone =
				TIMEZONE_MAPPINGS.countries[location as keyof typeof TIMEZONE_MAPPINGS.countries];
			console.log(`✅ Found #play14 country match: "${location}" → ${timezone}`);
			return timezone;
		}
	}

	console.log(`⚠️ No timezone match found, using default: ${DEFAULT_TIMEZONE}`);
	return DEFAULT_TIMEZONE;
}

/**
 * FILE MIGRATION HELPER FUNCTIONS
 */

/**
 * Get the full URL for a file, handling relative URLs from Strapi
 */
function getFullFileUrl(url: string): string {
	// If URL is already absolute, return as-is
	if (url.startsWith('http://') || url.startsWith('https://')) {
		return url;
	}

	// Otherwise, prepend Strapi URL
	const strapiUrl = process.env.STRAPI_API_URL || 'https://community.play14.org';
	return `${strapiUrl}${url.startsWith('/') ? '' : '/'}${url}`;
}

/**
 * Migrate a single image from Strapi format to Convex storage
 * Handles both direct attributes format and StrapiFile format
 */
async function migrateSingleImage(
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	ctx: { runAction: (action: any, args: any) => Promise<any> },
	imageData: unknown
): Promise<string | null> {
	// Handle undefined or null
	if (!imageData) {
		return null;
	}

	// Extract attributes based on format
	let attributes: { url: string; name?: string; mime?: string } | null = null;

	// Type guard for imageData with data property
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const hasDataProperty = (obj: unknown): obj is { data?: any } => {
		return typeof obj === 'object' && obj !== null && 'data' in obj;
	};

	if (hasDataProperty(imageData) && imageData.data?.attributes) {
		// Standard format: { data: { attributes: {...} } }
		attributes = imageData.data.attributes;
	} else if (
		hasDataProperty(imageData) &&
		imageData.data &&
		'id' in imageData.data &&
		'attributes' in imageData.data
	) {
		// StrapiFile format: { data: { id: string, attributes: {...} } }
		attributes = imageData.data.attributes;
	}

	if (!attributes?.url) {
		return null;
	}

	try {
		const fullUrl = getFullFileUrl(attributes.url);
		const result = await ctx.runAction(api.fileMigration.migrateFile, {
			fileUrl: fullUrl,
			fileName: attributes.name,
			mimeType: attributes.mime
		});

		if (result.success) {
			console.log(`Successfully migrated image: ${result.fileName} -> ${result.storageId}`);
			return result.storageId;
		} else {
			console.error(`Failed to migrate image: ${result.error}`);
			return null;
		}
	} catch (error) {
		console.error('Error during image migration:', error);
		return null;
	}
}

/**
 * Migrate multiple images from Strapi format to Convex storage
 * Handles both direct attributes format and StrapiFile format
 */
async function migrateMultipleImages(
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	ctx: { runAction: (action: any, args: any) => Promise<any> },
	imagesData: unknown
): Promise<string[]> {
	// Type guard for imagesData with data property
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const hasDataProperty = (obj: unknown): obj is { data?: any[] } => {
		return typeof obj === 'object' && obj !== null && 'data' in obj;
	};

	// Handle undefined or null
	if (
		!hasDataProperty(imagesData) ||
		!imagesData.data ||
		!Array.isArray(imagesData.data) ||
		imagesData.data.length === 0
	) {
		return [];
	}

	const storageIds: string[] = [];

	for (const imageItem of imagesData.data) {
		// Extract attributes based on format
		let attributes: { url: string; name?: string; mime?: string } | null = null;

		if (imageItem.attributes) {
			// Direct attributes format or StrapiFile format
			attributes = imageItem.attributes;
		}

		if (!attributes?.url) {
			continue;
		}

		try {
			const fullUrl = getFullFileUrl(attributes.url);
			const result = await ctx.runAction(api.fileMigration.migrateFile, {
				fileUrl: fullUrl,
				fileName: attributes.name,
				mimeType: attributes.mime
			});

			if (result.success) {
				console.log(`Successfully migrated image: ${result.fileName} -> ${result.storageId}`);
				storageIds.push(result.storageId);
			} else {
				console.error(`Failed to migrate image: ${result.error}`);
			}
		} catch (error) {
			console.error('Error during image migration:', error);
		}
	}

	return storageIds;
}

/**
 * Migrate an audio file from Strapi format to Convex storage
 * Handles both direct attributes format and StrapiFile format
 */
async function migrateAudioFile(
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	ctx: { runAction: (action: any, args: any) => Promise<any> },
	audioData: unknown
): Promise<string | null> {
	// Handle undefined or null
	if (!audioData) {
		return null;
	}

	// Extract attributes based on format
	let attributes: { url: string; name?: string; mime?: string } | null = null;

	// Type guard for audioData with data property
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const hasDataProperty = (obj: unknown): obj is { data?: any } => {
		return typeof obj === 'object' && obj !== null && 'data' in obj;
	};

	if (hasDataProperty(audioData) && audioData.data?.attributes) {
		// Standard format: { data: { attributes: {...} } }
		attributes = audioData.data.attributes;
	} else if (
		hasDataProperty(audioData) &&
		audioData.data &&
		'id' in audioData.data &&
		'attributes' in audioData.data
	) {
		// StrapiFile format: { data: { id: string, attributes: {...} } }
		attributes = audioData.data.attributes;
	}

	if (!attributes?.url) {
		return null;
	}

	try {
		const fullUrl = getFullFileUrl(attributes.url);
		const result = await ctx.runAction(api.fileMigration.migrateFile, {
			fileUrl: fullUrl,
			fileName: attributes.name,
			mimeType: attributes.mime
		});

		if (result.success) {
			console.log(`Successfully migrated audio: ${result.fileName} -> ${result.storageId}`);
			return result.storageId;
		} else {
			console.error(`Failed to migrate audio: ${result.error}`);
			return null;
		}
	} catch (error) {
		console.error('Error during audio migration:', error);
		return null;
	}
}

/**
 * Migrate resources (PDFs, videos, etc.) from Strapi format to Convex storage
 * Handles both direct attributes format and StrapiFile format
 */
async function migrateResourceFiles(
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	ctx: { runAction: (action: any, args: any) => Promise<any> },
	resourcesData: unknown
): Promise<string[]> {
	// Type guard for resourcesData with data property
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const hasDataProperty = (obj: unknown): obj is { data?: any[] } => {
		return typeof obj === 'object' && obj !== null && 'data' in obj;
	};

	// Handle undefined or null
	if (
		!hasDataProperty(resourcesData) ||
		!resourcesData.data ||
		!Array.isArray(resourcesData.data) ||
		resourcesData.data.length === 0
	) {
		return [];
	}

	const storageIds: string[] = [];

	for (const resourceItem of resourcesData.data) {
		// Extract attributes based on format
		let attributes: { url: string; name?: string; mime?: string } | null = null;

		if (resourceItem.attributes) {
			// Direct attributes format or StrapiFile format
			attributes = resourceItem.attributes;
		}

		if (!attributes?.url) {
			continue;
		}

		try {
			const fullUrl = getFullFileUrl(attributes.url);
			const result = await ctx.runAction(api.fileMigration.migrateFile, {
				fileUrl: fullUrl,
				fileName: attributes.name,
				mimeType: attributes.mime
			});

			if (result.success) {
				console.log(`Successfully migrated resource: ${result.fileName} -> ${result.storageId}`);
				storageIds.push(result.storageId);
			} else {
				console.error(`Failed to migrate resource: ${result.error}`);
			}
		} catch (error) {
			console.error('Error during resource migration:', error);
		}
	}

	return storageIds;
}

/**
 * TAGS MIGRATION - Simple content type to start with
 */

interface StrapiTag {
	value: string;
	createdAt: string;
	updatedAt: string;
}

export const migrateTagsData = mutation({
	args: {
		strapiData: v.any()
	},
	handler: async (ctx, args) => {
		const tags = args.strapiData as StrapiResponse<StrapiTag>;
		const results = [];

		for (const tag of tags.data) {
			try {
				// Check if tag already exists
				const existing = await ctx.db
					.query('tags')
					.filter((q) => q.eq(q.field('strapiId'), tag.id))
					.first();

				if (existing) {
					console.log(`Tag ${tag.attributes.value} already exists, skipping`);
					continue;
				}

				// Insert new tag
				const tagId = await ctx.db.insert('tags', {
					strapiId: tag.id,
					value: tag.attributes.value
				});

				// Track ID mapping
				await ctx.db.insert('idMappings', {
					strapiType: 'tag',
					strapiId: tag.id,
					convexId: tagId
				});

				results.push({ success: true, strapiId: tag.id, convexId: tagId });
			} catch (error) {
				console.error(`Error migrating tag ${tag.id}:`, error);
				results.push({
					success: false,
					strapiId: tag.id,
					error: error instanceof Error ? error.message : 'Unknown error'
				});
			}
		}

		return {
			totalProcessed: tags.data.length,
			successful: results.filter((r) => r.success).length,
			failed: results.filter((r) => !r.success).length,
			results
		};
	}
});

/**
 * EXPECTATIONS MIGRATION - Another simple content type
 */

interface StrapiExpectation {
	title: string;
	type: string;
	icon: string;
	content: string;
	createdAt: string;
	updatedAt: string;
}

export const migrateExpectationsData = mutation({
	args: {
		strapiData: v.any()
	},
	handler: async (ctx, args) => {
		const expectations = args.strapiData as StrapiResponse<StrapiExpectation>;
		const results = [];

		for (const expectation of expectations.data) {
			try {
				// Check if expectation already exists
				const existing = await ctx.db
					.query('expectations')
					.filter((q) => q.eq(q.field('strapiId'), expectation.id))
					.first();

				if (existing) {
					console.log(`Expectation ${expectation.attributes.title} already exists, skipping`);
					continue;
				}

				// Insert new expectation
				const expectationId = await ctx.db.insert('expectations', {
					strapiId: expectation.id,
					title: expectation.attributes.title,
					type: expectation.attributes.type as 'Main' | 'Secondary',
					icon: expectation.attributes.icon,
					content: expectation.attributes.content
				});

				// Track ID mapping
				await ctx.db.insert('idMappings', {
					strapiType: 'expectation',
					strapiId: expectation.id,
					convexId: expectationId
				});

				results.push({ success: true, strapiId: expectation.id, convexId: expectationId });
			} catch (error) {
				console.error(`Error migrating expectation ${expectation.id}:`, error);
				results.push({
					success: false,
					strapiId: expectation.id,
					error: error instanceof Error ? error.message : 'Unknown error'
				});
			}
		}

		return {
			totalProcessed: expectations.data.length,
			successful: results.filter((r) => r.success).length,
			failed: results.filter((r) => !r.success).length,
			results
		};
	}
});

/**
 * INTERNAL MUTATIONS - Database operations called from actions
 */

export const insertPlayer = internalMutation({
	args: {
		strapiId: v.string(),
		name: v.string(),
		slug: v.string(),
		position: v.union(
			v.literal('Player'),
			v.literal('Host'),
			v.literal('Mentor'),
			v.literal('Founder')
		),
		company: v.union(v.string(), v.null()),
		tagline: v.union(v.string(), v.null()),
		bio: v.union(v.string(), v.null()),
		website: v.union(v.string(), v.null()),
		avatarId: v.optional(v.string()),
		location: v.optional(
			v.object({
				lat: v.number(),
				lng: v.number(),
				address: v.optional(v.string())
			})
		),
		locationOriginal: v.optional(v.string()),
		socialNetworks: v.array(
			v.object({
				type: v.union(v.string(), v.null()),
				url: v.string() // Filtered out nulls in processing
			})
		)
	},
	handler: async (ctx, args) => {
		const playerId = await ctx.db.insert('players', {
			strapiId: args.strapiId,
			name: args.name,
			slug: args.slug,
			position: args.position,
			company: args.company || undefined,
			tagline: args.tagline || undefined,
			bio: args.bio === null ? undefined : args.bio,
			website: args.website || undefined,
			avatarId: args.avatarId as Id<'_storage'> | undefined,
			location: args.location,
			locationOriginal: args.locationOriginal,
			socialNetworks: args.socialNetworks
		});

		// Track ID mapping
		await ctx.db.insert('idMappings', {
			strapiType: 'player',
			strapiId: args.strapiId,
			convexId: playerId
		});

		return playerId;
	}
});

export const insertVenue = internalMutation({
	args: {
		strapiId: v.string(),
		name: v.string(),
		shortName: v.optional(v.string()),
		logo: v.optional(v.string()),
		website: v.optional(v.string()),
		location: v.optional(
			v.object({
				lat: v.number(),
				lng: v.number(),
				address: v.optional(v.string())
			})
		),
		locationOriginal: v.optional(v.string()),
		addressDetails: v.optional(v.string()),
		socialNetworks: v.array(
			v.object({
				type: v.union(v.string(), v.null()),
				url: v.union(v.string(), v.null())
			})
		)
	},
	handler: async (ctx, args) => {
		const venueId = await ctx.db.insert('venues', {
			strapiId: args.strapiId,
			name: args.name,
			shortName: args.shortName,
			logo: args.logo as Id<'_storage'> | undefined,
			website: args.website,
			location: args.location,
			locationOriginal: args.locationOriginal,
			addressDetails: args.addressDetails,
			socialNetworks: args.socialNetworks
		});

		// Track ID mapping
		await ctx.db.insert('idMappings', {
			strapiType: 'venue',
			strapiId: args.strapiId,
			convexId: venueId
		});

		return venueId;
	}
});

export const insertSponsor = internalMutation({
	args: {
		strapiId: v.string(),
		name: v.string(),
		url: v.optional(v.string()),
		logo: v.optional(v.string()),
		socialNetworks: v.array(
			v.object({
				type: v.union(v.string(), v.null()),
				url: v.union(v.string(), v.null())
			})
		)
	},
	handler: async (ctx, args) => {
		const sponsorId = await ctx.db.insert('sponsors', {
			strapiId: args.strapiId,
			name: args.name,
			url: args.url,
			logo: args.logo as Id<'_storage'> | undefined,
			socialNetworks: args.socialNetworks
		});

		// Track ID mapping
		await ctx.db.insert('idMappings', {
			strapiType: 'sponsor',
			strapiId: args.strapiId,
			convexId: sponsorId
		});

		return sponsorId;
	}
});

export const checkPlayerExists = internalQuery({
	args: {
		strapiId: v.string()
	},
	handler: async (ctx, args) => {
		return await ctx.db
			.query('players')
			.filter((q) => q.eq(q.field('strapiId'), args.strapiId))
			.first();
	}
});

export const checkVenueExists = internalQuery({
	args: {
		strapiId: v.string()
	},
	handler: async (ctx, args) => {
		return await ctx.db
			.query('venues')
			.filter((q) => q.eq(q.field('strapiId'), args.strapiId))
			.first();
	}
});

export const checkSponsorExists = internalQuery({
	args: {
		strapiId: v.string()
	},
	handler: async (ctx, args) => {
		return await ctx.db
			.query('sponsors')
			.filter((q) => q.eq(q.field('strapiId'), args.strapiId))
			.first();
	}
});

/**
 * PLAYERS MIGRATION - Complex content type with files and relationships
 */

interface StrapiFile {
	id: string;
	attributes: {
		name: string;
		url: string;
		blurhash?: string;
		width?: number;
		height?: number;
		hash: string;
		mime: string;
		provider: string;
		size: number;
	};
}

interface StrapiSocialNetwork {
	id: string;
	url: string;
	type: string;
}

interface StrapiPlayer {
	slug: string;
	name: string;
	position: string;
	company?: string;
	tagline?: string;
	bio?: string;
	website?: string;
	location?: {
		center?: [number, number];
		place_name?: string;
		text?: string;
		[key: string]: unknown;
	};
	avatar?: { data?: StrapiFile };
	socialNetworks: StrapiSocialNetwork[];
	createdAt: string;
	updatedAt: string;
}

export const migratePlayersData = action({
	args: {
		strapiData: v.record(v.string(), v.any())
	},
	handler: async (
		ctx,
		args
	): Promise<{
		totalProcessed: number;
		successful: number;
		failed: number;
		results: Array<{ success: boolean; strapiId: string; convexId?: string; error?: string }>;
	}> => {
		const players = args.strapiData as StrapiResponse<StrapiPlayer>;
		const results = [];

		console.log(`Starting migration of ${players.data.length} players...`);

		for (const player of players.data) {
			try {
				console.log(`Processing player: ${player.attributes.name} (${player.id})`);

				// Check if player already exists
				const existing = await ctx.runQuery(internal.strapiMigration.checkPlayerExists, {
					strapiId: player.id
				});

				if (existing) {
					console.log(`Player ${player.attributes.name} already exists, skipping`);
					continue;
				}

				console.log(`Player ${player.attributes.name} does not exist, proceeding with migration`);

				// Migrate avatar image if present
				const avatarId = await migrateSingleImage(ctx, player.attributes.avatar);

				// Parse location (Mapbox format)
				let location: { lat: number; lng: number; address?: string } | undefined;
				let locationOriginal: string | undefined;

				if (player.attributes.location) {
					locationOriginal = JSON.stringify(player.attributes.location);
					try {
						// For Mapbox format, center contains [lng, lat]
						if (
							player.attributes.location.center &&
							player.attributes.location.center.length >= 2
						) {
							location = {
								lng: player.attributes.location.center[0],
								lat: player.attributes.location.center[1],
								address: player.attributes.location.place_name || player.attributes.location.text
							};
						}
					} catch {
						// If parsing fails, just store the original
						location = undefined;
					}
				}

				// Map social networks
				const socialNetworks =
					player.attributes.socialNetworks?.map((sn) => ({
						type: sn.type,
						url: sn.url
					})) || [];

				// Validate and map position
				const validPositions = ['Player', 'Host', 'Mentor', 'Founder'] as const;
				const position = validPositions.includes(
					player.attributes.position as 'Player' | 'Host' | 'Mentor' | 'Founder'
				)
					? (player.attributes.position as 'Player' | 'Host' | 'Mentor' | 'Founder')
					: 'Player'; // Default to Player if position is invalid

				console.log(`About to insert player with data:`, {
					strapiId: player.id,
					name: player.attributes.name,
					position,
					location,
					socialNetworksCount: socialNetworks.length
				});

				// Generate slug from name (players don't have slug field in Strapi)
				const slug = player.attributes.name
					.toLowerCase()
					.replace(/[^a-z0-9]+/g, '-')
					.replace(/(^-|-$)/g, '');

				// Insert new player using internal mutation
				const playerId: string = await ctx.runMutation(internal.strapiMigration.insertPlayer, {
					strapiId: player.id,
					name: player.attributes.name,
					slug,
					position,
					company: player.attributes.company || null,
					tagline: player.attributes.tagline || null,
					bio: player.attributes.bio || null,
					website: player.attributes.website || null,
					avatarId: avatarId || undefined,
					location,
					locationOriginal,
					socialNetworks
				});

				console.log(`Successfully inserted player with convex ID: ${playerId}`);

				// Note: Event relationships will be handled after events migration

				results.push({ success: true, strapiId: player.id, convexId: playerId });
				console.log(`Successfully migrated player: ${player.attributes.name}`);
			} catch (error) {
				console.error(`Error migrating player ${player.id}:`, error);
				results.push({
					success: false,
					strapiId: player.id,
					error: error instanceof Error ? error.message : 'Unknown error'
				});
			}
		}

		return {
			totalProcessed: players.data.length,
			successful: results.filter((r) => r.success).length,
			failed: results.filter((r) => !r.success).length,
			results
		};
	}
});

/**
 * VENUES MIGRATION - Supporting content type with location data
 */

interface StrapiVenue {
	name: string;
	shortName?: string;
	logo?: { data?: StrapiFile };
	website?: string;
	location?: {
		center?: [number, number];
		place_name?: string;
		address?: string;
		[key: string]: unknown;
	};
	locationOriginal?: string;
	addressDetails?: string;
	socialNetworks?: Array<{ type: string; url: string }>;
	createdAt: string;
	updatedAt: string;
}

export const migrateVenuesData = action({
	args: {
		strapiData: v.record(v.string(), v.any())
	},
	handler: async (
		ctx,
		args
	): Promise<{
		totalProcessed: number;
		successful: number;
		failed: number;
		results: Array<{ success: boolean; strapiId: string; convexId?: string; error?: string }>;
	}> => {
		const venues = args.strapiData as StrapiResponse<StrapiVenue>;
		const results = [];

		console.log(`Starting migration of ${venues.data.length} venues...`);

		for (const venue of venues.data) {
			try {
				// Check if venue already exists
				const existing = await ctx.runQuery(internal.strapiMigration.checkVenueExists, {
					strapiId: venue.id
				});

				if (existing) {
					console.log(`Venue ${venue.attributes.name} already exists, skipping`);
					continue;
				}

				// Parse location if it exists
				let location: { lat: number; lng: number; address?: string } | undefined;
				let locationOriginal: string | undefined;

				if (venue.attributes.location) {
					locationOriginal = JSON.stringify(venue.attributes.location);
					try {
						// Extract coordinates from Mapbox location data
						if (venue.attributes.location.center && venue.attributes.location.center.length >= 2) {
							location = {
								lng: venue.attributes.location.center[0],
								lat: venue.attributes.location.center[1],
								address: venue.attributes.location.place_name || venue.attributes.location.address
							};
						}
					} catch {
						// If parsing fails, just store the original
						location = undefined;
					}
				}

				// Migrate logo if present
				const logo = await migrateSingleImage(ctx, venue.attributes.logo);

				// Insert new venue using internal mutation
				const venueId: string = await ctx.runMutation(internal.strapiMigration.insertVenue, {
					strapiId: venue.id,
					name: venue.attributes.name,
					shortName: venue.attributes.shortName || undefined,
					logo: logo || undefined,
					website: venue.attributes.website || undefined,
					location,
					locationOriginal,
					addressDetails: venue.attributes.addressDetails || undefined,
					socialNetworks: venue.attributes.socialNetworks || []
				});

				results.push({ success: true, strapiId: venue.id, convexId: venueId });
				console.log(`Successfully migrated venue: ${venue.attributes.name}`);
			} catch (error) {
				console.error(`Error migrating venue ${venue.id}:`, error);
				results.push({
					success: false,
					strapiId: venue.id,
					error: error instanceof Error ? error.message : 'Unknown error'
				});
			}
		}

		return {
			totalProcessed: venues.data.length,
			successful: results.filter((r) => r.success).length,
			failed: results.filter((r) => !r.success).length,
			results
		};
	}
});

/**
 * SPONSORS MIGRATION - Supporting content type with logos and social networks
 */

interface StrapiSponsor {
	name: string;
	url?: string;
	logo?: { data?: StrapiFile };
	socialNetworks: StrapiSocialNetwork[];
	createdAt: string;
	updatedAt: string;
}

export const migrateSponsorsData = action({
	args: {
		strapiData: v.record(v.string(), v.any())
	},
	handler: async (
		ctx,
		args
	): Promise<{
		totalProcessed: number;
		successful: number;
		failed: number;
		results: Array<{ success: boolean; strapiId: string; convexId?: string; error?: string }>;
	}> => {
		const sponsors = args.strapiData as StrapiResponse<StrapiSponsor>;
		const results = [];

		console.log(`Starting migration of ${sponsors.data.length} sponsors...`);

		for (const sponsor of sponsors.data) {
			try {
				// Check if sponsor already exists
				const existing = await ctx.runQuery(internal.strapiMigration.checkSponsorExists, {
					strapiId: sponsor.id
				});

				if (existing) {
					console.log(`Sponsor ${sponsor.attributes.name} already exists, skipping`);
					continue;
				}

				// Migrate logo if present
				const logoId = await migrateSingleImage(ctx, sponsor.attributes.logo);

				// Map social networks
				const socialNetworks =
					sponsor.attributes.socialNetworks?.map((sn) => ({
						type: sn.type,
						url: sn.url
					})) || [];

				// Insert new sponsor using internal mutation
				const sponsorId: string = await ctx.runMutation(internal.strapiMigration.insertSponsor, {
					strapiId: sponsor.id,
					name: sponsor.attributes.name,
					url: sponsor.attributes.url || undefined,
					logo: logoId || undefined,
					socialNetworks
				});

				results.push({ success: true, strapiId: sponsor.id, convexId: sponsorId });
				console.log(`Successfully migrated sponsor: ${sponsor.attributes.name}`);
			} catch (error) {
				console.error(`Error migrating sponsor ${sponsor.id}:`, error);
				results.push({
					success: false,
					strapiId: sponsor.id,
					error: error instanceof Error ? error.message : 'Unknown error'
				});
			}
		}

		return {
			totalProcessed: sponsors.data.length,
			successful: results.filter((r) => r.success).length,
			failed: results.filter((r) => !r.success).length,
			results
		};
	}
});

/**
 * Complete migration workflow for a single content type
 */
export const migrateSingleContentType = action({
	args: {
		contentType: v.string(),
		strapiUrl: v.optional(v.string()),
		strapiSecret: v.optional(v.string())
	},
	handler: async (ctx, args): Promise<MigrationResult> => {
		const startTime = Date.now();
		const result: MigrationResult = {
			success: false,
			contentType: args.contentType,
			totalFetched: 0,
			totalMigrated: 0,
			errors: [],
			duration: 0
		};

		try {
			// Step 1: Fetch data from Strapi
			let fetchResult;

			if (args.contentType === 'events') {
				// Use batched fetch for events to avoid timeouts
				console.log('🔄 Using batched fetch for events...');
				fetchResult = await ctx.runAction(
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					(internal as any).strapiMigration.fetchEventsBatched,
					{
						strapiUrl: args.strapiUrl,
						strapiSecret: args.strapiSecret
					}
				);
				console.log(
					`📊 Batched fetch result: ${fetchResult.totalFetched} events from ${fetchResult.totalPages} pages`
				);
			} else {
				// Use regular fetch for other content types
				fetchResult = await ctx.runAction(
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					(internal as any).strapiMigration.fetchStrapiData,
					{
						contentType: args.contentType,
						strapiUrl: args.strapiUrl,
						strapiSecret: args.strapiSecret
					}
				);
			}

			if (!fetchResult.success || !fetchResult.data) {
				result.errors.push(fetchResult.error || 'Failed to fetch data');
				return result;
			}

			// Step 2: Process based on content type
			let migrationResult;
			switch (args.contentType) {
				case 'tags':
					migrationResult = await ctx.runMutation(
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						(internal as any).strapiMigration.migrateTagsData,
						{
							strapiData: (fetchResult.data as { tags: unknown }).tags
						}
					);
					break;

				case 'expectations':
					migrationResult = await ctx.runMutation(
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						(internal as any).strapiMigration.migrateExpectationsData,
						{
							strapiData: (fetchResult.data as { expectations: unknown }).expectations
						}
					);
					break;

				case 'players':
					migrationResult = await ctx.runAction(
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						(internal as any).strapiMigration.migratePlayersData,
						{
							strapiData: (fetchResult.data as { players: unknown }).players
						}
					);
					break;

				case 'venues':
					migrationResult = await ctx.runAction(
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						(internal as any).strapiMigration.migrateVenuesData,
						{
							strapiData: (fetchResult.data as { venues: unknown }).venues
						}
					);
					break;

				case 'sponsors':
					migrationResult = await ctx.runAction(
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						(internal as any).strapiMigration.migrateSponsorsData,
						{
							strapiData: (fetchResult.data as { sponsors: unknown }).sponsors
						}
					);
					break;

				case 'eventLocations':
					migrationResult = await ctx.runAction(
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						(internal as any).strapiMigration.migrateEventLocationsData,
						{
							strapiData: (fetchResult.data as { eventLocations: unknown }).eventLocations
						}
					);
					break;

				case 'testimonials':
					migrationResult = await ctx.runAction(
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						(internal as any).strapiMigration.migrateTestimonialsData,
						{
							strapiData: (fetchResult.data as { testimonials: unknown }).testimonials
						}
					);
					break;

				case 'home':
					migrationResult = await ctx.runAction(
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						(internal as any).strapiMigration.migrateHomeData,
						{
							strapiData: (fetchResult.data as { home: unknown }).home
						}
					);
					break;

				case 'history':
					migrationResult = await ctx.runAction(
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						(internal as any).strapiMigration.migrateHistoryData,
						{
							strapiData: (fetchResult.data as { history: unknown }).history
						}
					);
					break;

				case 'format':
					migrationResult = await ctx.runAction(
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						(internal as any).strapiMigration.migrateFormatData,
						{
							strapiData: (fetchResult.data as { format: unknown }).format
						}
					);
					break;

				case 'hosting':
					migrationResult = await ctx.runAction(
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						(internal as any).strapiMigration.migrateHostingData,
						{
							strapiData: (fetchResult.data as { hosting: unknown }).hosting
						}
					);
					break;

				case 'articles':
					migrationResult = await ctx.runAction(
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						(internal as any).strapiMigration.migrateArticlesData,
						{
							strapiData: (fetchResult.data as { articles: unknown }).articles
						}
					);
					break;

				case 'games':
					migrationResult = await ctx.runAction(
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						(internal as any).strapiMigration.migrateGamesData,
						{
							strapiData: (fetchResult.data as { games: unknown }).games
						}
					);
					break;

				case 'events':
					migrationResult = await ctx.runAction(
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						(internal as any).strapiMigration.migrateEventsData,
						{
							strapiData: (fetchResult.data as { events: unknown }).events
						}
					);
					break;

				default:
					result.errors.push(`Migration not implemented for content type: ${args.contentType}`);
					return result;
			}

			result.totalFetched = migrationResult.totalProcessed;
			result.totalMigrated = migrationResult.successful;
			result.success = migrationResult.failed === 0;

			if (migrationResult.failed > 0) {
				result.errors.push(`${migrationResult.failed} items failed to migrate`);
			}
		} catch (error) {
			result.errors.push(error instanceof Error ? error.message : 'Unknown error');
		}

		result.duration = Date.now() - startTime;
		return result;
	}
});

/**
 * Debug function to test single player migration
 */
export const debugSinglePlayer = action({
	args: {
		playerData: v.record(v.string(), v.any())
	},
	handler: async (ctx, args) => {
		try {
			const player = args.playerData;
			console.log('Player data:', JSON.stringify(player, null, 2));

			// Validate position
			const validPositions = ['Player', 'Host', 'Mentor', 'Founder'] as const;
			const position = validPositions.includes(
				player.attributes.position as 'Player' | 'Host' | 'Mentor' | 'Founder'
			)
				? (player.attributes.position as 'Player' | 'Host' | 'Mentor' | 'Founder')
				: 'Player';
			console.log('Position validation:', player.attributes.position, '->', position);

			// Parse location
			let location: { lat: number; lng: number; address?: string } | undefined;
			let locationOriginal: string | undefined;

			if (player.attributes.location) {
				locationOriginal = JSON.stringify(player.attributes.location);
				console.log('Location original:', locationOriginal.substring(0, 200) + '...');
				try {
					// For Mapbox format, center contains [lng, lat]
					if (player.attributes.location.center && player.attributes.location.center.length >= 2) {
						location = {
							lng: player.attributes.location.center[0],
							lat: player.attributes.location.center[1],
							address: player.attributes.location.place_name || player.attributes.location.text
						};
						console.log('Parsed location:', location);
					}
				} catch (error) {
					console.log('Location parsing error:', error);
				}
			}

			// Map social networks, filtering out null/invalid entries
			const socialNetworks =
				player.attributes.socialNetworks
					?.filter(
						(sn: { type: string | null; url: string | null }) => sn.url && sn.url.trim() !== ''
					)
					.map((sn: { type: string | null; url: string | null }) => ({
						type: sn.type,
						url: sn.url! // Non-null assertion since we filtered out nulls
					})) || [];
			console.log('Social networks:', socialNetworks);

			return {
				success: true,
				playerName: player.attributes.name,
				position,
				location,
				socialNetworks
			};
		} catch (error) {
			console.error('Debug error:', error);
			return {
				success: false,
				error: error instanceof Error ? error.message : 'Unknown error'
			};
		}
	}
});

/**
 * Test migration status and utilities
 */
export const getMigrationStatus = action({
	args: {
		contentType: v.optional(v.string())
	},
	handler: async (
		ctx,
		args
	): Promise<{ contentType?: string; count?: number; tags?: number; expectations?: number }> => {
		if (args.contentType) {
			// Get count for specific content type
			const tableName = args.contentType === 'expectations' ? 'expectations' : 'tags';
			const count = await ctx.runQuery(
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				(internal as any).strapiMigration.getContentCount,
				{
					tableName
				}
			);
			return { contentType: args.contentType, count };
		}

		// Get counts for all implemented content types
		const tagsCount = await ctx.runQuery(
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(internal as any).strapiMigration.getContentCount,
			{
				tableName: 'tags'
			}
		);
		const expectationsCount = await ctx.runQuery(
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(internal as any).strapiMigration.getContentCount,
			{
				tableName: 'expectations'
			}
		);

		return {
			tags: tagsCount,
			expectations: expectationsCount
		};
	}
});

export const getContentCount = query({
	args: {
		tableName: v.string()
	},
	handler: async (ctx, args): Promise<number> => {
		const results = await ctx.db
			.query(args.tableName as 'tags' | 'expectations' | 'players' | 'venues' | 'sponsors')
			.collect();
		return results.length;
	}
});

/**
 * HOME MIGRATION - Single type content for homepage
 */

interface StrapiHome {
	images: { data: StrapiFile[] };
	createdAt: string;
	updatedAt: string;
}

export const checkHomeExists = internalQuery({
	args: {
		strapiId: v.string()
	},
	handler: async (ctx, args) => {
		return await ctx.db
			.query('home')
			.filter((q) => q.eq(q.field('strapiId'), args.strapiId))
			.first();
	}
});

export const insertHome = internalMutation({
	args: {
		strapiId: v.string(),
		imageIds: v.array(v.string())
	},
	handler: async (ctx, args) => {
		const homeId = await ctx.db.insert('home', {
			strapiId: args.strapiId,
			imageIds: args.imageIds as Id<'_storage'>[]
		});

		await ctx.db.insert('idMappings', {
			strapiType: 'home',
			strapiId: args.strapiId,
			convexId: homeId
		});

		return homeId;
	}
});

export const migrateHomeData = action({
	args: {
		strapiData: v.record(v.string(), v.any())
	},
	handler: async (
		ctx,
		args
	): Promise<{
		totalProcessed: number;
		successful: number;
		failed: number;
		results: Array<{ success: boolean; strapiId: string; convexId?: string; error?: string }>;
	}> => {
		const homeData = args.strapiData as { data?: { id: string; attributes: StrapiHome } };
		const results: Array<{
			success: boolean;
			strapiId: string;
			convexId?: string;
			error?: string;
		}> = [];

		// Home is a single type, so there's only one record
		if (!homeData.data) {
			return {
				totalProcessed: 0,
				successful: 0,
				failed: 0,
				results: []
			};
		}

		const home = homeData.data;

		try {
			// Check if already migrated
			const existing = await ctx.runQuery(internal.strapiMigration.checkHomeExists, {
				strapiId: home.id
			});

			if (existing) {
				console.log(`Home already migrated with ID: ${existing._id}`);
				results.push({ success: true, strapiId: home.id, convexId: existing._id });
				return {
					totalProcessed: 1,
					successful: 1,
					failed: 0,
					results
				};
			}

			// Migrate images for home page
			const imageIds = await migrateMultipleImages(ctx, home.attributes.images);

			// Insert home record
			const homeId = await ctx.runMutation(internal.strapiMigration.insertHome, {
				strapiId: home.id,
				imageIds
			});

			results.push({ success: true, strapiId: home.id, convexId: homeId });
			console.log(`Successfully migrated home page with ${imageIds.length} images`);
		} catch (error) {
			console.error(`Error migrating home:`, error);
			results.push({
				success: false,
				strapiId: home.id,
				error: error instanceof Error ? error.message : 'Unknown error'
			});
		}

		return {
			totalProcessed: 1,
			successful: results.filter((r) => r.success).length,
			failed: results.filter((r) => !r.success).length,
			results
		};
	}
});

/**
 * HISTORY MIGRATION - Single type content with timeline items
 */

interface StrapiHistoryItem {
	id: string;
	date: string;
	dateFormat: 'Year' | 'Month' | 'Day';
	additionalText?: string;
	title: string;
	description: string;
	image: { data?: StrapiFile };
}

interface StrapiHistory {
	founders?: string;
	intro?: string;
	keyMoments?: string;
	items: StrapiHistoryItem[];
	createdAt: string;
	updatedAt: string;
}

export const checkHistoryExists = internalQuery({
	args: {
		strapiId: v.string()
	},
	handler: async (ctx, args) => {
		return await ctx.db
			.query('history')
			.filter((q) => q.eq(q.field('strapiId'), args.strapiId))
			.first();
	}
});

export const insertHistory = internalMutation({
	args: {
		strapiId: v.string(),
		founders: v.union(v.string(), v.null()),
		intro: v.union(v.string(), v.null()),
		keyMoments: v.union(v.string(), v.null()),
		items: v.array(
			v.object({
				date: v.number(),
				dateFormat: v.union(v.literal('Year'), v.literal('Month'), v.literal('Day')),
				additionalText: v.optional(v.string()),
				title: v.string(),
				description: v.string(),
				imageId: v.union(v.string(), v.id('_storage'))
			})
		)
	},
	handler: async (ctx, args) => {
		const historyId = await ctx.db.insert('history', {
			strapiId: args.strapiId,
			founders: args.founders || undefined,
			intro: args.intro || undefined,
			keyMoments: args.keyMoments || undefined,
			items: args.items.map((item) => ({
				...item,
				imageId: item.imageId as Id<'_storage'>
			}))
		});

		await ctx.db.insert('idMappings', {
			strapiType: 'history',
			strapiId: args.strapiId,
			convexId: historyId
		});

		return historyId;
	}
});

export const migrateHistoryData = action({
	args: {
		strapiData: v.record(v.string(), v.any())
	},
	handler: async (
		ctx,
		args
	): Promise<{
		totalProcessed: number;
		successful: number;
		failed: number;
		results: Array<{ success: boolean; strapiId: string; convexId?: string; error?: string }>;
	}> => {
		const historyData = args.strapiData as { data?: { id: string; attributes: StrapiHistory } };
		const results: Array<{
			success: boolean;
			strapiId: string;
			convexId?: string;
			error?: string;
		}> = [];

		// History is a single type, so there's only one record
		if (!historyData.data) {
			return {
				totalProcessed: 0,
				successful: 0,
				failed: 0,
				results: []
			};
		}

		const history = historyData.data;

		try {
			// Check if already migrated
			const existing = await ctx.runQuery(internal.strapiMigration.checkHistoryExists, {
				strapiId: history.id
			});

			if (existing) {
				console.log(`History already migrated with ID: ${existing._id}`);
				results.push({ success: true, strapiId: history.id, convexId: existing._id });
				return {
					totalProcessed: 1,
					successful: 1,
					failed: 0,
					results
				};
			}

			// Process timeline items
			const items = [];
			for (const item of history.attributes.items || []) {
				// Parse date based on format
				let date: number;
				if (item.dateFormat === 'Year') {
					date = new Date(item.date).getTime();
				} else if (item.dateFormat === 'Month') {
					date = new Date(item.date).getTime();
				} else {
					date = new Date(item.date).getTime();
				}

				// Migrate image for this timeline item
				const imageId = (await migrateSingleImage(ctx, item.image)) || 'placeholder';

				items.push({
					date,
					dateFormat: item.dateFormat,
					additionalText: item.additionalText || undefined,
					title: item.title,
					description: item.description,
					imageId
				});
			}

			// Insert history record
			const historyId = await ctx.runMutation(internal.strapiMigration.insertHistory, {
				strapiId: history.id,
				founders: history.attributes.founders || null,
				intro: history.attributes.intro || null,
				keyMoments: history.attributes.keyMoments || null,
				items
			});

			results.push({ success: true, strapiId: history.id, convexId: historyId });
			console.log(`Successfully migrated history with ${items.length} timeline items`);
		} catch (error) {
			console.error(`Error migrating history:`, error);
			results.push({
				success: false,
				strapiId: history.id,
				error: error instanceof Error ? error.message : 'Unknown error'
			});
		}

		return {
			totalProcessed: 1,
			successful: results.filter((r) => r.success).length,
			failed: results.filter((r) => !r.success).length,
			results
		};
	}
});

/**
 * FORMAT MIGRATION - Single type content with rich text fields
 */

interface StrapiFormat {
	openspace?: string;
	lawOfTwoFeet?: string;
	butterfly?: string;
	bumblebee?: string;
	schedule?: string;
	createdAt: string;
	updatedAt: string;
}

export const checkFormatExists = internalQuery({
	args: {
		strapiId: v.string()
	},
	handler: async (ctx, args) => {
		return await ctx.db
			.query('format')
			.filter((q) => q.eq(q.field('strapiId'), args.strapiId))
			.first();
	}
});

export const insertFormat = internalMutation({
	args: {
		strapiId: v.string(),
		openspace: v.union(v.string(), v.null()),
		lawOfTwoFeet: v.union(v.string(), v.null()),
		butterfly: v.union(v.string(), v.null()),
		bumblebee: v.union(v.string(), v.null()),
		schedule: v.union(v.string(), v.null())
	},
	handler: async (ctx, args) => {
		const formatId = await ctx.db.insert('format', {
			strapiId: args.strapiId,
			openspace: args.openspace || undefined,
			lawOfTwoFeet: args.lawOfTwoFeet || undefined,
			butterfly: args.butterfly || undefined,
			bumblebee: args.bumblebee || undefined,
			schedule: args.schedule || undefined
		});

		await ctx.db.insert('idMappings', {
			strapiType: 'format',
			strapiId: args.strapiId,
			convexId: formatId
		});

		return formatId;
	}
});

export const migrateFormatData = action({
	args: {
		strapiData: v.record(v.string(), v.any())
	},
	handler: async (
		ctx,
		args
	): Promise<{
		totalProcessed: number;
		successful: number;
		failed: number;
		results: Array<{ success: boolean; strapiId: string; convexId?: string; error?: string }>;
	}> => {
		const formatData = args.strapiData as { data?: { id: string; attributes: StrapiFormat } };
		const results: Array<{
			success: boolean;
			strapiId: string;
			convexId?: string;
			error?: string;
		}> = [];

		// Format is a single type, so there's only one record
		if (!formatData.data) {
			return {
				totalProcessed: 0,
				successful: 0,
				failed: 0,
				results: []
			};
		}

		const format = formatData.data;

		try {
			// Check if already migrated
			const existing = await ctx.runQuery(internal.strapiMigration.checkFormatExists, {
				strapiId: format.id
			});

			if (existing) {
				console.log(`Format already migrated with ID: ${existing._id}`);
				results.push({ success: true, strapiId: format.id, convexId: existing._id });
				return {
					totalProcessed: 1,
					successful: 1,
					failed: 0,
					results
				};
			}

			// Insert format record
			const formatId = await ctx.runMutation(internal.strapiMigration.insertFormat, {
				strapiId: format.id,
				openspace: format.attributes.openspace || null,
				lawOfTwoFeet: format.attributes.lawOfTwoFeet || null,
				butterfly: format.attributes.butterfly || null,
				bumblebee: format.attributes.bumblebee || null,
				schedule: format.attributes.schedule || null
			});

			results.push({ success: true, strapiId: format.id, convexId: formatId });
			console.log(`Successfully migrated format with rich text content`);
		} catch (error) {
			console.error(`Error migrating format:`, error);
			results.push({
				success: false,
				strapiId: format.id,
				error: error instanceof Error ? error.message : 'Unknown error'
			});
		}

		return {
			totalProcessed: 1,
			successful: results.filter((r) => r.success).length,
			failed: results.filter((r) => !r.success).length,
			results
		};
	}
});

/**
 * HOSTING MIGRATION - Single type content with content field
 */

interface StrapiHosting {
	content?: string;
	createdAt: string;
	updatedAt: string;
}

export const checkHostingExists = internalQuery({
	args: {
		strapiId: v.string()
	},
	handler: async (ctx, args) => {
		return await ctx.db
			.query('hosting')
			.filter((q) => q.eq(q.field('strapiId'), args.strapiId))
			.first();
	}
});

export const insertHosting = internalMutation({
	args: {
		strapiId: v.string(),
		content: v.union(v.string(), v.null())
	},
	handler: async (ctx, args) => {
		const hostingId = await ctx.db.insert('hosting', {
			strapiId: args.strapiId,
			content: args.content || undefined
		});

		await ctx.db.insert('idMappings', {
			strapiType: 'hosting',
			strapiId: args.strapiId,
			convexId: hostingId
		});

		return hostingId;
	}
});

export const migrateHostingData = action({
	args: {
		strapiData: v.record(v.string(), v.any())
	},
	handler: async (
		ctx,
		args
	): Promise<{
		totalProcessed: number;
		successful: number;
		failed: number;
		results: Array<{ success: boolean; strapiId: string; convexId?: string; error?: string }>;
	}> => {
		const hostingData = args.strapiData as { data?: { id: string; attributes: StrapiHosting } };
		const results: Array<{
			success: boolean;
			strapiId: string;
			convexId?: string;
			error?: string;
		}> = [];

		// Hosting is a single type, so there's only one record
		if (!hostingData.data) {
			return {
				totalProcessed: 0,
				successful: 0,
				failed: 0,
				results: []
			};
		}

		const hosting = hostingData.data;

		try {
			// Check if already migrated
			const existing = await ctx.runQuery(internal.strapiMigration.checkHostingExists, {
				strapiId: hosting.id
			});

			if (existing) {
				console.log(`Hosting already migrated with ID: ${existing._id}`);
				results.push({ success: true, strapiId: hosting.id, convexId: existing._id });
				return {
					totalProcessed: 1,
					successful: 1,
					failed: 0,
					results
				};
			}

			// Insert hosting record
			const hostingId = await ctx.runMutation(internal.strapiMigration.insertHosting, {
				strapiId: hosting.id,
				content: hosting.attributes.content || null
			});

			results.push({ success: true, strapiId: hosting.id, convexId: hostingId });
			console.log(`Successfully migrated hosting content`);
		} catch (error) {
			console.error(`Error migrating hosting:`, error);
			results.push({
				success: false,
				strapiId: hosting.id,
				error: error instanceof Error ? error.message : 'Unknown error'
			});
		}

		return {
			totalProcessed: 1,
			successful: results.filter((r) => r.success).length,
			failed: results.filter((r) => !r.success).length,
			results
		};
	}
});

/**
 * TESTIMONIALS MIGRATION - Content with optional audio files and author relationships
 */

interface StrapiTestimonial {
	content: string;
	url?: string;
	audio?: { data?: StrapiFile };
	author?: { data?: { id: string; attributes: { name: string; slug: string } } };
	createdAt: string;
	updatedAt: string;
}

export const findIdMapping = internalQuery({
	args: {
		strapiType: v.string(),
		strapiId: v.string()
	},
	handler: async (ctx, args) => {
		return await ctx.db
			.query('idMappings')
			.filter((q) =>
				q.and(
					q.eq(q.field('strapiType'), args.strapiType),
					q.eq(q.field('strapiId'), args.strapiId)
				)
			)
			.first();
	}
});

export const checkTestimonialExists = internalQuery({
	args: {
		strapiId: v.string()
	},
	handler: async (ctx, args) => {
		return await ctx.db
			.query('testimonials')
			.filter((q) => q.eq(q.field('strapiId'), args.strapiId))
			.first();
	}
});

export const insertTestimonial = internalMutation({
	args: {
		strapiId: v.string(),
		content: v.string(),
		url: v.union(v.string(), v.null()),
		audioId: v.union(v.string(), v.null()),
		authorId: v.union(v.string(), v.null())
	},
	handler: async (ctx, args) => {
		const testimonialId = await ctx.db.insert('testimonials', {
			strapiId: args.strapiId,
			content: args.content,
			url: args.url || undefined,
			audio: args.audioId ? (args.audioId as Id<'_storage'>) : undefined,
			authorId: args.authorId ? (args.authorId as Id<'players'>) : undefined
		});

		await ctx.db.insert('idMappings', {
			strapiType: 'testimonial',
			strapiId: args.strapiId,
			convexId: testimonialId
		});

		return testimonialId;
	}
});

export const migrateTestimonialsData = action({
	args: {
		strapiData: v.record(v.string(), v.any())
	},
	handler: async (
		ctx,
		args
	): Promise<{
		totalProcessed: number;
		successful: number;
		failed: number;
		results: Array<{ success: boolean; strapiId: string; convexId?: string; error?: string }>;
	}> => {
		const testimonialsData = args.strapiData as {
			data: Array<{ id: string; attributes: StrapiTestimonial }>;
		};
		const results: Array<{
			success: boolean;
			strapiId: string;
			convexId?: string;
			error?: string;
		}> = [];

		if (!testimonialsData.data) {
			return {
				totalProcessed: 0,
				successful: 0,
				failed: 0,
				results: []
			};
		}

		console.log(`Starting migration of ${testimonialsData.data.length} testimonials...`);

		for (const testimonial of testimonialsData.data) {
			try {
				// Check if testimonial already exists
				const existing = await ctx.runQuery(internal.strapiMigration.checkTestimonialExists, {
					strapiId: testimonial.id
				});

				if (existing) {
					console.log(`Testimonial ${testimonial.id} already exists, skipping`);
					results.push({ success: true, strapiId: testimonial.id, convexId: existing._id });
					continue;
				}

				// Find author if exists (need to look up by Strapi ID)
				let authorId: string | null = null;
				if (testimonial.attributes.author?.data?.id) {
					const authorMapping = await ctx.runQuery(internal.strapiMigration.findIdMapping, {
						strapiType: 'player',
						strapiId: testimonial.attributes.author.data.id
					});
					if (authorMapping) {
						authorId = authorMapping.convexId;
					}
				}

				// Migrate audio file if present
				const audioId = await migrateAudioFile(ctx, testimonial.attributes.audio);

				// Insert testimonial record
				const testimonialId = await ctx.runMutation(internal.strapiMigration.insertTestimonial, {
					strapiId: testimonial.id,
					content: testimonial.attributes.content,
					url: testimonial.attributes.url || null,
					audioId,
					authorId
				});

				results.push({ success: true, strapiId: testimonial.id, convexId: testimonialId });
				console.log(`Successfully migrated testimonial: ${testimonial.id}`);
			} catch (error) {
				console.error(`Error migrating testimonial ${testimonial.id}:`, error);
				results.push({
					success: false,
					strapiId: testimonial.id,
					error: error instanceof Error ? error.message : 'Unknown error'
				});
			}
		}

		return {
			totalProcessed: testimonialsData.data.length,
			successful: results.filter((r) => r.success).length,
			failed: results.filter((r) => !r.success).length,
			results
		};
	}
});

/**
 * EVENT LOCATIONS MIGRATION - Geographic locations for events
 */

interface StrapiEventLocation {
	name: string;
	country: string;
	location?: string; // Mapbox GeoJSON string
	createdAt: string;
	updatedAt: string;
}

export const checkEventLocationExists = internalQuery({
	args: {
		strapiId: v.string()
	},
	handler: async (ctx, args) => {
		return await ctx.db
			.query('eventLocations')
			.filter((q) => q.eq(q.field('strapiId'), args.strapiId))
			.first();
	}
});

export const insertEventLocation = internalMutation({
	args: {
		strapiId: v.string(),
		name: v.string(),
		slug: v.union(v.string(), v.null()),
		country: v.string(),
		location: v.optional(
			v.object({
				lat: v.number(),
				lng: v.number(),
				address: v.optional(v.string())
			})
		),
		locationOriginal: v.union(v.string(), v.null())
	},
	handler: async (ctx, args) => {
		const eventLocationId = await ctx.db.insert('eventLocations', {
			strapiId: args.strapiId,
			name: args.name,
			slug: args.slug || undefined,
			country: args.country,
			location: args.location,
			locationOriginal: args.locationOriginal || undefined
		});

		await ctx.db.insert('idMappings', {
			strapiType: 'eventLocation',
			strapiId: args.strapiId,
			convexId: eventLocationId
		});

		return eventLocationId;
	}
});

export const migrateEventLocationsData = action({
	args: {
		strapiData: v.record(v.string(), v.any())
	},
	handler: async (
		ctx,
		args
	): Promise<{
		totalProcessed: number;
		successful: number;
		failed: number;
		results: Array<{ success: boolean; strapiId: string; convexId?: string; error?: string }>;
	}> => {
		const eventLocationsData = args.strapiData as {
			data: Array<{ id: string; attributes: StrapiEventLocation }>;
		};
		const results: Array<{
			success: boolean;
			strapiId: string;
			convexId?: string;
			error?: string;
		}> = [];

		if (!eventLocationsData.data) {
			return {
				totalProcessed: 0,
				successful: 0,
				failed: 0,
				results: []
			};
		}

		console.log(`Starting migration of ${eventLocationsData.data.length} event locations...`);

		for (const eventLocation of eventLocationsData.data) {
			try {
				// Check if event location already exists
				const existing = await ctx.runQuery(internal.strapiMigration.checkEventLocationExists, {
					strapiId: eventLocation.id
				});

				if (existing) {
					console.log(`Event location ${eventLocation.attributes.name} already exists, skipping`);
					results.push({ success: true, strapiId: eventLocation.id, convexId: existing._id });
					continue;
				}

				// Parse location data (same pattern as venues)
				let location: { lat: number; lng: number; address?: string } | undefined;
				let locationOriginal: string | undefined;

				if (eventLocation.attributes.location) {
					locationOriginal =
						typeof eventLocation.attributes.location === 'string'
							? eventLocation.attributes.location
							: JSON.stringify(eventLocation.attributes.location);
					try {
						const locationData =
							typeof eventLocation.attributes.location === 'string'
								? JSON.parse(eventLocation.attributes.location)
								: eventLocation.attributes.location;

						// Handle Mapbox format with center array
						if (
							locationData.center &&
							Array.isArray(locationData.center) &&
							locationData.center.length >= 2
						) {
							location = {
								lng: locationData.center[0], // longitude first in Mapbox
								lat: locationData.center[1], // latitude second
								address: locationData.place_name || locationData.text
							};
						}
						// Handle GeoJSON Point format
						else if (
							locationData.geometry?.coordinates &&
							Array.isArray(locationData.geometry.coordinates) &&
							locationData.geometry.coordinates.length >= 2
						) {
							location = {
								lng: locationData.geometry.coordinates[0],
								lat: locationData.geometry.coordinates[1]
							};
						}
					} catch (error) {
						console.warn(`Failed to parse location for event location ${eventLocation.id}:`, error);
					}
				}

				// Create slug from name (simple slugification)
				const slug = eventLocation.attributes.name
					.toLowerCase()
					.replace(/[^a-z0-9]+/g, '-')
					.replace(/(^-|-$)/g, '');

				// Insert event location record
				const eventLocationId = await ctx.runMutation(
					internal.strapiMigration.insertEventLocation,
					{
						strapiId: eventLocation.id,
						name: eventLocation.attributes.name,
						slug,
						country: eventLocation.attributes.country,
						location,
						locationOriginal: locationOriginal || null
					}
				);

				results.push({ success: true, strapiId: eventLocation.id, convexId: eventLocationId });
				console.log(`Successfully migrated event location: ${eventLocation.attributes.name}`);
			} catch (error) {
				console.error(`Error migrating event location ${eventLocation.id}:`, error);
				results.push({
					success: false,
					strapiId: eventLocation.id,
					error: error instanceof Error ? error.message : 'Unknown error'
				});
			}
		}

		return {
			totalProcessed: eventLocationsData.data.length,
			successful: results.filter((r) => r.success).length,
			failed: results.filter((r) => !r.success).length,
			results
		};
	}
});

/**
 * GAMES MIGRATION - Complex content with relationships, components, and files
 */

interface StrapiGame {
	name: string;
	slug: string;
	category: 'Game' | 'IceBreaker' | 'WarmUp' | 'Facilitation' | 'Retrospective' | 'CoolDown';
	scale: string;
	timebox: string;
	summary: string;
	description: string;
	credits: string;
	publishedAt?: string;
	defaultImage?: { data?: StrapiFile };
	images?: { data: StrapiFile[] };
	resources?: { data: StrapiFile[] };
	firstPlayedAtEvent?: { data?: { id: string } };
	tags: Array<{ id: string; value: string }>;
	materials: Array<{ id: string; value: string }>;
	preparationSteps: Array<{ id: string; value: string }>;
	safety: Array<{ id: string; key: string; value: string }>;
	ratings?: {
		energy?: number;
		connection?: number;
		silliness?: number;
	};
	documentedBy?: { data: Array<{ id: string }> };
	proposedBy?: { data: Array<{ id: string }> };
	createdAt: string;
	updatedAt: string;
}

export const checkGameExists = internalQuery({
	args: {
		strapiId: v.string()
	},
	handler: async (ctx, args) => {
		return await ctx.db
			.query('games')
			.filter((q) => q.eq(q.field('strapiId'), args.strapiId))
			.first();
	}
});

export const insertGame = internalMutation({
	args: {
		strapiId: v.string(),
		name: v.string(),
		slug: v.string(),
		category: v.union(
			v.literal('Game'),
			v.literal('IceBreaker'),
			v.literal('WarmUp'),
			v.literal('Facilitation'),
			v.literal('Retrospective'),
			v.literal('CoolDown')
		),
		scale: v.optional(v.string()),
		timebox: v.string(),
		summary: v.string(),
		description: v.string(),
		credits: v.optional(v.string()),
		defaultImageId: v.union(v.string(), v.null()),
		imageIds: v.array(v.string()),
		resourceIds: v.array(v.string()),
		firstPlayedAtEventId: v.union(v.string(), v.null()),
		publishedAt: v.union(v.number(), v.null()),
		updatedAt: v.number(),
		materials: v.array(v.object({ value: v.string() })),
		preparationSteps: v.array(v.object({ value: v.string() })),
		safety: v.array(
			v.object({
				key: v.string(),
				value: v.string()
			})
		),
		tags: v.array(v.object({ value: v.string() })),
		ratings: v.union(
			v.object({
				energy: v.union(v.number(), v.null()),
				connection: v.union(v.number(), v.null()),
				silliness: v.union(v.number(), v.null())
			}),
			v.null()
		)
	},
	handler: async (ctx, args) => {
		const gameId = await ctx.db.insert('games', {
			strapiId: args.strapiId,
			name: args.name,
			slug: args.slug,
			category: args.category,
			scale: args.scale,
			timebox: args.timebox,
			summary: args.summary,
			description: args.description,
			credits: args.credits,
			defaultImageId: args.defaultImageId ? (args.defaultImageId as Id<'_storage'>) : undefined,
			imageIds: args.imageIds as Id<'_storage'>[],
			resourceIds: args.resourceIds as Id<'_storage'>[],
			firstPlayedAtEventId: args.firstPlayedAtEventId
				? (args.firstPlayedAtEventId as Id<'events'>)
				: undefined,
			publishedAt: args.publishedAt || undefined,
			updatedAt: args.updatedAt,
			materials: args.materials,
			preparationSteps: args.preparationSteps,
			safety: args.safety,
			tags: args.tags,
			ratings: args.ratings
				? {
						energy: args.ratings.energy || undefined,
						connection: args.ratings.connection || undefined,
						silliness: args.ratings.silliness || undefined
					}
				: undefined
		});

		await ctx.db.insert('idMappings', {
			strapiType: 'game',
			strapiId: args.strapiId,
			convexId: gameId
		});

		return gameId;
	}
});

export const insertGameDocumenter = internalMutation({
	args: {
		gameId: v.string(),
		playerId: v.string()
	},
	handler: async (ctx, args) => {
		return await ctx.db.insert('gameDocumenters', {
			gameId: args.gameId as Id<'games'>,
			playerId: args.playerId as Id<'players'>
		});
	}
});

export const insertGameProposer = internalMutation({
	args: {
		gameId: v.string(),
		playerId: v.string()
	},
	handler: async (ctx, args) => {
		return await ctx.db.insert('gameProposers', {
			gameId: args.gameId as Id<'games'>,
			playerId: args.playerId as Id<'players'>
		});
	}
});

export const migrateGamesData = action({
	args: {
		strapiData: v.record(v.string(), v.any())
	},
	handler: async (
		ctx,
		args
	): Promise<{
		totalProcessed: number;
		successful: number;
		failed: number;
		results: Array<{ success: boolean; strapiId: string; convexId?: string; error?: string }>;
	}> => {
		const gamesData = args.strapiData as {
			data: Array<{ id: string; attributes: StrapiGame }>;
		};
		const results: Array<{
			success: boolean;
			strapiId: string;
			convexId?: string;
			error?: string;
		}> = [];

		if (!gamesData.data) {
			return {
				totalProcessed: 0,
				successful: 0,
				failed: 0,
				results: []
			};
		}

		console.log(`Starting migration of ${gamesData.data.length} games...`);

		for (const game of gamesData.data) {
			try {
				// Check if game already exists
				const existing = await ctx.runQuery(internal.strapiMigration.checkGameExists, {
					strapiId: game.id
				});

				if (existing) {
					console.log(`Game ${game.attributes.name} already exists, skipping`);
					results.push({ success: true, strapiId: game.id, convexId: existing._id });
					continue;
				}

				// Find firstPlayedAtEvent if exists
				let firstPlayedAtEventId: string | null = null;
				if (game.attributes.firstPlayedAtEvent?.data?.id) {
					const eventMapping = await ctx.runQuery(internal.strapiMigration.findIdMapping, {
						strapiType: 'event',
						strapiId: game.attributes.firstPlayedAtEvent.data.id
					});
					if (eventMapping) {
						firstPlayedAtEventId = eventMapping.convexId;
					}
				}

				// Migrate files for game
				const defaultImageId = await migrateSingleImage(ctx, game.attributes.defaultImage);
				const imageIds = await migrateMultipleImages(ctx, game.attributes.images);
				const resourceIds = await migrateResourceFiles(ctx, game.attributes.resources);

				// Parse publishedAt
				const publishedAt = game.attributes.publishedAt
					? new Date(game.attributes.publishedAt).getTime()
					: null;

				// Generate slug from name (games don't have slug field in Strapi)
				const slug = game.attributes.name
					.toLowerCase()
					.replace(/[^a-z0-9]+/g, '-')
					.replace(/(^-|-$)/g, '');

				// Insert game record - use defaults for missing fields
				const gameId = await ctx.runMutation(internal.strapiMigration.insertGame, {
					strapiId: game.id,
					name: game.attributes.name,
					slug,
					category: 'Game', // Default category since we removed it from query
					scale: game.attributes.scale || undefined,
					timebox: game.attributes.timebox || 'Unknown',
					summary: game.attributes.summary || 'No summary available',
					description: game.attributes.description,
					credits: game.attributes.credits || undefined,
					defaultImageId,
					imageIds,
					resourceIds,
					firstPlayedAtEventId,
					publishedAt,
					updatedAt: new Date(game.attributes.updatedAt).getTime(),
					materials: (game.attributes.materials || []).map((m: { value: string }) => ({
						value: m.value
					})),
					preparationSteps: (game.attributes.preparationSteps || []).map(
						(p: { value: string }) => ({ value: p.value })
					),
					safety: (game.attributes.safety || []).map((s: { key: string; value: string }) => ({
						key: s.key,
						value: s.value
					})),
					tags: [], // Empty tags since we removed from query
					ratings: game.attributes.ratings
						? {
								energy: game.attributes.ratings.energy || null,
								connection: game.attributes.ratings.connection || null,
								silliness: game.attributes.ratings.silliness || null
							}
						: null
				});

				// Insert game relationships
				if (game.attributes.documentedBy?.data) {
					for (const documenter of game.attributes.documentedBy.data) {
						const playerMapping = await ctx.runQuery(internal.strapiMigration.findIdMapping, {
							strapiType: 'player',
							strapiId: documenter.id
						});
						if (playerMapping) {
							await ctx.runMutation(internal.strapiMigration.insertGameDocumenter, {
								gameId,
								playerId: playerMapping.convexId
							});
						}
					}
				}

				if (game.attributes.proposedBy?.data) {
					for (const proposer of game.attributes.proposedBy.data) {
						const playerMapping = await ctx.runQuery(internal.strapiMigration.findIdMapping, {
							strapiType: 'player',
							strapiId: proposer.id
						});
						if (playerMapping) {
							await ctx.runMutation(internal.strapiMigration.insertGameProposer, {
								gameId,
								playerId: playerMapping.convexId
							});
						}
					}
				}

				results.push({ success: true, strapiId: game.id, convexId: gameId });
				console.log(`Successfully migrated game: ${game.attributes.name}`);
			} catch (error) {
				console.error(`Error migrating game ${game.id}:`, error);
				results.push({
					success: false,
					strapiId: game.id,
					error: error instanceof Error ? error.message : 'Unknown error'
				});
			}
		}

		return {
			totalProcessed: gamesData.data.length,
			successful: results.filter((r) => r.success).length,
			failed: results.filter((r) => !r.success).length,
			results
		};
	}
});

/**
 * ARTICLES MIGRATION - Content with author relationships and tags
 */

interface StrapiArticle {
	title: string;
	slug: string;
	category: 'Announcement' | 'Article' | 'Event' | 'Interview' | 'Meetup';
	summary: string;
	content: string;
	cannonical?: string; // Note: typo in the query - should be "canonical"
	publishedAt?: string;
	defaultImage?: { data?: StrapiFile };
	images?: { data: StrapiFile[] };
	author?: { data?: { id: string; attributes: { name: string; slug: string } } };
	tags?: { data: Array<{ id: string; attributes: { value: string } }> };
	createdAt: string;
	updatedAt: string;
}

export const checkArticleExists = internalQuery({
	args: {
		strapiId: v.string()
	},
	handler: async (ctx, args) => {
		return await ctx.db
			.query('articles')
			.filter((q) => q.eq(q.field('strapiId'), args.strapiId))
			.first();
	}
});

export const insertArticle = internalMutation({
	args: {
		strapiId: v.string(),
		title: v.string(),
		slug: v.string(),
		category: v.union(
			v.literal('Announcement'),
			v.literal('Article'),
			v.literal('Event'),
			v.literal('Interview'),
			v.literal('Meetup')
		),
		summary: v.string(),
		content: v.string(),
		canonical: v.union(v.string(), v.null()),
		defaultImageId: v.union(v.string(), v.null()),
		imageIds: v.array(v.string()),
		authorId: v.union(v.string(), v.null()),
		publishedAt: v.union(v.number(), v.null()),
		updatedAt: v.number()
	},
	handler: async (ctx, args) => {
		const articleId = await ctx.db.insert('articles', {
			strapiId: args.strapiId,
			title: args.title,
			slug: args.slug,
			category: args.category,
			summary: args.summary,
			content: args.content,
			canonical: args.canonical || undefined,
			defaultImageId: args.defaultImageId ? (args.defaultImageId as Id<'_storage'>) : undefined,
			imageIds: args.imageIds as Id<'_storage'>[],
			authorId: args.authorId ? (args.authorId as Id<'players'>) : undefined,
			publishedAt: args.publishedAt || undefined,
			updatedAt: args.updatedAt
		});

		await ctx.db.insert('idMappings', {
			strapiType: 'article',
			strapiId: args.strapiId,
			convexId: articleId
		});

		return articleId;
	}
});

export const insertArticleTag = internalMutation({
	args: {
		articleId: v.string(),
		tagId: v.string()
	},
	handler: async (ctx, args) => {
		return await ctx.db.insert('articleTags', {
			articleId: args.articleId as Id<'articles'>,
			tagId: args.tagId as Id<'tags'>
		});
	}
});

export const migrateArticlesData = action({
	args: {
		strapiData: v.record(v.string(), v.any())
	},
	handler: async (
		ctx,
		args
	): Promise<{
		totalProcessed: number;
		successful: number;
		failed: number;
		results: Array<{ success: boolean; strapiId: string; convexId?: string; error?: string }>;
	}> => {
		const articlesData = args.strapiData as {
			data: Array<{ id: string; attributes: StrapiArticle }>;
		};
		const results: Array<{
			success: boolean;
			strapiId: string;
			convexId?: string;
			error?: string;
		}> = [];

		if (!articlesData.data) {
			return {
				totalProcessed: 0,
				successful: 0,
				failed: 0,
				results: []
			};
		}

		console.log(`Starting migration of ${articlesData.data.length} articles...`);

		for (const article of articlesData.data) {
			try {
				// Check if article already exists
				const existing = await ctx.runQuery(internal.strapiMigration.checkArticleExists, {
					strapiId: article.id
				});

				if (existing) {
					console.log(`Article ${article.attributes.title} already exists, skipping`);
					results.push({ success: true, strapiId: article.id, convexId: existing._id });
					continue;
				}

				// Find author if exists
				let authorId: string | null = null;
				if (article.attributes.author?.data?.id) {
					const authorMapping = await ctx.runQuery(internal.strapiMigration.findIdMapping, {
						strapiType: 'player',
						strapiId: article.attributes.author.data.id
					});
					if (authorMapping) {
						authorId = authorMapping.convexId;
					}
				}

				// Migrate images for article
				const defaultImageId = await migrateSingleImage(ctx, article.attributes.defaultImage);
				const imageIds = await migrateMultipleImages(ctx, article.attributes.images);

				// Parse publishedAt
				const publishedAt = article.attributes.publishedAt
					? new Date(article.attributes.publishedAt).getTime()
					: null;

				// Generate slug from title (articles don't have slug field in Strapi)
				const slug = article.attributes.title
					.toLowerCase()
					.replace(/[^a-z0-9]+/g, '-')
					.replace(/(^-|-$)/g, '');

				// Insert article record
				const articleId = await ctx.runMutation(internal.strapiMigration.insertArticle, {
					strapiId: article.id,
					title: article.attributes.title,
					slug,
					category: article.attributes.category,
					summary: article.attributes.summary,
					content: article.attributes.content,
					canonical: article.attributes.cannonical || null, // Note: handling the typo
					defaultImageId,
					imageIds,
					authorId,
					publishedAt,
					updatedAt: new Date(article.attributes.updatedAt).getTime()
				});

				// Insert article tag relationships
				if (article.attributes.tags?.data) {
					for (const tag of article.attributes.tags.data) {
						const tagMapping = await ctx.runQuery(internal.strapiMigration.findIdMapping, {
							strapiType: 'tag',
							strapiId: tag.id
						});
						if (tagMapping) {
							await ctx.runMutation(internal.strapiMigration.insertArticleTag, {
								articleId,
								tagId: tagMapping.convexId
							});
						}
					}
				}

				results.push({ success: true, strapiId: article.id, convexId: articleId });
				console.log(`Successfully migrated article: ${article.attributes.title}`);
			} catch (error) {
				console.error(`Error migrating article ${article.id}:`, error);
				results.push({
					success: false,
					strapiId: article.id,
					error: error instanceof Error ? error.message : 'Unknown error'
				});
			}
		}

		return {
			totalProcessed: articlesData.data.length,
			successful: results.filter((r) => r.success).length,
			failed: results.filter((r) => !r.success).length,
			results
		};
	}
});

/**
 * EVENTS MIGRATION - Most complex content with multiple relationships and components
 */

interface StrapiEvent {
	name: string;
	slug: string;
	start: string;
	end: string;
	timezone: string | null;
	status: 'Announced' | 'Open' | 'Over' | 'Cancelled';
	description: string;
	contactEmail: string;
	tagline?: string;
	publishedAt?: string;
	defaultImage?: { data?: StrapiFile };
	images?: { data: StrapiFile[] };
	location?: { data?: { id: string } };
	venue?: { data?: { id: string } };
	timetable?: Array<{
		id: string;
		day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
		description: string;
		timeslots: Array<{
			id: string;
			time: string;
			description: string;
		}>;
	}>;
	registration?: {
		id: string;
		link?: string;
		widgetCode?: string;
	};
	sponsorships?: Array<{
		id: string;
		category: string;
		sponsors: { data: Array<{ id: string }> };
	}>;
	media?: Array<{
		id: string;
		url: string;
		type: 'Photos' | 'Videos';
	}>;
	finance?: {
		id: string;
		revenue: number;
		expenses: number;
		destination: string;
		result: 'Profit' | 'Loss';
		resultAmount: number;
	};
	hosts?: { data: Array<{ id: string }> };
	mentors?: { data: Array<{ id: string }> };
	attendees?: { data: Array<{ id: string }> };
	createdAt: string;
	updatedAt: string;
}

export const checkEventExists = internalQuery({
	args: {
		strapiId: v.string()
	},
	handler: async (ctx, args) => {
		return await ctx.db
			.query('events')
			.filter((q) => q.eq(q.field('strapiId'), args.strapiId))
			.first();
	}
});

export const insertEvent = internalMutation({
	args: {
		strapiId: v.string(),
		name: v.string(),
		slug: v.string(),
		start: v.number(),
		end: v.number(),
		timezone: v.string(),
		status: v.union(
			v.literal('Announced'),
			v.literal('Open'),
			v.literal('Over'),
			v.literal('Cancelled')
		),
		description: v.union(v.string(), v.null()),
		contactEmail: v.string(),
		tagline: v.union(v.string(), v.null()),
		defaultImageId: v.union(v.string(), v.null()),
		imageIds: v.array(v.string()),
		locationId: v.union(v.string(), v.null()),
		venueId: v.union(v.string(), v.null()),
		publishedAt: v.union(v.number(), v.null()),
		updatedAt: v.number(),
		timetable: v.array(
			v.object({
				id: v.string(),
				day: v.union(
					v.literal('Monday'),
					v.literal('Tuesday'),
					v.literal('Wednesday'),
					v.literal('Thursday'),
					v.literal('Friday'),
					v.literal('Saturday'),
					v.literal('Sunday')
				),
				description: v.string(),
				timeslots: v.array(
					v.object({
						id: v.string(), // Include timeslot ID
						time: v.string(),
						description: v.string()
					})
				)
			})
		),
		registration: v.union(
			v.object({
				link: v.union(v.string(), v.null()),
				widgetCode: v.union(v.string(), v.null())
			}),
			v.null()
		),
		sponsorships: v.array(
			v.object({
				category: v.string(),
				sponsorIds: v.array(v.string())
			})
		),
		media: v.array(
			v.object({
				id: v.string(),
				url: v.string(),
				type: v.union(v.literal('Photos'), v.literal('Videos'))
			})
		),
		finance: v.union(
			v.object({
				revenue: v.number(),
				expenses: v.number(),
				destination: v.string(),
				result: v.union(v.literal('Profit'), v.literal('Loss')),
				resultAmount: v.number()
			}),
			v.null()
		)
	},
	handler: async (ctx, args) => {
		const eventId = await ctx.db.insert('events', {
			strapiId: args.strapiId,
			name: args.name,
			slug: args.slug,
			start: args.start,
			end: args.end,
			timezone: args.timezone,
			status: args.status,
			description: args.description || undefined,
			contactEmail: args.contactEmail,
			tagline: args.tagline || undefined,
			defaultImageId: args.defaultImageId ? (args.defaultImageId as Id<'_storage'>) : undefined,
			imageIds: args.imageIds as Id<'_storage'>[],
			locationId: args.locationId ? (args.locationId as Id<'eventLocations'>) : undefined,
			venueId: args.venueId ? (args.venueId as Id<'venues'>) : undefined,
			publishedAt: args.publishedAt || undefined,
			updatedAt: args.updatedAt,
			timetable: args.timetable,
			registration: args.registration
				? {
						link: args.registration.link || undefined,
						widgetCode: args.registration.widgetCode || undefined
					}
				: undefined,
			sponsorships: args.sponsorships.map((s) => ({
				category: s.category,
				sponsorIds: s.sponsorIds as Id<'sponsors'>[]
			})),
			media: args.media,
			finance: args.finance || undefined
		});

		await ctx.db.insert('idMappings', {
			strapiType: 'event',
			strapiId: args.strapiId,
			convexId: eventId
		});

		return eventId;
	}
});

export const insertEventHost = internalMutation({
	args: {
		eventId: v.string(),
		playerId: v.string()
	},
	handler: async (ctx, args) => {
		return await ctx.db.insert('eventHosts', {
			eventId: args.eventId as Id<'events'>,
			playerId: args.playerId as Id<'players'>
		});
	}
});

export const insertEventMentor = internalMutation({
	args: {
		eventId: v.string(),
		playerId: v.string()
	},
	handler: async (ctx, args) => {
		return await ctx.db.insert('eventMentors', {
			eventId: args.eventId as Id<'events'>,
			playerId: args.playerId as Id<'players'>
		});
	}
});

export const insertEventAttendee = internalMutation({
	args: {
		eventId: v.string(),
		playerId: v.string()
	},
	handler: async (ctx, args) => {
		return await ctx.db.insert('eventAttendees', {
			eventId: args.eventId as Id<'events'>,
			playerId: args.playerId as Id<'players'>
		});
	}
});

export const migrateEventsData = action({
	args: {
		strapiData: v.record(v.string(), v.any())
	},
	handler: async (
		ctx,
		args
	): Promise<{
		totalProcessed: number;
		successful: number;
		failed: number;
		results: Array<{ success: boolean; strapiId: string; convexId?: string; error?: string }>;
	}> => {
		const eventsData = args.strapiData as {
			data: Array<{ id: string; attributes: StrapiEvent }>;
		};
		const results: Array<{
			success: boolean;
			strapiId: string;
			convexId?: string;
			error?: string;
		}> = [];

		if (!eventsData.data) {
			return {
				totalProcessed: 0,
				successful: 0,
				failed: 0,
				results: []
			};
		}

		console.log(`Starting migration of ${eventsData.data.length} events...`);

		for (const event of eventsData.data) {
			try {
				// Check if event already exists
				const existing = await ctx.runQuery(internal.strapiMigration.checkEventExists, {
					strapiId: event.id
				});

				if (existing) {
					console.log(`Event ${event.attributes.name} already exists, skipping`);
					results.push({ success: true, strapiId: event.id, convexId: existing._id });
					continue;
				}

				// Find location if exists
				let locationId: string | null = null;
				if (event.attributes.location?.data?.id) {
					const locationMapping = await ctx.runQuery(internal.strapiMigration.findIdMapping, {
						strapiType: 'eventLocation',
						strapiId: event.attributes.location.data.id
					});
					if (locationMapping) {
						locationId = locationMapping.convexId;
					}
				}

				// Find venue if exists
				let venueId: string | null = null;
				if (event.attributes.venue?.data?.id) {
					const venueMapping = await ctx.runQuery(internal.strapiMigration.findIdMapping, {
						strapiType: 'venue',
						strapiId: event.attributes.venue.data.id
					});
					if (venueMapping) {
						venueId = venueMapping.convexId;
					}
				}

				// Process sponsorships
				const sponsorships: Array<{ category: string; sponsorIds: string[] }> = [];
				if (event.attributes.sponsorships) {
					for (const sponsorship of event.attributes.sponsorships) {
						const sponsorIds: string[] = [];
						if (sponsorship.sponsors?.data) {
							for (const sponsor of sponsorship.sponsors.data) {
								const sponsorMapping = await ctx.runQuery(internal.strapiMigration.findIdMapping, {
									strapiType: 'sponsor',
									strapiId: sponsor.id
								});
								if (sponsorMapping) {
									sponsorIds.push(sponsorMapping.convexId);
								}
							}
						}
						sponsorships.push({
							category: sponsorship.category,
							sponsorIds
						});
					}
				}

				// Migrate images for event
				const defaultImageId = await migrateSingleImage(ctx, event.attributes.defaultImage);
				const imageIds = await migrateMultipleImages(ctx, event.attributes.images);

				// Parse publishedAt
				const publishedAt = event.attributes.publishedAt
					? new Date(event.attributes.publishedAt).getTime()
					: null;

				// Generate slug from name (events don't have slug field in Strapi)
				const slug = event.attributes.name
					.toLowerCase()
					.replace(/[^a-z0-9]+/g, '-')
					.replace(/(^-|-$)/g, '');

				// Handle timezone with fallback inference if null/undefined
				let timezone = event.attributes.timezone;
				if (!timezone || (typeof timezone === 'string' && timezone.trim() === '')) {
					console.log(`⚠️ Missing timezone for event "${event.attributes.name}", inferring...`);
					timezone = inferTimezoneFromEvent({
						name: event.attributes.name,
						// Note: location and venue from Strapi only have IDs, not full attributes
						// So we'll rely primarily on event name for inference
						location: undefined, // Will use name-based inference
						venue: undefined // Will use name-based inference
					});
					console.log(`🕐 Inferred timezone: ${timezone}`);
				} else {
					console.log(`✅ Using provided timezone: ${timezone}`);
				}

				// Insert event record
				const eventId = await ctx.runMutation(internal.strapiMigration.insertEvent, {
					strapiId: event.id,
					name: event.attributes.name,
					slug,
					start: new Date(event.attributes.start).getTime(),
					end: new Date(event.attributes.end).getTime(),
					timezone,
					status: event.attributes.status,
					description: event.attributes.description,
					contactEmail: event.attributes.contactEmail,
					tagline: event.attributes.tagline || null,
					defaultImageId,
					imageIds,
					locationId,
					venueId,
					publishedAt,
					updatedAt: new Date(event.attributes.updatedAt).getTime(),
					timetable: event.attributes.timetable || [],
					registration: event.attributes.registration
						? {
								link: event.attributes.registration.link || null,
								widgetCode: event.attributes.registration.widgetCode || null
							}
						: null,
					sponsorships,
					media: event.attributes.media || [],
					finance: event.attributes.finance || null
				});

				// Insert player relationships
				if (event.attributes.hosts?.data) {
					for (const host of event.attributes.hosts.data) {
						const playerMapping = await ctx.runQuery(internal.strapiMigration.findIdMapping, {
							strapiType: 'player',
							strapiId: host.id
						});
						if (playerMapping) {
							await ctx.runMutation(internal.strapiMigration.insertEventHost, {
								eventId,
								playerId: playerMapping.convexId
							});
						}
					}
				}

				if (event.attributes.mentors?.data) {
					for (const mentor of event.attributes.mentors.data) {
						const playerMapping = await ctx.runQuery(internal.strapiMigration.findIdMapping, {
							strapiType: 'player',
							strapiId: mentor.id
						});
						if (playerMapping) {
							await ctx.runMutation(internal.strapiMigration.insertEventMentor, {
								eventId,
								playerId: playerMapping.convexId
							});
						}
					}
				}

				if (event.attributes.attendees?.data) {
					for (const attendee of event.attributes.attendees.data) {
						const playerMapping = await ctx.runQuery(internal.strapiMigration.findIdMapping, {
							strapiType: 'player',
							strapiId: attendee.id
						});
						if (playerMapping) {
							await ctx.runMutation(internal.strapiMigration.insertEventAttendee, {
								eventId,
								playerId: playerMapping.convexId
							});
						}
					}
				}

				results.push({ success: true, strapiId: event.id, convexId: eventId });
				console.log(`Successfully migrated event: ${event.attributes.name}`);
			} catch (error) {
				console.error(`Error migrating event ${event.id}:`, error);
				results.push({
					success: false,
					strapiId: event.id,
					error: error instanceof Error ? error.message : 'Unknown error'
				});
			}
		}

		return {
			totalProcessed: eventsData.data.length,
			successful: results.filter((r) => r.success).length,
			failed: results.filter((r) => !r.success).length,
			results
		};
	}
});

/**
 * Clear all files from Convex storage
 * WARNING: This will attempt to delete all storage files using brute force
 */
export const clearAllStorage = action({
	args: {
		confirmClear: v.literal('CLEAR_ALL_STORAGE')
	},
	handler: async (ctx) => {
		console.log('🗑️ CLEARING ALL CONVEX STORAGE');
		console.log('This will attempt to clear all files from storage using brute force');

		let deletedCount = 0;
		let errorCount = 0;

		// Since Convex doesn't provide a list() method for storage,
		// we need to try a brute force approach

		// Convex storage IDs are typically 32 characters starting with 'k'
		const storageIdPrefixes = ['kg', 'kh', 'kj', 'km', 'kn', 'ks', 'kt']; // Common prefixes

		for (const prefix of storageIdPrefixes) {
			console.log(`Trying to clear files with prefix: ${prefix}`);

			// Try sequential deletion with different patterns
			for (let i = 0; i < 5000; i++) {
				try {
					// Generate storage ID with pattern
					const randomSuffix = Math.random().toString(36).substring(2);
					const paddedIndex = i.toString(36).padStart(6, '0');
					const storageId = `${prefix}${paddedIndex}${randomSuffix}`.substring(0, 32);

					await ctx.storage.delete(storageId as Id<'_storage'>);
					deletedCount++;

					if (deletedCount % 10 === 0) {
						console.log(`Deleted ${deletedCount} files...`);
					}
				} catch {
					errorCount++;
					// Continue trying - most will fail because files don't exist
				}
			}
		}

		console.log(`\n📋 Storage Clear Summary:`);
		console.log(`- Successfully deleted: ${deletedCount} files`);
		console.log(`- Failed attempts: ${errorCount} (expected - files don't exist)`);

		return {
			success: true,
			deletedFiles: deletedCount,
			errors: errorCount,
			message: `Storage cleanup completed. Deleted ${deletedCount} files.`
		};
	}
});

/**
 * Get all records from a table for cleanup purposes
 */
export const getAllRecordsForCleanup = internalQuery({
	args: {
		tableName: v.string()
	},
	handler: async (ctx, args) => {
		const validTables = [
			'players',
			'games',
			'articles',
			'events',
			'home',
			'history',
			'testimonials',
			'venues',
			'sponsors',
			'tags',
			'expectations',
			'eventLocations',
			'format',
			'hosting',
			'eventHosts',
			'eventMentors',
			'eventAttendees',
			'gameDocumenters',
			'gameProposers',
			'articleTags'
		];

		if (!validTables.includes(args.tableName)) {
			return [];
		}

		// Cast to any to handle dynamic table names
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		return await ctx.db.query(args.tableName as any).collect();
	}
});

/**
 * Clear migration data for testing
 */
export const clearMigrationData = mutation({
	args: {
		contentType: v.string()
	},
	handler: async (ctx, args) => {
		const validContentTypes = [
			'tags',
			'expectations',
			'players',
			'venues',
			'sponsors',
			'home',
			'history',
			'format',
			'hosting',
			'testimonials',
			'eventLocations',
			'games',
			'articles',
			'events'
		] as const;
		const tableName = validContentTypes.includes(
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			args.contentType as any
		)
			? (args.contentType as (typeof validContentTypes)[number])
			: 'tags';

		const items = await ctx.db.query(tableName).collect();
		const mappings = await ctx.db
			.query('idMappings')
			.filter((q) => q.eq(q.field('strapiType'), args.contentType))
			.collect();

		// Delete all items
		for (const item of items) {
			await ctx.db.delete(item._id);
		}

		// Delete all mappings
		for (const mapping of mappings) {
			await ctx.db.delete(mapping._id);
		}

		return {
			deletedItems: items.length,
			deletedMappings: mappings.length
		};
	}
});

/**
 * Complete cleanup before migration - removes all data AND files
 * This should be run before starting a fresh migration
 */
export const cleanupAllMigrationData = action({
	args: {},
	handler: async (
		ctx
	): Promise<{
		success: boolean;
		totalDeletedItems: number;
		totalDeletedMappings: number;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		contentTypeResults: any[];
		message: string;
		error?: string;
	}> => {
		console.log('🧹 Starting complete cleanup of all migration data and files...');

		try {
			// Step 1: Clean up all files from storage first
			console.log('Step 1: Cleaning up files from Convex storage...');
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const fileCleanupResult: any = await ctx.runAction(api.clearStorage.clearAllStorage, {
				confirmClear: 'CLEAR_ALL_STORAGE'
			});
			console.log(`File cleanup result:`, fileCleanupResult);

			// Step 2: Clear all content type tables
			console.log('Step 2: Clearing all content type tables...');
			const allContentTypes = [
				'tags',
				'expectations',
				'players',
				'venues',
				'sponsors',
				'home',
				'history',
				'format',
				'hosting',
				'testimonials',
				'eventLocations',
				'games',
				'articles',
				'events'
			];

			let totalDeletedItems = 0;
			let totalDeletedMappings = 0;
			const results = [];

			for (const contentType of allContentTypes) {
				try {
					console.log(`Clearing ${contentType}...`);
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					const result: any = await ctx.runMutation(api.strapiMigration.clearMigrationData, {
						contentType
					});
					totalDeletedItems += result.deletedItems;
					totalDeletedMappings += result.deletedMappings;
					results.push({
						contentType,
						deletedItems: result.deletedItems,
						deletedMappings: result.deletedMappings,
						success: true
					});
					console.log(
						`✅ Cleared ${contentType}: ${result.deletedItems} items, ${result.deletedMappings} mappings`
					);
				} catch (error) {
					console.error(`❌ Error clearing ${contentType}:`, error);
					results.push({
						contentType,
						success: false,
						error: error instanceof Error ? error.message : 'Unknown error'
					});
				}
			}

			// Step 3: Clear relationship tables
			console.log('Step 3: Clearing relationship tables...');
			const relationshipTables = [
				'eventHosts',
				'eventMentors',
				'eventAttendees',
				'gameDocumenters',
				'gameProposers',
				'articleTags'
			];

			for (const tableName of relationshipTables) {
				try {
					const relationships = await ctx.runQuery(
						internal.strapiMigration.getAllRecordsForCleanup,
						{
							tableName
						}
					);

					for (const relationship of relationships) {
						await ctx.runMutation(internal.strapiMigration.deleteRelationshipRecord, {
							tableName,
							recordId: relationship._id
						});
					}
					console.log(`✅ Cleared ${tableName}: ${relationships.length} relationships`);
				} catch (error) {
					console.log(
						`⚠️  Could not clear ${tableName} (table might not exist or be empty): ${error}`
					);
				}
			}

			// Step 4: Clear migration status table
			console.log('Step 4: Clearing migration status...');
			try {
				const migrationStatuses = await ctx.runQuery(
					internal.strapiMigration.getAllMigrationStatuses,
					{}
				);
				for (const status of migrationStatuses) {
					await ctx.runMutation(internal.strapiMigration.deleteMigrationStatus, {
						statusId: status._id
					});
				}
				console.log(`✅ Cleared migration status: ${migrationStatuses.length} records`);
			} catch (error) {
				console.log(`⚠️  Could not clear migration status: ${error}`);
			}

			console.log('🎉 Complete cleanup finished!');

			return {
				success: true,
				totalDeletedItems,
				totalDeletedMappings,
				contentTypeResults: results,
				message: `Successfully cleaned up ${totalDeletedItems} items, ${totalDeletedMappings} mappings, and ${fileCleanupResult.deletedFiles || 0} files`
			};
		} catch (error) {
			console.error('❌ Error during complete cleanup:', error);
			return {
				success: false,
				totalDeletedItems: 0,
				totalDeletedMappings: 0,
				contentTypeResults: [],
				error: error instanceof Error ? error.message : 'Unknown error',
				message: 'Complete cleanup failed'
			};
		}
	}
});

/**
 * Helper functions for cleanup
 */
export const deleteRelationshipRecord = internalMutation({
	args: {
		tableName: v.string(),
		recordId: v.string()
	},
	handler: async (ctx, args) => {
		const validTables = [
			'eventHosts',
			'eventMentors',
			'eventAttendees',
			'gameDocumenters',
			'gameProposers',
			'articleTags'
		];

		if (validTables.includes(args.tableName)) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			await ctx.db.delete(args.recordId as any);
		}
	}
});

export const getAllMigrationStatuses = internalQuery({
	args: {},
	handler: async (ctx) => {
		return await ctx.db.query('migrationStatus').collect();
	}
});

export const deleteMigrationStatus = internalMutation({
	args: {
		statusId: v.string()
	},
	handler: async (ctx, args) => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		await ctx.db.delete(args.statusId as any);
	}
});

/**
 * TEST FUNCTION: Test file migration with mock data
 */
export const testFileMigration = action({
	args: {},
	handler: async (ctx) => {
		console.log('🧪 Starting file migration test...');

		// Test with mock image data (using a known accessible image)
		const mockImageData = {
			data: {
				attributes: {
					url: '/uploads/test_avatar_123456.jpg',
					name: 'test_avatar.jpg',
					mime: 'image/jpeg'
				}
			}
		};

		try {
			// Test single image migration
			console.log('Testing single image migration...');
			const imageResult = await migrateSingleImage(ctx, mockImageData);

			if (imageResult) {
				console.log(`✅ Single image migration successful: ${imageResult}`);
			} else {
				console.log('❌ Single image migration returned null');
			}

			// Test URL helper function
			const testUrls = ['/uploads/test.jpg', 'uploads/test.jpg', 'https://example.com/test.jpg'];

			console.log('Testing URL conversion:');
			testUrls.forEach((url) => {
				const fullUrl = getFullFileUrl(url);
				console.log(`  ${url} → ${fullUrl}`);
			});

			return {
				success: true,
				message: 'File migration test completed',
				imageResult,
				urlTests: testUrls.map((url) => ({ original: url, converted: getFullFileUrl(url) }))
			};
		} catch (error) {
			console.error('❌ File migration test failed:', error);
			return {
				success: false,
				error: error instanceof Error ? error.message : 'Unknown error',
				message: 'File migration test failed'
			};
		}
	}
});

/**
 * COMPLETE MIGRATION ORCHESTRATOR
 *
 * Runs all content type migrations in proper dependency order
 */
export const runCompleteMigration = action({
	args: {
		includeFiles: v.optional(v.boolean()),
		contentTypes: v.optional(v.array(v.string())),
		batchSize: v.optional(v.number())
	},
	handler: async (ctx, args) => {
		const includeFiles = args.includeFiles ?? true;
		const batchSize = args.batchSize ?? 50;

		console.log('🚀 STARTING COMPLETE MIGRATION');
		console.log('================================');
		console.log(`File migration: ${includeFiles ? 'ENABLED' : 'DISABLED'}`);
		console.log(`Batch size: ${batchSize}`);

		// Migration order respecting dependencies
		const migrationOrder = [
			// Phase 1: Foundation types (no dependencies)
			'tags',
			'expectations',

			// Phase 2: Core entities
			'players',
			'venues',
			'sponsors',

			// Phase 3: Single types
			'home',
			'history',
			'format',
			'hosting',

			// Phase 4: Complex types with minimal dependencies
			'testimonials',
			'eventLocations',

			// Phase 5: Most complex types
			'games', // Depends on tags
			'articles', // Depends on tags

			// Phase 6: Events (depends on everything)
			'events'
		];

		const targetTypes = args.contentTypes || migrationOrder;
		const orderedTypes = migrationOrder.filter((type) => targetTypes.includes(type));

		console.log(`📋 Migration plan: ${orderedTypes.length} content types`);
		console.log(`📊 Order: ${orderedTypes.join(' → ')}`);

		const results = {
			totalTypes: orderedTypes.length,
			successful: 0,
			failed: 0,
			results: [] as Array<{
				contentType: string;
				success: boolean;
				totalProcessed: number;
				successful: number;
				failed: number;
				error?: string;
			}>
		};

		// Run migrations in order
		for (const contentType of orderedTypes) {
			console.log(`\n🎯 MIGRATING: ${contentType.toUpperCase()}`);
			console.log(`${'='.repeat(50)}`);

			try {
				// Fetch data from Strapi
				console.log(`📡 Fetching ${contentType} data from Strapi...`);
				let strapiResult;

				if (contentType === 'events') {
					// Use batched fetch for events to avoid timeouts
					console.log('🔄 Using batched fetch for events...');
					strapiResult = await ctx.runAction(api.strapiMigration.fetchEventsBatched, {});
					console.log(
						`📊 Batched fetch result: ${strapiResult.totalFetched} events from ${strapiResult.totalPages} pages`
					);
				} else {
					// Use regular fetch for other content types
					strapiResult = await ctx.runAction(api.strapiMigration.fetchStrapiData, {
						contentType
					});
				}

				if (!strapiResult.success) {
					throw new Error(`Failed to fetch ${contentType}: ${strapiResult.error}`);
				}

				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				const strapiData = (strapiResult.data as any)[contentType];
				if (!strapiData || !strapiData.data) {
					throw new Error(`No data found for ${contentType}`);
				}

				console.log(`✅ Fetched ${strapiData.data.length} ${contentType} records`);

				// Run appropriate migration function
				let migrationResult;
				switch (contentType) {
					case 'tags':
						migrationResult = await ctx.runMutation(api.strapiMigration.migrateTagsData, {
							strapiData
						});
						break;
					case 'expectations':
						migrationResult = await ctx.runMutation(api.strapiMigration.migrateExpectationsData, {
							strapiData
						});
						break;
					case 'players':
						migrationResult = await ctx.runAction(api.strapiMigration.migratePlayersData, {
							strapiData
						});
						break;
					case 'venues':
						migrationResult = await ctx.runAction(api.strapiMigration.migrateVenuesData, {
							strapiData
						});
						break;
					case 'sponsors':
						migrationResult = await ctx.runAction(api.strapiMigration.migrateSponsorsData, {
							strapiData
						});
						break;
					case 'home':
						migrationResult = await ctx.runAction(api.strapiMigration.migrateHomeData, {
							strapiData
						});
						break;
					case 'history':
						migrationResult = await ctx.runAction(api.strapiMigration.migrateHistoryData, {
							strapiData
						});
						break;
					case 'format':
						migrationResult = await ctx.runAction(api.strapiMigration.migrateFormatData, {
							strapiData
						});
						break;
					case 'hosting':
						migrationResult = await ctx.runAction(api.strapiMigration.migrateHostingData, {
							strapiData
						});
						break;
					case 'testimonials':
						migrationResult = await ctx.runAction(api.strapiMigration.migrateTestimonialsData, {
							strapiData
						});
						break;
					case 'eventLocations':
						migrationResult = await ctx.runAction(api.strapiMigration.migrateEventLocationsData, {
							strapiData
						});
						break;
					case 'games':
						migrationResult = await ctx.runAction(api.strapiMigration.migrateGamesData, {
							strapiData
						});
						break;
					case 'articles':
						migrationResult = await ctx.runAction(api.strapiMigration.migrateArticlesData, {
							strapiData
						});
						break;
					case 'events':
						migrationResult = await ctx.runAction(api.strapiMigration.migrateEventsData, {
							strapiData
						});
						break;
					default:
						throw new Error(`Unknown content type: ${contentType}`);
				}

				console.log(`✅ ${contentType} migration completed:`);
				console.log(`   Processed: ${migrationResult.totalProcessed}`);
				console.log(`   Successful: ${migrationResult.successful}`);
				console.log(`   Failed: ${migrationResult.failed}`);

				results.results.push({
					contentType,
					success: true,
					...migrationResult
				});
				results.successful++;
			} catch (error) {
				const errorMessage = error instanceof Error ? error.message : 'Unknown error';
				console.error(`❌ ${contentType} migration failed:`, errorMessage);

				results.results.push({
					contentType,
					success: false,
					totalProcessed: 0,
					successful: 0,
					failed: 1,
					error: errorMessage
				});
				results.failed++;
			}
		}

		// Summary
		console.log('\n🎊 MIGRATION COMPLETE');
		console.log('=====================');
		console.log(`📊 Overall Results:`);
		console.log(`   Content types: ${results.totalTypes}`);
		console.log(`   Successful: ${results.successful}`);
		console.log(`   Failed: ${results.failed}`);

		if (results.successful > 0) {
			console.log(`\n✅ Successful migrations:`);
			results.results
				.filter((r) => r.success)
				.forEach((r) => {
					console.log(`   ${r.contentType}: ${r.successful}/${r.totalProcessed} records`);
				});
		}

		if (results.failed > 0) {
			console.log(`\n❌ Failed migrations:`);
			results.results
				.filter((r) => !r.success)
				.forEach((r) => {
					console.log(`   ${r.contentType}: ${r.error}`);
				});
		}

		const totalRecords = results.results.reduce((sum, r) => sum + r.totalProcessed, 0);
		const totalSuccessful = results.results.reduce((sum, r) => sum + r.successful, 0);
		const totalFailed = results.results.reduce((sum, r) => sum + r.failed, 0);

		console.log(`\n📈 Total Records:`);
		console.log(`   Processed: ${totalRecords}`);
		console.log(`   Successful: ${totalSuccessful}`);
		console.log(`   Failed: ${totalFailed}`);

		return {
			success: results.failed === 0,
			summary: results,
			totalRecords,
			totalSuccessful,
			totalFailed
		};
	}
});
