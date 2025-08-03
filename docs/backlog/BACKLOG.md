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
      `graphql
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
    `
      Use the avatar URL to download the file.
      The Srapi URL and secret are available in .env.local as STRAPI_API_URL and STRAPI_API_SECRET. To reach the graphql endpoint, you just need to append /graphql to the base URL.
- [x] Analyze the graphql queries in ui/src/graphql and define queries that will be used to retrieve all data against the Strapi GraphQL endpoint. The ones called details.graphql usually return almost all the fields, but only one record. Whereas the ones called grid return many recoreds but not all the fields, and with filters. Be mindful of pagination that will limit the number of records returned. You can set it to a high number to return everything at once
- [x] implement the migration code one by one
- [] run the complete migration

8/3/2025, 2:17:41 AM [CONVEX M(strapiMigration:insertPlayer)] ArgumentValidationError: Value does not match validator.
Path: .socialNetworks[1].url
Value: null
Validator: v.string()

8/3/2025, 2:18:14 AM [CONVEX M(clearData:clearAllData)] ArgumentValidationError: Object is missing the required field `confirmDelete`. Consider wrapping the field validator in `v.optional(...)` if this is expected.

Object: {}
Validator: v.object({confirmDelete: v.literal("DELETE_ALL_DATA")})

8/3/2025, 2:19:03 AM [CONVEX M(strapiMigration:insertPlayer)] ArgumentValidationError: Value does not match validator.
Path: .socialNetworks[1].url
Value: null
Validator: v.string()

8/3/2025, 2:19:25 AM [CONVEX M(strapiMigration:insertPlayer)] ArgumentValidationError: Value does not match validator.
Path: .socialNetworks[1].url
Value: null
Validator: v.string()

8/3/2025, 2:20:40 AM [CONVEX A(strapiMigration:runCompleteMigration)] [ERROR] '❌ games migration failed:' 'Failed to fetch games: GraphQL errors: [{"message":"Cannot return null for non-nullable field Game.category.","locations":[{"line":13,"column":11}],"path":["games","data",46,"attributes","category"],"extensions":{"code":"INTERNAL_SERVER_ERROR"}},{"message":"Cannot return null for non-nullable field Game.category.","locations":[{"line":13,"column":11}],"path":["games","data",66,"attributes","category"],"extensions":{"code":"INTERNAL_SERVER_ERROR"}},{"message":"Cannot return null for non-nullable field Game.category.","locations":[{"line":13,"column":11}],"path":["games","data",85,"attributes","category"],"extensions":{"code":"INTERNAL_SERVER_ERROR"}},{"message":"Cannot return null for non-nullable field Game.category.","locations":[{"line":13,"column":11}],"path":["games","data",107,"attributes","category"],"extensions":{"code":"INTERNAL_SERVER_ERROR"}},{"message":"Cannot return null for non-nullable field ComponentSharedList.value.","locations":[{"line":24,"column":13}],"path":["games","data",11,"attributes","tags",5,"value"],"extensions":{"code":"INTERNAL_SERVER_ERROR"}}]'

8/3/2025, 2:34:47 AM [CONVEX M(strapiMigration:insertGame)] ArgumentValidationError: Value does not match validator.
Path: .summary
Value: null
Validator: v.string()

8/3/2025, 2:34:49 AM [CONVEX M(strapiMigration:insertGame)] ArgumentValidationError: Value does not match validator.
Path: .timebox
Value: null
Validator: v.string()

- [ ] Do not remove fields without asking

- [ ] File cleanup solution
  - [ ] Database + file system reset ?
  - [ ] Remove one by one any file that is not linked to a record
  - [ ] Reset the whole convex project
    - [ ] Beware of environment variables
