/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type { ApiFromModules, FilterApi, FunctionReference } from 'convex/server';
import type * as articles from '../articles.js';
import type * as events from '../events.js';
import type * as games from '../games.js';
import type * as home from '../home.js';
import type * as migration_chunkedMigration from '../migration/chunkedMigration.js';
import type * as migration_cleanupStorage from '../migration/cleanupStorage.js';
import type * as migration_clearData from '../migration/clearData.js';
import type * as migration_fileMigration from '../migration/fileMigration.js';
import type * as migration_fixIdMappings from '../migration/fixIdMappings.js';
import type * as migration_imageMigration from '../migration/imageMigration.js';
import type * as migration_migrationStatus from '../migration/migrationStatus.js';
import type * as migration_storageStatus from '../migration/storageStatus.js';
import type * as migration_strapiMigration from '../migration/strapiMigration.js';
import type * as migration_strapiMigrationBatched from '../migration/strapiMigrationBatched.js';
import type * as migration_strapiMigrationQueries from '../migration/strapiMigrationQueries.js';
import type * as players from '../players.js';
import type * as search from '../search.js';
import type * as supporting from '../supporting.js';
import type * as testimonials from '../testimonials.js';
import type * as types from '../types.js';

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  articles: typeof articles;
  events: typeof events;
  games: typeof games;
  home: typeof home;
  'migration/chunkedMigration': typeof migration_chunkedMigration;
  'migration/cleanupStorage': typeof migration_cleanupStorage;
  'migration/clearData': typeof migration_clearData;
  'migration/fileMigration': typeof migration_fileMigration;
  'migration/fixIdMappings': typeof migration_fixIdMappings;
  'migration/imageMigration': typeof migration_imageMigration;
  'migration/migrationStatus': typeof migration_migrationStatus;
  'migration/storageStatus': typeof migration_storageStatus;
  'migration/strapiMigration': typeof migration_strapiMigration;
  'migration/strapiMigrationBatched': typeof migration_strapiMigrationBatched;
  'migration/strapiMigrationQueries': typeof migration_strapiMigrationQueries;
  players: typeof players;
  search: typeof search;
  supporting: typeof supporting;
  testimonials: typeof testimonials;
  types: typeof types;
}>;
export declare const api: FilterApi<typeof fullApi, FunctionReference<any, 'public'>>;
export declare const internal: FilterApi<typeof fullApi, FunctionReference<any, 'internal'>>;
