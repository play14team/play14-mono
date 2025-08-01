# Backend Migration: Strapi to Convex

## Overview

This document outlines the migration plan for transitioning the #play14 backend from Strapi CMS to Convex for the experimental `/web` application. This migration aims to leverage Convex's real-time capabilities, simplified deployment, and modern development experience while maintaining all existing functionality.

## Current System Analysis

### Strapi Backend Architecture

- **Database**: PostgreSQL with PostGIS for geographic data
- **Content Management**: Strapi admin panel for non-technical users
- **API**: Auto-generated GraphQL and REST APIs
- **Authentication**: Strapi users-permissions plugin
- **File Storage**: Azure Blob Storage integration
- **Internationalization**: Built-in i18n with English/French support
- **Custom Logic**: Lifecycles, custom controllers, and services

## Frontend GraphQL Analysis

### Query Patterns & Data Requirements

**Pagination Strategy**:

- **Grid Views**: Use page-based pagination (`page`, `pageSize`)
- **Related Data**: Use high limits (`limit: 10000`) for complete datasets
- **Meta Data**: Requires `meta.pagination` with `page`, `pageSize`, `total`, `pageCount`

**Filtering Patterns**:

- **Events**: By `status`, `location.slug`, `location.country`, date ranges
- **Games**: By `category`, `tags.value`
- **Articles**: By `category`, `tags.value`
- **Players**: By `position`

**Sorting Patterns**:

- **Events**: `start:desc` (grid), `start:asc` (upcoming)
- **Games**: `name:asc`
- **Articles**: `publishedAt:desc`
- **Players**: `name:asc`

**Search Requirements**:

- **Global Search**: Returns results across all content types (events, players, games, articles)
- **Fuzzy Search**: Current system uses Strapi fuzzy-search plugin
- **Published Filter**: All search results filter by `publishedAt: { notNull: true }`

**Image/Media Handling**:

- **Required Fields**: `id`, `name`, `url`, `width`, `height`
- **Blurhash**: Used for progressive image loading (`blurhash` field)
- **Multiple Images**: Arrays of images for galleries
- **File Resources**: Documents, videos, audio files for games

### Core Content Types

#### 1. Events (`api::event.event`)

**Primary entity for #play14 gatherings**

- **Fields**:
  - `name` (string, unique, i18n)
  - `slug` (uid from name)
  - `start/end` (datetime)
  - `status` (enum: Announced, Open, Over, Cancelled)
  - `description` (rich text, i18n)
  - `contactEmail` (email)
  - `tagline` (string, i18n)
  - `timezone` (custom field)
  - `defaultImage` (media)
  - `images` (media array)
- **Relations**:
  - `location` � EventLocation (many-to-one)
  - `venue` � Venue (many-to-one)
  - `hosts` � Players (many-to-many)
  - `mentors` � Players (many-to-many)
  - `players` � Players (many-to-many, attendees)
- **Components**:
  - `timetable[]` (day-based schedule with timeslots)
  - `registration` (registration details)
  - `sponsorships[]` (sponsor information)
  - `media[]` (photos, videos)
  - `finance` (financial reporting)

#### 2. Games (`api::game.game`)

**Game/activity documentation system**

- **Fields**:
  - `name` (string, unique, i18n)
  - `slug` (uid, i18n)
  - `category` (enum: Game, IceBreaker, WarmUp, Facilitation, Retrospective, CoolDown)
  - `scale` (string, i18n - participant count)
  - `timebox` (string, i18n - duration)
  - `summary` (text, i18n)
  - `description` (rich text, i18n)
  - `credits` (string, i18n)
  - `defaultImage` (media)
  - `images` (media array)
  - `resources` (media array - files/videos)
- **Relations**:
  - `documentedBy` � Players (many-to-many)
  - `proposedBy` � Players (many-to-many)
  - `firstPlayedAt` � Event (one-to-one)
- **Components**:
  - `materials[]` (list of required materials)
  - `preparationSteps[]` (setup instructions)
  - `safety[]` (safety considerations as key-value pairs)
  - `tags[]` (categorization tags)
  - `ratings` (energy/connection/silliness 1-5 scale)

#### 3. Players (`api::player.player`)

**Community member profiles**

- **Fields**:
  - `name` (string, unique)
  - `slug` (uid from name)
  - `position` (enum: Player, Host, Mentor, Founder)
  - `company` (string)
  - `tagline` (string)
  - `bio` (rich text)
  - `website` (string)
  - `avatar` (media)
  - `location` (map field with coordinates)
- **Relations**:
  - `attended` � Events (many-to-many)
  - `hosted` � Events (many-to-many)
  - `mentored` � Events (many-to-many)
  - `documented` � Games (many-to-many)
  - `proposed` � Games (many-to-many)
  - `user` � User (one-to-one, auth link)
- **Components**:
  - `socialNetworks[]` (social media links)

#### 4. Articles (`api::article.article`)

**Content publishing system for news, interviews, announcements**

- **Fields**:
  - `title` (string, unique)
  - `slug` (uid from title)
  - `category` (enum: Announcement, Article, Event, Interview, Meetup)
  - `summary` (text)
  - `content` (rich text - CKEditor)
  - `canonical` (string - canonical URL)
  - `defaultImage` (media)
  - `images` (media array)
- **Relations**:
  - `author` → Player (one-to-one)
  - `tags` → Tags (many-to-many)
- **Draft/Publish**: Uses Strapi's draftAndPublish system
- **Frontend Queries**:
  - **Grid**: Paginated list with filtering by category/tag, sorted by `publishedAt:desc`
  - **Details**: Full article with author info, images, and tag list
  - **Search**: Searchable by title and content

#### 5. Supporting Content Types

- **EventLocation**: Geographic locations for events (with country, coordinates)
- **Venue**: Specific venues within locations (with address, website, coordinates)
- **Testimonial**: User feedback and experiences
- **Sponsor**: Company sponsorship information with logos and social networks
- **Tag**: Taxonomies for content organization (shared by games and articles)
- **Home**: Homepage configuration (primarily for image galleries)

