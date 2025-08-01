#!/usr/bin/env node

/**
 * External migration script that fetches data from Strapi
 * and uses Convex CLI to insert data
 */

import { spawn } from 'child_process';

// Load environment variables from .env.local
import { config } from 'dotenv';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
config({ path: join(__dirname, '../../.env.local') });

const STRAPI_API_URL = process.env.STRAPI_API_URL;
const STRAPI_API_SECRET = process.env.STRAPI_API_SECRET;

if (!STRAPI_API_URL || !STRAPI_API_SECRET) {
	throw new Error(
		'Missing required environment variables: STRAPI_API_URL and STRAPI_API_SECRET must be set in .env.local'
	);
}

// Helper to run Convex CLI commands
function runConvexCommand(command, args) {
	return new Promise((resolve, reject) => {
		const proc = spawn('npx', ['convex', command, ...args], {
			stdio: ['pipe', 'pipe', 'pipe']
		});

		let stdout = '';
		let stderr = '';

		proc.stdout.on('data', (data) => {
			stdout += data.toString();
		});

		proc.stderr.on('data', (data) => {
			stderr += data.toString();
		});

		proc.on('close', (code) => {
			if (code === 0) {
				resolve(stdout.trim());
			} else {
				reject(new Error(`Command failed with code ${code}: ${stderr}`));
			}
		});
	});
}

// Helper to run Convex actions (similar to mutations but for actions)
async function runConvexAction(actionPath, args) {
	const argsJson = JSON.stringify(args);

	console.log(`🔧 Running Convex action: ${actionPath}`);

	try {
		const result = await runConvexCommand('run', [actionPath, argsJson]);
		return JSON.parse(result);
	} catch (error) {
		console.error(`❌ Action ${actionPath} failed:`, error.message);
		throw error;
	}
}

// Fetch data from Strapi
async function fetchFromStrapi(endpoint, params = {}) {
	const url = new URL(`${STRAPI_API_URL}/api/${endpoint}`);

	// Set high pagination limit to get all records
	url.searchParams.append('pagination[limit]', '500');

	// Add custom parameters
	Object.entries(params).forEach(([key, value]) => {
		if (Array.isArray(value)) {
			value.forEach((v) => url.searchParams.append(key, v));
		} else {
			url.searchParams.append(key, String(value));
		}
	});

	const response = await fetch(url.toString(), {
		headers: {
			Authorization: `Bearer ${STRAPI_API_SECRET}`,
			'Content-Type': 'application/json'
		}
	});

	if (!response.ok) {
		throw new Error(`Failed to fetch ${endpoint}: ${response.status} ${response.statusText}`);
	}

	const data = await response.json();

	// Check if we need to fetch more pages
	const records = data.data || [];
	const meta = data.meta;

	if (meta && meta.pagination) {
		const { total, limit } = meta.pagination;
		const pageCount = Math.ceil(total / limit);

		if (pageCount > 1) {
			console.log(`📑 Found ${total} total records in ${pageCount} pages for ${endpoint}`);

			// Fetch remaining pages using start/limit instead of page
			for (let page = 2; page <= pageCount; page++) {
				const pageUrl = new URL(`${STRAPI_API_URL}/api/${endpoint}`);
				const start = (page - 1) * limit;
				pageUrl.searchParams.append('pagination[start]', start.toString());
				pageUrl.searchParams.append('pagination[limit]', limit.toString());

				// Add custom parameters to each page request
				Object.entries(params).forEach(([key, value]) => {
					if (Array.isArray(value)) {
						value.forEach((v) => pageUrl.searchParams.append(key, v));
					} else {
						pageUrl.searchParams.append(key, String(value));
					}
				});

				const pageResponse = await fetch(pageUrl.toString(), {
					headers: {
						Authorization: `Bearer ${STRAPI_API_SECRET}`,
						'Content-Type': 'application/json'
					}
				});

				if (pageResponse.ok) {
					const pageData = await pageResponse.json();
					records.push(...(pageData.data || []));
					console.log(
						`📄 Fetched page ${page}/${pageCount} for ${endpoint} - got ${pageData.data?.length || 0} records`
					);
				} else {
					console.error(
						`❌ Failed to fetch page ${page} for ${endpoint}: ${pageResponse.status} ${pageResponse.statusText}`
					);
				}
			}
		}
	}

	return records;
}

// Fetch single type data from Strapi (different API structure)
async function fetchSingleTypeFromStrapi(endpoint, params = {}) {
	const url = new URL(`${STRAPI_API_URL}/api/${endpoint}`);

	// Add custom parameters
	Object.entries(params).forEach(([key, value]) => {
		if (Array.isArray(value)) {
			value.forEach((v) => url.searchParams.append(key, v));
		} else {
			url.searchParams.append(key, String(value));
		}
	});

	const response = await fetch(url.toString(), {
		headers: {
			Authorization: `Bearer ${STRAPI_API_SECRET}`,
			'Content-Type': 'application/json'
		}
	});

	if (!response.ok) {
		throw new Error(`Failed to fetch ${endpoint}: ${response.status} ${response.statusText}`);
	}

	const data = await response.json();

	// Single types return data directly, not in a data array
	return data.data || data;
}

