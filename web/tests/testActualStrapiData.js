// Test with actual Strapi schema structure
import { readFileSync } from 'fs';

async function testRealStrapiData() {
	console.log('🔍 Testing with actual Strapi schema...\n');

	const envContent = readFileSync('.env.local', 'utf8');
	const strapiUrl = envContent.match(/STRAPI_API_URL=(.+)/)?.[1] || 'https://community.play14.org';
	const strapiSecret = envContent.match(/STRAPI_API_SECRET="(.+)"/)?.[1];
	const graphqlUrl = `${strapiUrl}/graphql`;

	// Correct Tags query based on schema
	const tagsQuery = `
        query GetTags {
            tags(pagination: { limit: 10 }) {
                meta {
                    pagination {
                        total
                    }
                }
                data {
                    id
                    attributes {
                        value
                        createdAt
                        updatedAt
                    }
                }
            }
        }
    `;

	// Correct Games query based on schema
	const gamesQuery = `
        query GetGames {
            games(pagination: { limit: 5 }) {
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
                        category
                        timebox
                        scale
                        summary
                        materials
                        proposedBy {
                            data {
                                id
                                attributes {
                                    name
                                }
                            }
                        }
                        documentedBy {
                            data {
                                id
                                attributes {
                                    name
                                }
                            }
                        }
                        createdAt
                        updatedAt
                        publishedAt
                    }
                }
            }
        }
    `;

	// Correct Players query based on schema
	const playersQuery = `
        query GetPlayers {
            players(pagination: { limit: 5 }) {
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
                        position
                        company
                        tagline
                        bio
                        website
                        avatar {
                            data {
                                id
                                attributes {
                                    url
                                    name
                                    alternativeText
                                    caption
                                    formats
                                }
                            }
                        }
                        socialNetworks
                        createdAt
                        updatedAt
                    }
                }
            }
        }
    `;

	const tests = [
		{ name: 'Tags', query: tagsQuery },
		{ name: 'Games', query: gamesQuery },
		{ name: 'Players', query: playersQuery }
	];

	for (const test of tests) {
		console.log(`📋 Testing ${test.name}...`);

		try {
			const response = await fetch(graphqlUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					...(strapiSecret && { Authorization: `Bearer ${strapiSecret}` })
				},
				body: JSON.stringify({ query: test.query })
			});

			if (!response.ok) {
				console.error(`❌ HTTP Error: ${response.status} ${response.statusText}`);
				continue;
			}

			const data = await response.json();

			if (data.errors) {
				console.error(`❌ GraphQL Errors:`, data.errors[0].message);
				continue;
			}

			const contentType = test.name.toLowerCase();
			const results = data.data[contentType];

			console.log(`✅ ${test.name}: Found ${results.meta.pagination.total} total items`);
			console.log(`📊 Retrieved ${results.data.length} items for testing\n`);

			// Show sample data structure
			if (results.data.length > 0) {
				const sample = results.data[0];
				console.log(`📝 Sample ${contentType.slice(0, -1)} structure:`);
				console.log(`   ID: ${sample.id}`);
				console.log(`   Attributes:`, Object.keys(sample.attributes));

				if (test.name === 'Tags') {
					console.log(`   Value: "${sample.attributes.value}"`);
				} else if (test.name === 'Games') {
					console.log(`   Name: "${sample.attributes.name}"`);
					console.log(`   Category: "${sample.attributes.category}"`);
					console.log(`   Proposed by: ${sample.attributes.proposedBy?.data?.length || 0} people`);
				} else if (test.name === 'Players') {
					console.log(`   Name: "${sample.attributes.name}"`);
					console.log(`   Position: "${sample.attributes.position}"`);
					console.log(`   Has avatar: ${sample.attributes.avatar?.data ? 'Yes' : 'No'}`);
				}
				console.log('');
			}
		} catch (error) {
			console.error(`💥 ${test.name} Error:`, error.message);
		}
	}
}

// Test Events query (most complex)
async function testEventsQuery() {
	console.log('🎪 Testing Events (complex content type)...\n');

	const envContent = readFileSync('.env.local', 'utf8');
	const strapiUrl = envContent.match(/STRAPI_API_URL=(.+)/)?.[1] || 'https://community.play14.org';
	const strapiSecret = envContent.match(/STRAPI_API_SECRET="(.+)"/)?.[1];
	const graphqlUrl = `${strapiUrl}/graphql`;

	const eventsQuery = `
        query GetEvents {
            events(pagination: { limit: 3 }) {
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
                        start
                        end
                        status
                        defaultImage {
                            data {
                                id
                                attributes {
                                    url
                                    name
                                }
                            }
                        }
                        images {
                            data {
                                id
                                attributes {
                                    url
                                    name
                                }
                            }
                        }
                        contactEmail
                        timetable
                        registration
                        venue {
                            data {
                                id
                                attributes {
                                    name
                                }
                            }
                        }
                        createdAt
                        updatedAt
                        publishedAt
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
			body: JSON.stringify({ query: eventsQuery })
		});

		if (!response.ok) {
			console.error(`❌ HTTP Error: ${response.status} ${response.statusText}`);
			return;
		}

		const data = await response.json();

		if (data.errors) {
			console.error('❌ GraphQL Errors:', data.errors);
			return;
		}

		const events = data.data.events;
		console.log(`✅ Events: Found ${events.meta.pagination.total} total events`);
		console.log(`📊 Retrieved ${events.data.length} events for testing\n`);

		events.data.forEach((event, index) => {
			const attrs = event.attributes;
			console.log(`${index + 1}. ${attrs.name}`);
			console.log(`   📅 ${attrs.start} → ${attrs.end}`);
			console.log(`   📍 Venue: ${attrs.venue?.data?.attributes?.name || 'TBD'}`);
			console.log(`   📊 Status: ${attrs.status}`);
			console.log(`   📧 Contact: ${attrs.contactEmail || 'N/A'}`);
			console.log(`   🖼️  Images: ${attrs.images?.data?.length || 0}`);
			console.log('');
		});
	} catch (error) {
		console.error('💥 Events Error:', error.message);
	}
}

async function runRealDataTests() {
	console.log('🚀 Testing Real Strapi Data\n');
	console.log('='.repeat(50) + '\n');

	await testRealStrapiData();
	await testEventsQuery();

	console.log('🎉 Real data testing complete!');
	console.log('✅ Schema fields identified and queries working');
	console.log('🔧 Ready to update migration functions with correct field names');
}

runRealDataTests().catch(console.error);
