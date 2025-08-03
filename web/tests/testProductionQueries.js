// Test the migration queries based on production schema
import { readFileSync } from 'fs';

async function testProductionBasedQueries() {
	console.log('🔍 Testing migration queries based on production schema...\n');

	const envContent = readFileSync('.env.local', 'utf8');
	const strapiUrl = envContent.match(/STRAPI_API_URL=(.+)/)?.[1] || 'https://community.play14.org';
	const strapiSecret = envContent.match(/STRAPI_API_SECRET="(.+)"/)?.[1];
	const graphqlUrl = `${strapiUrl}/graphql`;

	// Correct tags query (tags use 'value' not 'name')
	const tagsQuery = `
        query TagsMigration {
            tags(pagination: { limit: 50000 }) {
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

	// Correct games query based on production schema
	const gamesQuery = `
        query GamesMigration {
            games(pagination: { limit: 50000 }) {
                meta {
                    pagination {
                        total
                    }
                }
                data {
                    id
                    attributes {
                        slug
                        name
                        category
                        scale
                        timebox
                        summary
                        credits
                        description
                        publishedAt
                        createdAt
                        updatedAt
                        tags(pagination: { limit: 10000 }) {
                            id
                            value
                        }
                        materials(pagination: { limit: 10000 }) {
                            id
                            value
                        }
                        preparationSteps(pagination: { limit: 10000 }) {
                            id
                            value
                        }
                        safety(pagination: { limit: 10000 }) {
                            id
                            key
                            value
                        }
                        defaultImage {
                            data {
                                id
                                attributes {
                                    name
                                    url
                                    width
                                    height
                                    hash
                                    mime
                                    provider
                                    size
                                }
                            }
                        }
                        images(pagination: { limit: 10000 }) {
                            data {
                                id
                                attributes {
                                    name
                                    url
                                    width
                                    height
                                }
                            }
                        }
                        resources(pagination: { limit: 10000 }) {
                            data {
                                id
                                attributes {
                                    name
                                    url
                                }
                            }
                        }
                        firstPlayedAt {
                            data {
                                id
                                attributes {
                                    name
                                    slug
                                }
                            }
                        }
                        documentedBy {
                            data {
                                id
                                attributes {
                                    name
                                    slug
                                }
                            }
                        }
                        proposedBy {
                            data {
                                id
                                attributes {
                                    name
                                    slug
                                }
                            }
                        }
                        ratings {
                            energy
                            connection
                            silliness
                        }
                    }
                }
            }
        }
    `;

	// Correct players query based on production schema
	const playersQuery = `
        query PlayersMigration {
            players(pagination: { limit: 50000 }) {
                meta {
                    pagination {
                        total
                    }
                }
                data {
                    id
                    attributes {
                        slug
                        name
                        position
                        company
                        tagline
                        bio
                        website
                        location
                        createdAt
                        updatedAt
                        avatar {
                            data {
                                id
                                attributes {
                                    name
                                    url
                                    width
                                    height
                                    hash
                                    mime
                                    provider
                                    size
                                }
                            }
                        }
                        socialNetworks {
                            id
                            url
                            type
                        }
                    }
                }
            }
        }
    `;

	// Correct events query based on production schema
	const eventsQuery = `
        query EventsMigration {
            events(pagination: { limit: 50000 }) {
                meta {
                    pagination {
                        total
                    }
                }
                data {
                    id
                    attributes {
                        slug
                        name
                        start
                        end
                        timezone
                        status
                        description
                        contactEmail
                        createdAt
                        updatedAt
                        publishedAt
                        defaultImage {
                            data {
                                id
                                attributes {
                                    name
                                    url
                                    width
                                    height
                                    hash
                                    mime
                                    provider
                                    size
                                }
                            }
                        }
                        images(pagination: { limit: 10000 }) {
                            data {
                                id
                                attributes {
                                    name
                                    url
                                    width
                                    height
                                }
                            }
                        }
                        location {
                            data {
                                id
                                attributes {
                                    name
                                    country
                                    location
                                }
                            }
                        }
                        venue {
                            data {
                                id
                                attributes {
                                    name
                                    website
                                    location
                                    addressDetails
                                }
                            }
                        }
                        timetable {
                            id
                            day
                            description
                            timeslots(pagination: { limit: 10000 }) {
                                id
                                time
                                description
                            }
                        }
                        registration {
                            link
                            widgetCode
                        }
                        sponsorships(pagination: { limit: 10000 }) {
                            id
                            category
                            sponsors {
                                data {
                                    id
                                    attributes {
                                        name
                                        url
                                    }
                                }
                            }
                        }
                        hosts(sort: "name", pagination: { limit: 10000 }) {
                            data {
                                id
                                attributes {
                                    name
                                    slug
                                }
                            }
                        }
                        mentors(sort: "name", pagination: { limit: 10000 }) {
                            data {
                                id
                                attributes {
                                    name
                                    slug
                                }
                            }
                        }
                        players(sort: "name", pagination: { limit: 10000 }) {
                            data {
                                id
                                attributes {
                                    name
                                    slug
                                }
                            }
                        }
                        media {
                            id
                            url
                            type
                        }
                    }
                }
            }
        }
    `;

	const tests = [
		{ name: 'Tags', query: tagsQuery },
		{ name: 'Games', query: gamesQuery },
		{ name: 'Players', query: playersQuery },
		{ name: 'Events', query: eventsQuery }
	];

	for (const test of tests) {
		console.log(`📋 Testing ${test.name} migration query...`);

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
				console.error(`❌ GraphQL Error: ${data.errors[0].message}`);
				if (data.errors[0].locations) {
					console.error(
						`   Location: line ${data.errors[0].locations[0].line}, column ${data.errors[0].locations[0].column}`
					);
				}
				continue;
			}

			const contentType = test.name.toLowerCase();
			const results = data.data[contentType];

			console.log(`✅ ${test.name}: Found ${results.meta.pagination.total} total items`);
			console.log(`📊 Retrieved ${results.data.length} items for migration`);

			// Show sample data structure to verify completeness
			if (results.data.length > 0) {
				const sample = results.data[0];
				console.log(
					`📝 Sample ${test.name.slice(0, -1).toLowerCase()} fields:`,
					Object.keys(sample.attributes)
				);

				// Check for key migration fields
				const attrs = sample.attributes;
				if (test.name === 'Tags') {
					console.log(`   ✓ Has value: ${attrs.value ? 'Yes' : 'No'}`);
				} else if (test.name === 'Games') {
					console.log(`   ✓ Has materials: ${attrs.materials?.length || 0} items`);
					console.log(`   ✓ Has ratings: ${attrs.ratings ? 'Yes' : 'No'}`);
					console.log(
						`   ✓ Has relationships: proposedBy(${attrs.proposedBy?.data?.length || 0}), documentedBy(${attrs.documentedBy?.data?.length || 0})`
					);
				} else if (test.name === 'Players') {
					console.log(`   ✓ Has socialNetworks: ${attrs.socialNetworks?.length || 0} items`);
					console.log(`   ✓ Has avatar: ${attrs.avatar?.data ? 'Yes' : 'No'}`);
					console.log(`   ✓ Has location: ${attrs.location ? 'Yes' : 'No'}`);
				} else if (test.name === 'Events') {
					console.log(`   ✓ Has timetable: ${attrs.timetable?.length || 0} items`);
					console.log(`   ✓ Has registration: ${attrs.registration ? 'Yes' : 'No'}`);
					console.log(
						`   ✓ Has relationships: hosts(${attrs.hosts?.data?.length || 0}), players(${attrs.players?.data?.length || 0})`
					);
				}
			}
		} catch (error) {
			console.error(`💥 ${test.name} Error:`, error.message);
		}

		console.log('\n' + '-'.repeat(50) + '\n');
	}
}

async function run() {
	console.log('🚀 Testing Production-Based Migration Queries\n');
	console.log('='.repeat(60) + '\n');

	await testProductionBasedQueries();

	console.log('🎉 Production migration query testing complete!');
	console.log('✅ These queries should work for actual migration');
}

run().catch(console.error);
