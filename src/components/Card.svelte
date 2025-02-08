<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { Post } from '../types/posts';
	import htmlCodeToSymbol from '../utils/htmlCodeToSymbol';
	import { onMount } from 'svelte';
	import { PUBLIC_BLOG_URL } from '$env/static/public';

	export let post: Post;
	export let index: number;
	let categoryName = '';

	const postTitle = post.title.length > 100 ? `${post.title.substring(0, 50)}...` : post.title;

	onMount(async () => {
		const categoryId = post.categories[0];
		let res = await fetch(`${PUBLIC_BLOG_URL}/categories/${categoryId}`);
		const category = await res.json();
		categoryName =
			category.name.length > 15 ? `${category.name.substring(0, 15)}...` : category.name;
	});
</script>

<a
	class="group h-full no-underline block"
	href={`/post/${post.slug}`}
	in:fade={{ delay: (index + 1) * 300 }}
	aria-label={post.title}
	itemscope
	itemtype="https://schema.org/BlogPosting"
>
	<div
		class="
            relative 
            flex flex-col 
            h-full 
            bg-surface-100/50 dark:bg-surface-800/30 
            cursor-pointer 
            gap-4 
            p-5 
            rounded-3xl 
            border-[1px]
          border-surface-100/30
            dark:border-surface-800/60
            transition-all 
            duration-400 
            ease-in-out
            shadow-md
            group-hover:shadow-lg
            group-odd:group-hover:border-primary-500 
            group-even:group-hover:border-accent-500 
        "
	>
		<!-- Featured Image -->
		<div
			class="
                relative 
                h-[240px] 
                overflow-hidden 
                transform-gpu 
                transition-transform 
                duration-400 
                ease-out 
                origin-bottom 
                group-hover:scale-[1.05]
                rounded-2xl
            "
		>
			<img
				src={post.featured_media}
				alt={post.title}
				loading="lazy"
				class="
                    w-full 
                    h-full 
                    object-cover 
                    rounded-2xl 
                    border-[1px]
                    border-primary-500
                    transition-transform 
                    duration-400
                    group-hover:scale-110
                "
				itemprop="image"
			/>
			<div
				class="
                    absolute 
                    inset-0 
                    rounded-2xl 
                    bg-primary-500 
                    opacity-20 
                    transition-opacity 
                    duration-300 
                    ease-out 
                    group-hover:opacity-0
                "
			/>
		</div>

		<!-- Post Title & Author -->
		<div class="flex-grow">
			<h2
				class="
                    text-3xl 
                    font-semibold 
                    text-primary-500 dark:text-gray-200
                    line-clamp-2 
                    mb-3 
                    transition-colors 
                    duration-300
                "
				itemprop="headline"
			>
				{@html htmlCodeToSymbol(postTitle)}
			</h2>
			<div
				class="
                    text-sm 
                    text-gray-600 dark:text-gray-400
                    transition-colors 
                    duration-300
                "
				itemprop="author"
			>
				von {post.author}
			</div>
		</div>

		<!-- Post Info: Category | Date | Read Time -->
		<div
			class="
                flex 
                justify-between 
                border-t 
                border-gray-300 dark:border-gray-700 
                -mx-5 
                -mb-5 
                mt-4 
                text-sm 
                text-gray-600 dark:text-gray-400
            "
		>
			<div
				class="
                    p-4 
                    flex-1 
                    text-center 
                    group-odd:text-primary-500 
                    group-even:text-accent-500
                    transition-colors 
                    duration-300
                "
				itemprop="articleSection"
			>
				{@html categoryName}
			</div>
			<div
				class="
                    p-4 
                    flex-1 
                    text-center 
                    border-x 
                    border-gray-300 dark:border-gray-700
                    transition-colors 
                    duration-300
                "
				itemprop="datePublished"
			>
				{post.date}
			</div>
			<div
				class="
                    p-4 
                    flex-1 
                    text-center
                    transition-colors 
                    duration-300
                "
				itemprop="timeRequired"
			>
				{post.reading_time} min Lesezeit
			</div>
		</div>
	</div>
</a>
