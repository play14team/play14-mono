<script lang="ts">
  import { Badge } from '$lib/components/ui/badge';
  import { MapPin, Calendar, ArrowRight } from 'lucide-svelte';
  import * as Flags from 'svelte-flags';
  import countries from 'i18n-iso-countries';
  import en from 'i18n-iso-countries/langs/en.json';
  import fr from 'i18n-iso-countries/langs/fr.json';
  import { locale, t } from '$lib/i18n';
  import { formatInTimeZone } from 'date-fns-tz';
  import { fr as dateFr } from 'date-fns/locale';
  import ProgressiveImage from '../ProgressiveImage.svelte';
  import { generateSrcSet, getSizes, generateBlurDataURL } from '$lib/utils/image';

  // Register languages for country names
  countries.registerLocale(en);
  countries.registerLocale(fr);

  interface EventData {
    _id: string;
    name?: string;
    slug?: string;
    description?: string;
    defaultImageUrl?: string | null;
    start?: number;
    end?: number;
    timezone?: string;
    status?: 'Announced' | 'Open' | 'Over' | 'Cancelled';
    location?: { name?: string; country?: string } | null;
    registration?: {
      link?: string;
      widgetCode?: string;
    } | null;
  }

  interface Props {
    event: EventData;
  }

  let { event }: Props = $props();

  // Make locale reactive for Svelte 5
  const currentLocale = $derived($locale);

  function getFlagComponent(countryCode: string) {
    // The country field already contains ISO Alpha-2 code (e.g., 'LU', 'FR')
    // Capitalize for flag component name (e.g., 'LU' -> 'Lu')
    const code = countryCode.charAt(0).toUpperCase() + countryCode.slice(1).toLowerCase();
    // @ts-expect-error - Dynamic component access
    return Flags[code] || null;
  }

  function getCountryName(countryCode: string): string {
    // Get the country name from ISO code using current locale
    // Use 'en' as fallback if current locale is not supported
    const lang = currentLocale === 'fr' ? 'fr' : 'en';
    return countries.getName(countryCode, lang) || countryCode;
  }

  function formatEventDate(timestamp: number, timezone?: string): string {
    if (!timezone) {
      // Fallback to local timezone if event timezone is not available
      return new Date(timestamp).toLocaleDateString();
    }

    // Format date in the event's timezone
    const dateFormat = 'dd MMM yyyy';
    const localeObj = currentLocale === 'fr' ? dateFr : undefined;

    return formatInTimeZone(new Date(timestamp), timezone, dateFormat, { locale: localeObj });
  }

  function getStatusVariant(status?: string): 'default' | 'secondary' | 'destructive' | 'outline' {
    switch (status) {
      case 'Open':
        return 'default';
      case 'Announced':
        return 'secondary';
      case 'Over':
        return 'outline';
      case 'Cancelled':
        return 'destructive';
      default:
        return 'secondary';
    }
  }

  function getTranslatedStatus(status?: string): string {
    const statusKey = status?.toLowerCase();
    return $t(`events.status.${statusKey}`) || status || '';
  }
</script>

{#if event}
  <div
    class="bg-card text-card-foreground group overflow-hidden rounded-xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
  >
    {#if event.defaultImageUrl}
      <div class="h-64 w-full overflow-hidden">
        <ProgressiveImage
          src={event.defaultImageUrl}
          alt={event.name}
          className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          srcset={generateSrcSet(event.defaultImageUrl)}
          sizes={getSizes('100vw', '50vw', '33vw')}
          blurDataURL={generateBlurDataURL()}
        />
      </div>
    {/if}
    <div class="flex flex-col p-6">
      <div class="mb-4 flex items-start justify-between gap-2">
        <h3 class="text-2xl font-semibold leading-none tracking-tight">
          <a href="/events/{event.slug}" class="hover:text-primary">
            {event.name}
          </a>
        </h3>
        {#if event.status}
          <Badge variant={getStatusVariant(event.status)} class="shrink-0">
            {getTranslatedStatus(event.status)}
          </Badge>
        {/if}
      </div>
      <div class="mb-4 space-y-2">
        {#if event.location}
          <div class="text-muted-foreground flex items-center gap-2">
            <MapPin class="h-5 w-5" />
            <span class="flex items-center gap-1 text-base">
              {event.location.name},
              {#if event.location.country}
                {@const FlagComponent = getFlagComponent(event.location.country)}
                {#if FlagComponent}
                  <FlagComponent size="20" class="inline-block" />
                {/if}
                {getCountryName(event.location.country)}
              {/if}
            </span>
          </div>
        {/if}
        {#if event.start}
          <div class="text-muted-foreground flex items-center gap-2">
            <Calendar class="h-5 w-5" />
            <span class="text-base">
              {formatEventDate(event.start, event.timezone)}
              {#if event.end && event.end !== event.start}
                - {formatEventDate(event.end, event.timezone)}
              {/if}
            </span>
          </div>
        {/if}
      </div>
      {#if event.registration && (event.registration.link || event.registration.widgetCode)}
        <div class="mt-auto pt-4">
          {#if event.registration.link}
            <a
              href={event.registration.link}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#ff6600] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#ff6600]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6600] focus-visible:ring-offset-2"
            >
              {$t('events.registerNow')}
              <ArrowRight class="h-4 w-4" />
            </a>
          {:else}
            <a
              href="/events/{event.slug}"
              class="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#ff6600] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#ff6600]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6600] focus-visible:ring-offset-2"
            >
              {$t('events.registerNow')}
              <ArrowRight class="h-4 w-4" />
            </a>
          {/if}
        </div>
      {/if}
    </div>
  </div>
{/if}
