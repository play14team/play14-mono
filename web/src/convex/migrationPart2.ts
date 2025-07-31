import { mutation } from './_generated/server';
import type { MutationCtx } from './_generated/server';
import type { Id } from './_generated/dataModel';
import { processImageField, processImagesField } from './migrationHelpers';

// Environment variables are configured in Convex Dashboard
// and accessible in actions only (not in mutations)

// Helper to find Convex record by name/slug

async function findConvexRecord(ctx: MutationCtx, table: string, field: string, value: string) {
	const records = await ctx.db.query(table as never).collect();
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return records.find((r: any) => r[field] === value);
}

// Helper to find Convex record by strapiId
async function findConvexRecordByStrapiId(ctx: MutationCtx, table: string, strapiId: number) {
	const records = await ctx.db
		.query(table as never)
		.withIndex('by_strapi_id', (q) => q.eq('strapiId', strapiId))
		.collect();
	return records.length > 0 ? records[0] : null;
}

// Migration for Articles
export const migrateArticles = mutation({
	args: {},
	handler: async (ctx: MutationCtx) => {
		console.log('📝 Starting Articles migration...');

		try {
			throw new Error(
				'Articles migration must be run via external script - mutations cannot access external APIs'
			);

			// Clear existing articles
			const existingArticles = await ctx.db.query('articles').collect();
			await Promise.all(existingArticles.map((a) => ctx.db.delete(a._id)));

			let migratedCount = 0;
			for (const article of articles) {
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
				const defaultImageId = await processImageField(ctx, attrs.defaultImage);
				const imageIds = await processImagesField(ctx, attrs.images);

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
	args: {},
	handler: async (ctx: MutationCtx) => {
		console.log('🎮 Starting Games migration...');

		try {
			throw new Error(
				'Games migration must be run via external script - mutations cannot access external APIs'
			);

			// Clear existing games
			const existingGames = await ctx.db.query('games').collect();
			await Promise.all(existingGames.map((g) => ctx.db.delete(g._id)));

			let migratedCount = 0;
			for (const game of games) {
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
				const defaultImageId = await processImageField(ctx, attrs.defaultImage);
				const imageIds = await processImagesField(ctx, attrs.images);
				const resourceIds = await processImagesField(ctx, attrs.resources); // Resources are stored as files in Strapi

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
	args: {},
	handler: async (ctx: MutationCtx) => {
		console.log('📅 Starting Events migration...');

		try {
			throw new Error(
				'Events migration must be run via external script - mutations cannot access external APIs'
			);

			// Clear existing events
			const existingEvents = await ctx.db.query('events').collect();
			await Promise.all(existingEvents.map((e) => ctx.db.delete(e._id)));

			let migratedCount = 0;
			for (const event of events) {
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

				// Process images
				const defaultImageId = await processImageField(ctx, attrs.defaultImage);
				const imageIds = await processImagesField(ctx, attrs.images);

				await ctx.db.insert('events', {
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
	args: {},
	handler: async (ctx: MutationCtx) => {
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

			for (const event of events) {
				const attrs = event.attributes;

				// Find the event in Convex
				const convexEvent = await findConvexRecord(ctx, 'events', 'slug', attrs.slug);
				if (!convexEvent) continue;

				// Process hosts
				if (attrs.hosts?.data) {
					for (const hostData of attrs.hosts.data) {
						const player = await findConvexRecord(ctx, 'players', 'slug', hostData.attributes.slug);
						if (player) {
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
						if (player) {
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
						if (player) {
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
	args: {},
	handler: async (ctx: MutationCtx) => {
		console.log('🎲 Starting Game Relationships migration...');

		try {
			throw new Error(
				'Game Relationships migration must be run via external script - mutations cannot access external APIs'
			);

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

			for (const game of games) {
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
						if (player) {
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
						if (player) {
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
	args: {},
	handler: async (ctx: MutationCtx) => {
		console.log('🏷️ Starting Article-Tag Relationships migration...');

		try {
			throw new Error(
				'Article-Tag Relationships migration must be run via external script - mutations cannot access external APIs'
			);

			// Clear existing relationships
			const existingRelations = await ctx.db.query('articleTags').collect();
			await Promise.all(existingRelations.map((r) => ctx.db.delete(r._id)));

			let relationsCount = 0;

			for (const article of articles) {
				const attrs = article.attributes;

				// Find the article in Convex
				const convexArticle = await findConvexRecord(ctx, 'articles', 'slug', attrs.slug);
				if (!convexArticle) continue;

				// Process tags
				if (attrs.tags?.data) {
					for (const tagData of attrs.tags.data) {
						const tag = await findConvexRecord(ctx, 'tags', 'value', tagData.attributes.value);
						if (tag) {
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
