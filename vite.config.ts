import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	assetsInclude: ['**/*.glb', '**/*.gltf'],

	build: {
		chunkSizeWarningLimit: 1000,
		assetsInlineLimit: 0
	},

	server: {
		fs: {
			allow: ['..', '.']
		},
		watch: {
			usePolling: true
		}
	},

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
