# Project Goals

## 1. Platform Migration

- Migrate Strapi backend data and functionality to Convex.
- Migrate Next.js front-end to Svelte 5 + SvelteKit 2.
- Preserve existing user-facing pages & sections (visual + data parity until enhancements phase).

### Acceptance Criteria

- 100% of required Strapi content types present in Convex (events, games, players, articles, locations, venues, sponsors, tags, testimonials, expectations, singletons, relationships).
- All former pages render equivalent sections (Home, Events list/detail, Games list/detail, Articles list/detail, Player profiles) with no 404s for migrated slugs.
- Data migration script idempotent (safe to re-run) and produces summary.

## 2. Theming & UX

- Implement accessible Light / Dark theme (prefers-color-scheme + user toggle persisted).
- Consistent spacing / typography scale; responsive layouts.

### Acceptance Criteria

- Toggle stored (e.g., localStorage) and applied before first paint (no flash).
- WCAG AA contrast for text & interactive elements in both themes.

## 3. Internationalization (i18n)

- English (default) + French.
- All static UI strings externalized; content fields prepared for multilingual extension (future dynamic translations phase).

### Acceptance Criteria

- Language switch control persists preference.
- Route-level or layout-level loader supplies current locale; missing translations fall back to English.

## 4. Performance & Bundle Size

- Keep bundle lean; code-split pages & large components.
- Avoid unnecessary client JS (progressive enhancement).

### Targets

- Initial landing page < 70KB compressed JS (excluding Convex runtime) in production build.
- LCP < 2.0s on 3G Fast emulation.
- Use image optimization & lazy loading for non-critical media.

## 5. SEO Improvements

- SSR (SvelteKit) for all primary content routes.
- Semantic markup + structured data (Event, Article, Organization where applicable).
- Meta tags (title, description, og:, twitter:) dynamically per page.

### Acceptance Criteria

- Each content page has unique canonical URL + meta description.
- Events use JSON-LD schema.org/Event block.

## 6. Accessibility

- Achieve baseline WCAG 2.1 AA for primary flows.
- Keyboard navigable; visible focus states; aria labels where needed.
- No critical axe violations on key pages (home, event detail, game detail, article, player profile).

## 7. Progressive Media Handling

- Use responsive <picture> with appropriate sizes.
- Low-quality placeholder / blurred preview for hero & gallery images.
- Lazy loading offscreen images.

## 8. Observability & Quality

- Unit tests for Convex functions (critical queries/mutations).
- E2E smoke tests (home, events pagination, event detail, language toggle, theme toggle).
- Basic logging around migration + error boundaries on client.

## 9. Security & Content Safety

- Sanitize user-provided / migrated HTML before rendering (server-side or trusted sanitizer).
- Auth guard for privileged mutations; future role-based expansion.

## 10. Admin CMS (Strapi Replacement)

- Build internal admin screens to manage content (events, games, articles, players, locations, sponsors, media).
- Provide authenticated access with role-based permissions (at minimum: Admin, Editor, Viewer).
- Support create/read/update/publish/unpublish workflows; soft delete where appropriate.
- Include basic dashboards: recent changes, pending reviews, migration status.

### Acceptance Criteria

- Authenticated admin route prefix (/admin or /dashboard) inaccessible to anonymous users (redirect to login).
- Role enforcement at both UI (feature gating) and Convex mutation layer (server trust boundary).
- Audit metadata captured (updatedBy user id + timestamp) for each mutating action.
- Ability to upload & attach media; image optimization pipeline integrated.
- No direct Strapi dependency remaining; Strapi service can be decommissioned.

---

## Phases

1. Data Migration Foundation
2. Front-end Parity (SvelteKit + Convex integration)
3. Admin CMS (core CRUD + auth)
4. Theming + i18n
5. SEO & Accessibility Enhancements
6. Performance & Media Optimization
7. Hardening (tests, sanitization, advanced role auth)

---

## Metrics & Tracking

| Area           | Metric                                  | Target                       |
| -------------- | --------------------------------------- | ---------------------------- |
| Data Migration | Missing required types                  | 0                            |
| Bundle         | Compressed JS (home)                    | < 70KB                       |
| Performance    | LCP                                     | < 2.0s                       |
| Accessibility  | Axe critical issues                     | 0                            |
| SEO            | Unique meta descriptions                | 100% core pages              |
| Tests          | Unit (critical functions)               | > 80% lines in convex domain |
| Admin          | Unauthorized access attempts succeeding | 0                            |
| Admin          | Time to publish new event (happy path)  | < 2 min                      |

---

## Risks / Mitigations

- Large migration batches timeout → Use batched actions + resumable checkpoints.
- HTML injection risk → Sanitize before {@html} usage.
- Bundle growth → Continuous analysis (vite-bundle-visualizer + CI budget).

---

## Non-Goals (Current Scope)

- Real-time collaborative editing UI.
- Complex workflow approvals (single-step publish only initially).
- Automated translation of dynamic content.

---

## Next Immediate Actions

1. Verify & complete remaining content type migrations (run selective migration for missing types).
2. Implement homepage remaining sections with Convex data.
3. Add HTML sanitization utility for rich text fields.
4. Introduce i18n scaffolding (locale store + dictionary loader).
5. Design admin auth model (roles + session storage) and skeleton /admin layout.
6. Implement role checks in existing mutations (extend requireAuth).

---

_Last updated: {{DATE}}_
