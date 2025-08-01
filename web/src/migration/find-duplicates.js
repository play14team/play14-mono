import { ConvexHttpClient } from 'convex/browser';
import { api } from '../convex/_generated/api.js';
import { config } from 'dotenv';

config({ path: '.env.local' });

async function findDuplicates() {
	const client = new ConvexHttpClient(process.env.PUBLIC_CONVEX_URL);

	try {
		console.log('🔍 FINDING DUPLICATE SLUGS');
		console.log('==========================\n');

		const events = await client.query(api.events.list, { page: 1, pageSize: 200 });

		// Group events by slug
		const slugGroups = {};
		events.data.forEach((event) => {
			if (!slugGroups[event.slug]) {
				slugGroups[event.slug] = [];
			}
			slugGroups[event.slug].push(event);
		});

		// Find duplicates
		const duplicates = Object.entries(slugGroups).filter(([, events]) => events.length > 1);

		console.log(`📊 Found ${duplicates.length} duplicate slugs:`);
		duplicates.forEach(([slug, events]) => {
			console.log(`\n🔄 Slug: "${slug}" (${events.length} events)`);
			events.forEach((event, i) => {
				console.log(`  ${i + 1}. ${event.name}`);
				console.log(`     _id: ${event._id}`);
				console.log(`     strapiId: ${event.strapiId || 'null'}`);
				console.log(`     status: ${event.status}`);
				console.log(`     start: ${new Date(event.start).toISOString().split('T')[0]}`);
				console.log(
					`     publishedAt: ${event.publishedAt ? new Date(event.publishedAt).toISOString().split('T')[0] : 'null'}`
				);
			});
		});

		// Check for events without strapiId (these might be the problematic ones)
		const eventsWithoutStrapiId = events.data.filter(
			(e) => e.strapiId === undefined || e.strapiId === null
		);
		console.log(`\n🚫 Events without strapiId: ${eventsWithoutStrapiId.length}`);
		eventsWithoutStrapiId.forEach((event) => {
			console.log(`  - ${event.name} (${event.slug}) - _id: ${event._id}`);
		});
	} catch (error) {
		console.error('❌ Error finding duplicates:', error.message);
	}
}

findDuplicates();