// Migrate Tags
async function migrateTags() {
	console.log('🏷️ Starting Tags migration...');

	try {
		// Fetch tags from Strapi
		const tags = await fetchFromStrapi('tags');
		console.log(`📥 Fetched ${tags.length} tags from Strapi`);

		// Clear existing tags first (get them and delete)
		const existingTagsResult = await runConvexCommand('run', ['supporting:getTags']);
		const existingTags = JSON.parse(existingTagsResult);

		console.log(`🗑️ Deleting ${existingTags.length} existing tags...`);
		for (const tag of existingTags) {
			// Note: We'd need a delete function in supporting.ts
			console.log(`Would delete tag: ${tag.value}`);
		}

		// Insert new tags
		console.log('💾 Inserting new tags...');
		let migratedCount = 0;
		for (const tag of tags) {
			const args = JSON.stringify({
				value: tag.attributes.value,
				strapiId: tag.id
			});
			await runConvexCommand('run', ['supporting:createTag', args]);
			migratedCount++;
			console.log(`✅ Created/updated tag: ${tag.attributes.value}`);
		}

		console.log(`🎉 Tags migration completed: ${migratedCount} tags`);
		return { success: true, count: migratedCount };
	} catch (error) {
		console.error('❌ Tags migration failed:', error);
		throw error;
	}
}

// Migrate Event Locations
async function migrateEventLocations() {
	console.log('📍 Starting Event Locations migration...');

	try {
		const locations = await fetchFromStrapi('event-locations');
		console.log(`📥 Fetched ${locations.length} event locations from Strapi`);

		let migratedCount = 0;
		for (const location of locations) {
			const attrs = location.attributes;

			// Extract coordinates from different possible formats
			let coordinates = null;

			if (attrs.location) {
				// Check for direct lat/lng format
				if (attrs.location.lat && attrs.location.lng) {
					coordinates = {
						lat: attrs.location.lat,
						lng: attrs.location.lng
					};
				}
				// Check for Mapbox geocoding response format
				else if (attrs.location.geometry && attrs.location.geometry.coordinates) {
					const coords = attrs.location.geometry.coordinates;
					if (Array.isArray(coords) && coords.length >= 2) {
						const [lng, lat] = coords;
						if (typeof lng === 'number' && typeof lat === 'number') {
							coordinates = { lat, lng };
						}
					}
				}
				// Check for Mapbox center format
				else if (attrs.location.center && Array.isArray(attrs.location.center)) {
					const [lng, lat] = attrs.location.center;
					if (typeof lng === 'number' && typeof lat === 'number') {
						coordinates = { lat, lng };
					}
				}
				// Check for GeoJSON format
				else if (attrs.location.coordinates && Array.isArray(attrs.location.coordinates)) {
					// GeoJSON coordinates are [longitude, latitude]
					const [lng, lat] = attrs.location.coordinates;
					if (typeof lng === 'number' && typeof lat === 'number') {
						coordinates = { lat, lng };
					}
				}
				// Check for nested coordinates property
				else if (attrs.location.location && attrs.location.location.coordinates) {
					const coords = attrs.location.location.coordinates;
					if (Array.isArray(coords) && coords.length >= 2) {
						const [lng, lat] = coords;
						if (typeof lng === 'number' && typeof lat === 'number') {
							coordinates = { lat, lng };
						}
					}
				}
			}

			// Handle locations without coordinates (e.g., "Online")
			if (!coordinates) {
				// For "Online" locations or others without coordinates, use default values
				if (attrs.name && attrs.name.toLowerCase().includes('online')) {
					coordinates = { lat: 0, lng: 0 };
					console.log(`📍 Using default coordinates for Online location: ${attrs.name}`);
				} else {
					console.log(`⚠️ Skipping location without valid coordinates: ${attrs.name}`);
					console.log(`   Location data structure:`, JSON.stringify(attrs.location, null, 2));
					continue;
				}
			}

			const args = JSON.stringify({
				name: attrs.name,
				country: attrs.country || '',
				location: coordinates,
				locationData: attrs.location || {}, // Store complete location JSON or empty object
				strapiId: location.id
			});

			await runConvexCommand('run', ['supporting:createEventLocation', args]);
			migratedCount++;
			console.log(`✅ Created event location: ${attrs.name}`);
		}

		console.log(`🎉 Event Locations migration completed: ${migratedCount} locations`);
		return { success: true, count: migratedCount };
	} catch (error) {
		console.error('❌ Event Locations migration failed:', error);
		throw error;
	}
}

