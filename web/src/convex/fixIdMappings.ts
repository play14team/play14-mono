import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

/**
 * Query to get all records from a table that have strapiId
 */
export const getRecordsWithStrapiId = query({
  args: {
    tableName: v.string()
  },
  handler: async (ctx, args) => {
    const validTables = [
      'players',
      'venues',
      'sponsors',
      'events',
      'games',
      'articles',
      'tags',
      'expectations',
      'eventLocations',
      'testimonials',
      'home',
      'history',
      'format',
      'hosting'
    ] as const;

    if (!validTables.includes(args.tableName as (typeof validTables)[number])) {
      throw new Error(`Invalid table name: ${args.tableName}`);
    }

    // Get all records from the specified table
    const records = await ctx.db.query(args.tableName as (typeof validTables)[number]).collect();
    
    // Filter to only those with strapiId
    const recordsWithStrapiId = records.filter((record: { strapiId?: string }) => record.strapiId);
    
    return {
      tableName: args.tableName,
      totalRecords: records.length,
      recordsWithStrapiId: recordsWithStrapiId.length,
      records: recordsWithStrapiId.map((record: { _id: string; strapiId?: string; name?: string; slug?: string; value?: string; title?: string }) => ({
        _id: record._id,
        strapiId: record.strapiId,
        name: record.name || record.slug || record.value || record.title || 'N/A'
      }))
    };
  }
});

/**
 * Query to check existing idMappings
 */
export const checkExistingMappings = query({
  args: {
    strapiType: v.string()
  },
  handler: async (ctx, args) => {
    const mappings = await ctx.db
      .query('idMappings')
      .filter((q) => q.eq(q.field('strapiType'), args.strapiType))
      .collect();
    
    return {
      strapiType: args.strapiType,
      count: mappings.length,
      mappings: mappings.slice(0, 10) // Return first 10 as sample
    };
  }
});

/**
 * Mutation to create missing idMappings for a specific table
 */
export const createMissingIdMappings = mutation({
  args: {
    tableName: v.string()
  },
  handler: async (ctx, args) => {
    const validTables = [
      'players',
      'venues',
      'sponsors',
      'events',
      'games',
      'articles',
      'tags',
      'expectations',
      'eventLocations',
      'testimonials',
      'home',
      'history',
      'format',
      'hosting'
    ] as const;

    if (!validTables.includes(args.tableName as (typeof validTables)[number])) {
      throw new Error(`Invalid table name: ${args.tableName}`);
    }

    // Map table names to strapiType (they're mostly the same except for singular/plural)
    const tableToStrapiType: Record<string, string> = {
      players: 'player',
      venues: 'venue',
      sponsors: 'sponsor',
      events: 'event',
      games: 'game',
      articles: 'article',
      tags: 'tag',
      expectations: 'expectation',
      eventLocations: 'eventLocation',
      testimonials: 'testimonial',
      home: 'home',
      history: 'history',
      format: 'format',
      hosting: 'hosting'
    };

    const strapiType = tableToStrapiType[args.tableName];
    if (!strapiType) {
      throw new Error(`No strapiType mapping for table: ${args.tableName}`);
    }

    // Get all records from the table
    const records = await ctx.db.query(args.tableName as (typeof validTables)[number]).collect();
    
    let created = 0;
    let skipped = 0;
    let errors = 0;

    for (const record of records) {
      if (!record.strapiId) {
        skipped++;
        continue;
      }

      try {
        // Check if mapping already exists
        const existingMapping = await ctx.db
          .query('idMappings')
          .filter((q) =>
            q.and(
              q.eq(q.field('strapiType'), strapiType),
              q.eq(q.field('strapiId'), record.strapiId)
            )
          )
          .first();

        if (!existingMapping) {
          // Create the mapping
          await ctx.db.insert('idMappings', {
            strapiType,
            strapiId: record.strapiId,
            convexId: record._id
          });
          created++;
        } else {
          skipped++;
        }
      } catch (error) {
        console.error(`Error creating mapping for ${strapiType} ${record.strapiId}:`, error);
        errors++;
      }
    }

    return {
      tableName: args.tableName,
      strapiType,
      totalRecords: records.length,
      created,
      skipped,
      errors
    };
  }
});

/**
 * Mutation to fix all idMappings for all tables
 */
export const fixAllIdMappings = mutation({
  handler: async (ctx) => {
    const tables = [
      'tags',
      'expectations',
      'venues',
      'sponsors',
      'eventLocations',
      'home',
      'history',
      'format',
      'hosting',
      'testimonials',
      'players',
      'games',
      'articles',
      'events'
    ];

    const results = [];

    for (const tableName of tables) {
      try {
        // First, count records
        const records = await ctx.db.query(tableName as (typeof tables)[number]).collect();
        const recordsWithStrapiId = records.filter((r: { strapiId?: string }) => r.strapiId);

        // Map table names to strapiType
        const tableToStrapiType: Record<string, string> = {
          players: 'player',
          venues: 'venue',
          sponsors: 'sponsor',
          events: 'event',
          games: 'game',
          articles: 'article',
          tags: 'tag',
          expectations: 'expectation',
          eventLocations: 'eventLocation',
          testimonials: 'testimonial',
          home: 'home',
          history: 'history',
          format: 'format',
          hosting: 'hosting'
        };

        const strapiType = tableToStrapiType[tableName];
        
        let created = 0;
        let skipped = 0;

        for (const record of recordsWithStrapiId) {
          // Check if mapping already exists
          const existingMapping = await ctx.db
            .query('idMappings')
            .filter((q) =>
              q.and(
                q.eq(q.field('strapiType'), strapiType),
                q.eq(q.field('strapiId'), record.strapiId)
              )
            )
            .first();

          if (!existingMapping) {
            // Create the mapping
            await ctx.db.insert('idMappings', {
              strapiType,
              strapiId: record.strapiId,
              convexId: record._id
            });
            created++;
          } else {
            skipped++;
          }
        }

        results.push({
          tableName,
          totalRecords: records.length,
          recordsWithStrapiId: recordsWithStrapiId.length,
          created,
          skipped
        });
      } catch (error) {
        results.push({
          tableName,
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    }

    return results;
  }
});