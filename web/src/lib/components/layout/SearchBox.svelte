<script lang="ts">
  import { goto } from '$app/navigation';
  import { t } from '$lib/i18n';
  import { Button } from '$lib/components/ui/button';
  import * as Dialog from '$lib/components/ui/dialog';
  import * as Command from '$lib/components/ui/command';
  import { Search } from '@lucide/svelte';
  import { onMount } from 'svelte';

  let open = false;
  let searchQuery = '';

  // Quick search suggestions
  const suggestions = [
    { label: 'Events', href: '/events', icon: '📅' },
    { label: 'Games', href: '/games', icon: '🎮' },
    { label: 'Players', href: '/players', icon: '👥' },
    { label: 'Articles', href: '/articles', icon: '📰' },
    { label: 'About', href: '/about/story', icon: 'ℹ️' },
    { label: 'Contact', href: '/contact', icon: '📧' }
  ];

  function handleSearch() {
    if (searchQuery) {
      open = false;
      goto(`/search?input=${encodeURIComponent(searchQuery)}`);
      searchQuery = '';
    }
  }

  function handleSelect(href: string) {
    open = false;
    goto(href);
  }

  // Keyboard shortcut (Ctrl+K or Cmd+K)
  onMount(() => {
    function handleKeydown(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        open = true;
      }
    }

    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  });
</script>

<div>
  <Dialog.Root bind:open>
    <Dialog.Trigger>
      {#snippet child({ props })}
        <Button
          {...props}
          variant="outline"
          class="relative h-9 w-9 p-0 md:h-10 md:w-60 md:justify-start md:px-3 md:py-2"
        >
          <Search class="h-4 w-4 md:mr-2" />
          <span class="hidden md:inline-flex">{$t('common.searchPlaceholder')}</span>
          <kbd
            class="bg-muted pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 md:flex"
          >
            <span class="text-xs">⌘</span>K
          </kbd>
        </Button>
      {/snippet}
    </Dialog.Trigger>
    <Dialog.Content class="overflow-hidden p-0 shadow-lg">
      <Command.Root
        class="[&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5"
      >
        <Command.Input
          placeholder={$t('common.searchPlaceholder')}
          bind:value={searchQuery}
          on:keydown={(e) => {
            if (e.key === 'Enter' && searchQuery) {
              handleSearch();
            }
          }}
        />
        <Command.List class="max-h-[300px] overflow-y-auto">
          {#if searchQuery}
            <Command.Group heading="Search">
              <Command.Item onSelect={handleSearch}>
                <Search class="mr-2 h-4 w-4" />
                Search for "{searchQuery}"
              </Command.Item>
            </Command.Group>
          {/if}

          <Command.Group heading="Quick Links">
            {#each suggestions as item (item.label)}
              <Command.Item onSelect={() => handleSelect(item.href)}>
                <span class="mr-2">{item.icon}</span>
                {item.label}
              </Command.Item>
            {/each}
          </Command.Group>
        </Command.List>
      </Command.Root>
    </Dialog.Content>
  </Dialog.Root>
</div>