### Component Schemas

- **Shared Components**:
  - `shared.list` (simple string values for arrays)
  - `shared.dictionary` (key-value pairs)
  - `shared.seo` (SEO metadata)
  - `shared.meta-social` (social media metadata)
- **Event Components**:
  - `events.timetable` (day + timeslots array)
  - `events.time-slots` (start/end times + description)
  - `events.media` (photos/videos with captions)
  - `events.sponsorship` (sponsor details)
- **Other Components**:
  - `games.ratings` (energy/connection/silliness scores)
  - `contact.social-network` (platform + URL)
  - `registration.registration` (event registration details)

## Migration Challenges

### 1. Content Management

- **Challenge**: Strapi provides a full-featured admin interface for non-technical content creators
- **Convex Limitation**: No built-in admin UI - requires custom dashboard development
- **Impact**: High - content creators need user-friendly interface

### 2. Internationalization

- **Challenge**: Strapi has built-in i18n with locale-specific content versions
- **Convex Limitation**: No native i18n support
- **Impact**: Medium - affects all localized content (majority of text fields)

### 3. Rich Text Content

- **Challenge**: CKEditor integration for WYSIWYG content editing
- **Convex Limitation**: No native rich text editor integration
- **Impact**: Medium - affects descriptions, bios, and article content

### 4. File Management

- **Challenge**: Azure Blob Storage integration with image processing
- **Convex Solution**: Convex File Storage with built-in CDN
- **Impact**: Low - Convex file storage may actually simplify this

### 5. Geographic Data

- **Challenge**: PostGIS integration for location-based queries
- **Convex Solution**: Standard geographic queries with indexes
- **Impact**: Low - Convex supports geographic operations

### 6. Complex Relations

- **Challenge**: Many-to-many relationships with inverse mappings (events ↔ players, games ↔ players)
- **Convex Solution**: Manual relationship management in functions with separate junction tables
- **Impact**: Medium - requires careful schema design and relationship queries

### 7. Authentication Integration

- **Challenge**: Strapi users-permissions with player profiles
- **Convex Solution**: Convex Auth with custom user management
- **Impact**: Medium - requires auth system redesign

### 8. Search & Filtering

- **Challenge**: Global fuzzy search across multiple content types with complex filters
- **Convex Solution**: Text search indexes + custom search functions
- **Impact**: Medium - requires implementing Strapi's fuzzy-search equivalent

### 9. Draft/Publish System

- **Challenge**: Strapi's built-in draft/publish workflow for content management
- **Convex Solution**: Custom publishedAt field with admin interface controls
- **Impact**: Medium - content creators rely on draft/publish workflow

### 10. Image Processing & Blurhash

- **Challenge**: Automatic blurhash generation and image optimization
- **Convex Solution**: Custom image processing functions or external service
- **Impact**: Low-Medium - affects progressive loading UX

## Content Type Dependency Analysis

### Dependency Hierarchy

Based on the analysis of Strapi schema relationships, here is the migration order from least to most dependencies:

#### Tier 1 - No Dependencies (Migrate First)

These content types have no dependencies on other content types and can be migrated independently:

**Collection Types:**

1. **Tag** (`api::tag.tag`)
   - Type: collectionType
   - Simple structure with only `value` field
   - Has inverse relation from Articles but no forward dependencies
2. **EventLocation** (`api::event-location.event-location`)
   - Type: collectionType
   - Independent entity with name, country, and location fields
   - Has inverse relation from Events but no forward dependencies
3. **Venue** (`api::venue.venue`)
   - Type: collectionType
   - Independent entity with venue details
   - Has inverse relation from Events but no forward dependencies
4. **Sponsor** (`api::sponsor.sponsor`)
   - Type: collectionType
   - Independent entity with company information
   - Referenced by Events through sponsorship components but no direct dependencies
5. **Testimonial** (`api::testimonial.testimonial`)
   - Type: collectionType
   - Standalone feedback entity
   - No relations to other content types

6. **Expectation** (`api::expectation.expectation`)
   - Type: collectionType
   - Content about event expectations with title, type, icon, and content
   - No relations to other content types

**Single Types:** 7. **Home** (`api::home.home`)

- Type: singleType
- Homepage configuration with image gallery
- No relations to other content types

8. **History** (`api::history.history`)
   - Type: singleType
   - Platform history information with timeline items
   - No relations to other content types

9. **Format** (`api::format.format`)
   - Type: singleType
   - Event format descriptions (openspace, law of two feet, etc.)
   - No relations to other content types

10. **Hosting** (`api::hosting.hosting`)
    - Type: singleType
    - Information about hosting events
    - No relations to other content types

#### Tier 2 - Single Dependencies (Migrate Second)

These content types depend only on Tier 1 entities:

11. **Article** (`api::article.article`)
    - Type: collectionType
    - Depends on: Tag (many-to-many)
    - Will depend on: Player (one-to-one author) - but can be migrated with null author initially

#### Tier 3 - Complex Dependencies (Migrate Third)

These are the core entities with multiple interdependencies:

12. **Player** (`api::player.player`)
    - Type: collectionType
    - Depends on: User (auth system)
    - Has bidirectional relations with Events and Games
    - Can be migrated with empty relation arrays initially

13. **Game** (`api::game.game`)
    - Type: collectionType
    - Depends on: Player (documentedBy, proposedBy)
    - Depends on: Event (firstPlayedAt)
    - Can be migrated with empty relations initially

14. **Event** (`api::event.event`)
    - Type: collectionType
    - Depends on: EventLocation, Venue, Player, Sponsor
    - Most complex entity with multiple relations and components
    - Should be migrated last

### Migration Phases Based on Dependencies

#### Phase 1A: Foundation Entities (Week 1)

**Single Types:**

- Home
- History
- Format
- Hosting

**Collection Types:**

- Tag
- EventLocation
- Venue
- Sponsor
- Testimonial
- Expectation

#### Phase 1B: Content Entities (Week 2)

- Article (with Tag relations)
- Player (base entity without relations)

