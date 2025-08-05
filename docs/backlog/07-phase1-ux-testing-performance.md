# Phase 1: UX, Testing & Performance Strategy

## 1. Internationalization (i18n)

### Current State Analysis

The app mentions "Multi-language support (English/French)" but implementation details need investigation.

### SvelteKit i18n Strategy

**Recommended: SvelteKit-i18n**

```bash
npm install sveltekit-i18n
```

```typescript
// src/lib/i18n/index.ts
import i18n from 'sveltekit-i18n'

const config = {
  loaders: [
    {
      locale: 'en',
      key: 'common',
      loader: async () => (await import('./en/common.json')).default,
    },
    {
      locale: 'fr',
      key: 'common',
      loader: async () => (await import('./fr/common.json')).default,
    },
  ],
}

export const { t, locale, locales, loading, loadTranslations } = new i18n(config)
```

**Alternative: svelte-i18n**

```bash
npm install svelte-i18n
```

Simple runtime i18n solution with good Svelte integration.

### Implementation Plan

1. Detect current i18n implementation in Next.js
2. Extract translation files
3. Set up locale detection in `hooks.server.ts`
4. Implement language switcher component

## 2. Error Handling

### Error Pages

```svelte
<!-- src/routes/+error.svelte -->
<script lang="ts">
  import { page } from '$app/stores'
</script>

{#if $page.status === 404}
  <div class="error-container">
    <h1>404 - Page Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
    <a href="/">Go back home</a>
  </div>
{:else if $page.status === 500}
  <div class="error-container">
    <h1>500 - Server Error</h1>
    <p>Something went wrong. Please try again later.</p>
  </div>
{:else}
  <div class="error-container">
    <h1>Error {$page.status}</h1>
    <p>{$page.error?.message}</p>
  </div>
{/if}
```

### Error Boundaries for Components

```typescript
// src/lib/utils/error-boundary.ts
export function handleError(error: unknown, element: HTMLElement) {
  console.error('Component error:', error)
  element.innerHTML = '<div class="error">Component failed to load</div>'
}
```

### GraphQL Error Handling

```typescript
// src/lib/graphql-error-handler.ts
export function handleGraphQLError(error: GraphQLError) {
  if (error.extensions?.code === 'UNAUTHENTICATED') {
    // Handle auth errors
  } else if (error.extensions?.code === 'FORBIDDEN') {
    // Handle permission errors
  } else {
    // Generic error handling
  }
}
```

## 3. Loading States & Skeleton Screens

### Skeleton Component Library

```svelte
<!-- src/lib/components/skeleton/Skeleton.svelte -->
<script lang="ts">
  export let width = '100%'
  export let height = '20px'
  export let borderRadius = '4px'
</script>

<div class="skeleton" style:width style:height style:border-radius={borderRadius} />

<style>
  .skeleton {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
  }

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
</style>
```

### Progressive Loading Pattern

```svelte
<!-- EventGrid.svelte -->
<script lang="ts">
  import { onMount } from 'svelte'
  import EventCard from './EventCard.svelte'
  import EventSkeleton from './EventSkeleton.svelte'

  export let initialEvents: Event[] = []
  let events = initialEvents
  let loading = false
  let page = 1

  async function loadMore() {
    loading = true
    const newEvents = await fetchEvents({ page: ++page })
    events = [...events, ...newEvents]
    loading = false
  }

  // Intersection Observer for infinite scroll
  let trigger: HTMLElement
  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !loading) {
          loadMore()
        }
      },
      { rootMargin: '100px' }
    )
    observer.observe(trigger)
    return () => observer.disconnect()
  })
</script>

<div class="event-grid">
  {#each events as event}
    <EventCard {event} />
  {/each}

  {#if loading}
    {#each Array(6) as _}
      <EventSkeleton />
    {/each}
  {/if}

  <div bind:this={trigger} />
</div>
```

### Loading State Management

```typescript
// src/lib/stores/loading.ts
import { writable, derived } from 'svelte/store'

export const loadingStates = writable<Record<string, boolean>>({})

export const isLoading = derived(loadingStates, ($states) =>
  Object.values($states).some((loading) => loading)
)

export function setLoading(key: string, loading: boolean) {
  loadingStates.update((states) => ({
    ...states,
    [key]: loading,
  }))
}
```

## 4. Testing Strategy

### Unit Tests with Vitest

```typescript
// src/lib/components/EventCard.test.ts
import { render } from '@testing-library/svelte'
import { describe, it, expect } from 'vitest'
import EventCard from './EventCard.svelte'

describe('EventCard', () => {
  it('renders event name', () => {
    const { getByText } = render(EventCard, {
      props: {
        event: {
          name: 'Test Event',
          date: '2024-03-15',
          location: 'Luxembourg',
        },
      },
    })

    expect(getByText('Test Event')).toBeTruthy()
  })
})
```

