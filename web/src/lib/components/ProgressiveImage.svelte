<script lang="ts">
  import { onMount } from 'svelte';

  export let src: string;
  export let alt: string = '';
  export let className: string = '';
  export let loading: 'lazy' | 'eager' = 'lazy';
  export let sizes: string = '100vw';
  export let srcset: string = '';
  export let placeholderSrc: string = '';
  export let blurDataURL: string = '';

  let imgElement: HTMLImageElement;
  let isLoaded = false;
  let isInView = false;
  let hasError = false;

  const handleImageLoad = () => {
    isLoaded = true;
  };

  const handleImageError = () => {
    hasError = true;
  };

  onMount(() => {
    if (!imgElement) return;

    if (loading === 'eager' || !('IntersectionObserver' in window)) {
      isInView = true;
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isInView = true;
            observer.unobserve(imgElement);
          }
        });
      },
      {
        rootMargin: '50px'
      }
    );

    observer.observe(imgElement);

    return () => {
      if (imgElement) {
        observer.unobserve(imgElement);
      }
    };
  });

  $: shouldLoadImage = loading === 'eager' || isInView;
  $: currentSrc = shouldLoadImage ? src : placeholderSrc || blurDataURL || '';
</script>

<div class="progressive-image-container {isLoaded ? 'loaded' : ''}">
  {#if blurDataURL && !isLoaded}
    <img
      src={blurDataURL}
      alt=""
      class="progressive-image-placeholder {className}"
      aria-hidden="true"
    />
  {/if}

  <img
    bind:this={imgElement}
    src={currentSrc}
    {alt}
    {sizes}
    srcset={shouldLoadImage ? srcset : ''}
    class="progressive-image {className} {isLoaded ? 'progressive-image-loaded' : ''}"
    on:load={handleImageLoad}
    on:error={handleImageError}
    {loading}
  />

  {#if hasError}
    <div class="progressive-image-error {className}" role="img" aria-label={alt}>
      <svg class="h-8 w-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    </div>
  {/if}
</div>

<style>
  .progressive-image-container {
    position: relative;
    overflow: hidden;
  }

  .progressive-image-placeholder {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(10px);
    transform: scale(1.05);
    transition: opacity 0.3s ease-out;
  }

  .progressive-image {
    opacity: 0;
    transition: opacity 0.3s ease-out;
  }

  .progressive-image-loaded {
    opacity: 1;
  }

  .loaded .progressive-image-placeholder {
    opacity: 0;
  }

  .progressive-image-error {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(243 244 246);
  }

  :global(.dark) .progressive-image-error {
    background-color: rgb(31 41 55);
  }
</style>
