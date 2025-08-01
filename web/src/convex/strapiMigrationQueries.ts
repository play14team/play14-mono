/**
 * Comprehensive GraphQL queries for migrating all data from Strapi to Convex
 *
 * These queries combine the detailed field selections from details.graphql files
 * with high pagination limits to retrieve all records at once for migration purposes.
 *
 * Based on analysis of UI GraphQL queries in ui/src/graphql/
 */

// High pagination limit to retrieve all records at once
const MIGRATION_PAGINATION_LIMIT = 50000;

/**
 * EVENTS - Complete migration query
 * Combines all fields from EventDetails fragment with high pagination
 */
export const EVENTS_MIGRATION_QUERY = `
  query EventsMigration {
    events(
      sort: "start:desc"
      pagination: { limit: ${MIGRATION_PAGINATION_LIMIT} }
    ) {
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
          defaultImage {
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
          images(pagination: { limit: ${MIGRATION_PAGINATION_LIMIT} }) {
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
            timeslots(pagination: { limit: ${MIGRATION_PAGINATION_LIMIT} }) {
              id
              time
              description
            }
          }
          registration {
            link
            widgetCode
          }
          sponsorships(pagination: { limit: ${MIGRATION_PAGINATION_LIMIT} }) {
            id
            category
            sponsors {
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
                  socialNetworks {
                    id
                    type
                    url
                  }
                }
              }
            }
          }
          hosts(sort: "name", pagination: { limit: ${MIGRATION_PAGINATION_LIMIT} }) {
            data {
              id
              attributes {
                slug
                name
                position
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
              }
            }
          }
          mentors(sort: "name", pagination: { limit: ${MIGRATION_PAGINATION_LIMIT} }) {
            data {
              id
              attributes {
                slug
                name
                position
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
              }
            }
          }
          players(sort: "name", pagination: { limit: ${MIGRATION_PAGINATION_LIMIT} }) {
            data {
              id
              attributes {
                slug
                name
                position
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
              }
            }
          }
          media {
            id
            url
            type
          }
          publishedAt
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
`;

/**
 * GAMES - Complete migration query
 * Combines all fields from GameDetails fragment with high pagination
 */
export const GAMES_MIGRATION_QUERY = `
  query GamesMigration {
    games(
      sort: "name:asc"
      pagination: { limit: ${MIGRATION_PAGINATION_LIMIT} }
    ) {
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
          tags(pagination: { limit: ${MIGRATION_PAGINATION_LIMIT} }) {
            id
            value
          }
          materials(pagination: { limit: ${MIGRATION_PAGINATION_LIMIT} }) {
            id
            value
          }
          preparationSteps(pagination: { limit: ${MIGRATION_PAGINATION_LIMIT} }) {
            id
            value
          }
          safety(pagination: { limit: ${MIGRATION_PAGINATION_LIMIT} }) {
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
          images(pagination: { limit: ${MIGRATION_PAGINATION_LIMIT} }) {
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
          resources(pagination: { limit: ${MIGRATION_PAGINATION_LIMIT} }) {
            data {
              id
              attributes {
                name
                url
                hash
                mime
                provider
                size
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
              }
            }
          }
          proposedBy {
            data {
              id
              attributes {
                name
                slug
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
`;

/**
 * PLAYERS - Complete migration query
 * Combines all fields from PlayerDetails fragment with high pagination
 */
export const PLAYERS_MIGRATION_QUERY = `
  query PlayersMigration {
    players(
      sort: "name:asc"
      pagination: { limit: 10 }
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
`;

/**
 * ARTICLES - Complete migration query
 * Combines all fields from ArticleDetails fragment with high pagination
 */
export const ARTICLES_MIGRATION_QUERY = `
  query ArticlesMigration {
    articles(
      sort: "publishedAt:desc"
      pagination: { limit: ${MIGRATION_PAGINATION_LIMIT} }
    ) {
      data {
        id
        attributes {
          slug
          title
          category
          summary
          publishedAt
          updatedAt
          createdAt
          cannonical
          content
          tags(pagination: { limit: ${MIGRATION_PAGINATION_LIMIT} }) {
            data {
              id
              attributes {
                value
              }
            }
          }
          defaultImage {
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
          images(pagination: { limit: ${MIGRATION_PAGINATION_LIMIT} }) {
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
          author {
            data {
              id
              attributes {
                name
                slug
                position
                tagline
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
              }
            }
          }
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
`;

/**
 * TESTIMONIALS - Complete migration query
 */
export const TESTIMONIALS_MIGRATION_QUERY = `
  query TestimonialsMigration {
    testimonials(pagination: { limit: ${MIGRATION_PAGINATION_LIMIT} }) {
      data {
        id
        attributes {
          content
          url
          audio {
            data {
              id
              attributes {
                name
                url
                hash
                mime
                provider
                size
              }
            }
          }
          author {
            data {
              id
              attributes {
                name
                slug
                tagline
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
`;

