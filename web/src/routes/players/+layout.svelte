<script lang="ts">
  import { page } from '$app/stores';
  import { t } from '$lib/i18n';
  import { cn } from '$lib/utils.js';
  import { buttonVariants } from '$lib/components/ui/button';
  import { useQuery } from 'convex-svelte';
  import { api } from '$lib/../convex/_generated/api';
  let { children } = $props();

  const initialsQuery = useQuery(api.players.listInitials, () => ({}));
  const initials = $derived(initialsQuery.data || []);
  const activeInitial = $derived(($page.params.initial || 'A').toUpperCase());
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
</script>

<h1 class="mb-6 text-4xl font-bold tracking-tight">{$t('players.title')}</h1>

<nav aria-label={$t('players.nav')} class="mb-8 flex flex-wrap items-center gap-2">
  {#each alphabet as letter (letter)}
    {@const enabled = initials.includes(letter)}
    <a
      href={enabled ? `/players/${letter}` : undefined}
      aria-current={letter === activeInitial ? 'page' : undefined}
      aria-disabled={!enabled}
      class={cn(
        buttonVariants({ variant: letter === activeInitial ? 'default' : 'outline', size: 'sm' }),
        'rounded-full',
        !enabled && 'pointer-events-none opacity-40'
      )}>{letter}</a
    >
  {/each}
</nav>

{@render children()}
