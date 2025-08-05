<script lang="ts">
  import ArticleCard from '$lib/components/cards/ArticleCard.svelte';
  import EventCard from '$lib/components/cards/EventCard.svelte';
  import CodeOfConduct from '$lib/components/CodeOfConduct.svelte';
  import Expectations from '$lib/components/Expectations.svelte';
  import HeroMosaic from '$lib/components/HeroMosaic.svelte';
  import Manifesto from '$lib/components/Manifesto.svelte';
  import { t, locale } from '$lib/i18n';
  import type { PageData } from './$types';

  export let data: PageData;

  // Use the HomePage store from the automatic route load
  const { HomePage } = data;

  // Watch for locale changes and refetch
  let previousLocale = $locale;
  $: if ($locale && $locale !== previousLocale && HomePage.fetch) {
    previousLocale = $locale;
    HomePage.fetch({ variables: { locale: $locale } });
  }

  // Use the data directly from the store
  $: upcomingEvents = $HomePage.data?.upcomingEvents?.data || [];
  $: latestArticles = $HomePage.data?.latestArticles?.data || [];
  $: homeImages = $HomePage.data?.home?.data?.attributes?.images?.data || [];
  $: expectations = $HomePage.data?.expectations?.data || [];
</script>

<div>
  <!-- Title Section -->
  <section class="mb-12 text-center">
    <div class="mb-4 flex justify-center">
      <img
        src="/logo/play14_white_bg_full_4800x1506.png"
        alt="#play14"
        class="h-auto w-full max-w-2xl dark:hidden"
      />
      <img
        src="/logo/play14_black_bg_full_4800x1506.png"
        alt="#play14"
        class="hidden h-auto w-full max-w-2xl dark:block"
      />
    </div>
    <p class="text-xl font-semibold text-blue-600 dark:text-blue-400">play is the way</p>
  </section>

  <!-- What is #play14? Section -->
  <section class="mb-16 pt-16">
    <h2 class="mb-6 text-3xl font-bold text-gray-900 dark:text-gray-100">
      {$t('home.whatIsPlay14')}
    </h2>
    <div class="prose prose-lg dark:prose-invert max-w-none">
      <p class="text-gray-700 dark:text-gray-300">
        {$t('home.welcomeText')}
      </p>
      <p class="text-gray-700 dark:text-gray-300">
        {$t('home.movementDescription')}
      </p>
    </div>
  </section>

  <!-- Discover the Power of Play Section -->
  <section class="mb-16 pt-24">
    <h2 class="mb-6 text-3xl font-bold text-gray-900 dark:text-gray-100">
      {$t('home.discoverPowerOfPlay')}
    </h2>
    <div class="prose prose-lg dark:prose-invert max-w-none">
      <p class="mb-6 text-gray-700 dark:text-gray-300">
        {$t('home.playDescription')}
      </p>
      <div class="flex justify-center">
        <blockquote class="my-8 max-w-2xl border-l-4 border-blue-500 pl-6 text-center italic">
          <p class="text-xl text-gray-600 dark:text-gray-400">
            {$t('home.franklinQuote')}
          </p>
          <footer class="mt-4 text-right font-semibold">— Benjamin Franklin</footer>
        </blockquote>
      </div>
      <p class="text-gray-700 dark:text-gray-300">
        {$t('home.playBenefits')}
      </p>
    </div>
  </section>

  <!-- Why Attend Section -->
  <section class="mb-16 pt-24">
    <h2 class="mb-6 text-3xl font-bold text-gray-900 dark:text-gray-100">{$t('home.whyAttend')}</h2>
    <div class="prose prose-lg dark:prose-invert max-w-none">
      <p class="mb-4 text-gray-700 dark:text-gray-300">
        {$t('home.whyAttendDescription')}
      </p>
      <ul class="list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
        <li><strong>{$t('home.globalCommunity')}</strong>: {$t('home.globalCommunityDesc')}</li>
        <li><strong>{$t('home.endlessFun')}</strong>: {$t('home.endlessFunDesc')}</li>
        <li><strong>{$t('home.inspireBeInspired')}</strong>: {$t('home.inspireBeInspiredDesc')}</li>
      </ul>
      <p class="mt-4 text-gray-700 dark:text-gray-300">
        {$t('home.unconferenceDescription')}
      </p>
    </div>
  </section>

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
      {#each $HomePage.errors as error, index (index)}
        <p>{error.message}</p>
      {/each}
    </div>
  {/if}

  <!-- Events Section -->
  {#if upcomingEvents.length > 0}
    <section class="mb-16">
      <h2 class="mb-6 text-3xl font-bold text-gray-900 dark:text-gray-100">
        {$t('home.upcomingEvents')}
      </h2>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {#each upcomingEvents as event (event.id)}
          <EventCard {event} />
        {/each}
      </div>
    </section>
  {/if}

  <!-- What to Expect Section -->
  <section class="mb-16">
    <h2 class="mb-6 text-3xl font-bold text-gray-900 dark:text-gray-100">
      {$t('home.whatToExpect')}
    </h2>
    <div class="prose prose-lg dark:prose-invert max-w-none">
      <p class="mb-4 text-gray-700 dark:text-gray-300">
        {$t('home.whatToExpectDescription')}
      </p>
      <div class="flex justify-center">
        <blockquote class="my-8 max-w-2xl border-l-4 border-blue-500 pl-6 text-center italic">
          <p class="text-xl text-gray-600 dark:text-gray-400">
            {$t('home.platoQuote')}
          </p>
          <footer class="mt-4 text-right font-semibold">— Plato</footer>
        </blockquote>
      </div>
      <p class="mb-4 text-gray-700 dark:text-gray-300">
        {$t('home.activitiesIntro')}
      </p>
      <ul class="list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
        <li>{$t('home.activitySeriousGame')}</li>
        <li>{$t('home.activityIceBreaker')}</li>
        <li>{$t('home.activityWarmUp')}</li>
        <li>{$t('home.activityFacilitation')}</li>
        <li>{$t('home.activityTeamBuilding')}</li>
        <li>{$t('home.activityGameDesign')}</li>
        <li>{$t('home.activityIntrospection')}</li>
        <li>{$t('home.activityCoaching')}</li>
        <li>{$t('home.activityBrainstorming')}</li>
        <li>{$t('home.activityCreative')}</li>
        <li>{$t('home.activityFun')}</li>
      </ul>
      <p class="mt-6 text-gray-700 dark:text-gray-300">
        {$t('home.developSkills')}
      </p>
    </div>
  </section>

  <!-- Hero Mosaic (Gallery Section) -->
  {#if homeImages.length > 0}
    <section class="mb-16">
      <h2 class="mb-6 text-3xl font-bold text-gray-900 dark:text-gray-100">{$t('home.gallery')}</h2>
      <HeroMosaic images={homeImages} />
    </section>
  {/if}

  <!-- Manifesto and Code of Conduct Section -->
  <section class="mb-16 pt-24">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <div>
        <Manifesto />
      </div>
      <div>
        <CodeOfConduct />
      </div>
    </div>
  </section>

  <!-- Articles Section -->
  {#if latestArticles.length > 0}
    <section class="mb-16">
      <h2 class="mb-6 text-3xl font-bold text-gray-900 dark:text-gray-100">
        {$t('home.latestArticles')}
      </h2>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {#each latestArticles as article (article.id)}
          <ArticleCard {article} />
        {/each}
      </div>
    </section>
  {/if}

  <!-- Expectations Section -->
  {#if expectations.length > 0}
    <section class="mb-16 pt-24">
      <Expectations
        expectations={expectations
          .filter((exp) => exp.id && exp.attributes)
          .map((exp) => ({
            id: exp.id!,
            attributes: {
              title: exp.attributes!.title,
              type: exp.attributes!.type as 'Main' | 'Secondary',
              icon: exp.attributes!.icon,
              content: exp.attributes!.content
            }
          }))}
        category="main"
      />
    </section>
  {/if}
</div>
