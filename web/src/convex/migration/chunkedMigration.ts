import { action, mutation, query } from '../_generated/server';
import { v } from 'convex/values';
import { api } from '../_generated/api';

// Migration state tracking
export const initMigrationSession = mutation({
  args: {
    contentTypes: v.array(v.string()),
    includeFiles: v.boolean()
  },
  handler: async (ctx, args) => {
    // Store migration session in a temporary table or return session config
    const sessionId = await ctx.db.insert('migrationSessions', {
      contentTypes: args.contentTypes,
      includeFiles: args.includeFiles,
      currentIndex: 0,
      status: 'in_progress',
      startedAt: Date.now(),
      results: {}
    });

    return sessionId;
  }
});

export const getMigrationProgress = query({
  args: {
    sessionId: v.id('migrationSessions')
  },
  handler: async (ctx, args) => {
    const session = await ctx.db.get(args.sessionId);
    if (!session) {
      throw new Error('Migration session not found');
    }

    const completedTypes = Object.keys(session.results);
    const totalTypes = session.contentTypes.length;
    const progress = (completedTypes.length / totalTypes) * 100;

    return {
      progress,
      currentIndex: session.currentIndex,
      totalTypes,
      completedTypes: completedTypes.length,
      status: session.status,
      results: session.results
    };
  }
});

