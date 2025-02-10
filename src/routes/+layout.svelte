<script lang="ts">
	import '@fontsource-variable/comfortaa';
	import Header from '../components/Header.svelte';
	import { fade } from 'svelte/transition';
	import Footer from '../components/Footer.svelte';
	import '../app.css';
	import Seo from '$lib/seo/seo.svelte';

	let isDarkMode = false;

	export let data: {
		pageData?: any;
		postData?: any;
		blogPosts?: any;
		seoData: any;
		isHomepage: boolean;
		isPostPage: boolean;
	};

	function toggleDarkMode() {
		isDarkMode = !isDarkMode;
		document.documentElement.classList.toggle('dark', isDarkMode);
	}
</script>

<div class="min-h-screen bg-white dark:bg-surface-900 text-gray-900 dark:text-white">
	<Header on:toggleDarkMode={toggleDarkMode} />

	<main
		class="
            w-full
            md:w-full
            2xl:max-w-[1080px]
            mx-auto
          "
		in:fade={{ delay: 100 }}
	>
		<slot />
	</main>
	<Footer on:toggleDarkMode={toggleDarkMode} />
</div>
