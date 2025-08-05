<script lang="ts">
  import type { Media } from '$lib/types';
  import { onMount, tick } from 'svelte';

  export let images: Media[] = [];

  let selectedImage: Media | null = null;
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

  const openImage = async (image: Media) => {
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

{#if images.length > 0}
  <!-- Mosaic Grid -->
  <div
    class="mb-12 grid auto-rows-[200px] grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
  >
    {#each images as image, index (image.attributes?.name || index)}
      {#if image.attributes}
        <button
          on:click={() => openImage(image)}
          class="group relative overflow-hidden rounded-lg bg-gray-100 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl dark:bg-gray-800 {getMosaicClass(
            index
          )}"
          aria-label="View {image.attributes.alternativeText || 'image'}"
        >
          <img
            src={image.attributes.url}
            alt={image.attributes.alternativeText || ''}
            class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          ></div>
        </button>
      {/if}
    {/each}
  </div>

  <!-- Modal for selected image -->
  {#if selectedImage?.attributes}
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
          src={selectedImage.attributes.url}
          alt={selectedImage.attributes.alternativeText || ''}
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
