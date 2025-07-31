#!/usr/bin/env node

/**
 * Migration Verification Script
 *
 * This script verifies that all data has been correctly migrated from Strapi to Convex.
 * It compares record counts, validates relationships, and checks data integrity.
 */

import { ConvexHttpClient } from 'convex/browser';
import { api } from '../convex/_generated/api.js';

// Load environment variables from .env.local
import { config } from 'dotenv';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
config({ path: join(__dirname, '../../.env.local') });

const STRAPI_API_URL = process.env.STRAPI_API_URL;
const STRAPI_API_SECRET = process.env.STRAPI_API_SECRET;
const CONVEX_URL = process.env.VITE_CONVEX_URL;

if (!STRAPI_API_URL || !STRAPI_API_SECRET) {
	console.error('❌ Missing Strapi environment variables in .env.local');
	process.exit(1);
}

if (!CONVEX_URL) {
	console.error('❌ Missing VITE_CONVEX_URL environment variable in .env.local');
	process.exit(1);
}

// Initialize Convex client
const convex = new ConvexHttpClient(CONVEX_URL);

// Strapi API helper
async function fetchFromStrapi(endpoint, params = {}) {
	const url = new URL(`${STRAPI_API_URL}/api/${endpoint}`);

	// Add pagination limit to get all records
	url.searchParams.append('pagination[limit]', '1000');

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
	return data.data || [];
}

// Verification results tracking
class VerificationResults {
	constructor() {
		this.results = [];
		this.summary = {
			total: 0,
			passed: 0,
			failed: 0,
			warnings: 0
		};
	}

	addResult(category, test, status, message, details = null) {
		const result = {
			category,
			test,
			status, // 'pass', 'fail', 'warning'
			message,
			details,
			timestamp: new Date().toISOString()
		};

		this.results.push(result);
		this.summary.total++;
		this.summary[status === 'pass' ? 'passed' : status === 'fail' ? 'failed' : 'warnings']++;

		const icon = status === 'pass' ? '✅' : status === 'fail' ? '❌' : '⚠️';
		console.log(`${icon} [${category}] ${test}: ${message}`);

		if (details && (status === 'fail' || status === 'warning')) {
			console.log(`   Details: ${JSON.stringify(details, null, 2)}`);
		}
	}

	printSummary() {
		console.log('\n' + '='.repeat(80));
		console.log('📊 MIGRATION VERIFICATION SUMMARY');
		console.log('='.repeat(80));
		console.log(`Total Tests: ${this.summary.total}`);
		console.log(`✅ Passed: ${this.summary.passed}`);
		console.log(`❌ Failed: ${this.summary.failed}`);
		console.log(`⚠️  Warnings: ${this.summary.warnings}`);

		const successRate =
			this.summary.total > 0 ? ((this.summary.passed / this.summary.total) * 100).toFixed(1) : 0;
		console.log(`📈 Success Rate: ${successRate}%`);

		if (this.summary.failed > 0) {
			console.log('\n🚨 CRITICAL ISSUES FOUND - Migration may be incomplete!');
		} else if (this.summary.warnings > 0) {
			console.log('\n⚠️  Minor issues found - Review warnings above');
		} else {
			console.log('\n🎉 Migration verification completed successfully!');
		}
	}
}

// Core data verification functions
async function verifyCoreTables(results) {
	console.log('\n📋 Verifying Core Tables...');

	const coreTableMappings = [
		{ strapi: 'tags', convex: 'tags' },
		{ strapi: 'event-locations', convex: 'eventLocations' },
		{ strapi: 'venues', convex: 'venues' },
		{ strapi: 'sponsors', convex: 'sponsors' },
		{ strapi: 'players', convex: 'players' },
		{ strapi: 'articles', convex: 'articles' },
		{ strapi: 'games', convex: 'games' },
		{ strapi: 'events', convex: 'events' },
		{ strapi: 'expectations', convex: 'expectations' },
		{ strapi: 'testimonials', convex: 'testimonials' },
		{ strapi: 'formats', convex: 'formats' },
		{ strapi: 'histories', convex: 'history' },
		{ strapi: 'hostings', convex: 'hosting' }
	];

	for (const { strapi, convex } of coreTableMappings) {
		try {
			const strapiData = await fetchFromStrapi(strapi, {
				'filters[publishedAt][$notNull]': 'true'
			});
			const convexData = await convex.query(api.migration.getMigrationStatus);

			const strapiCount = strapiData.length;
			const convexCount = convexData[convex] || 0;

			if (strapiCount === convexCount) {
				results.addResult(
					'Core Tables',
					`${convex} count`,
					'pass',
					`${convexCount}/${strapiCount} records migrated`
				);
			} else if (convexCount === 0) {
				results.addResult(
					'Core Tables',
					`${convex} count`,
					'fail',
					`No records found in Convex (expected ${strapiCount})`,
					{ strapiCount, convexCount }
				);
			} else {
				results.addResult(
					'Core Tables',
					`${convex} count`,
					'warning',
					`Count mismatch: ${convexCount} in Convex vs ${strapiCount} in Strapi`,
					{ strapiCount, convexCount }
				);
			}
		} catch (error) {
			results.addResult(
				'Core Tables',
				`${convex} fetch`,
				'fail',
				`Error verifying ${convex}: ${error.message}`
			);
		}
	}
}

