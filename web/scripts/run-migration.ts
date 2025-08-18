#!/usr/bin/env tsx
/**
 * Strapi to Convex Migration Runner
 *
 * This script provides a simple interface to run the Strapi to Convex migration
 * for the #play14 platform.
 *
 * Usage:
 *   pnpm migrate                     - Run complete migration
 *   pnpm migrate --clean             - Clean all migration data first
 *   pnpm migrate --types tags,players - Migrate specific content types
 *   pnpm migrate --no-files          - Skip file migration
 *   pnpm migrate --status            - Check migration status
 */

import { ConvexClient } from 'convex/browser';
import { api } from '../src/convex/_generated/api.js';
import { config } from 'dotenv';
import { resolve } from 'path';

// Load environment variables from .env.local
config({ path: resolve(process.cwd(), '.env.local'), quiet: true });

// Get Convex URL from environment
const CONVEX_URL = process.env.VITE_CONVEX_URL || process.env.PUBLIC_CONVEX_URL;

if (!CONVEX_URL) {
  console.error('❌ CONVEX_URL not found in environment variables');
  console.error('Please set VITE_CONVEX_URL or PUBLIC_CONVEX_URL');
  process.exit(1);
}

// Create Convex client
const client = new ConvexClient(CONVEX_URL);

// Parse command line arguments
const args = process.argv.slice(2);
const shouldClean = args.includes('--clean');
const shouldShowStatus = args.includes('--status');
const noFiles = args.includes('--no-files');
const typesArg = args.find((arg) => arg.startsWith('--types='));
const contentTypes = typesArg ? typesArg.split('=')[1].split(',') : undefined;

async function showMigrationStatus() {
  console.log('📊 Checking migration status...\n');

  try {
    // Use the comprehensive status that checks actual table data
    const status = await client.query(api.migrationStatus.getComprehensiveMigrationStatus);

    // Debug: Check what we received
    if (!status || typeof status !== 'object') {
      console.log('⚠️  No migration status data available');
      return;
    }

    console.log('Migration Status:');
    console.log('================');

    const allTypes = [
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

    for (const type of allTypes) {
      const typeStatus = status[type];
      if (typeStatus && typeStatus.status) {
        const emoji =
          typeStatus.status === 'completed'
            ? '✅'
            : typeStatus.status === 'in_progress'
              ? '🔄'
              : typeStatus.status === 'failed'
                ? '❌'
                : '⏸️';

        const statusText = String(typeStatus.status || 'unknown');
        console.log(
          `${emoji} ${type.padEnd(15)} - ${statusText.padEnd(12)} (${typeStatus.count || 0} records)`
        );

        if (typeStatus.error) {
          console.log(`   └─ Error: ${typeStatus.error}`);
        }
      } else {
        console.log(`⏹️  ${type.padEnd(15)} - not started`);
      }
    }

    // Show ID mappings count
    const mappings = await client.query(api.strapiMigration.getIdMappingCounts);
    console.log('\nID Mappings:');
    console.log('============');
    if (mappings && typeof mappings === 'object') {
      const entries = Object.entries(mappings);
      if (entries.length > 0) {
        for (const [type, count] of entries) {
          console.log(`${type.padEnd(15)} - ${count} mappings`);
        }
      } else {
        console.log('No ID mappings found');
      }
    } else {
      console.log('No ID mappings found');
    }
  } catch (error) {
    console.error('❌ Failed to get migration status:', error);
  }
}

async function cleanMigrationData() {
  console.log('🧹 Cleaning all migration data and storage files...\n');

  try {
    // Use complete cleanup that includes storage files
    const result = await client.action(api.cleanupStorage.completeCleanup);

    console.log('✅ Cleanup completed successfully');
    console.log('\n📁 Storage cleanup:');
    console.log(`   - Deleted ${result.storage.deleted} files`);
    if (result.storage.failed > 0) {
      console.log(`   - Failed to delete ${result.storage.failed} files`);
    }

    console.log('\n📊 Data cleanup:');
    console.log(`   - Deleted ${result.data.totalDeleted} records`);
    console.log(`   - Cleared ${result.data.statusesDeleted} migration statuses`);
  } catch (error) {
    console.error('❌ Failed to clean migration data:', error);
  }
}

async function runMigration() {
  console.log('🚀 Starting Strapi to Convex Migration');
  console.log('======================================');
  console.log(`📍 Convex URL: ${CONVEX_URL}`);
  console.log(`📁 File migration: ${!noFiles ? 'ENABLED' : 'DISABLED'}`);

  if (contentTypes) {
    console.log(`📝 Content types: ${contentTypes.join(', ')}`);
  } else {
    console.log('📝 Content types: ALL');
  }

  console.log('');

  try {
    // Run the complete migration
    const result = await client.action(api.strapiMigration.runCompleteMigration, {
      includeFiles: !noFiles,
      contentTypes: contentTypes,
      batchSize: 50
    });

    console.log('\n✅ Migration completed successfully!');
    console.log('\nResults:');
    console.log('========');

    for (const [type, status] of Object.entries(result)) {
      if (typeof status === 'object' && status !== null) {
        const typedStatus = status as { success: boolean; count?: number; error?: string };
        const emoji = typedStatus.success ? '✅' : '❌';
        console.log(`${emoji} ${type.padEnd(15)} - ${typedStatus.count || 0} records`);

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

  // Run migration
  await runMigration();

  // Show final status
  console.log('\n');
  await showMigrationStatus();

  process.exit(0);
}

// Run the script
main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
