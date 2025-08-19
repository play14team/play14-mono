# Strapi to Convex Migration Guide

## Overview

This guide explains how to migrate data from the Strapi CMS backend to the Convex database for the #play14 platform.

## Prerequisites

1. **Environment Variables**: Ensure your `.env.local` file contains:

   ```env
   CONVEX_URL=your-convex-deployment-url
   STRAPI_API_URL=your-strapi-api-url
   STRAPI_SECRET=your-strapi-api-secret
   ```

2. **Convex Backend Running**: Start the Convex backend:
   ```bash
   cd web
   pnpm dev:backend
   ```

## Quick Start

### Complete Migration

Run a complete migration of all content types:

```bash
cd web
pnpm migrate
```

### Check Migration Status

View the current migration status:

```bash
pnpm migrate:status
```

### Clean and Re-migrate

Clean all existing migration data (including uploaded files) and run fresh:

```bash
pnpm migrate:clean
pnpm migrate
```

**Note**: The clean command now removes:

- All migrated database records
- All uploaded files and images in Convex storage
- All ID mappings
- Migration status records

## Command Line Options

### Basic Commands

```bash
# Complete migration (all content types with files)
pnpm migrate

# Check migration status
pnpm migrate:status

# Clean all migration data and storage files
pnpm migrate:clean
```

### Advanced Options

```bash
# Migrate specific content types only
pnpm migrate -- --types=players,games,events

# Skip file migration (faster, text data only)
pnpm migrate -- --no-files

# Clean first, then migrate
pnpm migrate -- --clean

# Combine options
pnpm migrate -- --clean --types=players,venues --no-files
```

## Content Types

The migration supports all 14 content types from Strapi:

### Foundation Types

- `tags` - Content tags for categorization
- `expectations` - Event expectations
- `players` - Player profiles with locations and social links
- `venues` - Venue information with geographic data
- `sponsors` - Sponsor organizations

### Single Types

- `home` - Homepage content configuration
- `history` - Historical timeline data
- `format` - Event format information
- `hosting` - Hosting information

### Complex Types

- `testimonials` - User testimonials with audio files
- `eventLocations` - Geographic event locations
- `games` - Game library with ratings and relationships
- `articles` - Blog articles with tags and authors
- `events` - Full event data with all relationships

## Migration Order

The migration respects dependencies and runs in this order:

1. **Phase 1**: Foundation types (no dependencies)
   - tags, expectations

2. **Phase 2**: Core entities
   - players, venues, sponsors

3. **Phase 3**: Single types
   - home, history, format, hosting

4. **Phase 4**: Types with minimal dependencies
   - testimonials, eventLocations

5. **Phase 5**: Complex types
   - games (depends on tags)
   - articles (depends on tags)

6. **Phase 6**: Most complex
   - events (depends on all other types)

## Using Convex Dashboard

You can also run migrations directly from the Convex dashboard:

1. Open the Convex dashboard:

   ```bash
   pnpm dashboard
   ```

2. Navigate to **Functions** → **migration/strapiMigration**

3. Run individual migration functions:
   - **Complete Migration**:

     ```javascript
     runCompleteMigration({
       includeFiles: true,
       contentTypes: undefined, // or ["players", "games"]
       batchSize: 50
     });
     ```

   - **Check Status**:

     ```javascript
     getMigrationStatus();
     ```

   - **Clean Data**:

     ```javascript
     cleanupAllMigrationData();
     ```

   - **Migrate Specific Type**:

     ```javascript
     // First fetch data
     fetchStrapiData({ contentType: "players" })

     // Then migrate
     migratePlayersData({ strapiData: <result-from-fetch> })
     ```

## Troubleshooting

### Common Issues

1. **CONVEX_URL not found**
   - Ensure `.env.local` contains `CONVEX_URL`
   - Run `pnpm env:inject` to inject environment variables

2. **Authentication Error**
   - Check that `STRAPI_SECRET` is set in Convex environment
   - Verify the secret is correct for the Strapi API

3. **Migration Fails**
   - Check specific error in console output
   - Use `pnpm migrate:status` to see which types failed
   - Clean and retry: `pnpm migrate:clean && pnpm migrate`

4. **Partial Migration**
   - Some content types may fail due to data issues
   - Migrate specific types: `pnpm migrate -- --types=players`
   - Check logs for specific errors

### Debug Individual Content Types

For debugging specific content types:

```bash
# In Convex dashboard, run:
fetchStrapiData({ contentType: "players" })

# Check the returned data structure
# Then run the specific migration:
migratePlayersData({ strapiData: <data> })
```

## File Migration

The migration includes file handling for:

- Player avatars
- Game images and resources
- Article images
- Event images and documents
- Testimonial audio files
- Home and history images

To skip file migration (faster for testing):

```bash
pnpm migrate -- --no-files
```

## Monitoring Progress

During migration, you'll see:

- Real-time progress for each content type
- Number of records processed
- Success/failure status
- Error messages if any

After migration, run `pnpm migrate:status` to see:

- Completion status for each type
- Number of records migrated
- ID mappings created
- Any errors encountered

## Data Validation

After migration, verify data integrity:

1. Check migration status:

   ```bash
   pnpm migrate:status
   ```

2. Query data in Convex dashboard:

   ```javascript
   // Check specific tables
   ctx.db.query('players').collect();
   ctx.db.query('games').collect();
   ctx.db.query('events').collect();
   ```

3. Verify relationships:
   ```javascript
   // Check ID mappings
   ctx.db.query('idMappings').withIndex('by_strapi_type_and_id').collect();
   ```

## Re-running Migrations

Migrations are safe to re-run:

1. **Clean and re-migrate** (recommended):

   ```bash
   pnpm migrate:clean
   pnpm migrate
   ```

2. **Migrate specific types**:

   ```bash
   pnpm migrate -- --types=games,articles
   ```

3. **Force re-migration** without cleaning:
   - The system will skip existing records
   - Only new/updated records will be processed

## Production Migration

For production migration:

1. **Test in development first**
2. **Backup Convex data** if any exists
3. **Set production environment variables**
4. **Run migration with monitoring**:
   ```bash
   pnpm migrate
   pnpm migrate:status
   ```
5. **Verify data** in production dashboard

## Support

For issues or questions:

- Check `web/src/convex/MIGRATION_STATUS.md` for detailed status
- Review logs in Convex dashboard
- Check error messages in console output
