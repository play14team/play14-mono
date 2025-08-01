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
import type * as clearData from '../clearData.js';
import type * as events from '../events.js';
import type * as fileMigration from '../fileMigration.js';
import type * as games from '../games.js';
import type * as imageMigration from '../imageMigration.js';
import type * as players from '../players.js';
import type * as search from '../search.js';
import type * as strapiMigration from '../strapiMigration.js';
import type * as strapiMigrationQueries from '../strapiMigrationQueries.js';
import type * as supporting from '../supporting.js';
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
	clearData: typeof clearData;
	events: typeof events;
	fileMigration: typeof fileMigration;
	games: typeof games;
	imageMigration: typeof imageMigration;
	players: typeof players;
	search: typeof search;
	strapiMigration: typeof strapiMigration;
	strapiMigrationQueries: typeof strapiMigrationQueries;
	supporting: typeof supporting;
	types: typeof types;
}>;
export declare const api: FilterApi<typeof fullApi, FunctionReference<any, 'public'>>;
export declare const internal: FilterApi<typeof fullApi, FunctionReference<any, 'internal'>>;
