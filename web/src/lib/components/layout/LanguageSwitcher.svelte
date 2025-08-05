<script lang="ts">
  import { locale, locales, type Locale } from '$lib/i18n';
  import { onMount } from 'svelte';
  import { invalidateAll } from '$app/navigation';

  let currentLocale: Locale = 'en';
  let isOpen = false;
  let dropdownElement: HTMLDivElement;
  let buttonElement: HTMLButtonElement;

  // Subscribe to locale changes
  locale.subscribe((value) => {
    currentLocale = value;
  });

  // Initialize locale from localStorage
  onMount(() => {
    locale.initialize();

    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !dropdownElement?.contains(event.target as Node) &&
        !buttonElement?.contains(event.target as Node)
      ) {
        isOpen = false;
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  async function changeLocale(newLocale: Locale) {
    locale.set(newLocale);
    isOpen = false;
    // Invalidate all load functions to trigger data reload
    await invalidateAll();
  }

  function toggleDropdown() {
    isOpen = !isOpen;
  }
</script>

<div class="language-switcher">
  <button
    bind:this={buttonElement}
    class="language-button"
    aria-label="Change language"
    aria-haspopup="true"
    aria-expanded={isOpen}
    on:click={toggleDropdown}
  >
    <i class="bx bx-globe text-gray-600 dark:text-gray-400"></i>
    <span class="language-code">{currentLocale.toUpperCase()}</span>
  </button>

  <div bind:this={dropdownElement} class="language-dropdown" class:open={isOpen}>
    {#each locales as lang (lang)}
      <button
        class="language-option {currentLocale === lang ? 'active' : ''}"
        on:click={() => changeLocale(lang)}
        aria-label="Switch to {lang === 'en' ? 'English' : 'Français'}"
      >
        {lang === 'en' ? '🇬🇧' : '🇫🇷'}
        {lang === 'en' ? 'English' : 'Français'}
      </button>
    {/each}
  </div>
</div>

<style>
  .language-switcher {
    position: relative;
  }

  .language-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: rgb(249 250 251); /* bg-gray-50 */
    color: rgb(55 65 81); /* text-gray-700 */
    border: 1px solid rgb(209 213 219); /* border-gray-300 */
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  :global(.dark) .language-button {
    background-color: rgb(31 41 55); /* bg-gray-800 */
    color: rgb(209 213 219); /* text-gray-300 */
    border-color: rgb(55 65 81); /* border-gray-700 */
  }

  .language-button:hover {
    border-color: rgb(59 130 246); /* border-blue-500 */
  }

  :global(.dark) .language-button:hover {
    border-color: rgb(96 165 250); /* border-blue-400 */
  }

  .language-code {
    font-weight: 600;
    font-size: 0.875rem;
  }

  .language-dropdown {
    position: absolute;
    top: calc(100% + 4px);
    right: 0;
    background-color: white;
    border: 1px solid rgb(209 213 219); /* border-gray-300 */
    border-radius: 4px;
    box-shadow:
      0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.2s ease;
    min-width: 150px;
    z-index: 50;
  }

  :global(.dark) .language-dropdown {
    background-color: rgb(31 41 55); /* bg-gray-800 */
    border-color: rgb(55 65 81); /* border-gray-700 */
    box-shadow:
      0 10px 15px -3px rgb(0 0 0 / 0.3),
      0 4px 6px -4px rgb(0 0 0 / 0.2);
  }

  .language-dropdown.open {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .language-option {
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    background: none;
    border: none;
    text-align: left;
    cursor: pointer;
    color: rgb(55 65 81); /* text-gray-700 */
    transition: background-color 0.2s ease;
  }

  :global(.dark) .language-option {
    color: rgb(209 213 219); /* text-gray-300 */
  }

  .language-option:hover {
    background-color: rgb(243 244 246); /* bg-gray-100 */
  }

  :global(.dark) .language-option:hover {
    background-color: rgb(55 65 81); /* bg-gray-700 */
  }

  .language-option.active {
    background-color: rgb(239 246 255); /* bg-blue-50 */
    font-weight: 600;
  }

  :global(.dark) .language-option.active {
    background-color: rgb(30 58 138 / 0.3); /* bg-blue-900/30 */
  }

  @media (max-width: 768px) {
    .language-switcher {
      margin-top: 0;
    }
  }
</style>
