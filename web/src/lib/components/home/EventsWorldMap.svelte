<script lang="ts">
  import { useQuery } from 'convex-svelte';
  import { api } from '$lib/../convex/_generated/api';
  import World from './World.svelte';
  import countries from 'i18n-iso-countries';
  import en from 'i18n-iso-countries/langs/en.json';
  import { t } from '$lib/i18n';

  // Register English locale for country names
  countries.registerLocale(en);

  interface Props {
    interactive?: boolean;
    onCountryClick?: (countryCode: string) => void;
  }

  let { interactive = true, onCountryClick }: Props = $props();

  // Query for countries with events
  const countriesWithEvents = useQuery(api.events.getCountriesWithEvents, () => ({}));

  // Query for detailed event information grouped by country
  const eventsGroupedByCountry = useQuery(api.events.getEventsGroupedByCountry, () => ({}));

  // Derived state for selected countries
  const selectedCountries = $derived(
    (countriesWithEvents.data ?? []).filter((c): c is string => c !== undefined)
  );

  // Derived state for events data
  const eventsByCountry = $derived(eventsGroupedByCountry.data ?? {});

  // State for hovered country
  let hoveredCountry = $state<string | null>(null);
  let tooltipX = $state(0);
  let tooltipY = $state(0);

  // Format date for display
  function formatDate(timestamp: number): string {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  // Get country name from ISO code using i18n-iso-countries
  function getCountryName(code: string): string {
    return countries.getName(code, 'en') || code.toUpperCase();
  }

  // Handle country click
  function handleCountryClick(countryCode: string) {
    if (!interactive) return;

    const hasEvents = selectedCountries.includes(countryCode.toUpperCase());

    if (hasEvents) {
      console.log(`Country ${countryCode} has #play14 events`);
      onCountryClick?.(countryCode);
    } else {
      console.log(`Country ${countryCode} has no #play14 events`);
    }
  }

  // Handle mouse enter on country
  function handleCountryMouseEnter(countryCode: string) {
    const hasEvents = selectedCountries.includes(countryCode.toUpperCase());
    if (hasEvents) {
      hoveredCountry = countryCode.toUpperCase();
    }
  }

  // Handle mouse leave on country
  function handleCountryMouseLeave() {
    hoveredCountry = null;
  }

  // Handle mouse move for tooltip positioning
  function handleMouseMove(event: MouseEvent) {
    tooltipX = event.clientX;
    tooltipY = event.clientY;
  }
</script>

<section class="events-world-map-wrapper mb-40 pb-8 pt-24">
  <h2 id="eventsWorldMapTitle" class="mb-6 text-3xl font-bold text-gray-900 dark:text-gray-100">
    {$t('home.eventsMapHeading')}
  </h2>
  <div
    class="events-world-map"
    role="region"
    aria-labelledby="eventsWorldMapTitle"
    aria-label="World map showing countries with #play14 events"
    onmousemove={handleMouseMove}
  >
    {#if countriesWithEvents.error || eventsGroupedByCountry.error}
      <div class="error-message">Failed to load event locations. Please try again later.</div>
    {:else if countriesWithEvents.isLoading || eventsGroupedByCountry.isLoading}
      <div class="loading-message">Loading event locations...</div>
    {:else}
      <div class="map-wrapper">
        <World
          selected={selectedCountries}
          onclick={interactive ? handleCountryClick : undefined}
          onmouseenter={handleCountryMouseEnter}
          onmouseleave={handleCountryMouseLeave}
        />

        {#if hoveredCountry && eventsByCountry[hoveredCountry]}
          <div class="tooltip-container" style="left: {tooltipX + 10}px; top: {tooltipY - 10}px;">
            <div class="country-events">
              <h3 class="country-name">{getCountryName(hoveredCountry)}</h3>
              <div class="events-count">
                {eventsByCountry[hoveredCountry].length} event{eventsByCountry[hoveredCountry]
                  .length !== 1
                  ? 's'
                  : ''}
              </div>

              <div class="events-list">
                {#each eventsByCountry[hoveredCountry].slice(0, 5) as event (event.slug)}
                  <div class="event-item">
                    <div class="event-name">{event.name}</div>
                    <div class="event-details">
                      <span class="event-location">{event.locationName}</span>
                      <span class="event-date">{formatDate(event.start)}</span>
                    </div>
                    <span class="event-status status-{event.status.toLowerCase()}"
                      >{event.status}</span
                    >
                  </div>
                {/each}

                {#if eventsByCountry[hoveredCountry].length > 5}
                  <div class="more-events">
                    +{eventsByCountry[hoveredCountry].length - 5} more event{eventsByCountry[
                      hoveredCountry
                    ].length -
                      5 !==
                    1
                      ? 's'
                      : ''}
                  </div>
                {/if}
              </div>
            </div>
          </div>
        {/if}
      </div>
    {/if}
  </div>

  <div class="map-legend">
    <span class="legend-item">
      <span class="legend-colors-group" aria-hidden="true">
        <span class="legend-color swatch-blue"></span>
        <span class="legend-color swatch-green"></span>
        <span class="legend-color swatch-yellow"></span>
        <span class="legend-color swatch-orange"></span>
        <span class="legend-color swatch-red"></span>
      </span>
      {$t('home.eventsMapLegend')}
    </span>
  </div>
</section>

<style>
  .events-world-map-wrapper {
    position: relative;
    width: 100%;
  }

  .events-world-map {
    position: relative;
    width: 100%;
    padding: 1rem 0 0; /* reduce inner padding now wrapper handles */
  }

  .map-wrapper {
    position: relative;
  }

  .error-message,
  .loading-message {
    text-align: center;
    padding: 2rem;
    color: var(--muted-foreground);
  }

  .error-message {
    color: var(--destructive);
  }

  .map-legend {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .legend-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    color: var(--muted-foreground);
  }

  .legend-color {
    width: 1rem;
    height: 1rem;
    border-radius: 0.125rem;
    background-color: #ececec;
    border: 1px solid var(--border);
  }

  .legend-color.selected {
    background-color: var(--play14-blue);
    border-color: var(--play14-blue-dark);
  }

  .legend-colors-group {
    display: inline-flex;
    gap: 2px;
  }
  .legend-color.swatch-blue {
    background-color: var(--play14-blue);
    border-color: var(--play14-blue-dark);
  }
  .legend-color.swatch-green {
    background-color: var(--play14-green);
    border-color: var(--play14-green-dark);
  }
  .legend-color.swatch-yellow {
    background-color: var(--play14-yellow);
    border-color: var(--play14-yellow-dark);
  }
  .legend-color.swatch-orange {
    background-color: var(--play14-orange);
    border-color: var(--play14-orange-dark);
  }
  .legend-color.swatch-red {
    background-color: var(--play14-red);
    border-color: var(--play14-red-dark);
  }

  /* Tooltip styles */
  .tooltip-container {
    position: fixed;
    z-index: 1000;
    pointer-events: none;
    background: var(--popover);
    border: 1px solid var(--border);
    border-radius: 0.5rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    padding: 0.75rem;
    max-width: 300px;
    animation: fadeIn 0.2s ease-in-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .country-events {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .country-name {
    font-size: 1.125rem;
    font-weight: 600;
    margin: 0;
    color: var(--foreground);
  }

  .events-count {
    font-size: 0.875rem;
    color: var(--muted-foreground);
  }

  .events-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .event-item {
    padding: 0.5rem;
    background: var(--muted);
    border-radius: 0.375rem;
    position: relative;
  }

  .event-name {
    font-weight: 500;
    margin-bottom: 0.25rem;
    color: var(--foreground);
    font-size: 0.875rem;
  }

  .event-details {
    display: flex;
    gap: 0.5rem;
    font-size: 0.75rem;
    color: var(--muted-foreground);
  }

  .event-location::after {
    content: '•';
    margin-left: 0.5rem;
  }

  .event-status {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    font-size: 0.625rem;
    padding: 0.125rem 0.375rem;
    border-radius: 0.25rem;
    text-transform: uppercase;
    font-weight: 600;
  }

  .status-announced {
    background: var(--play14-yellow);
    color: var(--play14-gray);
  }

  .status-open {
    background: var(--play14-green);
    color: white;
  }

  .status-over {
    background: var(--play14-gray);
    color: white;
  }

  .more-events {
    text-align: center;
    font-size: 0.75rem;
    color: var(--muted-foreground);
    font-style: italic;
    padding-top: 0.25rem;
  }

  /* Highlight selected countries in the world map */
  :global(.events-world-map svg path) {
    transition:
      fill 0.3s ease,
      stroke 0.3s ease;
    cursor: pointer;
  }

  :global(.events-world-map svg path:hover) {
    opacity: 0.8;
    stroke-width: 0.5;
  }

  @media (max-width: 640px) {
    .events-world-map-wrapper {
      padding-top: 5rem;
    }
    .events-world-map {
      padding: 0.5rem 0 0;
    }

    .map-legend {
      font-size: 0.75rem;
    }

    .tooltip-container {
      display: none;
    }
  }
</style>