export const migrateSingleContentType = action({
  args: {
    contentType: v.string(),
    includeFiles: v.boolean(),
    sessionId: v.optional(v.id('migrationSessions'))
  },
  handler: async (
    ctx,
    args
  ): Promise<{
    success: boolean;
    count: number;
    duration: number;
    error?: string;
  }> => {
    const startTime = Date.now();
    console.log(`\n📦 Starting migration for: ${args.contentType}`);

    try {
      // Run the migration for this single content type
      const result = await ctx.runAction(api.migration.strapiMigration.migrateSingleContentType, {
        contentType: args.contentType
      });

      const duration = Date.now() - startTime;
      console.log(`✅ ${args.contentType} completed in ${(duration / 1000).toFixed(1)}s`);

      // Update session if provided
      if (args.sessionId) {
        await ctx.runMutation(api.migration.chunkedMigration.updateMigrationSession, {
          sessionId: args.sessionId,
          contentType: args.contentType,
          result: {
            success: result.success,
            count: result.totalMigrated,
            duration,
            error: result.errors.length > 0 ? result.errors.join(', ') : undefined
          }
        });
      }

      return {
        success: result.success,
        count: result.totalMigrated,
        duration,
        error: result.errors.length > 0 ? result.errors.join(', ') : undefined
      };
    } catch (error) {
      const duration = Date.now() - startTime;
      console.error(`❌ ${args.contentType} failed:`, error);

      // Update session with error
      if (args.sessionId) {
        await ctx.runMutation(api.migration.chunkedMigration.updateMigrationSession, {
          sessionId: args.sessionId,
          contentType: args.contentType,
          result: {
            success: false,
            count: 0,
            duration,
            error: error instanceof Error ? error.message : 'Unknown error'
          }
        });
      }

      return {
        success: false,
        count: 0,
        duration,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }
});

export const updateMigrationSession = mutation({
  args: {
    sessionId: v.id('migrationSessions'),
    contentType: v.string(),
    result: v.object({
      success: v.boolean(),
      count: v.number(),
      duration: v.number(),
      error: v.optional(v.string())
    })
  },
  handler: async (ctx, args) => {
    const session = await ctx.db.get(args.sessionId);
    if (!session) {
      throw new Error('Migration session not found');
    }

    // Update results
    const results = { ...session.results };
    results[args.contentType] = args.result;

    // Check if all content types are done
    const allDone = session.contentTypes.every((type) => type in results);

    await ctx.db.patch(args.sessionId, {
      results,
      currentIndex: session.currentIndex + 1,
      status: allDone ? 'completed' : 'in_progress',
      completedAt: allDone ? Date.now() : undefined
    });
  }
});

export const runChunkedMigration = action({
  args: {
    includeFiles: v.optional(v.boolean()),
    contentTypes: v.optional(v.array(v.string())),
    parallel: v.optional(v.boolean()) // Whether to run migrations in parallel
  },
  handler: async (ctx, args) => {
    const includeFiles = args.includeFiles ?? true;
    const parallel = args.parallel ?? false;

    console.log('🚀 STARTING CHUNKED MIGRATION');
    console.log('================================');
    console.log(`File migration: ${includeFiles ? 'ENABLED' : 'DISABLED'}`);
    console.log(`Execution mode: ${parallel ? 'PARALLEL' : 'SEQUENTIAL'}`);

    // Migration order respecting dependencies
    const migrationOrder = [
      // Phase 1: Foundation types (no dependencies)
      'tags',
      'expectations',

      // Phase 2: Core entities
      'players',
      'venues',
      'sponsors',

      // Phase 3: Single types
      'home',
      'history',
      'format',
      'hosting',

      // Phase 4: Complex types with minimal dependencies
      'testimonials',
      'eventLocations',

      // Phase 5: Most complex types
      'games', // Depends on tags
      'articles', // Depends on tags

      // Phase 6: Events (depends on everything)
      'events'
    ];

    const targetTypes = args.contentTypes || migrationOrder;
    const orderedTypes = migrationOrder.filter((type) => targetTypes.includes(type));

    console.log(`📋 Migration plan: ${orderedTypes.length} content types`);
    console.log(`📊 Order: ${orderedTypes.join(' → ')}`);

    interface MigrationResultItem {
      success: boolean;
      count: number;
      duration: number;
      error?: string;
    }

    const results: Record<string, MigrationResultItem> = {};
    const startTime = Date.now();

    if (parallel) {
      // Group types by phase to respect dependencies
      const phases = [
        ['tags', 'expectations'],
        ['players', 'venues', 'sponsors'],
        ['home', 'history', 'format', 'hosting'],
        ['testimonials', 'eventLocations'],
        ['games', 'articles'],
        ['events']
      ];

      for (const phase of phases) {
        const phaseTypes = phase.filter((type) => orderedTypes.includes(type));
        if (phaseTypes.length === 0) continue;

        console.log(`\n🔄 Processing phase: ${phaseTypes.join(', ')}`);

        // Run all types in this phase in parallel
        const promises = phaseTypes.map((contentType) =>
          ctx.runAction(api.migration.chunkedMigration.migrateSingleContentType, {
            contentType,
            includeFiles,
            sessionId: undefined
          })
        );

        const phaseResults = await Promise.all(promises);

        // Store results
        phaseTypes.forEach((type, index) => {
          results[type] = phaseResults[index];
        });
      }
    } else {
      // Sequential migration
      for (const contentType of orderedTypes) {
        const result = await ctx.runAction(
          api.migration.chunkedMigration.migrateSingleContentType,
          {
            contentType,
            includeFiles,
            sessionId: undefined
          }
        );

        results[contentType] = result;

        // Small delay between migrations to avoid overwhelming the system
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
    }

    const totalDuration = Date.now() - startTime;

    // Calculate summary
    const successful = Object.values(results).filter((r) => r.success).length;
    const failed = Object.values(results).filter((r) => !r.success).length;
    const totalRecords = Object.values(results).reduce((sum, r) => sum + (r.count || 0), 0);

    console.log('\n================================');
    console.log('📊 MIGRATION SUMMARY');
    console.log('================================');
    console.log(`✅ Successful: ${successful}/${orderedTypes.length} content types`);
    console.log(`📝 Total records: ${totalRecords}`);
    console.log(`⏱️  Total duration: ${(totalDuration / 1000).toFixed(1)}s`);

    if (failed > 0) {
      console.log(`\n❌ Failed migrations:`);
      for (const [type, result] of Object.entries(results)) {
        if (!result.success) {
          console.log(`  - ${type}: ${result.error}`);
        }
      }
    }

    return {
      summary: {
        successful,
        failed,
        totalRecords,
        duration: totalDuration
      },
      results
    };
  }
});