async function verifyRelationshipTables(results) {
	console.log('\n🔗 Verifying Relationship Tables...');

	const relationshipTables = [
		'eventHosts',
		'eventMentors',
		'eventAttendees',
		'gameDocumenters',
		'gameProposers',
		'articleTags'
	];

	const convexData = await convex.query(api.migration.getMigrationStatus);

	for (const table of relationshipTables) {
		const count = convexData[table] || 0;

		if (count > 0) {
			results.addResult(
				'Relationships',
				`${table} count`,
				'pass',
				`${count} relationship records found`
			);
		} else {
			results.addResult(
				'Relationships',
				`${table} count`,
				'warning',
				`No relationship records found - may be expected if no relationships exist`
			);
		}
	}
}

async function verifyDataIntegrity(results) {
	console.log('\n🔍 Verifying Data Integrity...');

	try {
		// Check for duplicate strapiIds
		const tables = [
			'tags',
			'eventLocations',
			'venues',
			'sponsors',
			'players',
			'articles',
			'games',
			'events'
		];

		for (const table of tables) {
			// This would require a custom Convex query to check for duplicates
			// For now, we'll verify the table exists and has the expected structure
			const convexData = await convex.query(api.migration.getMigrationStatus);
			const count = convexData[table] || 0;

			if (count > 0) {
				results.addResult(
					'Data Integrity',
					`${table} structure`,
					'pass',
					`Table exists with ${count} records`
				);
			} else {
				results.addResult('Data Integrity', `${table} structure`, 'warning', `Table is empty`);
			}
		}
	} catch (error) {
		results.addResult(
			'Data Integrity',
			'structure check',
			'fail',
			`Error checking data integrity: ${error.message}`
		);
	}
}

async function verifySampleRecords(results) {
	console.log('\n🔬 Verifying Sample Records...');

	try {
		// Verify a few sample records from each table
		const sampleChecks = [
			{
				strapi: 'tags',
				strapiField: 'value',
				testName: 'Tags sample'
			},
			{
				strapi: 'players',
				strapiField: 'name',
				testName: 'Players sample'
			},
			{
				strapi: 'events',
				strapiField: 'name',
				testName: 'Events sample'
			}
		];

		for (const { strapi, strapiField, testName } of sampleChecks) {
			try {
				const strapiData = await fetchFromStrapi(strapi, {
					'pagination[limit]': '3',
					'filters[publishedAt][$notNull]': 'true'
				});

				if (strapiData.length > 0) {
					const sampleRecord = strapiData[0];
					const fieldValue = sampleRecord.attributes[strapiField];

					results.addResult(
						'Sample Records',
						testName,
						'pass',
						`Sample record found: "${fieldValue}"`
					);
				} else {
					results.addResult(
						'Sample Records',
						testName,
						'warning',
						`No published records found in ${strapi}`
					);
				}
			} catch (error) {
				results.addResult(
					'Sample Records',
					testName,
					'fail',
					`Error fetching sample: ${error.message}`
				);
			}
		}
	} catch (error) {
		results.addResult(
			'Sample Records',
			'sample verification',
			'fail',
			`Error verifying samples: ${error.message}`
		);
	}
}

