#!/usr/bin/env node

// Test script for image migration
// Run with: node test-image-migration.js

import { ConvexClient } from 'convex/browser';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const CONVEX_URL = process.env.VITE_CONVEX_URL;

if (!CONVEX_URL) {
	console.error('❌ Missing VITE_CONVEX_URL in .env.local');
	process.exit(1);
}

console.log('🚀 Testing Image Migration from Strapi to Convex');
console.log('================================================');

const client = new ConvexClient(CONVEX_URL);

async function testMigration() {
	try {
		// Test connection first
		console.log('\n1. Testing Strapi connection...');
		const connectionResult = await client.mutation('migration:testConnection');
		if (connectionResult.success) {
			console.log('✅ Strapi connection successful');
		} else {
			console.error('❌ Strapi connection failed:', connectionResult.message);
			return;
		}

		// Test migrating a single entity with images (Home)
		console.log('\n2. Testing Home migration (with images)...');
		try {
			const homeResult = await client.mutation('migration:migrateHome');
			console.log('✅', homeResult.message);
		} catch (error) {
			console.error('❌ Home migration failed:', error.message);
		}

		// Test migrating Sponsors (with logos)
		console.log('\n3. Testing Sponsors migration (with logos)...');
		try {
			const sponsorsResult = await client.mutation('migration:migrateSponsors');
			console.log('✅', sponsorsResult.message);
		} catch (error) {
			console.error('❌ Sponsors migration failed:', error.message);
		}

		// Test migrating Players (with avatars)
		console.log('\n4. Testing Players migration (with avatars)...');
		try {
			const playersResult = await client.mutation('migration:migratePlayers');
			console.log('✅', playersResult.message);
		} catch (error) {
			console.error('❌ Players migration failed:', error.message);
		}

		// Query to verify images were uploaded
		console.log('\n5. Verifying uploaded images...');

		// Check home images
		const homes = await client.query('home:list');
		if (homes && homes.length > 0) {
			const home = homes[0];
			console.log(`✅ Home has ${home.imageIds?.length || 0} images uploaded`);
		}

		// Check sponsor logos
		const sponsors = await client.query('sponsors:list');
		if (sponsors && sponsors.length > 0) {
			const sponsorsWithLogos = sponsors.filter((s) => s.logoId).length;
			console.log(`✅ ${sponsorsWithLogos} sponsors have logos uploaded`);
		}

		// Check player avatars
		const players = await client.query('players:list');
		if (players && players.length > 0) {
			const playersWithAvatars = players.filter((p) => p.avatarId).length;
			console.log(`✅ ${playersWithAvatars} players have avatars uploaded`);
		}

		console.log('\n✨ Image migration test completed!');
	} catch (error) {
		console.error('\n💥 Migration test failed:', error);
	} finally {
		await client.close();
	}
}

// Run the test
testMigration();
