import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
	// Core content tables
	events: defineTable({
		name: v.string(),
		slug: v.string(),
		start: v.number(), // timestamp
		end: v.number(), // timestamp
		timezone: v.string(),
		status: v.union(
			v.literal('Announced'),
			v.literal('Open'),
			v.literal('Over'),
			v.literal('Cancelled')
		),
		description: v.string(), // rich text as HTML/markdown
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
						time: v.string(),
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
				url: v.string(),
				type: v.string()
			})
		),
		finance: v.optional(
			v.object({
				// Finance reporting structure - to be defined based on component schema
				budget: v.optional(v.number()),
				expenses: v.optional(
					v.array(
						v.object({
							category: v.string(),
							amount: v.number(),
							description: v.string()
						})
					)
				)
			})
		)
	})
		.index('by_slug', ['slug'])
		.index('by_status', ['status'])
		.index('by_start', ['start'])
		.index('by_location', ['locationId'])
		.index('by_published', ['publishedAt']),

	games: defineTable({
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
		scale: v.string(),
		timebox: v.string(),
		summary: v.string(),
		description: v.string(), // rich text
		credits: v.string(),
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
		.index('by_slug', ['slug'])
		.index('by_category', ['category'])
		.index('by_published', ['publishedAt']),

	players: defineTable({
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
		bio: v.optional(v.string()), // rich text
		website: v.optional(v.string()),
		avatarId: v.optional(v.id('_storage')),
		location: v.optional(
			v.object({
				lat: v.number(),
				lng: v.number(),
				address: v.optional(v.string())
			})
		),
		socialNetworks: v.array(
			v.object({
				type: v.string(),
				url: v.string()
			})
		),
		userId: v.optional(v.id('users')) // auth link
	})
		.index('by_slug', ['slug'])
		.index('by_position', ['position'])
		.index('by_user', ['userId']),

	articles: defineTable({
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
		content: v.string(), // rich text
		canonical: v.optional(v.string()),
		defaultImageId: v.optional(v.id('_storage')),
		imageIds: v.array(v.id('_storage')),
		authorId: v.optional(v.id('players')),
		publishedAt: v.optional(v.number()),
		updatedAt: v.number()
	})
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
		name: v.string(),
		country: v.string(),
		location: v.optional(
			v.object({
				lat: v.number(),
				lng: v.number()
			})
		)
	}).index('by_country', ['country']),

	venues: defineTable({
		name: v.string(),
		website: v.optional(v.string()),
		location: v.optional(
			v.object({
				lat: v.number(),
				lng: v.number()
			})
		),
		addressDetails: v.optional(v.string())
	}),

	sponsors: defineTable({
		name: v.string(),
		url: v.optional(v.string()),
		logoId: v.optional(v.id('_storage')),
		socialNetworks: v.array(
			v.object({
				type: v.string(),
				url: v.string()
			})
		)
	}),

	tags: defineTable({
		value: v.string()
	}).index('by_value', ['value']),

	// Homepage configuration
	home: defineTable({
		imageIds: v.array(v.id('_storage'))
	}),

	// User authentication (if using Convex Auth)
	users: defineTable({
		email: v.string(),
		name: v.optional(v.string())
		// Additional auth fields as needed
	}).index('by_email', ['email'])
});
