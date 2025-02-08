<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
</script>

<input
	{...$$props}
	aria-label="Suche nach Blogartikel"
	class="
      w-full 
      max-w-md 
      p-4 
      rounded-2xl 
      text-base 
      bg-gray-200
      dark:bg-surface-800
      text-gray-900
      dark:text-gray-100
      border-none 
      outline-none
      focus:ring-2 
      focus:ring-primary-500/50
      dark:focus:ring-primary-400/50
      transition-all 
      duration-300
      placeholder:text-gray-500
      dark:placeholder:text-gray-400
      hover:bg-gray-300
      dark:hover:bg-gray-600
    "
	on:input={(e) => dispatch('input', e.target.value)}
/>
