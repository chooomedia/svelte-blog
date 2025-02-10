<script lang="ts">
	import { onMount } from 'svelte';
	import PostsContainer from '../components/PostsContainer.svelte';
	import PagesContainer from '../components/PagesContainer.svelte';
	import Newsticker from '../components/Newsticker.svelte';
	import type { Post } from '../types/posts';
	import type { Page } from '../types/pages';
	import fetchPosts from '../utils/fetchPosts';
	import fetchPages from '../utils/fetchPages';

	let posts: Post[] = [];
	let pages: Page[] = [];
	let loading = true;

	onMount(async () => {
		posts = [];
		pages = [];
		posts = await fetchPosts();
		pages = await fetchPages();
		loading = false;
	});
</script>

<div class="px-4 md:px-8">
	<PostsContainer {posts} {loading} />
	<PagesContainer {pages} />
</div>
<div class="relative w-full m-0 p-0">
	<Newsticker {posts} speed={80} pauseOnHover={true} />
</div>
