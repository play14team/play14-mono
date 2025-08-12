import { STRAPI_API_SECRET } from '$env/static/private';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
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

  const response = await resolve(event, {
    filterSerializedResponseHeaders: (name) => {
      // Allow content-type and other headers
      return name === 'content-type' || name === 'authorization' || name.startsWith('x-');
    },
    transformPageChunk: ({ html, done }) => {
      if (done) {
        // Add theme initialization script to prevent flash
        const themeScript = `
          <script>
            (function() {
              const theme = localStorage.getItem('theme');
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              const activeTheme = theme || (prefersDark ? 'dark' : 'light');
              if (activeTheme === 'dark') {
                document.documentElement.classList.add('dark');
              }
            })();
          </script>
        `;

        // Default to English, but in a real app you'd get this from cookies/headers
        return html.replace('%sveltekit.lang%', 'en').replace('</head>', themeScript + '</head>');
      }
    }
  });
  return response;
};
