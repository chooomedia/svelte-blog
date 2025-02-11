<script lang="ts">
	import { onMount } from 'svelte';
	import '@fontsource-variable/comfortaa';
	import Header from '../components/Header.svelte';
	import { fade } from 'svelte/transition';
	import Newsticker from '../components/Newsticker.svelte';
	import Footer from '../components/Footer.svelte';
	import '../app.css';
	import Seo from '$lib/seo/Seo.svelte';

	import type { Post } from '../types/posts';
	import fetchPosts from '../utils/fetchPosts';

	let posts: Post[] = [];
	let loading = true;

	let isDarkMode = false;

	export let data: {
		pageData?: any;
		postData?: any;
		blogPosts?: any;
		seoData?: any;
		isHomepage: boolean;
		isPostPage: boolean;
	};

	// Fallback für `seoData`, falls undefined
	let seoData = data.seoData || {
		title: 'Fallback Titel',
		description: 'Fallback Beschreibung',
		keywords: [],
		imgUrl: '',
		imgAlt: ''
	};

	function toggleDarkMode() {
		isDarkMode = !isDarkMode;
		document.documentElement.classList.toggle('dark', isDarkMode);
	}

	onMount(async () => {
		posts = [];
		posts = await fetchPosts();
		loading = false;
	});
</script>

<div class="min-h-screen bg-white dark:bg-surface-900 text-gray-900 dark:text-white">
	<Seo
		pageName={seoData.title}
		description={seoData.description}
		keywords={seoData.keywords}
		imgUrl={seoData.imgUrl}
		imgAlt={seoData.imgAlt}
	/>

	<Header on:toggleDarkMode={toggleDarkMode} />

	<main class="w-full md:w-full 2xl:max-w-[1140px] mx-auto" in:fade={{ delay: 100 }}>
		<slot />
	</main>

	<section class="relative w-full m-0 p-0">
		<Newsticker {posts} speed={80} pauseOnHover={true} />
	</section>

	<Footer on:toggleDarkMode={toggleDarkMode} />
</div>
