/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as articles from "../articles.js";
import type * as cleanupDuplicates from "../cleanupDuplicates.js";
import type * as debugEventsOnly from "../debugEventsOnly.js";
import type * as debugMigration from "../debugMigration.js";
import type * as events from "../events.js";
import type * as games from "../games.js";
import type * as imageMigrationActions from "../imageMigrationActions.js";
import type * as imageMigrationPhase from "../imageMigrationPhase.js";
import type * as migrateEventsBatch from "../migrateEventsBatch.js";
import type * as migration from "../migration.js";
import type * as migrationHelpers from "../migrationHelpers.js";
import type * as migrationPart2 from "../migrationPart2.js";
import type * as migrationPart3 from "../migrationPart3.js";
import type * as players from "../players.js";
import type * as relationshipMigration from "../relationshipMigration.js";
import type * as search from "../search.js";
import type * as supporting from "../supporting.js";
import type * as testSingleEvent from "../testSingleEvent.js";
import type * as types from "../types.js";

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
  cleanupDuplicates: typeof cleanupDuplicates;
  debugEventsOnly: typeof debugEventsOnly;
  debugMigration: typeof debugMigration;
  events: typeof events;
  games: typeof games;
  imageMigrationActions: typeof imageMigrationActions;
  imageMigrationPhase: typeof imageMigrationPhase;
  migrateEventsBatch: typeof migrateEventsBatch;
  migration: typeof migration;
  migrationHelpers: typeof migrationHelpers;
  migrationPart2: typeof migrationPart2;
  migrationPart3: typeof migrationPart3;
  players: typeof players;
  relationshipMigration: typeof relationshipMigration;
  search: typeof search;
  supporting: typeof supporting;
  testSingleEvent: typeof testSingleEvent;
  types: typeof types;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
