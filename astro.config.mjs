// @ts-check
import { defineConfig } from 'astro/config';

// User site served from the domain root: https://dhwanip9.github.io
// No `base` needed because the repo is <user>.github.io.
export default defineConfig({
  site: 'https://dhwanip9.github.io',
});
