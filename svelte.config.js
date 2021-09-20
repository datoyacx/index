import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';
import sass from 'sass';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(
		sveltePreprocess({
			scss: {
				renderSync: true
			}
		})
	),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		router: true,
		ssr: false,
		target: '#toya'
	}
};

export default config;
