<script lang="ts">
  import { locale, locales, type Locale } from '$lib/i18n';
  import { onMount } from 'svelte';

  let currentLocale: Locale = 'en';

  // Subscribe to locale changes
  locale.subscribe((value) => {
    currentLocale = value;
  });

  // Initialize locale from localStorage
  onMount(() => {
    locale.initialize();
  });

  function changeLocale(newLocale: Locale) {
    locale.set(newLocale);
  }
</script>

<div class="language-switcher">
  <button class="language-button" aria-label="Change language" aria-haspopup="true">
    <i class="bx bx-globe"></i>
    <span class="language-code">{currentLocale.toUpperCase()}</span>
  </button>

  <div class="language-dropdown">
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
    margin-left: 1rem;
  }

  .language-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: none;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .language-button:hover {
    border-color: #0056b3;
  }

  .language-code {
    font-weight: 600;
    font-size: 0.875rem;
  }

  .language-dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 0.5rem;
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: none;
    min-width: 150px;
  }

  .language-switcher:hover .language-dropdown,
  .language-switcher:focus-within .language-dropdown {
    display: block;
  }

  .language-option {
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    background: none;
    border: none;
    text-align: left;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .language-option:hover {
    background-color: #f5f5f5;
  }

  .language-option.active {
    background-color: #e3f2fd;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    .language-switcher {
      margin-left: 0;
      margin-top: 1rem;
    }
  }
</style>
