<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let placeholder: string = 'Suche nach Blogartikeln';
	export let isExpanded: boolean = false; // Offenes oder geschlossenes Suchfeld
	export let icon: boolean = false; // Falls ein Icon genutzt wird

	let inputRef: HTMLInputElement | null = null;

	// Reaktives Auto-Fokus, wenn `isExpanded` auf `true` gesetzt wird
	$: if (isExpanded && inputRef) {
		setTimeout(() => inputRef?.focus(), 10);
	}

	function handleInput(event: Event) {
		dispatch('input', event);
	}

	function toggleInput() {
		isExpanded = !isExpanded;
	}
</script>

<div class="relative flex items-center">
	{#if isExpanded}
		<!-- Geöffnetes Suchfeld mit Icon innen -->
		<input
			bind:this={inputRef}
			{...$$props}
			aria-label={placeholder}
			class="
				w-full h-14 py-2 pl-14 pr-4 rounded-full
				text-base bg-surface-100/50 dark:bg-surface-800
				text-surface-900 dark:text-surface-100
				border-none outline-none focus:ring-2
				focus:ring-primary-500/50 dark:focus:ring-primary-400/50
				transition-all duration-300 placeholder:text-surface-500
				dark:placeholder:text-surface-400 hover:bg-surface-200
				dark:hover:bg-surface-700 group
			"
			{placeholder}
			on:input={handleInput}
			on:blur={() => (isExpanded = false)}
		/>

		<!-- Icon links im Input (Innen-Padding) -->
		{#if icon}
			<div class="absolute left-4 text-surface-500 dark:text-surface-400">
				<slot name="icon" />
			</div>
		{/if}
	{:else}
		<!-- Geschlossen als runder Button -->
		<button
			on:click={toggleInput}
			class="
				w-14 h-14 flex items-center justify-center rounded-full
				bg-surface-100/50 dark:bg-surface-800 hover:bg-gray-300
				dark:hover:bg-gray-600 transition-all"
		>
			<slot name="icon" />
		</button>
	{/if}
</div>
