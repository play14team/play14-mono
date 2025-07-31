# Strapi to Convex Migration Guide

This directory contains tools and scripts to migrate data from the #play14 Strapi CMS to the new Convex backend.

## Overview

The migration process extracts data from a Strapi export backup and transforms it to match the Convex schema defined in `src/convex/schema.ts`.

## Files

- `migration.js` - Main migration script (Node.js)
- `src/convex/migrations.ts` - Convex mutation functions for executing migrations
- `src/convex/migrations/` - Generated migration files (created by script)

## Migration Process

### 1. Generate Migration Files

```bash
# Generate all migration files (dry run)
node migration.js --dry-run

# Generate specific tables only
node migration.js --dry-run --tables=events,games,players

# Generate just events
node migration.js --dry-run --tables=events
```

This will create individual migration files in `src/convex/migrations/` containing the transformed data.

### 2. Execute Migrations in Convex

You have several options to run the actual migration:

#### Option A: Via Convex Dashboard

1. Open your Convex dashboard
2. Go to the Functions tab
3. Run the generated migration functions manually

#### Option B: Via npx convex run

```bash
# Make sure Convex is configured
npx convex dev

# Run individual migrations
npx convex run migrations:migrateEvents
npx convex run migrations:migrateGames
npx convex run migrations:migratePlayers
# ... etc
```

#### Option C: Via the central migration function

```bash
# Use the runMigration function with the generated data
npx convex run migrations:runMigration --table events --data '[...]'
```

### 3. Verify Migration

Check the migration status:

```bash
npx convex run migrations:getMigrationStatus
```

This will show you the count of records in each table.

## Data Transformation

The migration script handles the following transformations:

### Events

- Converts datetime strings to Unix timestamps
- Maps Strapi status enums to Convex enums
- Transforms component structures (timetable, registration, etc.)
- Links media files via relationships

### Games

- Maps category enums
- Transforms embedded components (materials, tags, safety)
- Links to events and players via relationships

### Players

- Maps position enums
- Transforms location data (lat/lng)
- Handles social networks array

### Relationships

- Event ↔ Player relationships (hosts, mentors, attendees)
- Game ↔ Player relationships (documenters, proposers)
- Media file attachments
- Location and venue references

## Migration Statistics

Based on the production backup (July 2024):

| Table           | Records |
| --------------- | ------- |
| Events          | 107     |
| Games           | 125     |
| Players         | 1,011   |
| Articles        | 10      |
| Event Locations | 46      |
| Venues          | 73      |
| Sponsors        | 124     |
| Tags            | 8       |
| Media Files     | 1,995   |
| Relationships   | 6,963   |

## Troubleshooting

### Common Issues

1. **ES Module Error**
   - Make sure to use `import` instead of `require` in migration.js
   - The script is configured as an ES module

2. **Backup Path Not Found**
   - Update `BACKUP_PATH` in migration.js to point to your Strapi export
   - Make sure the backup contains `entities/` and `links/` directories

3. **Convex Schema Mismatch**
   - Ensure the Convex schema in `src/convex/schema.ts` matches the transformed data
   - Update the transformation functions if schema changes

4. **Relationship Issues**
   - Relationships are processed after main data migration
   - Some manual cleanup may be needed for complex relationships

### Debugging

Enable verbose logging by adding console.log statements in the transformation functions.

### Clean Up

To clear all data and start over:

```bash
npx convex run migrations:clearTable --table events
npx convex run migrations:clearTable --table games
# ... etc
```

## Next Steps After Migration

1. **Test Data Integrity**
   - Verify record counts match expectations
   - Test key relationships (event hosts, game proposers, etc.)
   - Check media file references

2. **Update Frontend**
   - Update queries in the SvelteKit app to use new Convex functions
   - Test all pages and functionality

3. **Performance Testing**
   - Monitor query performance with large datasets
   - Optimize indexes if needed

4. **Backup Strategy**
   - Set up regular Convex backups
   - Document rollback procedures

## Support

For issues with the migration process, check:

- Convex documentation: https://docs.convex.dev
- #play14 development discussions
- Generated migration files for data inspection
