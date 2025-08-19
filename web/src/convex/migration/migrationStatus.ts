import { query } from '../_generated/server';
import type { TableNames } from '../_generated/dataModel';

/**
 * Get comprehensive migration status by checking actual data in tables
 */
export const getComprehensiveMigrationStatus = query({
  args: {},
  handler: async (ctx) => {
    const status: Record<string, { status: string; count: number; error?: string }> = {};

    // Check all content type tables
    const contentTypes: Array<{ name: string; table: TableNames }> = [
      { name: 'tags', table: 'tags' },
      { name: 'expectations', table: 'expectations' },
      { name: 'players', table: 'players' },
      { name: 'venues', table: 'venues' },
      { name: 'sponsors', table: 'sponsors' },
      { name: 'home', table: 'home' },
      { name: 'history', table: 'history' },
      { name: 'format', table: 'format' },
      { name: 'hosting', table: 'hosting' },
      { name: 'testimonials', table: 'testimonials' },
      { name: 'eventLocations', table: 'eventLocations' },
      { name: 'games', table: 'games' },
      { name: 'articles', table: 'articles' },
      { name: 'events', table: 'events' }
    ];

    for (const { name, table } of contentTypes) {
      try {
        // Count records in the actual table
        const records = await ctx.db.query(table).collect();
        const count = records.length;

        // Check migration status table for any recorded status by phase name
        const migrationRecord = await ctx.db
          .query('migrationStatus')
          .filter((q) => q.eq(q.field('phase'), name))
          .first();

        if (migrationRecord) {
          status[name] = {
            status: migrationRecord.status,
            count: migrationRecord.processedItems || count,
            error: migrationRecord.error
          };
        } else if (count > 0) {
          // Data exists but no migration status - mark as completed
          status[name] = {
            status: 'completed',
            count: count
          };
        } else {
          // No data and no status - not started
          status[name] = {
            status: 'not_started',
            count: 0
          };
        }
      } catch (error) {
        // Table might not exist or error accessing it
        status[name] = {
          status: 'not_started',
          count: 0,
          error: error instanceof Error ? error.message : 'Unknown error'
        };
      }
    }

    return status;
  }
});
