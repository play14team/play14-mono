# Strapi 4 to Strapi 5 Migration Strategy

## Current State Analysis

### Version Information

- **Current Version**: Strapi 4.25.23
- **Target Version**: Strapi 5.20.0 (latest)
- **Package Manager**: Yarn 1.22.22 (keeping for consistency)
- **Node.js Version**: 18.19.0 (✅ Compatible with Strapi 5 requirement: v18.0.0+)
- **Migration Environment**: Non-production database restored from backup
- **Branch Status**: Already on new migration branch

### Project Structure

The API follows a standard Strapi 4 structure with:

- 14 content types (Article, Event, Game, Player, Venue, etc.)
- 14 components (social networks, ratings, addresses, etc.)
- Custom lifecycles for 5 content types
- Custom controllers and services
- GraphQL integration
- Multiple environment configurations

### Dependencies Analysis

#### Core Dependencies

- `@strapi/strapi`: ^4.25.23 → 5.20.0
- `@strapi/plugin-graphql`: 4.25.23 → 5.x
- `@strapi/plugin-i18n`: 4.25.23 → 5.x
- `@strapi/plugin-users-permissions`: 4.25.23 → 5.x

#### Third-Party Plugins Compatibility

| Plugin                                 | Current Version | Strapi 5 Status                   | Action Required  |
| -------------------------------------- | --------------- | --------------------------------- | ---------------- |
| `@_sh/strapi-plugin-ckeditor`          | ^2.1.3          | ✅ Compatible (v3.x for Strapi 5) | Upgrade to v3.x  |
| `@mapbox/mapbox-sdk`                   | ^0.16.1         | ✅ External SDK                   | No change        |
| `@offset-dev/strapi-calendar`          | ^0.1.1          | ❓ Unknown                        | Check repository |
| `strapi-blurhash`                      | 1.1.1           | ❓ Unknown                        | Check/Replace    |
| `strapi-plugin-config-sync`            | ^1.2.6          | ❓ Unknown                        | Check repository |
| `strapi-plugin-country-select`         | ^1.0.3          | ❓ Unknown                        | Check/Replace    |
| `strapi-plugin-fuzzy-search`           | ^3.0.0          | ❓ Unknown                        | Check repository |
| `strapi-plugin-map-field`              | ^1.1.1          | ❓ Unknown                        | Check/Replace    |
| `strapi-plugin-prev-next-button`       | ^1.2.0          | ❓ Unknown                        | Check/Replace    |
| `strapi-plugin-timezone-select`        | ^1.0.0          | ❓ Unknown                        | Check repository |
| `strapi-plugin-update-static-content`  | ^2.0.7          | ❓ Unknown                        | Check/Replace    |
| `strapi-provider-upload-azure-storage` | ^3.5.0          | ✅ Should be compatible           | Test required    |

#### Pinned Dependencies (IMPORTANT)

- `react-router-dom`: ^5.3.4 (DO NOT UPDATE per CLAUDE.md)
- `styled-components`: 5.3.11 (DO NOT UPDATE per CLAUDE.md)

## Official Migration Approach (Using Strapi Codemods)

Based on the official Strapi migration guide, the recommended approach is to use the **Strapi Upgrade Tool** which automates many migration tasks:

### Step 1: Run the Upgrade Tool

```bash
cd api
npx @strapi/upgrade major
```

This tool will:

- Update dependency versions in package.json
- Apply code transformations for breaking changes
- Update configuration files
- Generate a migration report

### Step 2: Manual Review Required

After running the upgrade tool, manually review:

- Custom plugin compatibility
- Lifecycle hooks syntax
- API endpoint changes
- Frontend integration points

## Migration Strategy

### Phase 1: Pre-Migration Preparation ✅ COMPLETED

- ✅ Database backup created
- ✅ Migration branch created (strapi5)
- ✅ Non-production database restored
- ✅ Node.js version verified (18.19.0 - compatible)

