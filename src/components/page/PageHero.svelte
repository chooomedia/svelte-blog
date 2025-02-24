<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import type { PageHeroProps } from './PageHero';
	import { JsonLd } from 'svelte-meta-tags';

	// Props für die Hero Section
	export let page: PageHeroProps = {
		title: 'Fallback-Titel',
		meta_description: 'Willkommen auf unserer Seite!',
		_embedded: null
	};

	// Featured Image (fallback falls nicht vorhanden)
	const featuredMedia = page?._embedded?.['wp:featuredmedia']?.[0];
	const backgroundImage =
		featuredMedia?.media_details?.sizes?.medium?.source_url ||
		'https://cannachris.de/wp-content/uploads/2024/09/cannachris-marijuana-leaves-seamless-300x180.png';

	// ✅ JSON-LD strukturiertes Schema als Variable definieren
	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: page.title,
		description: page.meta_description,
		image: backgroundImage,
		url: typeof window !== 'undefined' ? window.location.href : ''
	};
</script>

<!-- ✅ Korrekte Nutzung von `JsonLd` -->
<JsonLd {structuredData} />

<div
	class="relative w-full lg:h-[60vh] h-[50vh] flex items-center justify-center text-white text-center px-6 rounded-b-[2.5rem] overflow-hidden"
	in:fade={{ duration: 600 }}
>
	<div
		class="absolute inset-0 bg-cover bg-center filter dark:brightness-90 dark:invert-[0.85] transition-all duration-500"
		style="background-image: url({backgroundImage}); background-size: 572px;"
	></div>

	<div
		class="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent dark:from-[#212121]/80 dark:to-[#212121]/20 transition-opacity duration-500 bg-primary-500 opacity-20"
	></div>

	<div
		class="relative z-10 max-w-3xl p-6 sm:p-10 rounded-2xl shadow-lg backdrop-blur-md bg-surface-700/50 dark:bg-[#212121]/50 border border-white/20 dark:border-[#424242]/30 transform transition-all duration-500 hover:scale-[1.02]"
		in:fly={{ y: 20, opacity: 0, duration: 600 }}
		out:fade={{ duration: 300 }}
	>
		<h1 class="lg:text-5xl text-6xl font-extrabold tracking-tight">
			{page.title || 'Fallback-Titel'}
		</h1>
		{#if page.meta_description}
			<p class="lg:text-lg text-2xl mt-4 opacity-90">
				{@html page.meta_description}
			</p>
		{/if}
	</div>
</div>
