<script lang="ts">
	import Container from '../Container.svelte';
	import htmlCodeToSymbol from '../../utils/htmlCodeToSymbol';

	export let content: string;
</script>

<Container
	class="
        page-content
        prose
        text-2xl
        dark:prose-invert 
        w-full 
        md:w-full 
        2xl:max-w-[1140px]
        mx-auto 
        py-10 md:py-12 
        text-gray-900 dark:text-gray-200
        transition-all duration-300
        px-4 md:px-8"
>
	{@html htmlCodeToSymbol(content)}
</Container>
