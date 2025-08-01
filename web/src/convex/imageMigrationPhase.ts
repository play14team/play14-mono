import { action } from './_generated/server';
import { v } from 'convex/values';
import type { ActionCtx } from './_generated/server';
import { api } from './_generated/api';

// Image migration for Events
export const migrateEventImages = action({
	args: { events: v.array(v.any()), strapiApiUrl: v.optional(v.string()) },
	handler: async (
		ctx: ActionCtx,
		{ events, strapiApiUrl = 'https://community.play14.org' }
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	): Promise<{ success: boolean; message: string; details: any }> => {
		console.log('🖼️ Starting Events Image Migration...');

		try {
			const results = await ctx.runAction(api.imageMigrationActions.migrateBatchImages, {
				contentItems: events,
				contentType: 'events',
				strapiApiUrl
			});

			// Now update the event records with the image IDs
			let updatedCount = 0;
			for (const result of results.batchResults) {
				if (result.defaultImageId || result.imageIds.length > 0) {
					// Find the event in Convex by strapiId
					const eventRecord = await ctx.runQuery(api.events.getByStrapiId, {
						strapiId: result.contentId
					});

					if (eventRecord) {
						// Update the event with image IDs
						await ctx.runMutation(api.events.updateImages, {
							eventId: eventRecord._id,
							defaultImageId: result.defaultImageId,
							imageIds: result.imageIds
						});
						updatedCount++;
						console.log(
							`✅ Updated event images: ${result.contentName} (${result.totalUploaded} images)`
						);
					} else {
						console.log(`⚠️ Event not found for image update: ${result.contentName}`);
					}
				}
			}

			console.log(
				`🎉 Events Image Migration completed: ${results.summary.totalUploaded} images across ${updatedCount} events`
			);
			return {
				success: true,
				message: `${results.summary.totalUploaded} event images migrated, ${updatedCount} events updated`,
				details: results.summary
			};
		} catch (error) {
			console.error('❌ Events Image Migration failed:', error);
			throw error;
		}
	}
});

// Image migration for Games
export const migrateGameImages = action({
	args: { games: v.array(v.any()), strapiApiUrl: v.optional(v.string()) },
	handler: async (
		ctx: ActionCtx,
		{ games, strapiApiUrl = 'https://community.play14.org' }
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	): Promise<{ success: boolean; message: string; details: any }> => {
		console.log('🎮 Starting Games Image Migration...');

		try {
			const results = await ctx.runAction(api.imageMigrationActions.migrateBatchImages, {
				contentItems: games,
				contentType: 'games',
				strapiApiUrl
			});

			// Update game records with image IDs
			let updatedCount = 0;
			for (const result of results.batchResults) {
				if (result.defaultImageId || result.imageIds.length > 0) {
					const gameRecord = await ctx.runQuery(api.games.getByStrapiId, {
						strapiId: result.contentId
					});

					if (gameRecord) {
						await ctx.runMutation(api.games.updateImages, {
							gameId: gameRecord._id,
							defaultImageId: result.defaultImageId,
							imageIds: result.imageIds
						});
						updatedCount++;
						console.log(
							`✅ Updated game images: ${result.contentName} (${result.totalUploaded} images)`
						);
					} else {
						console.log(`⚠️ Game not found for image update: ${result.contentName}`);
					}
				}
			}

			console.log(
				`🎉 Games Image Migration completed: ${results.summary.totalUploaded} images across ${updatedCount} games`
			);
			return {
				success: true,
				message: `${results.summary.totalUploaded} game images migrated, ${updatedCount} games updated`,
				details: results.summary
			};
		} catch (error) {
			console.error('❌ Games Image Migration failed:', error);
			throw error;
		}
	}
});

// Image migration for Players
export const migratePlayerImages = action({
	args: { players: v.array(v.any()), strapiApiUrl: v.optional(v.string()) },
	handler: async (
		ctx: ActionCtx,
		{ players, strapiApiUrl = 'https://community.play14.org' }
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	): Promise<{ success: boolean; message: string; details: any }> => {
		console.log('👤 Starting Players Image Migration...');

		try {
			const results = await ctx.runAction(api.imageMigrationActions.migrateBatchImages, {
				contentItems: players,
				contentType: 'players',
				strapiApiUrl
			});

			// Update player records with image IDs
			let updatedCount = 0;
			for (const result of results.batchResults) {
				if (result.defaultImageId) {
					const playerRecord = await ctx.runQuery(api.players.getByStrapiId, {
						strapiId: result.contentId
					});

					if (playerRecord) {
						await ctx.runMutation(api.players.updatePhoto, {
							playerId: playerRecord._id,
							photoId: result.defaultImageId
						});
						updatedCount++;
						console.log(`✅ Updated player photo: ${result.contentName}`);
					} else {
						console.log(`⚠️ Player not found for photo update: ${result.contentName}`);
					}
				}
			}

			console.log(
				`🎉 Players Image Migration completed: ${results.summary.totalUploaded} photos across ${updatedCount} players`
			);
			return {
				success: true,
				message: `${results.summary.totalUploaded} player photos migrated, ${updatedCount} players updated`,
				details: results.summary
			};
		} catch (error) {
			console.error('❌ Players Image Migration failed:', error);
			throw error;
		}
	}
});

// Image migration for Articles
export const migrateArticleImages = action({
	args: { articles: v.array(v.any()), strapiApiUrl: v.optional(v.string()) },
	handler: async (
		ctx: ActionCtx,
		{ articles, strapiApiUrl = 'https://community.play14.org' }
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	): Promise<{ success: boolean; message: string; details: any }> => {
		console.log('📰 Starting Articles Image Migration...');

		try {
			const results = await ctx.runAction(api.imageMigrationActions.migrateBatchImages, {
				contentItems: articles,
				contentType: 'articles',
				strapiApiUrl
			});

			// Update article records with image IDs
			let updatedCount = 0;
			for (const result of results.batchResults) {
				if (result.defaultImageId || result.imageIds.length > 0) {
					const articleRecord = await ctx.runQuery(api.articles.getByStrapiId, {
						strapiId: result.contentId
					});

					if (articleRecord) {
						await ctx.runMutation(api.articles.updateImages, {
							articleId: articleRecord._id,
							defaultImageId: result.defaultImageId,
							imageIds: result.imageIds
						});
						updatedCount++;
						console.log(
							`✅ Updated article images: ${result.contentName} (${result.totalUploaded} images)`
						);
					} else {
						console.log(`⚠️ Article not found for image update: ${result.contentName}`);
					}
				}
			}

			console.log(
				`🎉 Articles Image Migration completed: ${results.summary.totalUploaded} images across ${updatedCount} articles`
			);
			return {
				success: true,
				message: `${results.summary.totalUploaded} article images migrated, ${updatedCount} articles updated`,
				details: results.summary
			};
		} catch (error) {
			console.error('❌ Articles Image Migration failed:', error);
			throw error;
		}
	}
});
