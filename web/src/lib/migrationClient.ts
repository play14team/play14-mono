import { ConvexClient } from 'convex/browser';
import { api } from '../convex/_generated/api';

/**
 * Small client-side helper to run the resumable Strapi migration from the browser (dev/admin only).
 * Usage: call start(), then loop continue(run.statusId) until done === true.
 */
export class StrapiMigrationClient {
  private client: ConvexClient;

  constructor(
    public convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL || process.env.VITE_CONVEX_URL || ''
  ) {
    this.client = new ConvexClient(convexUrl);
  }

  /** Start a new migration run. Optionally limit content types. */
  async start(options?: { includeFiles?: boolean; contentTypes?: string[] }) {
    return await this.client.action(api.strapiMigration.startCompleteMigration, {
      includeFiles: options?.includeFiles,
      contentTypes: options?.contentTypes
    });
  }

  /** Continue a run for one time slice (defaults ~45s on server). */
  async continue(statusId: string, timeBudgetMs?: number) {
    return await this.client.action(api.strapiMigration.continueCompleteMigration, {
      statusId,
      timeBudgetMs
    });
  }
}

// Convenience one-offs
export async function runCompleteMigrationClientSide(
  convexUrl: string,
  contentTypes?: string[],
  includeFiles = true,
  timeBudgetMs = 45000
) {
  const c = new StrapiMigrationClient(convexUrl);
  const { statusId } = await c.start({ includeFiles, contentTypes });
  // keep calling continue until done
  // IMPORTANT: in a real UI, prefer a button/interval instead of a tight loop
  // to keep the tab responsive. This is a simple blocking example.
  type ContinueResult = {
    done: boolean;
    progressedTo?: number;
    total?: number;
    elapsedMs?: number;
    error?: string;
  };
  let done = false;
  let latest: ContinueResult = { done: false };
  while (!done) {
    const res = await c.continue(statusId, timeBudgetMs);
    latest = res;
    done = !!res.done;
  }
  return { statusId, ...latest };
}
