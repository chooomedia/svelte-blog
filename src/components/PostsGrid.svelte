<script lang="ts">
	import type { Post } from '../types/posts';
	import Card from './Card.svelte';
	import Pagination from './Pagination.svelte';

	export let posts: Post[] = [];
	export let loading = false;
	export let currentPage: number | string = 1;
</script>

<svelte:head>
	<title>Blog - Deine Seite</title>
	<script type="application/ld+json">
		{JSON.stringify({
			"@context": "https://schema.org",
			"@type": "Blog",
			"blogPost": posts.map(post => ({
				"@type": "BlogPosting",
				"headline": post.title,
				"image": post.image, // Falls es ein Bild gibt
				"author": {
					"@type": "Person",
					"name": post.author
				},
				"datePublished": post.datePublished,
				"dateModified": post.dateModified || post.datePublished,
				"mainEntityOfPage": {
					"@type": "WebPage",
					"@id": post.url
				},
				"publisher": {
					"@type": "Organization",
					"name": "Deine Website",
					"logo": {
						"@type": "ImageObject",
						"url": "https://deine-website.com/logo.png"
					}
				}
			}))
		}, null, 2)}
	</script>
</svelte:head>

<section
	class="
        grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] md:grid-cols-3
        auto-rows-[minmax(400px,1fr)]
        gap-5
        mt-10
        min-h-[50vh]
        w-full
    "
	itemscope
	itemtype="https://schema.org/Blog"
>
	{#each posts as post, index}
		<article itemprop="blogPost" itemscope itemtype="https://schema.org/BlogPosting">
			<meta itemprop="headline" content={post.title} />
			<meta itemprop="author" content={post.author} />
			<meta itemprop="datePublished" content={post.date_gmt} />
			<meta itemprop="dateModified" content={post.modified_gmt || post.date_gmt} />
			<meta itemprop="mainEntityOfPage" content={post.link} />
			{#if post.better_featured_image}
				<img itemprop="image" src={post.better_featured_image.sizes.large} alt={post.title} />
			{/if}
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