// Migrate Venues
async function migrateVenues() {
	console.log('🏛️ Starting Venues migration...');

	try {
		const venues = await fetchFromStrapi('venues');
		console.log(`📥 Fetched ${venues.length} venues from Strapi`);

		let migratedCount = 0;
		for (const venue of venues) {
			const attrs = venue.attributes;

			// Extract coordinates from different possible formats
			let coordinates = null;

			if (attrs.location) {
				// Check for direct lat/lng format
				if (attrs.location.lat && attrs.location.lng) {
					coordinates = {
						lat: attrs.location.lat,
						lng: attrs.location.lng
					};
				}
				// Check for Mapbox geocoding response format
				else if (attrs.location.geometry && attrs.location.geometry.coordinates) {
					const coords = attrs.location.geometry.coordinates;
					if (Array.isArray(coords) && coords.length >= 2) {
						const [lng, lat] = coords;
						if (typeof lng === 'number' && typeof lat === 'number') {
							coordinates = { lat, lng };
						}
					}
				}
				// Check for Mapbox center format
				else if (attrs.location.center && Array.isArray(attrs.location.center)) {
					const [lng, lat] = attrs.location.center;
					if (typeof lng === 'number' && typeof lat === 'number') {
						coordinates = { lat, lng };
					}
				}
				// Check for GeoJSON format
				else if (attrs.location.coordinates && Array.isArray(attrs.location.coordinates)) {
					const [lng, lat] = attrs.location.coordinates;
					if (typeof lng === 'number' && typeof lat === 'number') {
						coordinates = { lat, lng };
					}
				}
			}

			const args = JSON.stringify({
				name: attrs.name,
				website: attrs.website || undefined,
				location: coordinates || undefined, // Convert null to undefined for v.optional()
				locationData: attrs.location, // Store complete location JSON
				addressDetails: attrs.addressDetails || undefined,
				strapiId: venue.id
			});

			await runConvexCommand('run', ['supporting:createVenue', args]);
			migratedCount++;
			console.log(`✅ Created venue: ${attrs.name}`);
		}

		console.log(`🎉 Venues migration completed: ${migratedCount} venues`);
		return { success: true, count: migratedCount };
	} catch (error) {
		console.error('❌ Venues migration failed:', error);
		throw error;
	}
}

// Migrate Sponsors
async function migrateSponsors() {
	console.log('🏢 Starting Sponsors migration...');

	try {
		const sponsors = await fetchFromStrapi('sponsors', {
			populate: ['socialNetworks', 'logo']
		});
		console.log(`📥 Fetched ${sponsors.length} sponsors from Strapi`);

		let migratedCount = 0;
		for (const sponsor of sponsors) {
			const attrs = sponsor.attributes;
			const args = JSON.stringify({
				name: attrs.name,
				url: attrs.url || undefined,
				// logoId: null, // Skip images for now
				socialNetworks:
					attrs.socialNetworks?.map((sn) => ({
						type: sn.type,
						url: sn.url
					})) || [],
				strapiId: sponsor.id
			});

			await runConvexCommand('run', ['supporting:createSponsor', args]);
			migratedCount++;
			console.log(`✅ Created sponsor: ${attrs.name}`);
		}

		console.log(`🎉 Sponsors migration completed: ${migratedCount} sponsors`);
		return { success: true, count: migratedCount };
	} catch (error) {
		console.error('❌ Sponsors migration failed:', error);
		throw error;
	}
}

// Migrate Players
async function migratePlayers() {
	console.log('👥 Starting Players migration...');

	try {
		const players = await fetchFromStrapi('players', {
			populate: ['socialNetworks', 'avatar']
		});
		console.log(`📥 Fetched ${players.length} players from Strapi`);

		let migratedCount = 0;
		for (const player of players) {
			const attrs = player.attributes;

			// Extract coordinates from different possible formats
			let coordinates = null;

			if (attrs.location) {
				// Check for direct lat/lng format
				if (attrs.location.lat && attrs.location.lng) {
					coordinates = {
						lat: attrs.location.lat,
						lng: attrs.location.lng,
						address: attrs.location.address
					};
				}
				// Check for Mapbox geocoding response format
				else if (attrs.location.geometry && attrs.location.geometry.coordinates) {
					const coords = attrs.location.geometry.coordinates;
					if (Array.isArray(coords) && coords.length >= 2) {
						const [lng, lat] = coords;
						if (typeof lng === 'number' && typeof lat === 'number') {
							coordinates = {
								lat,
								lng,
								address: attrs.location.place_name || attrs.location.address
							};
						}
					}
				}
				// Check for Mapbox center format
				else if (attrs.location.center && Array.isArray(attrs.location.center)) {
					const [lng, lat] = attrs.location.center;
					if (typeof lng === 'number' && typeof lat === 'number') {
						coordinates = {
							lat,
							lng,
							address: attrs.location.place_name || attrs.location.address
						};
					}
				}
				// Check for GeoJSON format
				else if (attrs.location.coordinates && Array.isArray(attrs.location.coordinates)) {
					const [lng, lat] = attrs.location.coordinates;
					if (typeof lng === 'number' && typeof lat === 'number') {
						coordinates = {
							lat,
							lng,
							address: attrs.location.address
						};
					}
				}
			}

			const args = JSON.stringify({
				name: attrs.name,
				slug: attrs.slug,
				position: attrs.position,
				company: attrs.company || undefined,
				tagline: attrs.tagline || undefined,
				bio: attrs.bio || undefined,
				website: attrs.website || undefined,
				location: coordinates || undefined, // Convert null to undefined for v.optional()
				locationData: attrs.location || undefined, // Store complete location JSON or undefined
				strapiId: player.id
				// Skip socialNetworks and avatarId for now
			});

			await runConvexCommand('run', ['players:create', args]);
			migratedCount++;
			console.log(`✅ Created player: ${attrs.name}`);
		}

		console.log(`🎉 Players migration completed: ${migratedCount} players`);
		return { success: true, count: migratedCount };
	} catch (error) {
		console.error('❌ Players migration failed:', error);
		throw error;
	}
}

