<script lang="ts">
  import type { Event } from '$lib/graphql';

  export let event: Event;
</script>

{#if event.attributes}
  <article
    class="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-gray-800 dark:shadow-gray-900/50 dark:hover:shadow-gray-900/70"
  >
    {#if event.attributes.defaultImage?.data?.attributes?.url}
      <img
        src={event.attributes.defaultImage.data.attributes.url}
        alt={event.attributes.defaultImage.data.attributes.alternativeText || event.attributes.name}
        class="h-48 w-full object-cover"
      />
    {/if}
    <div class="p-6">
      <h3 class="mb-2 text-xl font-semibold">
        <a
          href="/events/{event.attributes.slug}"
          class="text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
        >
          {event.attributes.name}
        </a>
      </h3>
      {#if event.attributes.location?.data?.attributes}
        <p class="mb-2 text-gray-600 dark:text-gray-400">
          📍 {event.attributes.location.data.attributes.name}, {event.attributes.location.data
            .attributes.country}
        </p>
      {/if}
      {#if event.attributes.start}
        <p class="mb-3 text-sm text-gray-500 dark:text-gray-400">
          📅 {new Date(event.attributes.start).toLocaleDateString()}
          {#if event.attributes.end && event.attributes.end !== event.attributes.start}
            - {new Date(event.attributes.end).toLocaleDateString()}
          {/if}
        </p>
      {/if}
      {#if event.attributes.description}
        <div class="line-clamp-3 text-gray-700 dark:text-gray-300">
          <!-- eslint-disable-next-line svelte/no-at-html-tags -->
          {@html event.attributes.description}
        </div>
      {/if}
    </div>
  </article>
{/if}
