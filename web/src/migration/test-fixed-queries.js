import { ConvexHttpClient } from 'convex/browser';
import { api } from '../convex/_generated/api.js';
import { config } from 'dotenv';

config({ path: '.env.local' });

async function testFixedQueries() {
	const client = new ConvexHttpClient(process.env.PUBLIC_CONVEX_URL);

	try {
		console.log('🔍 TESTING FIXED QUERIES');
		console.log('=======================\n');

		// Test the list query
		const result = await client.query(api.events.list, { page: 1, pageSize: 10 });
		console.log(`📊 List query works! Found ${result.data.length} events`);

		// Test the get query with the first few events
		console.log('\n🔍 Testing individual event queries:');
		for (let i = 0; i < Math.min(3, result.data.length); i++) {
			const event = result.data[i];
			console.log(`\n  Testing: ${event.name} (${event.slug})`);

			try {
				const detailed = await client.query(api.events.get, { slug: event.slug });
				if (detailed) {
					console.log(`    ✅ Query successful!`);
					console.log(`    Hosts: ${detailed.hosts?.length || 0}`);
					console.log(`    Mentors: ${detailed.mentors?.length || 0}`);
					console.log(`    Attendees: ${detailed.players?.length || 0}`);

					if (detailed.hosts?.length > 0) {
						console.log(`    Sample host: ${detailed.hosts[0].name}`);
					}
					if (detailed.mentors?.length > 0) {
						console.log(`    Sample mentor: ${detailed.mentors[0].name}`);
					}
					if (detailed.players?.length > 0) {
						console.log(`    Sample attendee: ${detailed.players[0].name}`);
					}
				} else {
					console.log(`    ⚠️ Query returned null`);
				}
			} catch (error) {
				console.log(`    ❌ Query failed: ${error.message}`);
			}
		}

		console.log('\n✅ Query testing completed!');
	} catch (error) {
		console.error('❌ Error:', error.message);
	}
}

testFixedQueries();
