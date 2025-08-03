// Explore Strapi GraphQL schema to understand available fields
import { readFileSync } from 'fs';

async function introspectSchema() {
	console.log('🔍 Introspecting Strapi GraphQL schema...\n');

	const envContent = readFileSync('.env.local', 'utf8');
	const strapiUrl = envContent.match(/STRAPI_API_URL=(.+)/)?.[1] || 'https://community.play14.org';
	const strapiSecret = envContent.match(/STRAPI_API_SECRET="(.+)"/)?.[1];
	const graphqlUrl = `${strapiUrl}/graphql`;

	// GraphQL introspection query to get schema
	const introspectionQuery = `
        query IntrospectionQuery {
            __schema {
                types {
                    name
                    kind
                    fields {
                        name
                        type {
                            name
                            kind
                            ofType {
                                name
                                kind
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
			body: JSON.stringify({ query: introspectionQuery })
		});

		if (!response.ok) {
			console.error('❌ Introspection failed:', response.status, response.statusText);
			return;
		}

		const data = await response.json();

		if (data.errors) {
			console.error('❌ GraphQL Errors:', data.errors);
			return;
		}

		const schema = data.data.__schema;

		// Find Tag type
		const tagType = schema.types.find((type) => type.name === 'Tag');
		if (tagType) {
			console.log('🏷️  Tag type found! Available fields:');
			tagType.fields?.forEach((field) => {
				console.log(`   - ${field.name}: ${field.type.name || field.type.kind}`);
			});
		} else {
			console.log('❌ Tag type not found. Available types:');
			schema.types
				.filter((type) => type.kind === 'OBJECT' && !type.name.startsWith('__'))
				.forEach((type) => {
					if (
						type.name.toLowerCase().includes('tag') ||
						type.name.toLowerCase().includes('game') ||
						type.name.toLowerCase().includes('player') ||
						type.name.toLowerCase().includes('event')
					) {
						console.log(`   - ${type.name}`);
					}
				});
		}

		// Look for content types
		const contentTypes = schema.types.filter(
			(type) =>
				type.kind === 'OBJECT' &&
				!type.name.startsWith('__') &&
				(type.name.includes('Entity') ||
					type.name.includes('Response') ||
					['Tag', 'Game', 'Player', 'Event', 'Article'].includes(type.name))
		);

		console.log('\n📋 Potential content types found:');
		contentTypes.forEach((type) => {
			console.log(`\n   🔹 ${type.name}:`);
			if (type.fields) {
				type.fields.slice(0, 10).forEach((field) => {
					console.log(`      - ${field.name}`);
				});
				if (type.fields.length > 10) {
					console.log(`      ... and ${type.fields.length - 10} more fields`);
				}
			}
		});
	} catch (error) {
		console.error('💥 Error:', error.message);
	}
}

// Test a simple query to see what works
async function testSimpleQuery() {
	console.log('\n🧪 Testing simple queries to understand schema...\n');

	const envContent = readFileSync('.env.local', 'utf8');
	const strapiUrl = envContent.match(/STRAPI_API_URL=(.+)/)?.[1] || 'https://community.play14.org';
	const strapiSecret = envContent.match(/STRAPI_API_SECRET="(.+)"/)?.[1];
	const graphqlUrl = `${strapiUrl}/graphql`;

	// Try different queries to see what exists
	const testQueries = [
		{
			name: 'tags query',
			query: `query { tags { data { id } } }`
		},
		{
			name: 'games query',
			query: `query { games { data { id } } }`
		},
		{
			name: 'players query',
			query: `query { players { data { id } } }`
		},
		{
			name: 'events query',
			query: `query { events { data { id } } }`
		}
	];

	for (const test of testQueries) {
		try {
			const response = await fetch(graphqlUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					...(strapiSecret && { Authorization: `Bearer ${strapiSecret}` })
				},
				body: JSON.stringify({ query: test.query })
			});

			const data = await response.json();

			if (data.errors) {
				console.log(`❌ ${test.name}: ${data.errors[0].message}`);
			} else {
				console.log(
					`✅ ${test.name}: Working! Found ${data.data?.[Object.keys(data.data)[0]]?.data?.length || 0} items`
				);
			}
		} catch (error) {
			console.log(`💥 ${test.name}: ${error.message}`);
		}
	}
}

async function run() {
	await testSimpleQuery();
	await introspectSchema();
}

run().catch(console.error);
