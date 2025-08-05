import { HoudiniClient } from '$houdini';

export default new HoudiniClient({
  url: 'https://community.play14.org/graphql'
  // The authentication is handled server-side in hooks.server.ts
  // No need to add authorization headers on the client
});
