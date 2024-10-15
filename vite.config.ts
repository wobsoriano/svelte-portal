import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		include: ['{src,tests}/**/*.{test,spec}.{js,ts}'],
		environment: 'jsdom'
	},
	// Fix to issue https://github.com/sveltejs/svelte/discussions/12037
	resolve: process.env.VITEST
		? {
				conditions: ['browser']
			}
		: undefined,
	plugins: [sveltekit()]
});