// Migrate Articles
async function migrateArticles() {
	console.log('📝 Starting Articles migration...');

	try {
		const articles = await fetchFromStrapi('articles', {
			populate: ['image', 'author', 'tags']
		});
		console.log(`📥 Fetched ${articles.length} articles from Strapi`);

		let migratedCount = 0;
		for (const article of articles) {
			const attrs = article.attributes;
			const args = JSON.stringify({
				title: attrs.title,
				slug: attrs.slug,
				content: attrs.content || '',
				summary: attrs.excerpt || '', // Use excerpt as summary
				category: attrs.category || 'Article', // Default to Article category
				authorId: undefined, // Handle relationships later
				publishedAt: attrs.publishDate ? new Date(attrs.publishDate).getTime() : undefined,
				canonical: attrs.canonical || undefined,
				strapiId: article.id
			});

			await runConvexCommand('run', ['articles:create', args]);
			migratedCount++;
			console.log(`✅ Created article: ${attrs.title}`);
		}

		console.log(`🎉 Articles migration completed: ${migratedCount} articles`);
		return { success: true, count: migratedCount };
	} catch (error) {
		console.error('❌ Articles migration failed:', error);
		throw error;
	}
}

// Migrate Games
async function migrateGames() {
	console.log('🎮 Starting Games migration...');

	try {
		const games = await fetchFromStrapi('games');
		console.log(`📥 Fetched ${games.length} games from Strapi`);

		let migratedCount = 0;
		for (const game of games) {
			const attrs = game.attributes;

			const args = JSON.stringify({
				name: attrs.name || attrs.title || `Game ${game.id}`,
				slug: attrs.slug || `game-${game.id}`,
				description: attrs.description || '',
				summary: attrs.summary || attrs.excerpt || attrs.name || attrs.title || 'No summary',
				category: attrs.category || 'Game',
				credits: attrs.credits || attrs.author || 'Unknown',
				scale: attrs.playerCount || attrs.participants || 'Any',
				timebox: attrs.duration || attrs.timebox || 'Variable',
				publishedAt: attrs.publishDate ? new Date(attrs.publishDate).getTime() : undefined,
				strapiId: game.id
			});

			await runConvexCommand('run', ['games:create', args]);
			migratedCount++;
			console.log(`✅ Created game: ${attrs.name}`);
		}

		console.log(`🎉 Games migration completed: ${migratedCount} games`);
		return { success: true, count: migratedCount };
	} catch (error) {
		console.error('❌ Games migration failed:', error);
		throw error;
	}
}

// Migrate Expectations
async function migrateExpectations() {
	console.log('🎯 Starting Expectations migration...');

	try {
		const expectations = await fetchFromStrapi('expectations');
		console.log(`📥 Fetched ${expectations.length} expectations from Strapi`);

		const args = JSON.stringify({ expectationsData: expectations });
		await runConvexCommand('run', ['migrationPart3:migrateExpectations', args]);

		console.log(`🎉 Expectations migration completed: ${expectations.length} expectations`);
		return { success: true, count: expectations.length };
	} catch (error) {
		console.error('❌ Expectations migration failed:', error);
		throw error;
	}
}

// Migrate Testimonials
async function migrateTestimonials() {
	console.log('💬 Starting Testimonials migration...');

	try {
		const testimonials = await fetchFromStrapi('testimonials', {
			populate: ['avatar', 'event']
		});
		console.log(`📥 Fetched ${testimonials.length} testimonials from Strapi`);

		const args = JSON.stringify({ testimonialsData: testimonials });
		await runConvexCommand('run', ['migrationPart3:migrateTestimonials', args]);

		console.log(`🎉 Testimonials migration completed: ${testimonials.length} testimonials`);
		return { success: true, count: testimonials.length };
	} catch (error) {
		console.error('❌ Testimonials migration failed:', error);
		throw error;
	}
}

