# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Structure

This is a monorepo containing three main applications for the #play14 platform:

- **`/api`** - Strapi CMS backend API (Node.js) - **PRODUCTION** backend for https://play14.org
- **`/ui`** - Next.js frontend web application (React/TypeScript) - **PRODUCTION** frontend for https://play14.org
- **`/web`** - SvelteKit web application with Convex backend and shadcn/ui components (experimental/development)

## Development Commands

### API (Strapi Backend)

```bash
cd api
yarn install
yarn dev          # Start development server with auto-reload
yarn build        # Build admin panel
yarn start        # Start production server
yarn export       # Export database backup
yarn import       # Import database backup
```

### UI (Next.js Frontend)

```bash
cd ui
pnpm install
pnpm dev          # Start development server with Turbopack
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm format       # Format code with Prettier
pnpm codegen      # Generate GraphQL types
pnpm codegen-watch # Watch for GraphQL changes
```

### Web (SvelteKit + Convex)

```bash
cd web
pnpm install
pnpm dev          # Start both frontend and Convex backend in parallel
pnpm devo         # Start with browser auto-open
pnpm dev:frontend # Start only SvelteKit dev server
pnpm dev:backend  # Start only Convex dev server
pnpm dashboard    # Open Convex dashboard
pnpm build        # Build for production
pnpm preview      # Preview production build
pnpm lint         # Run ESLint and Prettier checks
pnpm format       # Format code with Prettier
pnpm test         # Run unit tests
pnpm test:e2e     # Run end-to-end tests with Playwright
```

## Architecture Overview

### Backend (Strapi) - PRODUCTION SYSTEM

**Current live backend for https://play14.org**

- **Content Types**: Event, Game, Player, Article, Venue, Sponsor, etc. located in `/api/src/api/`
- **Components**: Reusable content structures in `/api/src/components/`
- **Custom Logic**: Lifecycles and custom controllers for business logic
- **GraphQL**: Auto-generated GraphQL API with custom endpoints
- **Database**: PostgreSQL with geographic data support (PostGIS)
- **Storage**: Azure Blob Storage for file uploads
- **Content Management**: Full-featured Strapi admin panel for content creators
- **Plugins**: Calendar, CKEditor, country/timezone selectors, fuzzy search, map fields

### Frontend (Next.js) - PRODUCTION SYSTEM

**Current live frontend for https://play14.org**

- **App Router**: Modern Next.js app directory structure with file-based routing
- **GraphQL Integration**: Apollo Client with code generation from Strapi schema
- **Styling**: SCSS with Bootstrap base and custom #play14 theme
- **Maps**: Mapbox GL integration for interactive event location maps
- **Internationalization**: Multi-language support (English/French)
- **Key Features**:
  - Event calendar and interactive map
  - Player profiles with positions and social links
  - Game library with ratings and categories
  - Article system with tags and categories
  - Event registration and testimonials
  - Responsive design with mobile optimization

### Web Application (SvelteKit + Convex) - EXPERIMENTAL

**Alternative/future implementation - not currently in production**

- **Framework**: SvelteKit 5 with TypeScript
- **Backend**: Convex for real-time database and backend functions
- **UI Components**: shadcn/ui (Svelte port) with Tailwind CSS
- **Styling**: Tailwind CSS v4 with custom animations
- **State Management**: Convex reactive queries
- **Development**: Parallel frontend/backend development with npm-run-all

### Database Schema (Production - Strapi/PostgreSQL)

Key content types powering https://play14.org:

- **Events**: Locations, schedules, registrations, time slots, timetables, media, sponsorships
- **Games**: Ratings, categories, tags, detailed descriptions
- **Players**: Profiles, positions, social networks, biography
- **Articles**: Content with tags, categories, SEO metadata
- **Venues**: Geographic data (PostGIS), addresses, contact information
- **Event Locations**: Specific event venues with coordinates
- **Testimonials**: User feedback and experiences
- **Sponsors**: Company information and sponsorship details
- **Tags & Categories**: Taxonomies for games and articles
- **Home Page**: Dynamic content configuration
- **History**: Timeline and milestone data

## Testing

- **UI**: No specific test framework configured
- **Web**: Vitest for unit tests, Playwright for e2e tests, Convex for backend testing
- **API**: No specific test configuration

## Package Management

- **API**: Yarn (locked to v1.22.22)
- **UI**: PNPM (v10.13.1)
- **Web**: PNPM (v10.13.1)

## Important Notes

### Production System (API + UI)

- **LIVE WEBSITE**: The `/api` and `/ui` directories contain the current production code for https://play14.org
- **API** has specific dependency constraints (do not update react-router-dom, strapi-blurhash, styled-components)
- Environment variables required for Strapi API connection and Mapbox integration
- GraphQL schema is auto-generated and should be regenerated after API changes with `pnpm codegen`
- Content is managed through the Strapi admin panel
- Database uses PostgreSQL with PostGIS for geographic queries
- File uploads handled by Azure Blob Storage

### Development/Experimental System (Web)

- **EXPERIMENTAL**: The `/web` directory is for future development, not production
- Uses different tech stack: SvelteKit + Convex vs Next.js + Strapi
- Convex functions located in `src/convex/` directory
- Uses shadcn/ui component library with Tailwind CSS v4
- Convex requires authentication and project setup for deployment
- Package managers: API (Yarn), UI (PNPM), Web (PNPM)

## Best Practices

- Always lint and check before you consider a task done
- Use `pnpm verify` to lint and check everything

## Memory of Development Strategies

- It seems you regularly get timeouts on pnpm verify. Why don't you run pnpm format, pnpm lint and pnpm check separately from now on
