<script lang="ts">
  import { useQuery } from 'convex-svelte';
  import { api } from '$lib/../convex/_generated/api';
  import ArticleCard from '$lib/components/cards/ArticleCard.svelte';
  import EventCard from '$lib/components/cards/EventCard.svelte';
  import CodeOfConduct from '$lib/components/CodeOfConduct.svelte';
  import Expectations from '$lib/components/Expectations.svelte';
  import HeroMosaic from '$lib/components/HeroMosaic.svelte';
  import Manifesto from '$lib/components/Manifesto.svelte';
  import { t, locale } from '$lib/i18n';

  // Use Convex query to get homepage data
  // Pass a function for reactive args so it updates when locale changes
  const query = useQuery(api.home.getHomePage, () => ({ locale: $locale }));

  // Access query results using derived runes
  const data = $derived(query.data);
  const isLoading = $derived(query.isLoading);
  const error = $derived(query.error);

  // Extract data from the query result - these will update when data changes
  const upcomingEvents = $derived(data?.upcomingEvents || []);
  const latestArticles = $derived(data?.latestArticles || []);
  const homeImages = $derived(data?.home?.imageUrls || []);
  const expectations = $derived(data?.expectations || []);
</script>

<div>
  <!-- Title Section -->
  <section class="mb-12 text-center">
    <div class="mb-12 flex justify-center">
      <img
        src="/logo/play14_white_bg_transparent_4800x1506.png"
        alt="#play14"
        class="h-auto w-full max-w-2xl dark:hidden"
      />
      <img
        src="/logo/play14_black_bg_transparent_4800x1506.png"
        alt="#play14"
        class="hidden h-auto w-full max-w-2xl dark:block"
      />
    </div>
    <p class="text-5xl font-semibold">
      <span class="text-orange-500">play</span>
      <span class="text-yellow-500">is</span>
      <span class="text-blue-600 dark:text-blue-400">the</span>
      <span class="text-green-500">way</span>
    </p>
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
  {#if isLoading}
    <div class="py-8 text-center">
      <p class="text-gray-500">Loading...</p>
    </div>
  {/if}

  <!-- Error state -->
  {#if error}
    <div class="py-8 text-center">
      <p class="text-red-500">Error loading data: {error.message}</p>
    </div>
  {/if}

  <!-- Events Section -->
  {#if upcomingEvents.length > 0}
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
        {#each latestArticles as article (article._id)}
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
          .filter((exp) => exp._id && exp.title)
          .map((exp) => ({
            id: exp._id,
            attributes: {
              title: exp.title,
              type: exp.type as 'Main' | 'Secondary',
              icon: exp.icon,
              content: exp.content
            }
          }))}
        category="main"
      />
    </section>
  {/if}
</div>
