/** @type {import('houdini').ConfigFile} */
const config = {
  watchSchema: {
    url: 'https://community.play14.org/graphql'
  },
  plugins: {
    'houdini-svelte': {}
  },
  scalars: {
    DateTime: {
      type: 'string'
    }
  }
};

export default config;
