// Direct test of Strapi GraphQL API using the credentials from .env.local
import { readFileSync } from 'fs';

async function testStrapiDirectly() {
	console.log('🔍 Testing Strapi GraphQL API directly...\n');

	// Read environment variables
	const envContent = readFileSync('.env.local', 'utf8');
	const strapiUrl = envContent.match(/STRAPI_API_URL=(.+)/)?.[1] || 'https://community.play14.org';
	const strapiSecret = envContent.match(/STRAPI_API_SECRET="(.+)"/)?.[1];

	console.log(`📡 Strapi URL: ${strapiUrl}`);
	console.log(`🔑 Secret available: ${strapiSecret ? 'Yes' : 'No'}\n`);

	const graphqlUrl = `${strapiUrl}/graphql`;

	// Test query for tags (simple content type)
	const tagsQuery = `
        query GetTags {
            tags(pagination: { limit: 5 }) {
                meta {
                    pagination {
                        total
                    }
                }
                data {
                    id
                    attributes {
                        name
                        slug
                        createdAt
                        updatedAt
                    }
                }
            }
        }
    `;

	try {
		console.log('📋 Testing Tags query...');
		const response = await fetch(graphqlUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				...(strapiSecret && { Authorization: `Bearer ${strapiSecret}` })
			},
			body: JSON.stringify({ query: tagsQuery })
		});

		console.log(`📊 Response Status: ${response.status} ${response.statusText}`);

		if (!response.ok) {
			const errorText = await response.text();
			console.error('❌ Error Response:', errorText);
			return false;
		}

		const data = await response.json();

		if (data.errors) {
			console.error('❌ GraphQL Errors:', data.errors);
			return false;
		}

		if (data.data?.tags) {
			const tags = data.data.tags;
			console.log(`✅ Success! Found ${tags.meta.pagination.total} tags total`);
			console.log('📝 Sample tags:');
			tags.data.slice(0, 3).forEach((tag, index) => {
				console.log(`   ${index + 1}. ${tag.attributes.name} (${tag.attributes.slug})`);
			});
		}

		return true;
	} catch (error) {
		console.error('💥 Network Error:', error.message);
		return false;
	}
}

// Test a more complex query with relationships
async function testComplexQuery() {
	console.log('\n🔍 Testing complex query (Games with relationships)...\n');

	const envContent = readFileSync('.env.local', 'utf8');
	const strapiUrl = envContent.match(/STRAPI_API_URL=(.+)/)?.[1] || 'https://community.play14.org';
	const strapiSecret = envContent.match(/STRAPI_API_SECRET="(.+)"/)?.[1];
	const graphqlUrl = `${strapiUrl}/graphql`;

	const gamesQuery = `
        query GetGames {
            games(pagination: { limit: 3 }) {
                meta {
                    pagination {
                        total
                    }
                }
                data {
                    id
                    attributes {
                        name
                        slug
                        publishedAt
                        description
                        category
                        timing {
                            min
                            max
                        }
                        participants {
                            min
                            max
                        }
                        tags {
                            data {
                                id
                                attributes {
                                    name
                                }
                            }
                        }
                        players {
                            data {
                                id
                                attributes {
                                    name
                                }
                            }
                        }
                    }
                }
            }
        }
    `;

	try {
		const response = await fetch(graphqlUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				...(strapiSecret && { Authorization: `Bearer ${strapiSecret}` })
			},
			body: JSON.stringify({ query: gamesQuery })
		});

		console.log(`📊 Response Status: ${response.status} ${response.statusText}`);

		if (!response.ok) {
			const errorText = await response.text();
			console.error('❌ Error Response:', errorText);
			return false;
		}

		const data = await response.json();

		if (data.errors) {
			console.error('❌ GraphQL Errors:', data.errors);
			return false;
		}

		if (data.data?.games) {
			const games = data.data.games;
			console.log(`✅ Success! Found ${games.meta.pagination.total} games total`);
			console.log('🎮 Sample games with relationships:');

			games.data.forEach((game, index) => {
				const attrs = game.attributes;
				console.log(`\n   ${index + 1}. ${attrs.name}`);
				console.log(
					`      📝 Description: ${attrs.description?.substring(0, 100) || 'N/A'}${attrs.description?.length > 100 ? '...' : ''}`
				);
				console.log(`      🏷️  Category: ${attrs.category || 'N/A'}`);
				console.log(
					`      ⏱️  Timing: ${attrs.timing?.min || 'N/A'}-${attrs.timing?.max || 'N/A'} minutes`
				);
				console.log(
					`      👥 Participants: ${attrs.participants?.min || 'N/A'}-${attrs.participants?.max || 'N/A'} people`
				);
				console.log(`      🏷️  Tags: ${attrs.tags?.data?.length || 0} tags`);
				console.log(`      👤 Players: ${attrs.players?.data?.length || 0} players`);
			});
		}

		return true;
	} catch (error) {
		console.error('💥 Network Error:', error.message);
		return false;
	}
}

// Run tests
async function runTests() {
	console.log('🚀 Starting Strapi API Tests\n');

	const simpleTest = await testStrapiDirectly();
	if (simpleTest) {
		const complexTest = await testComplexQuery();

		if (complexTest) {
			console.log('\n🎉 All tests passed! Strapi API is working correctly.');
			console.log('✅ Ready to proceed with migration testing.');
		} else {
			console.log('\n⚠️  Simple query worked, but complex query failed.');
			console.log('🔧 May need to check relationship fields.');
		}
	} else {
		console.log('\n❌ Basic connection failed. Please check:');
		console.log('   - Strapi server is running');
		console.log('   - API URL is correct');
		console.log('   - API secret is valid');
		console.log('   - Network connectivity');
	}
}

runTests().catch(console.error);
