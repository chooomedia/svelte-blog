<script lang="ts">
	import Container from '../Container.svelte';

	export let content: string;
</script>

<Container
	class="
        blog-content
        prose
        text-2xl
        dark:prose-invert 
        max-w-[1080px] 
        mx-auto 
        py-10 md:py-12 
        text-gray-900 dark:text-gray-200
        transition-all duration-300
    "
>
	{@html content}
</Container>
