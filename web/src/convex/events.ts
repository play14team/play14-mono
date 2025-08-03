import { query, mutation } from './_generated/server';
import { v } from 'convex/values';
import type { Id } from './_generated/dataModel';
import type { QueryCtx, MutationCtx } from './_generated/server';

// Query: Get single event by slug (matches GraphQL Event query)
export const get = query({
  args: { slug: v.string() },
  handler: async (ctx: QueryCtx, args: { slug: string }) => {
    const event = await ctx.db
      .query('events')
      .withIndex('by_slug', (q) => q.eq('slug', args.slug))
      .filter((q) => q.neq(q.field('publishedAt'), undefined))
      .unique();

    if (!event) {
      return null;
    }

    // Get related data to match GraphQL EventDetails fragment
    const [location, venue, hosts, mentors, attendees] = await Promise.all([
      event.locationId ? ctx.db.get(event.locationId) : null,
      event.venueId ? ctx.db.get(event.venueId) : null,
      getEventHosts(ctx, event._id),
      getEventMentors(ctx, event._id),
      getEventAttendees(ctx, event._id)
    ]);

    // Get sponsor details for sponsorships
    const sponsorshipsWithDetails = await Promise.all(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      event.sponsorships.map(async (sponsorship: any) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const sponsors = await Promise.all(sponsorship.sponsorIds.map((id: any) => ctx.db.get(id)));
        return {
          ...sponsorship,
          sponsors: sponsors.filter(Boolean)
        };
      })
    );

    return {
      ...event,
      location,
      venue,
      hosts,
      mentors,
      players: attendees, // GraphQL calls attendees "players"
      sponsorships: sponsorshipsWithDetails
    };
  }
});

// Query: List events with pagination and filtering (matches GraphQL Events query)
export const list = query({
  args: {
    page: v.number(),
    pageSize: v.number(),
    status: v.optional(v.string()),
    locationSlug: v.optional(v.string()),
    country: v.optional(v.string())
  },
  handler: async (
    ctx: QueryCtx,
    args: {
      page: number;
      pageSize: number;
      status?: string;
      locationSlug?: string;
      country?: string;
    }
  ) => {
    // Apply status filter and get all events
    const allEvents = args.status
      ? await ctx.db
          .query('events')
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .withIndex('by_status', (q: any) => q.eq('status', args.status))
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .filter((q: any) => q.neq(q.field('publishedAt'), undefined))
          .order('desc')
          .collect()
      : await ctx.db
          .query('events')
          .filter((q) => q.neq(q.field('publishedAt'), undefined))
          .order('desc')
          .collect();

    // Apply location/country filters (post-query since we need to join with locations)
    let filteredEvents = allEvents;
    if (args.locationSlug || args.country) {
      const eventsWithLocations = await Promise.all(
        allEvents.map(async (event) => {
          const location = event.locationId ? await ctx.db.get(event.locationId) : null;
          return { event, location };
        })
      );

      filteredEvents = eventsWithLocations
        .filter(({ location }) => {
          if (
            args.locationSlug &&
            (!location || !location.name.toLowerCase().includes(args.locationSlug.toLowerCase()))
          ) {
            return false;
          }
          if (
            args.country &&
            (!location || location.country.toLowerCase() !== args.country.toLowerCase())
          ) {
            return false;
          }
          return true;
        })
        .map(({ event }) => event);
    }

    // Apply pagination
    const total = filteredEvents.length;
    const offset = (args.page - 1) * args.pageSize;
    const paginatedEvents = filteredEvents.slice(offset, offset + args.pageSize);

    // Get location data for each event (for EventItem fragment)
    const eventsWithLocations = await Promise.all(
      paginatedEvents.map(async (event) => {
        const location = event.locationId ? await ctx.db.get(event.locationId) : null;
        return {
          ...event,
          location
        };
      })
    );

    return {
      data: eventsWithLocations,
      meta: {
        pagination: {
          page: args.page,
          pageSize: args.pageSize,
          total,
          pageCount: Math.ceil(total / args.pageSize)
        }
      }
    };
  }
});

