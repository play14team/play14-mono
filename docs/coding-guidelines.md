---
trigger: always_on
---

# Coding Guidelines

## Project Context

This is a Svelte 5 and SvelteKit 2 application using Nexus from DaisyUI as the UI Kit.

## Svelte 5 Guidelines

### Syntax and Runes

- **Use only Svelte 5 syntax and runes** - No legacy Svelte 4 patterns
- **Use `onclick` instead of `on:click`** - Prefer the new event handler syntax
- **Use `$state()` for reactive variables** - Replace `let` with `$state()` for reactivity
- **Use `$derived()` for computed values** - Replace `$:` reactive declarations
- **Use `$effect()` for side effects** - Replace `$:` reactive statements
- **Use `$props()` for component props** - Replace `export let` with destructured props
- **Use `$bindable()` for two-way binding** - Enable parent-child state synchronization
- When using {#each}, always make sure you add a key

### Component Props Pattern

```svelte
// ✅ Good - Bindable props with TypeScript interfaces
interface Props {
  services: CoreService[];
  activeService: number;
}

let { services, activeService = $bindable() }: Props = $props();
```

### Event Handlers

```svelte
// ✅ Good - New Svelte 5 syntax
<button onclick={() => setActiveService(index)}>

// ❌ Avoid - Legacy syntax (still works but not preferred)
<button on:click={() => setActiveService(index)}>
```

## Component Architecture

### Refactoring Workflow

1. **Make it work first** - Implement functionality and ensure it works correctly
2. **Then refactor** - After confirming functionality, refactor for cleanliness and best practices
3. **Split large components** - Break down components > 50 lines into smaller, focused components

### State Management

- **Use bindable props over setter functions** - Prefer `bind:prop` over passing callback functions
- **Components should own their logic** - Move functions to the component that actually uses them
- **Minimize prop drilling** - Avoid passing functions through multiple component layers

### Component Structure

- **Single responsibility** - Each component should have one clear purpose
- **Extract reusable sections** - Common UI patterns should become reusable components
- **Parent components are containers** - Focus on layout and state coordination
- **Child components are specialized** - Handle specific functionality and logic

### Bindable Props Pattern

```svelte
// ✅ Good - Use bindable props
<Navigation {services} bind:activeService />
<ActiveServiceDetails {services} bind:activeService />

// ❌ Avoid - Passing setter functions
<Navigation {services} {activeService} {setActiveService} />
```

## File Organization

### Directory Structure

- **Components** - Place in `/src/lib/components/` with feature-based subdirectories
- **Stores** - Place in `/src/lib/stores/` for global state management
- **Utils** - Place in `/src/lib/utils/` for utility functions
- **Types** - Define interfaces in store files or dedicated type files

### Component Naming

- **PascalCase** for component files (e.g., `ActiveServiceDetails.svelte`)
- **Feature-based folders** - Group related components (e.g., `/services/`, `/navigation/`)

## TypeScript Guidelines

### Strict Mode

- **Use TypeScript strict mode** - Ensure type safety throughout the application
- **Define interfaces for props** - Always type component props with interfaces
- **Type store contents** - Define interfaces for store data structures

### Interface Patterns

```svelte
// ✅ Good - Clear interface definitions
interface Props {
  services: CoreService[];
  activeService: number;
}

let { services, activeService = $bindable() }: Props = $props();
```

## Internationalization (i18n)

###Integration

- UI elements - Use svelte-i18n for all user-facing text
- Import pattern - import { t } from '$lib/i18n/store'
- Usage pattern - {$t('services.deepDive.title')}

### Content Localization

- Localized stores - Use company.en.ts and company.fr.ts for content translations
- Store pattern - Import from $lib/stores/company for localized content
- Reactive access - Use $derived($company.coreServices) for reactive store data

### Translation Files

- Location - src/lib/i18n/locales/en.json and src/lib/i18n/locales/fr.json
- Structure - Hierarchical JSON format (e.g., services.deepDive.title)
- Capitalization - Only capitalize the first letter of sentences, not mid-sentence words

## Code Quality

### General Principles

- **Early returns** - Use early returns to reduce nesting when possible
- **Documentation** - Always add JSDoc comments for new functions and classes
- **Consistent style** - Follow existing code patterns and formatting
- **Error handling** - Implement proper error boundaries and validation

### Function Documentation

```typescript
/**
 * Sets the active service for the showcase
 * @param index - The index of the service to activate
 */
function setActiveService(index: number) {
  activeService = index
}
```

## Animation and Transitions

### Svelte Transitions

- **Import pattern** - `import { fly, fade } from 'svelte/transition'`
- **Consistent timing** - Use consistent duration and delay patterns
- **Performance** - Prefer CSS transforms over layout-affecting animations

### Animation Patterns

```svelte
// ✅ Good - Consistent transition patterns
<div in:fly={{ y: 50, duration: 600, delay: 800 }}>
<div in:fade={{ duration: 400, delay: 200 }}>
```

## Styling Guidelines

### Nexus and DaisyUI

- **Prioritize Nexus** - Use Nexus components over DaisyUI when available
- **Consistent classes** - Use DaisyUI utility classes for consistent theming
- **Responsive design** - Use Tailwind responsive prefixes (`lg:`, `md:`, etc.)

### Class Patterns

```svelte
// ✅ Good - Semantic class combinations class="w-full text-left p-4 rounded-xl transition-all
duration-300
{activeService === index
  ? 'bg-base-100 shadow-lg border-l-4 border-primary'
  : 'bg-base-100/50 hover:bg-base-100 hover:shadow-md'}"
```

## Testing

### Test Structure

- **Unit tests** - Provide unit tests for each new feature/function
- **Integration tests** - Test component interactions and data flow
- **E2E tests** - Test complete user workflows
- **Accessibility tests** - Ensure components meet accessibility standards

## Don't Do

### Deprecated Patterns

- **Don't use legacy `$:` reactive statements** - Use `$derived()` and `$effect()` instead
- **Don't use `export let` for props** - Use `$props()` destructuring
- **Don't use deprecated APIs** - Stay current with Svelte 5 patterns
- **Don't break existing test patterns** - Maintain test compatibility

### Content Guidelines

- **Don't use mid-sentence capitalization** - Use "Ready to get started?" not "Ready to Get Started?"
- **Don't hardcode text** - Always use i18n for user-facing content
- **Don't pass functions as props** - Use bindable props instead

### Architecture Anti-patterns

- **Don't create monolithic components** - Split components > 50 lines
- **Don't prop drill functions** - Move logic to the component that uses it
- **Don't mix concerns** - Keep components focused on single responsibilities

## Performance

### Optimization Patterns

- **Reactive derivations** - Use `$derived()` for computed values that depend on state
- **Conditional rendering** - Use `{#if mounted}` for client-side only content
- **Key blocks** - Use `{#key}` for efficient re-rendering of dynamic content
- **Lazy loading** - Import components dynamically when appropriate

### Memory Management

- **Cleanup effects** - Return cleanup functions from `$effect()` when needed
- **Avoid memory leaks** - Properly dispose of event listeners and subscriptions

## Development Workflow

### Code Organization

1. **Start with functionality** - Get the feature working first
2. **Extract components** - Break down large components into focused pieces
3. **Optimize performance** - Add optimizations after functionality is complete
4. **Add tests** - Ensure reliability with comprehensive testing
5. **Document changes** - Update documentation and add comments

### Git Workflow

- **Atomic commits** - Each commit should represent a single logical change
- **Descriptive messages** - Use clear, descriptive commit messages
- **Feature branches** - Use feature branches for new development
- **Code review** - All changes should be reviewed before merging
