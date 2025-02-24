<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	export let posts: { title: string; slug: string }[] = [];
	export let speed = 50; // px pro Sekunde
	export let pauseOnHover = true;

	let tickerContainer: HTMLElement | null = null;
	let tickerTrack: HTMLElement | null = null;
	let animationFrame: number | null = null;
	let position = 0;
	let currentSpeed = speed;
	const slowSpeed = speed / 3; // Sanftes Verlangsamen bei Hover

	// Prüfen, ob posts geladen wurden, um Fehler zu vermeiden
	$: if (posts.length > 0 && tickerTrack) {
		// Falls noch nicht dupliziert, um nahtloses Scrollen zu ermöglichen
		tickerTrack.innerHTML = ''; // Clear, um doppelte Inhalte zu vermeiden
		tickerTrack.append(...posts.map(createPostElement));
		tickerTrack.append(...posts.map(createPostElement)); // Duplizieren für Endlos-Scroll
	}

	function createPostElement(post: { title: string; slug: string }) {
		const link = document.createElement('a');
		link.href = `/post/${post.slug}`;
		link.className =
			'inline-block text-white text-sm md:text-base font-medium px-4 transition-colors hover:text-white duration-200 cursor-pointer';
		link.setAttribute('aria-label', `Zum Artikel: ${post.title}`);
		link.innerText = post.title;

		const separator = document.createElement('span');
		separator.className = 'text-white opacity-50 text-2xl';
		separator.innerText = ' • • • ';

		const wrapper = document.createElement('div');
		wrapper.appendChild(link);
		wrapper.appendChild(separator);

		return wrapper;
	}

	function animate() {
		if (!tickerTrack || !tickerContainer) return;

		position -= currentSpeed / 60;
		tickerTrack.style.transform = `translateX(${position}px)`;

		// Falls das erste Element komplett links raus ist, nach hinten verschieben
		const firstChild = tickerTrack.firstElementChild as HTMLElement;
		if (firstChild && position <= -firstChild.offsetWidth) {
			position += firstChild.offsetWidth;
			tickerTrack.appendChild(firstChild);
		}

		animationFrame = requestAnimationFrame(animate);
	}

	onMount(() => {
		if (!tickerTrack || !tickerContainer) return;

		// Falls posts verfügbar sind, starte die Animation
		if (posts.length > 0) {
			animationFrame = requestAnimationFrame(animate);
		}
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
		<div class="flex gap-4" bind:this={tickerTrack}></div>
	</div>
</div>