#### Phase 1C: Game Entity (Week 3)

- Game (base entity)
- Update Player ↔ Game relationships

#### Phase 1D: Event Entity (Week 4)

- Event (with all relations)
- Update all bidirectional relationships

### Relationship Migration Strategy

1. **First Pass**: Migrate all entities with empty relation arrays
2. **Second Pass**: Populate relationships using mapping tables
3. **Validation Pass**: Verify bidirectional consistency

This approach ensures:

- No circular dependency issues during migration
- Data integrity maintained throughout process
- Ability to rollback at any phase
- Progressive validation of migrated data

### Special Considerations for Single Types

Single types in Strapi are singleton documents (only one instance exists). In Convex, these will be:

- Stored as single documents in their respective tables
- Accessed via specific getter functions (e.g., `home.get()`, `history.get()`)
- Updated through controlled mutation functions to ensure only one instance exists
- Initialized during migration with existing data or defaults

## Complete Relationship Analysis

### All Relationships in the Strapi Schema

#### Direct Content Type Relationships

1. **Event → EventLocation** (many-to-one)
   - Event.location → EventLocation
   - EventLocation.events ← Event (inverse)

2. **Event → Venue** (many-to-one)
   - Event.venue → Venue
   - Venue.events ← Event (inverse)

3. **Event ↔ Player** (many-to-many, multiple relationships)
   - Event.hosts ↔ Player.hosted
   - Event.mentors ↔ Player.mentored
   - Event.players ↔ Player.attended

4. **Game ↔ Player** (many-to-many, multiple relationships)
   - Game.documentedBy ↔ Player.documented
   - Game.proposedBy ↔ Player.proposed

5. **Game → Event** (one-to-one)
   - Game.firstPlayedAt → Event

6. **Article → Player** (one-to-one)
   - Article.author → Player

7. **Article ↔ Tag** (many-to-many)
   - Article.tags ↔ Tag.articles

8. **Testimonial → Player** (one-to-one)
   - Testimonial.author → Player

9. **User ↔ Player** (one-to-one)
   - User.player ↔ Player.user

10. **User → Role** (many-to-one)
    - User.role → Role (users-permissions plugin)

#### Component-Based Relationships

11. **Event.sponsorships → Sponsor** (via component)
    - events.sponsorship component contains relation to Sponsor
    - Structure: `{ category: string, sponsors: relation[] }`

### Relationship Mapping for Convex

#### Junction Tables Required

For many-to-many relationships, we need junction tables:

```typescript
// Event-Player relationships
eventHosts: {
  eventId: Id<"events">,
  playerId: Id<"players">
}

eventMentors: {
  eventId: Id<"events">,
  playerId: Id<"players">
}

eventAttendees: {
  eventId: Id<"events">,
  playerId: Id<"players">
}

// Game-Player relationships
gameDocumenters: {
  gameId: Id<"games">,
  playerId: Id<"players">
}

gameProposers: {
  gameId: Id<"games">,
  playerId: Id<"players">
}

// Article-Tag relationships
articleTags: {
  articleId: Id<"articles">,
  tagId: Id<"tags">
}
```

#### Direct References

For one-to-one and many-to-one relationships:

```typescript
// In Events table
locationId?: Id<"eventLocations">
venueId?: Id<"venues">

// In Games table
firstPlayedAtEventId?: Id<"events">

// In Articles table
authorId?: Id<"players">

// In Testimonials table
authorId?: Id<"players">

// In Players table
userId?: Id<"users">

// In Users table
roleId: Id<"roles">
```

#### Component-Embedded Relations

```typescript
// In Events table
sponsorships: Array<{
  category: string
  sponsorIds: Id<'sponsors'>[] // Embedded relation
}>
```

### Bidirectional Relationship Management

For each bidirectional relationship, we need to:

1. **Create Functions**: Implement functions to manage both sides
2. **Maintain Consistency**: Ensure both sides are updated atomically
3. **Query Helpers**: Create query functions for both directions

Example patterns:

```typescript
// Adding a host to an event
export const addHostToEvent = mutation({
  args: { eventId: v.id('events'), playerId: v.id('players') },
  handler: async (ctx, args) => {
    // Add to junction table
    await ctx.db.insert('eventHosts', {
      eventId: args.eventId,
      playerId: args.playerId,
    })
  },
})

// Query hosts for an event
export const getEventHosts = query({
  args: { eventId: v.id('events') },
  handler: async (ctx, args) => {
    const hostRelations = await ctx.db
      .query('eventHosts')
      .filter((q) => q.eq(q.field('eventId'), args.eventId))
      .collect()

    const hosts = await Promise.all(hostRelations.map((rel) => ctx.db.get(rel.playerId)))

    return hosts.filter(Boolean)
  },
})
```

### Migration Considerations for Relationships

1. **Order of Migration**:
   - Migrate all entities first with empty relationships
   - Then populate junction tables
   - Finally update direct references

2. **Data Integrity**:
   - Validate all foreign keys exist before creating relationships
   - Handle orphaned relationships gracefully
   - Log any missing references for manual review

3. **Performance Optimization**:
   - Create indexes on junction table fields
   - Batch relationship insertions
   - Use transactions where possible

## Component Analysis

### Component Dependencies and Migration Requirements

Components in Strapi are reusable content structures embedded within content types. In Convex, these will be represented as embedded objects or arrays within the parent documents.

#### Shared Components (Used by Multiple Content Types)

1. **shared.list** (`components_shared_lists`)
   - Structure: `{ value: string }`
   - Used by: Games (materials, preparationSteps, tags)
   - Migration: Simple array of objects

2. **shared.dictionary** (`components_shared_dictionaries`)
   - Structure: `{ key: string, value: text }`
   - Used by: Games (safety)
   - Migration: Array of key-value pairs

3. **contact.social-network** (`components_contact_social_networks`)
   - Structure: `{ url: string, type: enum }`
   - Types: Twitter, LinkedIn, Facebook, Youtube, Instagram, Xing, Email, Website, Wikipedia, Vimeo, Other
   - Used by: Players, Sponsors, Venues
   - Migration: Array of social network objects

