# Strapi 5 Migration - Final Steps

## Current Status

All package.json dependencies have been updated for Strapi 5 compatibility. The migration is ready to proceed once Node.js is upgraded.

## Required: Node.js Upgrade

**CRITICAL**: Upgrade Node.js from v18.19.0 to v20+ (LTS recommended)

- Required for Azure storage provider (@azure/identity requires Node.js 20+)
- Recommended for optimal Strapi 5 performance

## Dependency Updates Completed

### Core Updates ✅

- `@strapi/strapi`: 5.20.0
- `@strapi/plugin-graphql`: 5.20.0
- `@strapi/plugin-users-permissions`: 5.20.0
- `react-router-dom`: ^6.0.0 (upgraded from v5)
- `styled-components`: ^6.0.0 (upgraded from v5)

### Plugin Updates ✅

- `@_sh/strapi-plugin-ckeditor`: ^3.0.0 (Strapi 5 compatible)
- `strapi-plugin-map-field`: ^2.0.0 (Strapi 5 compatible)
- `strapi-plugin-timezone-select`: ^2.0.0 (Strapi 5 compatible)
- `strapi-plugin-country-select`: ^2.1.0 (Strapi 5 compatible)
- `strapi-plugin-config-sync`: ^3.1.2 (Strapi 5 compatible)
- `strapi-provider-upload-azure-storage`: ^3.5.0 (requires Node.js 20+)

### Removed Plugins ❌

- `strapi-blurhash` - No Strapi 5 version available
- `strapi-plugin-fuzzy-search` - No Strapi 5 version available
- `@offset-dev/strapi-calendar` - Incompatible with Strapi 5
- `strapi-plugin-prev-next-button` - No Strapi 5 version
- `strapi-plugin-update-static-content` - No Strapi 5 version

## Installation Steps

1. **Upgrade Node.js**

   ```bash
   # Using nvm (Windows):
   nvm install 20
   nvm use 20

   # Or download directly from nodejs.org
   # Verify:
   node --version  # Should show v20.x.x
   ```

2. **Clean Install Dependencies**

   ```bash
   cd api
   rm -rf node_modules yarn.lock
   yarn install
   ```

3. **Build Strapi**

   ```bash
   yarn build
   ```

4. **Start Development Server**
   ```bash
   yarn dev
   ```

## Post-Migration Tasks

### 1. Test Core Functionality

- [ ] Admin panel access
- [ ] Content type CRUD operations
- [ ] GraphQL API endpoints
- [ ] File uploads (Azure Storage)
- [ ] User authentication

### 2. Verify Plugin Functionality

- [ ] CKEditor rich text editing
- [ ] Map field display and editing
- [ ] Country and timezone selectors
- [ ] Config synchronization

### 3. Replace Missing Plugins

For removed plugins, consider these alternatives:

- **Blurhash**: Implement custom solution or find alternative
- **Fuzzy Search**: Use Strapi's built-in search or implement custom search
- **Calendar**: Look for Strapi 5 compatible calendar or build custom
- **Prev/Next Buttons**: Implement in admin customization
- **Static Content Update**: Create custom admin extension

### 4. Update Frontend Integration

- [ ] Test GraphQL queries from Next.js frontend
- [ ] Update any API calls if needed
- [ ] Verify data fetching and mutations

## Code Changes Applied

### cron-tasks.js

- Updated from `strapi.entityService` to `strapi.documents` API
- Fixed documentId references: `event.documentId || event.id`

### Lifecycle Hooks

- No changes needed yet, but review for Strapi 5 compatibility
- Files to check:
  - `api/article/content-types/article/lifecycles.js`
  - `api/event/content-types/event/lifecycles.js`
  - `api/game/content-types/game/lifecycles.js`
  - `api/player/content-types/player/lifecycles.js`
  - `api/event-location/content-types/event-location/lifecycles.js`

## Known Issues & Solutions

### Issue 1: Dependency Warnings

Multiple peer dependency warnings will appear. These are normal and can be ignored if the application runs correctly.

### Issue 2: Admin Panel Customizations

Any custom admin panel code may need updates for the new React Router v6 and Styled Components v6.

### Issue 3: GraphQL Schema

After successful build, regenerate GraphQL schema for the frontend:

```bash
cd ../ui
pnpm codegen
```

## Final Checklist

- [ ] Node.js upgraded to v20+
- [ ] Dependencies installed successfully
- [ ] Strapi builds without errors
- [ ] Admin panel accessible
- [ ] API endpoints working
- [ ] GraphQL schema updated
- [ ] Frontend integration tested
- [ ] All critical plugins functional
- [ ] Data integrity verified

## Rollback Plan

If issues arise:

1. Switch back to the main branch
2. Restore from database backup if needed
3. Document specific issues for resolution

## Success Criteria

The migration is complete when:

1. Strapi 5 runs without critical errors
2. All content types are accessible and editable
3. GraphQL API maintains compatibility with frontend
4. File uploads work with Azure Storage
5. User authentication functions correctly

## Notes

- The decision to upgrade react-router-dom and styled-components to v6 was necessary for Strapi 5 compatibility
- Some plugins had to be removed due to lack of Strapi 5 support
- Node.js 20+ is required for the Azure storage provider
- Further customization may be needed for removed plugin functionality
