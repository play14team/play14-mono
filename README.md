# #play14 Platform Monorepo

The official monorepo for the #play14 platform - a global community dedicated to serious games and playful learning.

🌐 **Live at**: [https://play14.org](https://play14.org)

## 📁 Repository Structure

This monorepo contains three main applications:

| Directory  | Technology                 | Status            | Description                              |
| ---------- | -------------------------- | ----------------- | ---------------------------------------- |
| **`/api`** | Strapi CMS (Node.js)       | 🟢 **PRODUCTION** | Backend API powering play14.org          |
| **`/ui`**  | Next.js (React/TypeScript) | 🟢 **PRODUCTION** | Frontend application for play14.org      |
| **`/web`** | SvelteKit + Convex         | 🔬 Experimental   | Alternative implementation (development) |

## 🚀 Quick Start

### Production System (API + UI)

#### Backend (Strapi)

```bash
cd api
pnpm install
pnpm dev          # Start development server
pnpm build        # Build admin panel
pnpm start        # Start production server
```

#### Frontend (Next.js)

```bash
cd ui
pnpm install
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm codegen      # Generate GraphQL types
```

### Experimental System (Web)

```bash
cd web
pnpm install
pnpm dev          # Start frontend + backend
pnpm build        # Build for production
```

## 🏗️ Architecture

### Production Stack

#### Backend (`/api`)

- **Framework**: Strapi v5 CMS
- **Database**: PostgreSQL with PostGIS
- **Storage**: Azure Blob Storage
- **API**: REST + GraphQL (auto-generated)
- **Features**:
  - Content management for events, games, players, articles
  - Geographic data support
  - Multi-language content
  - Custom business logic and lifecycles

#### Frontend (`/ui`)

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: SCSS + Bootstrap
- **Data**: Apollo GraphQL Client
- **Maps**: Mapbox GL
- **Features**:
  - Event calendar and interactive maps
  - Player profiles and game library
  - Article system with SEO
  - Responsive design
  - Internationalization (EN/FR)

### Experimental Stack (`/web`)

- **Framework**: SvelteKit 5
- **Backend**: Convex (real-time database)
- **UI**: shadcn/ui (Svelte port)
- **Styling**: Tailwind CSS v4
- **Testing**: Vitest + Playwright

## 📊 Data Model

Key content types in the production system:

- **Events**: Locations, schedules, registrations, time slots
- **Games**: Ratings, categories, descriptions, tags
- **Players**: Profiles, positions, social links, biographies
- **Articles**: Blog posts with categories and SEO metadata
- **Venues**: Geographic locations with PostGIS support
- **Testimonials**: User experiences and feedback
- **Sponsors**: Partnership information

## 🛠️ Development

### Environment Setup

Each application requires environment variables. Check the respective `.env.example` files:

- `/api/.env.example` - Strapi configuration
- `/ui/.env.example` - Next.js configuration
- `/web/.env.example` - SvelteKit + Convex configuration

### Package Managers

| Application | Package Manager | Version  |
| ----------- | --------------- | -------- |
| API         | PNPM            | v10.13.1 |
| UI          | PNPM            | v10.13.1 |
| Web         | PNPM            | v10.13.1 |

### Common Commands

#### API (Strapi)

```bash
pnpm dev          # Development server
pnpm build        # Build admin
pnpm export       # Export database
pnpm import       # Import database
```

#### UI (Next.js)

```bash
pnpm dev          # Development server
pnpm lint         # Run ESLint
pnpm format       # Format with Prettier
pnpm codegen      # Generate GraphQL types
pnpm verify       # Lint + check everything
```

#### Web (SvelteKit)

```bash
pnpm dev          # Start both frontend and backend
pnpm dashboard    # Open Convex dashboard
pnpm lint         # ESLint + Prettier
pnpm test         # Run unit tests
pnpm test:e2e     # Run e2e tests
```

## 🧪 Testing

- **UI**: Manual testing (no test framework configured)
- **Web**: Vitest (unit) + Playwright (e2e)
- **API**: Manual testing via Strapi admin panel

## 📝 Content Management

Production content is managed through the Strapi admin panel:

1. Start the API: `cd api && pnpm dev`
2. Access admin at: `http://localhost:1337/admin`
3. Use the CMS to manage events, games, articles, etc.

## 🚢 Deployment

### Production (API + UI)

- **Backend**: Deploy Strapi to your Node.js hosting provider
- **Frontend**: Deploy Next.js to Vercel, Netlify, or similar
- **Database**: PostgreSQL with PostGIS extension required
- **Storage**: Configure Azure Blob Storage for media

### Experimental (Web)

- **Frontend**: Deploy SvelteKit to Vercel, Netlify, etc.
- **Backend**: Deploy Convex functions via Convex CLI

## 📚 Documentation

- [CLAUDE.md](./CLAUDE.md) - AI assistant instructions
- [API Documentation](./api/README.md) - Strapi backend details
- [UI Documentation](./ui/README.md) - Next.js frontend details
- [Web Documentation](./web/README.md) - SvelteKit app details

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and tests
5. Submit a pull request to `main` branch

## 📄 License

[License information to be added]

## 🌟 About #play14

#play14 is a worldwide gathering of like-minded people who believe that playing is the best way to learn, share, and connect. The platform supports event organization, game sharing, and community building around serious games and playful learning methodologies.

---

**Production Website**: [https://play14.org](https://play14.org)  
**Community**: [https://community.play14.org](https://community.play14.org)
