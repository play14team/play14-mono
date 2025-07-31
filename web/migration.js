#!/usr/bin/env node

/* eslint-disable */

/**
 * Strapi to Convex Migration Script
 *
 * This script migrates data from a Strapi export backup to Convex database.
 *
 * Usage: node migration.js [--dry-run] [--tables=events,games,players]
 */

import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const BACKUP_PATH = '/mnt/c/Users/cpontet/repos/play14/backup/database/backup';
const CONVEX_URL = process.env.CONVEX_URL || 'https://your-deployment.convex.cloud';

// Command line arguments
const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');
const tablesArg = args.find((arg) => arg.startsWith('--tables='));
const selectedTables = tablesArg ? tablesArg.split('=')[1].split(',') : null;

console.log('🚀 Starting Strapi to Convex Migration');
console.log(`📁 Backup path: ${BACKUP_PATH}`);
console.log(`🔄 Mode: ${isDryRun ? 'DRY RUN' : 'LIVE MIGRATION'}`);
if (selectedTables) {
	console.log(`📋 Tables: ${selectedTables.join(', ')}`);
}

// Data transformation mappings
const TYPE_MAPPINGS = {
	'api::event.event': 'events',
	'api::game.game': 'games',
	'api::player.player': 'players',
	'api::article.article': 'articles',
	'api::event-location.event-location': 'eventLocations',
	'api::venue.venue': 'venues',
	'api::sponsor.sponsor': 'sponsors',
	'api::tag.tag': 'tags',
	'api::home.home': 'home',
	'plugin::upload.file': 'files'
};

// Status mappings
const EVENT_STATUS_MAPPING = {
	Announced: 'Announced',
	Open: 'Open',
	Over: 'Over',
	Cancelled: 'Cancelled'
};

const GAME_CATEGORY_MAPPING = {
	Game: 'Game',
	IceBreaker: 'IceBreaker',
	WarmUp: 'WarmUp',
	Facilitation: 'Facilitation',
	Retrospective: 'Retrospective',
	CoolDown: 'CoolDown'
};

const PLAYER_POSITION_MAPPING = {
	Player: 'Player',
	Host: 'Host',
	Mentor: 'Mentor',
	Founder: 'Founder'
};

const ARTICLE_CATEGORY_MAPPING = {
	Announcement: 'Announcement',
	Article: 'Article',
	Event: 'Event',
	Interview: 'Interview',
	Meetup: 'Meetup'
};

// Data storage
const migratedData = {
	events: [],
	games: [],
	players: [],
	articles: [],
	eventLocations: [],
	venues: [],
	sponsors: [],
	tags: [],
	home: [],
	relationships: [],
	files: []
};

const idMappings = new Map(); // Strapi ID -> Convex ID mappings

/**
 * Load and parse entities from the backup
 */
async function loadEntities() {
	console.log('📖 Loading entities from backup...');

	const entitiesFile = path.join(BACKUP_PATH, 'entities/entities_00001.jsonl');
	const fileStream = fs.createReadStream(entitiesFile);

	const rl = readline.createInterface({
		input: fileStream,
		crlfDelay: Infinity
	});

	let totalCount = 0;
	const typeCounts = {};

	for await (const line of rl) {
		if (line.trim()) {
			const entity = JSON.parse(line);
			const convexType = TYPE_MAPPINGS[entity.type];

			if (convexType) {
				totalCount++;
				typeCounts[convexType] = (typeCounts[convexType] || 0) + 1;

				// Skip if filtering by specific tables
				if (selectedTables && !selectedTables.includes(convexType)) {
					continue;
				}

				// Transform entity based on type
				const transformedEntity = await transformEntity(entity, convexType);
				if (transformedEntity) {
					migratedData[convexType].push(transformedEntity);
				}
			}
		}
	}

	console.log(`✅ Loaded ${totalCount} entities:`);
	Object.entries(typeCounts).forEach(([type, count]) => {
		console.log(`   ${type}: ${count}`);
	});
}

/**
 * Load relationships from the backup
 */
async function loadRelationships() {
	console.log('🔗 Loading relationships from backup...');

	const linksFile = path.join(BACKUP_PATH, 'links/links_00001.jsonl');
	if (!fs.existsSync(linksFile)) {
		console.log('⚠️  No links file found, skipping relationships');
		return;
	}

	const fileStream = fs.createReadStream(linksFile);
	const rl = readline.createInterface({
		input: fileStream,
		crlfDelay: Infinity
	});

	let relationshipCount = 0;

	for await (const line of rl) {
		if (line.trim()) {
			try {
				const link = JSON.parse(line);
				migratedData.relationships.push(link);
				relationshipCount++;
			} catch (err) {
				console.warn('⚠️  Failed to parse relationship:', err.message);
			}
		}
	}

	console.log(`✅ Loaded ${relationshipCount} relationships`);
}

