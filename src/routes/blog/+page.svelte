<script lang="ts">
	import PostsContainer from '../../components/PostsContainer.svelte';
	import type { Post, BlogPageData } from '../../types/posts.ts';
	import { afterNavigate } from '$app/navigation';
	import fetchPosts from '../../utils/fetchPosts.js';
	import { config } from '$lib/cannacoding.config';
	import type { RequestEvent } from '@sveltejs/kit';
	import Faq from '../../components/Faq.svelte';

	export let data: BlogPageData;
	export async function load(event: RequestEvent) {
		return {
			// For meta tags
			pageName: data.posts.title.rendered,
			description: config.appDescription
		};
	}

	let posts: Post[] = data.posts;
	let page: number = data.page;
	let loading = false;

	afterNavigate(async () => {
		loading = true;
		posts = await fetchPosts(page);
		loading = false;
	});
</script>

<section class="pt-16 px-4 md:px-8">
	<h1 class="text-5xl font-bold text-primary-500">📢 Blog</h1>

	<!-- Anzeige der Blog-Posts -->
	<PostsContainer {posts} {loading} currentPage={page} />

	<Faq />
</section>
