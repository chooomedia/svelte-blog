import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	assetsInclude: ['**/*.glb'],
	server: {
		watch: {
			usePolling: true
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
