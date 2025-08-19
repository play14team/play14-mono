<script lang="ts">
  import { useQuery } from 'convex-svelte';
  import { api } from '$lib/../convex/_generated/api';
  const props = $props<{ activeYear: number }>();
  const activeYear = $derived(props.activeYear);
  const currentYear = new Date().getFullYear();
  const firstYear = 2014;
  const neighbors = $derived(
    (() => {
      const yrs: number[] = [];
      const prev = activeYear - 1;
      const next = activeYear + 1;
      if (prev >= firstYear) yrs.push(prev);
      if (next <= currentYear) yrs.push(next);
      return yrs;
    })()
  );
  // Fire queries to warm cache (no rendering)
  // Trigger queries (ignore returned handles to avoid unused var lint)
  $effect(() => {
    if (neighbors.length) {
      neighbors.forEach((y) => {
        useQuery(api.events.listByYear, () => ({ year: y }));
      });
    }
  });
</script>

<!-- Prefetch component does not render visible UI -->