#### Event-Specific Components

4. **events.timetable** (`components_events_timetables`)
   - Structure: `{ day: enum, description: string, timeslots: component[] }`
   - Nested component: events.time-slots
   - Used by: Events
   - Migration: Array with nested timeslot arrays

5. **events.time-slots** (`components_events_time_slots`)
   - Structure: `{ time: time, description: string }`
   - Used by: events.timetable (nested)
   - Migration: Nested within timetable

6. **events.sponsorship** (`components_events_sponsorships`)
   - Structure: `{ category: string, sponsors: relation[] }`
   - Has relation to: Sponsor content type
   - Used by: Events
   - Migration: Array with sponsor ID references

7. **events.media** (`components_events_media`)
   - Structure: `{ url: string, type: enum }`
   - Types: Photos, Videos
   - Used by: Events
   - Migration: Array of media references

8. **registration.registration** (`components_registration_registrations`)
   - Structure: `{ link: string, widgetCode: text }`
   - Used by: Events
   - Migration: Embedded object

9. **reporting.finance** (`components_reporting_finances`)
   - Structure: `{ revenue: decimal, expenses: decimal, destination: string, result: enum, resultAmount: decimal }`
   - Result types: Profit, Loss
   - Used by: Events
   - Migration: Embedded object

#### Game-Specific Components

10. **games.ratings** (`components_games_ratings`)
    - Structure: `{ energy: int(1-5), connection: int(1-5), silliness: int(1-5) }`
    - Used by: Games
    - Migration: Embedded object with optional integer fields

#### History-Specific Components

11. **default.history-item** (`components_default_history_items`)
    - Structure: `{ date: date, dateFormat: enum, additionalText: string, title: string, description: richtext, image: media }`
    - Date formats: Year, Month, Day
    - Used by: History (single type)
    - Migration: Array of history items with image references

#### Unused Components (Based on Schema Analysis)

12. **location.address** - Not referenced in current schemas
13. **shared.seo** - Not referenced in current schemas
14. **shared.meta-social** - Not referenced in current schemas

### Component Migration Strategy

1. **Inline Components**: All components will be migrated as inline structures within their parent documents
2. **Type Safety**: Define TypeScript interfaces for each component structure
3. **Validation**: Create Convex validators for component data
4. **Relations in Components**: Handle sponsor relations in sponsorship components
5. **Rich Text Fields**: Convert CKEditor content to appropriate format (HTML/Markdown)
6. **Media References**: Convert media fields to Convex storage IDs

### Component Type Definitions for Convex

```typescript
// Shared Components
type ListItem = { value: string }
type DictionaryItem = { key: string; value: string }
type SocialNetwork = {
  url: string
  type:
    | 'Twitter'
    | 'LinkedIn'
    | 'Facebook'
    | 'Youtube'
    | 'Instagram'
    | 'Xing'
    | 'Email'
    | 'Website'
    | 'Wikipedia'
    | 'Vimeo'
    | 'Other'
}

// Event Components
type TimeSlot = { time: string; description: string }
type Timetable = {
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'
  description: string
  timeslots: TimeSlot[]
}
type Sponsorship = { category: string; sponsorIds: Id<'sponsors'>[] }
type EventMedia = { url: string; type: 'Photos' | 'Videos' }
type Registration = { link?: string; widgetCode?: string }
type Finance = {
  revenue: number
  expenses: number
  destination: string
  result: 'Profit' | 'Loss'
  resultAmount: number
}

// Game Components
type GameRatings = { energy?: number; connection?: number; silliness?: number }

// History Components
type HistoryItem = {
  date: number // timestamp
  dateFormat: 'Year' | 'Month' | 'Day'
  additionalText?: string
  title: string
  description: string // rich text
  imageId: Id<'_storage'>
}
```

## Data Type Analysis and Migration Strategy

### Strapi Data Types to Convex Mapping

#### Standard Data Types

1. **string** → `v.string()`
2. **text** → `v.string()` (longer content)
3. **email** → `v.string()` (with validation)
4. **uid** → `v.string()` (unique identifier, typically slug)
5. **boolean** → `v.boolean()`
6. **integer** → `v.number()` (whole numbers)
7. **decimal** → `v.number()` (floating point)
8. **date** → `v.number()` (timestamp)
9. **datetime** → `v.number()` (timestamp)
10. **time** → `v.string()` (HH:MM format)
11. **enumeration** → `v.union(v.literal(...))` (fixed values)
12. **media** → `v.id('_storage')` or `v.array(v.id('_storage'))`
13. **password** → Not migrated (handled by auth system)
14. **relation** → `v.id('tableName')` or junction tables
15. **component** → Embedded objects/arrays

#### Custom Field Types

##### 1. **plugin::map-field.map** (Location Fields)

- **Used by**: Player, EventLocation, Venue
- **Strapi Format**: Mapbox GeoJSON structure
- **Example Data**:

```json
{
  "id": "place.25821",
  "bbox": [100.327975, 13.3905792, 100.93829, 13.954364],
  "text": "Bangkok",
  "type": "Feature",
  "center": [100.4935089, 13.7524938],
  "context": [{ "id": "country.8925", "text": "Thailand", "short_code": "th" }],
  "geometry": { "type": "Point", "coordinates": [100.4935089, 13.7524938] },
  "place_name": "Bangkok, Thailand",
  "place_type": ["region", "place"],
  "properties": { "wikidata": "Q1861", "short_code": "TH-10" }
}
```

- **Migration Strategy**:

```typescript
// Convex representation
location: v.optional(
  v.object({
    lat: v.number(),      // From geometry.coordinates[1]
    lng: v.number(),      // From geometry.coordinates[0]
    address: v.optional(v.string())  // From place_name
  })
),
locationOriginal: v.optional(v.string())  // Store full GeoJSON as string
```

- **Data Transformation**: Extract coordinates and place name from GeoJSON
- **Preserve Original**: Keep full GeoJSON for future reference/features
- **Indexing**: Consider geospatial queries for location-based features

