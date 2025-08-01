import { ConvexHttpClient } from 'convex/browser';
import { api } from '../convex/_generated/api.js';
import { config } from 'dotenv';

config({ path: '.env.local' });

async function debugDatabase() {
	const client = new ConvexHttpClient(process.env.PUBLIC_CONVEX_URL);

	try {
		console.log('🔍 DEBUGGING DATABASE STATE');
		console.log('===========================\n');

		console.log('Testing different page sizes and configurations...');

		// Test with different parameters
		const tests = [
			{ page: 1, pageSize: 10 },
			{ page: 1, pageSize: 100 },
			{ page: 1, pageSize: 200 }
		];

		for (const testParams of tests) {
			try {
				console.log(`\n📊 Testing with page=${testParams.page}, pageSize=${testParams.pageSize}:`);
				const result = await client.query(api.events.list, testParams);
				console.log(
					`   Result: ${result.data.length} events, totalPages: ${result.totalPages}, total: ${result.total}`
				);
			} catch (error) {
				console.log(`   ❌ Error: ${error.message}`);
			}
		}
	} catch (error) {
		console.error('❌ Error:', error.message);
	}
}

debugDatabase();
