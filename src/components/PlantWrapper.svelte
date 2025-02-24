<script lang="ts">
	import { onMount } from 'svelte';
	import { Canvas } from '@threlte/core';
	import { OrbitControls, GLTF } from '@threlte/extras';
	import { T } from '@threlte/core';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import type { Object3D } from 'three';

	let plant: Object3D | null = null;
	let scrollY;
	let browser = false;

	// Sicherstellen, dass `window` nur im Browser existiert
	onMount(() => {
		browser = true;
		scrollY = tweened(0, { duration: 300, easing: cubicOut });

		window.addEventListener('scroll', () => {
			scrollY.set(window.scrollY * 0.005);
		});
	});
</script>

{#if browser}
	<div class="plantcanvas absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
		<Canvas dpr={[1, 2]} shadows>
			<T.PerspectiveCamera position={{ x: 0, y: 3, z: 8 }} makeDefault>
				<OrbitControls enabled={false} />
			</T.PerspectiveCamera>

			<T.AmbientLight intensity={1.2} />
			<T.DirectionalLight position={{ x: 5, y: 10, z: 5 }} intensity={1.5} castShadow />

			<T.Group position={{ x: 0, y: -2, z: 0 }}>
				<GLTF bind:object={plant} url="/cannabis_plant.glb" scale={1} />
			</T.Group>
		</Canvas>
	</div>
{/if}
