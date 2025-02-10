<script lang="ts">
	import { Accordion as AccordionPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils.js';

	export let className: string = '';
</script>

<AccordionPrimitive.Trigger
	class={cn(
		'flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
		className
	)}
>
	<slot />
</AccordionPrimitive.Trigger>
