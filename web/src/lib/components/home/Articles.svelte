<script lang="ts">
  import { useQuery } from 'convex-svelte';
  import { api } from '$lib/../convex/_generated/api';
  import ArticleCard from '$lib/components/cards/ArticleCard.svelte';
  import { t } from '$lib/i18n';

  // Use Convex query to get latest articles
  const query = useQuery(api.home.getLatestArticles, () => ({ limit: 3 }));

  // Access query results using derived runes
  const latestArticles = $derived(query.data || []);
  const isLoading = $derived(query.isLoading);
</script>

{#if isLoading}
  <section class="mb-16">
    <div class="flex justify-center py-8">
      <div class="text-gray-500">Loading articles...</div>
    </div>
  </section>
{:else if latestArticles.length > 0}
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
