<script lang="ts">
  import type { PageData } from './$types';
  import { t } from '$lib/i18n';
  import EventCard from '$lib/components/cards/EventCard.svelte';
  import ArticleCard from '$lib/components/cards/ArticleCard.svelte';

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
          <EventCard {event} />
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
          <ArticleCard {article} />
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