### E2E Tests with Playwright

```typescript
// e2e/homepage.test.ts
import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('loads and displays title', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/#play14/)
    await expect(page.locator('h1')).toContainText('play is the way')
  })

  test('navigation works', async ({ page }) => {
    await page.goto('/')
    await page.click('text=Events')
    await expect(page).toHaveURL('/events')
  })

  test('search functionality', async ({ page }) => {
    await page.goto('/')
    await page.fill('[data-testid="search-input"]', 'Luxembourg')
    await page.keyboard.press('Enter')
    await expect(page).toHaveURL('/search?q=Luxembourg')
    await expect(page.locator('.search-results')).toBeVisible()
  })
})
```

### Visual Regression Tests

```typescript
// e2e/visual.test.ts
test('event card screenshot', async ({ page }) => {
  await page.goto('/events')
  const eventCard = page.locator('.event-card').first()
  await expect(eventCard).toHaveScreenshot('event-card.png')
})
```

### Test Configuration

```javascript
// playwright.config.ts
export default {
  testDir: './e2e',
  use: {
    baseURL: 'http://localhost:5173',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'mobile', use: { ...devices['iPhone 12'] } },
  ],
  webServer: {
    command: 'npm run preview',
    port: 5173,
    reuseExistingServer: !process.env.CI,
  },
}
```

## 5. Form Validation

### Zod Integration with SvelteKit

```typescript
// src/lib/schemas/contact.ts
import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export type ContactForm = z.infer<typeof contactSchema>
```

```typescript
// src/routes/contact/+page.server.ts
import { contactSchema } from '$lib/schemas/contact'
import { fail } from '@sveltejs/kit'

export const actions = {
  default: async ({ request }) => {
    const formData = Object.fromEntries(await request.formData())

    try {
      const data = contactSchema.parse(formData)
      // Process valid data
      return { success: true }
    } catch (error) {
      if (error instanceof z.ZodError) {
        return fail(400, {
          errors: error.flatten().fieldErrors,
        })
      }
      throw error
    }
  },
}
```

## 6. Progressive Web App (PWA)

### Web App Manifest

```json
// static/manifest.json
{
  "name": "#play14 - play is the way",
  "short_name": "#play14",
  "description": "#play14 is a worldwide gathering of like-minded people who believe that playing is the best way to learn, share and be creative!",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#ffc900",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### Service Worker (Optional)

```javascript
// src/service-worker.ts
import { build, files, version } from '$service-worker'

const CACHE = `cache-${version}`
const ASSETS = [...build, ...files]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(async (keys) => {
      for (const key of keys) {
        if (key !== CACHE) await caches.delete(key)
      }
      self.clients.claim()
    })
  )
})
```

## 7. Performance Strategy

### Bundle Size Optimization

```javascript
// vite.config.js
export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          mapbox: ['mapbox-gl'],
          calendar: ['@event-calendar/core'],
          vendor: ['svelte', '@sveltejs/kit'],
        },
      },
    },
  },
}
```

### Performance Monitoring

```svelte
<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import { onMount } from 'svelte'
  import { browser } from '$app/environment'

  onMount(() => {
    if (browser && 'performance' in window) {
      // Core Web Vitals
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log(`${entry.name}: ${entry.value}ms`)
          // Send to analytics
        }
      }).observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })
    }
  })
</script>
```

### Performance Targets

| Metric                   | Target  | Current (Next.js) |
| ------------------------ | ------- | ----------------- |
| Lighthouse Score         | > 90    | TBD               |
| First Contentful Paint   | < 1.5s  | TBD               |
| Largest Contentful Paint | < 2.5s  | TBD               |
| Total Bundle Size        | < 200KB | ~250KB            |
| Initial JS               | < 50KB  | TBD               |

### Optimization Techniques

1. **Code Splitting**
   - Route-based splitting (automatic in SvelteKit)
   - Dynamic imports for heavy components
   - Lazy load Mapbox and Calendar

2. **Asset Optimization**
   - WebP images with fallbacks
   - Responsive images
   - Font subsetting

3. **Caching Strategy**
   - Static assets: 1 year
   - HTML: no-cache
   - API responses: 5 minutes

## Implementation Timeline

### Week 1: Foundation

- [ ] Set up testing infrastructure
- [ ] Configure Playwright
- [ ] Create skeleton components

### Week 2: Core Features

- [ ] Implement error handling
- [ ] Add loading states
- [ ] Set up i18n

### Week 3: Progressive Enhancement

- [ ] Form validation
- [ ] PWA manifest
- [ ] Performance monitoring

### Week 4: Testing

- [ ] Write unit tests
- [ ] Create E2E test suite
- [ ] Performance testing

## Conclusion

This comprehensive approach ensures a smooth, performant user experience while maintaining code quality through testing. The focus on progressive enhancement and performance optimization will result in a fast, reliable application that works well across all devices and network conditions.
