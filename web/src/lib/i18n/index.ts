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
    error: 'Error',
    whatIsPlay14: 'What is #play14?',
    welcomeText:
      'Welcome to #play14, a global movement that believes in the transformative power of play!',
    movementDescription:
      'We are a worldwide gathering of like-minded people who believe that playing is the best way to learn, share and get creative! We are a movement started in 2014, we are a global series of events organized in different cities on all five continents, we are an unconference following the principles of open-space technology, but above all we are a family whose members share common values and interests.',
    discoverPowerOfPlay: 'Discover the power of play',
    playDescription:
      'Play is a better way to learn because it engages both mind and body, making learning an active, immersive experience. Through play, individuals explore, experiment, and discover concepts in a hands-on way, which enhances understanding and retention. It encourages creativity, problem-solving, and collaboration, helping learners develop critical thinking skills.',
    franklinQuote: 'Tell me and I forget, teach me and I may remember, involve me and I learn',
    playBenefits:
      'Play also reduces stress and increases motivation, making the learning process enjoyable and effective. By creating a safe space for trial and error, play fosters a deeper, more meaningful connection to the material being learned.',
    whyAttend: 'Why attend?',
    whyAttendDescription:
      'Whether you are a facilitator, educator, or curious mind, our events are designed to spark creativity, foster collaboration, and ignite new ideas. Join us in cities worldwide to connect with like-minded individuals and dive into a world of playful experimentation.',
    globalCommunity: 'Global community',
    globalCommunityDesc: 'Connect with a diverse network of innovators',
    endlessFun: 'Endless fun',
    endlessFunDesc: 'Engage in hands-on, playful activities',
    inspireBeInspired: 'Inspire & be inspired',
    inspireBeInspiredDesc: 'Share and discover new games, tools, and techniques',
    unconferenceDescription:
      "#play14 is an unconference, where all attendees are also contributors. Just show up with an open mind, and you'll have the chance to propose your own games or dive into the games suggested by others. It's all about participation, creativity, and shared fun!",
    whatToExpect: 'What to expect?',
    whatToExpectDescription:
      'For two and a half days, people with many different profiles and experiences are invited to share serious games and fun activities, experiences and tips, knowledge and insights, laughs and smiles. Everyone is welcome to join.',
    platoQuote:
      'You can discover more about a person in an hour of play than a year of conversation',
    activitiesIntro:
      'If you feel like joining but wonder what is going to happen, here are some examples of activities we engage in:',
    activitySeriousGame:
      'A serious game that you use as a metaphor in order to understand a new concept',
    activityIceBreaker: 'An ice breaker game where people learn more about one another',
    activityWarmUp:
      'A warm up or an energizer that you can use to raise the level of awareness and energy',
    activityFacilitation: 'A facilitation technique that you can use in your daily work',
    activityTeamBuilding:
      'A team building exercise that fosters collaboration and self organization',
    activityGameDesign: 'A game design session where you invent a new game to teach something new',
    activityIntrospection:
      'A soul searching, deep-dive introspection session where you learn about yourself',
    activityCoaching:
      'A one-on-one coaching session where you will find some answers with the help of a friend',
    activityBrainstorming:
      'A brainstorming session on a question or problem that wakes you up at night',
    activityCreative: 'A creative session where you sketch, doodle, or build something together',
    activityFun: 'An fun and energetic time with dancing, singing or being silly together',
    developSkills:
      'Join us in order to develop your facilitation skills, increase your ability to accompany change in your organization, foster your creativity and improve your capacity to innovate.',
    gallery: 'Gallery',
    expectations: 'What can you expect?',
    expectationsSubtitle: 'Join us and discover all the benefits of learning through play',
    additionalExpectations: 'And also...',
    globalReach: 'Our Global Reach',
    eventsMapDescription:
      '#play14 events have been organized all around the world, bringing together people from diverse backgrounds and cultures united by the power of play.',
    eventsMapAlt: 'World map showing all #play14 events',
    publishedEvents: 'Published Events',
    announcedEvents: 'Announced Events',
    cancelledEvents: 'Cancelled Events'
  },
  manifesto: {
    title: 'Manifesto',
    intro: 'is and always will be',
    shareKnowledge:
      'a place to share knowledge & practices more than a place to sell services & goods',
    openToAll: 'open to all people or communities with an interest on learning with fun',
    physicalWorld:
      'focused on games & activities in the physical world more than in the virtual world',
    unconference: 'an unconference based on the Open Space Technology',
    nonProfit:
      'non profit, which means that when we do make a profit on a given event, we reinvest everything into the next'
  },
  codeOfConduct: {
    title: 'Code of conduct',
    openMinded: 'You shall be open minded and ready to listen and learn from others',
    feelFree: 'You shall feel free to propose, experiment and explain what you have in mind',
    notHijack: 'You shall not high-jack, sabotage or ruin the learning experience of others',
    manageTimebox:
      'You shall manage your own timebox when facilitating so that other sessions can start on time',
    behaveAppropriately: 'You shall behave appropriately and be a decent human being',
    leaveClean:
      'You shall always leave the playground clean (boy scout rule), avoid waste and try to reduce your carbon footprint',
    getSeriousFun:
      'You shall be ready to get serious fun and good laughs and should try not be shy about that',
    summary: 'To summarize : "You shall not be an a**hole".'
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
    error: 'Erreur',
    whatIsPlay14: "Qu'est-ce que #play14 ?",
    welcomeText:
      'Bienvenue à #play14, un mouvement mondial qui croit au pouvoir transformateur du jeu !',
    movementDescription:
      "Nous sommes un rassemblement mondial de personnes partageant les mêmes idées qui croient que jouer est la meilleure façon d'apprendre, de partager et d'être créatif ! Nous sommes un mouvement lancé en 2014, nous sommes une série mondiale d'événements organisés dans différentes villes sur les cinq continents, nous sommes une non-conférence suivant les principes de la technologie open-space, mais avant tout nous sommes une famille dont les membres partagent des valeurs et des intérêts communs.",
    discoverPowerOfPlay: 'Découvrez le pouvoir du jeu',
    playDescription:
      "Le jeu est une meilleure façon d'apprendre car il engage à la fois l'esprit et le corps, faisant de l'apprentissage une expérience active et immersive. À travers le jeu, les individus explorent, expérimentent et découvrent des concepts de manière pratique, ce qui améliore la compréhension et la rétention. Il encourage la créativité, la résolution de problèmes et la collaboration, aidant les apprenants à développer des compétences de pensée critique.",
    franklinQuote:
      "Dis-moi et j'oublie, enseigne-moi et je peux me souvenir, implique-moi et j'apprends",
    playBenefits:
      "Le jeu réduit également le stress et augmente la motivation, rendant le processus d'apprentissage agréable et efficace. En créant un espace sûr pour l'essai et l'erreur, le jeu favorise une connexion plus profonde et plus significative avec le matériel appris.",
    whyAttend: 'Pourquoi participer ?',
    whyAttendDescription:
      "Que vous soyez facilitateur, éducateur ou esprit curieux, nos événements sont conçus pour stimuler la créativité, favoriser la collaboration et susciter de nouvelles idées. Rejoignez-nous dans des villes du monde entier pour vous connecter avec des personnes partageant les mêmes idées et plonger dans un monde d'expérimentation ludique.",
    globalCommunity: 'Communauté mondiale',
    globalCommunityDesc: "Connectez-vous avec un réseau diversifié d'innovateurs",
    endlessFun: 'Plaisir sans fin',
    endlessFunDesc: 'Participez à des activités pratiques et ludiques',
    inspireBeInspired: 'Inspirer et être inspiré',
    inspireBeInspiredDesc: 'Partagez et découvrez de nouveaux jeux, outils et techniques',
    unconferenceDescription:
      "#play14 est une non-conférence, où tous les participants sont aussi des contributeurs. Présentez-vous simplement avec un esprit ouvert, et vous aurez la chance de proposer vos propres jeux ou de plonger dans les jeux suggérés par d'autres. Il s'agit de participation, de créativité et de plaisir partagé !",
    whatToExpect: "À quoi s'attendre ?",
    whatToExpectDescription:
      'Pendant deux jours et demi, des personnes aux profils et expériences très différents sont invitées à partager des jeux sérieux et des activités amusantes, des expériences et des conseils, des connaissances et des idées, des rires et des sourires. Tout le monde est le bienvenu.',
    platoQuote:
      "Vous pouvez en découvrir plus sur une personne en une heure de jeu qu'en un an de conversation",
    activitiesIntro:
      "Si vous avez envie de nous rejoindre mais vous vous demandez ce qui va se passer, voici quelques exemples d'activités auxquelles nous participons :",
    activitySeriousGame:
      'Un jeu sérieux que vous utilisez comme métaphore pour comprendre un nouveau concept',
    activityIceBreaker: 'Un jeu brise-glace où les gens en apprennent plus les uns sur les autres',
    activityWarmUp:
      "Un échauffement ou un énergisant que vous pouvez utiliser pour augmenter le niveau de conscience et d'énergie",
    activityFacilitation:
      'Une technique de facilitation que vous pouvez utiliser dans votre travail quotidien',
    activityTeamBuilding:
      "Un exercice de team building qui favorise la collaboration et l'auto-organisation",
    activityGameDesign:
      'Une session de conception de jeu où vous inventez un nouveau jeu pour enseigner quelque chose de nouveau',
    activityIntrospection: "Une session d'introspection profonde où vous apprenez sur vous-même",
    activityCoaching:
      "Une session de coaching individuel où vous trouverez des réponses avec l'aide d'un ami",
    activityBrainstorming:
      'Une session de brainstorming sur une question ou un problème qui vous réveille la nuit',
    activityCreative:
      'Une session créative où vous esquissez, gribouillez ou construisez quelque chose ensemble',
    activityFun:
      'Un moment amusant et énergique avec de la danse, du chant ou des bêtises ensemble',
    developSkills:
      'Rejoignez-nous pour développer vos compétences de facilitation, augmenter votre capacité à accompagner le changement dans votre organisation, favoriser votre créativité et améliorer votre capacité à innover.',
    gallery: 'Galerie',
    expectations: 'À quoi pouvez-vous vous attendre ?',
    expectationsSubtitle:
      "Rejoignez-nous et découvrez tous les avantages de l'apprentissage par le jeu",
    additionalExpectations: 'Et aussi...',
    globalReach: 'Notre Portée Mondiale',
    eventsMapDescription:
      'Les événements #play14 ont été organisés dans le monde entier, rassemblant des personnes de divers horizons et cultures unies par le pouvoir du jeu.',
    eventsMapAlt: 'Carte du monde montrant tous les événements #play14',
    publishedEvents: 'Événements Publiés',
    announcedEvents: 'Événements Annoncés',
    cancelledEvents: 'Événements Annulés'
  },
  manifesto: {
    title: 'Manifeste',
    intro: 'est et sera toujours',
    shareKnowledge:
      "un lieu de partage de connaissances et de pratiques plus qu'un lieu de vente de services et de biens",
    openToAll:
      "ouvert à toutes les personnes ou communautés intéressées par l'apprentissage ludique",
    physicalWorld:
      'axé sur les jeux et activités dans le monde physique plus que dans le monde virtuel',
    unconference: 'une non-conférence basée sur la technologie Open Space',
    nonProfit:
      'à but non lucratif, ce qui signifie que lorsque nous réalisons un bénéfice sur un événement donné, nous réinvestissons tout dans le suivant'
  },
  codeOfConduct: {
    title: 'Code de conduite',
    openMinded: "Vous devez être ouvert d'esprit et prêt à écouter et apprendre des autres",
    feelFree:
      'Vous devez vous sentir libre de proposer, expérimenter et expliquer ce que vous avez en tête',
    notHijack:
      "Vous ne devez pas détourner, saboter ou ruiner l'expérience d'apprentissage des autres",
    manageTimebox:
      "Vous devez gérer votre propre temps lors de la facilitation afin que les autres sessions puissent commencer à l'heure",
    behaveAppropriately:
      'Vous devez vous comporter de manière appropriée et être un être humain décent',
    leaveClean:
      'Vous devez toujours laisser le terrain de jeu propre (règle du scout), éviter le gaspillage et essayer de réduire votre empreinte carbone',
    getSeriousFun:
      "Vous devez être prêt à avoir du plaisir sérieux et de bons rires et ne devriez pas essayer d'être timide à ce sujet",
    summary: 'Pour résumer : "Vous ne devez pas être un c**nard".'
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
