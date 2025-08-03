import { STRAPI_API_SECRET } from '$env/static/private';

export async function handle({ event, resolve }) {
  // Add the API token to locals so it can be passed to the session
  event.locals.token = STRAPI_API_SECRET;

  // Intercept fetch requests to add authentication
  const originalFetch = event.fetch;

  event.fetch = async (input, init = {}) => {
    // Check if this is a request to our GraphQL endpoint
    if (typeof input === 'string' && input.includes('community.play14.org/graphql')) {
      // Add the authorization header
      init.headers = {
        ...init.headers,
        authorization: `Bearer ${STRAPI_API_SECRET}`
      };
    }

    return originalFetch(input, init);
  };

  const response = await resolve(event);
  return response;
}

export function getSession({ locals }) {
  // Pass the token to the client through the session
  return {
    token: locals.token
  };
}
