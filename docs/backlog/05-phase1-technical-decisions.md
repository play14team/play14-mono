# Phase 1 Technical Decisions: SvelteKit + Strapi Migration

## Executive Summary

After analyzing the four main challenges for Phase 1, the recommended solution stack is:

- **GraphQL Client**: Houdini
- **Type Generation**: Houdini's built-in automatic generation
- **Authentication**: Server-side Bearer token via Houdini config
- **Caching**: Houdini's normalized cache with CacheOrNetwork policy

## Detailed Analysis & Recommendations

### 1. GraphQL Client: Houdini (Recommended)

**Why Houdini over alternatives:**

| Feature               | Houdini                     | Apollo Client  | urql          |
| --------------------- | --------------------------- | -------------- | ------------- |
| Bundle Size           | Compile-time optimization   | 30.7KB         | 12KB          |
| SvelteKit Integration | Native                      | Requires hacks | Good          |
| Developer Experience  | Excellent                   | Good           | Good          |
| Type Generation       | Built-in                    | Separate tool  | Separate tool |
| Community             | Growing (SvelteKit-focused) | Large          | Small         |
| Documentation         | Excellent for SvelteKit     | React-focused  | Generic       |

**Key advantages:**

- Built specifically for SvelteKit with seamless integration
- Shifts runtime complexity to compile-time (smaller bundle)
- Automatic Svelte store generation for each query
- Native SSR support with hydration
- Integrated with KitQL ecosystem (2024 update)

**Implementation:**

```bash
npm install -D houdini houdini-svelte graphql
npx houdini init
```

### 2. Type Generation: Built-in with Houdini

**Current setup (Next.js):**

- Uses `@graphql-codegen/cli` with client preset
- Generates types to `src/models/`
- Requires separate codegen step

**Houdini approach:**

- Automatic type generation for all documents
- No separate codegen configuration needed
- Types generated to `$houdini/types`
- Watches for changes automatically

**Migration steps:**

1. Copy `.graphql` files from `/ui/src/graphql/` to new project
2. Houdini will automatically generate types
3. Update imports from `@/models` to `$houdini`

**TypeScript configuration:**

```json
{
  "compilerOptions": {
    "rootDirs": [".", "./.svelte-kit/types", "./$houdini/types"]
  }
}
```

### 3. Authentication: Server-side Bearer Token

**Current implementation:**

- Apollo's `setContext` adds Bearer token to all requests
- Token from `process.env.STRAPI_API_SECRET`

**Houdini implementation:**

```javascript
// houdini.config.js
export default {
  watchSchema: {
    url: process.env.STRAPI_API_URL + '/graphql',
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_SECRET}`,
    },
  },
  plugins: {
    'houdini-svelte': {
      client: './src/client',
    },
  },
}
```

For production with dynamic tokens:

```javascript
// src/client.ts
import { HoudiniClient } from '$houdini'

export default new HoudiniClient({
  url: import.meta.env.VITE_STRAPI_API_URL + '/graphql',
  fetchParams() {
    return {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_SECRET}`,
      },
    }
  },
})
```

### 4. Caching Strategy: Normalized Cache

**Current Apollo setup:**

- `InMemoryCache` with default settings
- `fetchOptions: { cache: "no-store" }` for SSR

**Houdini caching approach:**

1. **Default normalized cache** - Automatic entity normalization
2. **Cache policies** - Use `CacheOrNetwork` for optimal performance
3. **Partial data support** - Can show cached data while fetching updates
4. **Automatic updates** - Declarative fragments update cache automatically

**Configuration:**

```javascript
// @cache directive in queries
query EventList @cache(policy: CacheOrNetwork) {
  events {
    id
    name
    # ...
  }
}
```

**Benefits over Apollo:**

- No manual cache updates needed
- Fragment-level subscriptions (better performance)
- Compile-time optimizations
- Built-in stale data management

## Migration Plan

### Week 1: Setup

1. Create new SvelteKit project
2. Install and configure Houdini
3. Set up environment variables
4. Copy GraphQL queries

### Week 2: Core Integration

1. Configure Houdini client with authentication
2. Test type generation
3. Implement first query with caching
4. Validate Strapi connection

### Week 3-4: Systematic Migration

1. Port layout components
2. Migrate page by page
3. Convert Apollo hooks to Houdini stores
4. Test caching behavior

## Risk Mitigation

1. **Learning Curve**:
   - Mitigation: Start with simple queries, use Houdini docs
2. **Query Compatibility**:
   - Mitigation: Test each query individually, maintain query structure

3. **Cache Behavior Differences**:
   - Mitigation: Compare Apollo vs Houdini behavior, adjust policies

4. **Environment Variables**:
   - Mitigation: Use Vite's env system, validate in dev/prod

## Conclusion

Houdini provides the most integrated, performant, and developer-friendly solution for SvelteKit + GraphQL. Its built-in features address all four challenges elegantly:

1. ✅ Native SvelteKit GraphQL client
2. ✅ Automatic TypeScript generation
3. ✅ Simple authentication setup
4. ✅ Powerful normalized caching

This solution maintains compatibility with the existing Strapi GraphQL API while providing a modern, optimized frontend stack ready for future Phase 2 migration to Convex.
