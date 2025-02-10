<script lang="ts">
	import { Accordion as AccordionPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils.js';

	export let value: string;
	export let className: string = '';
</script>

<AccordionPrimitive.Item {value} class={cn('border-b', className)}>
	<slot />
</AccordionPrimitive.Item>
