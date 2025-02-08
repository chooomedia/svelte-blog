<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
</script>

<input
	{...$$props}
	aria-label="Suche nach Blogartikel"
	class="
    w-full
    h-14
    py-2 px-4 
   	rounded-full 
   	text-base
   	bg-surface-100/50
   	dark:bg-surface-800
   	text-surface-900
   	dark:text-surface-100
   	border-none 
   	outline-none
   	focus:ring-2 
   	focus:ring-primary-500/50
   	dark:focus:ring-primary-400/50
   	transition-all 
   	duration-300
   	placeholder:text-surface-500
   	dark:placeholder:text-surface-400
   	hover:bg-surface-200
   	dark:hover:bg-surface-700
   	group
   "
	on:input
/>