##### 2. **plugin::ckeditor5.CKEditor** (Rich Text)

- **Used by**: Event.description, Game.description, Player.bio, Article.content, etc.
- **Strapi Format**: HTML with CKEditor markup
- **Migration Strategy**:

```typescript
description: v.string() // Store as HTML string
```

- **Options**:
  - Store raw HTML (simplest, preserves formatting)
  - Convert to Markdown (better for editing)
  - Store structured data (blocks/nodes for rich editors)
- **Recommendation**: Store as HTML initially, provide conversion utilities

##### 3. **plugin::timezone-select.timezone**

- **Used by**: Event.timezone
- **Strapi Format**: IANA timezone string (e.g., "Europe/Paris")
- **Migration Strategy**:

```typescript
timezone: v.string() // Store IANA timezone identifier
```

- **Validation**: Validate against IANA timezone database

##### 4. **plugin::country-select.country**

- **Used by**: EventLocation.country
- **Strapi Format**: ISO 3166-1 alpha-2 country code (e.g., "FR", "US")
- **Migration Strategy**:

```typescript
country: v.string() // Store ISO country code
```

- **Validation**: Validate against ISO country codes

### Special Considerations

#### 1. Media/File Handling

- **Strapi**: Azure Blob Storage with media library
- **Convex**: Built-in file storage with CDN
- **Migration Steps**:
  1. Download files from Azure Blob Storage
  2. Upload to Convex storage
  3. Map old media IDs to new storage IDs
  4. Update all references

#### 2. Blurhash Generation

- **Current**: Strapi plugin generates blurhash for images
- **Migration**:
  - Option 1: Pre-generate during migration
  - Option 2: Generate on-demand with Convex action
  - Option 3: Use external service

#### 3. Rich Text Content

- **Challenges**:
  - CKEditor specific markup/classes
  - Embedded media references
  - Custom blocks/widgets
- **Strategy**:
  1. Parse HTML content
  2. Update media URLs to Convex storage
  3. Clean unnecessary markup
  4. Validate output

#### 4. Timestamps

- **Strapi**: ISO datetime strings
- **Convex**: Unix timestamps (milliseconds)
- **Conversion**: `new Date(strapiDate).getTime()`

#### 5. Null/Optional Values

- **Strapi**: Fields can be null or undefined
- **Convex**: Use `v.optional()` wrapper
- **Migration**: Check for null/undefined before inserting

### Data Validation Strategy

```typescript
// Example validation for complex types
const locationValidator = v.optional(
  v.object({
    lat: v.number(),
    lng: v.number(),
    address: v.optional(v.string()),
  })
)

const richTextValidator = v.string() // Add HTML sanitization

const mediaValidator = v.union(v.null(), v.id('_storage'), v.array(v.id('_storage')))
```

### Migration Code Patterns

```typescript
// Location field transformation
function transformLocation(strapiLocation: any) {
  if (!strapiLocation) return { location: undefined, locationOriginal: undefined }

  // Parse if it's a string
  const locationData =
    typeof strapiLocation === 'string' ? JSON.parse(strapiLocation) : strapiLocation

  // Extract from Mapbox GeoJSON format
  if (locationData.geometry && locationData.geometry.coordinates) {
    return {
      location: {
        lng: locationData.geometry.coordinates[0],
        lat: locationData.geometry.coordinates[1],
        address: locationData.place_name || locationData.text || undefined,
      },
      locationOriginal: JSON.stringify(locationData),
    }
  }

  // Handle simple lat/lng structure (fallback)
  if (locationData.lat && locationData.lng) {
    return {
      location: {
        lat: locationData.lat,
        lng: locationData.lng,
        address: locationData.address,
      },
      locationOriginal: JSON.stringify(locationData),
    }
  }

  return { location: undefined, locationOriginal: JSON.stringify(locationData) }
}

// Rich text transformation
function transformRichText(ckeditorContent: string) {
  if (!ckeditorContent) return ''

  // Clean CKEditor specific markup
  let cleaned = ckeditorContent
    .replace(/data-cke-[^=]*="[^"]*"/g, '')
    .replace(/class="ck-[^"]*"/g, '')

  // Update media URLs
  cleaned = updateMediaUrls(cleaned)

  return cleaned
}

// Datetime transformation
function transformDateTime(strapiDate: string | null) {
  if (!strapiDate) return undefined
  return new Date(strapiDate).getTime()
}
```

### Type Safety Enforcement

1. **Strict Validation**: Use Convex validators for all fields
2. **Migration Logs**: Track type conversion issues
3. **Fallback Values**: Define sensible defaults
4. **Error Handling**: Graceful degradation for invalid data

## Upsert Strategy for Idempotent Migration

### Overview

To enable repeatable migrations and maintain data consistency between Strapi and Convex during the transition period, we'll implement an upsert strategy that preserves Strapi IDs.

### ID Preservation Strategy

#### 1. **Add Strapi ID to All Tables**

```typescript
// Updated schema with strapiId field
events: defineTable({
  strapiId: v.string(), // Original Strapi ID
  name: v.string(),
  slug: v.string(),
  // ... other fields
})
  .index('by_strapi_id', ['strapiId']) // Index for fast lookups
  .index('by_slug', ['slug'])
// ... other indexes
```

#### 2. **Upsert Function Pattern**

```typescript
// Generic upsert function
export const upsertBystrapiId = async <T extends Doc<any>>(
  ctx: MutationCtx,
  table: string,
  strapiId: string,
  data: Omit<T, '_id' | '_creationTime'>
) => {
  // Check if document exists
  const existing = await ctx.db
    .query(table)
    .withIndex('by_strapi_id', (q) => q.eq('strapiId', strapiId))
    .first()

  if (existing) {
    // Update existing document
    await ctx.db.patch(existing._id, data)
    return existing._id
  } else {
    // Insert new document
    return await ctx.db.insert(table, { ...data, strapiId })
  }
}
```

#### 3. **Migration Functions with Upsert**

