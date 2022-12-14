import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors

	preprocess: [
		preprocess({
			postcss: true
		})
	],
	kit: {
		adapter: adapter()
	},

	vitePlugin: {
		experimental: {
			// Svelte Component Inspector
			inspector: {
				// change shortcut
				toggleKeyCombo: 'meta-shift',
				// hold and release key to toggle inspector mode
				holdMode: true
				// show or hide the inspector option
				//showToggleButton: 'always',
				// inspector position
				//toggleButtonPos: 'top-right',
			}
		}
	},
	alias: {
		$components: './src/components',
		$lib: './src/lib',
		$images: './static/images',
		$types: './src/types'
	}
};

export default config;
