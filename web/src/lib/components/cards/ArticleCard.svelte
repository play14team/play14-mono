<script lang="ts">
  import ProgressiveImage from '../ProgressiveImage.svelte';
  import { generateSrcSet, getSizes, generateBlurDataURL } from '$lib/utils/image';

  interface ArticleData {
    _id: string;
    title?: string;
    slug?: string;
    category?: string;
    summary?: string;
    imageUrl?: string | null;
    publishedAt?: string;
  }

  export let article: ArticleData;
</script>

{#if article}
  <article
    class="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-gray-800 dark:shadow-gray-900/50 dark:hover:shadow-gray-900/70"
  >
    {#if article.imageUrl}
      <div class="h-48 w-full">
        <ProgressiveImage
          src={article.imageUrl}
          alt={article.title}
          className="h-48 w-full object-cover"
          loading="lazy"
          srcset={generateSrcSet(article.imageUrl)}
          sizes={getSizes('100vw', '50vw', '33vw')}
          blurDataURL={generateBlurDataURL()}
        />
      </div>
    {/if}
    <div class="p-6">
      {#if article.category}
        <span
          class="mb-2 inline-block rounded bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
        >
          {article.category}
        </span>
      {/if}
      <h3 class="mb-2 text-xl font-semibold">
        <a
          href="/articles/{article.slug}"
          class="text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
        >
          {article.title}
        </a>
      </h3>
      {#if article.summary}
        <p class="mb-3 line-clamp-3 text-gray-700 dark:text-gray-300">
          {article.summary}
        </p>
      {/if}
      {#if article.publishedAt}
        <p class="text-sm text-gray-500 dark:text-gray-400">
          {new Date(article.publishedAt).toLocaleDateString()}
        </p>
      {/if}
    </div>
  </article>
{/if}