```typescript
// Event migration example
export const migrateEvent = mutation({
  args: {
    strapiId: v.string(),
    data: v.object({
      name: v.string(),
      slug: v.string(),
      start: v.number(),
      end: v.number(),
      // ... other fields
    }),
  },
  handler: async (ctx, args) => {
    const { strapiId, data } = args

    // Transform data
    const transformedData = {
      ...data,
      strapiId,
      updatedAt: Date.now(),
      // Apply transformations
      description: transformRichText(data.description),
      ...transformLocation(data.location),
    }

    // Upsert the event
    const eventId = await upsertBystrapiId(ctx, 'events', strapiId, transformedData)

    return { success: true, id: eventId }
  },
})
```

### Relationship Migration with ID Mapping

#### 1. **ID Mapping Cache**

```typescript
// Store Strapi ID to Convex ID mappings
idMappings: defineTable({
  strapiType: v.string(), // 'event', 'player', 'game', etc.
  strapiId: v.string(),
  convexId: v.id('any'),
}).index('by_strapi', ['strapiType', 'strapiId'])
```

#### 2. **Relationship Resolution**

```typescript
// Resolve Strapi ID to Convex ID
async function resolveId(
  ctx: QueryCtx | MutationCtx,
  strapiType: string,
  strapiId: string
): Promise<Id<any> | null> {
  const mapping = await ctx.db
    .query('idMappings')
    .withIndex('by_strapi', (q) => q.eq('strapiType', strapiType).eq('strapiId', strapiId))
    .first()

  return mapping?.convexId || null
}

// Migrate relationships after entities
export const migrateEventRelationships = mutation({
  args: {
    strapiEventId: v.string(),
    hosts: v.array(v.string()), // Array of Strapi player IDs
    mentors: v.array(v.string()),
    venue: v.optional(v.string()),
    location: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // Resolve event ID
    const eventId = await resolveId(ctx, 'event', args.strapiEventId)
    if (!eventId) throw new Error(`Event ${args.strapiEventId} not found`)

    // Resolve and create host relationships
    for (const hostStrapiId of args.hosts) {
      const playerId = await resolveId(ctx, 'player', hostStrapiId)
      if (playerId) {
        await ctx.db.insert('eventHosts', { eventId, playerId })
      }
    }

    // Update direct references
    const updates: any = {}
    if (args.venue) {
      updates.venueId = await resolveId(ctx, 'venue', args.venue)
    }
    if (args.location) {
      updates.locationId = await resolveId(ctx, 'eventLocation', args.location)
    }

    if (Object.keys(updates).length > 0) {
      await ctx.db.patch(eventId, updates)
    }
  },
})
```

### Migration Execution Strategy

#### 1. **Phase-Based Migration**

```typescript
// Migration orchestrator
export const runMigrationPhase = action({
  args: {
    phase: v.union(
      v.literal('foundation'), // Tags, Locations, Venues, etc.
      v.literal('players'),
      v.literal('content'), // Articles, Games
      v.literal('events'),
      v.literal('relationships')
    ),
    batchSize: v.optional(v.number()),
    offset: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const { phase, batchSize = 100, offset = 0 } = args

    // Fetch data from Strapi based on phase
    const strapiData = await fetchStrapiData(phase, batchSize, offset)

    // Process each item
    for (const item of strapiData) {
      try {
        await ctx.runMutation(getMigrationMutation(phase), {
          strapiId: item.id.toString(),
          data: transformData(phase, item.attributes),
        })
      } catch (error) {
        console.error(`Failed to migrate ${phase} ${item.id}:`, error)
        // Log to migration errors table
      }
    }

    // Check if more data exists
    if (strapiData.length === batchSize) {
      // Schedule next batch
      await ctx.scheduler.runAfter(1000, runMigrationPhase, {
        phase,
        batchSize,
        offset: offset + batchSize,
      })
    }
  },
})
```

#### 2. **Migration Status Tracking**

```typescript
migrationStatus: defineTable({
  phase: v.string(),
  status: v.union(
    v.literal('pending'),
    v.literal('in_progress'),
    v.literal('completed'),
    v.literal('failed')
  ),
  totalItems: v.optional(v.number()),
  processedItems: v.optional(v.number()),
  lastProcessedId: v.optional(v.string()),
  error: v.optional(v.string()),
  startedAt: v.optional(v.number()),
  completedAt: v.optional(v.number()),
}).index('by_phase', ['phase'])
```

### Benefits of This Approach

1. **Idempotency**: Can run migration multiple times without duplicating data
2. **Incremental Migration**: Can migrate in phases while both systems run
3. **Rollback Capability**: Strapi IDs preserved for reverse migration if needed
4. **Consistency**: Relationships maintained through ID mapping
5. **Debugging**: Easy to trace data between systems
6. **Partial Reruns**: Can re-migrate specific entities or phases

### Migration Commands

```bash
# Run complete migration
npm run migrate:all

# Run specific phase
npm run migrate:phase -- --phase=foundation

# Re-migrate specific entity
npm run migrate:entity -- --type=event --id=123

# Verify migration
npm run migrate:verify -- --phase=events
```

## Migration Strategy

### Phase 1: Schema Design & Core Functions

1. **Design Convex schema** following the dependency hierarchy
2. **Implement basic CRUD functions** in dependency order
3. **Set up authentication** with Convex Auth
4. **Create data validation** using Convex validators

### Phase 2: Data Migration

1. **Export existing data** from Strapi/PostgreSQL in dependency order
2. **Transform data format** to match Convex schema
3. **Import data** using Convex migration scripts following the tiers
4. **Populate relationships** after all entities are migrated
5. **Verify data integrity** and bidirectional relationships

### Phase 3: Advanced Features

1. **Implement search functionality** (replacing Strapi fuzzy search)
2. **Add file upload handling** (migrate from Azure to Convex File Storage)
3. **Create admin interface** for content management
4. **Implement internationalization** system

### Phase 4: Integration & Testing

