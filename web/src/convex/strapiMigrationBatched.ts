import { action } from './_generated/server';
import { v } from 'convex/values';

/**
 * Generic batched fetch for any Strapi content type
 * Handles pagination to ensure we get all records
 */
export const fetchStrapiDataBatched = action({
  args: {
    contentType: v.string(),
    pageSize: v.optional(v.number()), // Default to 100
    strapiUrl: v.optional(v.string()),
    strapiSecret: v.optional(v.string())
  },
  handler: async (ctx, args) => {
    const strapiUrl = args.strapiUrl || process.env.STRAPI_API_URL;
    const strapiSecret = args.strapiSecret || process.env.STRAPI_API_SECRET;
    const pageSize = args.pageSize || 100;

    if (!strapiUrl || !strapiSecret) {
      return {
        success: false,
        error: 'Strapi URL and secret must be configured',
        data: null,
        totalFetched: 0,
        totalPages: 0
      };
    }

    let allData: unknown[] = [];
    let currentPage = 1;
    let hasMore = true;
    let totalCount = 0;

    console.log(`🔄 Starting batched fetch for ${args.contentType}...`);

    while (hasMore) {
      // Build query based on content type
      const query = buildPaginatedQuery(args.contentType, currentPage, pageSize);

      try {
        const response = await fetch(`${strapiUrl}/graphql`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${strapiSecret}`
          },
          body: JSON.stringify({ query })
        });

        if (!response.ok) {
          return {
            success: false,
            error: `GraphQL request failed: ${response.status} ${response.statusText}`,
            data: null,
            totalFetched: allData.length,
            totalPages: currentPage - 1
          };
        }

        const result = await response.json();

        if (result.errors) {
          return {
            success: false,
            error: `GraphQL errors: ${JSON.stringify(result.errors)}`,
            data: null,
            totalFetched: allData.length,
            totalPages: currentPage - 1
          };
        }

        // Extract data based on content type
        const contentData = result.data[args.contentType];
        const pageData = contentData.data || [];
        const pagination = contentData.meta?.pagination;

        allData = allData.concat(pageData);

        if (pagination) {
          totalCount = pagination.total;
          hasMore = currentPage < pagination.pageCount;
          console.log(
            `📊 Fetched page ${currentPage}/${pagination.pageCount} (${pageData.length} items, total: ${allData.length}/${totalCount})`
          );
        } else {
          // No pagination info, assume this is the only page
          hasMore = false;
          console.log(`📊 Fetched ${pageData.length} items (no pagination info)`);
        }

        currentPage++;
      } catch (error) {
        console.error(`Error fetching page ${currentPage}:`, error);
        return {
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error',
          data: null,
          totalFetched: allData.length,
          totalPages: currentPage - 1
        };
      }
    }

    console.log(`✅ Successfully fetched all ${allData.length} ${args.contentType} records`);

    // Return in the expected format for migration
    return {
      success: true,
      data: {
        [args.contentType]: {
          data: allData,
          meta: {
            pagination: {
              total: totalCount || allData.length,
              pageCount: currentPage - 1,
              page: currentPage - 1,
              pageSize: pageSize
            }
          }
        }
      },
      totalFetched: allData.length,
      totalPages: currentPage - 1
    };
  }
});

// Helper function to build paginated queries
function buildPaginatedQuery(contentType: string, page: number, pageSize: number): string {
  // Base query structure for all content types
  const queryTemplates: Record<string, string> = {
    players: `
      query PlayersPaginated {
        players(
          sort: "name:asc"
          pagination: { page: PAGE_VALUE, pageSize: PAGESIZE_VALUE }
        ) {
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
              avatar {
                data {
                  id
                  attributes {
                    name
                    url
                    blurhash
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
              createdAt
              updatedAt
            }
          }
          meta {
            pagination {
              page
              pageSize
              total
              pageCount
            }
          }
        }
      }
    `,
    tags: `
      query TagsPaginated {
        tags(
          sort: "value:asc"
          pagination: { page: PAGE_VALUE, pageSize: PAGESIZE_VALUE }
        ) {
          data {
            id
            attributes {
              value
              createdAt
              updatedAt
            }
          }
          meta {
            pagination {
              page
              pageSize
              total
              pageCount
            }
          }
        }
      }
    `,
    expectations: `
      query ExpectationsPaginated {
        expectations(
          sort: "title:asc"
          pagination: { page: PAGE_VALUE, pageSize: PAGESIZE_VALUE }
        ) {
          data {
            id
            attributes {
              title
              description
              createdAt
              updatedAt
            }
          }
          meta {
            pagination {
              page
              pageSize
              total
              pageCount
            }
          }
        }
      }
    `,
    eventLocations: `
      query EventLocationsPaginated {
        eventLocations(
          sort: "name:asc"
          pagination: { page: PAGE_VALUE, pageSize: PAGESIZE_VALUE }
        ) {
          data {
            id
            attributes {
              name
              city
              country
              address
              zipCode
              location
              createdAt
              updatedAt
            }
          }
          meta {
            pagination {
              page
              pageSize
              total
              pageCount
            }
          }
        }
      }
    `,
    venues: `
      query VenuesPaginated {
        venues(
          sort: "name:asc"
          pagination: { page: PAGE_VALUE, pageSize: PAGESIZE_VALUE }
        ) {
          data {
            id
            attributes {
              name
              address
              city
              country
              zipCode
              location
              website
              contact
              phone
              description
              capacity
              createdAt
              updatedAt
            }
          }
          meta {
            pagination {
              page
              pageSize
              total
              pageCount
            }
          }
        }
      }
    `,
    games: `
      query GamesPaginated {
        games(
          sort: "name:asc"
          pagination: { page: PAGE_VALUE, pageSize: PAGESIZE_VALUE }
        ) {
          data {
            id
            attributes {
              slug
              name
              description
              timing
              participants
              categories
              tags {
                data {
                  id
                  attributes {
                    value
                  }
                }
              }
              documenters {
                data {
                  id
                  attributes {
                    name
                  }
                }
              }
              proposers {
                data {
                  id
                  attributes {
                    name
                  }
                }
              }
              createdAt
              updatedAt
            }
          }
          meta {
            pagination {
              page
              pageSize
              total
              pageCount
            }
          }
        }
      }
    `,
    sponsors: `
      query SponsorsPaginated {
        sponsors(
          sort: "name:asc"
          pagination: { page: PAGE_VALUE, pageSize: PAGESIZE_VALUE }
        ) {
          data {
            id
            attributes {
              name
              url
              logo {
                data {
                  id
                  attributes {
                    name
                    url
                    blurhash
                    width
                    height
                    hash
                    mime
                    provider
                    size
                  }
                }
              }
              description
              createdAt
              updatedAt
            }
          }
          meta {
            pagination {
              page
              pageSize
              total
              pageCount
            }
          }
        }
      }
    `
  };

  const template = queryTemplates[contentType];
  if (!template) {
    throw new Error(`No query template for content type: ${contentType}`);
  }

  // Replace placeholders with actual values
  return template.replace(/PAGE_VALUE/g, `${page}`).replace(/PAGESIZE_VALUE/g, `${pageSize}`);
}
