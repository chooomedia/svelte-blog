<script lang="ts">
	import PostsContainer from '../../components/PostsContainer.svelte';
	import type { Post, BlogPageData } from '../../types/posts.js';
	import { afterNavigate } from '$app/navigation';
	import fetchPosts from '../../utils/fetchPosts.js';

	export let data: BlogPageData;

	let posts: Post[] = data.posts;
	let page: number = data.page;
	let loading = false;

	afterNavigate(async () => {
		loading = true;
		posts = await fetchPosts(page);
		loading = false;
	});
</script>

<section>
	<h1 class="text-3xl font-bold text-primary-500">📢 Blog</h1>

	<!-- Anzeige der Blog-Posts -->
	<PostsContainer {posts} {loading} currentPage={page} />
</section>
