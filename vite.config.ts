import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig(({ mode }) => ({
	test: {
		include: ['{src,test}/**/*.{test,spec}.{js,ts}'],
		environment: 'jsdom'
	},
	resolve: {
		conditions: mode === 'test' ? ['browser'] : []
	},
	plugins: [sveltekit()]
}));