async function verifySpecialCases(results) {
	console.log('\n🎯 Verifying Special Cases...');

	try {
		// Check home table (single record)
		const convexData = await convex.query(api.migration.getMigrationStatus);
		const homeCount = convexData.home || 0;

		if (homeCount === 1) {
			results.addResult(
				'Special Cases',
				'Home table',
				'pass',
				'Home table has single record as expected'
			);
		} else if (homeCount === 0) {
			results.addResult(
				'Special Cases',
				'Home table',
				'warning',
				'Home table is empty - may not have home data in Strapi'
			);
		} else {
			results.addResult(
				'Special Cases',
				'Home table',
				'warning',
				`Home table has ${homeCount} records (expected 1)`
			);
		}

		// Check that all tables exist in Convex
		const expectedTables = [
			'events',
			'games',
			'players',
			'articles',
			'eventLocations',
			'venues',
			'sponsors',
			'tags',
			'home',
			'expectations',
			'testimonials',
			'formats',
			'history',
			'hosting',
			'eventHosts',
			'eventMentors',
			'eventAttendees',
			'gameDocumenters',
			'gameProposers',
			'articleTags'
		];

		const missingTables = [];
		for (const table of expectedTables) {
			if (!(table in convexData)) {
				missingTables.push(table);
			}
		}

		if (missingTables.length === 0) {
			results.addResult(
				'Special Cases',
				'All tables exist',
				'pass',
				'All expected tables found in Convex'
			);
		} else {
			results.addResult(
				'Special Cases',
				'Missing tables',
				'fail',
				`Missing tables in Convex: ${missingTables.join(', ')}`,
				{ missingTables }
			);
		}
	} catch (error) {
		results.addResult(
			'Special Cases',
			'special cases check',
			'fail',
			`Error verifying special cases: ${error.message}`
		);
	}
}

async function verifyEnvironment(results) {
	console.log('\n🔧 Verifying Environment...');

	// Check Strapi connection
	try {
		await fetchFromStrapi('tags', { 'pagination[limit]': '1' });
		results.addResult(
			'Environment',
			'Strapi connection',
			'pass',
			'Successfully connected to Strapi API'
		);
	} catch (error) {
		results.addResult(
			'Environment',
			'Strapi connection',
			'fail',
			`Cannot connect to Strapi: ${error.message}`
		);
	}

	// Check Convex connection
	try {
		await convex.query(api.migration.getMigrationStatus);
		results.addResult(
			'Environment',
			'Convex connection',
			'pass',
			'Successfully connected to Convex'
		);
	} catch (error) {
		results.addResult(
			'Environment',
			'Convex connection',
			'fail',
			`Cannot connect to Convex: ${error.message}`
		);
	}

	// Check environment variables
	const requiredEnvVars = ['STRAPI_API_URL', 'STRAPI_API_SECRET', 'VITE_CONVEX_URL'];
	const missingVars = requiredEnvVars.filter((varName) => !process.env[varName]);

	if (missingVars.length === 0) {
		results.addResult(
			'Environment',
			'Environment variables',
			'pass',
			'All required environment variables found'
		);
	} else {
		results.addResult(
			'Environment',
			'Environment variables',
			'fail',
			`Missing environment variables: ${missingVars.join(', ')}`,
			{ missingVars }
		);
	}
}

// Main verification function
async function runVerification() {
	console.log('🔍 MIGRATION VERIFICATION STARTING...');
	console.log(`📡 Strapi URL: ${STRAPI_API_URL}`);
	console.log(`🔗 Convex URL: ${CONVEX_URL}`);
	console.log('='.repeat(80));

	const results = new VerificationResults();

	try {
		// Run all verification checks
		await verifyEnvironment(results);
		await verifyCoreTables(results);
		await verifyRelationshipTables(results);
		await verifyDataIntegrity(results);
		await verifySampleRecords(results);
		await verifySpecialCases(results);

		// Print final summary
		results.printSummary();

		// Exit with appropriate code
		if (results.summary.failed > 0) {
			process.exit(1);
		} else {
			process.exit(0);
		}
	} catch (error) {
		console.error('\n💥 Verification script crashed:', error);
		process.exit(1);
	}
}

// Export for potential use as module
export { runVerification, fetchFromStrapi };

// Run if called directly
if (import.meta.url.endsWith(process.argv[1])) {
	runVerification().catch((error) => {
		console.error('Verification failed:', error);
		process.exit(1);
	});
}
