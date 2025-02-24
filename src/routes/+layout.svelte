<script lang="ts">
	import { onMount } from 'svelte';
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	import '@fontsource-variable/comfortaa';
	import Header from '../components/Header.svelte';
	import { fade } from 'svelte/transition';
	import Newsticker from '../components/Newsticker.svelte';
	import Footer from '../components/Footer.svelte';
	import '../app.css';
	import Seo from '$lib/seo/Seo.svelte';
	import Plant from '../components/PlantWrapper.svelte';
	import PageHero from '../components/Page/PageHero.svelte';
	import PagesContainer from '../components/PagesContainer.svelte';

	import type { Post } from '../types/posts';
	import fetchPosts from '../utils/fetchPosts';
	import fetchPageBySlug from '../utils/fetchPageBySlug';

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

	let pageData = data.pageData;
	let seoData = data.seoData;
	let currentRoute = '';

	function toggleDarkMode() {
		isDarkMode = !isDarkMode;
		document.documentElement.classList.toggle('dark', isDarkMode);
	}

	// Routenwechsel erkennen & Page-Daten aktualisieren
	beforeNavigate(() => {
		loading = true;
	});

	afterNavigate(async ({ to }) => {
		if (!to) return;
		currentRoute = to.url.pathname;

		const slug = to.url.pathname === '/' ? null : to.url.pathname.split('/').pop();
		pageData = slug ? await fetchPageBySlug(slug) : await fetchPageBySlug();

		seoData = {
			title: pageData?.title?.rendered || 'Fallback Titel',
			description: pageData?.meta?.rank_math_description || 'Fallback Beschreibung',
			keywords: Array.isArray(pageData?.meta?.rank_math_focus_keyword)
				? pageData?.meta?.rank_math_focus_keyword
				: pageData?.meta?.rank_math_focus_keyword
					? [pageData?.meta?.rank_math_focus_keyword]
					: [],
			imgUrl: pageData?._embedded?.['wp:featuredmedia']?.[0]?.source_url || '',
			imgAlt: pageData?._embedded?.['wp:featuredmedia']?.[0]?.alt_text || ''
		};
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

	<!-- Header bleibt, aber wird aktualisiert -->
	<Header {currentRoute} on:toggleDarkMode={toggleDarkMode} />

	<PagesContainer>
		<!-- Dynamisches PageHero -->
		<PageHero page={{ title: seoData.title, meta_description: seoData.description }} />

		<main class="w-full md:w-full 2xl:max-w-[1140px] mx-auto" in:fade={{ delay: 100 }}>
			<Plant />
			<slot />
		</main>
	</PagesContainer>

	<section class="relative w-full m-0 p-0">
		<Newsticker {posts} speed={80} pauseOnHover={true} />
	</section>

	<Footer on:toggleDarkMode={toggleDarkMode} />
</div>
