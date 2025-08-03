# Phased Frontend Migration Strategy: Next.js to SvelteKit

## Overview

This document outlines a two-phase approach for migrating the play14.org frontend, allowing for incremental modernization while maintaining the production Strapi backend.

## Phase 1: Frontend-Only Migration (Next.js → SvelteKit + Strapi)

### Goal

Migrate the frontend framework from Next.js to SvelteKit while keeping the existing Strapi GraphQL backend unchanged. This allows us to modernize the UI layer without disrupting the content management system.

### Architecture

```
Current:  Next.js + Apollo → GraphQL → Strapi
Phase 1:  SvelteKit + GraphQL Client → GraphQL → Strapi
Phase 2:  SvelteKit → Convex (future)
```

### Phase 1 Implementation Strategy

#### 1.1 GraphQL Integration for SvelteKit

**Option A: Apollo Client for Svelte**

```typescript
// $lib/apollo-client.ts
import { ApolloClient, InMemoryCache } from '@apollo/client/core'

export const client = new ApolloClient({
  uri: process.env.STRAPI_API_URL + '/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${process.env.STRAPI_API_SECRET}`,
  },
})
```

**Option B: Native GraphQL with Houdini** (Recommended)

```typescript
// houdini.config.js
export default {
  client: {
    url: process.env.STRAPI_API_URL + '/graphql',
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_SECRET}`,
    },
  },
  plugins: {
    'houdini-svelte': {},
  },
}
```

**Option C: Simple fetch-based GraphQL**

```typescript
// $lib/graphql-client.ts
export async function graphql(query: string, variables = {}) {
  const response = await fetch(process.env.STRAPI_API_URL + '/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.STRAPI_API_SECRET}`,
    },
    body: JSON.stringify({ query, variables }),
  })
  return response.json()
}
```

#### 1.2 Migration Steps

##### Week 1-2: Setup & Foundation

1. **Initialize SvelteKit project** in `/web-strapi/`

   ```bash
   npm create svelte@latest web-strapi
   cd web-strapi
   npm install
   ```

2. **Install GraphQL dependencies**

   ```bash
   # For Houdini (recommended)
   npm install -D houdini houdini-svelte graphql

   # Or for Apollo
   npm install @apollo/client graphql
   ```

3. **Copy GraphQL queries** from `/ui/src/graphql/`
   - Maintain exact same queries
   - Keep fragment structure
   - Preserve type generation

4. **Setup environment variables**
   ```env
   STRAPI_API_URL=https://community.play14.org
   STRAPI_API_SECRET=<token>
   PUBLIC_MAPBOX_TOKEN=<token>
   ```

##### Week 3-4: Core Layout & Routing

1. **Migrate routing structure**

   ```
   /ui/src/app/            → /web-strapi/src/routes/
   layout.tsx              → +layout.svelte
   page.tsx                → +page.svelte
   events/[slug]/page.tsx  → events/[slug]/+page.svelte
   ```

2. **Convert layout components**
   - Navbar (with GraphQL navigation query)
   - Footer
   - SEO/Meta tags setup
   - Apollo/GraphQL provider

3. **Setup styling foundation**
   - Install Tailwind CSS
   - Create utility classes matching Bootstrap
   - Port critical SCSS variables

##### Week 5-6: Data Fetching Patterns

1. **Implement SvelteKit load functions**

   ```typescript
   // +page.server.ts
   export async function load({ params }) {
     const { data } = await client.query({
       query: EVENTS_QUERY,
       variables: { page: 1, pageSize: 10 },
     })
     return {
       events: data.events,
     }
   }
   ```

2. **Client-side queries**
   ```svelte
   <script>
     import { query } from '$houdini'

     const { data } = query(EventsQuery, {
       variables: { page: 1 },
     })
   </script>
   ```

##### Week 7-10: Component Migration

1. **Prioritized component conversion**
   - Home page components
   - Event listing/cards
   - Event detail pages
   - Game components
   - Player profiles
   - Article/blog components

2. **Third-party integrations**
   - Mapbox GL (create Svelte wrapper)
   - Calendar component
   - Image galleries
   - Form handling

##### Week 11-12: Polish & Testing

1. **Performance optimization**
   - Image optimization
   - Code splitting
   - Prefetching strategies

2. **Testing & validation**
   - E2E tests with Playwright
   - GraphQL query validation
   - Cross-browser testing

### Phase 1 Benefits

- **No backend changes required** - Strapi remains untouched
- **Gradual migration** - Can run both frontends in parallel
- **Same data source** - No data migration needed
- **Familiar patterns** - GraphQL queries remain the same
- **Quick wins** - Modern DX with Vite, better performance

### Phase 1 Challenges

- **GraphQL client selection** - Need to choose appropriate client
- **Type generation** - Maintain TypeScript types from GraphQL
- **Authentication** - Replicate Apollo auth setup
- **Caching** - Implement query caching strategy

## Phase 2: Backend Migration (Strapi → Convex)

### Goal

Once the SvelteKit frontend is stable and proven, migrate from Strapi GraphQL to Convex for improved real-time capabilities and simpler architecture.

### Phase 2 Strategy

#### 2.1 Preparation (2 weeks)

1. **Data migration**
   - Use existing Convex migration scripts
   - Validate all content types
   - Test file migrations

2. **API compatibility layer**
   - Create Convex functions matching GraphQL queries
   - Maintain same data shapes initially
   - Gradual schema optimization

#### 2.2 Migration Approach

**Option A: Big Bang**

- Switch entire frontend at once
- Requires comprehensive testing
- Higher risk, faster completion

**Option B: Feature Flags** (Recommended)

```typescript
// $lib/data-source.ts
export async function getEvents(params) {
  if (useConvex) {
    return convex.query(api.events.list, params)
  } else {
    return graphqlClient.query(EVENTS_QUERY, params)
  }
}
```

**Option C: Gradual Route Migration**

- Migrate one route at a time
- Start with simple pages (about, contact)
- Progress to complex features

#### 2.3 Implementation Steps

1. **Week 1-2: Setup Convex**
   - Configure Convex in existing SvelteKit app
   - Create parallel data fetching functions
   - Implement feature flags

2. **Week 3-4: Migrate read operations**
   - Replace GraphQL queries with Convex queries
   - Maintain data shape compatibility
   - Test thoroughly

3. **Week 5-6: Migrate write operations**
   - Convert mutations to Convex mutations
   - Update form submissions
   - Implement optimistic updates

4. **Week 7-8: Add real-time features**
   - Live event updates
   - Real-time comments/testimonials
   - Collaborative features

### Phase 2 Benefits

- **Real-time updates** - Built-in reactivity
- **Simpler architecture** - No GraphQL layer
- **Better performance** - Direct database queries
- **Type safety** - End-to-end TypeScript

## Migration Timeline

### Phase 1: 12 weeks

- Weeks 1-2: Setup and foundation
- Weeks 3-4: Layout and routing
- Weeks 5-6: Data fetching patterns
- Weeks 7-10: Component migration
- Weeks 11-12: Testing and deployment

### Phase 2: 8 weeks (after Phase 1 stabilization)

- Weeks 1-2: Convex setup and compatibility
- Weeks 3-4: Read operation migration
- Weeks 5-6: Write operation migration
- Weeks 7-8: Real-time features and optimization

## Risk Mitigation

### Phase 1 Risks

1. **GraphQL complexity in SvelteKit**
   - Mitigation: Use proven libraries (Houdini)
   - Fallback: Simple fetch-based client

2. **SEO impact**
   - Mitigation: Implement proper SSR
   - Use SvelteKit's SEO features

3. **Performance regression**
   - Mitigation: Benchmark early
   - Optimize critical paths

### Phase 2 Risks

1. **Data inconsistency**
   - Mitigation: Comprehensive migration testing
   - Maintain Strapi backup

2. **Feature gaps**
   - Mitigation: Feature parity checklist
   - Gradual rollout

## Recommended Approach

1. **Start with Phase 1** - Migrate to SvelteKit while keeping Strapi
2. **Validate and stabilize** - Run in production for 2-3 months
3. **Execute Phase 2** - Migrate to Convex with confidence
4. **Iterate and optimize** - Add real-time features post-migration

This phased approach minimizes risk while allowing for incremental improvements and validation at each step.
