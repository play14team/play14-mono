---
trigger: model_decision
---

# Component Refactoring and Architecture Guidelines

## Core Refactoring Philosophy

### 1. Make It Work, Then Make It Clean

- **First Priority**: Implement functionality and ensure it works correctly
- **Second Priority**: Refactor for cleanliness, maintainability, and best practices
- **Never refactor broken code** - Fix functionality first, then improve structure

### 2. Continuous Refactoring

- **After every feature** - Refactor once functionality is confirmed
- **Split large components** - Break down components/pages that become unwieldy
- **Improve as you go** - Don't let technical debt accumulate

## Component Architecture Rules

### State Management Best Practices

#### Use Bindable Props Over Setter Functions

```svelte
// ✅ GOOD - Clean bidirectional binding
<ChildComponent bind:activeService />

// ❌ AVOID - Unnecessary prop drilling
<ChildComponent {activeService} {setActiveService} />
```

#### Component Logic Ownership

- **Logic belongs where it's used** - Move functions to components that actually call them
- **Minimize prop drilling** - Avoid passing functions through multiple component layers
- **Parent components are containers** - Focus on layout and state coordination
- **Child components are specialized** - Handle specific functionality and logic

### Component Extraction Guidelines

#### When to Extract Components

- **Size threshold**: Consider extraction when component > 50 lines
- **Responsibility threshold**: Extract when component has multiple distinct responsibilities
- **Reusability threshold**: Extract common UI patterns into reusable components
- **Complexity threshold**: Extract when logic becomes hard to follow

#### How to Extract Components

1. **Identify cohesive sections** - Look for logical groupings of related functionality
2. **Define clear interfaces** - Determine what props the new component needs
3. **Move related logic** - Include functions that are only used by the extracted section
4. **Use bindable props** - Prefer `bind:` over callback functions where possible
5. **Test thoroughly** - Ensure extracted component works identically to original

### Component Responsibility Patterns

#### Container Components (Parents)

- **State management** - Hold shared state and coordinate between children
- **Layout structure** - Provide overall page/section layout
- **Data fetching** - Handle API calls and data loading
- **Minimal logic** - Delegate specific functionality to child components

#### Specialized Components (Children)

- **Single purpose** - Handle one specific piece of functionality
- **Own their logic** - Include functions they actually use
- **Clear interfaces** - Well-defined props and events
- **Self-contained** - Minimal dependencies on parent logic

## Refactoring Patterns from Services Example

### Before Refactoring

```svelte
<!-- Showcase.svelte - Monolithic component -->
<script>
  function setActiveService(index) {
    /* logic */
  }
  function nextService() {
    /* logic */
  }
</script>

<section>
  <!-- 100+ lines of mixed navigation and display logic -->
  <div><!-- Navigation UI --></div>
  <div><!-- Service details UI --></div>
</section>
```

### After Refactoring

```svelte
<!-- Showcase.svelte - Clean container -->
<script>
  let { activeService = $bindable(0) } = $props()
</script>

<section>
  <Navigation {services} bind:activeService />
  <ActiveServiceDetails {services} bind:activeService />
</section>
```

```svelte
<!-- Navigation.svelte - Owns selection logic -->
<script>
  let { activeService = $bindable() } = $props()
  function setActiveService(index) {
    activeService = index
  }
</script>
```

```svelte
<!-- ActiveServiceDetails.svelte - Owns cycling logic -->
<script>
  let { activeService = $bindable() } = $props()
  function nextService() {
    activeService = (activeService + 1) % services.length
  }
</script>
```

## Refactoring Checklist

### Before Starting

- [ ] Is the current functionality working correctly?
- [ ] Do I have tests to verify behavior doesn't change?
- [ ] Have I identified the specific improvements needed?

### During Refactoring

- [ ] Is this component > 50 lines? Consider extraction
- [ ] Does this component have multiple responsibilities? Split it
- [ ] Am I passing functions that are only used by one child? Move logic to child
- [ ] Can I use `bind:` instead of callback props? Prefer binding
- [ ] Are my components focused on single purposes? Ensure clarity
- [ ] Am I maintaining the same user experience?

### After Refactoring

- [ ] Does all functionality still work as expected?
- [ ] Are component responsibilities clear and focused?
- [ ] Is the code easier to understand and maintain?
- [ ] Are there fewer lines of code overall?
- [ ] Is prop passing simpler and more direct?

## Anti-Patterns to Avoid

### ❌ Prop Drilling Functions

```svelte
<!-- Don't pass functions through multiple levels -->
<Parent>
  <Middle {someFunction}>
    <Child {someFunction} />
  </Middle>
</Parent>
```

### ❌ God Components

```svelte
<!-- Don't create components that do everything -->
<script>
  // 200+ lines of mixed logic
  function handleNavigation() {
    /* ... */
  }
  function handleDisplay() {
    /* ... */
  }
  function handleData() {
    /* ... */
  }
  function handleUI() {
    /* ... */
  }
</script>
```

### ❌ Logic in Wrong Place

```svelte
<!-- Don't put child-specific logic in parent -->
<Parent>
  <script>
    function childSpecificFunction() {
      /* only used by one child */
    }
  </script>
  <Child {childSpecificFunction} />
</Parent>
```

## Benefits of Good Refactoring

### Code Quality

- **Easier to understand** - Each component has a clear, focused purpose
- **Easier to test** - Smaller components with isolated logic
- **Easier to maintain** - Changes are localized to relevant components
- **Easier to reuse** - Well-extracted components can be used elsewhere

### Development Experience

- **Faster debugging** - Issues are easier to locate in focused components
- **Faster feature development** - Clean architecture enables rapid iteration
- **Better collaboration** - Team members can work on different components independently
- **Reduced bugs** - Simpler components have fewer edge cases

Remember: **Good refactoring makes the codebase a joy to work with!**
