<script lang="ts">
  const socialLinks = [
    {
      url: 'https://www.linkedin.com/groups/7478250',
      icon: 'linkedin'
    },
    {
      url: 'https://www.youtube.com/channel/UCk_bP4BFqSSA4dqUz9cRK8A',
      icon: 'youtube'
    },
    {
      url: 'https://www.facebook.com/Play14-making-the-world-more-fun-than-fun-315955075134911/',
      icon: 'facebook'
    }
  ];

  const currentYear = new Date().getFullYear();
</script>

<footer class="bg-gray-50 py-16 dark:bg-gray-800">
  <div class="container mx-auto px-4">
    <div class="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      <!-- Logo and Social Links -->
      <div>
        <div class="flex flex-col items-center">
          <a href="/" class="mb-4">
            <img
              src="/logo/play14_white_bg_trans_600x200.png"
              alt="#play14 logo"
              width="300"
              height="100"
              class="h-auto w-64 dark:hidden"
            />
            <img
              src="/logo/play14_black_bg_trans_600x200.png"
              alt="#play14 logo"
              width="300"
              height="100"
              class="hidden h-auto w-64 dark:block"
            />
          </a>
          <p class="mb-4 text-gray-600 dark:text-gray-400">play is the way</p>
          <div class="flex gap-2">
            {#each socialLinks as action (action.url)}
              <a
                href={action.url}
                class="inline-flex h-10 w-10 items-center justify-center rounded bg-gray-300 text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:bg-gray-700 hover:text-white dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-400 dark:hover:text-gray-900"
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit our ${action.icon} page`}
              >
                <i class={`bx bxl-${action.icon} text-lg`}></i>
              </a>
            {/each}
          </div>
        </div>
      </div>

      <!-- Explore -->
      <div>
        <h3 class="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">Explore</h3>
        <ul class="space-y-2">
          <li>
            <a
              href="/"
              class="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about/story"
              class="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/contact"
              class="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      <!-- Resources -->
      <div>
        <h3 class="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">Resources</h3>
        <ul class="space-y-2">
          <li>
            <a
              href="/events"
              class="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            >
              Our events
            </a>
          </li>
          <li>
            <a
              href="/players"
              class="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            >
              Our players
            </a>
          </li>
          <li>
            <a
              href="/games"
              class="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            >
              Our games
            </a>
          </li>
          <li>
            <a
              href="/articles"
              class="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            >
              Our articles
            </a>
          </li>
        </ul>
      </div>

      <!-- Address -->
      <div>
        <h3 class="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">Address</h3>
        <div class="space-y-3 text-gray-600 dark:text-gray-400">
          <div class="flex items-start">
            <i class="bx bx-building mr-3 mt-1 text-orange-500"></i>
            <div>
              <strong>#play14 a.s.b.l.</strong><br />
              46 boulevard Jules Salentiny<br />
              L-2511 Luxembourg<br />
              LUXEMBOURG
            </div>
          </div>
          <div class="flex items-center">
            <i class="bx bx-envelope mr-3 text-orange-500"></i>
            <a
              href="mailto:team@play14.org"
              class="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            >
              team@play14.org
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-gray-200 pt-8 dark:border-gray-700">
      <div class="flex flex-col items-center justify-between md:flex-row">
        <p class="mb-4 text-gray-600 md:mb-0 dark:text-gray-400">
          © 2014 - {currentYear} <strong>#play14</strong> developed by
          <a
            href="https://www.linkedin.com/in/c%C3%A9dric-pontet/"
            target="_blank"
            rel="noreferrer"
            class="text-orange-500 transition-colors hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300"
          >
            Cédric Pontet
          </a>
        </p>
        <div class="flex gap-6">
          <a
            href="/privacy"
            class="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            class="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
