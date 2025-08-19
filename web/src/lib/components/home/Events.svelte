<script lang="ts">
  import { useQuery } from 'convex-svelte';
  import { api } from '$lib/../convex/_generated/api';
  import EventCard from '$lib/components/events/EventCard.svelte';
  import ErrorAlert from '$lib/components/ErrorAlert.svelte';
  import { t } from '$lib/i18n';

  // Use Convex query to get upcoming events
  const query = useQuery(api.home.getUpcomingEvents, () => ({ limit: 6 }));

  // Access query results using derived runes
  const upcomingEvents = $derived(query.data || []);
  const isLoading = $derived(query.isLoading);
  const error = $derived(query.error);
</script>

{#if error}
  <section class="mb-16">
    <ErrorAlert {error} title="Failed to load events" />
  </section>
{:else if isLoading}
  <section class="mb-16">
    <div class="flex justify-center py-8">
      <div class="text-gray-500">Loading events...</div>
    </div>
  </section>
{:else if upcomingEvents.length > 0}
  <section class="mb-16">
    <h2 class="mb-6 text-3xl font-bold text-gray-900 dark:text-gray-100">
      {$t('home.upcomingEvents')}
    </h2>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {#each upcomingEvents as event (event._id)}
        <EventCard {event} />
      {/each}
    </div>
  </section>
{/if}
