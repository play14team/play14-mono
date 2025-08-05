# Frontend Migration Strategy: Next.js to SvelteKit

## Executive Summary

This document outlines a comprehensive strategy for migrating the production Next.js frontend (`/ui`) to the experimental SvelteKit + Convex stack (`/web`). The migration involves transitioning from React/Next.js/Apollo/Strapi to Svelte/SvelteKit/Convex while maintaining feature parity and improving performance.

## Current State Analysis

### Production Stack (ui/)

- **Framework**: Next.js 15.4.1 with App Router
- **UI Library**: React 19.1.0
- **Data Layer**: Apollo Client + GraphQL (Strapi backend)
- **Styling**: SCSS + Bootstrap + Font Awesome
- **State**: Apollo cache + React context
- **Build**: Turbopack, PNPM

### Target Stack (web/)

- **Framework**: SvelteKit 2.22.0
- **UI Library**: Svelte 5.0.0
- **Data Layer**: Convex (real-time database)
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **State**: Convex reactive queries
- **Build**: Vite, PNPM

## Migration Strategy

### Phase 1: Foundation Setup ✅ (Completed)

- Convex backend migration system implemented
- All 14 content types migrated from Strapi
- File migration infrastructure ready
- Basic SvelteKit project structure established

### Phase 2: Routing Migration

Map Next.js App Router to SvelteKit file-based routing:

```
Next.js (App Router)          →  SvelteKit
/app/page.tsx                 →  /routes/+page.svelte
/app/events/[slug]/page.tsx   →  /routes/events/[slug]/+page.svelte
/app/layout.tsx               →  /routes/+layout.svelte
```

**Key Changes**:

- Replace `.tsx` with `.svelte`
- Move from `page.tsx` to `+page.svelte`
- Convert server actions to `+page.server.ts`
- Adapt dynamic routes syntax (same pattern)

### Phase 3: Component Migration

#### 3.1 Component Conversion Strategy

**React to Svelte Conversion Pattern**:

```typescript
// React Component
export function EventCard({ event, className }: Props) {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    // side effect
  }, [event.id]);

  return <div className={cn("card", className)}>...</div>;
}

// Svelte Component
<script lang="ts">
  import { onMount } from 'svelte';
  import { cn } from '$lib/utils';

  export let event: Event;
  export let className = '';

  let expanded = $state(false);

  onMount(() => {
    // side effect
  });
</script>

<div class={cn("card", className)}>...</div>
```

#### 3.2 Component Priority Order

1. **Layout Components** (Week 1)
   - Navbar → Navigation Menu (shadcn/ui)
   - Footer → Custom component
   - Layout wrapper → +layout.svelte

2. **Shared Components** (Week 2)
   - Cards → shadcn/ui Card
   - Buttons → shadcn/ui Button
   - Forms → shadcn/ui form components
   - Modals → shadcn/ui Dialog

3. **Feature Components** (Weeks 3-6)
   - Events (calendar, map, cards)
   - Games (grid, filters, details)
   - Players (profiles, grid)
   - Articles (blog layout)
   - Home page sections

### Phase 4: Data Layer Migration

#### 4.1 Apollo to Convex Conversion

**Current Apollo Pattern**:

```typescript
// GraphQL Query
const { data, loading } = useQuery(EVENTS_QUERY, {
  variables: { page, pageSize },
})

// Server Action
export async function getEvents(params) {
  const client = getClient()
  return client.query({ query: EVENTS_QUERY, variables: params })
}
```

**Target Convex Pattern**:

```typescript
// Convex Query
import { useQuery } from 'convex-svelte'
import { api } from '$convex/_generated/api'

const events = useQuery(api.events.list, { page, pageSize })

// Load Function
export async function load({ params }) {
  const events = await convex.query(api.events.list, params)
  return { events }
}
```

#### 4.2 Migration Steps

1. **Remove GraphQL layer**
   - Delete GraphQL queries
   - Remove codegen configuration
   - Uninstall Apollo dependencies

2. **Implement Convex queries**
   - Create query functions for each data need
   - Add pagination support
   - Implement filtering/sorting

3. **Real-time updates**
   - Leverage Convex subscriptions
   - Remove polling/refetch logic
   - Simplify cache management

