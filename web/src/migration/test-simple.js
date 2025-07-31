#!/usr/bin/env node

/**
 * Simple test script to verify Strapi API connection
 * Uses environment variables for secure configuration
 */

import { config } from 'dotenv';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
config({ path: join(__dirname, '../../.env.local') });

const STRAPI_API_URL = process.env.STRAPI_API_URL;
const STRAPI_API_SECRET = process.env.STRAPI_API_SECRET;

async function testConnection() {
	console.log('🔍 Testing Strapi API connection...');
	console.log(`API URL: ${STRAPI_API_URL}`);

	if (!STRAPI_API_URL || !STRAPI_API_SECRET) {
		console.error('❌ Missing environment variables: STRAPI_API_URL or STRAPI_API_SECRET');
		console.error('Please check your .env.local file');
		return false;
	}

	try {
		const response = await fetch(`${STRAPI_API_URL}/api/tags?pagination[limit]=3`, {
			headers: {
				Authorization: `Bearer ${STRAPI_API_SECRET}`,
				'Content-Type': 'application/json'
			}
		});

		if (!response.ok) {
			throw new Error(`HTTP ${response.status}: ${response.statusText}`);
		}

		const data = await response.json();
		console.log('✅ Connection successful!');
		console.log(`Found ${data.data?.length || 0} tags (sample)`);
		console.log('Total tags available:', data.meta?.pagination?.total || 'unknown');

		if (data.data && data.data.length > 0) {
			console.log(
				'Sample tags:',
				data.data.map((t) => t.attributes.value)
			);
		}

		return true;
	} catch (error) {
		console.error('❌ Connection failed:', error.message);
		return false;
	}
}

async function main() {
	console.log('🚀 Play14 Migration Test\n');

	const connectionOk = await testConnection();
	if (connectionOk) {
		console.log('\n🎉 Ready to proceed with migration!');
		console.log('\nNext steps:');
		console.log('1. Start Convex dev server: pnpm dev:backend');
		console.log('2. Open Convex dashboard: pnpm dashboard');
		console.log('3. Run migration: pnpm migration:run');
	} else {
		console.log('\n❌ Cannot proceed - connection failed');
		console.log('Check your environment variables in .env.local');
	}
}

main().catch(console.error);
