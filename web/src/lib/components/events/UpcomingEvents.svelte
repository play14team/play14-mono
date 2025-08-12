<script lang="ts">
  import type { EventSummary } from '$lib/server/events';
  let { events } = $props<{ events: EventSummary[] }>();

  function formatRange(ev: EventSummary) {
    const fmt = (ms: number) =>
      new Date(ms).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
    return `${fmt(ev.start)} - ${fmt(ev.end)}`;
  }
</script>

<section class="space-y-4">
  <h3 class="text-xl font-semibold">Upcoming Events</h3>
  {#if events.length === 0}
    <p>No upcoming events yet.</p>
  {:else}
    <ul class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {#each events as ev (ev._id)}
        <li class="rounded border p-3 transition hover:shadow">
          <a href={`/events/${ev.slug}`} class="font-medium hover:underline">{ev.name}</a>
          <div class="text-sm opacity-70">{formatRange(ev)}</div>
          {#if ev.location?.name}
            <div class="mt-1 text-xs opacity-60">{ev.location.name}</div>
          {/if}
        </li>
      {/each}
    </ul>
  {/if}
</section>
