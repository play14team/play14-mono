#!/usr/bin/env tsx

import { ConvexClient } from 'convex/browser';
import { api } from '../src/convex/_generated/api';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

// Initialize Convex client
const convexUrl = process.env.CONVEX_URL;
if (!convexUrl) {
  console.error('❌ Error: CONVEX_URL not found in environment variables');
  process.exit(1);
}

const client = new ConvexClient(convexUrl);

async function checkStorageUsage() {
  console.log('🔍 Checking Storage Usage and File Migration Status');
  console.log('===================================================\n');

  try {
    // Get storage status from the new query
    const status = await client.query(api.storageStatus.getStorageStatus, {});

    console.log(`📁 Total storage files referenced: ${status.totalFiles}`);
    console.log('');

    console.log('Storage Usage by Content Type:');
    console.log('==============================');

    const labels: Record<string, string> = {
      playerAvatars: 'Player Avatars',
      homeImages: 'Home Images',
      historyImages: 'History Images',
      gameImages: 'Game Images',
      gameResources: 'Game Resources',
      articleImages: 'Article Images',
      eventImages: 'Event Images',
      testimonialAudio: 'Testimonial Audio',
      sponsorLogos: 'Sponsor Logos',
      venueLogos: 'Venue Logos'
    };

    for (const [key, count] of Object.entries(status.stats)) {
      const emoji = count > 0 ? '✅' : '⚪';
      const label = labels[key] || key;
      console.log(`${emoji} ${label.padEnd(20)} - ${count} files`);
    }

    // Show examples if available
    if (Object.keys(status.examples).length > 0) {
      console.log('\n📸 Sample Storage IDs:');
      console.log('======================');

      for (const [type, examples] of Object.entries(status.examples)) {
        if (Array.isArray(examples) && examples.length > 0) {
          const label = labels[type] || type;
          console.log(`\n${label}:`);
          examples.forEach((ex) => {
            const name = ex.name || ex.title || 'Item';
            console.log(`  - ${name}: ${ex.storageId}`);
          });
        }
      }
    }

    console.log('\n✅ Storage check complete!');
  } catch (error) {
    console.error('Error checking storage:', error);
    process.exit(1);
  }
}

async function main() {
  await checkStorageUsage();
  process.exit(0);
}

main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
