<script lang="ts">
	import PostsGrid from '../components/PostsGrid.svelte';
	import type { Post } from '../types/posts';
	import Container from './Container.svelte';

	export let posts: Post[] = [];
	export let loading = false;

	export let currentPage: number = 1;
</script>

<Container>
	<PostsGrid {posts} {loading} {currentPage} />
</Container>