// Query: Get upcoming events (matches GraphQL UpcomingEvents query)
export const getUpcoming = query({
  args: { today: v.optional(v.number()) },
  handler: async (ctx: QueryCtx, args: { today?: number }) => {
    const today = args.today || Date.now();

    const upcomingEvents = await ctx.db
      .query('events')
      .withIndex('by_start')
      .filter((q) => q.and(q.gte(q.field('end'), today), q.neq(q.field('publishedAt'), undefined)))
      .order('asc')
      .collect();

    // Get location data for each event
    const eventsWithLocations = await Promise.all(
      upcomingEvents.map(async (event) => {
        const location = event.locationId ? await ctx.db.get(event.locationId) : null;
        return {
          ...event,
          location
        };
      })
    );

    return eventsWithLocations;
  }
});

// Query: Get events for map markers (matches GraphQL Markers query)
export const getMarkers = query({
  args: {},
  handler: async (ctx: QueryCtx) => {
    const events = await ctx.db
      .query('events')
      .filter((q) =>
        q.and(
          q.neq(q.field('status'), 'Cancelled'),
          q.neq(q.field('publishedAt'), undefined),
          q.neq(q.field('venueId'), undefined)
        )
      )
      .collect();

    // Get venue data for events that have venues with locations
    const eventsWithVenues = await Promise.all(
      events.map(async (event) => {
        const venue = event.venueId ? await ctx.db.get(event.venueId) : null;

        // Only include events with venues that have location data
        if (!venue || !venue.location) {
          return null;
        }

        return {
          ...event,
          venue
        };
      })
    );

    return eventsWithVenues.filter(Boolean);
  }
});

// Mutation: Create new event
export const create = mutation({
  args: {
    name: v.string(),
    slug: v.string(),
    start: v.number(),
    end: v.number(),
    timezone: v.string(),
    status: v.union(
      v.literal('Announced'),
      v.literal('Open'),
      v.literal('Over'),
      v.literal('Cancelled')
    ),
    description: v.string(),
    contactEmail: v.string(),
    tagline: v.optional(v.string()),
    locationId: v.optional(v.id('eventLocations')),
    venueId: v.optional(v.id('venues')),
    publishedAt: v.optional(v.number())
  },
  handler: async (
    ctx: MutationCtx,
    args: {
      name: string;
      slug: string;
      start: number;
      end: number;
      timezone: string;
      status: 'Announced' | 'Open' | 'Over' | 'Cancelled';
      description: string;
      contactEmail: string;
      tagline?: string;
      locationId?: Id<'eventLocations'>;
      venueId?: Id<'venues'>;
      publishedAt?: number;
    }
  ) => {
    const eventId = await ctx.db.insert('events', {
      ...args,
      imageIds: [],
      timetable: [],
      sponsorships: [],
      media: [],
      updatedAt: Date.now()
    });

    return eventId;
  }
});

// Mutation: Update event
export const update = mutation({
  args: {
    id: v.id('events'),
    name: v.optional(v.string()),
    slug: v.optional(v.string()),
    start: v.optional(v.number()),
    end: v.optional(v.number()),
    timezone: v.optional(v.string()),
    status: v.optional(
      v.union(v.literal('Announced'), v.literal('Open'), v.literal('Over'), v.literal('Cancelled'))
    ),
    description: v.optional(v.string()),
    contactEmail: v.optional(v.string()),
    tagline: v.optional(v.string()),
    locationId: v.optional(v.id('eventLocations')),
    venueId: v.optional(v.id('venues')),
    publishedAt: v.optional(v.number())
  },
  handler: async (
    ctx: MutationCtx,
    args: {
      id: Id<'events'>;
      name?: string;
      slug?: string;
      start?: number;
      end?: number;
      timezone?: string;
      status?: 'Announced' | 'Open' | 'Over' | 'Cancelled';
      description?: string;
      contactEmail?: string;
      tagline?: string;
      locationId?: Id<'eventLocations'>;
      venueId?: Id<'venues'>;
      publishedAt?: number;
    }
  ) => {
    const { id, ...updates } = args;

    await ctx.db.patch(id, {
      ...updates,
      updatedAt: Date.now()
    });

    return id;
  }
});

