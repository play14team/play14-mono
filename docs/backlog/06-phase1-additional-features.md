# Phase 1 Additional Features: Migration Considerations

## Overview

Beyond the core GraphQL/TypeScript/Auth/Caching challenges, several critical features require specific migration strategies from Next.js to SvelteKit.

## 1. Mapbox GL Integration

### Current Implementation (React)

- Uses `react-map-gl/mapbox` wrapper
- Features: Markers, Popups, Navigation controls
- Token stored in environment variable
- Location data from Strapi in GeoJSON format

### SvelteKit Migration Strategy

**Option A: Native Mapbox GL JS with Svelte wrapper**

```svelte
<!-- MapView.svelte -->
<script lang="ts">
  import { onMount } from 'svelte'
  import mapboxgl from 'mapbox-gl'
  import 'mapbox-gl/dist/mapbox-gl.css'

  export let location: { geometry: { coordinates: [number, number] } } | undefined
  export let height = '500px'
  export let zoom = 15

  let mapContainer: HTMLDivElement
  let map: mapboxgl.Map

  onMount(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN

    map = new mapboxgl.Map({
      container: mapContainer,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: location ? location.geometry.coordinates : [10, 40],
      zoom: location ? zoom : 1,
    })

    if (location) {
      new mapboxgl.Marker({ color: '#ffc900' }).setLngLat(location.geometry.coordinates).addTo(map)
    }

    return () => map.remove()
  })
</script>

<div bind:this={mapContainer} style="height: {height}" />
```

**Option B: MapLibre GL (Open Source Alternative)**

- Drop-in replacement for Mapbox GL
- No token required for basic maps
- Compatible with Mapbox styles

**Recommendation**: Option A (Native Mapbox GL) for feature parity

## 2. Search Implementation

### Current Architecture

- Single GraphQL query searches all content types
- Server-side search via Strapi's fuzzy search plugin
- Returns paginated results for each type

### SvelteKit Implementation

```typescript
// src/routes/search/+page.server.ts
import { searchQuery } from '$houdini'

export async function load({ url }) {
  const query = url.searchParams.get('q')

  if (!query) return { results: null }

  const { data } = await searchQuery({
    variables: { input: query },
  })

  return {
    results: data.search,
  }
}
```

**Key Considerations:**

- Maintain same GraphQL search query
- Implement debouncing for search input
- Consider search-as-you-type with Svelte stores
- Add loading states

## 3. Calendar Component

### Current: React Big Calendar

- Full-featured calendar with month view
- Event tooltips and navigation
- 43KB bundle size

### SvelteKit Alternatives

**Option A: Build Custom Calendar**

```svelte
<!-- SimpleCalendar.svelte -->
<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  export let events: CalendarEvent[]

  const dispatch = createEventDispatcher()

  function handleEventClick(event: CalendarEvent) {
    dispatch('eventClick', event)
  }
</script>
```

**Option B: event-calendar (Svelte-specific)**

```bash
npm install @event-calendar/core @event-calendar/day-grid
```

- 25KB bundle size
- Native Svelte component
- Similar API to FullCalendar

**Option C: vanilla-calendar-pro**

- Lightweight (8KB)
- Framework agnostic
- Basic but sufficient

**Recommendation**: Option B (event-calendar) for feature parity and smaller bundle

## 4. Image Optimization

### Current: Sharp + Next/Image

- Automatic image optimization
- Responsive images
- Lazy loading

### SvelteKit Strategy

**Vite Plugin for Image Optimization:**

```javascript
// vite.config.js
import { imagetools } from 'vite-imagetools'

export default {
  plugins: [
    imagetools({
      defaultDirectives: (id) => {
        if (id.searchParams.has('hero')) {
          return new URLSearchParams({
            format: 'webp;jpg',
            w: '1920;1280;640',
            quality: '80',
          })
        }
        return new URLSearchParams()
      },
    }),
  ],
}
```

**Enhanced Image Component:**

```svelte
<!-- Image.svelte -->
<script lang="ts">
  import { onMount } from 'svelte'

  export let src: string
  export let alt: string
  export let lazy = true

  let imgElement: HTMLImageElement
  let isIntersecting = !lazy

  onMount(() => {
    if (lazy && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            isIntersecting = true
            observer.disconnect()
          }
        },
        { rootMargin: '50px' }
      )
      observer.observe(imgElement)

      return () => observer.disconnect()
    }
  })
</script>

<img
  bind:this={imgElement}
  src={isIntersecting ? src : undefined}
  data-src={src}
  {alt}
  loading={lazy ? 'lazy' : 'eager'}
/>
```