/**
 * Transform entity data from Strapi format to Convex format
 */
async function transformEntity(entity, convexType) {
	const data = entity.data;
	const id = entity.id;

	try {
		switch (convexType) {
			case 'events':
				return transformEvent(data, id);
			case 'games':
				return transformGame(data, id);
			case 'players':
				return transformPlayer(data, id);
			case 'articles':
				return transformArticle(data, id);
			case 'eventLocations':
				return transformEventLocation(data, id);
			case 'venues':
				return transformVenue(data, id);
			case 'sponsors':
				return transformSponsor(data, id);
			case 'tags':
				return transformTag(data, id);
			case 'home':
				return transformHome(data, id);
			case 'files':
				return transformFile(data, id);
			default:
				console.warn(`⚠️  Unknown type: ${convexType}`);
				return null;
		}
	} catch (err) {
		console.error(`❌ Failed to transform ${convexType} entity ${id}:`, err.message);
		return null;
	}
}

/**
 * Transform event entity
 */
function transformEvent(data, strapiId) {
	const event = {
		_strapiId: strapiId,
		name: data.name,
		slug: data.slug,
		start: new Date(data.start).getTime(),
		end: new Date(data.end).getTime(),
		timezone: data.timezone || 'UTC',
		status: EVENT_STATUS_MAPPING[data.status] || 'Announced',
		description: data.description || '',
		contactEmail: data.contactEmail || 'team@play14.org',
		tagline: data.tagline || null,
		publishedAt: data.publishedAt ? new Date(data.publishedAt).getTime() : null,
		updatedAt: new Date(data.updatedAt).getTime(),

		// Will be populated later from relationships
		defaultImageId: null,
		imageIds: [],
		locationId: null,
		venueId: null,

		// Transform components
		timetable: (data.timetable || []).map((tt) => ({
			day: tt.day,
			description: tt.description || '',
			timeslots: (tt.timeslots || []).map((ts) => ({
				time: ts.time,
				description: ts.description || ''
			}))
		})),

		registration: data.registration
			? {
					link: data.registration.link || null,
					widgetCode: data.registration.widgetCode || null
				}
			: null,

		sponsorships: (data.sponsorships || []).map((sp) => ({
			category: sp.category || '',
			sponsorIds: [] // Will be populated from relationships
		})),

		media: (data.media || []).map((m) => ({
			url: m.url || '',
			type: m.type || ''
		})),

		finance: data.finance
			? {
					budget: data.finance.budget || null,
					expenses: Array.isArray(data.finance.expenses)
						? data.finance.expenses.map((ex) => ({
								category: ex.category || '',
								amount: ex.amount || 0,
								description: ex.description || ''
							}))
						: []
				}
			: null
	};

	return event;
}

/**
 * Transform game entity
 */
function transformGame(data, strapiId) {
	return {
		_strapiId: strapiId,
		name: data.name,
		slug: data.slug,
		category: GAME_CATEGORY_MAPPING[data.category] || 'Game',
		scale: data.scale || '',
		timebox: data.timebox || '',
		summary: data.summary || '',
		description: data.description || '',
		credits: data.credits || '',
		publishedAt: data.publishedAt ? new Date(data.publishedAt).getTime() : null,
		updatedAt: new Date(data.updatedAt).getTime(),

		// Will be populated later from relationships
		defaultImageId: null,
		imageIds: [],
		resourceIds: [],
		firstPlayedAtEventId: null,

		// Transform components
		materials: (data.materials || []).map((m) => ({ value: m.value || '' })),
		preparationSteps: (data.preparationSteps || []).map((ps) => ({ value: ps.value || '' })),
		safety: (data.safety || []).map((s) => ({
			key: s.key || '',
			value: s.value || ''
		})),
		tags: (data.tags || []).map((t) => ({ value: t.value || '' })),

		ratings: data.ratings
			? {
					energy: data.ratings.energy || null,
					connection: data.ratings.connection || null,
					silliness: data.ratings.silliness || null
				}
			: null
	};
}

/**
 * Transform player entity
 */
function transformPlayer(data, strapiId) {
	return {
		_strapiId: strapiId,
		name: data.name,
		slug: data.slug,
		position: PLAYER_POSITION_MAPPING[data.position] || 'Player',
		company: data.company || null,
		tagline: data.tagline || null,
		bio: data.bio || null,
		website: data.website || null,

		// Will be populated later from relationships
		avatarId: null,
		userId: null,

		// Transform location (map field)
		location: data.location
			? {
					lat: data.location.lat || 0,
					lng: data.location.lng || 0,
					address: data.location.address || null
				}
			: null,

		// Transform social networks
		socialNetworks: (data.socialNetworks || []).map((sn) => ({
			type: sn.type || '',
			url: sn.url || ''
		}))
	};
}

