<script lang="ts">
  import type { Media } from '$lib/graphql';
  import { onMount, tick } from 'svelte';

  export let images: Media[] = [];

  let selectedImage: Media | null = null;
  let modal: HTMLDivElement;

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
  <div class="mb-12 grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
    {#each images as image, index (image.attributes?.name || index)}
      {#if image.attributes}
        <button
          on:click={() => openImage(image)}
          class="group relative overflow-hidden rounded-lg bg-gray-100 transition-transform hover:scale-105 dark:bg-gray-800 {index ===
          0
            ? 'col-span-2 row-span-2'
            : ''}"
          aria-label="View {image.attributes.alternativeText || 'image'}"
        >
          <img
            src={image.attributes.url}
            alt={image.attributes.alternativeText || ''}
            class="h-full w-full object-cover"
          />
          <div class="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20"></div>
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
