- [x] Analyze dependencies and define order
- [x] Include single content types
- [x] Include components
- [x] Make sure you include all the relationships in your analysis
- [x] analyse all the data type and create a strategy for custom types. Among the custom types, the location fields are storing mapbox json
- [x] example of GeoJSON + double storage
- [x] Upsert strategy (keep the strapi ID) to be able to replay the migration
- [x] review the Convex schema to make sure it matches this analysis
- [x] Find a solution to import images from Strapi to Convex using Convex File Storage upload as explained in this doc https://docs.convex.dev/file-storage/upload-files. Test the solution and make sure you can download an image from Strapi and upload it to Convex
      Here is a graphql query you can use for the test
      query Player($slug: String!) {
      players(filters: { slug: { eq: $slug } }) {
      data {
      attributes {
      slug
      name
      avatar {
      data {
      id
      attributes {
      name
      url
      blurhash
      width
      height
      }
      }
      }
      }
      }
      }
      }
      Use the avatar URL to download the file.
      The Srapi URL and secret are available in .env.local as STRAPI_API_URL and STRAPI_API_SECRET. To reach the graphql endpoint, you just need to append /graphql to the base URL.
- Analyze the graphql queries in ui/src/graphql and define queries that will be used to retrieve all data against the Strapi GraphQL endpoint
- implement the migration code one by one
