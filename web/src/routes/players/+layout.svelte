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
  const enabledInitials = $derived(initials.slice().sort());
  const currentIndex = $derived(enabledInitials.indexOf(activeInitial));
  const prevInitial = $derived(currentIndex > 0 ? enabledInitials[currentIndex - 1] : null);
  const nextInitial = $derived(
    currentIndex !== -1 && currentIndex < enabledInitials.length - 1
      ? enabledInitials[currentIndex + 1]
      : null
  );
</script>

<h1 class="mb-6 text-4xl font-bold tracking-tight">{$t('players.title')}</h1>

<nav aria-label={$t('players.nav')} class="mb-8 flex flex-wrap items-center gap-2">
  <a
    href={prevInitial ? `/players/${prevInitial}` : undefined}
    aria-disabled={!prevInitial}
    class={cn(
      buttonVariants({ variant: 'ghost', size: 'sm' }),
      'rounded-full px-2',
      !prevInitial && 'pointer-events-none opacity-30'
    )}
    aria-label={$t('players.prevInitial')}
    title={$t('players.prevInitial')}>←</a
  >
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
  <a
    href={nextInitial ? `/players/${nextInitial}` : undefined}
    aria-disabled={!nextInitial}
    class={cn(
      buttonVariants({ variant: 'ghost', size: 'sm' }),
      'rounded-full px-2',
      !nextInitial && 'pointer-events-none opacity-30'
    )}
    aria-label={$t('players.nextInitial')}
    title={$t('players.nextInitial')}>→</a
  >
</nav>

{@render children()}
