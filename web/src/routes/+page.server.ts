import { graphqlClient } from '$lib/graphql';
import { gql } from 'graphql-request';
import type { PageServerLoad } from './$types';

// Query for events and articles
const HOME_QUERY = gql`
  query HomePage {
    events(pagination: { limit: 3 }, sort: "start:desc") {
      data {
        id
        attributes {
          name
          slug
          start
          end
          description
          status
          location {
            data {
              id
              attributes {
                name
                country
              }
            }
          }
          defaultImage {
            data {
              id
              attributes {
                url
                alternativeText
              }
            }
          }
        }
      }
    }
    articles(pagination: { limit: 3 }, sort: "publishedAt:desc") {
      data {
        id
        attributes {
          title
          slug
          summary
          publishedAt
          category
          defaultImage {
            data {
              id
              attributes {
                url
                alternativeText
              }
            }
          }
        }
      }
    }
  }
`;

// Define proper types for the GraphQL response
interface EventAttributes {
  name: string;
  slug: string;
  start: string;
  end?: string;
  description?: string;
  status?: string;
  location?: {
    data?: {
      id: string;
      attributes?: {
        name: string;
        country: string;
      };
    };
  };
  defaultImage?: {
    data?: {
      id: string;
      attributes?: {
        url: string;
        alternativeText?: string;
      };
    };
  };
}

interface ArticleAttributes {
  title: string;
  slug: string;
  summary?: string;
  publishedAt: string;
  category?: string;
  defaultImage?: {
    data?: {
      id: string;
      attributes?: {
        url: string;
        alternativeText?: string;
      };
    };
  };
}

interface GraphQLResponse {
  events: {
    data: Array<{
      id: string;
      attributes?: EventAttributes;
    }>;
  };
  articles: {
    data: Array<{
      id: string;
      attributes?: ArticleAttributes;
    }>;
  };
}

export const load: PageServerLoad = async () => {
  try {
    const data = await graphqlClient.request<GraphQLResponse>(HOME_QUERY);
    return {
      events: data.events,
      articles: data.articles
    };
  } catch (error: unknown) {
    console.error('GraphQL Error:', error);
    let errorMessage = 'Failed to fetch data';

    // Try to get the actual error response body
    if (error && typeof error === 'object' && 'response' in error) {
      const err = error as { response?: { errors?: unknown; error?: unknown } };
      if (err.response && err.response.errors) {
        errorMessage = JSON.stringify(err.response.errors, null, 2);
      } else if (err.response && err.response.error) {
        errorMessage = JSON.stringify(err.response.error, null, 2);
      } else if (err.response) {
        errorMessage = JSON.stringify(err.response, null, 2);
      }
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }

    return {
      events: { data: [] },
      articles: { data: [] },
      error: errorMessage
    };
  }
};
