<script lang="ts">
  import EventsYearGrid from '$lib/components/events/EventsYearGrid.svelte';
  interface LoadData {
    year: number;
  }
  const props = $props<{ data: LoadData }>();
  const year = $derived(props.data.year);
</script>

{#key year}
  <EventsYearGrid {year} />
{/key}
