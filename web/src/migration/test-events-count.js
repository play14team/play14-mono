import { ConvexHttpClient } from 'convex/browser';
import { api } from '../convex/_generated/api.js';
import { config } from 'dotenv';

config({ path: '.env.local' });

async function checkEvents() {
	const client = new ConvexHttpClient(process.env.PUBLIC_CONVEX_URL);

	try {
		// Count all events using list query with a large page size
		const result = await client.query(api.events.list, {
			page: 1,
			pageSize: 200 // Large page size to get all events
		});
		const events = result.data;
		console.log('📊 Total events in Convex:', events.length);

		// Check for strapiId field
		if (events.length > 0) {
			const firstEvent = events[0];
			console.log('🔍 First event sample:');
			console.log('  _id:', firstEvent._id);
			console.log('  strapiId:', firstEvent.strapiId);
			console.log('  name:', firstEvent.name);

			// Count events with strapiId
			const eventsWithStrapiId = events.filter(
				(e) => e.strapiId !== undefined && e.strapiId !== null
			);
			console.log('📈 Events with strapiId:', eventsWithStrapiId.length);

			// Show a few more examples
			console.log('\n🔍 First 3 events strapiId check:');
			events.slice(0, 3).forEach((event, index) => {
				console.log(`  ${index + 1}. ${event.name} - strapiId: ${event.strapiId}`);
			});
		}
	} catch (error) {
		console.error('❌ Error:', error.message);
	}
}

checkEvents();
