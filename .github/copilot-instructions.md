# AI Coding Agent Instructions

Concise, project-specific guidance for working effectively in this monorepo. Follow these rules over generic best practices.

## 1. Monorepo Domains

- `api/` (Strapi 4 + PostgreSQL + GraphQL) CURRENT PRODUCTION backend.
- `ui/` (Next.js App Router + Apollo GraphQL) CURRENT PRODUCTION frontend.
- `web/` (SvelteKit 2 + Svelte 5 runes + Convex + Tailwind + shadcn-svelte) EXPERIMENTAL / migration target.
  Treat `api`+`ui` as stable; `web` is evolving and may diverge from Strapi shapes.

## 2. Package / Tooling

- Managers: `api` = yarn (v1), `ui` & `web` = pnpm. Never mix.
- Lint/format: root & web use ESLint + Prettier. Run (web): `pnpm format && pnpm lint && pnpm lint:convex && pnpm check` (equivalent to `pnpm verify`). If long-running, run individually.
- Type safety: NEVER introduce `any` (rules enforce). Provide proper interfaces / zod-like Convex validators.

## 3. Strapi (api/) Constraints

- DO NOT upgrade: `react-router-dom`, `strapi-blurhash`, `styled-components` (explicitly pinned for admin compatibility).
- Custom config under `api/config` & synced plugin/content settings under `api/config/sync/`.
- Content type implementation lives in `api/src/api/**` (controllers, services, lifecycles). Reuse existing patterns when adding logic.

## 4. Next.js Frontend (ui/)

- GraphQL types generated via `pnpm codegen` after backend schema changes.
- Uses Apollo; prefer generated typed documents instead of raw gql strings.
- Map features rely on Mapbox env vars; don’t rename related token variables casually.

## 5. SvelteKit + Convex App (web/)

- MUST use Svelte 5 runes: `$state()`, `$derived()`, `$effect()`, `$props()`, `$bindable()`; avoid legacy `export let`, `$:` blocks, and `on:click` (use `onclick`).
- Component refactors: split > ~50 lines; move logic to where used; prefer `bind:` instead of passing setters.
- Add new UI parts with shadcn-svelte components; install missing ones: `pnpm dlx shadcn-svelte@latest add <component>`.
- Convex schema + functions under `web/src/convex/`; generated code excluded from lint (`_generated`). Keep indexing consistent—copy existing index patterns when adding tables.
- Migration utilities & scripts: `web/scripts/run-migration*.ts` and Convex functions under `strapiMigration` namespace. When modifying migration, preserve ordering phases (foundation → core → single → supporting → complex → events) as in MIGRATION.md.

## 6. Data Model Alignment / Divergence

- Production data source today = Strapi/Postgres. Convex implementation mirrors key entities: Events, Games, Players, Articles, Venues, Sponsors, Tags, etc.
- File/media handling: in Convex code, convert storage IDs via `ctx.storage.getUrl()` before exposing URLs. Don’t leak raw storage IDs to UI components.
- Draft/publish pattern: `publishedAt` field filters visible content—preserve semantics when adjusting queries.

## 7. Typical Workflows

- Add Strapi field → update Strapi content type → regenerate GraphQL types in `ui` (`pnpm codegen`) → adjust UI queries/components → (optionally) mirror in Convex schema + migration scripts.
- Adjust Convex schema: modify `schema.ts`, run `pnpm dev` (or `convex dev`) once to regenerate types, then update calling Svelte components using generated types.
- Data migration dev loop: `pnpm migrate` → `pnpm migrate:status`; for fast iteration skip files: `pnpm migrate -- --no-files`; clean fully: `pnpm migrate:clean`.

## 8. Testing / QA

- `web`: unit via Vitest (`pnpm test:unit`), e2e via Playwright (`pnpm test:e2e`). Prefer colocating tests in `web/src/tests` or near component.
- `api` & `ui` currently light on automated tests—avoid introducing brittle test infra without explicit request.

## 9. Performance & Structure Patterns (web)

- Use `$derived()` chains for computed values instead of nesting `$effect()`; keep side effects inside isolated `$effect()` returning cleanup if needed.
- Always key each `{#each}` block: `{#each items as item (item.id)}`.
- Prefer small focused components; container orchestrates layout + data; children own their internal logic.

## 10. Styling & UI

- Tailwind v4 + shadcn-svelte; keep utility class ordering consistent (Prettier plugin handles). Avoid inline style objects; prefer utility classes / variants.
- Reuse existing animation durations (e.g., 300–600ms) for consistency.

## 11. CI / Automation

- Claude GitHub Actions respond to `@claude` and perform PR reviews—keep commits atomic and lint-clean to reduce noise.
- API deployment workflow builds Docker image on `main` push; changing Dockerfile or dependency versions implicates container build—verify before merge.

## 12. Do / Don’t Summary

Do:

- Enforce strict TypeScript (no `any`).
- Run lint/format/check before proposing completion.
- Mirror existing indexing & relationship patterns in Convex when adding tables.
- Use generated GraphQL/Convex types, not ad-hoc shapes.
  Don’t:
- Upgrade pinned Strapi/admin deps.
- Introduce legacy Svelte 4 syntax in `web`.
- Commit large unrefactored monolith components (> ~50 lines) without extraction.
- Expose Convex storage IDs directly.

## 13. Example Snippets

Svelte 5 props + bindable:

```svelte
<script lang="ts">
  interface Props {
    services: CoreService[]
    activeService: number
  }
  let { services, activeService = $bindable(0) }: Props = $props()
  function select(i: number) {
    activeService = i
  }
</script>

{#each services as svc (svc.id)}
  <button class="btn" onclick={() => select(svc.index)}>{svc.name}</button>
{/each}
```

Convex query pattern (preserve published filter):

```ts
export const listPublished = query({
  args: { limit: v.number() },
  handler: async (ctx, { limit }) => {
    return await ctx.db
      .query('articles')
      .withIndex('by_publishedAt', (q) => q.gt('publishedAt', 0))
      .order('desc')
      .take(limit)
  },
})
```

## 14. When Unsure

Prefer inspecting analogous existing file (schema / component) and mirror pattern. Ask explicitly before large architectural shifts or introducing new dependencies.

---

If any section is ambiguous or missing key workflows you rely on, let me know so I can refine further.

## 15. Conventions

- Use conventional commits for commit messages
- Use Markdown for details in the commit messages
- Keep component file names consistent (e.g., `EventCard.svelte` for event cards)
- Organize components by feature rather than type (e.g., `events/EventCard.svelte`)
- Prefer using `src/lib/components` for shared components
- Avoid deeply nested component structures
- Use index files to simplify imports (e.g., `src/lib/components/events/index.ts`)

## 16. Additional Resources

- [Svelte Documentation](https://svelte.dev/docs)
- [Convex Documentation](https://docs.convex.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
