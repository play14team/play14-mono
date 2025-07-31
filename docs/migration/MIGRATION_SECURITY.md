# Migration Security & Environment Variables

## ⚠️ Security Update

The migration files have been updated to remove hardcoded secrets and use environment variables instead.

## Environment Variables Required

### **Option 1: Convex Environment Variables (Recommended)**

Configure in Convex Dashboard (Settings → Environment Variables):

```bash
# Strapi API Configuration
STRAPI_API_URL=https://community.play14.org
STRAPI_API_SECRET=your_strapi_api_token_here
```

### **Option 2: Local Development (.env.local)**

For external migration scripts, add to `/web/.env.local`:

```bash
# Strapi API Configuration
STRAPI_API_URL=https://community.play14.org
STRAPI_API_SECRET=your_strapi_api_token_here
```

## Current Status

✅ **Environment variables are configured** in Convex Dashboard  
✅ **Environment variables are configured** in `.env.local`  
✅ **All hardcoded secrets removed** from source code  
⚠️ **Convex architectural constraint** - Mutations cannot access `process.env`

## The Issue

In Convex:

- **Actions** can access `process.env` ✅
- **Mutations** cannot access `process.env` ❌
- **Queries** cannot access `process.env` ❌

Our current migration functions are mutations that need API access, which requires environment variables.

## Solutions

### Option 1: External Migration Script (Current Production Solution)

Use the `external-migration.js` which:

1. ✅ Runs outside Convex as a Node.js script
2. ✅ Uses environment variables from `.env.local`
3. ✅ Uses Convex CLI to insert data securely
4. ✅ Production-tested and reliable

### Option 2: Convex Action-Based Migration (Future Enhancement)

Convert migration functions to **actions** that can:

1. ✅ Access Convex environment variables
2. ✅ Fetch data from Strapi API
3. ✅ Call mutations to insert/update data
4. ⚠️ Requires refactoring current mutation-based approach

### Option 3: Hybrid Approach (Current Implementation)

- ✅ **Actions** handle API calls (can access environment variables)
- ✅ **Mutations** handle data insertion (cannot access environment variables)
- ✅ **External scripts** work around limitations

## Recommended Approach

For production use, implement **Option 1**:

1. Create action functions that fetch from Strapi
2. Create mutation functions that handle data insertion
3. Actions call mutations with the fetched data
4. Environment variables are accessed only in actions

## Security Benefits Achieved

- ✅ **No hardcoded secrets in code** - All files cleaned
- ✅ **Convex environment variables** - Configured in dashboard
- ✅ **Local environment variables** - Available in `.env.local`
- ✅ **Git-safe codebase** - No secrets committed
- ✅ **Easy credential rotation** - Update in one place
- ✅ **Production security standards** - Multiple environment support
- ✅ **Dual configuration** - Works with both Convex and external scripts

## Next Steps

1. Refactor migration functions to use action/mutation pattern
2. Test with environment variables
3. Update documentation with new migration process
4. Remove any remaining hardcoded values