/**
 * Transform article entity
 */
function transformArticle(data, strapiId) {
	return {
		_strapiId: strapiId,
		title: data.title,
		slug: data.slug,
		category: ARTICLE_CATEGORY_MAPPING[data.category] || 'Article',
		summary: data.summary || '',
		content: data.content || '',
		canonical: data.canonical || data.cannonical || null, // Handle typo in backup
		publishedAt: data.publishedAt ? new Date(data.publishedAt).getTime() : null,
		updatedAt: new Date(data.updatedAt).getTime(),

		// Will be populated later from relationships
		defaultImageId: null,
		imageIds: [],
		authorId: null
	};
}

/**
 * Transform event location entity
 */
function transformEventLocation(data, strapiId) {
	return {
		_strapiId: strapiId,
		name: data.name,
		country: data.country || '',
		location: data.location
			? {
					lat: data.location.lat || 0,
					lng: data.location.lng || 0
				}
			: null
	};
}

/**
 * Transform venue entity
 */
function transformVenue(data, strapiId) {
	return {
		_strapiId: strapiId,
		name: data.name,
		website: data.website || null,
		location: data.location
			? {
					lat: data.location.lat || 0,
					lng: data.location.lng || 0
				}
			: null,
		addressDetails: data.addressDetails || null
	};
}

/**
 * Transform sponsor entity
 */
function transformSponsor(data, strapiId) {
	return {
		_strapiId: strapiId,
		name: data.name,
		url: data.url || null,
		logoId: null, // Will be populated from relationships
		socialNetworks: (data.socialNetworks || []).map((sn) => ({
			type: sn.type || '',
			url: sn.url || ''
		}))
	};
}

/**
 * Transform tag entity
 */
function transformTag(data, strapiId) {
	return {
		_strapiId: strapiId,
		value: data.value || data.name || ''
	};
}

/**
 * Transform home entity
 */
function transformHome(data, strapiId) {
	return {
		_strapiId: strapiId,
		imageIds: [] // Will be populated from relationships
	};
}

/**
 * Transform file entity
 */
function transformFile(data, strapiId) {
	return {
		_strapiId: strapiId,
		name: data.name,
		url: data.url,
		mime: data.mime,
		size: data.size,
		width: data.width || null,
		height: data.height || null,
		hash: data.hash,
		ext: data.ext,
		alternativeText: data.alternativeText || null,
		caption: data.caption || null,
		blurhash: data.blurhash || null,
		formats: data.formats || null
	};
}

/**
 * Process relationships and update references
 */
function processRelationships() {
	console.log('🔗 Processing relationships...');

	// Group relationships by type
	const relationshipsByType = {};

	migratedData.relationships.forEach((rel) => {
		if (rel.kind === 'relation.morph' && rel.relation === 'morphToMany') {
			const leftType = TYPE_MAPPINGS[rel.left.type];
			const rightType = TYPE_MAPPINGS[rel.right.type];

			if (leftType && rightType) {
				const key = `${rightType}_${rel.right.field}`;
				if (!relationshipsByType[key]) {
					relationshipsByType[key] = [];
				}
				relationshipsByType[key].push({
					leftId: rel.left.ref,
					leftType,
					rightId: rel.right.ref,
					rightType,
					field: rel.right.field,
					position: rel.right.pos || 1
				});
			}
		}
	});

	// Apply relationships to entities
	Object.entries(relationshipsByType).forEach(([key, relationships]) => {
		console.log(`   Processing ${relationships.length} relationships for ${key}`);

		relationships.forEach((rel) => {
			updateEntityRelationship(rel);
		});
	});

	console.log('✅ Relationships processed');
}

/**
 * Update entity with relationship data
 */
function updateEntityRelationship(rel) {
	const entities = migratedData[rel.rightType];
	if (!entities) return;

	const entity = entities.find((e) => e._strapiId === rel.rightId);
	if (!entity) return;

	// Handle file relationships (images, avatars, etc.)
	if (rel.leftType === 'files') {
		const fieldMapping = {
			defaultImage: 'defaultImageId',
			avatar: 'avatarId',
			logo: 'logoId',
			images: 'imageIds',
			resources: 'resourceIds'
		};

		const convexField = fieldMapping[rel.field];
		if (convexField) {
			if (convexField.endsWith('Ids')) {
				// Array field
				if (!entity[convexField]) entity[convexField] = [];
				entity[convexField].push(`file_${rel.leftId}`);
			} else {
				// Single field
				entity[convexField] = `file_${rel.leftId}`;
			}
		}
	}
}

