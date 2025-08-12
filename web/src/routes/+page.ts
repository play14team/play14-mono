import { locale, defaultLocale } from '$lib/i18n';
import { browser } from '$app/environment';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  // Get the current locale from localStorage if in browser, otherwise use default
  let currentLocale = defaultLocale;

  if (browser) {
    const savedLocale = localStorage.getItem('locale');
    if (savedLocale === 'en' || savedLocale === 'fr') {
      currentLocale = savedLocale;
    }
  } else {
    // On server, try to get from store
    currentLocale = get(locale) || defaultLocale;
  }

  // Return the locale for the component to use
  return {
    locale: currentLocale
  };
};
