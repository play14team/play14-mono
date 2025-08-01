import { mutation } from './_generated/server';
import type { MutationCtx } from './_generated/server';
import { v } from 'convex/values';

// Helper function to find Convex record by strapiId
async function findConvexRecordByStrapiId(
	ctx: MutationCtx,
	table: string,
	strapiId: number
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any | null> {
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
			case 'tags': {
				const records = await ctx.db
					.query('tags')
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

// Helper function to find Convex record by field value
async function findConvexRecord(
	ctx: MutationCtx,
	table: string,
	field: string,
	value: string
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any | null> {
	try {
		switch (table) {
			case 'players': {
				const records = await ctx.db.query('players').collect();
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				return records.find((r: any) => r[field] === value) || null;
			}
			case 'events': {
				const records = await ctx.db.query('events').collect();
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				return records.find((r: any) => r[field] === value) || null;
			}
			case 'games': {
				const records = await ctx.db.query('games').collect();
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				return records.find((r: any) => r[field] === value) || null;
			}
			case 'articles': {
				const records = await ctx.db.query('articles').collect();
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				return records.find((r: any) => r[field] === value) || null;
			}
			case 'tags': {
				const records = await ctx.db.query('tags').collect();
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				return records.find((r: any) => r[field] === value) || null;
			}
			default:
				return null;
		}
	} catch (error) {
		console.error(`Error finding record in ${table}:`, error);
		return null;
	}
}

// Migration for Event Hosts relationships
export const migrateEventHosts = mutation({
	args: { events: v.any() },
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	handler: async (ctx: MutationCtx, args: { events?: any[] }) => {
		console.log('👥 Starting Event Hosts migration...');

		try {
			if (!args.events) {
				throw new Error('Events data must be provided - mutations cannot fetch from external APIs');
			}

			// Clear existing host relationships
			const existingHosts = await ctx.db.query('eventHosts').collect();
			await Promise.all(existingHosts.map((h) => ctx.db.delete(h._id)));
			console.log(`🗑️ Cleared ${existingHosts.length} existing host relationships`);

			let hostsCount = 0;

			for (const event of args.events) {
				const attrs = event.attributes;

				// Find the event in Convex by strapiId first, fallback to slug
				let convexEvent = await findConvexRecordByStrapiId(ctx, 'events', event.id);
				if (!convexEvent) {
					convexEvent = await findConvexRecord(ctx, 'events', 'slug', attrs.slug);
				}
				if (!convexEvent) {
					console.log(`⚠️ Event not found: ${attrs.name || event.id}`);
					continue;
				}

				// Process hosts
				if (attrs.hosts?.data && Array.isArray(attrs.hosts.data)) {
					for (const hostData of attrs.hosts.data) {
						// Find player by strapiId first, fallback to slug
						let player = await findConvexRecordByStrapiId(ctx, 'players', hostData.id);
						if (!player) {
							player = await findConvexRecord(ctx, 'players', 'slug', hostData.attributes?.slug);
						}

						if (player && convexEvent) {
							await ctx.db.insert('eventHosts', {
								eventId: convexEvent._id,
								playerId: player._id
							});
							hostsCount++;
							console.log(`✅ Added host: ${player.name} → ${convexEvent.name}`);
						} else {
							console.log(
								`⚠️ Host or event not found: ${hostData.attributes?.name || hostData.id} → ${attrs.name}`
							);
						}
					}
				}
			}

			console.log(`✅ Event Hosts migration completed: ${hostsCount} host relationships`);
			return {
				success: true,
				message: `${hostsCount} event host relationships migrated successfully`
			};
		} catch (error) {
			console.error('❌ Event Hosts migration failed:', error);
			throw error;
		}
	}
});

// Migration for Event Mentors relationships
export const migrateEventMentors = mutation({
	args: { events: v.any() },
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	handler: async (ctx: MutationCtx, args: { events?: any[] }) => {
		console.log('🧠 Starting Event Mentors migration...');

		try {
			if (!args.events) {
				throw new Error('Events data must be provided - mutations cannot fetch from external APIs');
			}

			// Clear existing mentor relationships
			const existingMentors = await ctx.db.query('eventMentors').collect();
			await Promise.all(existingMentors.map((m) => ctx.db.delete(m._id)));
			console.log(`🗑️ Cleared ${existingMentors.length} existing mentor relationships`);

			let mentorsCount = 0;

			for (const event of args.events) {
				const attrs = event.attributes;

				// Find the event in Convex by strapiId first, fallback to slug
				let convexEvent = await findConvexRecordByStrapiId(ctx, 'events', event.id);
				if (!convexEvent) {
					convexEvent = await findConvexRecord(ctx, 'events', 'slug', attrs.slug);
				}
				if (!convexEvent) {
					console.log(`⚠️ Event not found: ${attrs.name || event.id}`);
					continue;
				}

				// Process mentors
				if (attrs.mentors?.data && Array.isArray(attrs.mentors.data)) {
					for (const mentorData of attrs.mentors.data) {
						// Find player by strapiId first, fallback to slug
						let player = await findConvexRecordByStrapiId(ctx, 'players', mentorData.id);
						if (!player) {
							player = await findConvexRecord(ctx, 'players', 'slug', mentorData.attributes?.slug);
						}

						if (player && convexEvent) {
							await ctx.db.insert('eventMentors', {
								eventId: convexEvent._id,
								playerId: player._id
							});
							mentorsCount++;
							console.log(`✅ Added mentor: ${player.name} → ${convexEvent.name}`);
						} else {
							console.log(
								`⚠️ Mentor or event not found: ${mentorData.attributes?.name || mentorData.id} → ${attrs.name}`
							);
						}
					}
				}
			}

			console.log(`✅ Event Mentors migration completed: ${mentorsCount} mentor relationships`);
			return {
				success: true,
				message: `${mentorsCount} event mentor relationships migrated successfully`
			};
		} catch (error) {
			console.error('❌ Event Mentors migration failed:', error);
			throw error;
		}
	}
});

// Migration for Event Attendees relationships
export const migrateEventAttendees = mutation({
	args: { events: v.any() },
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	handler: async (ctx: MutationCtx, args: { events?: any[] }) => {
		console.log('👫 Starting Event Attendees migration...');

		try {
			if (!args.events) {
				throw new Error('Events data must be provided - mutations cannot fetch from external APIs');
			}

			// Clear existing attendee relationships
			const existingAttendees = await ctx.db.query('eventAttendees').collect();
			await Promise.all(existingAttendees.map((a) => ctx.db.delete(a._id)));
			console.log(`🗑️ Cleared ${existingAttendees.length} existing attendee relationships`);

			let attendeesCount = 0;

			for (const event of args.events) {
				const attrs = event.attributes;

				// Find the event in Convex by strapiId first, fallback to slug
				let convexEvent = await findConvexRecordByStrapiId(ctx, 'events', event.id);
				if (!convexEvent) {
					convexEvent = await findConvexRecord(ctx, 'events', 'slug', attrs.slug);
				}
				if (!convexEvent) {
					console.log(`⚠️ Event not found: ${attrs.name || event.id}`);
					continue;
				}

				// Process attendees (players field in Strapi)
				if (attrs.players?.data && Array.isArray(attrs.players.data)) {
					for (const playerData of attrs.players.data) {
						// Find player by strapiId first, fallback to slug
						let player = await findConvexRecordByStrapiId(ctx, 'players', playerData.id);
						if (!player) {
							player = await findConvexRecord(ctx, 'players', 'slug', playerData.attributes?.slug);
						}

						if (player && convexEvent) {
							await ctx.db.insert('eventAttendees', {
								eventId: convexEvent._id,
								playerId: player._id
							});
							attendeesCount++;
							console.log(`✅ Added attendee: ${player.name} → ${convexEvent.name}`);
						} else {
							console.log(
								`⚠️ Attendee or event not found: ${playerData.attributes?.name || playerData.id} → ${attrs.name}`
							);
						}
					}
				}
			}

			console.log(
				`✅ Event Attendees migration completed: ${attendeesCount} attendee relationships`
			);
			return {
				success: true,
				message: `${attendeesCount} event attendee relationships migrated successfully`
			};
		} catch (error) {
			console.error('❌ Event Attendees migration failed:', error);
			throw error;
		}
	}
});

// Migration for Game Documenters relationships
export const migrateGameDocumenters = mutation({
	args: { games: v.any() },
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	handler: async (ctx: MutationCtx, args: { games?: any[] }) => {
		console.log('📝 Starting Game Documenters migration...');

		try {
			if (!args.games) {
				throw new Error('Games data must be provided - mutations cannot fetch from external APIs');
			}

			// Clear existing documenter relationships
			const existingDocumenters = await ctx.db.query('gameDocumenters').collect();
			await Promise.all(existingDocumenters.map((d) => ctx.db.delete(d._id)));
			console.log(`🗑️ Cleared ${existingDocumenters.length} existing documenter relationships`);

			let documentersCount = 0;

			for (const game of args.games) {
				const attrs = game.attributes;

				// Find the game in Convex by strapiId first, fallback to slug
				let convexGame = await findConvexRecordByStrapiId(ctx, 'games', game.id);
				if (!convexGame) {
					convexGame = await findConvexRecord(ctx, 'games', 'slug', attrs.slug);
				}
				if (!convexGame) {
					console.log(`⚠️ Game not found: ${attrs.name || game.id}`);
					continue;
				}

				// Process documenters
				if (attrs.documentedBy?.data && Array.isArray(attrs.documentedBy.data)) {
					for (const documenterData of attrs.documentedBy.data) {
						// Find player by strapiId first, fallback to slug
						let player = await findConvexRecordByStrapiId(ctx, 'players', documenterData.id);
						if (!player) {
							player = await findConvexRecord(
								ctx,
								'players',
								'slug',
								documenterData.attributes?.slug
							);
						}

						if (player && convexGame) {
							await ctx.db.insert('gameDocumenters', {
								gameId: convexGame._id,
								playerId: player._id
							});
							documentersCount++;
							console.log(`✅ Added documenter: ${player.name} → ${convexGame.name}`);
						} else {
							console.log(
								`⚠️ Documenter or game not found: ${documenterData.attributes?.name || documenterData.id} → ${attrs.name}`
							);
						}
					}
				}
			}

			console.log(
				`✅ Game Documenters migration completed: ${documentersCount} documenter relationships`
			);
			return {
				success: true,
				message: `${documentersCount} game documenter relationships migrated successfully`
			};
		} catch (error) {
			console.error('❌ Game Documenters migration failed:', error);
			throw error;
		}
	}
});

// Migration for Game Proposers relationships
export const migrateGameProposers = mutation({
	args: { games: v.any() },
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	handler: async (ctx: MutationCtx, args: { games?: any[] }) => {
		console.log('💡 Starting Game Proposers migration...');

		try {
			if (!args.games) {
				throw new Error('Games data must be provided - mutations cannot fetch from external APIs');
			}

			// Clear existing proposer relationships
			const existingProposers = await ctx.db.query('gameProposers').collect();
			await Promise.all(existingProposers.map((p) => ctx.db.delete(p._id)));
			console.log(`🗑️ Cleared ${existingProposers.length} existing proposer relationships`);

			let proposersCount = 0;

			for (const game of args.games) {
				const attrs = game.attributes;

				// Find the game in Convex by strapiId first, fallback to slug
				let convexGame = await findConvexRecordByStrapiId(ctx, 'games', game.id);
				if (!convexGame) {
					convexGame = await findConvexRecord(ctx, 'games', 'slug', attrs.slug);
				}
				if (!convexGame) {
					console.log(`⚠️ Game not found: ${attrs.name || game.id}`);
					continue;
				}

				// Process proposers
				if (attrs.proposedBy?.data && Array.isArray(attrs.proposedBy.data)) {
					for (const proposerData of attrs.proposedBy.data) {
						// Find player by strapiId first, fallback to slug
						let player = await findConvexRecordByStrapiId(ctx, 'players', proposerData.id);
						if (!player) {
							player = await findConvexRecord(
								ctx,
								'players',
								'slug',
								proposerData.attributes?.slug
							);
						}

						if (player && convexGame) {
							await ctx.db.insert('gameProposers', {
								gameId: convexGame._id,
								playerId: player._id
							});
							proposersCount++;
							console.log(`✅ Added proposer: ${player.name} → ${convexGame.name}`);
						} else {
							console.log(
								`⚠️ Proposer or game not found: ${proposerData.attributes?.name || proposerData.id} → ${attrs.name}`
							);
						}
					}
				}
			}

			console.log(
				`✅ Game Proposers migration completed: ${proposersCount} proposer relationships`
			);
			return {
				success: true,
				message: `${proposersCount} game proposer relationships migrated successfully`
			};
		} catch (error) {
			console.error('❌ Game Proposers migration failed:', error);
			throw error;
		}
	}
});

// Migration for Article Tags relationships
export const migrateArticleTags = mutation({
	args: { articles: v.any() },
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	handler: async (ctx: MutationCtx, args: { articles?: any[] }) => {
		console.log('🏷️ Starting Article Tags migration...');

		try {
			if (!args.articles) {
				throw new Error(
					'Articles data must be provided - mutations cannot fetch from external APIs'
				);
			}

			// Clear existing article-tag relationships
			const existingRelations = await ctx.db.query('articleTags').collect();
			await Promise.all(existingRelations.map((r) => ctx.db.delete(r._id)));
			console.log(`🗑️ Cleared ${existingRelations.length} existing article-tag relationships`);

			let relationsCount = 0;

			for (const article of args.articles) {
				const attrs = article.attributes;

				// Find the article in Convex by strapiId first, fallback to slug
				let convexArticle = await findConvexRecordByStrapiId(ctx, 'articles', article.id);
				if (!convexArticle) {
					convexArticle = await findConvexRecord(ctx, 'articles', 'slug', attrs.slug);
				}
				if (!convexArticle) {
					console.log(`⚠️ Article not found: ${attrs.title || article.id}`);
					continue;
				}

				// Process tags
				if (attrs.tags?.data && Array.isArray(attrs.tags.data)) {
					for (const tagData of attrs.tags.data) {
						// Find tag by strapiId first, fallback to value
						let tag = await findConvexRecordByStrapiId(ctx, 'tags', tagData.id);
						if (!tag) {
							tag = await findConvexRecord(ctx, 'tags', 'value', tagData.attributes?.value);
						}

						if (tag && convexArticle) {
							await ctx.db.insert('articleTags', {
								articleId: convexArticle._id,
								tagId: tag._id
							});
							relationsCount++;
							console.log(`✅ Added tag: ${tag.value} → ${convexArticle.title}`);
						} else {
							console.log(
								`⚠️ Tag or article not found: ${tagData.attributes?.value || tagData.id} → ${attrs.title}`
							);
						}
					}
				}
			}

			console.log(
				`✅ Article Tags migration completed: ${relationsCount} article-tag relationships`
			);
			return {
				success: true,
				message: `${relationsCount} article-tag relationships migrated successfully`
			};
		} catch (error) {
			console.error('❌ Article Tags migration failed:', error);
			throw error;
		}
	}
});

// Combined relationship migration function
export const migrateAllRelationships = mutation({
	args: { events: v.any(), games: v.any(), articles: v.any() },
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	handler: async (ctx: MutationCtx, args: { events?: any[]; games?: any[]; articles?: any[] }) => {
		console.log('🔗 Starting All Relationships migration...');

		const results = [];

		try {
			// Event relationships
			if (args.events) {
				console.log('\n--- Event Relationships ---');

				// Process hosts
				let hostsCount = 0;
				for (const event of args.events) {
					const attrs = event.attributes;
					let convexEvent = await findConvexRecordByStrapiId(ctx, 'events', event.id);
					if (!convexEvent) {
						convexEvent = await findConvexRecord(ctx, 'events', 'slug', attrs.slug);
					}
					if (convexEvent && attrs.hosts?.data) {
						for (const hostData of attrs.hosts.data) {
							let player = await findConvexRecordByStrapiId(ctx, 'players', hostData.id);
							if (!player) {
								player = await findConvexRecord(ctx, 'players', 'slug', hostData.attributes?.slug);
							}
							if (player) {
								await ctx.db.insert('eventHosts', {
									eventId: convexEvent._id,
									playerId: player._id
								});
								hostsCount++;
							}
						}
					}
				}
				results.push({
					type: 'Event Hosts',
					success: true,
					message: `${hostsCount} hosts migrated`
				});

				// Process mentors
				let mentorsCount = 0;
				for (const event of args.events) {
					const attrs = event.attributes;
					let convexEvent = await findConvexRecordByStrapiId(ctx, 'events', event.id);
					if (!convexEvent) {
						convexEvent = await findConvexRecord(ctx, 'events', 'slug', attrs.slug);
					}
					if (convexEvent && attrs.mentors?.data) {
						for (const mentorData of attrs.mentors.data) {
							let player = await findConvexRecordByStrapiId(ctx, 'players', mentorData.id);
							if (!player) {
								player = await findConvexRecord(
									ctx,
									'players',
									'slug',
									mentorData.attributes?.slug
								);
							}
							if (player) {
								await ctx.db.insert('eventMentors', {
									eventId: convexEvent._id,
									playerId: player._id
								});
								mentorsCount++;
							}
						}
					}
				}
				results.push({
					type: 'Event Mentors',
					success: true,
					message: `${mentorsCount} mentors migrated`
				});

				// Process attendees
				let attendeesCount = 0;
				for (const event of args.events) {
					const attrs = event.attributes;
					let convexEvent = await findConvexRecordByStrapiId(ctx, 'events', event.id);
					if (!convexEvent) {
						convexEvent = await findConvexRecord(ctx, 'events', 'slug', attrs.slug);
					}
					if (convexEvent && attrs.players?.data) {
						for (const playerData of attrs.players.data) {
							let player = await findConvexRecordByStrapiId(ctx, 'players', playerData.id);
							if (!player) {
								player = await findConvexRecord(
									ctx,
									'players',
									'slug',
									playerData.attributes?.slug
								);
							}
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
				results.push({
					type: 'Event Attendees',
					success: true,
					message: `${attendeesCount} attendees migrated`
				});
			}

			// Game relationships
			if (args.games) {
				console.log('\n--- Game Relationships ---');

				// Process documenters
				let documentersCount = 0;
				for (const game of args.games) {
					const attrs = game.attributes;
					let convexGame = await findConvexRecordByStrapiId(ctx, 'games', game.id);
					if (!convexGame) {
						convexGame = await findConvexRecord(ctx, 'games', 'slug', attrs.slug);
					}
					if (convexGame && attrs.documentedBy?.data) {
						for (const documenterData of attrs.documentedBy.data) {
							let player = await findConvexRecordByStrapiId(ctx, 'players', documenterData.id);
							if (!player) {
								player = await findConvexRecord(
									ctx,
									'players',
									'slug',
									documenterData.attributes?.slug
								);
							}
							if (player) {
								await ctx.db.insert('gameDocumenters', {
									gameId: convexGame._id,
									playerId: player._id
								});
								documentersCount++;
							}
						}
					}
				}
				results.push({
					type: 'Game Documenters',
					success: true,
					message: `${documentersCount} documenters migrated`
				});

				// Process proposers
				let proposersCount = 0;
				for (const game of args.games) {
					const attrs = game.attributes;
					let convexGame = await findConvexRecordByStrapiId(ctx, 'games', game.id);
					if (!convexGame) {
						convexGame = await findConvexRecord(ctx, 'games', 'slug', attrs.slug);
					}
					if (convexGame && attrs.proposedBy?.data) {
						for (const proposerData of attrs.proposedBy.data) {
							let player = await findConvexRecordByStrapiId(ctx, 'players', proposerData.id);
							if (!player) {
								player = await findConvexRecord(
									ctx,
									'players',
									'slug',
									proposerData.attributes?.slug
								);
							}
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
				results.push({
					type: 'Game Proposers',
					success: true,
					message: `${proposersCount} proposers migrated`
				});
			}

			// Article relationships
			if (args.articles) {
				console.log('\n--- Article Relationships ---');

				// Process article tags
				let relationsCount = 0;
				for (const article of args.articles) {
					const attrs = article.attributes;
					let convexArticle = await findConvexRecordByStrapiId(ctx, 'articles', article.id);
					if (!convexArticle) {
						convexArticle = await findConvexRecord(ctx, 'articles', 'slug', attrs.slug);
					}
					if (convexArticle && attrs.tags?.data) {
						for (const tagData of attrs.tags.data) {
							let tag = await findConvexRecordByStrapiId(ctx, 'tags', tagData.id);
							if (!tag) {
								tag = await findConvexRecord(ctx, 'tags', 'value', tagData.attributes?.value);
							}
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
				results.push({
					type: 'Article Tags',
					success: true,
					message: `${relationsCount} article-tag relationships migrated`
				});
			}

			console.log('\n✅ All Relationships migration completed');
			console.log('Summary:');
			results.forEach((result) => {
				console.log(`  - ${result.type}: ${result.message}`);
			});

			return { success: true, results, message: `All relationships migrated successfully` };
		} catch (error) {
			console.error('❌ All Relationships migration failed:', error);
			throw error;
		}
	}
});