/**
 * VENUES - Complete migration query
 * Note: Venues are embedded in events, but we also need them separately for relationships
 */
export const VENUES_MIGRATION_QUERY = `
  query VenuesMigration {
    venues(pagination: { limit: ${MIGRATION_PAGINATION_LIMIT} }) {
      data {
        id
        attributes {
          name
          website
          location
          addressDetails
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
`;

/**
 * EVENT LOCATIONS - Complete migration query
 * Note: Event locations are embedded in events, but we also need them separately for relationships
 */
export const EVENT_LOCATIONS_MIGRATION_QUERY = `
  query EventLocationsMigration {
    eventLocations(pagination: { limit: ${MIGRATION_PAGINATION_LIMIT} }) {
      data {
        id
        attributes {
          name
          country
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
`;

/**
 * SPONSORS - Complete migration query
 */
export const SPONSORS_MIGRATION_QUERY = `
  query SponsorsMigration {
    sponsors(pagination: { limit: ${MIGRATION_PAGINATION_LIMIT} }) {
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
          socialNetworks {
            id
            type
            url
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
`;

/**
 * TAGS - Complete migration query
 */
export const TAGS_MIGRATION_QUERY = `
  query TagsMigration {
    tags(pagination: { limit: ${MIGRATION_PAGINATION_LIMIT} }) {
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
`;

/**
 * HOME PAGE - Complete migration query
 */
export const HOME_MIGRATION_QUERY = `
  query HomeMigration {
    home {
      data {
        id
        attributes {
          images(pagination: { limit: ${MIGRATION_PAGINATION_LIMIT} }) {
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
                blurhash
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

/**
 * HISTORY - Complete migration query
 */
export const HISTORY_MIGRATION_QUERY = `
  query HistoryMigration {
    history {
      data {
        id
        attributes {
          founders
          keyMoments
          intro
          items(pagination: { limit: ${MIGRATION_PAGINATION_LIMIT} }) {
            id
            date
            dateFormat
            additionalText
            title
            description
            image {
              data {
                id
                attributes {
                  name
                  url
                  hash
                  mime
                  provider
                  size
                  blurhash
                  width
                  height
                }
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

/**
 * EXPECTATIONS - Complete migration query
 */
export const EXPECTATIONS_MIGRATION_QUERY = `
  query ExpectationsMigration {
    expectations(pagination: { limit: ${MIGRATION_PAGINATION_LIMIT} }) {
      data {
        id
        attributes {
          title
          type
          icon
          content
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
`;

/**
 * FORMAT - Complete migration query
 */
export const FORMAT_MIGRATION_QUERY = `
  query FormatMigration {
    format {
      data {
        id
        attributes {
          openspace
          lawOfTwoFeet
          butterfly
          bumblebee
          schedule
          createdAt
          updatedAt
        }
      }
    }
  }
`;

/**
 * HOSTING - Complete migration query
 */
export const HOSTING_MIGRATION_QUERY = `
  query HostingMigration {
    hosting {
      data {
        id
        attributes {
          content
          createdAt
          updatedAt
        }
      }
    }
  }
`;

/**
 * All migration queries in a single object for easy access
 */
export const MIGRATION_QUERIES = {
	events: EVENTS_MIGRATION_QUERY,
	games: GAMES_MIGRATION_QUERY,
	players: PLAYERS_MIGRATION_QUERY,
	articles: ARTICLES_MIGRATION_QUERY,
	testimonials: TESTIMONIALS_MIGRATION_QUERY,
	venues: VENUES_MIGRATION_QUERY,
	eventLocations: EVENT_LOCATIONS_MIGRATION_QUERY,
	sponsors: SPONSORS_MIGRATION_QUERY,
	tags: TAGS_MIGRATION_QUERY,
	home: HOME_MIGRATION_QUERY,
	history: HISTORY_MIGRATION_QUERY,
	expectations: EXPECTATIONS_MIGRATION_QUERY,
	format: FORMAT_MIGRATION_QUERY,
	hosting: HOSTING_MIGRATION_QUERY
} as const;

/**
 * Content types available for migration
 */
export type MigrationContentType = keyof typeof MIGRATION_QUERIES;

/**
 * Get the migration query for a specific content type
 */
export function getMigrationQuery(contentType: MigrationContentType): string {
	return MIGRATION_QUERIES[contentType];
}

/**
 * Get all content types available for migration
 */
export function getMigrationContentTypes(): MigrationContentType[] {
	return Object.keys(MIGRATION_QUERIES) as MigrationContentType[];
}
