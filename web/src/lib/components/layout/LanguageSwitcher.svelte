<script lang="ts">
  import { locale, type Locale } from '$lib/i18n';
  import { onMount } from 'svelte';
  import { invalidateAll } from '$app/navigation';
  import * as Select from '$lib/components/ui/select';
  import { Globe } from '@lucide/svelte';

  let currentLocale: Locale = 'en';

  // Subscribe to locale changes
  locale.subscribe((value) => {
    currentLocale = value;
  });

  // Initialize locale from localStorage
  onMount(() => {
    locale.initialize();
  });

  async function changeLocale(value: string | undefined) {
    if (value) {
      locale.set(value as Locale);
      // Invalidate all load functions to trigger data reload
      await invalidateAll();
    }
  }

  const languageOptions = [
    { value: 'en', label: 'English', flag: '🇬🇧' },
    { value: 'fr', label: 'Français', flag: '🇫🇷' }
  ];

  $: selectedLanguage = languageOptions.find((lang) => lang.value === currentLocale);
</script>

<Select.Root value={currentLocale} onValueChange={changeLocale}>
  <Select.Trigger class="w-[140px]" aria-label="Select language">
    <div class="flex items-center gap-2">
      <Globe class="h-4 w-4" />
      {#if selectedLanguage}
        <span>{selectedLanguage.flag}</span>
        <span class="font-medium">{currentLocale.toUpperCase()}</span>
      {/if}
    </div>
  </Select.Trigger>
  <Select.Content>
    {#each languageOptions as lang (lang.value)}
      <Select.Item value={lang.value}>
        <div class="flex items-center gap-2">
          <span>{lang.flag}</span>
          <span>{lang.label}</span>
        </div>
      </Select.Item>
    {/each}
  </Select.Content>
</Select.Root>
