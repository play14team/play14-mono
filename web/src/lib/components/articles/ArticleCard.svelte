<script lang="ts">
  import { Badge } from '$lib/components/ui/badge';
  import ProgressiveImage from '../ProgressiveImage.svelte';
  import { generateSrcSet, getSizes, generateBlurDataURL } from '$lib/utils/image';

  interface ArticleData {
    _id: string;
    title?: string;
    slug?: string;
    category?: string;
    summary?: string;
    imageUrl?: string | null;
    // Convex articles may return numeric timestamps; Strapi (if reused) may provide ISO strings
    publishedAt?: string | number;
  }

  interface Props {
    article: ArticleData;
  }

  let { article }: Props = $props();
</script>

{#if article}
  <div
    class="bg-card text-card-foreground group overflow-hidden rounded-xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
  >
    {#if article.imageUrl}
      <div class="h-48 w-full overflow-hidden">
        <ProgressiveImage
          src={article.imageUrl}
          alt={article.title}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          srcset={generateSrcSet(article.imageUrl)}
          sizes={getSizes('100vw', '50vw', '33vw')}
          blurDataURL={generateBlurDataURL()}
        />
      </div>
    {/if}
    <div class="p-6">
      {#if article.category}
        <Badge variant="secondary" class="mb-2 w-fit">
          {article.category}
        </Badge>
      {/if}
      <h3 class="mb-2 text-2xl font-semibold leading-none tracking-tight">
        <a href="/articles/{article.slug}" class="hover:text-primary">
          {article.title}
        </a>
      </h3>
      {#if article.summary}
        <p class="text-muted-foreground line-clamp-3">
          {article.summary}
        </p>
      {/if}
      {#if article.publishedAt}
        <p class="text-muted-foreground mt-4 text-sm">
          {new Date(article.publishedAt).toLocaleDateString()}
        </p>
      {/if}
    </div>
  </div>
{/if}
