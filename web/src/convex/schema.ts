import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  // Migration tracking tables
  idMappings: defineTable({
    strapiType: v.string(), // 'event', 'player', 'game', etc.
    strapiId: v.string(),
    convexId: v.string() // Store as string since v.id('any') isn't valid
  }).index('by_strapi', ['strapiType', 'strapiId']),

  migrationStatus: defineTable({
    phase: v.string(),
    status: v.union(
      v.literal('pending'),
      v.literal('in_progress'),
      v.literal('completed'),
      v.literal('failed')
    ),
    totalItems: v.optional(v.number()),
    processedItems: v.optional(v.number()),
    lastProcessedId: v.optional(v.string()),
    error: v.optional(v.string()),
    startedAt: v.optional(v.number()),
    completedAt: v.optional(v.number())
  }).index('by_phase', ['phase']),

  // Core content tables
  events: defineTable({
    strapiId: v.optional(v.union(v.string(), v.number())), // Preserved from Strapi
    name: v.string(),
    slug: v.string(),
    start: v.number(), // timestamp
    end: v.number(), // timestamp
    timezone: v.string(), // IANA timezone
    status: v.union(
      v.literal('Announced'),
      v.literal('Open'),
      v.literal('Over'),
      v.literal('Cancelled')
    ),
    description: v.optional(v.string()), // rich text as HTML
    contactEmail: v.string(),
    tagline: v.optional(v.string()),
    defaultImageId: v.optional(v.id('_storage')),
    imageIds: v.array(v.id('_storage')), // for galleries
    locationId: v.optional(v.id('eventLocations')),
    venueId: v.optional(v.id('venues')),
    publishedAt: v.optional(v.number()),
    updatedAt: v.number(),
    // Components as embedded objects
    timetable: v.array(
      v.object({
        id: v.string(), // Strapi component ID
        day: v.union(
          v.literal('Monday'),
          v.literal('Tuesday'),
          v.literal('Wednesday'),
          v.literal('Thursday'),
          v.literal('Friday'),
          v.literal('Saturday'),
          v.literal('Sunday')
        ),
        description: v.string(),
        timeslots: v.array(
          v.object({
            id: v.string(), // Strapi component ID
            time: v.string(), // HH:MM format
            description: v.string()
          })
        )
      })
    ),
    registration: v.optional(
      v.object({
        link: v.optional(v.string()),
        widgetCode: v.optional(v.string())
      })
    ),
    sponsorships: v.array(
      v.object({
        category: v.string(),
        sponsorIds: v.array(v.id('sponsors'))
      })
    ),
    media: v.array(
      v.object({
        id: v.string(), // Strapi component ID
        url: v.string(),
        type: v.union(v.literal('Photos'), v.literal('Videos'))
      })
    ),
    finance: v.optional(
      v.object({
        revenue: v.number(),
        expenses: v.number(),
        destination: v.string(),
        result: v.union(v.literal('Profit'), v.literal('Loss')),
        resultAmount: v.number()
      })
    )
  })
    .index('by_strapi_id', ['strapiId'])
    .index('by_slug', ['slug'])
    .index('by_status', ['status'])
    .index('by_start', ['start'])
    .index('by_location', ['locationId'])
    .index('by_published', ['publishedAt']),

  games: defineTable({
    strapiId: v.optional(v.union(v.string(), v.number())), // Preserved from Strapi
    name: v.string(),
    slug: v.string(),
    category: v.union(
      v.literal('Game'),
      v.literal('IceBreaker'),
      v.literal('WarmUp'),
      v.literal('Facilitation'),
      v.literal('Retrospective'),
      v.literal('CoolDown')
    ),
    scale: v.optional(v.string()),
    timebox: v.string(),
    summary: v.string(),
    description: v.string(), // rich text as HTML
    credits: v.optional(v.string()),
    defaultImageId: v.optional(v.id('_storage')),
    imageIds: v.array(v.id('_storage')),
    resourceIds: v.array(v.id('_storage')), // files, videos, audio
    firstPlayedAtEventId: v.optional(v.id('events')),
    publishedAt: v.optional(v.number()),
    updatedAt: v.number(),
    // Components as embedded objects
    materials: v.array(v.object({ value: v.string() })),
    preparationSteps: v.array(v.object({ value: v.string() })),
    safety: v.array(
      v.object({
        key: v.string(),
        value: v.string()
      })
    ),
    tags: v.array(v.object({ value: v.string() })),
    ratings: v.optional(
      v.object({
        energy: v.optional(v.number()), // 1-5
        connection: v.optional(v.number()), // 1-5
        silliness: v.optional(v.number()) // 1-5
      })
    )
  })
    .index('by_strapi_id', ['strapiId'])
    .index('by_slug', ['slug'])
    .index('by_category', ['category'])
    .index('by_published', ['publishedAt']),

  players: defineTable({
    strapiId: v.optional(v.union(v.string(), v.number())), // Preserved from Strapi
    name: v.string(),
    slug: v.string(),
    position: v.union(
      v.literal('Player'),
      v.literal('Host'),
      v.literal('Mentor'),
      v.literal('Founder')
    ),
    company: v.optional(v.string()),
    tagline: v.optional(v.string()),
    bio: v.optional(v.string()), // rich text as HTML
    website: v.optional(v.string()),
    avatarId: v.optional(v.id('_storage')),
    location: v.optional(
      v.object({
        lat: v.number(),
        lng: v.number(),
        address: v.optional(v.string())
      })
    ),
    locationOriginal: v.optional(v.string()), // Full Mapbox GeoJSON preserved
    socialNetworks: v.array(
      v.object({
        type: v.union(v.string(), v.null()), // Allow null types
        url: v.string()
      })
    ),
    userId: v.optional(v.id('users')) // auth link
  })
    .index('by_strapi_id', ['strapiId'])
    .index('by_slug', ['slug'])
    .index('by_position', ['position'])
    .index('by_user', ['userId']),

  articles: defineTable({
    strapiId: v.optional(v.union(v.string(), v.number())), // Preserved from Strapi
    title: v.string(),
    slug: v.string(),
    category: v.union(
      v.literal('Announcement'),
      v.literal('Article'),
      v.literal('Event'),
      v.literal('Interview'),
      v.literal('Meetup')
    ),
    summary: v.string(),
    content: v.string(), // rich text as HTML
    canonical: v.optional(v.string()),
    defaultImageId: v.optional(v.id('_storage')),
    imageIds: v.array(v.id('_storage')),
    authorId: v.optional(v.id('players')),
    publishedAt: v.optional(v.number()),
    updatedAt: v.number()
  })
    .index('by_strapi_id', ['strapiId'])
    .index('by_slug', ['slug'])
    .index('by_category', ['category'])
    .index('by_author', ['authorId'])
    .index('by_published', ['publishedAt']),

  // Relationship tables for many-to-many
  eventHosts: defineTable({
    eventId: v.id('events'),
    playerId: v.id('players')
  })
    .index('by_event', ['eventId'])
    .index('by_player', ['playerId']),

  eventMentors: defineTable({
    eventId: v.id('events'),
    playerId: v.id('players')
  })
    .index('by_event', ['eventId'])
    .index('by_player', ['playerId']),

  eventAttendees: defineTable({
    eventId: v.id('events'),
    playerId: v.id('players')
  })
    .index('by_event', ['eventId'])
    .index('by_player', ['playerId']),

  gameDocumenters: defineTable({
    gameId: v.id('games'),
    playerId: v.id('players')
  })
    .index('by_game', ['gameId'])
    .index('by_player', ['playerId']),

  gameProposers: defineTable({
    gameId: v.id('games'),
    playerId: v.id('players')
  })
    .index('by_game', ['gameId'])
    .index('by_player', ['playerId']),

  articleTags: defineTable({
    articleId: v.id('articles'),
    tagId: v.id('tags')
  })
    .index('by_article', ['articleId'])
    .index('by_tag', ['tagId']),

  // Supporting tables
  eventLocations: defineTable({
    strapiId: v.optional(v.union(v.string(), v.number())), // Preserved from Strapi
    name: v.string(),
    slug: v.optional(v.string()),
    country: v.string(), // ISO country code
    location: v.optional(
      v.object({
        lat: v.number(),
        lng: v.number(),
        address: v.optional(v.string())
      })
    ),
    locationOriginal: v.optional(v.string()) // Full Mapbox GeoJSON preserved
  })
    .index('by_strapi_id', ['strapiId'])
    .index('by_country', ['country'])
    .index('by_slug', ['slug']),

  venues: defineTable({
    strapiId: v.optional(v.union(v.string(), v.number())), // Preserved from Strapi
    name: v.string(),
    shortName: v.optional(v.string()),
    logo: v.optional(v.id('_storage')),
    website: v.optional(v.string()),
    location: v.optional(
      v.object({
        lat: v.number(),
        lng: v.number(),
        address: v.optional(v.string())
      })
    ),
    locationOriginal: v.optional(v.string()), // Full Mapbox GeoJSON preserved
    addressDetails: v.optional(v.string()),
    socialNetworks: v.array(
      v.object({
        type: v.union(v.string(), v.null()),
        url: v.union(v.string(), v.null())
      })
    )
  }).index('by_strapi_id', ['strapiId']),

  sponsors: defineTable({
    strapiId: v.optional(v.union(v.string(), v.number())), // Preserved from Strapi
    name: v.string(),
    url: v.optional(v.string()),
    logo: v.optional(v.id('_storage')),
    socialNetworks: v.array(
      v.object({
        type: v.union(v.string(), v.null()),
        url: v.union(v.string(), v.null())
      })
    )
  }).index('by_strapi_id', ['strapiId']),

  tags: defineTable({
    strapiId: v.optional(v.union(v.string(), v.number())), // Preserved from Strapi
    value: v.string()
  })
    .index('by_strapi_id', ['strapiId'])
    .index('by_value', ['value']),

  testimonials: defineTable({
    strapiId: v.optional(v.union(v.string(), v.number())), // Preserved from Strapi
    content: v.string(),
    audio: v.optional(v.id('_storage')),
    authorId: v.optional(v.id('players')),
    url: v.optional(v.string())
  }).index('by_strapi_id', ['strapiId']),

  expectations: defineTable({
    strapiId: v.optional(v.union(v.string(), v.number())), // Preserved from Strapi
    title: v.string(),
    type: v.union(v.literal('Main'), v.literal('Secondary')),
    icon: v.string(),
    content: v.string() // rich text as HTML
  }).index('by_strapi_id', ['strapiId']),

  // Single type tables
  home: defineTable({
    strapiId: v.optional(v.union(v.string(), v.number())), // Preserved from Strapi
    imageIds: v.array(v.id('_storage'))
  }).index('by_strapi_id', ['strapiId']),

  history: defineTable({
    strapiId: v.optional(v.union(v.string(), v.number())), // Preserved from Strapi
    founders: v.optional(v.string()),
    intro: v.optional(v.string()), // rich text as HTML
    keyMoments: v.optional(v.string()),
    items: v.array(
      v.object({
        date: v.number(), // timestamp
        dateFormat: v.union(v.literal('Year'), v.literal('Month'), v.literal('Day')),
        additionalText: v.optional(v.string()),
        title: v.string(),
        description: v.string(), // rich text as HTML
        imageId: v.id('_storage')
      })
    )
  }).index('by_strapi_id', ['strapiId']),

  format: defineTable({
    strapiId: v.optional(v.union(v.string(), v.number())), // Preserved from Strapi
    openspace: v.optional(v.string()), // rich text as HTML
    lawOfTwoFeet: v.optional(v.string()), // rich text as HTML
    butterfly: v.optional(v.string()), // rich text as HTML
    bumblebee: v.optional(v.string()), // rich text as HTML
    schedule: v.optional(v.string()) // rich text as HTML
  }).index('by_strapi_id', ['strapiId']),

  hosting: defineTable({
    strapiId: v.optional(v.union(v.string(), v.number())), // Preserved from Strapi
    content: v.optional(v.string()) // rich text as HTML
  }).index('by_strapi_id', ['strapiId']),

  // User authentication
  users: defineTable({
    strapiId: v.optional(v.string()), // If migrating from Strapi
    username: v.string(),
    email: v.string(),
    provider: v.optional(v.string()),
    confirmed: v.boolean(),
    blocked: v.boolean(),
    roleId: v.optional(v.id('roles'))
  })
    .index('by_email', ['email'])
    .index('by_strapi_id', ['strapiId']),

  roles: defineTable({
    strapiId: v.optional(v.string()), // If migrating from Strapi
    name: v.string(),
    description: v.optional(v.string()),
    type: v.string()
  }).index('by_strapi_id', ['strapiId'])
});
