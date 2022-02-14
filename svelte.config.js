import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: ['.svelte', '.svx', '.md'],
	preprocess: [
		mdsvex(mdsvexConfig),
		preprocess({
			postcss: {
				plugins: [tailwindcss(), autoprefixer()]
			}
		})
	],

	kit: {
		adapter: adapter()
	}
};

export default config;
