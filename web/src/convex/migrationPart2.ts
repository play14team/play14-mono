import { mutation } from './_generated/server';
import type { MutationCtx } from './_generated/server';
import type { Id, Doc } from './_generated/dataModel';
import { v } from 'convex/values';
import { processImageField, processImagesField } from './migrationHelpers';

// Environment variables are configured in Convex Dashboard
// and accessible in actions only (not in mutations)

// Helper function to find existing record by strapiId
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function findByStrapiId(ctx: MutationCtx, table: string, strapiId: number): Promise<any> {
	try {
		switch (table) {
			case 'events': {
				const records = await ctx.db
					.query('events')
					.withIndex('by_strapi_id', (q) => q.eq('strapiId', strapiId))
					.collect();
				return records.length > 0 ? records[0] : null;
			}
			case 'articles': {
				const records = await ctx.db
					.query('articles')
					.withIndex('by_strapi_id', (q) => q.eq('strapiId', strapiId))
					.collect();
				return records.length > 0 ? records[0] : null;
			}
			case 'games': {
				const records = await ctx.db
					.query('games')
					.withIndex('by_strapi_id', (q) => q.eq('strapiId', strapiId))
					.collect();
				return records.length > 0 ? records[0] : null;
			}
			default:
				return null;
		}
	} catch (error) {
		console.error(`Error finding record in ${table}:`, error);
		return null;
	}
}

