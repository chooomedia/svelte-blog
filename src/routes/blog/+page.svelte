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

	let faqs = [
		{ question: 'Was ist Svelte?', answer: 'Svelte ist ein Frontend-Framework für Web-Apps.' },
		{
			question: 'Warum Svelte verwenden?',
			answer: 'Svelte ist schneller und benötigt weniger Code.'
		},
		{
			question: 'Unterstützt Svelte TypeScript?',
			answer: 'Ja, Svelte unterstützt TypeScript out of the box.'
		}
	];
</script>

<section class="pt-16 px-4 md:px-8">
	<!-- Anzeige der Blog-Posts -->
	<PostsContainer {posts} {loading} currentPage={page} />

	<Faq {faqs} type="multiple" />
</section>
