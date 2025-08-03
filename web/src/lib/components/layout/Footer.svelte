<script lang="ts">
  import { t } from '$lib/i18n';
  const socialLinks = [
    {
      url: 'https://www.linkedin.com/groups/7478250',
      icon: 'linkedin'
    },
    {
      url: 'https://twitter.com/play14team',
      icon: 'twitter'
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

<footer class="footer-area bg-gray-50 dark:bg-gray-800">
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-sm-6">
        <div class="single-footer-widget">
          <a href="/" class="logo">
            <img
              src="/logo/play14_white_bg_full.svg"
              alt="logo"
              width="600"
              height="200"
              style="max-width: 100%; height: auto;"
              class="dark:hidden"
            />
            <img
              src="/logo/play14_black_bg_full.svg"
              alt="logo"
              width="600"
              height="200"
              style="max-width: 100%; height: auto;"
              class="hidden dark:block"
            />
          </a>
          <p class="text-gray-600 dark:text-gray-400">{$t('common.footer.playIsTheWay')}</p>

          <ul class="social-link">
            {#each socialLinks as action (action.url)}
              <li>
                <a
                  href={action.url}
                  class="d-block bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-blue-600"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit our ${action.icon} page`}
                >
                  <i class={`bx bxl-${action.icon}`}></i>
                </a>
              </li>
            {/each}
          </ul>
        </div>
      </div>

      <div class="col-lg-2 col-sm-6">
        <div class="single-footer-widget pl-5">
          <h3 class="text-gray-900 dark:text-gray-100">{$t('common.footer.explore')}</h3>

          <ul class="footer-links-list">
            <li>
              <a
                href="/"
                class="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                >{$t('common.home')}</a
              >
            </li>
            <li>
              <a
                href="/about/story"
                class="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                >{$t('common.about')}</a
              >
            </li>
            <li>
              <a
                href="/contact"
                class="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                >{$t('common.contact')}</a
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="col-lg-2 col-sm-6">
        <div class="single-footer-widget">
          <h3 class="text-gray-900 dark:text-gray-100">{$t('common.footer.resources')}</h3>

          <ul class="footer-links-list">
            <li>
              <a
                href="/events"
                class="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                >{$t('common.footer.ourEvents')}</a
              >
            </li>
            <li>
              <a
                href="/players"
                class="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                >{$t('common.footer.ourPlayers')}</a
              >
            </li>
            <li>
              <a
                href="/games"
                class="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                >{$t('common.footer.ourGames')}</a
              >
            </li>
            <li>
              <a
                href="/articles"
                class="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                >{$t('common.footer.ourArticles')}</a
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="col-lg-4 col-sm-6">
        <div class="single-footer-widget">
          <h3 class="text-gray-900 dark:text-gray-100">{$t('common.footer.address')}</h3>

          <ul class="footer-contact-info">
            <li class="text-gray-600 dark:text-gray-400">
              <i class="bx bx-building text-blue-600 dark:text-blue-400"></i>
              #play14 a.s.b.l.
              <br />
              46 boulevard Jules Salentiny
              <br />
              L-2511 Luxembourg
              <br />
              LUXEMBOURG
            </li>
            <li class="text-gray-600 dark:text-gray-400">
              <i class="bx bx-envelope text-blue-600 dark:text-blue-400"></i>
              <a href="mailto:team@play14.org">team@play14.org</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-bottom-area border-t border-gray-200 dark:border-gray-700">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-6">
          <p class="text-gray-600 dark:text-gray-400">
            &copy; 2014 - {currentYear} <strong>#play14</strong>
            {$t('common.footer.developedBy')}
            <a
              href="https://www.linkedin.com/in/c%C3%A9dric-pontet/"
              target="_blank"
              rel="noreferrer"
              class="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            >
              Cédric Pontet
            </a>
          </p>
        </div>

        <div class="col-lg-6 col-md-6">
          <ul>
            <li>
              <a
                href="/privacy"
                class="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                >{$t('common.footer.privacyPolicy')}</a
              >
            </li>
            <li>
              <a
                href="/terms"
                class="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                >{$t('common.footer.termsOfService')}</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="footer-map">
    <img src="/images/footer-map.png" alt="footer-logo" style="max-width: 100%; height: auto;" />
  </div>
</footer>

<style>
  /* Footer styles will be imported from the main stylesheet */
  .footer-area {
    padding-top: 80px;
    position: relative;
  }

  .footer-bottom-area {
    margin-top: 50px;
    padding: 30px 0;
  }

  .footer-bottom-area ul {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: right;
  }

  .footer-bottom-area ul li {
    display: inline-block;
    margin-left: 20px;
  }

  .social-link {
    list-style: none;
    padding: 0;
    margin-top: 20px;
    display: flex;
    gap: 10px;
  }

  .social-link li {
    display: inline-block;
  }

  .footer-links-list {
    list-style: none;
    padding: 0;
  }

  .footer-links-list li {
    margin-bottom: 10px;
  }

  .footer-contact-info {
    list-style: none;
    padding: 0;
  }

  .footer-contact-info li {
    margin-bottom: 15px;
  }

  .footer-contact-info i {
    margin-right: 10px;
  }

  .footer-map {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.05;
    z-index: -1;
  }
</style>
