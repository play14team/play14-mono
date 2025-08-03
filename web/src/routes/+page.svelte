<script lang="ts">
  import type { PageData } from './$types';
  import { t } from '$lib/i18n';

  export let data: PageData;

  // HomePage is a Houdini store, so we need to access it with $
  const { HomePage } = data;

  // Use the data directly from the store
  $: events = $HomePage.data?.events?.data || [];
  $: articles = $HomePage.data?.articles?.data || [];
</script>

<div>
  <h1 class="mb-8 text-center text-4xl font-bold">{$t('home.welcome')}</h1>

  <!-- Loading state -->
  {#if $HomePage.fetching}
    <div class="py-8 text-center">
      <p class="text-gray-500">{$t('home.loading')}</p>
    </div>
  {/if}

  <!-- Error state -->
  {#if $HomePage.errors}
    <div class="mb-8 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
      <strong>{$t('home.error')}:</strong>
      {#each $HomePage.errors as error (error.message)}
        <p>{error.message}</p>
      {/each}
    </div>
  {/if}

  <!-- Events Section -->
  {#if events.length > 0 && !$HomePage.fetching}
    <section class="mb-12">
      <h2 class="mb-6 text-3xl font-bold">{$t('home.upcomingEvents')}</h2>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {#each events as event (event.id)}
          {#if event.attributes}
            <article
              class="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
            >
              {#if event.attributes.defaultImage?.data?.attributes?.url}
                <img
                  src={event.attributes.defaultImage.data.attributes.url}
                  alt={event.attributes.defaultImage.data.attributes.alternativeText ||
                    event.attributes.name}
                  class="h-48 w-full object-cover"
                />
              {/if}
              <div class="p-6">
                <h3 class="mb-2 text-xl font-semibold">
                  <a href="/events/{event.attributes.slug}" class="hover:text-blue-600">
                    {event.attributes.name}
                  </a>
                </h3>
                {#if event.attributes.location?.data?.attributes}
                  <p class="mb-2 text-gray-600">
                    📍 {event.attributes.location.data.attributes.name}, {event.attributes.location
                      .data.attributes.country}
                  </p>
                {/if}
                {#if event.attributes.start}
                  <p class="mb-3 text-sm text-gray-500">
                    📅 {new Date(event.attributes.start).toLocaleDateString()}
                    {#if event.attributes.end && event.attributes.end !== event.attributes.start}
                      - {new Date(event.attributes.end).toLocaleDateString()}
                    {/if}
                  </p>
                {/if}
                {#if event.attributes.description}
                  <div class="line-clamp-3 text-gray-700">
                    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                    {@html event.attributes.description}
                  </div>
                {/if}
              </div>
            </article>
          {/if}
        {/each}
      </div>
    </section>
  {/if}

  <!-- Articles Section -->
  {#if articles.length > 0 && !$HomePage.fetching}
    <section class="mb-12">
      <h2 class="mb-6 text-3xl font-bold">{$t('home.latestArticles')}</h2>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {#each articles as article (article.id)}
          {#if article.attributes}
            <article
              class="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
            >
              {#if article.attributes.defaultImage?.data?.attributes?.url}
                <img
                  src={article.attributes.defaultImage.data.attributes.url}
                  alt={article.attributes.defaultImage.data.attributes.alternativeText ||
                    article.attributes.title}
                  class="h-48 w-full object-cover"
                />
              {/if}
              <div class="p-6">
                {#if article.attributes.category}
                  <span
                    class="mb-2 inline-block rounded bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-600"
                  >
                    {article.attributes.category}
                  </span>
                {/if}
                <h3 class="mb-2 text-xl font-semibold">
                  <a href="/articles/{article.attributes.slug}" class="hover:text-blue-600">
                    {article.attributes.title}
                  </a>
                </h3>
                {#if article.attributes.summary}
                  <p class="mb-3 line-clamp-3 text-gray-700">
                    {article.attributes.summary}
                  </p>
                {/if}
                {#if article.attributes.publishedAt}
                  <p class="text-sm text-gray-500">
                    {new Date(article.attributes.publishedAt).toLocaleDateString()}
                  </p>
                {/if}
              </div>
            </article>
          {/if}
        {/each}
      </div>
    </section>
  {/if}
</div>

<style>
  .line-clamp-3 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
  }
</style>
