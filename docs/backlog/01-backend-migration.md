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

## Migration Strategy

### Phase 1: Schema Design & Core Functions
1. **Design Convex schema** for core content types (Events, Games, Players)
2. **Implement basic CRUD functions** for each content type
3. **Set up authentication** with Convex Auth
4. **Create data validation** using Convex validators

### Phase 2: Data Migration
1. **Export existing data** from Strapi/PostgreSQL
2. **Transform data format** to match Convex schema
3. **Import data** using Convex migration scripts
4. **Verify data integrity** and relationships

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
// Core content tables
events: {
  _id: Id<"events">
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
  socialNetworks: Array<{
    type: string
    url: string
  }>
  userId?: Id<"users"> // auth link
}

articles: {
  _id: Id<"articles">
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

// Supporting tables
eventLocations: {
  _id: Id<"eventLocations">
  name: string
  country: string
  location?: { lat: number, lng: number }
}

venues: {
  _id: Id<"venues">
  name: string
  website?: string
  location?: { lat: number, lng: number }
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

// Homepage configuration
home: {
  _id: Id<"home">
  imageIds: Id<"_storage">[]
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

- **Phase 1**: 3-4 weeks (Schema Design + Core CRUD Functions for all 4 content types)
- **Phase 2**: 2-3 weeks (Data Migration + Relationship Management)
- **Phase 3**: 4-5 weeks (Advanced Features: Search, Admin UI, Draft/Publish, Image Processing)
- **Phase 4**: 2-3 weeks (SvelteKit Integration + Testing + Performance Optimization)

**Total**: 11-15 weeks for complete migration

### Detailed Breakdown
**Phase 1** (3-4 weeks):
- Convex schema definition and validation
- Basic CRUD functions for Events, Games, Players, Articles
- Relationship management functions (hosts, mentors, etc.)
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