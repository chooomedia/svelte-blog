<script lang="ts">
	import { fade } from 'svelte/transition';
	import PostBody from '../../../components/post/PostBody.svelte';
	import PostHero from '../../../components/post/PostHero.svelte';
	import transformWordPressPost from '../../../utils/transformWordPressPost';

	export let data: any;

	const { post, categories } = data;
	const transformedPost = transformWordPressPost(post);
</script>

<section in:fade={{ delay: 500, duration: 500 }} out:fade>
	<PostHero post={transformedPost} {categories} />
	<PostBody content={post?.content?.rendered} />
</section>
