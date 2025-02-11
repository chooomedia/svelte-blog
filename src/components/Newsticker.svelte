<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	export let posts: any[] = [];
	export let speed = 50; // px pro Sekunde
	export let pauseOnHover = true;

	let tickerContainer: HTMLElement | null = null;
	let tickerTrack: HTMLElement | null = null;
	let animationFrame: number | null = null;
	let position = 0;
	let currentSpeed = speed;
	const slowSpeed = speed / 3; // Sanftes Verlangsamen bei Hover

	function animate() {
		if (!tickerTrack || !tickerContainer) return;

		position -= currentSpeed / 60;
		tickerTrack.style.transform = `translateX(${position}px)`;

		// Falls der erste Eintrag vollständig aus dem Viewport ist, zurücksetzen
		const firstChild = tickerTrack.firstElementChild as HTMLElement;
		if (firstChild && position <= -firstChild.offsetWidth) {
			position += firstChild.offsetWidth;
			tickerTrack.appendChild(firstChild);
		}

		animationFrame = requestAnimationFrame(animate);
	}

	onMount(() => {
		if (!tickerTrack || !tickerContainer) return;

		// Initiale Duplizierung, um nahtloses Scrollen zu ermöglichen
		tickerTrack.innerHTML += tickerTrack.innerHTML;

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
	class="w-full overflow-hidden bg-primary-500 py-8 relative"
	role="marquee"
	aria-live="off"
	on:mouseenter={() => (currentSpeed = slowSpeed)}
	on:mouseleave={() => (currentSpeed = speed)}
>
	<h2 class="sr-only">Aktuelle Nachrichten</h2>

	<!-- Scrolling Track -->
	<div
		class="flex whitespace-nowrap will-change-transform transition-transform"
		bind:this={tickerContainer}
	>
		<div class="flex gap-4" bind:this={tickerTrack}>
			{#each posts as post}
				<a
					href={`/post/${post.slug}`}
					class="inline-block text-white text-sm md:text-base font-medium px-4 transition-colors hover:text-white duration-200 cursor-pointer"
					aria-label={`Zum Artikel: ${post.title}`}
				>
					{post.title}
				</a>
				<span class="text-white opacity-50 text-2xl"> • • • </span>
			{/each}
		</div>
	</div>
</div>
