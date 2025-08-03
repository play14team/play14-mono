<script lang="ts">
  import type { Article } from '$lib/graphql';

  export let article: Article;
</script>

{#if article.attributes}
  <article
    class="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-gray-800 dark:shadow-gray-900/50 dark:hover:shadow-gray-900/70"
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
          class="mb-2 inline-block rounded bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
        >
          {article.attributes.category}
        </span>
      {/if}
      <h3 class="mb-2 text-xl font-semibold">
        <a
          href="/articles/{article.attributes.slug}"
          class="text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
        >
          {article.attributes.title}
        </a>
      </h3>
      {#if article.attributes.summary}
        <p class="mb-3 line-clamp-3 text-gray-700 dark:text-gray-300">
          {article.attributes.summary}
        </p>
      {/if}
      {#if article.attributes.publishedAt}
        <p class="text-sm text-gray-500 dark:text-gray-400">
          {new Date(article.attributes.publishedAt).toLocaleDateString()}
        </p>
      {/if}
    </div>
  </article>
{/if}
