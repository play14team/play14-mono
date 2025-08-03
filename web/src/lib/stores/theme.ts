import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Theme = 'light' | 'dark';

function createThemeStore() {
  const { subscribe, set, update } = writable<Theme>('light');

  return {
    subscribe,
    set: (theme: Theme) => {
      if (browser) {
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
      set(theme);
    },
    toggle: () => {
      update((theme) => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        if (browser) {
          localStorage.setItem('theme', newTheme);
          if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        }
        return newTheme;
      });
    },
    initialize: () => {
      if (browser) {
        const savedTheme = localStorage.getItem('theme') as Theme;
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = savedTheme || (prefersDark ? 'dark' : 'light');

        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        }
        set(theme);
      }
    }
  };
}

export const theme = createThemeStore();
