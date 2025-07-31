# Play14 Data Migration: Strapi to Convex

This document outlines the complete process for migrating data from the production Strapi backend to the new Convex backend.

## Overview

The migration transfers all content from the production #play14 Strapi CMS (`https://community.play14.org`) to the experimental Convex backend, preserving data integrity and relationships.

## Migration Architecture

### Source System (Strapi)

- **URL**: `https://community.play14.org`
- **Database**: PostgreSQL with PostGIS (geographic data)
- **Media Storage**: Azure Blob Storage
- **Content Types**: 8 main types + relationships + global content
- **Authentication**: Bearer token authentication

### Target System (Convex)

- **URL**: `http://127.0.0.1:3210` (development)
- **Database**: Convex real-time database
- **Media Storage**: Convex file storage system
- **Schema**: Defined in `/web/src/convex/schema.ts`

## Content Types Migration Map

| Strapi Content Type | Convex Table     | Status   | Notes                          |
| ------------------- | ---------------- | -------- | ------------------------------ |
| `home` (Single)     | `home`           | ✅ Ready | Global homepage content        |
| `tags`              | `tags`           | ✅ Ready | 8 records available            |
| `event-locations`   | `eventLocations` | ✅ Ready | Geographic locations           |
| `sponsors`          | `sponsors`       | ✅ Ready | Company sponsors               |
| `venues`            | `venues`         | ✅ Ready | Event venues with locations    |
| `players`           | `players`        | ✅ Ready | Community members              |
| `articles`          | `articles`       | ✅ Ready | Blog posts and announcements   |
| `games`             | `games`          | ✅ Ready | Game library with ratings      |
| `events`            | `events`         | ✅ Ready | Events with complex components |

## Relationship Migrations

| Relationship Type | Tables                                         | Status   | Notes        |
| ----------------- | ---------------------------------------------- | -------- | ------------ |
| Event ↔ Players  | `eventHosts`, `eventMentors`, `eventAttendees` | ✅ Ready | Many-to-many |
| Game ↔ Players   | `gameDocumenters`, `gameProposers`             | ✅ Ready | Many-to-many |
| Article ↔ Tags   | `articleTags`                                  | ✅ Ready | Many-to-many |
| Event ↔ Location | Direct reference                               | ✅ Ready | Foreign key  |
| Event ↔ Venue    | Direct reference                               | ✅ Ready | Foreign key  |

## Media Migration Status

### Current Status: ⚠️ **NOT IMPLEMENTED**

The current migration scripts do **NOT** handle media files. All image and file references are marked as TODOs:

```typescript
defaultImageId: undefined, // TODO: Handle image migration
imageIds: [], // TODO: Handle image migration
logoId: undefined, // TODO: Handle logo migration
avatarId: undefined, // TODO: Handle avatar migration
resourceIds: [], // TODO: Handle files/videos/audio migration
```

### Media Types in Strapi

1. **Images**: Event photos, player avatars, sponsor logos, article images, game images
2. **Files**: Game resources, documents, PDFs
3. **Audio**: Testimonial recordings
4. **Videos**: Game demonstration videos

### Azure Storage Structure

- **Location**: Azure Blob Storage account (configured in Strapi)
- **Access**: Via Strapi's upload plugin API
- **URLs**: Accessible through Strapi's `/api/upload/files` endpoint

### Media Migration Plan (Future Implementation)

#### Phase 1: Inventory Media Files

```typescript
// Get all media from Strapi
const mediaResponse = await fetch(`${STRAPI_API_URL}/api/upload/files?pagination[limit]=1000`)
const mediaFiles = await mediaResponse.json()
```

#### Phase 2: Download and Upload to Convex

```typescript
// For each media file:
// 1. Download from Azure via Strapi URL
// 2. Upload to Convex file storage
// 3. Map old ID to new Convex storage ID
// 4. Update content records with new IDs
```

#### Phase 3: Update Content References

```typescript
// Update all content types to reference new Convex file IDs
await ctx.db.patch(recordId, {
  defaultImageId: newConvexFileId,
  imageIds: [newId1, newId2, ...],
  // etc.
});
```

## Migration Process

### Prerequisites

1. Convex project set up and running (`pnpm dev:backend`)
2. Network access to `https://community.play14.org`
3. Valid Strapi API token (currently hardcoded)

### Step-by-Step Migration

#### 1. Prepare Environment

```bash
cd /home/cpontet/repos/play14-mono/web

# Start Convex development server
pnpm dev:backend

# Open Convex dashboard (in another terminal)
pnpm dashboard
```

#### 2. Test Connection

In the Convex dashboard, run:

```javascript
testConnection()
```

**Expected Result**: `{ success: true, message: "Connection successful", sampleData: {...} }`

#### 3. Phase 1 - Core Data Migration

Run the comprehensive core data migration:

```javascript
runCoreDataMigration()
```

**This migrates (in order):**

1. ✅ Home page content
2. ✅ Tags (8 records)
3. ✅ Event Locations
4. ✅ Sponsors
5. ✅ Venues
6. ✅ Players

**Expected Duration**: 2-5 minutes
**Expected Result**:

```json
{
  "success": true,
  "results": [
    { "migration": "Home", "success": true, "message": "Home migrated successfully" },
    { "migration": "Tags", "success": true, "message": "8 tags migrated successfully" }
    // ... etc
  ],
  "phase": 1
}
```

#### 4. Phase 2 - Content Migration

From `migration-part2.ts`, run each migration individually:

**4a. Migrate Articles**

```javascript
migrateArticles()
```

**4b. Migrate Games**

```javascript
migrateGames()
```

**4c. Migrate Events**

```javascript
migrateEvents()
```

#### 5. Phase 3 - Relationship Migration

