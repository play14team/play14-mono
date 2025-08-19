<script lang="ts">
  import PlayerCard from '$lib/components/players/PlayerCard.svelte';
  import ErrorAlert from '$lib/components/ErrorAlert.svelte';
  import { t } from '$lib/i18n';
  import { useQuery } from 'convex-svelte';
  import { api } from '$lib/../convex/_generated/api';
  import { Skeleton } from '$lib/components/ui/skeleton';

  const props = $props<{ initial: string }>();
  const initial = $derived(props.initial.toUpperCase());

  const query = useQuery(api.players.listByInitial, () => ({ initial }));
  const players = $derived(query.data || []);
  const isLoading = $derived(query.isLoading);
  const error = $derived(query.error);

  const countsCache = $state<Record<string, number>>({});
  $effect(() => {
    if (query.data) countsCache[initial] = query.data.length;
  });
  const skeletonCount = $derived(countsCache[initial] ? Math.max(countsCache[initial], 1) : 8);
  let lastPlayers = $state<typeof players>([]);
  $effect(() => {
    if (!isLoading && players.length) {
      lastPlayers = players;
    }
  });
</script>

{#if error}
  <ErrorAlert {error} title="Failed to load players" />
{:else}
  <div class="crossfade-wrapper" aria-live="polite">
    <div class="transition-opacity duration-300">
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {#each isLoading && lastPlayers.length ? lastPlayers : players as player (player._id)}
          <PlayerCard {player} />
        {/each}
      </div>
    </div>
    {#if isLoading}
      <div class="skeleton-overlay" aria-busy="true">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {#each Array.from({ length: skeletonCount }, (_, i) => i) as i (i)}
            <div class="bg-card animate-in overflow-hidden rounded-xl border p-0 shadow-sm">
              <div class="flex items-center gap-4 p-6">
                <div class="bg-muted h-20 w-20 shrink-0 overflow-hidden rounded-full">
                  <Skeleton class="h-full w-full rounded-full" />
                </div>
                <div class="flex flex-1 flex-col gap-3">
                  <Skeleton class="h-5 w-3/4" />
                  <Skeleton class="h-4 w-1/2" />
                </div>
              </div>
              <div class="border-t p-4">
                <div class="flex gap-3">
                  {#each Array.from({ length: 4 }, (_, j) => j) as j (j)}
                    <Skeleton class="h-5 w-5 rounded-full" />
                  {/each}
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    {:else if players.length === 0}
      <div class="text-muted-foreground py-12 text-center">{$t('players.empty', { initial })}</div>
    {/if}
  </div>
{/if}

<style>
  .crossfade-wrapper {
    position: relative;
  }
  .skeleton-overlay {
    position: absolute;
    inset: 0;
    animation: fadeSkeleton 0.25s ease;
  }
  @keyframes fadeSkeleton {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
