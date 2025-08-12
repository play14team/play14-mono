<script lang="ts">
  import ProgressiveImage from '../ProgressiveImage.svelte';
  import { generateSrcSet, getSizes, generateBlurDataURL } from '$lib/utils/image';

  interface EventData {
    _id: string;
    name?: string;
    slug?: string;
    description?: string;
    defaultImageUrl?: string | null;
    start?: number;
    end?: number;
    location?: { name?: string; country?: string } | null;
  }

  export let event: EventData;
</script>

{#if event}
  <article
    class="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-gray-800 dark:shadow-gray-900/50 dark:hover:shadow-gray-900/70"
  >
    {#if event.defaultImageUrl}
      <div class="h-48 w-full">
        <ProgressiveImage
          src={event.defaultImageUrl}
          alt={event.name}
          className="h-48 w-full object-cover"
          loading="lazy"
          srcset={generateSrcSet(event.defaultImageUrl)}
          sizes={getSizes('100vw', '50vw', '33vw')}
          blurDataURL={generateBlurDataURL()}
        />
      </div>
    {/if}
    <div class="p-6">
      <h3 class="mb-2 text-xl font-semibold">
        <a
          href="/events/{event.slug}"
          class="text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
        >
          {event.name}
        </a>
      </h3>
      {#if event.location}
        <p class="mb-2 text-gray-600 dark:text-gray-400">
          📍 {event.location.name}, {event.location.country}
        </p>
      {/if}
      {#if event.start}
        <p class="mb-3 text-sm text-gray-500 dark:text-gray-400">
          📅 {new Date(event.start).toLocaleDateString()}
          {#if event.end && event.end !== event.start}
            - {new Date(event.end).toLocaleDateString()}
          {/if}
        </p>
      {/if}
      {#if event.description}
        <div class="line-clamp-3 text-gray-700 dark:text-gray-300">
          <!-- eslint-disable-next-line svelte/no-at-html-tags -->
          {@html event.description}
        </div>
      {/if}
    </div>
  </article>
{/if}
