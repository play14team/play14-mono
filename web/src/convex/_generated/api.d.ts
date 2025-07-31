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
import type * as events from "../events.js";
import type * as games from "../games.js";
import type * as migration from "../migration.js";
import type * as migrationHelpers from "../migrationHelpers.js";
import type * as migrationPart2 from "../migrationPart2.js";
import type * as migrationPart3 from "../migrationPart3.js";
import type * as players from "../players.js";
import type * as search from "../search.js";
import type * as supporting from "../supporting.js";
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
  events: typeof events;
  games: typeof games;
  migration: typeof migration;
  migrationHelpers: typeof migrationHelpers;
  migrationPart2: typeof migrationPart2;
  migrationPart3: typeof migrationPart3;
  players: typeof players;
  search: typeof search;
  supporting: typeof supporting;
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
