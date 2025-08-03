import { HoudiniClient } from '$houdini';
import { browser } from '$app/environment';

export default new HoudiniClient({
  url: 'https://community.play14.org/graphql',
  fetchParams({ session }) {
    // Use the token from the session
    const token = session?.token || '';

    // Debug token
    if (browser) {
      console.log('Client-side session token available:', !!token);
      console.log('Session:', session);
    }

    return {
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    };
  }
});
