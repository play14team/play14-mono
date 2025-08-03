// Quick test script to check Strapi connection
import fetch from 'node:fetch';

async function testStrapiConnection() {
	const strapiUrl = 'https://community.play14.org';
	const graphqlUrl = `${strapiUrl}/graphql`;

	// Simple GraphQL query to test connection
	const query = `
        query TestConnection {
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
                    }
                }
            }
        }
    `;

	try {
		console.log('Testing Strapi GraphQL connection...');
		console.log('URL:', graphqlUrl);

		const response = await fetch(graphqlUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				query: query
			})
		});

		console.log('Response status:', response.status);
		console.log('Response headers:', Object.fromEntries(response.headers.entries()));

		if (!response.ok) {
			const errorText = await response.text();
			console.error('Error response:', errorText);
			return;
		}

		const data = await response.json();
		console.log('Success! Response data:');
		console.log(JSON.stringify(data, null, 2));

		if (data.data && data.data.tags) {
			console.log(`\nFound ${data.data.tags.meta.pagination.total} tags total`);
			console.log('Sample tags:');
			data.data.tags.data.forEach((tag) => {
				console.log(`  - ${tag.attributes.name} (${tag.attributes.slug})`);
			});
		}
	} catch (error) {
		console.error('Connection failed:', error.message);
	}
}

testStrapiConnection();
