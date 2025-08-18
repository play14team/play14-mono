<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import * as Separator from '$lib/components/ui/separator';
  import { Building, Mail, Linkedin, Youtube, Facebook } from 'lucide-svelte';
  import { t } from '$lib/i18n';

  const socialLinks = [
    {
      url: 'https://www.linkedin.com/groups/7478250',
      icon: Linkedin,
      label: 'LinkedIn'
    },
    {
      url: 'https://www.youtube.com/channel/UCk_bP4BFqSSA4dqUz9cRK8A',
      icon: Youtube,
      label: 'YouTube'
    },
    {
      url: 'https://www.facebook.com/Play14-making-the-world-more-fun-than-fun-315955075134911/',
      icon: Facebook,
      label: 'Facebook'
    }
  ];

  const currentYear = new Date().getFullYear();
</script>

<footer class="bg-background border-t">
  <div class="container mx-auto px-4 py-12">
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      <!-- Logo and Social Links -->
      <div class="flex flex-col items-center md:items-start">
        <a href="/" class="mb-4">
          <img
            src="/logo/play14_white_bg_trans_600x200.png"
            alt="#play14 logo"
            width="300"
            height="100"
            class="h-auto w-48 dark:hidden"
          />
          <img
            src="/logo/play14_black_bg_trans_600x200.png"
            alt="#play14 logo"
            width="300"
            height="100"
            class="hidden h-auto w-48 dark:block"
          />
        </a>
        <p class="text-muted-foreground mb-4 text-center md:text-left">
          {$t('common.footer.playIsTheWay')}
        </p>
        <div class="flex gap-2">
          {#each socialLinks as social (social.url)}
            <a href={social.url} target="_blank" rel="noreferrer" aria-label={social.label}>
              <Button variant="outline" size="icon">
                <svelte:component this={social.icon} class="h-4 w-4" />
              </Button>
            </a>
          {/each}
        </div>
      </div>

      <!-- Explore -->
      <div>
        <h3 class="mb-4 text-lg font-semibold">{$t('common.footer.explore')}</h3>
        <ul class="space-y-2">
          <li>
            <a href="/" class="text-muted-foreground hover:text-primary transition-colors">
              {$t('common.home')}
            </a>
          </li>
          <li>
            <a
              href="/about/story"
              class="text-muted-foreground hover:text-primary transition-colors"
            >
              {$t('common.about')}
            </a>
          </li>
          <li>
            <a href="/contact" class="text-muted-foreground hover:text-primary transition-colors">
              {$t('common.contact')}
            </a>
          </li>
        </ul>
      </div>

      <!-- Resources -->
      <div>
        <h3 class="mb-4 text-lg font-semibold">{$t('common.footer.resources')}</h3>
        <ul class="space-y-2">
          <li>
            <a href="/events" class="text-muted-foreground hover:text-primary transition-colors">
              {$t('common.footer.ourEvents')}
            </a>
          </li>
          <li>
            <a href="/players" class="text-muted-foreground hover:text-primary transition-colors">
              {$t('common.footer.ourPlayers')}
            </a>
          </li>
          <li>
            <a href="/games" class="text-muted-foreground hover:text-primary transition-colors">
              {$t('common.footer.ourGames')}
            </a>
          </li>
          <li>
            <a href="/articles" class="text-muted-foreground hover:text-primary transition-colors">
              {$t('common.footer.ourArticles')}
            </a>
          </li>
        </ul>
      </div>

      <!-- Address -->
      <div>
        <h3 class="mb-4 text-lg font-semibold">{$t('common.footer.address')}</h3>
        <div class="text-muted-foreground space-y-3">
          <div class="flex items-start gap-3">
            <Building class="mt-1 h-4 w-4 flex-shrink-0 text-orange-500" />
            <div>
              <strong class="text-foreground">#play14 a.s.b.l.</strong><br />
              46 boulevard Jules Salentiny<br />
              L-2511 Luxembourg<br />
              LUXEMBOURG
            </div>
          </div>
          <div class="flex items-center gap-3">
            <Mail class="h-4 w-4 flex-shrink-0 text-orange-500" />
            <a href="mailto:team@play14.org" class="hover:text-primary transition-colors">
              team@play14.org
            </a>
          </div>
        </div>
      </div>
    </div>

    <Separator.Root class="my-8" />

    <!-- Bottom Bar -->
    <div class="flex flex-col items-center justify-between gap-4 md:flex-row">
      <p class="text-muted-foreground text-center text-sm md:text-left">
        © 2014 - {currentYear}
        <strong class="font-semibold">#play14</strong>
        {$t('common.footer.developedBy')}
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
          class="text-muted-foreground hover:text-primary text-sm transition-colors"
        >
          {$t('common.footer.privacyPolicy')}
        </a>
        <a href="/terms" class="text-muted-foreground hover:text-primary text-sm transition-colors">
          {$t('common.footer.termsOfService')}
        </a>
      </div>
    </div>
  </div>
</footer>
