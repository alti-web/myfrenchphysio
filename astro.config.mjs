// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://alti-web.github.io',
  base: '/myfrenchphysio',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
  },
});
