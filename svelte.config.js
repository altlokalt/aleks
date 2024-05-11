import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import 'dotenv/config';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      // Specify the output directory for the static files
      out: 'public',
      // Specify other adapter options if needed
      // (e.g., target, fallback, precompress, strict, etc.)
      // target: 'static',
      // pages: 'build',
      // assets: 'build',
      // fallback: undefined,
      // precompress: false,
      // strict: true
    }),
    paths: {
      base: dev ? '' : process.env.BASE_PATH,
    },
  },
};

export default config;