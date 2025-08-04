import { load_HomePage } from '$houdini/plugins/houdini-svelte/stores/HomePage';
import { get } from 'svelte/store';
import { locale, defaultLocale } from '$lib/i18n';
import { browser } from '$app/environment';
import type { PageLoad } from './$types';

export const load: PageLoad = async (event) => {
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

  // Pass the locale to the GraphQL query
  return await load_HomePage({
    event,
    variables: {
      locale: currentLocale
    }
  });
};