1. **Connect SvelteKit frontend** to Convex functions
2. **Implement real-time features** (live event updates, etc.)
3. **Add comprehensive testing** (unit + integration)
4. **Performance optimization** and caching

## Convex Schema Design Approach

### Collections Structure

Based on actual GraphQL query requirements:

```typescript
// Additional migration tables
idMappings: defineTable({
  strapiType: string
  strapiId: string
  convexId: Id<any>
})
  .index('by_strapi', ['strapiType', 'strapiId'])

migrationStatus: defineTable({
  phase: string
  status: "pending" | "in_progress" | "completed" | "failed"
  totalItems?: number
  processedItems?: number
  lastProcessedId?: string
  error?: string
  startedAt?: number
  completedAt?: number
})
  .index('by_phase', ['phase'])

// Core content tables (with strapiId for upsert)
events: {
  _id: Id<"events">
  strapiId: string // Preserved from Strapi
  name: string
  slug: string
  start: number // timestamp
  end: number // timestamp
  timezone: string
  status: "Announced" | "Open" | "Over" | "Cancelled"
  description: string // rich text as HTML/markdown
  contactEmail: string
  tagline?: string
  defaultImageId?: Id<"_storage">
  imageIds: Id<"_storage">[] // for galleries
  locationId?: Id<"eventLocations">
  venueId?: Id<"venues">
  publishedAt?: number
  updatedAt: number
  // Components as embedded objects
  timetable: Array<{
    day: "Monday" | "Tuesday" | ... | "Sunday"
    description: string
    timeslots: Array<{
      time: string
      description: string
    }>
  }>
  registration?: {
    link?: string
    widgetCode?: string
  }
  sponsorships: Array<{
    category: string
    sponsorIds: Id<"sponsors">[]
  }>
  media: Array<{
    url: string
    type: string
  }>
  finance?: object
}

games: {
  _id: Id<"games">
  strapiId: string // Preserved from Strapi
  name: string
  slug: string
  category: "Game" | "IceBreaker" | "WarmUp" | "Facilitation" | "Retrospective" | "CoolDown"
  scale: string
  timebox: string
  summary: string
  description: string // rich text
  credits: string
  defaultImageId?: Id<"_storage">
  imageIds: Id<"_storage">[]
  resourceIds: Id<"_storage">[] // files, videos, audio
  firstPlayedAtEventId?: Id<"events">
  publishedAt?: number
  updatedAt: number
  // Components as embedded objects
  materials: Array<{ value: string }>
  preparationSteps: Array<{ value: string }>
  safety: Array<{ key: string, value: string }>
  tags: Array<{ value: string }>
  ratings?: {
    energy?: number // 1-5
    connection?: number // 1-5
    silliness?: number // 1-5
  }
}

players: {
  _id: Id<"players">
  strapiId: string // Preserved from Strapi
  name: string
  slug: string
  position: "Player" | "Host" | "Mentor" | "Founder"
  company?: string
  tagline?: string
  bio?: string // rich text
  website?: string
  avatarId?: Id<"_storage">
  location?: {
    lat: number
    lng: number
    address?: string
  }
  locationOriginal?: string // Full Mapbox GeoJSON preserved
  socialNetworks: Array<{
    type: string
    url: string
  }>
  userId?: Id<"users"> // auth link
}

articles: {
  _id: Id<"articles">
  strapiId: string // Preserved from Strapi
  title: string
  slug: string
  category: "Announcement" | "Article" | "Event" | "Interview" | "Meetup"
  summary: string
  content: string // rich text
  canonical?: string
  defaultImageId?: Id<"_storage">
  imageIds: Id<"_storage">[]
  authorId?: Id<"players">
  publishedAt?: number
  updatedAt: number
}

// Relationship tables for many-to-many
eventHosts: { eventId: Id<"events">, playerId: Id<"players"> }
eventMentors: { eventId: Id<"events">, playerId: Id<"players"> }
eventAttendees: { eventId: Id<"events">, playerId: Id<"players"> }
gameDocumenters: { gameId: Id<"games">, playerId: Id<"players"> }
gameProposers: { gameId: Id<"games">, playerId: Id<"players"> }
articleTags: { articleId: Id<"articles">, tagId: Id<"tags"> }

// Supporting tables (Collection Types)
eventLocations: {
  _id: Id<"eventLocations">
  name: string
  country: string
  location?: { lat: number, lng: number, address?: string }
  locationOriginal?: string // Full Mapbox GeoJSON preserved
}

venues: {
  _id: Id<"venues">
  name: string
  website?: string
  location?: { lat: number, lng: number, address?: string }
  locationOriginal?: string // Full Mapbox GeoJSON preserved
  addressDetails?: string
}

sponsors: {
  _id: Id<"sponsors">
  name: string
  url?: string
  logoId?: Id<"_storage">
  socialNetworks: Array<{ type: string, url: string }>
}

tags: {
  _id: Id<"tags">
  value: string
}

testimonials: {
  _id: Id<"testimonials">
  content: string
  audio?: Id<"_storage">
  authorId?: Id<"players"> // relation to Player
  url?: string
}

expectations: {
  _id: Id<"expectations">
  title: string
  type: "Main" | "Secondary"
  icon: string
  content: string // rich text
}

// Single Type tables (only one document each)
home: {
  _id: Id<"home">
  imageIds: Id<"_storage">[]
}

history: {
  _id: Id<"history">
  founders?: string
  intro?: string // rich text
  keyMoments?: string
  items: Array<{
    date: number // timestamp
    dateFormat: "Year" | "Month" | "Day"
    additionalText?: string
    title: string
    description: string // rich text
    imageId: Id<"_storage">
  }>
}

format: {
  _id: Id<"format">
  openspace?: string // rich text
  lawOfTwoFeet?: string // rich text
  butterfly?: string // rich text
  bumblebee?: string // rich text
  schedule?: string // rich text
}

hosting: {
  _id: Id<"hosting">
  content?: string // rich text
}

// Authentication tables (from users-permissions plugin)
users: {
  _id: Id<"users">
  username: string
  email: string
  provider?: string
  confirmed: boolean
  blocked: boolean
  roleId: Id<"roles">
  // playerId relation is on Player side
}

roles: {
  _id: Id<"roles">
  name: string
  description?: string
  type: string
  // Other role permissions fields
}
```

