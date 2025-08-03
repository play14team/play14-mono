import { HoudiniClient } from '$houdini';

export default new HoudiniClient({
  url: 'https://community.play14.org/graphql',
  fetchParams() {
    return {
      headers: {
        authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_SECRET || ''}`
      }
    };
  }
});
