<script lang="ts">
  import EventCard from '$lib/components/events/EventCard.svelte';
  import ErrorAlert from '$lib/components/ErrorAlert.svelte';
  import { t } from '$lib/i18n';
  import { useQuery } from 'convex-svelte';
  import { api } from '$lib/../convex/_generated/api';
  import { Skeleton } from '$lib/components/ui/skeleton';

  const query = useQuery(api.events.getUpcoming, () => ({}));
  const events = $derived(query.data || []);
  const isLoading = $derived(query.isLoading);
  const error = $derived(query.error);
  const todayYear = new Date().getFullYear();

  // Total published events overall
  const totalQuery = useQuery(api.events.count, () => ({}));
  const totalEvents = $derived(totalQuery.data ?? 0);
</script>

{#if error}
  <ErrorAlert {error} title="Failed to load upcoming events" />
{:else if isLoading}
  <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" aria-busy="true">
    {#each Array.from({ length: 6 }, (_, i) => i) as i (i)}
      <div class="bg-card overflow-hidden rounded-xl border p-0 shadow-sm">
        <div class="h-64 w-full"><Skeleton class="h-full w-full" /></div>
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
{:else if events.length === 0}
  <div class="space-y-4">
    <p class="text-muted-foreground text-center">{$t('events.noUpcoming')}</p>
    <p class="text-center text-sm">
      <a class="hover:text-primary underline" href={`/events/${todayYear}`}
        >{$t('events.viewCurrentYear', { year: todayYear })}</a
      >
    </p>
  </div>
{:else}
  <div class="text-muted-foreground mb-4 flex items-center justify-between text-sm">
    <div>
      {#if totalQuery.isLoading}
        {$t('loading')}...
      {:else}
        {$t('events.countSummary', { visible: events.length, total: totalEvents })}
      {/if}
    </div>
  </div>
  <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {#each events as event (event._id)}
      <EventCard {event} />
    {/each}
  </div>
{/if}
