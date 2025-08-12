import { convexQuery } from '../convex/client';

// Shapes mirror existing Convex responses (partial)
export interface EventSummary {
  _id: string;
  name: string;
  slug: string;
  start: number;
  end: number;
  status: string;
  timezone?: string;
  location?: { name?: string; country?: string } | null;
}

export async function getUpcomingEvents() {
  const data = (await convexQuery('events:getUpcoming', { today: Date.now() })) as EventSummary[];
  return data;
}
