import { convexTest } from 'convex-test';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import schema from '../convex/schema';
import {
	clearMigrationData,
	fetchStrapiData,
	getMigrationStatus,
	migrateEventsData,
	migrateGamesData,
	migratePlayersData,
	migrateSingleContentType,
	migrateSponsorsData,
	migrateTagsData
} from '../convex/strapiMigration';

// Mock fixtures for Strapi data
const mockStrapiData = {
	tags: {
		meta: { pagination: { total: 2 } },
		data: [
			{
				id: '1',
				attributes: {
					createdAt: '2024-01-01T00:00:00Z',
					updatedAt: '2024-01-01T00:00:00Z',
					name: 'Test Tag 1',
					slug: 'test-tag-1'
				}
			},
			{
				id: '2',
				attributes: {
					createdAt: '2024-01-02T00:00:00Z',
					updatedAt: '2024-01-02T00:00:00Z',
					name: 'Test Tag 2',
					slug: 'test-tag-2'
				}
			}
		]
	},
	expectations: {
		meta: { pagination: { total: 1 } },
		data: [
			{
				id: '1',
				attributes: {
					createdAt: '2024-01-01T00:00:00Z',
					updatedAt: '2024-01-01T00:00:00Z',
					title: 'Test Expectation',
					slug: 'test-expectation',
					description: 'Test description'
				}
			}
		]
	},
	players: {
		meta: { pagination: { total: 1 } },
		data: [
			{
				id: '1',
				attributes: {
					createdAt: '2024-01-01T00:00:00Z',
					updatedAt: '2024-01-01T00:00:00Z',
					name: 'Test Player',
					slug: 'test-player',
					email: 'test@example.com',
					verified: true,
					admin: false,
					enabled: true,
					photo: {
						data: {
							id: '10',
							attributes: {
								url: 'https://example.com/photo.jpg',
								name: 'photo.jpg',
								alternativeText: 'Player photo',
								caption: 'Test player',
								formats: {
									thumbnail: { url: 'https://example.com/photo-thumb.jpg' }
								}
							}
						}
					},
					location: {
						center: [2.3522, 48.8566], // Paris coordinates
						zoom: 10,
						pitch: 0,
						bearing: 0
					},
					bio: 'Test player bio',
					socialNetworks: {
						twitter: 'testplayer',
						linkedin: 'test-player',
						facebook: 'testplayer',
						website: 'https://testplayer.com'
					},
					positions: {
						player: true,
						mentor: false,
						organizer: false,
						sponsor: false
					}
				}
			}
		]
	},
	venues: {
		meta: { pagination: { total: 1 } },
		data: [
			{
				id: '1',
				attributes: {
					createdAt: '2024-01-01T00:00:00Z',
					updatedAt: '2024-01-01T00:00:00Z',
					name: 'Test Venue',
					slug: 'test-venue',
					description: 'A test venue',
					location: {
						type: 'Point',
						coordinates: [2.3522, 48.8566]
					},
					street1: '123 Test Street',
					city: 'Paris',
					zip: '75001',
					state: 'Île-de-France',
					country: 'France',
					contact: { email: 'venue@example.com' }
				}
			}
		]
	},
	sponsors: {
		meta: { pagination: { total: 1 } },
		data: [
			{
				id: '1',
				attributes: {
					createdAt: '2024-01-01T00:00:00Z',
					updatedAt: '2024-01-01T00:00:00Z',
					name: 'Test Sponsor',
					slug: 'test-sponsor',
					description: 'A test sponsor',
					website: 'https://sponsor.com',
					logo: {
						data: {
							id: '20',
							attributes: {
								url: 'https://example.com/logo.png',
								name: 'logo.png'
							}
						}
					}
				}
			}
		]
	},
	home: {
		data: {
			id: '1',
			attributes: {
				createdAt: '2024-01-01T00:00:00Z',
				updatedAt: '2024-01-01T00:00:00Z',
				message: 'Welcome to #play14',
				leftSide: {
					description: 'Left side content',
					button: { label: 'Learn More', link: '/about' },
					image: {
						data: {
							id: '30',
							attributes: {
								url: 'https://example.com/left.jpg',
								name: 'left.jpg'
							}
						}
					}
				},
				rightSide: {
					title: 'Right Side',
					description: 'Right side content',
					button: { label: 'Get Started', link: '/start' },
					image: {
						data: {
							id: '31',
							attributes: {
								url: 'https://example.com/right.jpg',
								name: 'right.jpg'
							}
						}
					}
				}
			}
		}
	},
	games: {
		meta: { pagination: { total: 1 } },
		data: [
			{
				id: '1',
				attributes: {
					createdAt: '2024-01-01T00:00:00Z',
					updatedAt: '2024-01-01T00:00:00Z',
					publishedAt: '2024-01-01T00:00:00Z',
					name: 'Test Game',
					slug: 'test-game',
					description: 'A test game',
					timing: { min: 30, max: 60 },
					participants: { min: 4, max: 8 },
					category: 'team',
					tags: { data: [{ id: '1' }] },
					players: { data: [{ id: '1' }] },
					ratings: {
						energy: 4,
						sharing: 3,
						thinking: 5
					},
					materials: {
						whiteboard: true,
						postits: true,
						paper: false,
						other: 'Markers'
					},
					safety: {
						level: 'low',
						comments: 'Very safe game'
					}
				}
			}
		]
	},
	articles: {
		meta: { pagination: { total: 1 } },
		data: [
			{
				id: '1',
				attributes: {
					createdAt: '2024-01-01T00:00:00Z',
					updatedAt: '2024-01-01T00:00:00Z',
					publishedAt: '2024-01-01T00:00:00Z',
					title: 'Test Article',
					slug: 'test-article',
					content: 'Article content here',
					author: { data: { id: '1' } },
					tags: { data: [{ id: '1' }] },
					category: 'blog',
					seo: {
						SEO: {
							Title: 'Test Article SEO',
							seoDescription: 'SEO description'
						}
					}
				}
			}
		]
	},
	events: {
		meta: { pagination: { total: 1 } },
		data: [
			{
				id: '1',
				attributes: {
					createdAt: '2024-01-01T00:00:00Z',
					updatedAt: '2024-01-01T00:00:00Z',
					publishedAt: '2024-01-01T00:00:00Z',
					name: 'Test Event',
					slug: 'test-event',
					description: 'A test event',
					start: '2024-06-01T09:00:00Z',
					end: '2024-06-02T17:00:00Z',
					eventLocation: { data: { id: '1' } },
					registrations: {
						players: { data: [{ id: '1' }] },
						mentors: { data: [] },
						sponsors: { data: [{ id: '1' }] }
					},
					timeSlots: [
						{
							day: 1,
							start: '09:00',
							end: '10:00',
							type: 'opening'
						}
					],
					timetables: [
						{
							day: 1,
							activities: [
								{
									start: '09:00',
									end: '10:00',
									activity: 'Opening',
									responsible: 'Organizer'
								}
							]
						}
					],
					media: {
						images: { data: [] },
						videos: { data: [] }
					},
					finance: {
						budget: 5000,
						expenses: [
							{
								item: 'Venue',
								amount: 1000,
								category: 'logistics'
							}
						]
					}
				}
			}
		]
	}
};

