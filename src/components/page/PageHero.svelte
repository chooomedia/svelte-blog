<script lang="ts">
	import { fade } from 'svelte/transition';

	export let page: any;

	// Extrahieren des Bildes aus der API, falls vorhanden
	const featuredMedia = page._embedded?.['wp:featuredmedia']?.[0];
	const backgroundImage =
		featuredMedia?.media_details?.sizes?.medium?.source_url ||
		'https://cannachris.de/wp-content/uploads/2024/09/cannachris-marijuana-leaves-seamless-300x180.png';
</script>

<div
	class="relative w-full h-[75vh] sm:h-[60vh] bg-cover bg-center flex items-center justify-center text-white text-center px-6"
	style="background-image: url({backgroundImage}); background-size: contain;"
	in:fade={{ duration: 500 }}
>
	<!-- Weicher Gradient Overlay für bessere Lesbarkeit -->
	<div class="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20"></div>

	<!-- Content Box -->
	<div
		class="relative z-10 max-w-3xl p-6 sm:p-10 bg-black/50 rounded-2xl shadow-lg backdrop-blur-md transform scale-95 hover:scale-100 transition-all duration-500"
	>
		<h1 class="text-5xl sm:text-6xl font-extrabold tracking-tight">{page.title}</h1>
		{#if page.excerpt}
			<p class="text-lg sm:text-xl mt-4 opacity-90">
				{@html page.excerpt}
			</p>
		{/if}
	</div>
</div>
