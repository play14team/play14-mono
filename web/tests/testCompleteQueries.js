// Test complete queries with proper component field selections
import { readFileSync } from 'fs';

async function testCompleteQueries() {
	console.log('🔍 Testing complete queries with component selections...\n');

	const envContent = readFileSync('.env.local', 'utf8');
	const strapiUrl = envContent.match(/STRAPI_API_URL=(.+)/)?.[1] || 'https://community.play14.org';
	const strapiSecret = envContent.match(/STRAPI_API_SECRET="(.+)"/)?.[1];
	const graphqlUrl = `${strapiUrl}/graphql`;

	// Corrected Games query with component selections
	const gamesQuery = `
        query GetGames {
            games(pagination: { limit: 2 }) {
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
                        timebox {
                            minimum
                            maximum
                        }
                        scale {
                            minimum
                            maximum
                        }
                        summary
                        materials {
                            id
                            name
                            description
                        }
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

	// Corrected Players query with component selections
	const playersQuery = `
        query GetPlayers {
            players(pagination: { limit: 2 }) {
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
                        socialNetworks {
                            id
                            network
                            handle
                        }
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
                        createdAt
                        updatedAt
                    }
                }
            }
        }
    `;

	// Corrected Events query with component selections
	const eventsQuery = `
        query GetEvents {
            events(pagination: { limit: 2 }) {
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
                        contactEmail
                        timetable {
                            id
                            day
                            start
                            end
                            title
                            description
                        }
                        registration {
                            start
                            end
                            capacity
                            waitingListCapacity
                        }
                        venue {
                            data {
                                id
                                attributes {
                                    name
                                }
                            }
                        }
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
                        createdAt
                        updatedAt
                        publishedAt
                    }
                }
            }
        }
    `;

	const tests = [
		{ name: 'Games', query: gamesQuery },
		{ name: 'Players', query: playersQuery },
		{ name: 'Events', query: eventsQuery }
	];

	for (const test of tests) {
		console.log(`📋 Testing ${test.name} with components...`);

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
			console.log(`📊 Retrieved ${results.data.length} items`);

			// Show detailed sample data
			if (results.data.length > 0) {
				const sample = results.data[0];
				const attrs = sample.attributes;

				console.log(`\n📝 Sample ${test.name.slice(0, -1).toLowerCase()} data:`);
				console.log(`   ID: ${sample.id}`);

				if (test.name === 'Games') {
					console.log(`   Name: "${attrs.name}"`);
					console.log(`   Category: "${attrs.category}"`);
					console.log(`   Timebox: ${attrs.timebox?.minimum}-${attrs.timebox?.maximum} min`);
					console.log(`   Scale: ${attrs.scale?.minimum}-${attrs.scale?.maximum} people`);
					console.log(`   Materials: ${attrs.materials?.length || 0} items`);
					console.log(`   Proposed by: ${attrs.proposedBy?.data?.length || 0} people`);
					if (attrs.materials?.length > 0) {
						console.log(`   First material: "${attrs.materials[0].name}"`);
					}
				} else if (test.name === 'Players') {
					console.log(`   Name: "${attrs.name}"`);
					console.log(`   Position: "${attrs.position || 'N/A'}"`);
					console.log(`   Company: "${attrs.company || 'N/A'}"`);
					console.log(`   Social networks: ${attrs.socialNetworks?.length || 0}`);
					console.log(`   Has avatar: ${attrs.avatar?.data ? 'Yes' : 'No'}`);
					if (attrs.socialNetworks?.length > 0) {
						console.log(
							`   First network: ${attrs.socialNetworks[0].network} - ${attrs.socialNetworks[0].handle}`
						);
					}
				} else if (test.name === 'Events') {
					console.log(`   Name: "${attrs.name}"`);
					console.log(`   Date: ${attrs.start} → ${attrs.end}`);
					console.log(`   Status: "${attrs.status}"`);
					console.log(`   Venue: ${attrs.venue?.data?.attributes?.name || 'TBD'}`);
					console.log(`   Timetable entries: ${attrs.timetable?.length || 0}`);
					console.log(`   Images: ${attrs.images?.data?.length || 0}`);
					if (attrs.timetable?.length > 0) {
						console.log(
							`   First timetable: Day ${attrs.timetable[0].day} - ${attrs.timetable[0].title}`
						);
					}
				}
			}
		} catch (error) {
			console.error(`💥 ${test.name} Error:`, error.message);
		}

		console.log('\n' + '-'.repeat(50) + '\n');
	}
}

async function summarizeFindings() {
	console.log('📋 SUMMARY: Strapi Schema Analysis\n');
	console.log('✅ Working Content Types:');
	console.log('   - Tags: { value, createdAt, updatedAt }');
	console.log(
		'   - Games: { name, slug, category, timebox{min,max}, scale{min,max}, materials[], proposedBy[], documentedBy[], publishedAt }'
	);
	console.log(
		'   - Players: { name, slug, position, company, tagline, bio, website, socialNetworks[], avatar{} }'
	);
	console.log(
		'   - Events: { name, slug, start, end, status, contactEmail, timetable[], registration{}, venue{}, images[], publishedAt }'
	);

	console.log('\n🔧 Key Differences from Expected Schema:');
	console.log('   - Tags use "value" instead of "name"');
	console.log('   - Games have timebox/scale objects instead of simple timing/participants');
	console.log('   - Players have socialNetworks array instead of socialNetworks object');
	console.log('   - Events have timetable array instead of timetables');
	console.log('   - Complex fields require component subfield selection');

	console.log('\n✅ Ready for Migration:');
	console.log('   1. Update strapiMigrationQueries.ts with correct field names');
	console.log('   2. Update transformation logic in strapiMigration.ts');
	console.log('   3. Test migration with actual data');
}

async function run() {
	await testCompleteQueries();
	await summarizeFindings();
}

run().catch(console.error);