### Function Categories by Content Type

**Events**:

- **Queries**: `events.list`, `events.get`, `events.getUpcoming`, `events.getMarkers`
- **Mutations**: `events.create`, `events.update`, `events.delete`
- **Relationships**: `events.addHost`, `events.addMentor`, `events.addAttendee`

**Games**:

- **Queries**: `games.list`, `games.get`, `games.search`
- **Relations**: `games.getDocumenters`, `games.getProposers`

**Players**:

- **Queries**: `players.list`, `players.get`, `players.getAttendedEvents`
- **Relations**: `players.getHostedEvents`, `players.getMentoredEvents`

**Articles**:

- **Queries**: `articles.list`, `articles.get`
- **Relations**: `articles.getByAuthor`, `articles.getByTag`

**Global**:

- **Search**: `search.global` (across all content types)
- **Files**: File upload/retrieval functions

## Technical Considerations

### Benefits of Migration

1. **Real-time Updates**: Live event updates, player registrations
2. **Simplified Deployment**: No separate backend infrastructure
3. **Type Safety**: End-to-end TypeScript with generated types
4. **Performance**: Built-in caching and optimized queries
5. **Modern DX**: Better developer experience with reactive queries

### Challenges & Mitigation

1. **Content Management**: Build custom admin with shadcn/ui components
2. **Internationalization**: Implement custom i18n with separate documents or embedded translations
3. **Data Migration**: Careful planning and validation of complex relationships
4. **Learning Curve**: Team needs to learn Convex patterns and best practices

## Success Criteria

### Functional Requirements

- [ ] **Content Types**: All 4 core content types (Events, Games, Players, Articles) accessible via Convex functions
- [ ] **Data Migration**: Complete migration with 100% data integrity and relationship preservation
- [ ] **Authentication**: User auth with player profile linking working
- [ ] **File Management**: Image/file uploads with blurhash generation working
- [ ] **Search**: Global fuzzy search across all content types matching current functionality
- [ ] **Pagination**: Page-based pagination with metadata matching GraphQL responses
- [ ] **Filtering**: All current filter patterns (status, category, tags, location, etc.) working
- [ ] **Relations**: All many-to-many relationships (hosts, mentors, attendees, etc.) functional
- [ ] **Draft/Publish**: Publishing workflow with publishedAt filtering
- [ ] **Real-time**: Live updates for event changes and registrations

### GraphQL Compatibility Requirements

- [ ] **Event Queries**: `events.list`, `events.get`, `events.getUpcoming`, `events.getMarkers` equivalent
- [ ] **Game Queries**: `games.list`, `games.get` with filtering by category/tags
- [ ] **Player Queries**: `players.list`, `players.get` with relationship data
- [ ] **Article Queries**: `articles.list`, `articles.get` with author and tag relationships
- [ ] **Search Query**: Global search returning structured results across all types
- [ ] **Media Handling**: Image arrays with progressive loading support

### Non-Functional Requirements

- [ ] **Performance**: Query performance equal or better than current GraphQL API
- [ ] **Admin Interface**: Usable content management interface for non-technical users
- [ ] **Mobile Support**: Responsive admin interface
- [ ] **Error Handling**: Comprehensive validation and error reporting
- [ ] **Type Safety**: End-to-end TypeScript with generated types

## Timeline Estimate

- **Phase 1**: 4-5 weeks (Schema Design + Core CRUD Functions for all 14 content types)
- **Phase 2**: 2-3 weeks (Data Migration + Relationship Management)
- **Phase 3**: 4-5 weeks (Advanced Features: Search, Admin UI, Draft/Publish, Image Processing)
- **Phase 4**: 2-3 weeks (SvelteKit Integration + Testing + Performance Optimization)

**Total**: 12-16 weeks for complete migration

### Detailed Breakdown

**Phase 1** (4-5 weeks):

- Convex schema definition and validation for all 14 content types
- Basic CRUD functions for all collection types and single types
- Special handling for single type documents (ensure singleton behavior)
- Relationship management functions (hosts, mentors, tags, etc.)
- File upload integration

**Phase 2** (2-3 weeks):

- PostgreSQL data export and transformation
- Convex data import with relationship preservation
- Data integrity validation and testing

**Phase 3** (4-5 weeks):

- Global search implementation
- Draft/publish workflow recreation
- Admin interface development (biggest task)
- Image processing and blurhash generation
- Pagination and filtering systems

**Phase 4** (2-3 weeks):

- SvelteKit frontend integration
- Real-time feature implementation
- Comprehensive testing (unit + integration + e2e)
- Performance optimization and caching

## Next Steps

1. **Review Migration Plan**: Validate timeline and approach with stakeholders
2. **Set up Convex Environment**: Initialize Convex project in `/web` directory
3. **Schema Implementation**: Begin Phase 1 with core content type schemas
4. **Proof of Concept**:
   - Implement basic Event CRUD operations
   - Test relationship management (hosts, mentors)
   - Validate pagination and filtering patterns
   - Test file upload and image handling
5. **Data Export Planning**: Analyze current PostgreSQL data structure for migration scripts
6. **Admin UI Mockups**: Design content management interface requirements

### Immediate Priority Tasks

1. **Convex Setup** (1-2 days):
   - Install Convex in `/web` project
   - Configure deployment environment
   - Set up basic project structure

2. **Core Schema Definition** (3-5 days):
   - Define Events table with all components
   - Create relationship tables (eventHosts, eventMentors, etc.)
   - Implement basic validation schemas

3. **Event CRUD Functions** (5-7 days):
   - `events.create`, `events.update`, `events.delete`
   - `events.list` with pagination and filtering
   - `events.get` with full relationship data
   - Test against frontend GraphQL query requirements

This proof-of-concept phase will validate the feasibility of the full migration approach before committing to the complete 11-15 week timeline.
