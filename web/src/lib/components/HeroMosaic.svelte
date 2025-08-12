<script lang="ts">
  import { onMount, tick } from 'svelte';
  import ProgressiveImage from './ProgressiveImage.svelte';
  import { generateSrcSet, getSizes, generateBlurDataURL } from '$lib/utils/image';

  export let images: string[] = []; // Now expects array of image URLs from Convex

  let selectedImage: string | null = null;
  let modal: HTMLDivElement;

  // Define mosaic pattern for different image sizes
  // Pattern repeats every 10 images for variety
  const getMosaicClass = (index: number): string => {
    const patterns = [
      'col-span-2 row-span-2', // Large square
      'col-span-1 row-span-1', // Small square
      'col-span-2 row-span-1', // Wide rectangle
      'col-span-1 row-span-2', // Tall rectangle
      'col-span-1 row-span-1', // Small square
      'col-span-1 row-span-1', // Small square
      'col-span-2 row-span-2', // Large square
      'col-span-1 row-span-1', // Small square
      'col-span-2 row-span-1', // Wide rectangle
      'col-span-1 row-span-1' // Small square
    ];

    return patterns[index % patterns.length];
  };

  const openImage = async (image: string) => {
    selectedImage = image;
    await tick();
    if (modal) {
      modal.focus();
    }
  };

  const closeImage = () => {
    selectedImage = null;
  };

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && selectedImage) {
      closeImage();
    }
  };

  onMount(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  });

  const handleModalClick = (event: MouseEvent) => {
    if (event.target === modal) {
      closeImage();
    }
  };
</script>

{#if images && images.length > 0}
  <!-- Mosaic Grid -->
  <div
    class="mb-12 grid auto-rows-[200px] grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
  >
    {#each images.filter((img) => img && img !== '') as image, index (index)}
      <button
        on:click={() => openImage(image)}
        class="group relative overflow-hidden rounded-lg bg-gray-100 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl dark:bg-gray-800 {getMosaicClass(
          index
        )}"
        aria-label="View image"
      >
        <ProgressiveImage
          src={image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
          srcset={generateSrcSet(image)}
          sizes={getSizes('50vw', '33vw', '20vw')}
          blurDataURL={generateBlurDataURL()}
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        ></div>
      </button>
    {/each}
  </div>

  <!-- Modal for selected image -->
  {#if selectedImage}
    <div
      bind:this={modal}
      on:click={handleModalClick}
      on:keydown={handleKeydown}
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      tabindex="-1"
    >
      <div class="relative max-h-[90vh] max-w-[90vw]">
        <img
          src={selectedImage}
          alt=""
          class="h-auto max-h-[90vh] w-auto max-w-[90vw] object-contain"
        />
        <button
          on:click={closeImage}
          class="absolute -right-4 -top-4 rounded-full bg-white p-2 text-gray-800 transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
          aria-label="Close image viewer"
        >
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  {/if}
{/if}

<style>
  /* Ensure consistent aspect ratios for different image sizes */
  :global(.auto-rows-\[200px\]) {
    grid-auto-rows: 200px;
  }

  /* Add some variety to the grid on different screen sizes */
  @media (max-width: 640px) {
    :global(.auto-rows-\[200px\]) {
      grid-auto-rows: 150px;
    }
  }

  @media (min-width: 1024px) {
    :global(.auto-rows-\[200px\]) {
      grid-auto-rows: 180px;
    }
  }
</style>
