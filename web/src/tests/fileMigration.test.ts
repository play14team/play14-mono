import { describe, expect, it, vi, beforeEach } from 'vitest';
import { api } from '../convex/_generated/api';

// The current migrateFile action just downloads & stores a file returning metadata.
// We unit test its mime detection & error handling without relying on a removed 'files' table.

const mockFetch = vi.fn<Promise<unknown>, [RequestInfo | URL, RequestInit?]>();
// Cast to typeof fetch for typing without any
global.fetch = mockFetch as unknown as typeof fetch;

// Minimal mock Convex action context shape used in handler (only storage.store needed)
interface MockCtx {
  storage: { store: ReturnType<typeof vi.fn> };
}
function mockCtx(): MockCtx {
  return {
    storage: {
      store: vi.fn().mockResolvedValue('mock-storage-id')
    }
  };
}

describe('migrateFile action', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockFetch.mockReset();
  });

  it('stores downloaded file and returns metadata', async () => {
    const blob = new Blob(['hello'], { type: 'text/plain' });
    mockFetch.mockResolvedValueOnce({ ok: true, blob: async () => blob });
    const ctx = mockCtx();
    const result = await ctx.runAction(api.migration.fileMigration.migrateFile, {
      fileUrl: 'https://x.test/readme.txt'
    });
    expect(result.success).toBe(true);
    expect(result.storageId).toBe('mock-storage-id');
    expect(result.fileName).toBe('readme.txt');
    expect(result.mimeType).toBe('text/plain');
    expect(ctx.storage.store).toHaveBeenCalled();
  });

  it('derives mime from extension when HEAD blob lacks type', async () => {
    const blob = new Blob(['data']); // empty type
    mockFetch.mockResolvedValueOnce({ ok: true, blob: async () => blob });
    const ctx = mockCtx();
    const result = await ctx.runAction(api.migration.fileMigration.migrateFile, {
      fileUrl: 'https://cdn.test/image.png'
    });
    expect(result.mimeType).toBe('image/png');
  });

  it('returns error on download failure', async () => {
    mockFetch.mockResolvedValueOnce({ ok: false, status: 500, statusText: 'ERR' });
    const ctx = mockCtx();
    const result = await ctx.runAction(api.migration.fileMigration.migrateFile, {
      fileUrl: 'https://bad.test/file.zip'
    });
    expect(result.success).toBe(false);
    expect(result.error).toContain('Failed to download file');
  });
});
