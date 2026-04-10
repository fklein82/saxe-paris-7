// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://fklein82.github.io',
  base: '/saxe-paris-7',
  vite: {
    plugins: [tailwindcss()]
  }
});