### Phase 5: Styling Migration

#### 5.1 Bootstrap to Tailwind Conversion

**Utility mapping**:

```
Bootstrap              → Tailwind CSS
.container             → max-w-7xl mx-auto px-4
.row                   → flex flex-wrap -mx-4
.col-lg-6             → lg:w-1/2 px-4
.pt-100               → pt-24
.btn btn-primary      → btn btn-primary (custom)
.d-flex               → flex
.justify-content-center → justify-center
```

#### 5.2 SCSS to Tailwind

1. **Extract design tokens**
   - Colors from `play14.scss`
   - Spacing/sizing patterns
   - Custom animations

2. **Configure Tailwind**

   ```javascript
   // tailwind.config.js
   export default {
     theme: {
       extend: {
         colors: {
           play14: {
             primary: '#...',
             secondary: '#...',
           },
         },
       },
     },
   }
   ```

3. **Component classes**
   - Use Tailwind utilities
   - Extract complex patterns to components
   - Leverage shadcn/ui base styles

### Phase 6: Feature-Specific Migrations

#### 6.1 Maps (Mapbox GL)

- Keep Mapbox GL JS
- Create Svelte wrapper component
- Migrate geocoding functionality
- Preserve marker/popup logic

#### 6.2 Calendar (React Big Calendar → Native)

- Build custom Svelte calendar
- Or use lightweight alternative
- Maintain event display format
- Preserve timezone handling

#### 6.3 Image Galleries

- Migrate to Svelte-compatible lightbox
- Maintain lazy loading
- Preserve album structure

#### 6.4 File Handling

- Adapt Sharp image optimization
- Configure Vite for static assets
- Implement Convex file storage

### Phase 7: Migration Execution Plan

#### Timeline (12 weeks)

**Weeks 1-2: Foundation**

- Set up routing structure
- Migrate layout components
- Configure Tailwind/shadcn

**Weeks 3-4: Core Features**

- Home page
- Event listing/detail pages
- Basic navigation

**Weeks 5-6: Interactive Features**

- Maps integration
- Calendar views
- Search functionality

**Weeks 7-8: Content Types**

- Games section
- Players profiles
- Articles/blog

**Weeks 9-10: Polish**

- Responsive design
- Performance optimization
- SEO implementation

**Weeks 11-12: Testing & Deployment**

- E2E tests with Playwright
- Performance testing
- Staged rollout

### Phase 8: Risk Mitigation

#### Technical Risks

1. **Map Integration**
   - Risk: Mapbox compatibility
   - Mitigation: Early prototype, fallback to wrapper

2. **SEO Impact**
   - Risk: Lost search rankings
   - Mitigation: Implement SvelteKit SEO, redirects

3. **Performance Regression**
   - Risk: Slower initial loads
   - Mitigation: Benchmark early, optimize critical path

#### Process Risks

1. **Feature Parity**
   - Risk: Missing functionality
   - Mitigation: Detailed feature audit, user testing

2. **Data Migration**
   - Risk: Data loss/corruption
   - Mitigation: Incremental migration, validation

## Implementation Checklist

### Pre-Migration

- [ ] Complete feature audit
- [ ] Document all API endpoints
- [ ] Inventory third-party integrations
- [ ] Set up staging environment

### During Migration

- [ ] Maintain parallel deployments
- [ ] Implement feature flags
- [ ] Regular regression testing
- [ ] Performance monitoring

### Post-Migration

- [ ] Full E2E test suite
- [ ] Performance benchmarks
- [ ] SEO validation
- [ ] User acceptance testing

## Success Metrics

1. **Performance**
   - Page load time < 2s
   - Lighthouse score > 90
   - Bundle size < 200KB

2. **Functionality**
   - 100% feature parity
   - Zero data loss
   - Improved real-time updates

3. **Developer Experience**
   - Faster build times
   - Simpler data management
   - Better type safety

## Conclusion

The migration from Next.js to SvelteKit represents a significant architectural shift that promises improved performance, developer experience, and real-time capabilities. With Convex backend migration already complete, the frontend migration can proceed systematically, ensuring feature parity while leveraging the strengths of the new stack.

The key to success is incremental migration with continuous validation, allowing for course correction and risk mitigation throughout the process.
