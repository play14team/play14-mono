<script lang="ts">
  import { onMount } from 'svelte';
  import SearchBox from './SearchBox.svelte';
  import LanguageSwitcher from './LanguageSwitcher.svelte';
  import ThemeToggle from './ThemeToggle.svelte';
  import { t } from '$lib/i18n';
  import * as Sheet from '$lib/components/ui/sheet';
  import * as NavigationMenu from '$lib/components/ui/navigation-menu';
  import { Button } from '$lib/components/ui/button';
  import { Menu, ChevronDown, Home, Calendar, Users, Info, Mail } from '@lucide/svelte';
  import { cn } from '$lib/utils';

  let isOpen = false;
  let isSticky = false;

  function closeSheet() {
    isOpen = false;
  }

  onMount(() => {
    const handleScroll = () => {
      isSticky = window.scrollY > 170;
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const navItems = [
    {
      label: 'common.home',
      href: '/',
      icon: Home
    },
    {
      label: 'common.events',
      icon: Calendar,
      children: [
        { label: 'common.events', href: '/events' },
        { label: 'events.calendar', href: '/events/calendar' },
        { label: 'events.map', href: '/events/map' },
        { label: 'events.hosting', href: '/events/hosting' }
      ]
    },
    {
      label: 'common.community',
      icon: Users,
      children: [
        { label: 'community.players', href: '/players' },
        { label: 'community.games', href: '/games' },
        { label: 'community.articles', href: '/articles' },
        { label: 'community.testimonials', href: '/events/testimonials' }
      ]
    },
    {
      label: 'common.about',
      icon: Info,
      children: [
        { label: 'about.ourStory', href: '/about/story' },
        { label: 'about.ourValues', href: '/about/values' },
        { label: 'about.ourFormat', href: '/about/format' }
      ]
    },
    {
      label: 'common.contact',
      href: '/contact',
      icon: Mail
    }
  ];
</script>

<header
  class={cn(
    'bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur',
    isSticky && 'animate-in fade-in slide-in-from-top-5 duration-300'
  )}
>
  <div class="container mx-auto px-4">
    <div class="flex h-16 items-center justify-between">
      <!-- Logo -->
      <a href="/" class="flex items-center">
        <img
          src="/logo/play14_white_bg_trans_600x200.png"
          alt="#play14 logo"
          height="40"
          width="120"
          class="h-10 w-auto dark:hidden"
        />
        <img
          src="/logo/play14_black_bg_trans_600x200.png"
          alt="#play14 logo"
          height="40"
          width="120"
          class="hidden h-10 w-auto dark:block"
        />
      </a>

      <!-- Desktop Navigation -->
      <NavigationMenu.Root class="hidden md:flex">
        <NavigationMenu.List>
          {#each navItems as item (item.label)}
            {#if item.children}
              <NavigationMenu.Item>
                <NavigationMenu.Trigger class="group">
                  <span class="flex items-center gap-1">
                    <svelte:component this={item.icon} class="h-4 w-4" />
                    {$t(item.label)}
                    <ChevronDown
                      class="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                      aria-hidden="true"
                    />
                  </span>
                </NavigationMenu.Trigger>
                <NavigationMenu.Content>
                  <ul class="grid w-[200px] gap-3 p-4">
                    {#each item.children as child (child.label)}
                      <li>
                        <NavigationMenu.Link
                          href={child.href}
                          class="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors"
                        >
                          <div class="text-sm font-medium leading-none">{$t(child.label)}</div>
                        </NavigationMenu.Link>
                      </li>
                    {/each}
                  </ul>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            {:else}
              <NavigationMenu.Item>
                <NavigationMenu.Link
                  href={item.href}
                  class="bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  <svelte:component this={item.icon} class="mr-2 h-4 w-4" />
                  {$t(item.label)}
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            {/if}
          {/each}
        </NavigationMenu.List>
      </NavigationMenu.Root>

      <!-- Right Side Actions -->
      <div class="flex items-center gap-2">
        <div class="hidden md:flex md:items-center md:gap-2">
          <SearchBox />
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        <!-- Mobile Menu Button -->
        <Sheet.Root bind:open={isOpen}>
          <Sheet.Trigger>
            {#snippet child({ props })}
              <Button
                {...props}
                variant="ghost"
                size="icon"
                class="md:hidden"
                aria-label="Toggle menu"
              >
                <Menu class="h-5 w-5" />
              </Button>
            {/snippet}
          </Sheet.Trigger>
          <Sheet.Content side="right" class="w-[300px] sm:w-[400px]">
            <Sheet.Header>
              <Sheet.Title>Menu</Sheet.Title>
            </Sheet.Header>
            <nav class="mt-6 flex flex-col gap-4">
              {#each navItems as item (item.label)}
                {#if item.children}
                  <div class="space-y-2">
                    <h3 class="flex items-center gap-2 font-semibold">
                      <svelte:component this={item.icon} class="h-4 w-4" />
                      {$t(item.label)}
                    </h3>
                    <div class="ml-6 space-y-1">
                      {#each item.children as child (child.label)}
                        <a
                          href={child.href}
                          on:click={closeSheet}
                          class="hover:bg-accent hover:text-accent-foreground block rounded-md px-3 py-2 text-sm"
                        >
                          {$t(child.label)}
                        </a>
                      {/each}
                    </div>
                  </div>
                {:else}
                  <a
                    href={item.href}
                    on:click={closeSheet}
                    class="hover:bg-accent hover:text-accent-foreground flex items-center gap-2 rounded-md px-3 py-2 font-medium"
                  >
                    <svelte:component this={item.icon} class="h-4 w-4" />
                    {$t(item.label)}
                  </a>
                {/if}
              {/each}

              <div class="mt-6 space-y-4 border-t pt-6">
                <SearchBox />
                <div class="flex gap-2">
                  <LanguageSwitcher />
                  <ThemeToggle />
                </div>
              </div>
            </nav>
          </Sheet.Content>
        </Sheet.Root>
      </div>
    </div>
  </div>
</header>
