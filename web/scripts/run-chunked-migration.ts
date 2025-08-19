#!/usr/bin/env tsx

import { ConvexClient } from 'convex/browser';
import { api } from '../src/convex/_generated/api';
import dotenv from 'dotenv';
import { parseArgs } from 'util';
import path from 'path';

// Load environment variables
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const { values } = parseArgs({
  options: {
    'content-types': {
      type: 'string',
      short: 't',
      multiple: true
    },
    'no-files': {
      type: 'boolean',
      short: 'n',
      default: false
    },
    parallel: {
      type: 'boolean',
      short: 'p',
      default: false
    },
    status: {
      type: 'boolean',
      short: 's',
      default: false
    },
    clean: {
      type: 'boolean',
      short: 'c',
      default: false
    },
    help: {
      type: 'boolean',
      short: 'h',
      default: false
    }
  }
});

const contentTypes = values['content-types'] as string[] | undefined;
const noFiles = values['no-files'] as boolean;
const parallel = values['parallel'] as boolean;
const shouldShowStatus = values['status'] as boolean;
const shouldClean = values['clean'] as boolean;
const showHelp = values['help'] as boolean;

if (showHelp) {
  console.log(`
Chunked Strapi to Convex Migration Script

This script migrates data from Strapi to Convex in chunks to avoid timeouts.
Each content type is migrated separately, respecting dependencies.

Usage:
  pnpm migrate:chunked [options]

Options:
  -t, --content-types  Specific content types to migrate (can be used multiple times)
  -n, --no-files      Skip file migration
  -p, --parallel      Run migrations in parallel (respects dependencies)
  -s, --status        Show migration status only
  -c, --clean         Clean migration data before starting
  -h, --help          Show this help message

Examples:
  pnpm migrate:chunked                    # Migrate everything sequentially
  pnpm migrate:chunked -p                 # Migrate everything in parallel
  pnpm migrate:chunked -t players -t games # Migrate only players and games
  pnpm migrate:chunked -n                 # Skip file migration
  pnpm migrate:chunked -s                 # Show migration status

Content Types:
  Foundation: tags, expectations
  Core:       players, venues, sponsors
  Single:     home, history, format, hosting
  Complex:    testimonials, eventLocations, games, articles
  Events:     events (depends on all others)
`);
  process.exit(0);
}

// Initialize Convex client
const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL || process.env.CONVEX_URL;
if (!convexUrl) {
  console.error('❌ Error: CONVEX_URL not found in environment variables');
  console.log('Please ensure your .env.local file contains CONVEX_URL or NEXT_PUBLIC_CONVEX_URL');
  process.exit(1);
}

const client = new ConvexClient(convexUrl);

async function showMigrationStatus() {
  console.log('📊 Checking migration status...\n');

  // migrationStatus moved under migration namespace
  const status = await client.query(
    api.migration.migrationStatus.getComprehensiveMigrationStatus,
    {}
  );

  console.log('Current Database Status:');
  console.log('========================');

  const contentTypesOrder = [
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

  for (const type of contentTypesOrder) {
    if (status[type]) {
      const count = status[type];
      const emoji = count > 0 ? '✅' : '⚪';
      console.log(`${emoji} ${type.padEnd(15)} - ${count} records`);
    }
  }

  const totalRecords = Object.values(status).reduce((sum: number, count: unknown) => {
    return typeof count === 'number' ? sum + count : sum;
  }, 0);

  console.log('\n------------------------');
  console.log(`Total records: ${totalRecords}`);
}

async function cleanMigrationData() {
  console.log('🧹 Cleaning migration data...\n');

  const confirm = await new Promise<boolean>((resolve) => {
    process.stdout.write('⚠️  This will delete ALL migrated data. Are you sure? (y/N): ');
    process.stdin.once('data', (data) => {
      resolve(data.toString().trim().toLowerCase() === 'y');
    });
  });

  if (!confirm) {
    console.log('Cancelled.');
    return;
  }

  console.log('\nCleaning data...');
  const result = await client.action(api.migration.strapiMigration.cleanupAllMigrationData, {});

  console.log(
    `✅ Cleaned ${result.totalDeletedItems} items and ${result.totalDeletedMappings} mappings`
  );
}

async function runMigration() {
  console.log('🚀 Starting Chunked Strapi → Convex Migration');
  console.log('===========================================');
  console.log('');
  console.log(`📍 Convex URL: ${convexUrl}`);
  console.log(`📂 Include files: ${!noFiles}`);
  console.log(`⚡ Parallel mode: ${parallel}`);

  if (contentTypes) {
    console.log(`📝 Content types: ${contentTypes.join(', ')}`);
  } else {
    console.log('📝 Content types: ALL');
  }

  console.log('');

  try {
    // Run the chunked migration
    const result = await client.action(api.migration.chunkedMigration.runChunkedMigration, {
      includeFiles: !noFiles,
      contentTypes: contentTypes,
      parallel: parallel
    });

    console.log('\n✅ Migration completed successfully!');
    console.log('\nSummary:');
    console.log('========');
    console.log(`✅ Successful: ${result.summary.successful} content types`);
    console.log(`❌ Failed: ${result.summary.failed} content types`);
    console.log(`📝 Total records: ${result.summary.totalRecords}`);
    console.log(`⏱️  Duration: ${(result.summary.duration / 1000).toFixed(1)}s`);

    console.log('\nDetailed Results:');
    console.log('=================');
    for (const [type, status] of Object.entries(result.results)) {
      if (typeof status === 'object' && status !== null) {
        const typedStatus = status as {
          success: boolean;
          count?: number;
          error?: string;
          duration?: number;
        };
        const emoji = typedStatus.success ? '✅' : '❌';
        const duration = typedStatus.duration
          ? ` (${(typedStatus.duration / 1000).toFixed(1)}s)`
          : '';
        console.log(`${emoji} ${type.padEnd(15)} - ${typedStatus.count || 0} records${duration}`);

        if (typedStatus.error) {
          console.log(`   └─ Error: ${typedStatus.error}`);
        }
      }
    }
  } catch (error) {
    console.error('\n❌ Migration failed:', error);
    process.exit(1);
  }
}

async function main() {
  // Show status and exit if requested
  if (shouldShowStatus) {
    await showMigrationStatus();
    process.exit(0);
  }

  // Clean data if requested
  if (shouldClean) {
    await cleanMigrationData();
    console.log('');
  }

  // Run migration if not just showing status
  if (!shouldShowStatus) {
    await runMigration();
  }

  process.exit(0);
}

// Handle errors
process.on('unhandledRejection', (error) => {
  console.error('Unhandled error:', error);
  process.exit(1);
});

// Run the script
main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
