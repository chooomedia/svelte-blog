<script lang="ts">
	import { fade } from 'svelte/transition';
	import PageHero from '../../components/page/PageHero.svelte';
	import PageBody from '../../components/page/PageBody.svelte';
	import transformWordPressPage from '../../utils/transformWordPressPage';

	export let data: any;

	const { page } = data;
	const transformedPage = transformWordPressPage(page);
</script>

<section in:fade={{ delay: 500, duration: 500 }} out:fade>
	<PageHero page={transformedPage} />
	<PageBody content={transformedPage.content} />
</section>
