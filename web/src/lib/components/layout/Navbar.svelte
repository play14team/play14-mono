<script lang="ts">
  import { onMount } from 'svelte';
  import SearchBox from './SearchBox.svelte';
  import LanguageSwitcher from './LanguageSwitcher.svelte';
  import ThemeToggle from './ThemeToggle.svelte';
  import { t } from '$lib/i18n';

  let collapsed = true;
  let isSticky = false;

  function toggleNavbar() {
    collapsed = !collapsed;
  }

  function closeNavbar() {
    collapsed = true;
  }

  onMount(() => {
    const handleScroll = () => {
      isSticky = window.scrollY > 170;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  $: classOne = collapsed ? 'navbar-collapse' : 'navbar-collapse show';
  $: classTwo = collapsed
    ? 'navbar-toggler navbar-toggler-right collapsed'
    : 'navbar-toggler navbar-toggler-right';
</script>

<div id="navbar" class="navbar-area bg-gray-50 dark:bg-gray-900 {isSticky ? 'is-sticky' : ''}">
  <div class="tarn-nav">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a href="/" on:click={closeNavbar} class="navbar-brand">
          <img
            src="/logo/play14_white_bg_trans_600x200.png"
            alt="logo"
            height="60"
            width="180"
            style="height: auto;"
            class="dark:hidden"
          />
          <img
            src="/logo/play14_black_bg_trans_600x200.png"
            alt="logo"
            height="60"
            width="180"
            style="height: auto;"
            class="hidden dark:block"
          />
        </a>

        <button
          on:click={toggleNavbar}
          class={classTwo}
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={!collapsed}
          aria-label="Toggle navigation"
        >
          <span class="icon-bar top-bar"></span>
          <span class="icon-bar middle-bar"></span>
          <span class="icon-bar bottom-bar"></span>
        </button>

        <div class={classOne} id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="/" class="nav-link">{$t('common.home')}</a>
            </li>

            <li class="nav-item">
              <a href="/events" class="nav-link">
                {$t('common.events')} <i class="bx bx-chevron-down"></i>
              </a>

              <ul class="dropdown-menu">
                <li class="nav-item">
                  <a href="/events" on:click={closeNavbar} class="nav-link">{$t('common.events')}</a
                  >
                </li>
                <li class="nav-item">
                  <a href="/events/calendar" on:click={closeNavbar} class="nav-link"
                    >{$t('events.calendar')}</a
                  >
                </li>
                <li class="nav-item">
                  <a href="/events/map" on:click={closeNavbar} class="nav-link"
                    >{$t('events.map')}</a
                  >
                </li>
                <li class="nav-item">
                  <a href="/events/hosting" on:click={closeNavbar} class="nav-link"
                    >{$t('events.hosting')}</a
                  >
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <a href="/events" class="nav-link">
                {$t('common.community')} <i class="bx bx-chevron-down"></i>
              </a>

              <ul class="dropdown-menu">
                <li class="nav-item">
                  <a href="/players" on:click={closeNavbar} class="nav-link"
                    >{$t('community.players')}</a
                  >
                </li>
                <li class="nav-item">
                  <a href="/games" on:click={closeNavbar} class="nav-link"
                    >{$t('community.games')}</a
                  >
                </li>
                <li class="nav-item">
                  <a href="/articles" on:click={closeNavbar} class="nav-link"
                    >{$t('community.articles')}</a
                  >
                </li>
                <li class="nav-item">
                  <a href="/events/testimonials" on:click={closeNavbar} class="nav-link"
                    >{$t('community.testimonials')}</a
                  >
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <a href="/about" class="nav-link" on:click|preventDefault>
                {$t('common.about')} <i class="bx bx-chevron-down"></i>
              </a>

              <ul class="dropdown-menu">
                <li class="nav-item">
                  <a href="/about/story" on:click={closeNavbar} class="nav-link"
                    >{$t('about.ourStory')}</a
                  >
                </li>
                <li class="nav-item">
                  <a href="/about/values" on:click={closeNavbar} class="nav-link"
                    >{$t('about.ourValues')}</a
                  >
                </li>
                <li class="nav-item">
                  <a href="/about/format" on:click={closeNavbar} class="nav-link"
                    >{$t('about.ourFormat')}</a
                  >
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <a href="/contact" class="nav-link">{$t('common.contact')}</a>
            </li>
          </ul>

          <div class="navbar-utilities d-flex align-items-center">
            <SearchBox />
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </div>
  </div>
</div>

<style>
  /* Navigation styles will be imported from the main stylesheet */
  .navbar-area {
    position: relative;
    z-index: 9999;
    transition: all 0.3s ease;
  }

  .navbar-area.is-sticky {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.06);
    animation: fadeInDown 0.3s;
  }

  :global(.dark) .navbar-area.is-sticky {
    box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.3);
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translate3d(0, -20px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
</style>
