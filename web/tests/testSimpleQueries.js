// Test with minimal queries to identify working fields
import { readFileSync } from 'fs';

async function testMinimalQueries() {
  console.log('🔍 Testing minimal queries to identify working fields...\n');

  const envContent = readFileSync('.env.local', 'utf8');
  const strapiUrl = envContent.match(/STRAPI_API_URL=(.+)/)?.[1] || 'https://community.play14.org';
  const strapiSecret = envContent.match(/STRAPI_API_SECRET="(.+)"/)?.[1];
  const graphqlUrl = `${strapiUrl}/graphql`;

  // Start with minimal queries and build up
  const testQueries = [
    {
      name: 'Games - Basic',
      query: `query { games(pagination: { limit: 1 }) { data { id attributes { name createdAt updatedAt } } } }`
    },
    {
      name: 'Games - With slug',
      query: `query { games(pagination: { limit: 1 }) { data { id attributes { name slug createdAt updatedAt } } } }`
    },
    {
      name: 'Games - With category',
      query: `query { games(pagination: { limit: 1 }) { data { id attributes { name slug category createdAt updatedAt } } } }`
    },
    {
      name: 'Players - Basic',
      query: `query { players(pagination: { limit: 1 }) { data { id attributes { name createdAt updatedAt } } } }`
    },
    {
      name: 'Players - With slug',
      query: `query { players(pagination: { limit: 1 }) { data { id attributes { name slug createdAt updatedAt } } } }`
    },
    {
      name: 'Events - Basic',
      query: `query { events(pagination: { limit: 1 }) { data { id attributes { name start end createdAt updatedAt } } } }`
    },
    {
      name: 'Events - With publishedAt',
      query: `query { events(pagination: { limit: 1 }) { data { id attributes { name start end createdAt updatedAt publishedAt } } } }`
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
        console.log(`✅ ${test.name}: Working!`);

        // Show sample data
        const contentType = Object.keys(data.data)[0];
        const firstItem = data.data[contentType].data[0];
        if (firstItem) {
          console.log(
            `   Sample: ${JSON.stringify(firstItem.attributes, null, 2).substring(0, 200)}...`
          );
        }
      }
    } catch (error) {
      console.log(`💥 ${test.name}: ${error.message}`);
    }
    console.log('');
  }
}

async function testFieldDiscovery() {
  console.log('\n🔍 Testing field discovery for each content type...\n');

  const envContent = readFileSync('.env.local', 'utf8');
  const strapiUrl = envContent.match(/STRAPI_API_URL=(.+)/)?.[1] || 'https://community.play14.org';
  const strapiSecret = envContent.match(/STRAPI_API_SECRET="(.+)"/)?.[1];
  const graphqlUrl = `${strapiUrl}/graphql`;

  // Get actual data to see what fields exist
  const queries = [
    {
      name: 'Games',
      query: `query { games(pagination: { limit: 1 }) { data { id attributes { name slug category timebox scale summary materials firstPlayedAt proposedBy { data { id } } documentedBy { data { id } } createdAt updatedAt publishedAt } } } }`
    },
    {
      name: 'Players',
      query: `query { players(pagination: { limit: 1 }) { data { id attributes { name slug position company tagline bio website socialNetworks avatar { data { id attributes { url name } } } createdAt updatedAt } } } }`
    },
    {
      name: 'Events',
      query: `query { events(pagination: { limit: 1 }) { data { id attributes { name slug start end status contactEmail timetable registration venue { data { id } } defaultImage { data { id } } images { data { id } } createdAt updatedAt publishedAt } } } }`
    }
  ];

  for (const test of queries) {
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
        console.log(`❌ ${test.name} Error: ${data.errors[0].message}`);
        console.log(
          `   Location: line ${data.errors[0].locations?.[0]?.line}, column ${data.errors[0].locations?.[0]?.column}`
        );
      } else {
        console.log(`✅ ${test.name}: Success!`);
        const contentType = Object.keys(data.data)[0];
        const firstItem = data.data[contentType].data[0];
        if (firstItem) {
          console.log(`📝 Available fields:`, Object.keys(firstItem.attributes));

          // Show a sample of the data structure
          console.log(`📊 Sample data for ${test.name}:`);
          const attrs = firstItem.attributes;
          if (test.name === 'Games') {
            console.log(`   Name: "${attrs.name}"`);
            console.log(`   Category: "${attrs.category}"`);
            console.log(`   Timebox: ${JSON.stringify(attrs.timebox)}`);
            console.log(`   Scale: ${JSON.stringify(attrs.scale)}`);
          } else if (test.name === 'Players') {
            console.log(`   Name: "${attrs.name}"`);
            console.log(`   Position: "${attrs.position}"`);
            console.log(`   Company: "${attrs.company}"`);
            console.log(`   Has avatar: ${attrs.avatar?.data ? 'Yes' : 'No'}`);
          } else if (test.name === 'Events') {
            console.log(`   Name: "${attrs.name}"`);
            console.log(`   Start: "${attrs.start}"`);
            console.log(`   Status: "${attrs.status}"`);
            console.log(`   Has venue: ${attrs.venue?.data ? 'Yes' : 'No'}`);
          }
        }
      }
    } catch (error) {
      console.log(`💥 ${test.name}: ${error.message}`);
    }
    console.log('');
  }
}

async function run() {
  await testMinimalQueries();
  await testFieldDiscovery();
}

run().catch(console.error);
