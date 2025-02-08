<script>
	import '@fontsource-variable/comfortaa';
	import Header from '../components/Header.svelte';
	import { fade } from 'svelte/transition';
	import Footer from '../components/Footer.svelte';
	import '../app.css';

	let isDarkMode = false;

	function toggleDarkMode() {
		isDarkMode = !isDarkMode;
		document.documentElement.classList.toggle('dark', isDarkMode);
	}
</script>

<div class="min-h-screen bg-white dark:bg-surface-900 text-gray-900 dark:text-white">
	<Header {isDarkMode} on:toggleDarkMode={toggleDarkMode} />
	<main
		class="
        w-full 
        max-w-[1080px] 
        mx-auto 
        px-4 
        pt-24 
        md:pt-32
      "
		in:fade={{ delay: 100 }}
		itemscope
		itemtype="https://schema.org/WebPageElement"
		itemprop="mainContentOfPage"
	>
		<slot />
	</main>
	<Footer {isDarkMode} on:toggleDarkMode={toggleDarkMode} />
</div>
