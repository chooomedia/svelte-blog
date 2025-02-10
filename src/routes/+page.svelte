<script lang="ts">
	import { onMount } from 'svelte';
	import PostsContainer from '../components/PostsContainer.svelte';
	import type { Post } from '../types/posts';
	import fetchPosts from '../utils/fetchPosts';
	import Newsticker from '../components/Newsticker.svelte';

	let posts: Post[] = [];
	let loading = true;

	onMount(async () => {
		posts = await fetchPosts();
		loading = false;
	});
</script>

<PostsContainer {posts} {loading} />
<div class="relative w-screen left-1/2 -translate-x-1/2">
	<Newsticker {posts} speed={80} pauseOnHover={true} />
</div>
