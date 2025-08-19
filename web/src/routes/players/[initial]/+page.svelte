<script lang="ts">
  import PlayersInitialGrid from '$lib/components/players/PlayersInitialGrid.svelte';
  interface LoadData {
    initial: string;
  }
  const props = $props<{ data: LoadData }>();
  const initial = $derived(props.data.initial.toUpperCase());
</script>

{#key initial}
  <PlayersInitialGrid {initial} />
{/key}
