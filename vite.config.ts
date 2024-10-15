import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { svelteTesting } from '@testing-library/svelte/vite';

export default defineConfig({
	test: {
		include: ['{src,test}/**/*.{test,spec}.{js,ts}'],
		environment: 'jsdom'
	},
	plugins: [sveltekit(), svelteTesting()]
});
