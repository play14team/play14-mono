import { action, internalMutation, internalQuery } from '../_generated/server';
import { v } from 'convex/values';
import type { Id } from '../_generated/dataModel';
import { internal, api } from '../_generated/api';

/**
 * Get all storage IDs from all content tables
 */
export const getAllStorageIds = internalQuery({
  args: {},
  handler: async (ctx) => {
    const storageIds: Set<string> = new Set();

    // Collect storage IDs from all tables with image/file fields

    // Players - avatarId
    const players = await ctx.db.query('players').collect();
    players.forEach((p) => {
      if (p.avatarId) storageIds.add(p.avatarId);
    });

    // Home - imageIds array
    const homes = await ctx.db.query('home').collect();
    homes.forEach((h) => {
      if (h.imageIds) {
        h.imageIds.forEach((id) => storageIds.add(id));
      }
    });

    // History - items may have imageId
    const histories = await ctx.db.query('history').collect();
    histories.forEach((h) => {
      if (h.items) {
        h.items.forEach((item) => {
          if (item.imageId) storageIds.add(item.imageId);
        });
      }
    });

    // Games - defaultImageId and resourceIds
    const games = await ctx.db.query('games').collect();
    games.forEach((g) => {
      if (g.defaultImageId) storageIds.add(g.defaultImageId);
      if (g.resourceIds) {
        g.resourceIds.forEach((id) => storageIds.add(id));
      }
    });

    // Articles - defaultImageId
    const articles = await ctx.db.query('articles').collect();
    articles.forEach((a) => {
      if (a.defaultImageId) storageIds.add(a.defaultImageId);
    });

    // Events - defaultImageId only (media contains URLs, not storage IDs)
    const events = await ctx.db.query('events').collect();
    events.forEach((e) => {
      if (e.defaultImageId) storageIds.add(e.defaultImageId);
      // Note: media array contains URLs, not storage IDs
    });

    // Testimonials - audio
    const testimonials = await ctx.db.query('testimonials').collect();
    testimonials.forEach((t) => {
      if (t.audio) storageIds.add(t.audio);
    });

    // Sponsors - logo
    const sponsors = await ctx.db.query('sponsors').collect();
    sponsors.forEach((s) => {
      if (s.logo) storageIds.add(s.logo);
    });

    return Array.from(storageIds);
  }
});

/**
 * Delete a single storage file
 */
export const deleteStorageFile = internalMutation({
  args: {
    storageId: v.string()
  },
  handler: async (ctx, args) => {
    try {
      await ctx.storage.delete(args.storageId as Id<'_storage'>);
      return { success: true };
    } catch (error) {
      console.error(`Failed to delete storage file ${args.storageId}:`, error);
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
  }
});

/**
 * Clean up all storage files associated with migrated data
 */
export const cleanupAllStorageFiles = action({
  args: {},
  handler: async (
    ctx
  ): Promise<{
    totalFiles: number;
    deleted: number;
    failed: number;
    errors: string[];
  }> => {
    console.log('🗑️ Starting storage cleanup...');

    // Get all storage IDs from database
    const storageIds = await ctx.runQuery(internal.migration.cleanupStorage.getAllStorageIds, {});
    console.log(`Found ${storageIds.length} storage files to delete`);

    let successCount = 0;
    let failCount = 0;
    const errors: string[] = [];

    // Delete each storage file
    for (const storageId of storageIds) {
      const result = await ctx.runMutation(internal.migration.cleanupStorage.deleteStorageFile, {
        storageId
      });

      if (result.success) {
        successCount++;
      } else {
        failCount++;
        if (result.error) {
          errors.push(`${storageId}: ${result.error}`);
        }
      }

      // Log progress every 10 files
      if ((successCount + failCount) % 10 === 0) {
        console.log(`Progress: ${successCount + failCount}/${storageIds.length} files processed`);
      }
    }

    console.log(`✅ Storage cleanup complete: ${successCount} deleted, ${failCount} failed`);

    if (errors.length > 0 && errors.length <= 10) {
      console.log('Errors:', errors);
    } else if (errors.length > 10) {
      console.log(`First 10 errors:`, errors.slice(0, 10));
    }

    return {
      totalFiles: storageIds.length,
      deleted: successCount,
      failed: failCount,
      errors: errors.slice(0, 10) // Return first 10 errors only
    };
  }
});

/**
 * Complete cleanup - deletes all data AND storage files
 */
export const completeCleanup = action({
  args: {},
  handler: async (
    ctx
  ): Promise<{
    storage: {
      totalFiles: number;
      deleted: number;
      failed: number;
      errors: string[];
    };
    data: {
      totalDeleted: number;
      statusesDeleted: number;
    };
    message: string;
  }> => {
    console.log('🧹 Starting complete cleanup (data + storage)...');

    // First, cleanup all storage files
    const storageResult = await ctx.runAction(
      api.migration.cleanupStorage.cleanupAllStorageFiles,
      {}
    );
    console.log(`Storage cleanup: ${storageResult.deleted} files deleted`);

    // Then, cleanup all migration data
    const dataResult = await ctx.runAction(
      api.migration.strapiMigration.cleanupAllMigrationData,
      {}
    );
    console.log(`Data cleanup: ${dataResult.totalDeletedItems} records deleted`);

    return {
      storage: storageResult,
      data: {
        totalDeleted: dataResult.totalDeletedItems,
        statusesDeleted: dataResult.totalDeletedMappings
      },
      message: 'Complete cleanup finished successfully'
    };
  }
});

// Re-export internal functions for the action
export { getAllStorageIds as internal_getAllStorageIds };
export { deleteStorageFile as internal_deleteStorageFile };
