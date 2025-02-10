<script lang="ts">
	import { cubicOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';
	import { onMount, onDestroy } from 'svelte';

	export let posts: any[];
	export let speed = 50; // Geschwindigkeit in px/sec
	export let pauseOnHover = true; // Soll sich die Geschwindigkeit verringern?

	let ticker: HTMLElement;
	let animationFrame: number | null = null;
	let position = 0;

	// Geschwindigkeit für Animationen
	let currentSpeed = speed;
	const slowSpeed = speed / 4;

	// Svelte Transition für sanfte Crossfade-Effekte
	const [send, receive] = crossfade({ duration: 500, easing: cubicOut });

	// Funktion für endloses Scrollen
	function animate() {
		position -= currentSpeed / 60;
		ticker.style.transform = `translateX(${position}px)`;

		// Falls der Ticker das Ende erreicht, springe zurück
		if (Math.abs(position) >= ticker.scrollWidth / 2) {
			position = 0;
		}

		animationFrame = requestAnimationFrame(animate);
	}

	onMount(() => {
		animationFrame = requestAnimationFrame(animate);
	});

	onDestroy(() => {
		if (animationFrame !== null) {
			cancelAnimationFrame(animationFrame);
		}
	});
</script>

<!-- Newsticker Container -->
<div
	class="w-full overflow-hidden whitespace-nowrap bg-primary-500 py-8"
	role="marquee"
	aria-live="off"
>
	<h2 class="sr-only">Aktuelle Nachrichten</h2>
	<div
		bind:this={ticker}
		class="flex gap-4 whitespace-nowrap will-change-transform transition-transform"
		on:mouseover={() => (currentSpeed = slowSpeed)}
		on:mouseleave={() => (currentSpeed = speed)}
	>
		{#each posts as post, index}
			<a
				href={`/post/${post.slug}`}
				class="inline-block text-white text-sm md:text-base font-medium px-4 transition-colors hover:text-white duration-200 cursor-pointer"
				aria-label={`Zum Artikel: ${post.title}`}
			>
				{post.title}
			</a>
			{#if index < posts.length - 1}
				<span class="text-white opacity-50 text-2xl"> • • • </span>
			{/if}
		{/each}
	</div>
</div>