#### 1.1 Environment Setup

- [ ] Create a full backup of the current production system
- [ ] Set up a separate development branch for migration
- [ ] Clone the current environment for testing
- [ ] Document all environment variables

#### 1.2 Plugin Compatibility Research

- [ ] Check each plugin's GitHub repository for Strapi 5 support
- [ ] Identify alternatives for incompatible plugins
- [ ] Test critical plugins in a Strapi 5 sandbox environment
- [ ] Document plugin replacement strategy

#### 1.3 Code Analysis

- [ ] Review all lifecycle hooks for breaking changes
- [ ] Analyze custom controllers and services
- [ ] Check GraphQL schema customizations
- [ ] Review middleware configurations

### Phase 2: Migration Environment Setup (Week 2)

#### 2.1 Create Migration Branch

```bash
git checkout -b strapi5-migration
```

#### 2.2 Update Core Dependencies

```bash
yarn upgrade @strapi/strapi@5.20.0
yarn upgrade @strapi/plugin-graphql@5.x
yarn upgrade @strapi/plugin-i18n@5.x
yarn upgrade @strapi/plugin-users-permissions@5.x
```

#### 2.3 Database Migration Preparation

- [ ] Export current database structure
- [ ] Create migration scripts for schema changes
- [ ] Test migration on a copy of production data

### Phase 3: Code Migration (Week 3-4)

#### 3.1 Lifecycle Hooks Migration

Current lifecycle files to migrate:

- `api/article/content-types/article/lifecycles.js`
- `api/event-location/content-types/event-location/lifecycles.js`
- `api/event/content-types/event/lifecycles.js`
- `api/game/content-types/game/lifecycles.js`
- `api/player/content-types/player/lifecycles.js`

**Migration Pattern:**

```javascript
// Strapi 4 (Current)
module.exports = {
  beforeCreate(event) {
    validate(event.params.data)
  },
  beforeUpdate(event) {
    validate(event.params.data)
  },
}

// Strapi 5 (Target)
module.exports = {
  beforeCreate(event) {
    const { data } = event.params
    validate(data)
  },
  beforeUpdate(event) {
    const { data } = event.params
    validate(data)
  },
}
```

#### 3.2 Controller and Service Updates

- Review and update controller syntax
- Update service method signatures
- Migrate to new query engine API if needed

#### 3.3 Configuration Files

- Update `config/database.js`
- Review `config/server.js`
- Update plugin configurations
- Migrate middleware configurations

### Phase 4: Plugin Migration (Week 4-5)

#### 4.1 Essential Plugins (Priority 1)

1. **CKEditor**: Upgrade to `@_sh/strapi-plugin-ckeditor` v3.x
2. **Azure Storage**: Test and verify compatibility
3. **GraphQL**: Ensure schema generation works

#### 4.2 Feature Plugins (Priority 2)

1. **Config Sync**: Find alternative or update
2. **Fuzzy Search**: Check for v5 support or implement alternative
3. **Map Field**: Find alternative or create custom field

#### 4.3 UI Enhancement Plugins (Priority 3)

1. **Calendar**: Check compatibility or replace
2. **Country/Timezone Select**: Create custom fields if needed
3. **Prev/Next Buttons**: Implement in admin customization

### Phase 5: Testing (Week 5-6)

#### 5.1 Unit Testing

- [ ] Test all content type CRUD operations
- [ ] Verify lifecycle hooks execution
- [ ] Test custom API endpoints
- [ ] Validate GraphQL queries/mutations

#### 5.2 Integration Testing

- [ ] Test plugin functionality
- [ ] Verify file upload to Azure Storage
- [ ] Test search functionality
- [ ] Validate all custom fields

#### 5.3 Performance Testing

- [ ] Compare API response times
- [ ] Test database query performance
- [ ] Validate caching mechanisms
- [ ] Load testing for concurrent users

