// Convex type definitions for the temporary setup
/* eslint-disable @typescript-eslint/no-explicit-any */

export interface DatabaseWriter {
  get: (id: string) => Promise<any>;
  query: (table: string) => QueryInitializer;
  insert: (table: string, document: any) => Promise<string>;
  patch: (id: string, update: any) => Promise<void>;
  delete: (id: string) => Promise<void>;
}

export interface DatabaseReader {
  get: (id: string) => Promise<any>;
  query: (table: string) => QueryInitializer;
}

export interface QueryInitializer {
  withIndex: (indexName: string, callback: (q: QueryBuilder) => any) => Query;
  filter: (callback: (q: QueryBuilder) => any) => Query;
  collect: () => Promise<any[]>;
  unique: () => Promise<any | null>;
  order: (direction: 'asc' | 'desc') => Query;
}

export interface Query {
  withIndex: (indexName: string, callback: (q: QueryBuilder) => any) => Query;
  filter: (callback: (q: QueryBuilder) => any) => Query;
  collect: () => Promise<any[]>;
  unique: () => Promise<any | null>;
  order: (direction: 'asc' | 'desc') => Query;
}

export interface QueryBuilder {
  eq: (field: string, value: any) => any;
  neq: (field: string, value: any) => any;
  field: (name: string) => any;
}

// Type for query builder callbacks
export type QueryCallback = (q: QueryBuilder) => any;

// Generic type for database documents
export type DatabaseDocument = Record<string, any>;

export interface ConvexQueryContext {
  db: DatabaseReader;
}

export interface ConvexMutationContext {
  db: DatabaseWriter;
}
