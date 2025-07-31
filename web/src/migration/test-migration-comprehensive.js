#!/usr/bin/env node

/**
 * Comprehensive test script to verify migration setup and Strapi connection
 * Tests all endpoints and provides detailed diagnostics
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
		return false;
	}

	try {
		const response = await fetch(`${STRAPI_API_URL}/api/tags?pagination[limit]=5`, {
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

		if (data.data && data.data.length > 0) {
			console.log('Sample tag:', data.data[0].attributes);
		}

		return true;
	} catch (error) {
		console.error('❌ Connection failed:', error.message);
		return false;
	}
}

async function checkDataAvailability() {
	console.log('\n📊 Checking data availability...');

	const endpoints = [
		'tags',
		'event-locations',
		'sponsors',
		'venues',
		'players',
		'articles',
		'games',
		'events'
	];

	const results = {};

	for (const endpoint of endpoints) {
		try {
			const response = await fetch(`${STRAPI_API_URL}/api/${endpoint}?pagination[limit]=1`, {
				headers: {
					Authorization: `Bearer ${STRAPI_API_SECRET}`,
					'Content-Type': 'application/json'
				}
			});

			if (response.ok) {
				const data = await response.json();
				results[endpoint] = {
					available: true,
					count: data.meta?.pagination?.total || 'unknown',
					sample: data.data?.[0]?.attributes || null
				};
				console.log(`✅ ${endpoint}: ${results[endpoint].count} records available`);
			} else {
				results[endpoint] = { available: false, error: `HTTP ${response.status}` };
				console.log(`❌ ${endpoint}: ${results[endpoint].error}`);
			}
		} catch (error) {
			results[endpoint] = { available: false, error: error.message };
			console.log(`❌ ${endpoint}: ${error.message}`);
		}
	}

	return results;
}

async function main() {
	console.log('🚀 Play14 Migration Test Suite\n');

	const connectionOk = await testConnection();
	if (!connectionOk) {
		console.log('\n❌ Cannot proceed with migration - connection failed');
		process.exit(1);
	}

	const dataResults = await checkDataAvailability();

	console.log('\n📈 Summary:');
	const available = Object.values(dataResults).filter((r) => r.available).length;
	const total = Object.keys(dataResults).length;
	console.log(`${available}/${total} endpoints accessible`);

	if (available === total) {
		console.log('\n🎉 All systems ready for migration!');
		console.log('\nNext steps:');
		console.log('1. Start Convex dev server: pnpm dev:backend');
		console.log('2. Open Convex dashboard: pnpm dashboard');
		console.log('3. Run migration functions in order from the dashboard');
	} else {
		console.log('\n⚠️  Some endpoints are not accessible. Check configuration.');
	}
}

main().catch(console.error);
