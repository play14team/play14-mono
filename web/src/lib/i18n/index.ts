// Simple i18n implementation for SvelteKit
import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';

// Define supported locales
export const locales = ['en', 'fr'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

// Translation type
export type Translations = {
  [key: string]: string | Translations;
};

// Create a store for the current locale
function createLocaleStore() {
  const { subscribe, set } = writable<Locale>(defaultLocale);

  return {
    subscribe,
    set: (locale: Locale) => {
      if (browser) {
        localStorage.setItem('locale', locale);
      }
      set(locale);
    },
    initialize: () => {
      if (browser) {
        const savedLocale = localStorage.getItem('locale') as Locale;
        if (savedLocale && locales.includes(savedLocale)) {
          set(savedLocale);
        }
      }
    }
  };
}

export const locale = createLocaleStore();

// Helper to get nested translation values
function getNestedTranslation(obj: Translations, path: string): string {
  return (
    (path.split('.').reduce((current: Translations | string | undefined, key) => {
      if (typeof current === 'object' && current !== null) {
        return current[key];
      }
      return undefined;
    }, obj) as string) || path
  );
}

// Create derived store for translations
export const t = derived(
  locale,
  ($locale) => (key: string, params?: Record<string, string | number>) => {
    const translations = loadTranslations($locale);
    let translation = getNestedTranslation(translations, key);

    // Replace parameters if provided
    if (params && typeof translation === 'string') {
      Object.entries(params).forEach(([key, value]) => {
        translation = translation.replace(`{${key}}`, String(value));
      });
    }

    return translation;
  }
);

// Load translations (we'll import these dynamically)
function loadTranslations(locale: Locale): Translations {
  // In a real app, you might want to dynamically import these
  // For now, we'll import them statically
  switch (locale) {
    case 'fr':
      return frTranslations;
    case 'en':
    default:
      return enTranslations;
  }
}

// English translations
const enTranslations: Translations = {
  common: {
    home: 'Home',
    events: 'Events',
    community: 'Community',
    about: 'About',
    contact: 'Contact',
    search: 'Search',
    searchPlaceholder: 'Search for anything',
    language: 'Language',
    footer: {
      playIsTheWay: 'play is the way',
      explore: 'Explore',
      resources: 'Resources',
      address: 'Address',
      ourEvents: 'Our events',
      ourPlayers: 'Our players',
      ourGames: 'Our games',
      ourArticles: 'Our articles',
      developedBy: 'developed by',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service'
    }
  },
  home: {
    welcome: 'Welcome to #play14',
    upcomingEvents: 'Upcoming Events',
    latestArticles: 'Latest Articles',
    loading: 'Loading...',
    error: 'Error'
  },
  events: {
    calendar: 'Calendar',
    map: 'Map',
    hosting: 'Hosting an event',
    viewEvent: 'View event'
  },
  community: {
    players: 'Players',
    games: 'Games',
    articles: 'Articles',
    testimonials: 'Testimonials'
  },
  about: {
    ourStory: 'Our story',
    ourValues: 'Our values',
    ourFormat: 'Our format'
  }
};

// French translations
const frTranslations: Translations = {
  common: {
    home: 'Accueil',
    events: 'Événements',
    community: 'Communauté',
    about: 'À propos',
    contact: 'Contact',
    search: 'Rechercher',
    searchPlaceholder: 'Rechercher quelque chose',
    language: 'Langue',
    footer: {
      playIsTheWay: 'le jeu est la voie',
      explore: 'Explorer',
      resources: 'Ressources',
      address: 'Adresse',
      ourEvents: 'Nos événements',
      ourPlayers: 'Nos joueurs',
      ourGames: 'Nos jeux',
      ourArticles: 'Nos articles',
      developedBy: 'développé par',
      privacyPolicy: 'Politique de confidentialité',
      termsOfService: 'Conditions de service'
    }
  },
  home: {
    welcome: 'Bienvenue à #play14',
    upcomingEvents: 'Événements à venir',
    latestArticles: 'Derniers articles',
    loading: 'Chargement...',
    error: 'Erreur'
  },
  events: {
    calendar: 'Calendrier',
    map: 'Carte',
    hosting: 'Organiser un événement',
    viewEvent: "Voir l'événement"
  },
  community: {
    players: 'Joueurs',
    games: 'Jeux',
    articles: 'Articles',
    testimonials: 'Témoignages'
  },
  about: {
    ourStory: 'Notre histoire',
    ourValues: 'Nos valeurs',
    ourFormat: 'Notre format'
  }
};