From `migration-part2.ts`, run relationship migrations:

**5a. Event Relationships**

```javascript
migrateEventRelationships()
```

**5b. Game Relationships**

```javascript
migrateGameRelationships()
```

**5c. Article-Tag Relationships**

```javascript
migrateArticleTagRelationships()
```

## Data Validation

### Post-Migration Checks

After migration, verify data integrity:

#### 1. Record Counts

```javascript
// Check record counts in Convex dashboard
ctx.db
  .query('tags')
  .collect()
  .then((r) => r.length) // Should be 8
ctx.db
  .query('players')
  .collect()
  .then((r) => r.length) // Check against Strapi
ctx.db
  .query('events')
  .collect()
  .then((r) => r.length) // Check against Strapi
// etc.
```

#### 2. Relationship Integrity

```javascript
// Verify relationships exist
ctx.db
  .query('eventHosts')
  .collect()
  .then((r) => r.length)
ctx.db
  .query('gameProposers')
  .collect()
  .then((r) => r.length)
```

#### 3. Sample Data Verification

Use the existing Convex query functions to verify data:

```javascript
// Test event retrieval
events.get({ slug: 'some-event-slug' })

// Test player data
players.get({ slug: 'some-player-slug' })
```

## Migration Features

### ✅ **Implemented Features**

- **Safe Migration**: Clears existing data before import to avoid duplicates
- **Dependency Order**: Migrates in correct order (locations before events, etc.)
- **Error Handling**: Comprehensive error catching with detailed logging
- **Progress Tracking**: Console logging with emojis and counts
- **Data Transformation**: Maps Strapi data structure to Convex schema
- **Relationship Mapping**: Resolves foreign key relationships by slug/name
- **Component Migration**: Handles complex nested components (timetables, sponsorships, etc.)
- **Filtering**: Only migrates published content (`publishedAt` not null)
- **Batch Processing**: Fetches up to 1000 records per API call

### ⚠️ **Limitations & TODOs**

- **Media Files**: Images, videos, audio, and documents are NOT migrated
- **User Authentication**: User accounts are not migrated
- **Environment Variables**: API credentials are hardcoded
- **Incremental Migration**: No support for partial/incremental updates
- **Rollback**: No automated rollback mechanism
- **Localization**: Multi-language content (i18n) handling not implemented
- **File Storage Quotas**: No check for Convex storage limits

## Error Handling

### Common Issues & Solutions

#### 1. Connection Errors

**Symptom**: `Failed to fetch` errors
**Solution**:

- Verify network connectivity to `https://community.play14.org`
- Check API token validity
- Confirm Strapi backend is accessible

#### 2. Schema Mismatches

**Symptom**: TypeScript errors or data validation failures
**Solution**:

- Compare Strapi API response structure with Convex schema
- Update transformation logic in migration functions

#### 3. Memory Issues

**Symptom**: Out of memory errors with large datasets
**Solution**:

- Reduce `pagination[limit]` from 1000 to smaller batches
- Implement streaming for large datasets

#### 4. Relationship Resolution Failures

**Symptom**: Missing foreign key references
**Solution**:

- Ensure parent records are migrated before children
- Check slug/name matching logic in `findConvexRecord()`

## File Structure

```
/web/src/convex/
├── migration.ts           # Phase 1: Core data migrations
├── migration-part2.ts     # Phase 2: Content + relationships
├── schema.ts             # Convex database schema
├── events.ts             # Event queries (existing)
├── games.ts              # Game queries (existing)
├── players.ts            # Player queries (existing)
└── _generated/           # Auto-generated Convex types

/web/
├── test-simple.cjs       # API connection test
├── MIGRATION.md          # This documentation
└── .env.local           # Environment variables
```

## Security Considerations

### Current Implementation

- ⚠️ **API Secret Hardcoded**: Strapi API token is embedded in source code
- ⚠️ **No Rate Limiting**: Batch requests without throttling
- ⚠️ **No Access Control**: Migration functions are publicly accessible

### Production Recommendations

- Move API credentials to environment variables
- Implement rate limiting for API calls
- Restrict migration functions to admin users only
- Add audit logging for migration operations
- Use temporary tokens with limited scope

## Performance Considerations

### Current Performance

- **Batch Size**: 1000 records per API call
- **Network**: Direct HTTPS calls to production API
- **Concurrency**: Sequential processing (no parallel requests)
- **Memory**: Loads full datasets into memory

### Optimization Opportunities

- Implement parallel processing for independent migrations
- Stream large datasets instead of loading entirely into memory
- Add progress indicators for long-running migrations
- Cache frequently accessed reference data (locations, players)

## Future Enhancements

### Priority 1: Media Migration

- Inventory all media files in Azure Storage
- Implement download/upload pipeline
- Map old media IDs to new Convex storage IDs
- Update all content references

### Priority 2: Incremental Migration

- Track migration state and timestamps
- Support partial re-migration of specific content types
- Implement change detection and delta sync

### Priority 3: Production Features

- Environment-based configuration
- Admin UI for migration management
- Rollback and recovery mechanisms
- Migration scheduling and automation

---

## Getting Help

### Troubleshooting Steps

1. Check this documentation for common issues
2. Verify API connectivity with `node test-simple.cjs`
3. Review Convex dashboard logs for error details
4. Compare data structures between Strapi and Convex

### Support Resources

- **Convex Documentation**: https://docs.convex.dev/
- **Strapi API Reference**: https://docs.strapi.io/dev-docs/api/rest
- **Project Repository**: `/home/cpontet/repos/play14-mono/`

---

_Last Updated: 2025-01-31_
_Migration Scripts Version: 1.0_
_Status: Ready for Core Data Migration (Media Migration Pending)_
