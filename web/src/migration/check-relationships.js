import { ConvexHttpClient } from 'convex/browser';
import { api } from '../convex/_generated/api.js';
import { config } from 'dotenv';

config({ path: '.env.local' });

async function checkRelationships() {
	const client = new ConvexHttpClient(process.env.PUBLIC_CONVEX_URL);

	try {
		console.log('🔗 CHECKING EXISTING RELATIONSHIPS');
		console.log('=================================\n');

		// Check relationship tables (these are not exposed via API, so we'll use a workaround)
		// For now, let's check events and see if they have relationships when queried
		const events = await client.query(api.events.list, { page: 1, pageSize: 5 });

		console.log(`📊 Sample of ${events.data.length} events to check relationships:`);

		for (const event of events.data) {
			try {
				const detailed = await client.query(api.events.get, { slug: event.slug });
				if (detailed) {
					console.log(`\n🎯 Event: ${detailed.name}`);
					console.log(`   Hosts: ${detailed.hosts?.length || 0}`);
					console.log(`   Mentors: ${detailed.mentors?.length || 0}`);
					console.log(`   Attendees: ${detailed.players?.length || 0}`);

					if (detailed.hosts?.length > 0) {
						console.log(`   Sample host: ${detailed.hosts[0].name}`);
					}
					if (detailed.mentors?.length > 0) {
						console.log(`   Sample mentor: ${detailed.mentors[0].name}`);
					}
					if (detailed.players?.length > 0) {
						console.log(`   Sample attendee: ${detailed.players[0].name}`);
					}
				} else {
					console.log(`\n⚠️ Event not found: ${event.name}`);
				}
			} catch (error) {
				console.log(`\n❌ Error querying ${event.slug}: ${error.message}`);
			}
		}

		console.log('\n✅ Relationship check completed!');
	} catch (error) {
		console.error('❌ Error:', error.message);
	}
}

checkRelationships();
