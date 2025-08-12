// Convex client setup for SvelteKit (SSR + browser)
// Provides lazy-loaded generated API bindings and a simple fetch helper

import { browser } from '$app/environment';

// Helper to get public Convex URL from env
export function convexUrl() {
  const url = import.meta.env.VITE_PUBLIC_CONVEX_URL;
  if (!url) throw new Error('VITE_PUBLIC_CONVEX_URL missing');
  return url;
}

// Generic fetch wrapper (server) via Convex HTTP endpoint for simple SSR calls
// Example: await convexQuery('events:get', { slug })
export async function convexQuery<Name extends string, Args>(
  name: Name,
  args: Args
): Promise<unknown> {
  const url = `${convexUrl()}/api/${name}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(args)
  });
  if (!res.ok) {
    throw new Error(`Convex query failed: ${name} ${res.status}`);
  }
  return await res.json();
}

export const isBrowser = browser;
