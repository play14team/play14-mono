<script lang="ts">
  import { theme } from '$lib/stores/theme';
  import { onMount } from 'svelte';
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
  import { Button } from '$lib/components/ui/button';
  import { Sun, Moon, Monitor } from '@lucide/svelte';

  onMount(() => {
    theme.initialize();
  });

  const themeOptions = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'system', label: 'System', icon: Monitor }
  ] as const;

  function setTheme(value: 'light' | 'dark' | 'system') {
    if (value === 'system') {
      // For system theme, we'll use the user's OS preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      theme.set(prefersDark ? 'dark' : 'light');
    } else {
      theme.set(value);
    }
  }
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    {#snippet child({ props })}
      <Button {...props} variant="outline" size="icon">
        <Sun
          class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />
        <Moon
          class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
        <span class="sr-only">Toggle theme</span>
      </Button>
    {/snippet}
  </DropdownMenu.Trigger>
  <DropdownMenu.Content align="end">
    {#each themeOptions as option (option.value)}
      <DropdownMenu.Item onclick={() => setTheme(option.value)}>
        <svelte:component this={option.icon} class="mr-2 h-4 w-4" />
        <span>{option.label}</span>
      </DropdownMenu.Item>
    {/each}
  </DropdownMenu.Content>
</DropdownMenu.Root>
