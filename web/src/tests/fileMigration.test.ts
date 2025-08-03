import { convexTest } from 'convex-test';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { migrateFile } from '../convex/fileMigration';
import schema from '../convex/schema';

// Mock fetch
const mockFetch = vi.fn();
global.fetch = mockFetch;

describe('File Migration Tests', () => {
  const t = convexTest(schema);

  beforeEach(() => {
    vi.clearAllMocks();
    mockFetch.mockReset();
  });

  describe('migrateFile', () => {
    const mockFileData = {
      url: 'https://example.com/test-image.jpg',
      name: 'test-image.jpg',
      alternativeText: 'Test image',
      caption: 'A test image caption',
      formats: {
        thumbnail: {
          url: 'https://example.com/test-image-thumb.jpg',
          width: 156,
          height: 156
        },
        small: {
          url: 'https://example.com/test-image-small.jpg',
          width: 500,
          height: 500
        }
      }
    };

    it('should migrate an image file successfully', async () => {
      // Mock successful file fetch
      const mockBlob = new Blob(['fake image data'], { type: 'image/jpeg' });
      mockFetch.mockResolvedValueOnce({
        ok: true,
        blob: async () => mockBlob,
        headers: new Headers({ 'content-type': 'image/jpeg' })
      });

      await t.run(async (ctx) => {
        // Mock storage.generateUploadUrl
        ctx.storage = {
          generateUploadUrl: vi.fn().mockResolvedValue('https://upload.url'),
          getUrl: vi
            .fn()
            .mockImplementation((storageId) => Promise.resolve(`https://storage.url/${storageId}`))
        };

        // Mock fetch for upload
        mockFetch.mockResolvedValueOnce({
          ok: true,
          json: async () => ({ storageId: 'mock-storage-id' })
        });

        const result = await migrateFile(ctx, {
          fileData: mockFileData,
          strapiUrl: 'https://community.play14.org'
        });

        expect(result.fileId).toBeDefined();
        expect(mockFetch).toHaveBeenCalledWith('https://community.play14.org/test-image.jpg');
      });
    });

    it('should handle file fetch errors', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
        status: 404,
        statusText: 'Not Found'
      });

      await t.run(async (ctx) => {
        await expect(
          migrateFile(ctx, {
            fileData: mockFileData,
            strapiUrl: 'https://community.play14.org'
          })
        ).rejects.toThrow('Failed to fetch file: 404 Not Found');
      });
    });

    it('should migrate PDF files', async () => {
      const pdfData = {
        ...mockFileData,
        url: 'https://example.com/document.pdf',
        name: 'document.pdf'
      };

      const mockBlob = new Blob(['fake pdf data'], { type: 'application/pdf' });
      mockFetch.mockResolvedValueOnce({
        ok: true,
        blob: async () => mockBlob,
        headers: new Headers({ 'content-type': 'application/pdf' })
      });

      await t.run(async (ctx) => {
        ctx.storage = {
          generateUploadUrl: vi.fn().mockResolvedValue('https://upload.url'),
          getUrl: vi
            .fn()
            .mockImplementation((storageId) => Promise.resolve(`https://storage.url/${storageId}`))
        };

        mockFetch.mockResolvedValueOnce({
          ok: true,
          json: async () => ({ storageId: 'mock-pdf-storage-id' })
        });

        const result = await migrateFile(ctx, {
          fileData: pdfData,
          strapiUrl: 'https://community.play14.org'
        });

        expect(result.fileId).toBeDefined();

        // Check if file was created with correct type
        const files = await ctx.db.query('files').collect();
        expect(files).toHaveLength(1);
        expect(files[0].type).toBe('application/pdf');
        expect(files[0].name).toBe('document.pdf');
      });
    });

    it('should handle video files', async () => {
      const videoData = {
        ...mockFileData,
        url: 'https://example.com/video.mp4',
        name: 'video.mp4'
      };

      const mockBlob = new Blob(['fake video data'], { type: 'video/mp4' });
      mockFetch.mockResolvedValueOnce({
        ok: true,
        blob: async () => mockBlob,
        headers: new Headers({ 'content-type': 'video/mp4' })
      });

      await t.run(async (ctx) => {
        ctx.storage = {
          generateUploadUrl: vi.fn().mockResolvedValue('https://upload.url'),
          getUrl: vi
            .fn()
            .mockImplementation((storageId) => Promise.resolve(`https://storage.url/${storageId}`))
        };

        mockFetch.mockResolvedValueOnce({
          ok: true,
          json: async () => ({ storageId: 'mock-video-storage-id' })
        });

        const result = await migrateFile(ctx, {
          fileData: videoData,
          strapiUrl: 'https://community.play14.org'
        });

        expect(result.fileId).toBeDefined();

        // Check if file was created with correct type
        const files = await ctx.db.query('files').collect();
        expect(files).toHaveLength(1);
        expect(files[0].type).toBe('video/mp4');
      });
    });

    it('should handle files with formats', async () => {
      const mockBlob = new Blob(['fake image data'], { type: 'image/jpeg' });

      // Mock main file fetch
      mockFetch.mockResolvedValueOnce({
        ok: true,
        blob: async () => mockBlob,
        headers: new Headers({ 'content-type': 'image/jpeg' })
      });

      await t.run(async (ctx) => {
        ctx.storage = {
          generateUploadUrl: vi.fn().mockResolvedValue('https://upload.url'),
          getUrl: vi
            .fn()
            .mockImplementation((storageId) => Promise.resolve(`https://storage.url/${storageId}`))
        };

        mockFetch.mockResolvedValueOnce({
          ok: true,
          json: async () => ({ storageId: 'mock-storage-id' })
        });

        await migrateFile(ctx, {
          fileData: mockFileData,
          strapiUrl: 'https://community.play14.org'
        });

        // Check if file was created with formats
        const files = await ctx.db.query('files').collect();
        expect(files).toHaveLength(1);
        expect(files[0].formats).toBeDefined();
        expect(files[0].formats?.thumbnail).toBeDefined();
        expect(files[0].formats?.small).toBeDefined();
      });
    });

    it('should skip migration if file already exists', async () => {
      await t.run(async (ctx) => {
        // Create existing file
        const existingFileId = await ctx.db.insert('files', {
          strapiId: '123',
          name: 'existing.jpg',
          url: 'https://example.com/existing.jpg',
          type: 'image/jpeg',
          size: 1024,
          storageId: 'existing-storage-id',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        });

        // Try to migrate same file
        const result = await migrateFile(ctx, {
          fileData: {
            id: '123', // Same Strapi ID
            url: 'https://example.com/existing.jpg',
            name: 'existing.jpg'
          },
          strapiUrl: 'https://community.play14.org'
        });

        expect(result.fileId).toBe(existingFileId);
        expect(mockFetch).not.toHaveBeenCalled(); // Should not fetch
      });
    });

    it('should handle missing file data gracefully', async () => {
      await t.run(async (ctx) => {
        const result = await migrateFile(ctx, {
          fileData: null,
          strapiUrl: 'https://community.play14.org'
        });

        expect(result.fileId).toBeNull();
      });
    });

    it('should detect correct MIME types', async () => {
      const testCases = [
        { ext: 'jpg', type: 'image/jpeg' },
        { ext: 'png', type: 'image/png' },
        { ext: 'gif', type: 'image/gif' },
        { ext: 'pdf', type: 'application/pdf' },
        { ext: 'mp4', type: 'video/mp4' },
        { ext: 'mp3', type: 'audio/mpeg' },
        { ext: 'doc', type: 'application/msword' },
        { ext: 'xlsx', type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }
      ];

      for (const { ext, type } of testCases) {
        const fileData = {
          url: `https://example.com/file.${ext}`,
          name: `file.${ext}`
        };

        const mockBlob = new Blob(['fake data'], { type });
        mockFetch.mockResolvedValueOnce({
          ok: true,
          blob: async () => mockBlob,
          headers: new Headers({ 'content-type': type })
        });

        await t.run(async (ctx) => {
          ctx.storage = {
            generateUploadUrl: vi.fn().mockResolvedValue('https://upload.url'),
            getUrl: vi
              .fn()
              .mockImplementation((storageId) =>
                Promise.resolve(`https://storage.url/${storageId}`)
              )
          };

          mockFetch.mockResolvedValueOnce({
            ok: true,
            json: async () => ({ storageId: `mock-${ext}-storage-id` })
          });

          await migrateFile(ctx, {
            fileData,
            strapiUrl: 'https://community.play14.org'
          });

          const files = await ctx.db.query('files').collect();
          const latestFile = files[files.length - 1];
          expect(latestFile.type).toBe(type);
        });
      }
    });
  });
});
