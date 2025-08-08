#!/usr/bin/env node

// Dev/admin CLI to run the resumable Strapi migration orchestrator via Convex.
// It uses PUBLIC_CONVEX_URL from .env.local and the generated API bindings.
// Optional args:
//   --types=tags,players,events   Limit to these content types
//   --no-files                    Skip file uploads
//   --slice=45000                 Time slice in ms per continue() call

import { readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = resolve(__dirname, '..');

// Load env file for PUBLIC_CONVEX_URL if not present in process.env
try {
  const envPath = join(root, '.env.local');
  const env = readFileSync(envPath, 'utf8');
  for (const line of env.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const [k, ...rest] = trimmed.split('=');
    const v = rest.join('=');
    if (k && v && !(k in process.env)) {
      // trim leading/trailing single or double quotes
      process.env[k] = v.replace(/^["']|["']$/g, '');
    }
  }
} catch {
  // ignore if .env.local is missing
}

const PUBLIC_CONVEX_URL = process.env.PUBLIC_CONVEX_URL || 'http://127.0.0.1:3210';

// Parse CLI args
const argv = process.argv.slice(2);
const getFlag = (name, def) => {
  const match = argv.find((a) => a.startsWith(`--${name}=`));
  if (match) return match.split('=')[1];
  if (argv.includes(`--${name}`)) return true;
  if (argv.includes(`--no-${name}`)) return false;
  return def;
};

const typesCsv = getFlag('types', '');
const contentTypes = typesCsv
  ? typesCsv
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)
  : undefined;
const includeFiles = getFlag('files', true);
const sliceMsStr = getFlag('slice', '45000');
const sliceMs = Number.parseInt(String(sliceMsStr), 10) || 45000;

const main = async () => {
  const { ConvexHttpClient } = await import('convex/browser');
  const { api } = await import('../src/convex/_generated/api.js');

  const client = new ConvexHttpClient(PUBLIC_CONVEX_URL);

  console.log('Starting migration...', { contentTypes, includeFiles, sliceMs, PUBLIC_CONVEX_URL });
  const start = await client.action(api.strapiMigration.startCompleteMigration, {
    includeFiles,
    contentTypes
  });

  let done = false;
  let slice = 0;
  while (!done) {
    slice += 1;
    const res = await client.action(api.strapiMigration.continueCompleteMigration, {
      statusId: start.statusId,
      timeBudgetMs: sliceMs
    });
    console.log(`Slice #${slice}:`, res);
    done = !!res.done;
  }
  console.log('Migration completed.');
};

main().catch((err) => {
  console.error('Migration failed:', err?.stack || err?.message || String(err));
  process.exit(1);
});