### Phase 6: Data Migration (Week 6)

#### 6.1 Migration Scripts

```bash
# Export Strapi 4 data
yarn export

# Run migration scripts
node scripts/migrate-to-v5.js

# Import to Strapi 5
yarn import
```

#### 6.2 Data Validation

- [ ] Verify all content types data
- [ ] Check media library integrity
- [ ] Validate user permissions
- [ ] Test relationships and references

### Phase 7: Deployment Preparation (Week 7)

#### 7.1 Environment Updates

- [ ] Update Docker configuration
- [ ] Review environment variables
- [ ] Update CI/CD pipelines
- [ ] Prepare rollback strategy

#### 7.2 Documentation

- [ ] Update API documentation
- [ ] Document breaking changes
- [ ] Create migration guide for UI team
- [ ] Update deployment procedures

### Phase 8: Deployment and Monitoring (Week 8)

#### 8.1 Staging Deployment

- [ ] Deploy to staging environment
- [ ] Full regression testing
- [ ] Performance benchmarking
- [ ] Security audit

#### 8.2 Production Deployment

- [ ] Schedule maintenance window
- [ ] Execute deployment plan
- [ ] Monitor system health
- [ ] Verify all functionality

## Risk Assessment

### High Risk Items

1. **Plugin Incompatibility**: Many plugins may not support Strapi 5
   - **Mitigation**: Identify alternatives early, develop custom solutions if needed

2. **Breaking Changes in Lifecycles**: Lifecycle API changes could break business logic
   - **Mitigation**: Thorough testing, gradual migration

3. **Database Schema Changes**: Potential data loss or corruption
   - **Mitigation**: Complete backups, test migrations multiple times

### Medium Risk Items

1. **GraphQL Schema Changes**: May affect frontend integration
   - **Mitigation**: Compare schemas, update frontend queries

2. **Performance Degradation**: New version might have different performance characteristics
   - **Mitigation**: Extensive performance testing

3. **Custom Code Compatibility**: Custom controllers/services may need updates
   - **Mitigation**: Code review and testing

### Low Risk Items

1. **UI Admin Panel Changes**: May require user retraining
   - **Mitigation**: Create user guides

2. **Configuration Format Changes**: May require config file updates
   - **Mitigation**: Document all changes

## Rollback Strategy

1. **Database Backup**: Maintain complete database backup before migration
2. **Code Repository**: Tag stable Strapi 4 version
3. **Environment Snapshot**: Create infrastructure snapshots
4. **Gradual Rollout**: Use blue-green deployment if possible
5. **Monitoring**: Set up alerts for critical failures

## Success Criteria

- [ ] All content types functioning correctly
- [ ] GraphQL API compatibility maintained
- [ ] No data loss during migration
- [ ] Performance metrics equal or better than Strapi 4
- [ ] All critical plugins working or replaced
- [ ] Zero downtime deployment (or minimal planned maintenance)
- [ ] Frontend applications working without modifications

## Timeline Summary

- **Week 1**: Preparation and Research
- **Week 2**: Environment Setup
- **Week 3-4**: Code Migration
- **Week 4-5**: Plugin Migration
- **Week 5-6**: Testing and Data Migration
- **Week 7**: Deployment Preparation
- **Week 8**: Deployment and Monitoring

**Total Estimated Time**: 8 weeks for complete migration

## Next Steps

1. Review and approve migration strategy
2. Allocate resources for migration team
3. Set up migration environment
4. Begin plugin compatibility research
5. Create detailed task breakdown for each phase

## Notes and Considerations

- Keep react-router-dom at v5.3.4 (DO NOT UPDATE)
- Keep styled-components at 5.3.11 (DO NOT UPDATE)
- Consider migrating to PNPM for consistency with other projects
- Ensure Azure Blob Storage integration continues to work
- Maintain GraphQL API compatibility for frontend
- Test PostGIS functionality with geographic queries