## 5. SEO & Meta Tags

### Current: Next.js Metadata API

```typescript
export const metadata: Metadata = {
  title: '#play14 - play is the way',
  description: '...',
  openGraph: { ... }
}
```

### SvelteKit Approach

**Using svelte-meta-tags:**

```bash
npm install svelte-meta-tags
```

```svelte
<!-- +page.svelte -->
<script lang="ts">
  import { MetaTags } from 'svelte-meta-tags'

  export let data
</script>

<MetaTags
  title="#play14 - {data.event.name}"
  description={data.event.description}
  openGraph={{
    title: data.event.name,
    description: data.event.description,
    images: [{ url: data.event.image }],
    type: 'website',
  }}
/>
```

## 6. Third-Party Integrations

### Weezevent Widget

**Current:**

```jsx
<Script src="https://widget.weezevent.com/weez.js" />
```

**SvelteKit:**

```svelte
<!-- +layout.svelte -->
<svelte:head>
  <script src="https://widget.weezevent.com/weez.js"></script>
</svelte:head>
```

### Analytics & Monitoring

- Replace Next.js Web Vitals with:
  - Vercel Analytics for SvelteKit
  - Or custom implementation with Performance Observer API

## 7. Form Handling

### Current: React Forms

- Contact forms
- Event registration
- Newsletter signup

### SvelteKit Approach

**Using SvelteKit Actions:**

```typescript
// +page.server.ts
export const actions = {
  contact: async ({ request }) => {
    const data = await request.formData()

    // Send to Strapi or email service
    await sendContactForm({
      name: data.get('name'),
      email: data.get('email'),
      message: data.get('message'),
    })

    return { success: true }
  },
}
```

**Progressive Enhancement:**

```svelte
<form method="POST" action="?/contact" use:enhance>
  <!-- Form fields -->
</form>
```

## 8. Static Assets & Fonts

### Migration Steps:

1. Copy `/public` to `/static`
2. Update font imports in CSS
3. Configure Vite for asset handling
4. Maintain same URL structure

## 9. Environment Variables

### Mapping:

```
NEXT_PUBLIC_* → VITE_*
process.env.* → import.meta.env.*
```

### Required Variables:

- `VITE_STRAPI_API_URL`
- `VITE_STRAPI_API_SECRET`
- `VITE_MAPBOX_ACCESS_TOKEN`

## 10. Build & Deployment

### Current: Next.js on Azure Static Web Apps

### Target: SvelteKit with adapter-static for Azure

```javascript
// svelte.config.js
import adapter from '@sveltejs/adapter-static'

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false,
      strict: true,
    }),
  },
}
```

### Azure Static Web Apps Configuration

```json
// staticwebapp.config.json
{
  "routes": [
    {
      "route": "/*",
      "serve": "/index.html",
      "statusCode": 200
    }
  ],
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/images/*.{png,jpg,gif}", "/css/*"]
  },
  "responseOverrides": {
    "404": {
      "rewrite": "/404.html"
    }
  }
}
```

**Deployment Notes:**

- Use `adapter-static` for Azure Static Web Apps
- Configure build output directory
- Set up proper routing fallbacks
- Maintain current Azure deployment pipeline

## Implementation Priority

### High Priority (Weeks 1-2)

1. Mapbox GL integration
2. Search functionality
3. SEO/Meta tags
4. Environment variables

### Medium Priority (Weeks 3-4)

1. Calendar component
2. Image optimization
3. Form handling
4. Third-party widgets

### Low Priority (Week 5)

1. Analytics
2. Performance monitoring
3. Advanced optimizations

## Risk Mitigation

1. **Map Integration**: Test early with production data
2. **Search Performance**: Monitor Strapi query performance
3. **Calendar Migration**: Prototype with multiple libraries
4. **SEO Impact**: Implement redirects and maintain URL structure
5. **Third-party Scripts**: Test compatibility with SvelteKit SSR

## Conclusion

These additional features are critical for feature parity but have clear migration paths. The combination of:

- Native Mapbox GL wrapper
- Event-calendar component
- Vite image optimization
- SvelteKit's built-in features

...provides a modern, performant solution while maintaining all current functionality.
