<script lang="ts">
  import { useQuery } from 'convex-svelte';
  import { api } from '$lib/../convex/_generated/api';
  import ErrorAlert from '$lib/components/ErrorAlert.svelte';
  import { t } from '$lib/i18n';
  import { get } from 'svelte/store';
  import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext
  } from '$lib/components/ui/carousel';
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { Play, Pause, Linkedin, ExternalLink } from 'lucide-svelte';

  interface Testimonial {
    _id: string;
    content: string;
    author?: {
      name?: string;
      position?: string;
      company?: string;
    } | null;
    authorAvatarUrl?: string | null;
    audioUrl?: string | null;
    url?: string | null;
  }

  // Fetch 20 random testimonials instead of the latest 15
  const query = useQuery(api.testimonials.list, () => ({ limit: 20, random: true }));
  const testimonials = $derived(query.data || ([] as Testimonial[]));
  const isLoading = $derived(query.isLoading);
  const error = $derived(query.error);

  const autoplay = writable(true);
  let intervalId: ReturnType<typeof setInterval> | undefined;
  // Embla instance type is broad, we only call scrollNext(). Use unknown then narrow.
  let emblaApi: { scrollNext: () => void } | undefined;

  function nextSlide() {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }

  function startAutoplay() {
    stopAutoplay();
    let value: boolean | undefined;
    autoplay.subscribe((v) => (value = v))();
    if (value) {
      intervalId = setInterval(nextSlide, 5000);
    }
  }
  function stopAutoplay() {
    if (intervalId) clearInterval(intervalId);
  }

  function handleAudioPlay() {
    autoplay.set(false); // disable autoplay while audio plays
    stopAutoplay();
  }
  function handleAudioEnded() {
    autoplay.set(true); // re-enable
    startAutoplay();
  }

  onMount(() => {
    startAutoplay();
  });

  // Collapse / expand logic for long testimonials
  const COLLAPSE_CHAR_THRESHOLD = 480; // heuristic threshold
  let expanded = $state<Record<string, boolean>>({});
  function isLong(text: string) {
    return text && text.length > COLLAPSE_CHAR_THRESHOLD;
  }
  function toggleExpand(id: string) {
    expanded[id] = !expanded[id];
  }

  // Dynamic center mode tuning: center slides when fewer than a full viewport set
  // Simple carousel options (loop only)
  const emblaLoop = true;
  // Translation helper (subscribe once and reuse inside template)
  let translateFn = $state(get(t));
  t.subscribe((val) => (translateFn = val));
</script>