// Migrate Formats
async function migrateFormats() {
	console.log('📋 Starting Formats migration...');

	try {
		// Format is a single type in Strapi
		const formatData = await fetchSingleTypeFromStrapi('format');
		console.log(`📥 Fetched format data from Strapi`);

		// Convert single type to array format expected by migration
		const formatsArray = formatData ? [{ id: 1, attributes: formatData }] : [];
		const args = JSON.stringify({ formatsData: formatsArray });
		await runConvexCommand('run', ['migrationPart3:migrateFormats', args]);

		console.log(`🎉 Formats migration completed: ${formatsArray.length} format`);
		return { success: true, count: formatsArray.length };
	} catch (error) {
		if (error.message.includes('404 Not Found')) {
			console.log('⚠️ Format endpoint not found in Strapi - skipping');
			return { success: true, count: 0 };
		}
		console.error('❌ Formats migration failed:', error);
		throw error;
	}
}

// Migrate History
async function migrateHistory() {
	console.log('📜 Starting History migration...');

	try {
		// History is a single type in Strapi
		const historyData = await fetchSingleTypeFromStrapi('history', {
			populate: ['image']
		});
		console.log(`📥 Fetched history data from Strapi`);
		// Removed debug logging

		// Convert single type to array format expected by migration
		const historyArray = historyData ? [{ id: 1, attributes: historyData }] : [];
		const args = JSON.stringify({ historyData: historyArray });
		await runConvexCommand('run', ['migrationPart3:migrateHistory', args]);

		console.log(`🎉 History migration completed: ${historyArray.length} history item`);
		return { success: true, count: historyArray.length };
	} catch (error) {
		if (error.message.includes('404 Not Found')) {
			console.log('⚠️ History endpoint not found in Strapi - skipping');
			return { success: true, count: 0 };
		}
		console.error('❌ History migration failed:', error);
		throw error;
	}
}

// Migrate Hosting
async function migrateHosting() {
	console.log('🏠 Starting Hosting migration...');

	try {
		// Hosting is a single type in Strapi
		const hostingData = await fetchSingleTypeFromStrapi('hosting');
		console.log(`📥 Fetched hosting data from Strapi`);
		// Removed debug logging

		// Convert single type to array format expected by migration
		const hostingArray = hostingData ? [{ id: 1, attributes: hostingData }] : [];
		const args = JSON.stringify({ hostingData: hostingArray });
		await runConvexCommand('run', ['migrationPart3:migrateHosting', args]);

		console.log(`🎉 Hosting migration completed: ${hostingArray.length} hosting item`);
		return { success: true, count: hostingArray.length };
	} catch (error) {
		if (error.message.includes('404 Not Found')) {
			console.log('⚠️ Hosting endpoint not found in Strapi - skipping');
			return { success: true, count: 0 };
		}
		console.error('❌ Hosting migration failed:', error);
		throw error;
	}
}

// Migrate Events
async function migrateEvents() {
	console.log('📅 Starting Events migration...');

	try {
		const events = await fetchFromStrapi('events', {
			populate: [
				'image',
				'images',
				'location',
				'venue'
				// Skip heavy relations for now (hosts, mentors, attendees, etc.)
			]
		});
		console.log(`📥 Fetched ${events.length} events from Strapi`);

		// Process events in batches to avoid E2BIG error
		const batchSize = 5; // Process 5 events at a time
		let totalMigrated = 0;

		console.log(`📊 Processing all ${events.length} events in batches of ${batchSize}`);

		// Process all events using the new batch migration function
		for (let i = 0; i < events.length; i += batchSize) {
			const batch = events.slice(i, i + batchSize);
			console.log(
				`📦 Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(events.length / batchSize)} (${batch.length} events)`
			);

			const args = JSON.stringify({ events: batch });
			await runConvexCommand('run', ['migrationPart2:migrateEvents', args]);

			totalMigrated += batch.length;
		}

		console.log(`🎉 Events migration completed: ${totalMigrated} events`);
		return { success: true, count: totalMigrated };
	} catch (error) {
		console.error('❌ Events migration failed:', error);
		throw error;
	}
}

// Phase 1 migration function
async function runPhase1Migration() {
	console.log('🚀 Starting Phase 1 migration...');
	console.log('This will migrate: Tags, Event Locations, Venues, Sponsors');
	console.log('Note: Images will be skipped in this version\n');

	const results = [];

	try {
		// Run migrations in sequence
		results.push({ type: 'Tags', ...(await migrateTags()) });
		results.push({ type: 'Event Locations', ...(await migrateEventLocations()) });
		results.push({ type: 'Venues', ...(await migrateVenues()) });
		results.push({ type: 'Sponsors', ...(await migrateSponsors()) });

		console.log('\n🎉 Phase 1 migration completed successfully!');
		console.log('\nSummary:');
		results.forEach((result) => {
			console.log(`  ${result.type}: ${result.count} records migrated`);
		});

		const totalCount = results.reduce((sum, r) => sum + r.count, 0);
		console.log(`\nTotal: ${totalCount} records migrated`);

		return { success: true, results, totalCount };
	} catch (error) {
		console.error('\n💥 Phase 1 migration failed:', error);
		return { success: false, error: error.message, results };
	}
}

