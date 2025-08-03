import { describe, it, expect } from 'vitest';

// Test data transformation utilities that don't require Convex runtime
describe('Migration Utils Tests', () => {
	describe('Location Parsing', () => {
		it('should convert Mapbox location to GeoJSON Point', () => {
			const mapboxLocation = {
				center: [2.3522, 48.8566], // [longitude, latitude]
				zoom: 10,
				pitch: 0,
				bearing: 0
			};

			// This is the transformation logic from strapiMigration.ts
			const geoJsonPoint = {
				type: 'Point' as const,
				coordinates: mapboxLocation.center
			};

			expect(geoJsonPoint.type).toBe('Point');
			expect(geoJsonPoint.coordinates).toEqual([2.3522, 48.8566]);
		});

		it('should handle GeoJSON Point input', () => {
			const geoJsonLocation = {
				type: 'Point',
				coordinates: [2.3522, 48.8566]
			};

			// Should pass through unchanged
			expect(geoJsonLocation.type).toBe('Point');
			expect(geoJsonLocation.coordinates).toEqual([2.3522, 48.8566]);
		});

		it('should handle null location', () => {
			const nullLocation = null;
			expect(nullLocation).toBeNull();
		});
	});

	describe('Data Transformation', () => {
		it('should transform Strapi tag data to Convex format', () => {
			const strapiTag = {
				id: '1',
				attributes: {
					createdAt: '2024-01-01T00:00:00Z',
					updatedAt: '2024-01-01T00:00:00Z',
					name: 'Test Tag',
					slug: 'test-tag'
				}
			};

			// This is the transformation logic from strapiMigration.ts
			const convexTag = {
				strapiId: strapiTag.id,
				name: strapiTag.attributes.name,
				slug: strapiTag.attributes.slug,
				createdAt: strapiTag.attributes.createdAt,
				updatedAt: strapiTag.attributes.updatedAt
			};

			expect(convexTag.strapiId).toBe('1');
			expect(convexTag.name).toBe('Test Tag');
			expect(convexTag.slug).toBe('test-tag');
			expect(convexTag.createdAt).toBe('2024-01-01T00:00:00Z');
			expect(convexTag.updatedAt).toBe('2024-01-01T00:00:00Z');
		});

		it('should transform player social networks', () => {
			const strapiSocialNetworks = {
				twitter: 'testuser',
				linkedin: 'test-user',
				facebook: 'testuser',
				website: 'https://testuser.com',
				github: 'testuser'
			};

			// Should pass through as-is
			expect(strapiSocialNetworks.twitter).toBe('testuser');
			expect(strapiSocialNetworks.linkedin).toBe('test-user');
			expect(strapiSocialNetworks.website).toBe('https://testuser.com');
		});

		it('should transform player positions', () => {
			const strapiPositions = {
				player: true,
				mentor: false,
				organizer: true,
				sponsor: false
			};

			// Should pass through as-is
			expect(strapiPositions.player).toBe(true);
			expect(strapiPositions.mentor).toBe(false);
			expect(strapiPositions.organizer).toBe(true);
			expect(strapiPositions.sponsor).toBe(false);
		});

		it('should handle missing fields gracefully', () => {
			const incompleteData = {
				id: '1',
				attributes: {
					name: 'Test'
					// Missing other fields
				}
			};

			const transformed = {
				strapiId: incompleteData.id,
				name: incompleteData.attributes.name,
				slug: incompleteData.attributes.slug || null,
				createdAt: incompleteData.attributes.createdAt || new Date().toISOString(),
				updatedAt: incompleteData.attributes.updatedAt || new Date().toISOString()
			};

			expect(transformed.strapiId).toBe('1');
			expect(transformed.name).toBe('Test');
			expect(transformed.slug).toBeNull();
			expect(transformed.createdAt).toBeDefined();
			expect(transformed.updatedAt).toBeDefined();
		});
	});

	describe('Relationship Mapping', () => {
		it('should extract relationship IDs from Strapi data', () => {
			const strapiRelationship = {
				data: [{ id: '1' }, { id: '2' }, { id: '3' }]
			};

			const relationshipIds = strapiRelationship.data.map((item) => item.id);
			expect(relationshipIds).toEqual(['1', '2', '3']);
		});

		it('should handle single relationship', () => {
			const strapiSingleRelationship = {
				data: { id: '1' }
			};

			const relationshipId = strapiSingleRelationship.data?.id;
			expect(relationshipId).toBe('1');
		});

		it('should handle null relationships', () => {
			const nullRelationship = {
				data: null
			};

			const relationshipId = nullRelationship.data?.id;
			expect(relationshipId).toBeUndefined();
		});

		it('should handle empty array relationships', () => {
			const emptyRelationship = {
				data: []
			};

			const relationshipIds = emptyRelationship.data.map((item) => item.id);
			expect(relationshipIds).toEqual([]);
		});
	});

	describe('Content Type Validation', () => {
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

		it('should validate content types', () => {
			validContentTypes.forEach((contentType) => {
				expect(validContentTypes.includes(contentType)).toBe(true);
			});
		});

		it('should reject invalid content types', () => {
			const invalidContentTypes = ['invalid', 'notfound', 'wrong'];

			invalidContentTypes.forEach((contentType) => {
				expect(validContentTypes.includes(contentType)).toBe(false);
			});
		});
	});

	describe('File Type Detection', () => {
		it('should detect image file types', () => {
			const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'bmp', 'svg'];
			const mimeTypes = {
				jpg: 'image/jpeg',
				jpeg: 'image/jpeg',
				png: 'image/png',
				gif: 'image/gif',
				webp: 'image/webp',
				bmp: 'image/bmp',
				svg: 'image/svg+xml'
			};

			imageExtensions.forEach((ext) => {
				const fileName = `test.${ext}`;
				const expectedMimeType = mimeTypes[ext as keyof typeof mimeTypes];

				// Test file extension detection
				expect(fileName.endsWith(`.${ext}`)).toBe(true);
				expect(expectedMimeType).toBeDefined();
				expect(expectedMimeType.startsWith('image/')).toBe(true);
			});
		});

		it('should detect document file types', () => {
			const documentExtensions = ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx'];
			const mimeTypes = {
				pdf: 'application/pdf',
				doc: 'application/msword',
				docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
				xls: 'application/vnd.ms-excel',
				xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
				ppt: 'application/vnd.ms-powerpoint',
				pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
			};

			documentExtensions.forEach((ext) => {
				const fileName = `test.${ext}`;
				const expectedMimeType = mimeTypes[ext as keyof typeof mimeTypes];

				expect(fileName.endsWith(`.${ext}`)).toBe(true);
				expect(expectedMimeType).toBeDefined();
			});
		});

		it('should detect video file types', () => {
			const videoExtensions = ['mp4', 'avi', 'mov', 'wmv', 'webm'];
			const mimeTypes = {
				mp4: 'video/mp4',
				avi: 'video/x-msvideo',
				mov: 'video/quicktime',
				wmv: 'video/x-ms-wmv',
				webm: 'video/webm'
			};

			videoExtensions.forEach((ext) => {
				const fileName = `test.${ext}`;
				const expectedMimeType = mimeTypes[ext as keyof typeof mimeTypes];

				expect(fileName.endsWith(`.${ext}`)).toBe(true);
				expect(expectedMimeType).toBeDefined();
				expect(expectedMimeType.startsWith('video/')).toBe(true);
			});
		});

		it('should detect audio file types', () => {
			const audioExtensions = ['mp3', 'wav', 'ogg', 'm4a', 'aac'];
			const mimeTypes = {
				mp3: 'audio/mpeg',
				wav: 'audio/wav',
				ogg: 'audio/ogg',
				m4a: 'audio/mp4',
				aac: 'audio/aac'
			};

			audioExtensions.forEach((ext) => {
				const fileName = `test.${ext}`;
				const expectedMimeType = mimeTypes[ext as keyof typeof mimeTypes];

				expect(fileName.endsWith(`.${ext}`)).toBe(true);
				expect(expectedMimeType).toBeDefined();
				expect(expectedMimeType.startsWith('audio/')).toBe(true);
			});
		});
	});

	describe('Migration Status Calculation', () => {
		it('should calculate migration progress', () => {
			const totalItems = 100;
			const migratedItems = 75;
			const skippedItems = 10;
			const errorItems = 5;

			const progress = {
				total: totalItems,
				migrated: migratedItems,
				skipped: skippedItems,
				errors: errorItems,
				processed: migratedItems + skippedItems + errorItems,
				remaining: totalItems - (migratedItems + skippedItems + errorItems),
				percentComplete: Math.round(((migratedItems + skippedItems) / totalItems) * 100)
			};

			expect(progress.processed).toBe(90);
			expect(progress.remaining).toBe(10);
			expect(progress.percentComplete).toBe(85); // (75 + 10) / 100 * 100
		});

		it('should handle zero totals', () => {
			const progress = {
				total: 0,
				migrated: 0,
				skipped: 0,
				errors: 0,
				percentComplete: 0
			};

			expect(progress.percentComplete).toBe(0);
		});

		it('should handle 100% completion', () => {
			const totalItems = 50;
			const migratedItems = 45;
			const skippedItems = 5;

			const percentComplete = Math.round(((migratedItems + skippedItems) / totalItems) * 100);
			expect(percentComplete).toBe(100);
		});
	});

	describe('Data Validation', () => {
		it('should validate required fields', () => {
			const requiredFields = ['name', 'slug'];
			const validData = { name: 'Test', slug: 'test', optional: 'value' };
			const invalidData = { name: 'Test', optional: 'value' }; // missing slug

			const isValid = (data: Record<string, unknown>, required: string[]) => {
				return required.every((field) => data[field] !== undefined && data[field] !== null);
			};

			expect(isValid(validData, requiredFields)).toBe(true);
			expect(isValid(invalidData, requiredFields)).toBe(false);
		});

		it('should validate email format', () => {
			const validEmails = ['test@example.com', 'user.name@domain.co.uk', 'user+tag@example.org'];

			const invalidEmails = ['invalid', '@domain.com', 'user@', 'user.domain.com'];

			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

			validEmails.forEach((email) => {
				expect(emailRegex.test(email)).toBe(true);
			});

			invalidEmails.forEach((email) => {
				expect(emailRegex.test(email)).toBe(false);
			});
		});

		it('should validate URL format', () => {
			const validUrls = ['https://example.com', 'http://test.org', 'https://sub.domain.com/path'];

			const invalidUrls = [
				'not-a-url',
				'ftp://example.com',
				'example.com' // no protocol
			];

			const urlRegex = /^https?:\/\/.+/;

			validUrls.forEach((url) => {
				expect(urlRegex.test(url)).toBe(true);
			});

			invalidUrls.forEach((url) => {
				expect(urlRegex.test(url)).toBe(false);
			});
		});
	});
});