/**
 * Generate Convex migration functions
 */
function generateConvexMigrations() {
	console.log('📝 Generating Convex migration functions...');

	const migrationFunctions = [];

	Object.entries(migratedData).forEach(([table, data]) => {
		if (data.length > 0 && table !== 'relationships' && table !== 'files') {
			const functionCode = generateMigrationFunction(table, data);
			migrationFunctions.push({
				table,
				filename: `migrate${table.charAt(0).toUpperCase() + table.slice(1)}.ts`,
				code: functionCode
			});
		}
	});

	return migrationFunctions;
}

/**
 * Generate individual migration function
 */
function generateMigrationFunction(table, data) {
	const sampleData = JSON.stringify(data[0], null, 2).replace(/"/g, '\\"');

	return `import { mutation } from './_generated/server';
import { v } from 'convex/values';

// Migration function for ${table}
export const migrate${table.charAt(0).toUpperCase() + table.slice(1)} = mutation({
  args: {},
  handler: async (ctx) => {
    console.log('Starting migration for ${table}...');
    
    const data = ${JSON.stringify(data, null, 4)};
    
    const results = [];
    
    for (const item of data) {
      try {
        // Remove Strapi ID before insertion
        const { _strapiId, ...convexItem } = item;
        
        const id = await ctx.db.insert('${table}', convexItem);
        results.push({ strapiId: _strapiId, convexId: id });
        
        console.log(\`Migrated ${table} \${_strapiId} -> \${id}\`);
      } catch (error) {
        console.error(\`Failed to migrate ${table} \${item._strapiId}:\`, error);
      }
    }
    
    console.log(\`Migration completed for ${table}: \${results.length}/\${data.length} records\`);
    return results;
  }
});
`;
}

/**
 * Write migration functions to files
 */
function writeMigrationFiles(migrationFunctions) {
	console.log('💾 Writing migration files...');

	const migrationDir = path.join(__dirname, 'src/convex/migrations');

	// Create migrations directory if it doesn't exist
	if (!fs.existsSync(migrationDir)) {
		fs.mkdirSync(migrationDir, { recursive: true });
	}

	migrationFunctions.forEach(({ filename, code }) => {
		const filePath = path.join(migrationDir, filename);
		fs.writeFileSync(filePath, code);
		console.log(`   ✅ ${filename}`);
	});

	// Create index file
	const indexContent = migrationFunctions
		.map(({ filename, table }) => {
			const functionName = `migrate${table.charAt(0).toUpperCase() + table.slice(1)}`;
			return `export { ${functionName} } from './${filename.replace('.ts', '')}';`;
		})
		.join('\n');

	fs.writeFileSync(path.join(migrationDir, 'index.ts'), indexContent);
	console.log('   ✅ index.ts');
}

/**
 * Generate summary report
 */
function generateSummaryReport() {
	console.log('\n📊 MIGRATION SUMMARY');
	console.log('===================');

	Object.entries(migratedData).forEach(([table, data]) => {
		if (Array.isArray(data) && data.length > 0) {
			console.log(`${table.padEnd(15)}: ${data.length.toString().padStart(5)} records`);
		}
	});

	console.log('\n📋 NEXT STEPS:');
	console.log('1. Review generated migration files in src/convex/migrations/');
	console.log('2. Run migrations in Convex dashboard or via CLI');
	console.log('3. Update relationship references after migration');
	console.log('4. Test the migrated data');

	if (isDryRun) {
		console.log('\n⚠️  This was a DRY RUN - no actual migration performed');
	}
}

/**
 * Main migration function
 */
async function main() {
	try {
		// Check if backup exists
		if (!fs.existsSync(BACKUP_PATH)) {
			throw new Error(`Backup path not found: ${BACKUP_PATH}`);
		}

		// Load data
		await loadEntities();
		await loadRelationships();

		// Process relationships
		processRelationships();

		if (isDryRun) {
			// Generate and write files for review
			const migrationFunctions = generateConvexMigrations();
			writeMigrationFiles(migrationFunctions);
		} else {
			// TODO: Implement actual Convex API calls for live migration
			console.log('🚧 Live migration not yet implemented');
			console.log('💡 Use --dry-run to generate migration files for manual execution');
		}

		// Generate report
		generateSummaryReport();

		console.log('\n✅ Migration completed successfully!');
	} catch (error) {
		console.error('\n❌ Migration failed:', error.message);
		process.exit(1);
	}
}

// Run migration
main();