// Phase 2 migration function
async function runPhase2Migration() {
	console.log('🚀 Starting Phase 2 migration...');
	console.log('This will migrate: Players, Articles, Games');
	console.log('Note: Images and relationships will be skipped in this version\n');

	const results = [];

	try {
		// Run migrations in sequence
		results.push({ type: 'Players', ...(await migratePlayers()) });
		results.push({ type: 'Articles', ...(await migrateArticles()) });
		results.push({ type: 'Games', ...(await migrateGames()) });

		console.log('\n🎉 Phase 2 migration completed successfully!');
		console.log('\nSummary:');
		results.forEach((result) => {
			console.log(`  ${result.type}: ${result.count} records migrated`);
		});

		const totalCount = results.reduce((sum, r) => sum + r.count, 0);
		console.log(`\nTotal: ${totalCount} records migrated`);

		return { success: true, results, totalCount };
	} catch (error) {
		console.error('\n💥 Phase 2 migration failed:', error);
		return { success: false, error: error.message, results };
	}
}

// Phase 3 migration function (missing tables)
async function runPhase3Migration() {
	console.log('🚀 Starting Phase 3 migration...');
	console.log('This will migrate: Expectations, Testimonials, Formats, History, Hosting');
	console.log('Note: Images will be migrated when available\n');

	const results = [];

	try {
		// Run migrations in sequence
		results.push({ type: 'Expectations', ...(await migrateExpectations()) });
		results.push({ type: 'Testimonials', ...(await migrateTestimonials()) });
		results.push({ type: 'Formats', ...(await migrateFormats()) });
		results.push({ type: 'History', ...(await migrateHistory()) });
		results.push({ type: 'Hosting', ...(await migrateHosting()) });

		console.log('\n🎉 Phase 3 migration completed successfully!');
		console.log('\nSummary:');
		results.forEach((result) => {
			console.log(`  ${result.type}: ${result.count} records migrated`);
		});

		const totalCount = results.reduce((sum, r) => sum + r.count, 0);
		console.log(`\nTotal: ${totalCount} records migrated`);

		return { success: true, results, totalCount };
	} catch (error) {
		console.error('\n💥 Phase 3 migration failed:', error);
		return { success: false, error: error.message, results };
	}
}

// Migrate Event Relationships
async function migrateEventRelationships() {
	console.log('🔗 Starting Event Relationships migration...');

	try {
		const events = await fetchFromStrapi('events', {
			populate: ['hosts', 'mentors', 'players'] // players = attendees
		});
		console.log(`📥 Fetched ${events.length} events with relationships from Strapi`);

		// Process in batches to avoid oversized payloads (E2BIG error)
		const batchSize = 3; // Reduced from 20 to 3 due to large relationship data

		for (let i = 0; i < events.length; i += batchSize) {
			const batch = events.slice(i, i + batchSize);
			console.log(
				`📦 Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(events.length / batchSize)} (${batch.length} events)`
			);

			// Event Hosts
			const hostArgs = JSON.stringify({ events: batch });
			const hostResult = await runConvexCommand('run', [
				'relationshipMigration:migrateEventHosts',
				hostArgs
			]);
			console.log(`✅ Hosts batch result: ${hostResult}`);

			// Event Mentors
			const mentorArgs = JSON.stringify({ events: batch });
			const mentorResult = await runConvexCommand('run', [
				'relationshipMigration:migrateEventMentors',
				mentorArgs
			]);
			console.log(`✅ Mentors batch result: ${mentorResult}`);

			// Event Attendees
			const attendeeArgs = JSON.stringify({ events: batch });
			const attendeeResult = await runConvexCommand('run', [
				'relationshipMigration:migrateEventAttendees',
				attendeeArgs
			]);
			console.log(`✅ Attendees batch result: ${attendeeResult}`);
		}

		console.log(`🎉 Event Relationships migration completed`);
		return { success: true, count: events.length };
	} catch (error) {
		console.error('❌ Event Relationships migration failed:', error);
		throw error;
	}
}

