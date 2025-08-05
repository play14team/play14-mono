import { GraphQLClient } from 'graphql-request';
import { STRAPI_API_URL, STRAPI_API_SECRET } from '$env/static/private';

export const graphqlClient = new GraphQLClient(`${STRAPI_API_URL}/graphql`, {
  headers: {
    authorization: STRAPI_API_SECRET ? `Bearer ${STRAPI_API_SECRET}` : ''
  }
});
