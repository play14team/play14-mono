import { ConvexHttpClient } from 'convex/browser';
import { api } from '../convex/_generated/api.js';
import { config } from 'dotenv';

config({ path: '.env.local' });

async function comprehensiveCheck() {
	const client = new ConvexHttpClient(process.env.PUBLIC_CONVEX_URL);

	try {
		console.log('🔍 COMPREHENSIVE MIGRATION VERIFICATION');
		console.log('=====================================\n');

		// 1. Check all main tables
		console.log('📊 DATABASE STATE OVERVIEW:');

		const events = await client.query(api.events.list, { page: 1, pageSize: 200 });
		console.log(`  Events: ${events.data.length} total`);

		// Count events with strapiId
		const eventsWithStrapiId = events.data.filter(
			(e) => e.strapiId !== undefined && e.strapiId !== null
		);
		console.log(`  Events with strapiId: ${eventsWithStrapiId.length}`);

		// Check published vs unpublished
		const publishedEvents = events.data.filter((e) => e.publishedAt !== undefined);
		const unpublishedEvents = events.data.filter((e) => e.publishedAt === undefined);
		console.log(`  Published events: ${publishedEvents.length}`);
		console.log(`  Unpublished events: ${unpublishedEvents.length}`);

		// Sample some events to check fields
		console.log('\n🔍 SAMPLE EVENT ANALYSIS:');
		const sampleEvents = events.data.slice(0, 3);
		sampleEvents.forEach((event, i) => {
			console.log(`  Event ${i + 1}: ${event.name}`);
			console.log(`    strapiId: ${event.strapiId}`);
			console.log(`    slug: ${event.slug}`);
			console.log(`    status: ${event.status}`);
			console.log(`    start: ${new Date(event.start).toISOString().split('T')[0]}`);
			console.log(
				`    publishedAt: ${event.publishedAt ? new Date(event.publishedAt).toISOString().split('T')[0] : 'null'}`
			);
			console.log(`    locationId: ${event.locationId || 'null'}`);
			console.log(`    venueId: ${event.venueId || 'null'}`);
			console.log(`    defaultImageId: ${event.defaultImageId || 'null'}`);
			console.log(`    imageIds: ${event.imageIds?.length || 0} images`);
			console.log(`    timetable: ${event.timetable?.length || 0} days`);
			console.log(`    sponsorships: ${event.sponsorships?.length || 0} sponsorships`);
			console.log(`    media: ${event.media?.length || 0} media items`);
			console.log();
		});

		// Check for one detailed event with relationships
		console.log('🔗 RELATIONSHIP CHECK:');
		let eventWithRelationships = null;
		for (const event of events.data.slice(0, 10)) {
			try {
				const detailed = await client.query(api.events.get, { slug: event.slug });
				if (
					detailed &&
					(detailed.hosts?.length > 0 ||
						detailed.mentors?.length > 0 ||
						detailed.players?.length > 0)
				) {
					eventWithRelationships = detailed;
					break;
				}
			} catch (error) {
				console.log(`    ⚠️ Error querying ${event.slug}: ${error.message}`);
			}
		}

		if (eventWithRelationships) {
			console.log(`  ✅ Found event with relationships: ${eventWithRelationships.name}`);
			console.log(`    Hosts: ${eventWithRelationships.hosts?.length || 0}`);
			console.log(`    Mentors: ${eventWithRelationships.mentors?.length || 0}`);
			console.log(`    Attendees: ${eventWithRelationships.players?.length || 0}`);
			if (eventWithRelationships.hosts?.length > 0) {
				console.log(`    Sample host: ${eventWithRelationships.hosts[0].name}`);
			}
		} else {
			console.log('  ⚠️ No events found with relationships - Phase 5 may not be complete');
		}

		// Check data integrity
		console.log('\n🔍 DATA INTEGRITY CHECKS:');

		// Check for duplicate strapiIds
		const strapiIds = eventsWithStrapiId.map((e) => e.strapiId).filter((id) => id !== undefined);
		const uniqueStrapiIds = [...new Set(strapiIds)];
		console.log(
			`  Unique strapiIds: ${uniqueStrapiIds.length} (should equal events with strapiId: ${eventsWithStrapiId.length})`
		);
		if (uniqueStrapiIds.length !== eventsWithStrapiId.length) {
			console.log('  ❌ DUPLICATE STRAPI IDs DETECTED!');
		} else {
			console.log('  ✅ No duplicate strapiIds found');
		}

		// Check for duplicate slugs
		const slugs = events.data.map((e) => e.slug);
		const uniqueSlugs = [...new Set(slugs)];
		console.log(
			`  Unique slugs: ${uniqueSlugs.length} (should equal total events: ${events.data.length})`
		);
		if (uniqueSlugs.length !== events.data.length) {
			console.log('  ❌ DUPLICATE SLUGS DETECTED!');
		} else {
			console.log('  ✅ No duplicate slugs found');
		}

		// Check status distribution
		console.log('\n📈 EVENT STATUS DISTRIBUTION:');
		const statusCounts = {};
		events.data.forEach((event) => {
			statusCounts[event.status] = (statusCounts[event.status] || 0) + 1;
		});
		Object.entries(statusCounts).forEach(([status, count]) => {
			console.log(`  ${status}: ${count} events`);
		});

		console.log('\n✅ COMPREHENSIVE CHECK COMPLETED');
	} catch (error) {
		console.error('❌ Error during comprehensive check:', error.message);
	}
}

comprehensiveCheck();
