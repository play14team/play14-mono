import { getUpcomingEvents } from '$lib/server/events';

export const load = (async () => {
  // Fetch upcoming events via Convex SSR helper
  let upcoming = [] as Awaited<ReturnType<typeof getUpcomingEvents>>;
  try {
    upcoming = await getUpcomingEvents();
  } catch (e) {
    console.error('Failed to load upcoming events', e);
  }
  return { upcoming };
}) satisfies import('./$types').PageServerLoad;

export const prerender = false; // dynamic data
