<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { slide, fade } from 'svelte/transition';

	const dispatch = createEventDispatcher();

	// Props für flexibles Verhalten
	export let isOpen: boolean = false; // Zustand des Dropdowns
	export let triggerIcon: boolean = true; // Falls ein Icon genutzt wird
	export let position: 'popup' | 'dropdown' | 'fullwidth' = 'dropdown'; // Verhalten des Dropdowns
	export let closeOnClickOutside: boolean = true; // Automatisch schließen, wenn außerhalb geklickt

	// Methode zum Umschalten des Dropdowns
	function toggleDropdown() {
		isOpen = !isOpen;
		dispatch('toggle', isOpen);
	}

	// Methode zum Schließen des Dropdowns bei Klick außerhalb
	function handleOutsideClick(event: Event) {
		if (closeOnClickOutside && isOpen) {
			isOpen = false;
		}
	}
</script>

<!-- Wrapper mit Click-Handler für Outside-Click -->
<div class="relative inline-block">
	<!-- Button, der das Dropdown öffnet -->
	<button
		on:click={toggleDropdown}
		class="
			w-14 h-14 flex items-center justify-center rounded-full
			bg-surface-100/50 dark:bg-surface-800 hover:bg-gray-300
			dark:hover:bg-gray-600 transition-all"
	>
		<slot name="icon" />
	</button>

	<!-- Dropdown-Inhalt (je nach Position als Popup, normales Dropdown oder Full-Width) -->
	{#if isOpen}
		{#if position === 'popup'}
			<!-- Popup-Stil -->
			<div
				transition:fade
				class="
					absolute top-full right-0 mt-2
					bg-white dark:bg-surface-900 shadow-lg rounded-xl
					w-64 p-4
				"
			>
				<slot />
			</div>
		{:else if position === 'fullwidth'}
			<!-- Full-Width Dropdown -->
			<div
				transition:slide
				class="
					fixed top-24 left-0 w-full bg-surface-50 dark:bg-surface-900
					border-b border-surface-200 dark:border-surface-800 shadow-lg
					p-4 z-50"
			>
				<slot />
			</div>
		{:else}
			<!-- Standard Dropdown -->
			<div
				aria-roledescription="dropdown"
				transition:slide
				class="
					absolute top-full left-0 mt-2
					bg-surface-50 dark:bg-surface-900
					border border-surface-200 dark:border-surface-800
					rounded-md shadow-lg w-56 p-3"
			>
				<slot />
			</div>
		{/if}
	{/if}
</div>

<!-- Klick außerhalb zum Schließen -->
{#if isOpen && closeOnClickOutside}
	<div class="fixed inset-0 z-0" on:click={handleOutsideClick}></div>
{/if}
