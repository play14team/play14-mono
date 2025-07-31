# Migration Verification Guide

This guide explains how to verify that your Strapi to Convex migration completed successfully and all data was transferred correctly.

## 🎯 Overview

The verification script compares data between Strapi and Convex to ensure:

- All records were migrated
- No data was lost or corrupted
- Relationships are properly established
- Data integrity is maintained

## 🚀 Quick Start

### Run Complete Verification

```bash
pnpm migration:verify
```

This runs a comprehensive verification that checks:

- Environment configuration
- Core table record counts
- Relationship table integrity
- Sample record validation
- Special cases (like single-record tables)

## 📊 What Gets Verified

### 1. **Environment Checks**

- ✅ Strapi API connection
- ✅ Convex database connection
- ✅ Required environment variables

### 2. **Core Table Verification**

Compares record counts between Strapi and Convex for:

| Strapi Table      | Convex Table     | Description         |
| ----------------- | ---------------- | ------------------- |
| `tags`            | `tags`           | Content tags        |
| `event-locations` | `eventLocations` | Event locations     |
| `venues`          | `venues`         | Event venues        |
| `sponsors`        | `sponsors`       | Company sponsors    |
| `players`         | `players`        | Community players   |
| `articles`        | `articles`       | Blog articles       |
| `games`           | `games`          | Game catalog        |
| `events`          | `events`         | Event listings      |
| `expectations`    | `expectations`   | User expectations   |
| `testimonials`    | `testimonials`   | User testimonials   |
| `formats`         | `formats`        | Event formats       |
| `histories`       | `history`        | Historical records  |
| `hostings`        | `hosting`        | Hosting information |

### 3. **Relationship Table Verification**

Checks that relationship records exist for:

- `eventHosts` - Event host relationships
- `eventMentors` - Event mentor relationships
- `eventAttendees` - Event attendee relationships
- `gameDocumenters` - Game documenter relationships
- `gameProposers` - Game proposer relationships
- `articleTags` - Article tag relationships

### 4. **Data Integrity Checks**

- Verifies table structure and accessibility
- Checks for expected record counts
- Validates that all expected tables exist

### 5. **Sample Record Validation**

- Fetches sample records from both systems
- Verifies key fields are accessible
- Confirms data format consistency

### 6. **Special Cases**

- **Home Table**: Verifies single-record table structure
- **Missing Tables**: Checks all expected tables exist
- **Empty Tables**: Identifies tables that may legitimately be empty

## 📋 Understanding Results

### ✅ Pass (Green)

- Test completed successfully
- Data matches between systems
- No issues found

### ⚠️ Warning (Yellow)

- Minor discrepancies found
- May indicate missing relationships or empty tables
- Review recommended but not critical

### ❌ Fail (Red)

- Critical issues found
- Data missing or significantly different
- **Action required** - migration may be incomplete

## 🔧 Common Issues and Solutions

### Missing Records

**Issue**: Record count mismatch between Strapi and Convex

**Possible Causes**:

- Migration didn't complete for all tables
- Published vs unpublished records in Strapi
- Network interruption during migration

**Solution**:

```bash
# Re-run specific migration phase
pnpm migration:phase1  # Core data
pnpm migration:phase2  # Main content
pnpm migration:phase3  # Additional content

# Then verify again
pnpm migration:verify
```

### Connection Failures

**Issue**: Cannot connect to Strapi or Convex

**Solution**:

1. Check environment variables in `.env.local`:

   ```bash
   STRAPI_API_URL=https://community.play14.org
   STRAPI_API_SECRET=your_token_here
   VITE_CONVEX_URL=https://your-convex-deployment-url
   ```

2. Verify Strapi API is accessible:

   ```bash
   pnpm migration:test
   ```

3. Check Convex deployment status in dashboard

### Empty Relationship Tables

**Issue**: Relationship tables show 0 records

**Possible Causes**:

- Relationships haven't been migrated yet
- No relationships exist in source data
- Migration phase 2 not completed

**Solution**:

```bash
# Relationships are migrated in phase 2
pnpm migration:phase2
pnpm migration:verify
```

## 📈 Success Metrics

### Excellent (90-100% pass rate)

- All critical data migrated successfully
- Minor warnings acceptable (empty tables, etc.)
- Ready for production use

### Good (70-89% pass rate)

- Most data migrated successfully
- Some issues need investigation
- Safe to proceed with caution

### Poor (<70% pass rate)

- Significant migration issues
- **Do not use migrated data**
- Re-run migration and investigate failures

## 🔍 Advanced Verification

### Custom Verification Queries

You can run additional checks by querying Convex directly:

```javascript
// Check specific record by Strapi ID
const record = await convex.query('migration:findByStrapiId', {
  table: 'events',
  strapiId: 123,
})

// Get migration status
const status = await convex.query('migration:getMigrationStatus')
```

### Manual Spot Checks

1. **Pick a specific record** from Strapi admin
2. **Find the same record** in Convex using strapiId
3. **Compare key fields** to ensure accuracy
4. **Check relationships** are properly linked

## 🚨 When to Re-run Migration

Re-run the migration if:

- ❌ More than 10% of core tables have mismatched counts
- ❌ Any table shows 0 records when Strapi has data
- ❌ Environment connection tests fail
- ❌ Critical business data is missing

## 📞 Troubleshooting Support

If verification fails consistently:

1. **Check logs** from migration run for errors
2. **Verify environment** variables are correct
3. **Confirm Strapi API** permissions and data access
4. **Review Convex deployment** status and configuration
5. **Run phase-by-phase** migration to isolate issues

## 🎉 Success Confirmation

When verification passes with 90%+ success rate:

✅ **Migration Complete** - Your Strapi data has been successfully migrated to Convex!

Next steps:

1. Update application configuration to use Convex
2. Test application functionality with migrated data
3. Monitor for any runtime issues
4. Keep Strapi as backup until fully validated

---

**💡 Pro Tip**: Run verification after each migration phase to catch issues early:

```bash
pnpm migration:phase1 && pnpm migration:verify
pnpm migration:phase2 && pnpm migration:verify
pnpm migration:phase3 && pnpm migration:verify
```
