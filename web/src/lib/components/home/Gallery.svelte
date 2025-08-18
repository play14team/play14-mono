<script lang="ts">
  import { useQuery } from 'convex-svelte';
  import { api } from '$lib/../convex/_generated/api';
  import HeroMosaic from '$lib/components/HeroMosaic.svelte';
  import { t } from '$lib/i18n';

  // Use Convex query to get home images
  const query = useQuery(api.home.getHomeImages, () => ({}));

  // Access query results using derived runes
  const homeImages = $derived(query.data || []);
  const isLoading = $derived(query.isLoading);
</script>

{#if isLoading}
  <section class="mb-16">
    <div class="flex justify-center py-8">
      <div class="text-gray-500">Loading gallery...</div>
    </div>
  </section>
{:else if homeImages.length > 0}
  <section class="mb-16">
    <h2 class="mb-6 text-3xl font-bold text-gray-900 dark:text-gray-100">{$t('home.gallery')}</h2>
    <HeroMosaic images={homeImages} />
  </section>
{/if}
