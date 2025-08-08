# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Strapi migration (dev-only)

We added a small client helper to run the resumable migration orchestrator without hitting Convex action timeouts.

- Helper file: `src/lib/migrationClient.ts`
- Backend actions used: `strapiMigration.startCompleteMigration` and `strapiMigration.continueCompleteMigration`

Two ways to use it:

1. One-call convenience (blocking loop)

Example in any dev-only script/component:

import { runCompleteMigrationClientSide } from "$lib/migrationClient";

// Runs all content types with files; each server slice ~45s until done
const res = await runCompleteMigrationClientSide(import.meta.env.VITE_CONVEX_URL);
console.log("migration done:", res);

// or restrict content types and tweak slice duration
await runCompleteMigrationClientSide(import.meta.env.VITE_CONVEX_URL, ["tags","players"], true, 20000);

2. Step-by-step with your own UI/polling

import { StrapiMigrationClient } from "$lib/migrationClient";

const client = new StrapiMigrationClient(import.meta.env.VITE_CONVEX_URL);
const { statusId, orderedTypes } = await client.start({ includeFiles: true });
console.log("plan:", orderedTypes);

let done = false;
while (!done) {
const res = await client.continue(statusId, 20000); // ~20s per slice
console.log(res);
done = res.done;
}

Notes

- Use only in development or behind admin controls.
- Prefer implementing a small UI with a button that calls `continue()` on an interval to keep the tab responsive.
- This replaces the old monolithic `runCompleteMigration` action to avoid 600s timeouts and unawaited ops.

### CLI: run the migration

You can trigger the orchestrated migration from the terminal.

Prerequisites

- Start Convex dev so the public URL is reachable.

```bash
cd web
pnpm dev:backend
```

- Ensure `web/.env.local` defines `PUBLIC_CONVEX_URL` (defaults to `http://127.0.0.1:3210`).

Run all content types with file uploads

```bash
cd web
pnpm migrate
```

Limit types, skip files, adjust time slice (ms)

```bash
cd web
pnpm migrate -- --types=tags,players --no-files --slice=20000
```

Flags

- `--types=csv` e.g. `tags,players,events`
- `--no-files` to skip file uploads (default is include files)
- `--slice=ms` time budget per continue() call (server minimum applies)

Troubleshooting

- If a slice fails, check the Convex dev logs for the specific error.