// Mock the fetch function
const mockFetch = vi.fn();
global.fetch = mockFetch;

describe('Strapi Migration Tests', () => {
	const t = convexTest(schema);

	beforeEach(() => {
		vi.clearAllMocks();
		mockFetch.mockReset();
	});

	describe('fetchStrapiData', () => {
		it('should fetch data from Strapi GraphQL API', async () => {
			const mockResponse = {
				data: {
					tags: mockStrapiData.tags
				}
			};

			mockFetch.mockResolvedValueOnce({
				ok: true,
				json: async () => mockResponse
			});

			await t.run(async (ctx) => {
				const result = await fetchStrapiData(ctx, { contentType: 'tags' });
				expect(result).toEqual(mockStrapiData.tags);
				expect(mockFetch).toHaveBeenCalledWith(
					expect.stringContaining('https://community.play14.org/graphql'),
					expect.objectContaining({
						method: 'POST',
						headers: expect.objectContaining({
							'Content-Type': 'application/json'
						})
					})
				);
			});
		});

		it('should handle fetch errors', async () => {
			mockFetch.mockResolvedValueOnce({
				ok: false,
				status: 500,
				statusText: 'Internal Server Error'
			});

			await t.run(async (ctx) => {
				await expect(fetchStrapiData(ctx, { contentType: 'tags' })).rejects.toThrow(
					'Failed to fetch from Strapi: 500 Internal Server Error'
				);
			});
		});
	});

	describe('Migration Functions', () => {
		describe('migrateTagsData', () => {
			it('should migrate tags successfully', async () => {
				await t.run(async (ctx) => {
					const result = await migrateTagsData(ctx, {
						strapiData: mockStrapiData.tags
					});

					expect(result.success).toBe(true);
					expect(result.migrated).toBe(2);
					expect(result.skipped).toBe(0);
					expect(result.errors).toBe(0);

					// Check if tags were created
					const tags = await ctx.db.query('tags').collect();
					expect(tags).toHaveLength(2);
					expect(tags[0].name).toBe('Test Tag 1');
					expect(tags[1].name).toBe('Test Tag 2');
				});
			});

			it('should skip existing tags', async () => {
				await t.run(async (ctx) => {
					// First migration
					await migrateTagsData(ctx, { strapiData: mockStrapiData.tags });

					// Second migration - should skip
					const result = await migrateTagsData(ctx, {
						strapiData: mockStrapiData.tags
					});

					expect(result.success).toBe(true);
					expect(result.migrated).toBe(0);
					expect(result.skipped).toBe(2);
					expect(result.errors).toBe(0);
				});
			});
		});

		describe('migratePlayersData', () => {
			it('should migrate players with files and location', async () => {
				// Mock file migration
				const mockRunAction = vi.fn().mockResolvedValue({
					fileId: 'mock-file-id'
				});

				await t.run(async (ctx) => {
					// Override runAction for file migration
					ctx.runAction = mockRunAction;

					const result = await migratePlayersData(ctx, {
						strapiData: mockStrapiData.players
					});

					expect(result.success).toBe(true);
					expect(result.migrated).toBe(1);

					// Check if player was created
					const players = await ctx.db.query('players').collect();
					expect(players).toHaveLength(1);
					expect(players[0].name).toBe('Test Player');
					expect(players[0].location).toEqual({
						type: 'Point',
						coordinates: [2.3522, 48.8566]
					});
					expect(players[0].photo).toBe('mock-file-id');
				});
			});
		});

		describe('migrateGamesData', () => {
			it('should migrate games with relationships', async () => {
				await t.run(async (ctx) => {
					// First migrate dependencies
					await migrateTagsData(ctx, { strapiData: mockStrapiData.tags });
					await migratePlayersData(ctx, { strapiData: mockStrapiData.players });

					// Then migrate games
					const result = await migrateGamesData(ctx, {
						strapiData: mockStrapiData.games
					});

					expect(result.success).toBe(true);
					expect(result.migrated).toBe(1);

					// Check if game was created with relationships
					const games = await ctx.db.query('games').collect();
					expect(games).toHaveLength(1);
					expect(games[0].name).toBe('Test Game');
					expect(games[0].tags).toHaveLength(1);
					expect(games[0].players).toHaveLength(1);
				});
			});
		});

		describe('migrateEventsData', () => {
			it('should migrate events with complex components', async () => {
				await t.run(async (ctx) => {
					// First migrate dependencies
					await migratePlayersData(ctx, { strapiData: mockStrapiData.players });
					await migrateSponsorsData(ctx, { strapiData: mockStrapiData.sponsors });

					// Mock event location
					await ctx.db.insert('eventLocations', {
						strapiId: '1',
						name: 'Test Location',
						slug: 'test-location',
						createdAt: new Date().toISOString(),
						updatedAt: new Date().toISOString()
					});

					// Migrate events
					const result = await migrateEventsData(ctx, {
						strapiData: mockStrapiData.events
					});

					expect(result.success).toBe(true);
					expect(result.migrated).toBe(1);

					// Check if event was created
					const events = await ctx.db.query('events').collect();
					expect(events).toHaveLength(1);
					expect(events[0].name).toBe('Test Event');
					expect(events[0].timeSlots).toHaveLength(1);
					expect(events[0].timetables).toHaveLength(1);
					expect(events[0].finance?.budget).toBe(5000);
				});
			});
		});
	});

	describe('Migration Status', () => {
		it('should track migration progress', async () => {
			await t.run(async (ctx) => {
				// Migrate some data
				await migrateTagsData(ctx, { strapiData: mockStrapiData.tags });

				// Check status
				const status = await getMigrationStatus(ctx, {});

				expect(status.tags.migrated).toBe(2);
				expect(status.tags.total).toBe(2);
				expect(status.players.migrated).toBe(0);
			});
		});
	});

	describe('Clear Migration Data', () => {
		it('should clear specific content type data', async () => {
			await t.run(async (ctx) => {
				// Migrate data
				await migrateTagsData(ctx, { strapiData: mockStrapiData.tags });

				// Verify data exists
				let tags = await ctx.db.query('tags').collect();
				expect(tags).toHaveLength(2);

				// Clear data
				const result = await clearMigrationData(ctx, { contentType: 'tags' });
				expect(result.deleted).toBe(2);

				// Verify data is gone
				tags = await ctx.db.query('tags').collect();
				expect(tags).toHaveLength(0);
			});
		});
	});

	describe('Single Content Type Migration', () => {
		it('should migrate a single content type end-to-end', async () => {
			mockFetch.mockResolvedValueOnce({
				ok: true,
				json: async () => ({ data: { tags: mockStrapiData.tags } })
			});

			await t.run(async (ctx) => {
				const result = await migrateSingleContentType(ctx, {
					contentType: 'tags'
				});

				expect(result.success).toBe(true);
				expect(result.message).toContain('Successfully migrated 2 tags');
				expect(result.details.migrated).toBe(2);
			});
		});

		it('should handle migration errors gracefully', async () => {
			mockFetch.mockRejectedValueOnce(new Error('Network error'));

			await t.run(async (ctx) => {
				const result = await migrateSingleContentType(ctx, {
					contentType: 'tags'
				});

				expect(result.success).toBe(false);
				expect(result.message).toContain('Failed to migrate tags');
				expect(result.error).toContain('Network error');
			});
		});
	});
});
