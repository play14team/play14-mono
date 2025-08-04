/** @type {import('houdini').ConfigFile} */
const config = {
  watchSchema: {
    url: 'https://community.play14.org/graphql',
    pullTimeout: 60000 // Increase timeout to 60 seconds
  },
  plugins: {
    'houdini-svelte': {
      client: './src/client'
    }
  },
  scalars: {
    DateTime: {
      type: 'string'
    },
    I18NLocaleCode: {
      type: 'string' // Represents locale codes like 'en', 'fr', 'en-US', etc.
    }
  },
  defaultCachePolicy: 'CacheAndNetwork'
};

export default config;
