import { ConvexHttpClient } from 'convex/browser';
import { api } from '../convex/_generated/api.js';
import { config } from 'dotenv';

config({ path: '.env.local' });

async function checkPlayers() {
	const client = new ConvexHttpClient(process.env.PUBLIC_CONVEX_URL);

	try {
		console.log('👤 CHECKING PLAYER DATA');
		console.log('======================\n');

		// Check if players query exists and works
		try {
			const players = await client.query(api.players.list, { page: 1, pageSize: 10 });
			console.log(`📊 Players found: ${players.data.length}`);

			if (players.data.length > 0) {
				console.log('\n🔍 Sample players:');
				players.data.slice(0, 3).forEach((player, i) => {
					console.log(`  ${i + 1}. ${player.name} (${player.slug}) - strapiId: ${player.strapiId}`);
				});
			}
		} catch (error) {
			console.log(`❌ Error querying players: ${error.message}`);
		}
	} catch (error) {
		console.error('❌ Error:', error.message);
	}
}

checkPlayers();
