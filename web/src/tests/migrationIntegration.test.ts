import { convexTest } from 'convex-test';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import schema from '../convex/schema';
import { getMigrationStatus, migrateSingleContentType } from '../convex/strapiMigration';

// Mock fetch for all API calls
const mockFetch = vi.fn();
global.fetch = mockFetch;

describe('Migration Integration Tests', () => {
	const t = convexTest(schema);

	beforeEach(() => {
		vi.clearAllMocks();
		mockFetch.mockReset();
	});

	describe('Full Migration Workflow', () => {
		it('should migrate content types in correct dependency order', async () => {
			// Mock responses for each content type
			const mockResponses = {
				tags: {
					data: {
						tags: {
							meta: { pagination: { total: 2 } },
							data: [
								{ id: '1', attributes: { name: 'Tag 1', slug: 'tag-1' } },
								{ id: '2', attributes: { name: 'Tag 2', slug: 'tag-2' } }
							]
						}
					}
				},
				players: {
					data: {
						players: {
							meta: { pagination: { total: 1 } },
							data: [
								{
									id: '1',
									attributes: {
										name: 'Player 1',
										slug: 'player-1',
										email: 'player1@example.com'
									}
								}
							]
						}
					}
				},
				venues: {
					data: {
						venues: {
							meta: { pagination: { total: 1 } },
							data: [
								{
									id: '1',
									attributes: {
										name: 'Venue 1',
										slug: 'venue-1',
										city: 'Paris'
									}
								}
							]
						}
					}
				},
				sponsors: {
					data: {
						sponsors: {
							meta: { pagination: { total: 1 } },
							data: [
								{
									id: '1',
									attributes: {
										name: 'Sponsor 1',
										slug: 'sponsor-1'
									}
								}
							]
						}
					}
				},
				eventLocations: {
					data: {
						eventLocations: {
							meta: { pagination: { total: 1 } },
							data: [
								{
									id: '1',
									attributes: {
										name: 'Event Location 1',
										slug: 'event-location-1',
										venue: { data: { id: '1' } }
									}
								}
							]
						}
					}
				},
				games: {
					data: {
						games: {
							meta: { pagination: { total: 1 } },
							data: [
								{
									id: '1',
									attributes: {
										name: 'Game 1',
										slug: 'game-1',
										publishedAt: '2024-01-01T00:00:00Z',
										tags: { data: [{ id: '1' }] },
										players: { data: [{ id: '1' }] }
									}
								}
							]
						}
					}
				},
				articles: {
					data: {
						articles: {
							meta: { pagination: { total: 1 } },
							data: [
								{
									id: '1',
									attributes: {
										title: 'Article 1',
										slug: 'article-1',
										publishedAt: '2024-01-01T00:00:00Z',
										author: { data: { id: '1' } },
										tags: { data: [{ id: '1' }] }
									}
								}
							]
						}
					}
				},
				events: {
					data: {
						events: {
							meta: { pagination: { total: 1 } },
							data: [
								{
									id: '1',
									attributes: {
										name: 'Event 1',
										slug: 'event-1',
										publishedAt: '2024-01-01T00:00:00Z',
										start: '2024-06-01T09:00:00Z',
										end: '2024-06-02T17:00:00Z',
										eventLocation: { data: { id: '1' } },
										registrations: {
											players: { data: [{ id: '1' }] },
											sponsors: { data: [{ id: '1' }] }
										}
									}
								}
							]
						}
					}
				}
			};

			// Setup mock responses for each content type
			Object.entries(mockResponses).forEach(([, response]) => {
				mockFetch.mockResolvedValueOnce({
					ok: true,
					json: async () => response
				});
			});

			await t.run(async (ctx) => {
				// Define migration order based on dependencies
				const migrationOrder = [
					'tags', // No dependencies
					'players', // No dependencies
					'venues', // No dependencies
					'sponsors', // No dependencies
					'eventLocations', // Depends on venues
					'games', // Depends on tags, players
					'articles', // Depends on players (author), tags
					'events' // Depends on eventLocations, players, sponsors
				];

				const results = [];

				// Run migrations in order
				for (const contentType of migrationOrder) {
					const result = await migrateSingleContentType(ctx, { contentType });
					results.push({ contentType, ...result });
				}

				// Verify all migrations succeeded
				expect(results.every((r) => r.success)).toBe(true);

				// Verify data integrity
				const games = await ctx.db.query('games').collect();
				expect(games).toHaveLength(1);
				expect(games[0].tags).toHaveLength(1);
				expect(games[0].players).toHaveLength(1);

				const events = await ctx.db.query('events').collect();
				expect(events).toHaveLength(1);
				expect(events[0].eventLocation).toBeDefined();
				expect(events[0].registrations.players).toHaveLength(1);
				expect(events[0].registrations.sponsors).toHaveLength(1);

				// Check final migration status
				const status = await getMigrationStatus(ctx, {});
				expect(status.tags.migrated).toBe(2);
				expect(status.players.migrated).toBe(1);
				expect(status.venues.migrated).toBe(1);
				expect(status.sponsors.migrated).toBe(1);
				expect(status.eventLocations.migrated).toBe(1);
				expect(status.games.migrated).toBe(1);
				expect(status.articles.migrated).toBe(1);
				expect(status.events.migrated).toBe(1);
			});
		});

		it('should handle partial migration failures gracefully', async () => {
			// Setup: tags succeed, players fail, rest should not proceed
			mockFetch
				.mockResolvedValueOnce({
					ok: true,
					json: async () => ({
						data: {
							tags: {
								meta: { pagination: { total: 1 } },
								data: [{ id: '1', attributes: { name: 'Tag 1', slug: 'tag-1' } }]
							}
						}
					})
				})
				.mockRejectedValueOnce(new Error('Network error for players'));

			await t.run(async (ctx) => {
				// Migrate tags - should succeed
				const tagsResult = await migrateSingleContentType(ctx, { contentType: 'tags' });
				expect(tagsResult.success).toBe(true);

				// Migrate players - should fail
				const playersResult = await migrateSingleContentType(ctx, { contentType: 'players' });
				expect(playersResult.success).toBe(false);
				expect(playersResult.error).toContain('Network error');

				// Check that tags were migrated but players were not
				const status = await getMigrationStatus(ctx, {});
				expect(status.tags.migrated).toBe(1);
				expect(status.players.migrated).toBe(0);
			});
		});

		it('should maintain relationship integrity across migrations', async () => {
			// Mock interconnected data
			const complexData = {
				players: {
					data: {
						players: {
							meta: { pagination: { total: 2 } },
							data: [
								{ id: '1', attributes: { name: 'Author', slug: 'author' } },
								{ id: '2', attributes: { name: 'Participant', slug: 'participant' } }
							]
						}
					}
				},
				tags: {
					data: {
						tags: {
							meta: { pagination: { total: 3 } },
							data: [
								{ id: '1', attributes: { name: 'Innovation', slug: 'innovation' } },
								{ id: '2', attributes: { name: 'Team', slug: 'team' } },
								{ id: '3', attributes: { name: 'Agile', slug: 'agile' } }
							]
						}
					}
				},
				games: {
					data: {
						games: {
							meta: { pagination: { total: 2 } },
							data: [
								{
									id: '1',
									attributes: {
										name: 'Game A',
										slug: 'game-a',
										publishedAt: '2024-01-01T00:00:00Z',
										tags: { data: [{ id: '1' }, { id: '2' }] },
										players: { data: [{ id: '1' }] }
									}
								},
								{
									id: '2',
									attributes: {
										name: 'Game B',
										slug: 'game-b',
										publishedAt: '2024-01-01T00:00:00Z',
										tags: { data: [{ id: '2' }, { id: '3' }] },
										players: { data: [{ id: '2' }] }
									}
								}
							]
						}
					}
				},
				articles: {
					data: {
						articles: {
							meta: { pagination: { total: 2 } },
							data: [
								{
									id: '1',
									attributes: {
										title: 'Article about Game A',
										slug: 'article-game-a',
										publishedAt: '2024-01-01T00:00:00Z',
										author: { data: { id: '1' } },
										tags: { data: [{ id: '1' }, { id: '3' }] }
									}
								},
								{
									id: '2',
									attributes: {
										title: 'Article about Game B',
										slug: 'article-game-b',
										publishedAt: '2024-01-01T00:00:00Z',
										author: { data: { id: '2' } },
										tags: { data: [{ id: '2' }] }
									}
								}
							]
						}
					}
				}
			};

			// Setup mock responses
			Object.entries(complexData).forEach(([, response]) => {
				mockFetch.mockResolvedValueOnce({
					ok: true,
					json: async () => response
				});
			});

			await t.run(async (ctx) => {
				// Migrate in dependency order
				await migrateSingleContentType(ctx, { contentType: 'players' });
				await migrateSingleContentType(ctx, { contentType: 'tags' });
				await migrateSingleContentType(ctx, { contentType: 'games' });
				await migrateSingleContentType(ctx, { contentType: 'articles' });

				// Verify relationships are maintained
				const games = await ctx.db.query('games').collect();
				expect(games).toHaveLength(2);

				// Game A should have 2 tags and 1 player
				const gameA = games.find((g) => g.slug === 'game-a');
				expect(gameA?.tags).toHaveLength(2);
				expect(gameA?.players).toHaveLength(1);

				// Game B should have 2 tags and 1 player
				const gameB = games.find((g) => g.slug === 'game-b');
				expect(gameB?.tags).toHaveLength(2);
				expect(gameB?.players).toHaveLength(1);

				// Articles should have correct authors and tags
				const articles = await ctx.db.query('articles').collect();
				expect(articles).toHaveLength(2);

				const article1 = articles.find((a) => a.slug === 'article-game-a');
				expect(article1?.author).toBeDefined();
				expect(article1?.tags).toHaveLength(2);

				const article2 = articles.find((a) => a.slug === 'article-game-b');
				expect(article2?.author).toBeDefined();
				expect(article2?.tags).toHaveLength(1);

				// Verify all relationships point to valid entities
				const players = await ctx.db.query('players').collect();
				const tags = await ctx.db.query('tags').collect();

				expect(players).toHaveLength(2);
				expect(tags).toHaveLength(3);
			});
		});
	});

	describe('Migration Idempotency', () => {
		it('should handle repeated migrations safely', async () => {
			const mockData = {
				data: {
					tags: {
						meta: { pagination: { total: 2 } },
						data: [
							{ id: '1', attributes: { name: 'Tag 1', slug: 'tag-1' } },
							{ id: '2', attributes: { name: 'Tag 2', slug: 'tag-2' } }
						]
					}
				}
			};

			// Mock same response twice
			mockFetch
				.mockResolvedValueOnce({ ok: true, json: async () => mockData })
				.mockResolvedValueOnce({ ok: true, json: async () => mockData });

			await t.run(async (ctx) => {
				// First migration
				const result1 = await migrateSingleContentType(ctx, { contentType: 'tags' });
				expect(result1.success).toBe(true);
				expect(result1.details.migrated).toBe(2);
				expect(result1.details.skipped).toBe(0);

				// Second migration - should skip existing
				const result2 = await migrateSingleContentType(ctx, { contentType: 'tags' });
				expect(result2.success).toBe(true);
				expect(result2.details.migrated).toBe(0);
				expect(result2.details.skipped).toBe(2);

				// Verify we still have only 2 tags
				const tags = await ctx.db.query('tags').collect();
				expect(tags).toHaveLength(2);
			});
		});
	});

	describe('Performance Tests', () => {
		it('should handle large datasets efficiently', async () => {
			// Generate large dataset
			const largeDataset = {
				data: {
					tags: {
						meta: { pagination: { total: 1000 } },
						data: Array.from({ length: 1000 }, (_, i) => ({
							id: `${i + 1}`,
							attributes: {
								name: `Tag ${i + 1}`,
								slug: `tag-${i + 1}`,
								createdAt: '2024-01-01T00:00:00Z',
								updatedAt: '2024-01-01T00:00:00Z'
							}
						}))
					}
				}
			};

			mockFetch.mockResolvedValueOnce({
				ok: true,
				json: async () => largeDataset
			});

			await t.run(async (ctx) => {
				const startTime = Date.now();

				const result = await migrateSingleContentType(ctx, { contentType: 'tags' });

				const endTime = Date.now();
				const duration = endTime - startTime;

				expect(result.success).toBe(true);
				expect(result.details.migrated).toBe(1000);

				// Should complete within reasonable time (adjust as needed)
				expect(duration).toBeLessThan(30000); // 30 seconds

				// Verify all data was migrated
				const tags = await ctx.db.query('tags').collect();
				expect(tags).toHaveLength(1000);
			});
		});
	});
});
