<script lang="ts">
  import { theme } from '$lib/stores/theme';
  import { onMount } from 'svelte';
  import { Button } from '$lib/components/ui/button';
  import { Sun, Moon } from 'lucide-svelte';

  let currentTheme: 'light' | 'dark' = 'light';

  // Subscribe to theme changes
  const unsubscribe = theme.subscribe((value) => {
    currentTheme = value;
  });

  onMount(() => {
    theme.initialize();
    return unsubscribe;
  });

  function toggleTheme() {
    theme.set(currentTheme === 'light' ? 'dark' : 'light');
  }
</script>

<Button variant="outline" size="icon" onclick={toggleTheme} aria-label="Toggle theme">
  <Sun
    class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
  />
  <Moon
    class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
  />
  <span class="sr-only">Toggle theme</span>
</Button>
