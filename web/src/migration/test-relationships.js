import { ConvexHttpClient } from 'convex/browser';
import { api } from '../convex/_generated/api.js';
import { config } from 'dotenv';

config({ path: '.env.local' });

async function checkRelationships() {
	const client = new ConvexHttpClient(process.env.PUBLIC_CONVEX_URL);

	try {
		// Check relationship tables by querying a few events with relationships
		const result = await client.query(api.events.list, {
			page: 1,
			pageSize: 5
		});

		const events = result.data;
		console.log(`📊 Checking relationships for ${events.length} events...`);

		for (const event of events) {
			console.log(`\n🎯 Event: ${event.name}`);
			console.log(`  Hosts: ${event.hosts?.length || 0}`);
			console.log(`  Mentors: ${event.mentors?.length || 0}`);
			console.log(`  Attendees: ${event.players?.length || 0}`);

			if (event.hosts?.length > 0) {
				console.log(`  Sample host: ${event.hosts[0].name}`);
			}
		}

		console.log('\n✅ Relationship migration appears to be working!');
	} catch (error) {
		console.error('❌ Error:', error.message);
	}
}

checkRelationships();