// Helper function to upsert record (insert or update based on strapiId)
async function upsertRecord(
	ctx: MutationCtx,
	table: string,
	strapiId: number,
	data: Record<string, unknown>
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<Id<any> | null> {
	console.log(`🔍 Upsert ${table} strapiId: ${strapiId}, name: ${data.name}`);

	const existing = await findByStrapiId(ctx, table, strapiId);

	if (existing) {
		// Update existing record
		await ctx.db.patch(existing._id, { ...data, strapiId });
		console.log(`✏️ Updated existing ${table} record with strapiId ${strapiId}: ${data.name}`);
		return existing._id;
	} else {
		// Insert new record with strapiId included
		const recordData = { ...data, strapiId };
		let newId;
		switch (table) {
			case 'events':
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				newId = await ctx.db.insert('events', recordData as any);
				break;
			case 'articles':
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				newId = await ctx.db.insert('articles', recordData as any);
				break;
			case 'games':
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				newId = await ctx.db.insert('games', recordData as any);
				break;
			default:
				throw new Error(`Unsupported table: ${table}`);
		}
		console.log(
			`➕ Created new ${table} record with strapiId ${strapiId}: ${data.name} -> ${newId}`
		);

		// Verify it was created
		const allEvents = await ctx.db.query('events').collect();
		console.log(`📊 Total events in DB after insert: ${allEvents.length}`);

		return newId;
	}
}

// Helper to find Convex record by name/slug

async function findConvexRecord(
	ctx: MutationCtx,
	table: string,
	field: string,
	value: string
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<Doc<any> | null> {
	try {
		switch (table) {
			case 'players': {
				const records = await ctx.db.query('players').collect();
				return records.find((r) => (r as Record<string, unknown>)[field] === value);
			}
			case 'events': {
				const records = await ctx.db.query('events').collect();
				return records.find((r) => (r as Record<string, unknown>)[field] === value);
			}
			case 'games': {
				const records = await ctx.db.query('games').collect();
				return records.find((r) => (r as Record<string, unknown>)[field] === value);
			}
			case 'articles': {
				const records = await ctx.db.query('articles').collect();
				return records.find((r) => (r as Record<string, unknown>)[field] === value);
			}
			case 'tags': {
				const records = await ctx.db.query('tags').collect();
				return records.find((r) => (r as Record<string, unknown>)[field] === value);
			}
			default:
				return null;
		}
	} catch (error) {
		console.error(`Error finding record in ${table}:`, error);
		return null;
	}
}

// Helper to find Convex record by strapiId

async function findConvexRecordByStrapiId(
	ctx: MutationCtx,
	table: string,
	strapiId: number
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<Doc<any> | null> {
	try {
		switch (table) {
			case 'players': {
				const records = await ctx.db
					.query('players')
					.withIndex('by_strapi_id', (q) => q.eq('strapiId', strapiId))
					.collect();
				return records.length > 0 ? records[0] : null;
			}
			case 'events': {
				const records = await ctx.db
					.query('events')
					.withIndex('by_strapi_id', (q) => q.eq('strapiId', strapiId))
					.collect();
				return records.length > 0 ? records[0] : null;
			}
			case 'games': {
				const records = await ctx.db
					.query('games')
					.withIndex('by_strapi_id', (q) => q.eq('strapiId', strapiId))
					.collect();
				return records.length > 0 ? records[0] : null;
			}
			case 'articles': {
				const records = await ctx.db
					.query('articles')
					.withIndex('by_strapi_id', (q) => q.eq('strapiId', strapiId))
					.collect();
				return records.length > 0 ? records[0] : null;
			}
			default:
				return null;
		}
	} catch (error) {
		console.error(`Error finding record in ${table}:`, error);
		return null;
	}
}

// Migration for Articles
export const migrateArticles = mutation({
	args: { articles: v.any() },
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	handler: async (ctx: MutationCtx, args: { articles?: any[] }) => {
		console.log('📝 Starting Articles migration...');

		try {
			if (!args.articles) {
				throw new Error(
					'Articles data must be provided - mutations cannot fetch from external APIs'
				);
			}

			// Clear existing articles
			const existingArticles = await ctx.db.query('articles').collect();
			await Promise.all(existingArticles.map((a) => ctx.db.delete(a._id)));

			let migratedCount = 0;
			for (const article of args.articles) {
				const attrs = article.attributes;

				// Find author player
				let authorId: Id<'players'> | undefined;
				if (attrs.author?.data) {
					const authorPlayer = await findConvexRecord(
						ctx,
						'players',
						'slug',
						attrs.author.data.attributes.slug
					);
					authorId = authorPlayer?._id;
				}

				// Process images
				const defaultImageId = await processImageField(
					ctx,
					attrs.defaultImage,
					'articles',
					attrs.title || `article-${article.id}`
				);
				const imageIds = await processImagesField(
					ctx,
					attrs.images,
					'articles',
					attrs.title || `article-${article.id}`
				);

				await ctx.db.insert('articles', {
					title: attrs.title,
					slug: attrs.slug,
					category: attrs.category as 'Announcement' | 'Article' | 'Event' | 'Interview' | 'Meetup',
					summary: attrs.summary || '',
					content: attrs.content || '',
					canonical: attrs.canonical || undefined,
					defaultImageId,
					imageIds,
					authorId,
					publishedAt: attrs.publishedAt ? new Date(attrs.publishedAt).getTime() : undefined,
					updatedAt: new Date(attrs.updatedAt).getTime()
				});
				migratedCount++;
			}

			console.log(`✅ Articles migration completed: ${migratedCount} articles`);
			return { success: true, message: `${migratedCount} articles migrated successfully` };
		} catch (error) {
			console.error('❌ Articles migration failed:', error);
			throw error;
		}
	}
});

// Migration for Games
export const migrateGames = mutation({
	args: { games: v.any() },
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	handler: async (ctx: MutationCtx, args: { games?: any[] }) => {
		console.log('🎮 Starting Games migration...');

		try {
			if (!args.games) {
				throw new Error('Games data must be provided - mutations cannot fetch from external APIs');
			}

			// Clear existing games
			const existingGames = await ctx.db.query('games').collect();
			await Promise.all(existingGames.map((g) => ctx.db.delete(g._id)));

			let migratedCount = 0;
			for (const game of args.games) {
				const attrs = game.attributes;

				// Find first played at event
				let firstPlayedAtEventId: Id<'events'> | undefined;
				if (attrs.firstPlayedAt?.data) {
					const event = await findConvexRecord(
						ctx,
						'events',
						'slug',
						attrs.firstPlayedAt.data.attributes.slug
					);
					firstPlayedAtEventId = event?._id;
				}

				// Process images and resources
				const defaultImageId = await processImageField(
					ctx,
					attrs.defaultImage,
					'games',
					attrs.name || `game-${game.id}`
				);
				const imageIds = await processImagesField(
					ctx,
					attrs.images,
					'games',
					attrs.name || `game-${game.id}`
				);
				const resourceIds = await processImagesField(
					ctx,
					attrs.resources,
					'games',
					`${attrs.name || `game-${game.id}`}-resources`
				); // Resources are stored as files in Strapi

				await ctx.db.insert('games', {
					name: attrs.name,
					slug: attrs.slug,
					category: attrs.category as
						| 'Game'
						| 'IceBreaker'
						| 'WarmUp'
						| 'Facilitation'
						| 'Retrospective'
						| 'CoolDown',
					scale: attrs.scale || '',
					timebox: attrs.timebox || '',
					summary: attrs.summary || '',
					description: attrs.description || '',
					credits: attrs.credits || '',
					defaultImageId,
					imageIds,
					resourceIds,
					firstPlayedAtEventId,
					publishedAt: attrs.publishedAt ? new Date(attrs.publishedAt).getTime() : undefined,
					updatedAt: new Date(attrs.updatedAt).getTime(),
					// Components
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					materials: attrs.materials?.map((m: any) => ({ value: m.value })) || [],
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					preparationSteps: attrs.preparationSteps?.map((p: any) => ({ value: p.value })) || [],
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					safety: attrs.safety?.map((s: any) => ({ key: s.key, value: s.value })) || [],
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					tags: attrs.tags?.map((t: any) => ({ value: t.value })) || [],
					ratings: attrs.ratings
						? {
								energy: attrs.ratings.energy || undefined,
								connection: attrs.ratings.connection || undefined,
								silliness: attrs.ratings.silliness || undefined
							}
						: undefined
				});
				migratedCount++;
			}

			console.log(`✅ Games migration completed: ${migratedCount} games`);
			return { success: true, message: `${migratedCount} games migrated successfully` };
		} catch (error) {
			console.error('❌ Games migration failed:', error);
			throw error;
		}
	}
});

// Migration for Events
export const migrateEvents = mutation({
	args: { events: v.any() },
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	handler: async (ctx: MutationCtx, args: { events?: any[] }) => {
		console.log('📅 Starting Events migration with UPSERT logic...');

		try {
			if (!args.events) {
				throw new Error('Events data must be provided - mutations cannot fetch from external APIs');
			}

			// Use upsert logic to avoid clearing events between batches

			let migratedCount = 0;
			for (const event of args.events) {
				const attrs = event.attributes;

				// Find location
				let locationId: Id<'eventLocations'> | undefined;
				if (attrs.location?.data) {
					const location = await findConvexRecord(
						ctx,
						'eventLocations',
						'name',
						attrs.location.data.attributes.name
					);
					locationId = location?._id;
				}

				// Find venue
				let venueId: Id<'venues'> | undefined;
				if (attrs.venue?.data) {
					const venue = await findConvexRecord(
						ctx,
						'venues',
						'name',
						attrs.venue.data.attributes.name
					);
					venueId = venue?._id;
				}

				// Process timetable
				const timetable =
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					attrs.timetable?.map((tt: any) => ({
						day: tt.day as
							| 'Monday'
							| 'Tuesday'
							| 'Wednesday'
							| 'Thursday'
							| 'Friday'
							| 'Saturday'
							| 'Sunday',
						description: tt.description || '',
						timeslots:
							// eslint-disable-next-line @typescript-eslint/no-explicit-any
							tt.timeSlots?.map((ts: any) => ({
								time: ts.time || '',
								description: ts.description || ''
							})) || []
					})) || [];

				// Process sponsorships
				const sponsorships = [];
				if (attrs.sponsorships) {
					for (const sponsorship of attrs.sponsorships) {
						const sponsorIds: Id<'sponsors'>[] = [];

						if (sponsorship.sponsors?.data) {
							for (const sponsorData of sponsorship.sponsors.data) {
								// Find sponsor by strapiId first, fallback to name
								let sponsor = await findConvexRecordByStrapiId(ctx, 'sponsors', sponsorData.id);
								if (!sponsor) {
									// Fallback to name search
									sponsor = await findConvexRecord(
										ctx,
										'sponsors',
										'name',
										sponsorData.attributes.name
									);
								}
								if (sponsor) {
									sponsorIds.push(sponsor._id);
								}
							}
						}

						sponsorships.push({
							category: sponsorship.category || '',
							sponsorIds
						});
					}
				}

				// Process images with error handling
				let defaultImageId = undefined;
				let imageIds: unknown[] = [];
				try {
					console.log(`🖼️ Processing images for event: ${attrs.name}`);
					if (attrs.defaultImage?.data) {
						defaultImageId = await processImageField(
							ctx,
							attrs.defaultImage,
							'events',
							attrs.name || `event-${event.id}`
						);
					}
					if (attrs.images?.data) {
						imageIds = await processImagesField(
							ctx,
							attrs.images,
							'events',
							attrs.name || `event-${event.id}`
						);
					}
					console.log(
						`✅ Images processed: default=${!!defaultImageId}, gallery=${imageIds.length}`
					);
				} catch (error) {
					console.error(`⚠️ Image processing failed for ${attrs.name}:`, error);
					// Continue with undefined/empty arrays - don't fail the whole migration
					defaultImageId = undefined;
					imageIds = [];
				}

				await upsertRecord(ctx, 'events', event.id, {
					strapiId: event.id, // Explicitly add strapiId
					name: attrs.name,
					slug: attrs.slug,
					start: new Date(attrs.start).getTime(),
					end: new Date(attrs.end).getTime(),
					timezone: attrs.timezone || 'UTC',
					status: attrs.status as 'Announced' | 'Open' | 'Over' | 'Cancelled',
					description: attrs.description || '',
					contactEmail: attrs.contactEmail || '',
					tagline: attrs.tagline || undefined,
					defaultImageId,
					imageIds,
					locationId,
					venueId,
					publishedAt: attrs.publishedAt ? new Date(attrs.publishedAt).getTime() : undefined,
					updatedAt: new Date(attrs.updatedAt).getTime(),
					// Components
					timetable,
					registration: attrs.registration
						? {
								link: attrs.registration.link || undefined,
								widgetCode: attrs.registration.widgetCode || undefined
							}
						: undefined,
					sponsorships,
					media:
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						attrs.media?.map((m: any) => ({
							url: m.url || '',
							type: m.type || ''
						})) || [],
					finance: undefined // TODO: Handle finance component if needed
				});
				migratedCount++;
			}

			console.log(`✅ Events migration completed: ${migratedCount} events`);
			return { success: true, message: `${migratedCount} events migrated successfully` };
		} catch (error) {
			console.error('❌ Events migration failed:', error);
			throw error;
		}
	}
});

// Migration for Event-Player Relationships (Hosts, Mentors, Attendees)
export const migrateEventRelationships = mutation({
	args: { events: v.any() },
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	handler: async (ctx: MutationCtx, args: { events?: any[] }) => {
		console.log('🔗 Starting Event Relationships migration...');

		try {
			throw new Error(
				'Event Relationships migration must be run via external script - mutations cannot access external APIs'
			);

			// Clear existing relationships
			const [existingHosts, existingMentors, existingAttendees] = await Promise.all([
				ctx.db.query('eventHosts').collect(),
				ctx.db.query('eventMentors').collect(),
				ctx.db.query('eventAttendees').collect()
			]);

			await Promise.all([
				...existingHosts.map((h) => ctx.db.delete(h._id)),
				...existingMentors.map((m) => ctx.db.delete(m._id)),
				...existingAttendees.map((a) => ctx.db.delete(a._id))
			]);

			let hostsCount = 0,
				mentorsCount = 0,
				attendeesCount = 0;

			if (!args.events) {
				throw new Error('Events data is required');
			}

			for (const event of args.events!) {
				const attrs = event.attributes;

				// Find the event in Convex
				const convexEvent = await findConvexRecord(ctx, 'events', 'slug', attrs.slug);
				if (!convexEvent) continue;

				// Process hosts
				if (attrs.hosts?.data) {
					for (const hostData of attrs.hosts.data) {
						const player = await findConvexRecord(ctx, 'players', 'slug', hostData.attributes.slug);
						if (player && convexEvent) {
							await ctx.db.insert('eventHosts', {
								eventId: convexEvent._id,
								playerId: player._id
							});
							hostsCount++;
						}
					}
				}

				// Process mentors
				if (attrs.mentors?.data) {
					for (const mentorData of attrs.mentors.data) {
						const player = await findConvexRecord(
							ctx,
							'players',
							'slug',
							mentorData.attributes.slug
						);
						if (player && convexEvent) {
							await ctx.db.insert('eventMentors', {
								eventId: convexEvent._id,
								playerId: player._id
							});
							mentorsCount++;
						}
					}
				}

				// Process attendees (players)
				if (attrs.players?.data) {
					for (const playerData of attrs.players.data) {
						const player = await findConvexRecord(
							ctx,
							'players',
							'slug',
							playerData.attributes.slug
						);
						if (player && convexEvent) {
							await ctx.db.insert('eventAttendees', {
								eventId: convexEvent._id,
								playerId: player._id
							});
							attendeesCount++;
						}
					}
				}
			}

			console.log(`✅ Event Relationships migration completed:`);
			console.log(`   - ${hostsCount} host relationships`);
			console.log(`   - ${mentorsCount} mentor relationships`);
			console.log(`   - ${attendeesCount} attendee relationships`);

			return {
				success: true,
				message: `Event relationships migrated: ${hostsCount} hosts, ${mentorsCount} mentors, ${attendeesCount} attendees`
			};
		} catch (error) {
			console.error('❌ Event Relationships migration failed:', error);
			throw error;
		}
	}
});

// Migration for Game-Player Relationships (Documenters, Proposers)
export const migrateGameRelationships = mutation({
	args: { games: v.any() },
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	handler: async (ctx: MutationCtx, args: { games?: any[] }) => {
		console.log('🎲 Starting Game Relationships migration...');

		try {
			if (!args.games) {
				throw new Error('Games data must be provided - mutations cannot fetch from external APIs');
			}

			// Clear existing relationships
			const [existingDocumenters, existingProposers] = await Promise.all([
				ctx.db.query('gameDocumenters').collect(),
				ctx.db.query('gameProposers').collect()
			]);

			await Promise.all([
				...existingDocumenters.map((d) => ctx.db.delete(d._id)),
				...existingProposers.map((p) => ctx.db.delete(p._id))
			]);

			let documentersCount = 0,
				proposersCount = 0;

			for (const game of args.games) {
				const attrs = game.attributes;

				// Find the game in Convex
				const convexGame = await findConvexRecord(ctx, 'games', 'slug', attrs.slug);
				if (!convexGame) continue;

				// Process documenters
				if (attrs.documentedBy?.data) {
					for (const documenterData of attrs.documentedBy.data) {
						const player = await findConvexRecord(
							ctx,
							'players',
							'slug',
							documenterData.attributes.slug
						);
						if (player && convexGame) {
							await ctx.db.insert('gameDocumenters', {
								gameId: convexGame._id,
								playerId: player._id
							});
							documentersCount++;
						}
					}
				}

				// Process proposers
				if (attrs.proposedBy?.data) {
					for (const proposerData of attrs.proposedBy.data) {
						const player = await findConvexRecord(
							ctx,
							'players',
							'slug',
							proposerData.attributes.slug
						);
						if (player && convexGame) {
							await ctx.db.insert('gameProposers', {
								gameId: convexGame._id,
								playerId: player._id
							});
							proposersCount++;
						}
					}
				}
			}

			console.log(`✅ Game Relationships migration completed:`);
			console.log(`   - ${documentersCount} documenter relationships`);
			console.log(`   - ${proposersCount} proposer relationships`);

			return {
				success: true,
				message: `Game relationships migrated: ${documentersCount} documenters, ${proposersCount} proposers`
			};
		} catch (error) {
			console.error('❌ Game Relationships migration failed:', error);
			throw error;
		}
	}
});

// Migration for Article-Tag Relationships
export const migrateArticleTagRelationships = mutation({
	args: { articles: v.any() },
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	handler: async (ctx: MutationCtx, args: { articles?: any[] }) => {
		console.log('🏷️ Starting Article-Tag Relationships migration...');

		try {
			if (!args.articles) {
				throw new Error(
					'Articles data must be provided - mutations cannot fetch from external APIs'
				);
			}

			// Clear existing relationships
			const existingRelations = await ctx.db.query('articleTags').collect();
			await Promise.all(existingRelations.map((r) => ctx.db.delete(r._id)));

			let relationsCount = 0;

			for (const article of args.articles) {
				const attrs = article.attributes;

				// Find the article in Convex
				const convexArticle = await findConvexRecord(ctx, 'articles', 'slug', attrs.slug);
				if (!convexArticle) continue;

				// Process tags
				if (attrs.tags?.data) {
					for (const tagData of attrs.tags.data) {
						const tag = await findConvexRecord(ctx, 'tags', 'value', tagData.attributes.value);
						if (tag && convexArticle) {
							await ctx.db.insert('articleTags', {
								articleId: convexArticle._id,
								tagId: tag._id
							});
							relationsCount++;
						}
					}
				}
			}

			console.log(
				`✅ Article-Tag Relationships migration completed: ${relationsCount} relationships`
			);
			return {
				success: true,
				message: `${relationsCount} article-tag relationships migrated successfully`
			};
		} catch (error) {
			console.error('❌ Article-Tag Relationships migration failed:', error);
			throw error;
		}
	}
});
