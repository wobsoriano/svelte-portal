import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig(({ mode }) => ({
	test: {
		include: ['{src,test}/**/*.{test,spec}.{js,ts}'],
		environment: 'jsdom'
	},
	// Fix to issue https://github.com/sveltejs/svelte/discussions/12037
	resolve: {
		conditions: mode === 'test' ? ['browser'] : []
	},
	plugins: [sveltekit()]
}));
