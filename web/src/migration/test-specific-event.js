import { ConvexHttpClient } from 'convex/browser';
import { api } from '../convex/_generated/api.js';
import { config } from 'dotenv';

config({ path: '.env.local' });

async function checkSpecificEvent() {
	const client = new ConvexHttpClient(process.env.PUBLIC_CONVEX_URL);

	try {
		// Look for an event that should have relationships
		// From the logs, the first batch had Zoetermeer 2024 with hosts
		const allEvents = await client.query(api.events.list, { page: 1, pageSize: 50 });
		const zoetermeerEvent = allEvents.data.find((e) => e.name.includes('Zoetermeer'));

		if (!zoetermeerEvent) {
			console.log('❌ No Zoetermeer event found');
			return;
		}

		console.log('🔍 Found Zoetermeer event:', zoetermeerEvent.slug);
		const result = await client.query(api.events.get, {
			slug: zoetermeerEvent.slug
		});

		if (result) {
			console.log(`🎯 Event: ${result.name}`);
			console.log(`  Hosts: ${result.hosts?.length || 0}`);
			console.log(`  Mentors: ${result.mentors?.length || 0}`);
			console.log(`  Players: ${result.players?.length || 0}`);

			if (result.hosts?.length > 0) {
				console.log(
					`  Host names:`,
					result.hosts.map((h) => h.name)
				);
			}
			if (result.mentors?.length > 0) {
				console.log(
					`  Mentor names:`,
					result.mentors.map((m) => m.name)
				);
			}
			if (result.players?.length > 0) {
				console.log(
					`  Some attendees:`,
					result.players.slice(0, 3).map((p) => p.name)
				);
			}
		} else {
			console.log('❌ Zoetermeer event not found in detail query');

			// Try listing events to see available slugs
			const listResult = await client.query(api.events.list, { page: 1, pageSize: 10 });
			console.log('\n📋 Available events:');
			listResult.data.forEach((event) => {
				console.log(`  - ${event.name} (${event.slug})`);
			});
		}
	} catch (error) {
		console.error('❌ Error:', error.message);
	}
}

checkSpecificEvent();
