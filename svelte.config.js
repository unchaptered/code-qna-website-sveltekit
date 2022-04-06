// import autoAdapter from '@sveltejs/adapter-auto';
import staticAdapter from '@sveltejs/adapter-static';
import sveltPreprocess from 'svelte-preprocess';

// Custom Settings
import svelteAutoprefixer from 'autoprefixer';
import svelteTailwindcss from 'tailwindcss';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	preprocess: sveltPreprocess({
		postcss: {
			plugins: [
				svelteAutoprefixer(),
				svelteTailwindcss({
					mode: 'jit',
					purge: ['./src/**/*.svelte'],
					// darkMode: false,
					// theme: { extends: {} },
					// variants: { extend: {} },
					// plugins: []
				})
			]
		},
		scss: {
			prependData: '@import "./src/scss/index.scss"'
		}
	}),
	kit: {
		adapter: staticAdapter(),
		prerender: {
			default: true
		},
		endpointExtensions: ['.js', '.ts'],
		outDir: 'build',
	},
};

export default config;
