<script lang="ts">
	import { onMount } from 'svelte';
	import PostsContainer from '../components/PostsContainer.svelte';
	import PlantWrapper from '../components/PlantWrapper.svelte';

	import type { Post } from '../types/posts';
	import fetchPosts from '../utils/fetchPosts';

	let posts: Post[] = [];
	let loading = true;

	onMount(async () => {
		posts = [];
		posts = await fetchPosts();
		loading = false;
	});
</script>

<div class="px-4 md:px-8">
	<PostsContainer {posts} {loading} />
</div>
