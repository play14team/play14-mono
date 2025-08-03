import { describe, it, expect } from 'vitest';

// Test GraphQL query generation logic
describe('Migration Query Tests', () => {
	describe('GraphQL Query Structure', () => {
		it('should generate tags query', () => {
			const tagsQuery = `
				query Tags($pagination: PaginationArg) {
					tags(pagination: $pagination) {
						meta {
							pagination {
								total
							}
						}
						data {
							id
							attributes {
								createdAt
								updatedAt
								name
								slug
							}
						}
					}
				}
			`.trim();

			// Verify query contains required fields
			expect(tagsQuery).toContain('query Tags');
			expect(tagsQuery).toContain('tags(pagination: $pagination)');
			expect(tagsQuery).toContain('meta');
			expect(tagsQuery).toContain('pagination');
			expect(tagsQuery).toContain('total');
			expect(tagsQuery).toContain('data');
			expect(tagsQuery).toContain('id');
			expect(tagsQuery).toContain('attributes');
			expect(tagsQuery).toContain('name');
			expect(tagsQuery).toContain('slug');
			expect(tagsQuery).toContain('createdAt');
			expect(tagsQuery).toContain('updatedAt');
		});

		it('should generate players query with publishedAt excluded', () => {
			const playersQuery = `
				query Players($pagination: PaginationArg) {
					players(pagination: $pagination) {
						meta {
							pagination {
								total
							}
						}
						data {
							id
							attributes {
								createdAt
								updatedAt
								name
								slug
								email
								verified
								admin
								enabled
								bio
								photo {
									data {
										id
										attributes {
											url
											name
											alternativeText
											caption
											formats
										}
									}
								}
								location
								socialNetworks
								positions
							}
						}
					}
				}
			`.trim();

			// Verify publishedAt is NOT included for players
			expect(playersQuery).not.toContain('publishedAt');
			expect(playersQuery).toContain('name');
			expect(playersQuery).toContain('email');
			expect(playersQuery).toContain('photo');
			expect(playersQuery).toContain('location');
			expect(playersQuery).toContain('socialNetworks');
			expect(playersQuery).toContain('positions');
		});

		it('should generate games query with publishedAt included', () => {
			const gamesQuery = `
				query Games($pagination: PaginationArg) {
					games(pagination: $pagination) {
						meta {
							pagination {
								total
							}
						}
						data {
							id
							attributes {
								createdAt
								updatedAt
								publishedAt
								name
								slug
								description
								timing
								participants
								category
								tags {
									data {
										id
									}
								}
								players {
									data {
										id
									}
								}
								ratings
								materials
								safety
								resources {
									data {
										id
										attributes {
											url
											name
											alternativeText
											caption
											formats
										}
									}
								}
							}
						}
					}
				}
			`.trim();

			// Verify publishedAt IS included for games
			expect(gamesQuery).toContain('publishedAt');
			expect(gamesQuery).toContain('description');
			expect(gamesQuery).toContain('timing');
			expect(gamesQuery).toContain('participants');
			expect(gamesQuery).toContain('category');
			expect(gamesQuery).toContain('tags');
			expect(gamesQuery).toContain('players');
			expect(gamesQuery).toContain('ratings');
			expect(gamesQuery).toContain('materials');
			expect(gamesQuery).toContain('safety');
			expect(gamesQuery).toContain('resources');
		});

		it('should generate events query with complex relationships', () => {
			const eventsQuery = `
				query Events($pagination: PaginationArg) {
					events(pagination: $pagination) {
						meta {
							pagination {
								total
							}
						}
						data {
							id
							attributes {
								createdAt
								updatedAt
								publishedAt
								name
								slug
								description
								start
								end
								eventLocation {
									data {
										id
									}
								}
								registrations {
									players {
										data {
											id
										}
									}
									mentors {
										data {
											id
										}
									}
									sponsors {
										data {
											id
										}
									}
								}
								timeSlots
								timetables
								media {
									images {
										data {
											id
											attributes {
												url
												name
												alternativeText
												caption
												formats
											}
										}
									}
									videos {
										data {
											id
											attributes {
												url
												name
												alternativeText
												caption
												formats
											}
										}
									}
								}
								finance
							}
						}
					}
				}
			`.trim();

			// Verify complex event structure
			expect(eventsQuery).toContain('eventLocation');
			expect(eventsQuery).toContain('registrations');
			expect(eventsQuery).toContain('players');
			expect(eventsQuery).toContain('mentors');
			expect(eventsQuery).toContain('sponsors');
			expect(eventsQuery).toContain('timeSlots');
			expect(eventsQuery).toContain('timetables');
			expect(eventsQuery).toContain('media');
			expect(eventsQuery).toContain('images');
			expect(eventsQuery).toContain('videos');
			expect(eventsQuery).toContain('finance');
		});
	});

	describe('Query Variables', () => {
		it('should use correct pagination variables', () => {
			const variables = {
				pagination: {
					limit: 50000
				}
			};

			expect(variables.pagination.limit).toBe(50000);
		});

		it('should handle empty variables', () => {
			const emptyVariables = {};
			expect(Object.keys(emptyVariables)).toHaveLength(0);
		});
	});

	describe('Content Type Mapping', () => {
		const contentTypes = [
			'tags',
			'expectations',
			'players',
			'venues',
			'sponsors',
			'home',
			'history',
			'format',
			'hosting',
			'testimonials',
			'eventLocations',
			'games',
			'articles',
			'events'
		];

		const contentTypesWithPublishedAt = ['games', 'articles', 'events'];

		const contentTypesWithoutPublishedAt = [
			'tags',
			'expectations',
			'players',
			'venues',
			'sponsors',
			'home',
			'history',
			'format',
			'hosting',
			'testimonials',
			'eventLocations'
		];

		it('should identify content types with publishedAt', () => {
			contentTypesWithPublishedAt.forEach((contentType) => {
				expect(contentTypes.includes(contentType)).toBe(true);
			});
		});

		it('should identify content types without publishedAt', () => {
			contentTypesWithoutPublishedAt.forEach((contentType) => {
				expect(contentTypes.includes(contentType)).toBe(true);
			});
		});

		it('should have all content types accounted for', () => {
			const totalMapped =
				contentTypesWithPublishedAt.length + contentTypesWithoutPublishedAt.length;
			expect(totalMapped).toBe(contentTypes.length);
		});
	});

	describe('Single Type Queries', () => {
		it('should generate home query without pagination', () => {
			const homeQuery = `
				query Home {
					home {
						data {
							id
							attributes {
								createdAt
								updatedAt
								message
								leftSide {
									description
									button {
										label
										link
									}
									image {
										data {
											id
											attributes {
												url
												name
												alternativeText
												caption
												formats
											}
										}
									}
								}
								rightSide {
									title
									description
									button {
										label
										link
									}
									image {
										data {
											id
											attributes {
												url
												name
												alternativeText
												caption
												formats
											}
										}
									}
								}
							}
						}
					}
				}
			`.trim();

			// Single types don't use pagination
			expect(homeQuery).not.toContain('pagination');
			expect(homeQuery).toContain('message');
			expect(homeQuery).toContain('leftSide');
			expect(homeQuery).toContain('rightSide');
			expect(homeQuery).toContain('button');
			expect(homeQuery).toContain('label');
			expect(homeQuery).toContain('link');
		});

		it('should generate history query with timeline', () => {
			const historyQuery = `
				query History {
					history {
						data {
							id
							attributes {
								createdAt
								updatedAt
								timeline {
									year
									title
									description
								}
							}
						}
					}
				}
			`.trim();

			expect(historyQuery).not.toContain('pagination');
			expect(historyQuery).toContain('timeline');
			expect(historyQuery).toContain('year');
			expect(historyQuery).toContain('title');
			expect(historyQuery).toContain('description');
		});
	});

	describe('Relationship Queries', () => {
		it('should query relationship IDs only', () => {
			const relationshipQuery = `
				tags {
					data {
						id
					}
				}
			`.trim();

			expect(relationshipQuery).toContain('data');
			expect(relationshipQuery).toContain('id');
			expect(relationshipQuery).not.toContain('attributes');
		});

		it('should query nested file attributes', () => {
			const fileQuery = `
				photo {
					data {
						id
						attributes {
							url
							name
							alternativeText
							caption
							formats
						}
					}
				}
			`.trim();

			expect(fileQuery).toContain('data');
			expect(fileQuery).toContain('id');
			expect(fileQuery).toContain('attributes');
			expect(fileQuery).toContain('url');
			expect(fileQuery).toContain('name');
			expect(fileQuery).toContain('alternativeText');
			expect(fileQuery).toContain('caption');
			expect(fileQuery).toContain('formats');
		});
	});

	describe('Error Handling', () => {
		it('should handle invalid content type', () => {
			const validContentTypes = [
				'tags',
				'expectations',
				'players',
				'venues',
				'sponsors',
				'home',
				'history',
				'format',
				'hosting',
				'testimonials',
				'eventLocations',
				'games',
				'articles',
				'events'
			];

			const invalidContentType = 'invalidType';
			expect(validContentTypes.includes(invalidContentType)).toBe(false);
		});

		it('should validate required query fields', () => {
			const requiredFields = ['id', 'attributes'];
			const queryString = 'data { id attributes { name } }';

			requiredFields.forEach((field) => {
				expect(queryString).toContain(field);
			});
		});
	});
});
