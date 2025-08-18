# Play14 Web Application

SvelteKit web application with Convex backend for the #play14 platform.

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development servers (frontend + backend)
pnpm dev

# Or open browser automatically
pnpm devo
```

## Data Migration

To migrate data from Strapi to Convex:

```bash
# Run complete migration
pnpm migrate

# Check migration status
pnpm migrate:status

# Clean and re-migrate
pnpm migrate:clean
pnpm migrate
```

See [Migration Guide](docs/MIGRATION.md) for detailed instructions.

## Development Commands

```bash
# Frontend only
pnpm dev:frontend

# Backend only
pnpm dev:backend

# Open Convex dashboard
pnpm dashboard

# Linting and formatting
pnpm lint
pnpm format
pnpm check

# Run all checks
pnpm verify

# Testing
pnpm test:unit
pnpm test:e2e
```

## Building

```bash
# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Documentation

- [Migration Guide](docs/MIGRATION.md) - Strapi to Convex data migration
- [Coding Guidelines](docs/coding-guidelines.md) - Development standards
- [Svelte 5 Syntax](docs/svelte5-syntax-changes-from-svelte4.md) - Svelte 5 changes
- [Refactoring Guidelines](docs/refactoring-guildelines.md) - Code refactoring guide

## Tech Stack

- **Frontend**: SvelteKit 2 + Svelte 5 (runes mode)
- **Backend**: Convex (real-time database)
- **UI Components**: shadcn-svelte
- **Styling**: Tailwind CSS v4
- **Testing**: Vitest + Playwright
- **Package Manager**: PNPM
