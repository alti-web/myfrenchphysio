// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://myfrenchphysio.com',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
  },
});
