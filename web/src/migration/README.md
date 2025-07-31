# Migration Scripts

This directory contains JavaScript scripts for testing and executing the Strapi to Convex data migration.

## 📁 Script Files

> **Note**: All scripts now use **ES modules** (`.js` files) for consistency with the project's `"type": "module"` configuration.

### **Production Migration**

#### **`external-migration.js`**

**Main migration script** - Production-ready external migration tool

- **Usage**: `node src/migration/external-migration.js [phase1|phase2|complete]`
- **Purpose**: Fetches data from Strapi API and uses Convex CLI to insert data
- **Features**:
  - Phase-based migration (core data → content → relationships)
  - Proper error handling and logging
  - Environment variable support
  - Deduplication logic using Strapi IDs

### **Testing & Development**

#### **`test-simple.js`**

**Quick API connection test** - Fast verification of Strapi API connectivity

- **Usage**: `node src/migration/test-simple.js` or `pnpm migration:test`
- **Purpose**: Tests basic connection to Strapi API
- **Features**:
  - Environment variable validation
  - Sample data fetch and connection verification
  - Secure configuration (no hardcoded secrets)

#### **`test-migration-comprehensive.js`**

**Comprehensive test suite** - Full migration diagnostics

- **Usage**: `node src/migration/test-migration-comprehensive.js` or `pnpm migration:test:full`
- **Purpose**: Tests all migration endpoints and provides detailed diagnostics
- **Features**:
  - Multi-endpoint testing and validation
  - Data availability reporting
  - Detailed error diagnostics

#### **`test-migration.js`**

**Basic migration test** - Simple migration component testing

- **Usage**: `node src/migration/test-migration.js`
- **Purpose**: Tests various migration components
- **Features**: Basic validation and testing

#### **`test-image-migration.js`**

**Image migration test** - Tests image and media file migration

- **Usage**: `node src/migration/test-image-migration.js`
- **Purpose**: Validates image migration from Azure Storage to Convex
- **Status**: Currently disabled due to storage API compatibility issues

## 🚀 Quick Start

### 1. **Test Connection**

```bash
cd web
pnpm migration:test
# or directly:
node src/migration/test-simple.js
```

### 2. **Run Full Migration**

```bash
cd web
node src/migration/external-migration.js complete
```

### 3. **Run Phase-by-Phase**

```bash
cd web
pnpm migration:phase1  # Core data
pnpm migration:phase2  # Content
# or directly:
node src/migration/external-migration.js phase1
node src/migration/external-migration.js phase2
```

### 4. **Comprehensive Testing**

```bash
cd web
pnpm migration:test:full
# or directly:
node src/migration/test-migration-comprehensive.js
```

## ⚙️ Configuration

All scripts require environment variables in `/web/.env.local`:

```bash
STRAPI_API_URL=https://community.play14.org
STRAPI_API_SECRET=your_strapi_api_token_here
VITE_CONVEX_URL=http://127.0.0.1:3210  # For Convex connection
```

## 📊 Migration Process

1. **Phase 1 (Core Data)**
   - Tags
   - Event Locations
   - Venues
   - Sponsors

2. **Phase 2 (Content)**
   - Players
   - Articles
   - Games

3. **Phase 3 (Relationships)** - Planned
   - Event relationships (hosts, mentors, attendees)
   - Game relationships (documenters, proposers)
   - Article-tag relationships

## 🔧 Prerequisites

- Node.js environment
- Convex dev server running (`pnpm dev:backend`)
- Valid Strapi API credentials
- Network access to Strapi API

## ✨ **Standardization Benefits**

- **ES Modules Only**: All scripts use modern ES module syntax (no more `.cjs` files)
- **Environment Variables**: All scripts use secure environment variable configuration
- **No Hardcoded Secrets**: All API credentials loaded from `.env.local`
- **Consistent Naming**: Clear, descriptive file names
- **npm Scripts**: Convenient `pnpm migration:*` commands

## 📝 **Technical Notes**

- **External Script Approach**: These scripts run outside Convex to work around environment variable limitations
- **Deduplication**: Scripts include logic to prevent duplicate records using Strapi IDs
- **Error Handling**: Graceful failure handling with detailed logging
- **Production Ready**: The external-migration.js script is production-tested
- **Module System**: Uses ES modules (`import/export`) consistently throughout

## 🔗 Related Documentation

- **Main Migration Guide**: `/docs/migration/strapi-to-convex-migration.md`
- **Security Setup**: `/docs/migration/MIGRATION_SECURITY.md`
- **Image Migration**: `/docs/migration/IMAGE_MIGRATION.md`
