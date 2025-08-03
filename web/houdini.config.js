/** @type {import('houdini').ConfigFile} */
const config = {
  watchSchema: {
    url: 'https://community.play14.org/graphql'
  },
  plugins: {
    'houdini-svelte': {
      client: './src/client'
    }
  },
  scalars: {
    DateTime: {
      type: 'string'
    }
  },
  defaultCachePolicy: 'CacheAndNetwork'
};

export default config;
