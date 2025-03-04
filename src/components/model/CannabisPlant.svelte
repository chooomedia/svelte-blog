<script lang="ts">
	import { onMount } from 'svelte';
	import { Canvas, T } from '@threlte/core';
	import { GLTF, OrbitControls } from '@threlte/extras';
	import { spring } from 'svelte/motion';
	import * as THREE from 'three';
	import { Box3, Vector3 } from 'three';
	import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

	// Props
	export let modelPath = '/cannabis_plain.glb';
	export let backgroundColor = 'transparent';

	// Client-only state
	let isBrowser = false;
	let model: THREE.Group | undefined;
	let canvasReady = false;
	let dracoLoader: DRACOLoader | undefined;

	// Create reactive springs
	let scrollProgress = spring(0, { stiffness: 0.1, damping: 0.3 });
	let modelYPosition = spring(-0.5, { stiffness: 0.1, damping: 0.3 });

	// Bewegungsparameter
	const movementRange = 0.11; // Bewegung nach unten
	const rotationRange = Math.PI * 2; // Volle Umdrehung

	let cameraPosition = {
		x: 0.0,
		y: 0.0,
		z: 0.5
	};

	let cameraTarget = {
		x: 0,
		y: -4.745,
		z: -2.74
	};

	onMount(() => {
		isBrowser = true;

		if (typeof window !== 'undefined') {
			dracoLoader = new DRACOLoader();
			dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
		}

		const handleScroll = () => {
			const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
			let progress = window.scrollY / maxScroll;
			scrollProgress.set(Math.min(progress, 1));
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});

	// Verknüpfe Scroll-Progress mit Modelposition und Rotation
	$: modelYPosition.set(-0.5 + $scrollProgress * movementRange);

	function handleModelLoad(event: CustomEvent<THREE.Group>) {
		model = event.detail;
		if (!model) return;

		model.position.set(0, $modelYPosition - 0.3, 0);
		model.scale.set(2.5, 2.5, 2.5);

		try {
			const box = new Box3().setFromObject(model);
			const center = box.getCenter(new Vector3());
			model.position.x -= center.x;
			model.position.z -= center.z;
		} catch (boxError) {
			console.warn('Could not calculate bounding box', boxError);
		}

		model.traverse((child) => {
			if (child instanceof THREE.Mesh && child.material) {
				const mat = child.material.clone();
				child.material = mat;
				mat.transparent = true;
				mat.opacity = 1;

				if (child.name?.toLowerCase().includes('leaf')) {
					child.castShadow = true;
					child.receiveShadow = true;
					child.userData.originalY = child.position.y; // Originalposition speichern
				}
			}
		});
	}

	function animateModel(delta: number = 0.016) {
		if (!model) return;
		const time = Date.now() * 0.001;

		// Pflanze drehen
		model.rotation.z = $scrollProgress * rotationRange;

		// Blätter animieren
		model.traverse((child) => {
			if (child instanceof THREE.Mesh && child.name?.toLowerCase().includes('leaf')) {
				const idNum = parseInt(child.uuid.slice(-3), 16) || 0;
				const offset = (idNum % 100) * 0.01;

				// Zeitbasierte Animation
				child.rotation.z = Math.sin(time + offset) * 0.05;

				// Scroll-basierte Positionierung
				if (child.userData.originalY !== undefined) {
					child.position.y =
						child.userData.originalY + Math.sin(time * 0.5 + offset) * 0.02 + $scrollProgress * 0.3;
				}

				// Scroll-basierte Rotation
				child.rotation.x += $scrollProgress * 0.1;
			}
		});
	}

	$: if (model && $modelYPosition !== undefined) {
		model.position.y = $modelYPosition - 1.5;
	}
</script>

{#if isBrowser}
	<div class="scene-container" style="background-color: {backgroundColor};">
		<Canvas
			antialias
			shadows
			camera={{
				position: [cameraPosition.x, cameraPosition.y, cameraPosition.z],
				fov: 20,
				near: 0.1,
				far: 100
			}}
			on:frame={({ detail }) => animateModel(detail.delta)}
		>
			<T.PerspectiveCamera
				makeDefault
				position={[cameraPosition.x, cameraPosition.y, cameraPosition.z]}
				fov={10}
				near={0.1}
				far={100}
			>
				<OrbitControls
					enableDamping
					dampingFactor={0.09}
					maxDistance={5}
					minDistance={3}
					maxPolarAngle={Math.PI / 2.1}
					target={[cameraTarget.x, cameraTarget.y, cameraTarget.z]}
					enableZoom={false}
					enablePan={false}
					enabled={false}
				/>
			</T.PerspectiveCamera>

			<T.AmbientLight intensity={1.8} />
			<T.DirectionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
			<T.DirectionalLight position={[0, 5, 5]} intensity={1.0} />
			<T.DirectionalLight position={[0, -5, 0]} intensity={0.4} />
			<T.DirectionalLight position={[5, 0, 0]} intensity={0.9} />
			<T.DirectionalLight position={[-5, 0, 0]} intensity={0.6} />

			{#if dracoLoader}
				<GLTF
					url={modelPath}
					{dracoLoader}
					on:load={handleModelLoad}
					position={[0, $modelYPosition - 0.369, 0]}
					scale={[3, 3, 3]}
					castShadow
					receiveShadow
				/>
			{/if}
		</Canvas>
	</div>
{/if}

<style>
	.scene-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
	}
</style>
