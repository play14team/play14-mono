# Strapi to Convex Migration Guide

This document provides a comprehensive guide for migrating data from the production Strapi CMS backend to the experimental Convex backend.

## Overview

The migration process transfers all content from the Strapi PostgreSQL database (including media files stored in Azure Storage) to Convex's real-time database and storage system.

## Prerequisites

1. **Strapi API Access**
   - API URL: `https://community.play14.org`
   - Valid API token with read access to all content types

2. **Convex Setup**
   - Convex project initialized in `/web` directory
   - Environment variables configured in `.env.local`
   - Convex dev server running: `pnpm dev:backend`

## Migration Architecture

### Migration Files

- **`web/src/convex/migration.ts`** - Phase 1: Core data migration
  - Home page configuration
  - Tags
  - Event Locations
  - Sponsors
  - Venues
  - Players

- **`web/src/convex/migration-part2.ts`** - Phase 2: Content and relationships
  - Articles
  - Games
  - Events
  - Event relationships (hosts, mentors, attendees)
  - Game relationships (documenters, proposers)
  - Article-tag relationships

- **`web/src/convex/migration-helpers.ts`** - Image migration utilities
  - Downloads images from Azure Storage
  - Uploads to Convex storage
  - Handles single and multiple image fields

## Running the Migration

### Phase 1: Core Data Migration

```bash
cd web
pnpm dev:backend  # Start Convex in another terminal

# Run from Convex dashboard or using the client
npx convex run migration:runCoreDataMigration
```

This migrates:

- Home page images
- Tags
- Event locations
- Sponsors (with logos)
- Venues
- Players (with avatars)

### Phase 2: Content Migration

After Phase 1 completes successfully:

```bash
# Migrate Articles
npx convex run migration-part2:migrateArticles

# Migrate Games
npx convex run migration-part2:migrateGames

# Migrate Events
npx convex run migration-part2:migrateEvents
```

### Phase 3: Relationship Migration

After content migration:

```bash
# Event relationships
npx convex run migration-part2:migrateEventRelationships

# Game relationships
npx convex run migration-part2:migrateGameRelationships

# Article-tag relationships
npx convex run migration-part2:migrateArticleTagRelationships
```

## Image Migration

The migration automatically handles all media files:

### What Gets Migrated

- **Home**: Gallery images
- **Sponsors**: Company logos
- **Players**: Profile avatars
- **Articles**: Featured images and galleries
- **Games**: Featured images, galleries, and resource files
- **Events**: Featured images and galleries

### How Images Are Migrated

1. Image URLs are fetched from Strapi API
2. Images are downloaded from Azure Storage
3. Images are uploaded to Convex storage
4. New storage IDs replace old references

### Error Handling

- Individual image failures don't stop the migration
- Failed images are logged but migration continues
- Images that fail return `undefined` instead of throwing errors

## Testing the Migration

### Test Connection

```bash
npx convex run migration:testConnection
```

### Test Image Migration

```bash
node test-image-migration.js
```

### Verify Migration Results

Check the Convex dashboard to verify:

- All tables have been populated
- Image storage IDs are present where expected
- Relationship tables contain proper references

## Migration Order

The recommended migration order is:

1. **Test connection** to Strapi API
2. **Run Phase 1** (core data migration)
3. **Run Phase 2** (content migration) in this order:
   - Articles
   - Games
   - Events
4. **Run Phase 3** (relationships) in any order:
   - Event relationships
   - Game relationships
   - Article-tag relationships

## Troubleshooting

### Common Issues

1. **API Token Invalid**
   - Verify the token in `migration.ts` has read access
   - Check token hasn't expired

2. **Image Download Failures**
   - Check Azure Storage is accessible
   - Verify image URLs are correct
   - Check for network issues

3. **Convex Storage Errors**
   - Ensure Convex project has storage enabled
   - Check storage quotas
   - Verify file size limits

### Debugging

- Check console logs for detailed error messages
- Each migration function logs progress
- Failed items are logged with reasons

## Post-Migration

After successful migration:

1. **Verify Data Integrity**
   - Compare record counts with Strapi
   - Spot-check content fields
   - Verify images are displaying correctly

2. **Update Frontend**
   - Switch data sources from Strapi to Convex
   - Update API calls to use Convex queries
   - Test all features with migrated data

3. **Clean Up**
   - Remove migration scripts from production
   - Secure or remove API tokens
   - Document any data transformations

## Data Transformations

During migration, certain transformations occur:

- **Dates**: Converted to Unix timestamps (milliseconds)
- **Relations**: Converted to Convex ID references
- **Rich Text**: Preserved as-is (HTML/Markdown)
- **Enums**: Mapped to Convex union types
- **Components**: Embedded as nested objects

## Notes

- Migration is idempotent - running twice clears and re-imports data
- Large datasets may take time due to image downloads
- All migrations run in transactions for consistency
- The process preserves publishing status and timestamps