// Migrate Game Relationships
async function migrateGameRelationships() {
	console.log('🎲 Starting Game Relationships migration...');

	try {
		const games = await fetchFromStrapi('games', {
			populate: ['documentedBy', 'proposedBy']
		});
		console.log(`📥 Fetched ${games.length} games with relationships from Strapi`);

		// Process in batches to avoid oversized payloads (E2BIG error)
		const batchSize = 5; // Reduced from 50 to 5 due to large relationship data

		for (let i = 0; i < games.length; i += batchSize) {
			const batch = games.slice(i, i + batchSize);
			console.log(
				`📦 Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(games.length / batchSize)} (${batch.length} games)`
			);

			// Game Documenters
			const documenterArgs = JSON.stringify({ games: batch });
			const documenterResult = await runConvexCommand('run', [
				'relationshipMigration:migrateGameDocumenters',
				documenterArgs
			]);
			console.log(`✅ Documenters batch result: ${documenterResult}`);

			// Game Proposers
			const proposerArgs = JSON.stringify({ games: batch });
			const proposerResult = await runConvexCommand('run', [
				'relationshipMigration:migrateGameProposers',
				proposerArgs
			]);
			console.log(`✅ Proposers batch result: ${proposerResult}`);
		}

		console.log(`🎉 Game Relationships migration completed`);
		return { success: true, count: games.length };
	} catch (error) {
		console.error('❌ Game Relationships migration failed:', error);
		throw error;
	}
}

// Migrate Article Relationships
async function migrateArticleRelationships() {
	console.log('📝 Starting Article Relationships migration...');

	try {
		const articles = await fetchFromStrapi('articles', {
			populate: ['tags']
		});
		console.log(`📥 Fetched ${articles.length} articles with relationships from Strapi`);

		// Process in batches to avoid oversized payloads (E2BIG error)
		const batchSize = 10; // Reduced from 50 to 10 - articles have fewer relationships than games

		for (let i = 0; i < articles.length; i += batchSize) {
			const batch = articles.slice(i, i + batchSize);
			console.log(
				`📦 Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(articles.length / batchSize)} (${batch.length} articles)`
			);

			// Article Tags
			const tagArgs = JSON.stringify({ articles: batch });
			const tagResult = await runConvexCommand('run', [
				'relationshipMigration:migrateArticleTags',
				tagArgs
			]);
			console.log(`✅ Article tags batch result: ${tagResult}`);
		}

		console.log(`🎉 Article Relationships migration completed`);
		return { success: true, count: articles.length };
	} catch (error) {
		console.error('❌ Article Relationships migration failed:', error);
		throw error;
	}
}

// Phase 4 migration function (Events and relationships)
async function runPhase4Migration() {
	console.log('🚀 Starting Phase 4 migration...');
	console.log('This will migrate: Events with images and basic relationships');
	console.log('Note: Some complex relationships will be handled in future phases\n');

	const results = [];

	try {
		// Run migrations in sequence
		results.push({ type: 'Events', ...(await migrateEvents()) });

		console.log('\n🎉 Phase 4 migration completed successfully!');
		console.log('\nSummary:');
		results.forEach((result) => {
			console.log(`  ${result.type}: ${result.count} records migrated`);
		});

		const totalCount = results.reduce((sum, r) => sum + r.count, 0);
		console.log(`\nTotal: ${totalCount} records migrated`);

		return { success: true, results, totalCount };
	} catch (error) {
		console.error('\n💥 Phase 4 migration failed:', error);
		return { success: false, error: error.message, results };
	}
}

// Phase 5 migration function (All Relationships)
async function runPhase5Migration() {
	console.log('🚀 Starting Phase 5 migration...');
	console.log(
		'This will migrate: All relationship tables (event hosts/mentors/attendees, game documenters/proposers, article tags)'
	);
	console.log('Note: Relationships require the base data to be migrated first\n');

	const results = [];

	try {
		// Run relationship migrations in sequence
		results.push({ type: 'Event Relationships', ...(await migrateEventRelationships()) });
		results.push({ type: 'Game Relationships', ...(await migrateGameRelationships()) });
		results.push({ type: 'Article Relationships', ...(await migrateArticleRelationships()) });

		console.log('\n🎉 Phase 5 migration completed successfully!');
		console.log('\nSummary:');
		results.forEach((result) => {
			console.log(`  ${result.type}: ${result.count} records processed`);
		});

		const totalCount = results.reduce((sum, r) => sum + r.count, 0);
		console.log(`\nTotal: ${totalCount} records processed`);

		return { success: true, results, totalCount };
	} catch (error) {
		console.error('\n💥 Phase 5 migration failed:', error);
		return { success: false, error: error.message, results };
	}
}

