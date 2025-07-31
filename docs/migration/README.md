# Strapi to Convex Migration Documentation

This directory contains comprehensive documentation for migrating data from the production Strapi CMS backend to the experimental Convex backend.

## 📚 Documentation Files

### **[strapi-to-convex-migration.md](./strapi-to-convex-migration.md)**

**Main migration guide** - Complete step-by-step instructions for running the data migration

- Prerequisites and setup
- Migration phases and execution order
- Troubleshooting common issues
- Post-migration verification steps

### **[IMAGE_MIGRATION.md](./IMAGE_MIGRATION.md)**

**Image and media migration** - How images and media files are transferred from Azure Storage to Convex

- What media gets migrated
- How the image migration process works
- Error handling and testing procedures

### **[MIGRATION_SECURITY.md](./MIGRATION_SECURITY.md)**

**Security and environment variables** - Secure configuration using environment variables

- Removing hardcoded secrets
- Environment variable setup
- Security best practices
- Convex-specific constraints

### **[MIGRATION.md](./MIGRATION.md)**

**Technical implementation details** - Legacy migration documentation

- Original migration approach
- Code structure and architecture
- Implementation notes

## 🚀 Quick Start

1. **Read the main guide**: Start with [strapi-to-convex-migration.md](./strapi-to-convex-migration.md)
2. **Set up security**: Follow [MIGRATION_SECURITY.md](./MIGRATION_SECURITY.md) for environment variables
3. **Understand images**: Review [IMAGE_MIGRATION.md](./IMAGE_MIGRATION.md) for media handling
4. **Execute migration**: Follow the step-by-step process in the main guide

## 📊 Migration Overview

The migration transfers all content from the production Strapi backend to Convex:

**Phase 1 - Core Data**: Tags, Event Locations, Sponsors, Venues
**Phase 2 - Main Content**: Players, Articles, Games, Events
**Phase 3 - Additional Content**: Expectations, Testimonials, Formats, History, Hosting
**Relationships**: Event hosts/mentors/attendees, Game documenters/proposers, Article tags
**Media Files**: Images and resources from Azure Storage to Convex storage

### Available npm Scripts

- `pnpm migration:test` - Test connection to Strapi API
- `pnpm migration:run` - Run complete migration (all phases)
- `pnpm migration:phase1` - Run only Phase 1 (core data)
- `pnpm migration:phase2` - Run only Phase 2 (main content)
- `pnpm migration:phase3` - Run only Phase 3 (additional content)

## ⚠️ Important Notes

- The migration includes deduplication logic using Strapi IDs
- Environment variables are required for secure API access
- Image migration is currently disabled due to storage API compatibility
- Running the migration multiple times safely updates existing records

## 🔗 Related Files

- Migration code: `/web/src/convex/migration.ts`, `/web/src/convex/migrationPart2.ts`, `/web/src/convex/migrationPart3.ts`
- Schema definition: `/web/src/convex/schema.ts`
- External migration scripts: `/web/src/migration/external-migration.js`
- Environment config: `/web/.env.local`
