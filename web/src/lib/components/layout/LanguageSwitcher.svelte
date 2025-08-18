<script lang="ts">
  import { locale, type Locale } from '$lib/i18n';
  import { onMount } from 'svelte';
  import { invalidateAll } from '$app/navigation';
  import * as Select from '$lib/components/ui/select';
  import { Globe } from 'lucide-svelte';

  let currentLocale: Locale = $state('en');

  // Subscribe to locale changes
  const unsubscribe = locale.subscribe((value) => {
    currentLocale = value;
  });

  // Initialize locale from localStorage
  onMount(() => {
    locale.initialize();
    return unsubscribe;
  });

  async function handleLocaleChange(newValue: string | undefined) {
    if (newValue && newValue !== currentLocale) {
      locale.set(newValue as Locale);
      // Invalidate all load functions to trigger data reload
      await invalidateAll();
    }
  }

  const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'Français' }
  ];

  const selectedLanguage = $derived(languageOptions.find((lang) => lang.value === currentLocale));
</script>

<Select.Root type="single" value={currentLocale} onValueChange={handleLocaleChange}>
  <Select.Trigger class="w-[80px]" aria-label="Select language">
    <div class="flex items-center gap-2">
      <Globe class="h-4 w-4" />
      {#if selectedLanguage}
        <span class="font-medium">{currentLocale.toUpperCase()}</span>
      {/if}
    </div>
  </Select.Trigger>
  <Select.Content>
    {#each languageOptions as lang (lang.value)}
      <Select.Item value={lang.value} label={lang.label}>
        <span>{lang.label}</span>
      </Select.Item>
    {/each}
  </Select.Content>
</Select.Root>
