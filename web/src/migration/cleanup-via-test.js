// Using the testSingleEvent pattern to clean up duplicates
import { config } from 'dotenv';

config({ path: '.env.local' });

console.log('🧹 Cleaning up duplicate events...');

// Get the 3 events without strapiId that need to be removed
const duplicateIds = [
	'jx783r3p93bcy7y8rtzp95qxxd7ms4mh', // Vienna 2025 without strapiId
	'jx76mdjpjj1nn4ckj90vv8dj417mr3n1', // London 2025 without strapiId
	'jx703v29b1dk1aerwtb6rn0a757ms6ez' // Stuttgart 2020 without strapiId
];

console.log(`🗑️ Will delete ${duplicateIds.length} duplicate events`);

// We can't directly delete, but we can use a query to check they exist
// Then manually clean via Convex dashboard or create a proper cleanup mutation

try {
	console.log('✅ Duplicate IDs identified. Please clean these up manually in Convex dashboard:');
	duplicateIds.forEach((id, i) => {
		console.log(`  ${i + 1}. ${id}`);
	});

	console.log('\n📋 Or run these commands in Convex CLI:');
	console.log('npx convex dashboard');
	console.log('Then go to Data tab and delete the events with these IDs.');
} catch (error) {
	console.error('❌ Error:', error.message);
}
