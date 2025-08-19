<script lang="ts">
  import { page } from '$app/stores';
  import { t } from '$lib/i18n';
  import { cn } from '$lib/utils.js';
  import { buttonVariants } from '$lib/components/ui/button';
  import EventsYearPrefetch from '$lib/components/events/EventsYearPrefetch.svelte';
  let { children } = $props();

  const currentYear = new Date().getFullYear();
  const firstYear = 2014;
  const years = Array.from({ length: currentYear - firstYear + 1 }, (_, i) => currentYear - i);
  const activeYear = $derived($page.params.year ? Number($page.params.year) : currentYear);
  const isUpcoming = $derived(!$page.params.year);
  function nextYear(y: number) {
    return years.find((yr) => yr === y + 1);
  }

  // Navigation logic
  const leftHref = $derived(
    (() => {
      if (isUpcoming) return undefined as string | undefined; // Already at newest (Upcoming)
      if (activeYear === currentYear) return '/events'; // From current year list -> Upcoming
      const newer = nextYear(activeYear);
      if (newer) return `/events/${newer}`; // Step toward current year (even if that is current year)
      return '/events';
    })()
  );
  const leftDisabled = $derived(isUpcoming);

  const rightHref = $derived(
    (() => {
      if (isUpcoming) return `/events/${currentYear}`;
      if (activeYear > firstYear) return `/events/${activeYear - 1}`;
      return undefined as string | undefined;
    })()
  );
  const rightDisabled = $derived(!isUpcoming && activeYear === firstYear);
</script>

<h1 class="mb-6 text-4xl font-bold tracking-tight">{$t('events.title')}</h1>

<nav aria-label={$t('events.yearNav')} class="mb-8 flex flex-wrap items-center gap-2">
  <a
    aria-label="Newer (Upcoming)"
    class={cn(
      buttonVariants({ variant: 'ghost', size: 'icon' }),
      'rounded-full',
      leftDisabled && 'pointer-events-none opacity-40'
    )}
    href={leftDisabled ? undefined : leftHref}>←</a
  >
  <a
    href="/events"
    class={cn(
      buttonVariants({ variant: isUpcoming ? 'default' : 'outline', size: 'sm' }),
      'rounded-full'
    )}
    aria-current={isUpcoming ? 'page' : undefined}>Upcoming</a
  >
  {#each years as y (y)}
    <a
      href={`/events/${y}`}
      class={cn(
        buttonVariants({
          variant: !isUpcoming && y === activeYear ? 'default' : 'outline',
          size: 'sm'
        }),
        'rounded-full'
      )}
      aria-current={!isUpcoming && y === activeYear ? 'page' : undefined}>{y}</a
    >
  {/each}
  <a
    aria-label="Older year"
    class={cn(
      buttonVariants({ variant: 'ghost', size: 'icon' }),
      'rounded-full',
      rightDisabled && 'pointer-events-none opacity-40'
    )}
    href={rightDisabled ? undefined : rightHref}>→</a
  >
</nav>

{@render children()}

<!-- Prefetch adjacent years to reduce perceived latency -->
<EventsYearPrefetch {activeYear} />