{#if error}
  <section class="mb-16 pt-12">
    <ErrorAlert {error} title="Failed to load testimonials" />
  </section>
{:else if isLoading}
  <section class="mb-16 pt-12">
    <h2 class="mb-6 text-3xl font-bold">{translateFn('home.testimonials')}</h2>
    <div class="flex gap-4 overflow-hidden">
      {#each Array(3).keys() as i (i)}
        <div class="bg-muted/30 flex-1 animate-pulse rounded-xl border p-6"></div>
      {/each}
    </div>
  </section>
{:else if testimonials.length > 0}
  <section class="mb-16 pt-12" aria-roledescription="carousel">
    <div class="flex items-center justify-between">
      <h2 class="mb-10 text-3xl font-bold text-gray-900 dark:text-gray-100">
        {translateFn('home.testimonials')}
      </h2>
      <div class="text-muted-foreground flex items-center gap-2 text-sm">
        {#if $autoplay}
          <button
            class="bg-background text-foreground hover:bg-accent hover:text-accent-foreground inline-flex h-8 w-8 items-center justify-center rounded-md border shadow-sm transition"
            aria-label="Pause autoplay"
            title="Pause"
            onclick={() => {
              autoplay.set(false);
              stopAutoplay();
            }}
          >
            <Pause class="h-4 w-4" />
          </button>
        {:else}
          <button
            class="bg-background text-foreground hover:bg-accent hover:text-accent-foreground inline-flex h-8 w-8 items-center justify-center rounded-md border shadow-sm transition"
            aria-label="Start autoplay"
            title="Play"
            onclick={() => {
              autoplay.set(true);
              startAutoplay();
            }}
          >
            <Play class="h-4 w-4" />
          </button>
        {/if}
      </div>
    </div>
    <div class="relative">
      <Carousel class="relative px-8" opts={{ loop: emblaLoop }} setApi={(api) => (emblaApi = api)}>
        <CarouselContent class="-ml-4">
          {#each testimonials.filter((t) => t.author) as t (t._id)}
            <CarouselItem data-carousel-item class="pl-4 md:basis-1/2 lg:basis-1/3">
              <div
                class="bg-card text-card-foreground flex h-full flex-col overflow-hidden rounded-xl border p-6 shadow-sm"
              >
                <div class="mb-4 flex items-center gap-4">
                  {#if t.authorAvatarUrl}
                    <img
                      src={t.authorAvatarUrl}
                      alt={t.author?.name}
                      class="h-12 w-12 rounded-full object-cover"
                      loading="lazy"
                    />
                  {:else}
                    <div
                      class="bg-muted flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold"
                    >
                      {(t.author?.name || 'A')[0]}
                    </div>
                  {/if}
                  <div class="min-w-0">
                    <p class="font-semibold leading-tight">{t.author?.name || 'Anonymous'}</p>
                    {#if t.author?.position || t.author?.company}
                      <p class="text-muted-foreground truncate text-sm">
                        {(t.author?.position || '') +
                          (t.author?.position && t.author?.company ? ' • ' : '') +
                          (t.author?.company || '')}
                      </p>
                    {/if}
                  </div>
                </div>
                <div class="relative mb-4">
                  <div
                    class="text-muted-foreground overflow-hidden whitespace-pre-line transition-[max-height] duration-300 ease-in-out"
                    style:max-height={expanded[t._id] || !isLong(t.content) ? '2000px' : '9rem'}
                  >
                    {t.content}
                  </div>
                  {#if isLong(t.content)}
                    <button
                      class="text-primary mt-2 text-sm font-medium underline hover:no-underline"
                      onclick={() => toggleExpand(t._id)}
                      aria-expanded={!!expanded[t._id]}
                      aria-controls={`testimonial-${t._id}`}
                    >
                      {expanded[t._id]
                        ? translateFn('home.showLess')
                        : translateFn('home.showMore')}
                    </button>
                  {/if}
                </div>
                <div class="mt-auto flex flex-col gap-3">
                  {#if t.url}
                    {#if /linkedin\.com/i.test(t.url)}
                      <div class="flex items-center gap-2">
                        <span class="text-muted-foreground text-xs"
                          >{translateFn('home.seeFullPostOn')}</span
                        >
                        <a
                          href={t.url}
                          rel="noopener noreferrer"
                          target="_blank"
                          class="bg-background text-foreground hover:bg-accent hover:text-accent-foreground inline-flex h-9 w-9 items-center justify-center rounded-md border shadow-sm transition"
                          aria-label="View LinkedIn post"
                          title="LinkedIn"
                        >
                          <Linkedin class="h-5 w-5" />
                          <span class="sr-only">LinkedIn link</span>
                        </a>
                      </div>
                    {:else}
                      <div>
                        <a
                          href={t.url}
                          rel="noopener noreferrer"
                          target="_blank"
                          class="bg-background text-foreground hover:bg-accent hover:text-accent-foreground inline-flex h-9 w-9 items-center justify-center rounded-md border shadow-sm transition"
                          aria-label="Open external link"
                          title="External link"
                        >
                          <ExternalLink class="h-5 w-5" />
                          <span class="sr-only">External link</span>
                        </a>
                      </div>
                    {/if}
                  {/if}
                  {#if t.audioUrl}
                    <audio
                      controls
                      preload="none"
                      class="w-full"
                      onplay={handleAudioPlay}
                      onended={handleAudioEnded}
                    >
                      <source src={t.audioUrl} />
                      Your browser does not support the audio element.
                    </audio>
                  {/if}
                </div>
              </div>
            </CarouselItem>
          {/each}
        </CarouselContent>
        <CarouselPrevious
          class="bg-background/80 hover:bg-background -left-4 top-1/2 -translate-y-1/2 shadow-md backdrop-blur"
        />
        <CarouselNext
          class="bg-background/80 hover:bg-background -right-4 top-1/2 -translate-y-1/2 shadow-md backdrop-blur"
        />
      </Carousel>
    </div>
  </section>
{/if}
