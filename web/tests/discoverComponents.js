// Progressive discovery of component structures
import { readFileSync } from 'fs';

async function testComponentStructures() {
	console.log('🔍 Discovering component structures systematically...\n');

	const envContent = readFileSync('.env.local', 'utf8');
	const strapiUrl = envContent.match(/STRAPI_API_URL=(.+)/)?.[1] || 'https://community.play14.org';
	const strapiSecret = envContent.match(/STRAPI_API_SECRET="(.+)"/)?.[1];
	const graphqlUrl = `${strapiUrl}/graphql`;

	// Test different component field patterns
	const componentTests = [
		{
			name: 'Games - timebox',
			query: `query { games(pagination: { limit: 1 }) { data { attributes { timebox { minimum maximum } } } } }`
		},
		{
			name: 'Games - scale',
			query: `query { games(pagination: { limit: 1 }) { data { attributes { scale { minimum maximum } } } } }`
		},
		{
			name: 'Games - materials basic',
			query: `query { games(pagination: { limit: 1 }) { data { attributes { materials { id } } } } }`
		},
		{
			name: 'Games - materials with name',
			query: `query { games(pagination: { limit: 1 }) { data { attributes { materials { id name } } } } }`
		},
		{
			name: 'Players - socialNetworks basic',
			query: `query { players(pagination: { limit: 1 }) { data { attributes { socialNetworks { id } } } } }`
		},
		{
			name: 'Players - socialNetworks with network',
			query: `query { players(pagination: { limit: 1 }) { data { attributes { socialNetworks { id network } } } } }`
		},
		{
			name: 'Events - registration basic',
			query: `query { events(pagination: { limit: 1 }) { data { attributes { registration { start end } } } } }`
		},
		{
			name: 'Events - timetable basic',
			query: `query { events(pagination: { limit: 1 }) { data { attributes { timetable { id } } } } }`
		},
		{
			name: 'Events - timetable with day',
			query: `query { events(pagination: { limit: 1 }) { data { attributes { timetable { id day } } } } }`
		}
	];

	for (const test of componentTests) {
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
				console.log(`✅ ${test.name}: Working!`);

				// Show what data we got
				const contentType = Object.keys(data.data)[0];
				const firstItem = data.data[contentType].data[0];
				if (firstItem) {
					const componentData = test.name.includes('timebox')
						? firstItem.attributes.timebox
						: test.name.includes('scale')
							? firstItem.attributes.scale
							: test.name.includes('materials')
								? firstItem.attributes.materials
								: test.name.includes('socialNetworks')
									? firstItem.attributes.socialNetworks
									: test.name.includes('registration')
										? firstItem.attributes.registration
										: test.name.includes('timetable')
											? firstItem.attributes.timetable
											: null;

					if (componentData) {
						console.log(`   Data: ${JSON.stringify(componentData, null, 2)}`);
					}
				}
			}
		} catch (error) {
			console.log(`💥 ${test.name}: ${error.message}`);
		}
	}
}

// Try introspection for specific component types
async function introspectComponents() {
	console.log('\n🔍 Introspecting component types...\n');

	const envContent = readFileSync('.env.local', 'utf8');
	const strapiUrl = envContent.match(/STRAPI_API_URL=(.+)/)?.[1] || 'https://community.play14.org';
	const strapiSecret = envContent.match(/STRAPI_API_SECRET="(.+)"/)?.[1];
	const graphqlUrl = `${strapiUrl}/graphql`;

	const introspectionQuery = `
        query {
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

		const data = await response.json();

		if (data.errors) {
			console.error('❌ Introspection failed:', data.errors);
			return;
		}

		const schema = data.data.__schema;

		// Look for component types
		const componentTypes = schema.types.filter(
			(type) =>
				type.name &&
				(type.name.includes('Component') ||
					type.name.includes('Shared') ||
					type.name.includes('Event') ||
					type.name.includes('Contact'))
		);

		console.log('🧩 Component types found:');
		componentTypes.forEach((type) => {
			console.log(`\n   🔹 ${type.name}:`);
			if (type.fields) {
				type.fields.forEach((field) => {
					console.log(`      - ${field.name}: ${field.type.name || field.type.kind || 'Complex'}`);
				});
			}
		});
	} catch (error) {
		console.error('💥 Introspection error:', error.message);
	}
}

async function run() {
	await testComponentStructures();
	await introspectComponents();
}

run().catch(console.error);
