---
trigger: always_on
---

# Svelte 5 Syntax Changes from Svelte 4

Here are the key syntax changes and recommendations when migrating from Svelte 4 to Svelte 5:

## 1. Reactive State: `let` → `$state()`

**Svelte 4:**

```svelte
<script>
  let count = 0
  let name = 'world'
</script>
```

**Svelte 5:**

```svelte
<script>
  let count = $state(0)
  let name = $state('world')
</script>
```

## 2. Derived Values: `$:` → `$derived()`

**Svelte 4:**

```svelte
<script>
  let count = 0
  $: doubled = count * 2
  $: quadrupled = doubled * 2
</script>
```

**Svelte 5:**

```svelte
<script>
  let count = $state(0)
  const doubled = $derived(count * 2)
  const quadrupled = $derived(doubled * 2)
</script>
```

## 3. Side Effects: `$:` → `$effect()`

**Svelte 4:**

```svelte
<script>
  let count = 0
  $: console.log('count changed:', count)
  $: {
    if (count > 5) {
      alert('Count is high!')
    }
  }
</script>
```

**Svelte 5:**

```svelte
<script>
  let count = $state(0)

  $effect(() => {
    console.log('count changed:', count)
  })

  $effect(() => {
    if (count > 5) {
      alert('Count is high!')
    }
  })
</script>
```

## 4. Component Props: `export let` → `$props()`

**Svelte 4:**

```svelte
<script>
  export let name
  export let age = 0
  export let optional = undefined
</script>
```

**Svelte 5:**

```svelte
<script>
  let { name, age = 0, optional } = $props()
</script>
```

## 5. Event Handlers: Simplified Syntax

**Svelte 4:**

```svelte
<button on:click={handleClick}>Click me</button>
<button on:click={() => count++}>Increment</button>
```

**Svelte 5:**

```svelte
<button onclick={handleClick}>Click me</button>
<button onclick={() => count++}>Increment</button>
```

## 6. Bindings: Updated Syntax

**Svelte 4:**

```svelte
<input bind:value={name} />
<input bind:checked={isChecked} />
```

**Svelte 5:**

```svelte
<input bind:value={name} />
<input bind:checked={isChecked} />
<!-- Bindings remain largely the same, but work better with $state -->
```

## 7. Snippets: New Feature for Reusable Templates

**Svelte 5 Only:**

```svelte
{#snippet card(title, content)}
  <div class="card">
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
{/snippet}

{@render card('Hello', 'World')}
{@render card('Foo', 'Bar')}
```

## 8. Enhanced Slots with `@slot`

**Svelte 4:**

```svelte
<!-- Parent -->
<Card>
  <h1 slot="header">Title</h1>
  <p>Content</p>
</Card>

<!-- Card.svelte -->
<div class="card">
  <slot name="header"></slot>
  <slot></slot>
</div>
```

**Svelte 5:**

```svelte
<!-- Card.svelte -->
<script>
  let { children, header } = $props()
</script>

<!-- Parent -->
<Card>
  {#snippet header()}
    <h1>Title</h1>
  {/snippet}
  <p>Content</p>
</Card>

<div class="card">
  {@render header?.()}
  {@render children()}
</div>
```

## 9. Reactive Classes and Styles

**Svelte 4:**

```svelte
<div class:active={isActive} class:disabled={!enabled}>
<div style:color={textColor} style:font-size="{fontSize}px">
```

**Svelte 5:**

```svelte
<!-- Same syntax, but works with $state -->
<div class:active={isActive} class:disabled={!enabled}>
<div style:color={textColor} style:font-size="{fontSize}px">
```

## 10. Component Lifecycle

**Svelte 4:**

```svelte
<script>
  import { onMount, onDestroy } from 'svelte'

  onMount(() => {
    console.log('mounted')
  })

  onDestroy(() => {
    console.log('destroyed')
  })
</script>
```

**Svelte 5:**

```svelte
<script>
  import { onMount } from 'svelte'

  onMount(() => {
    console.log('mounted')

    return () => {
      console.log('destroyed')
    }
  })

  // Or use $effect for more control
  $effect(() => {
    // Setup
    return () => {
      // Cleanup
    }
  })
</script>
```

## 11. Stores: Simplified Usage

**Svelte 4:**

```svelte
<script>
  import { writable } from 'svelte/store'
  const count = writable(0)
</script>

<p>Count: {$count}</p>
<button on:click={() => $count++}>+</button>
```

**Svelte 5:**

```svelte
<script>
  // Stores still work, but $state is often simpler
  let count = $state(0)
  // Or still use stores if needed for cross-component state
  import { writable } from 'svelte/store'
  const globalCount = writable(0)
</script>

<p>Count: {count}</p>
<p>Global: {$globalCount}</p>
<button onclick={() => count++}>+</button>
```

## Key Migration Tips

1. **Replace reactive declarations (`$:`) with `$derived()` for computed values**
2. **Replace reactive statements (`$:`) with `$effect()` for side effects**
3. **Convert `let` variables to `$state()` for reactivity**
4. **Update component props from `export let` to `$props()` destructuring**
5. **Consider using snippets for reusable template logic**
6. **Event handlers can drop the `on:` prefix (though it's still supported)**
7. **Lifecycle functions can return cleanup functions directly**

## Backward Compatibility

Svelte 5 maintains backward compatibility with most Svelte 4 syntax, but the new runes-based approach is recommended for new projects and provides better performance and developer experience.
