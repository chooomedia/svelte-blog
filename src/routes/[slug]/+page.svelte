<script lang="ts">
	import { fade } from 'svelte/transition';
	import { afterNavigate } from '$app/navigation';
	import PageBody from '../../components/page/PageBody.svelte';
	import transformWordPressPage from '../../utils/transformWordPressPage';
	import fetchPageBySlug from '../../utils/fetchPageBySlug';

	export let data: any;
	let page = data.page;
	let transformedPage = transformWordPressPage(page);

	// Bei Routenwechsel die neue Seite laden
	afterNavigate(async ({ to }) => {
		if (to) {
			const slug = to.url.pathname.split('/').pop();
			page = await fetchPageBySlug(slug);
			transformedPage = transformWordPressPage(page);
		}
	});
</script>

<section
	class=" bg-slate-100/80 dark:bg-surface-900/80 backdrop-blur-3xl"
	in:fade={{ delay: 500, duration: 500 }}
	out:fade={{ duration: 400 }}
>
	<PageBody content={transformedPage.content} />
</section>
