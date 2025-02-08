<script lang="ts">
	import type { Post } from '../types/posts';
	import Card from './Card.svelte';
	import Pagination from './Pagination.svelte';

	export let posts: Post[] = [];
	export let loading = false;
	export let currentPage: number | string = 1;
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<section
	class="
        grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]
        auto-rows-[minmax(400px,1fr)]
        gap-10
        mt-[100px]
        min-h-[50vh]
    "
	itemscope
	itemtype="https://schema.org/Blog"
>
	{#each posts as post, index}
		<article itemprop="blogPost" itemscope itemtype="https://schema.org/BlogPosting">
			<Card {post} {index} />
		</article>
	{/each}
</section>

{#if loading}
	<div class="flex justify-center items-center py-8">
		<div
			class="
            animate-pulse 
            text-3xl
            text-primary-500
            flex items-center gap-2
        "
		>
			<div class="w-2 h-2 bg-current rounded-full animate-bounce" />
			<div class="w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:0.2s]" />
			<div class="w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:0.4s]" />
			<span class="ml-2">Loading</span>
		</div>
	</div>
{/if}

<Pagination {currentPage} />