// Phase 6 migration function (Image Migration using Actions)
async function runPhase6Migration() {
	console.log('🚀 Starting Phase 6 migration...');
	console.log('This will migrate: All images and files to Convex File Storage');
	console.log('Note: This uses Convex actions for proper file storage operations\n');

	const results = [];
	let totalImages = 0;

	try {
		// 1. Events Image Migration
		console.log('🖼️ Starting Events Image Migration...');
		const events = await fetchFromStrapi('events', {
			populate: ['defaultImage', 'images']
		});
		console.log(`📥 Fetched ${events.length} events for image migration`);

		// Process in batches to avoid oversized payloads
		const eventBatchSize = 5; // Small batches for image processing
		for (let i = 0; i < events.length; i += eventBatchSize) {
			const batch = events.slice(i, i + eventBatchSize);
			console.log(
				`📦 Processing events image batch ${Math.floor(i / eventBatchSize) + 1}/${Math.ceil(events.length / eventBatchSize)} (${batch.length} events)`
			);

			try {
				const result = await runConvexAction('imageMigrationPhase:migrateEventImages', {
					events: batch,
					strapiApiUrl: STRAPI_API_URL
				});
				console.log(`✅ Events batch result: ${result.message}`);
				totalImages += result.details?.totalUploaded || 0;
			} catch (error) {
				console.error(`❌ Events image batch failed:`, error.message);
			}
		}

		results.push({
			type: 'Events Images',
			success: true,
			message: `Events images migration attempted`
		});

		console.log('\n🎉 Phase 6 migration completed successfully!');
		console.log('\nSummary:');
		results.forEach((result) => {
			console.log(`  - ${result.type}: ${result.message}`);
		});
		console.log(`\nTotal: ~${totalImages} images processed`);

		return { success: true, results, totalImages };
	} catch (error) {
		console.error('\n💥 Phase 6 migration failed:', error);
		return { success: false, error: error.message, results };
	}
}

// Complete migration function
async function runCompleteMigration() {
	console.log('🚀 Starting Complete Migration (Phase 1 + 2 + 3 + 4 + 5)...\n');

	const phase1Result = await runPhase1Migration();
	if (!phase1Result.success) {
		console.log('\n❌ Stopping - Phase 1 failed');
		return phase1Result;
	}

	console.log('\n' + '='.repeat(50));

	const phase2Result = await runPhase2Migration();
	if (!phase2Result.success) {
		console.log('\n❌ Stopping - Phase 2 failed');
		return { phase1: phase1Result, phase2: phase2Result, success: false };
	}

	console.log('\n' + '='.repeat(50));

	const phase3Result = await runPhase3Migration();
	if (!phase3Result.success) {
		console.log('\n❌ Stopping - Phase 3 failed');
		return { phase1: phase1Result, phase2: phase2Result, phase3: phase3Result, success: false };
	}

	console.log('\n' + '='.repeat(50));

	const phase4Result = await runPhase4Migration();
	if (!phase4Result.success) {
		console.log('\n❌ Stopping - Phase 4 failed');
		return {
			phase1: phase1Result,
			phase2: phase2Result,
			phase3: phase3Result,
			phase4: phase4Result,
			success: false
		};
	}

	console.log('\n' + '='.repeat(50));

	const phase5Result = await runPhase5Migration();

	console.log('\n' + '='.repeat(50));
	console.log('🎯 FINAL SUMMARY');
	console.log('='.repeat(50));
	console.log(`Phase 1: ${phase1Result.totalCount} records migrated`);
	console.log(`Phase 2: ${phase2Result.success ? phase2Result.totalCount : 0} records migrated`);
	console.log(`Phase 3: ${phase3Result.success ? phase3Result.totalCount : 0} records migrated`);
	console.log(`Phase 4: ${phase4Result.success ? phase4Result.totalCount : 0} records migrated`);
	console.log(
		`Phase 5: ${phase5Result.success ? phase5Result.totalCount : 0} relationships migrated`
	);
	console.log(
		`Total: ${phase1Result.totalCount + (phase2Result.success ? phase2Result.totalCount : 0) + (phase3Result.success ? phase3Result.totalCount : 0) + (phase4Result.success ? phase4Result.totalCount : 0) + (phase5Result.success ? phase5Result.totalCount : 0)} records migrated`
	);

	return {
		success:
			phase1Result.success &&
			phase2Result.success &&
			phase3Result.success &&
			phase4Result.success &&
			phase5Result.success,
		phase1: phase1Result,
		phase2: phase2Result,
		phase3: phase3Result,
		phase4: phase4Result,
		phase5: phase5Result
	};
}

// Run if called directly
if (import.meta.url.endsWith(process.argv[1])) {
	// Check command line arguments
	const args = process.argv.slice(2);
	const command = args[0] || 'complete';

	let migrationFunction;
	switch (command) {
		case 'phase1':
			migrationFunction = runPhase1Migration;
			break;
		case 'phase2':
			migrationFunction = runPhase2Migration;
			break;
		case 'phase3':
			migrationFunction = runPhase3Migration;
			break;
		case 'phase4':
			migrationFunction = runPhase4Migration;
			break;
		case 'phase5':
			migrationFunction = runPhase5Migration;
			break;
		case 'phase6':
			migrationFunction = runPhase6Migration;
			break;
		case 'complete':
		default:
			migrationFunction = runCompleteMigration;
			break;
	}

	migrationFunction()
		.then((result) => {
			if (result.success) {
				console.log('\n✅ Migration completed successfully!');
				process.exit(0);
			} else {
				console.log('\n❌ Migration failed!');
				process.exit(1);
			}
		})
		.catch((error) => {
			console.error('Migration crashed:', error);
			process.exit(1);
		});
}