// Mutation: Delete event
export const remove = mutation({
  args: { id: v.id('events') },
  handler: async (ctx: MutationCtx, args: { id: Id<'events'> }) => {
    // Remove related relationships
    const [hosts, mentors, attendees] = await Promise.all([
      ctx.db
        .query('eventHosts')
        .withIndex('by_event', (q) => q.eq('eventId', args.id))
        .collect(),
      ctx.db
        .query('eventMentors')
        .withIndex('by_event', (q) => q.eq('eventId', args.id))
        .collect(),
      ctx.db
        .query('eventAttendees')
        .withIndex('by_event', (q) => q.eq('eventId', args.id))
        .collect()
    ]);

    // Delete all relationships
    await Promise.all([
      ...hosts.map((h) => ctx.db.delete(h._id)),
      ...mentors.map((m) => ctx.db.delete(m._id)),
      ...attendees.map((a) => ctx.db.delete(a._id))
    ]);

    // Delete the event
    await ctx.db.delete(args.id);
    return args.id;
  }
});

// Mutation: Add host to event
export const addHost = mutation({
  args: {
    eventId: v.id('events'),
    playerId: v.id('players')
  },
  handler: async (
    ctx: MutationCtx,
    args: {
      eventId: Id<'events'>;
      playerId: Id<'players'>;
    }
  ) => {
    // Check if relationship already exists
    const existing = await ctx.db
      .query('eventHosts')
      .withIndex('by_event', (q) => q.eq('eventId', args.eventId))
      .filter((q) => q.eq(q.field('playerId'), args.playerId))
      .unique();

    if (existing) {
      return existing._id;
    }

    return await ctx.db.insert('eventHosts', args);
  }
});

// Mutation: Remove host from event
export const removeHost = mutation({
  args: {
    eventId: v.id('events'),
    playerId: v.id('players')
  },
  handler: async (
    ctx: MutationCtx,
    args: {
      eventId: Id<'events'>;
      playerId: Id<'players'>;
    }
  ) => {
    const relationship = await ctx.db
      .query('eventHosts')
      .withIndex('by_event', (q) => q.eq('eventId', args.eventId))
      .filter((q) => q.eq(q.field('playerId'), args.playerId))
      .unique();

    if (relationship) {
      await ctx.db.delete(relationship._id);
    }

    return args.eventId;
  }
});

// Helper functions
async function getEventHosts(ctx: QueryCtx, eventId: Id<'events'>) {
  const hostRelations = await ctx.db
    .query('eventHosts')
    .withIndex('by_event', (q) => q.eq('eventId', eventId))
    .collect();

  const hosts = await Promise.all(hostRelations.map((rel) => ctx.db.get(rel.playerId)));

  return hosts.filter(Boolean);
}

async function getEventMentors(ctx: QueryCtx, eventId: Id<'events'>) {
  const mentorRelations = await ctx.db
    .query('eventMentors')
    .withIndex('by_event', (q) => q.eq('eventId', eventId))
    .collect();

  const mentors = await Promise.all(mentorRelations.map((rel) => ctx.db.get(rel.playerId)));

  return mentors.filter(Boolean);
}

async function getEventAttendees(ctx: QueryCtx, eventId: Id<'events'>) {
  const attendeeRelations = await ctx.db
    .query('eventAttendees')
    .withIndex('by_event', (q) => q.eq('eventId', eventId))
    .collect();

  const attendees = await Promise.all(attendeeRelations.map((rel) => ctx.db.get(rel.playerId)));

  return attendees.filter(Boolean);
}
