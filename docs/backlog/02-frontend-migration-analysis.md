# Frontend Migration Analysis - Play14 UI

## Overview

The `/ui` directory contains the current production frontend for https://play14.org. This document analyzes the existing Next.js application structure, dependencies, and implementation details to inform future migration efforts.

## Technology Stack

### Core Framework

- **Next.js 15.4.1** - Using the modern App Router architecture
- **React 19.1.0** - Latest React version with React DOM
- **TypeScript 5.8.3** - Full type safety throughout the application

### Data Fetching

- **Apollo Client 3.13.8** - GraphQL client with Next.js SSR support
- **GraphQL Codegen** - Automatic TypeScript type generation from Strapi schema
- **Server-side Authentication** - Bearer token authentication via environment variables

### Styling

- **SCSS** - Main styling language with modular stylesheets
- **Bootstrap** - CSS framework (imported via `bootstrap.min.css`)
- **Custom SCSS** - play14-specific styles in `/src/styles/scss/play14.scss`
- **Font Awesome** - Icon library
- **Boxicons** - Additional icon set

### UI Components & Libraries

- **Mapbox GL 3.13.0** - Interactive maps for event locations
- **React Map GL 8.0.4** - React wrapper for Mapbox
- **React Big Calendar 1.19.4** - Event calendar displays
- **React Photo Album 3.1.0** - Image gallery functionality
- **Yet Another React Lightbox 3.24.0** - Lightbox for image viewing
- **React Collapsed 4.2.0** - Collapsible content sections
- **React Country Flag 3.1.0** - Country flag icons
- **React Spinners 0.17.0** - Loading indicators

### Utilities

- **Moment.js + Moment Timezone** - Date/time handling with timezone support
- **Lodash** - Utility functions
- **ICS 3.8.1** - iCalendar file generation
- **HTML React Parser 5.2.5** - Parse HTML content from CMS
- **Sharp 0.34.3** - Image optimization
- **Zod 4.0.5** - Schema validation

## Project Structure

### App Router Structure (`/src/app/`)

```
app/
├── layout.tsx              # Root layout with providers
├── page.tsx               # Home page
├── events/
│   ├── [slug]/           # Dynamic event detail pages
│   ├── calendar/         # Calendar view
│   ├── countries/        # Filter by country
│   ├── locations/        # Filter by location
│   ├── map/             # Map view
│   ├── statuses/        # Filter by status
│   └── testimonials/    # Event testimonials
├── games/
│   ├── [slug]/          # Game detail pages
│   ├── categories/      # Filter by category
│   └── tags/           # Filter by tag
├── players/
│   ├── [slug]/         # Player profiles
│   └── positions/      # Filter by position
├── articles/
│   ├── [slug]/        # Article detail pages
│   ├── categories/    # Filter by category
│   └── tags/         # Filter by tag
├── about/
│   ├── format/       # Event format info
│   ├── story/        # Play14 history
│   └── values/       # Manifesto & CoC
├── contact/
├── search/
├── privacy/
└── terms/
```

### Component Organization (`/src/components/`)

```
components/
├── layout/           # Shared layout components
│   ├── navbar.tsx
│   ├── footer.tsx
│   ├── loader.tsx
│   └── ...
├── events/          # Event-specific components
│   ├── card.tsx
│   ├── calendar.tsx
│   ├── map.tsx
│   ├── get.action.ts  # Server actions
│   └── ...
├── games/           # Game components
├── players/         # Player components
├── articles/        # Article components
├── home/           # Homepage components
├── map/            # Map utilities
├── search/         # Search functionality
└── utils/          # Utility components
    ├── apollo-provider.tsx
    └── web-vitals.tsx
```

### GraphQL Queries (`/src/graphql/`)

Organized by feature with `.graphql` files:

- Fragment-based query composition
- Separate files for grid views, details, navigation, sidebars
- Type-safe with generated TypeScript types

## Key Features

### 1. Content Management Integration

- All content fetched from Strapi CMS via GraphQL
- Bearer token authentication for API access
- Auto-generated TypeScript types from GraphQL schema

### 2. Dynamic Routing

- File-based routing with Next.js App Router
- Dynamic segments for content slugs
- Nested routing for filters (categories, tags, etc.)

### 3. Server-Side Rendering

- Apollo Client SSR configuration
- Server components for initial data fetching
- Client components for interactivity

### 4. Maps Integration

- Mapbox GL for interactive event location maps
- Geocoding support for address search
- Static map generation for performance

### 5. Internationalization Ready

- Multi-language support infrastructure
- Country/timezone handling with moment-timezone

### 6. Performance Optimizations

- Image optimization with Sharp
- Lazy loading with Suspense boundaries
- Turbopack for fast development builds

## Development Workflow

### Scripts

```json
{
  "dev": "next dev --turbopack", // Development server
  "build": "next build", // Production build
  "start": "next start", // Production server
  "lint": "next lint", // ESLint
  "format": "prettier src --write", // Code formatting
  "codegen": "graphql-codegen", // Generate types
  "codegen-watch": "npm run codegen --watch"
}
```

### Environment Variables

Required for operation:

- `STRAPI_API_URL` - Backend API endpoint
- `STRAPI_API_SECRET` - Authentication token
- `NEXT_PUBLIC_MAPBOX_TOKEN` - Mapbox API key
- `NEXT_PUBLIC_WEB_VITALS` - Enable performance monitoring

### Package Management

- **PNPM 10.13.1** - Fast, efficient package manager
- Locked dependencies for consistency
- Optimized for specific built dependencies

## Code Patterns

### 1. Server Actions

Using Next.js server actions for data fetching:

```typescript
// get.action.ts files for server-side logic
export async function getEvents(params) {
  // Server-side data fetching
}
```

### 2. Component Structure

- Functional components with TypeScript
- Props interfaces for type safety
- Modular component organization

### 3. GraphQL Integration

- Fragment-based queries for reusability
- Automatic type generation
- Apollo Client hooks for data fetching

### 4. Styling Approach

- SCSS modules for component styles
- Bootstrap utilities for layout
- Custom play14 theme overrides

## Migration Considerations

### Strengths to Preserve

1. Well-organized file structure
2. Type-safe GraphQL integration
3. Server-side rendering capabilities
4. Comprehensive component library
5. Performance optimizations

### Areas for Improvement

1. Bundle size (Bootstrap + multiple icon libraries)
2. Date handling (Moment.js is large)
3. State management (could benefit from more structure)
4. Testing infrastructure (no tests currently)

### Dependencies to Review

- **Moment.js** → Consider modern alternatives (date-fns, dayjs)
- **Lodash** → Tree-shake or use native methods
- **Bootstrap** → Consider Tailwind CSS for smaller bundle
- **Multiple icon libraries** → Consolidate to one solution

## Security Considerations

- API authentication handled server-side
- Environment variables for sensitive data
- No client-side exposure of API tokens
- HTTPS enforcement in production

## Performance Metrics

- Turbopack for fast development builds
- Image optimization with Sharp
- SSR for better initial load times
- Code splitting with dynamic imports

## Conclusion

The current frontend is a well-structured Next.js application with comprehensive features for displaying and managing play14 content. It successfully integrates with the Strapi backend and provides a rich user experience with maps, calendars, and dynamic content filtering. Future migration efforts should preserve the strong architectural patterns while modernizing dependencies and improving bundle size.
