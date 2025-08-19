<script lang="ts">
  import EventCard from '$lib/components/events/EventCard.svelte';
  import ErrorAlert from '$lib/components/ErrorAlert.svelte';
  import { t } from '$lib/i18n';
  import { useQuery } from 'convex-svelte';
  import { api } from '$lib/../convex/_generated/api';
  import { Skeleton } from '$lib/components/ui/skeleton';

  // Use runes-aware props access so updates propagate on navigation
  const props = $props<{ year: number }>();
  const year = $derived(props.year);

  const query = useQuery(api.events.listByYear, () => ({ year }));
  const events = $derived(query.data || []);
  const isLoading = $derived(query.isLoading);
  const error = $derived(query.error);

  // Cache number of events per year to stabilize layout across navigation
  const countsCache = $state<Record<number, number>>({});
  $effect(() => {
    if (query.data) countsCache[year] = query.data.length;
  });
  const skeletonCount = $derived(countsCache[year] ? Math.max(countsCache[year], 1) : 8);
  // Keep last loaded events for cross-fade during loading of a new year
  let lastEvents = $state<typeof events>([]);
  $effect(() => {
    if (!isLoading && events.length) {
      lastEvents = events;
    }
  });
</script>

{#if error}
  <ErrorAlert {error} title="Failed to load events" />
{:else}
  <div class="crossfade-wrapper" aria-live="polite">
    <!-- Base (previous or current) events always in normal flow to preserve height -->
    <div class="transition-opacity duration-300">
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {#each isLoading && lastEvents.length ? lastEvents : events as event (event._id)}
          <EventCard {event} />
        {/each}
      </div>
    </div>
    {#if isLoading}
      <!-- Overlay skeletons only (positioned absolutely) -->
      <div class="skeleton-overlay" aria-busy="true">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {#each Array.from({ length: skeletonCount }, (_, i) => i) as i (i)}
            <div class="bg-card animate-in overflow-hidden rounded-xl border p-0 shadow-sm">
              <div class="h-64 w-full">
                <Skeleton class="h-full w-full" />
              </div>
              <div class="flex flex-col gap-4 p-6">
                <Skeleton class="h-6 w-3/4" />
                <div class="space-y-2">
                  <Skeleton class="h-4 w-1/2" />
                  <Skeleton class="h-4 w-2/3" />
                </div>
                <Skeleton class="mt-auto h-9 w-full" />
              </div>
            </div>
          {/each}
        </div>
      </div>
    {:else if events.length === 0}
      <div class="text-muted-foreground py-12 text-center">{$t('events.empty', { year })}</div>
    {/if}
  </div>
{/if}

<style>
  .crossfade-wrapper {
    position: relative;
  }
  .skeleton-overlay {
    position: absolute;
    inset: 0;
    backdrop-filter: blur(0px);
    animation: fadeSkeleton 0.25s ease;
  }
  @keyframes fadeSkeleton {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
