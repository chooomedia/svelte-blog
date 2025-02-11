<script lang="ts">
	import { onMount } from 'svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import { JsonLd } from 'svelte-meta-tags';
	import { config } from '../cannacoding.config';
	import fetchPageBySlug from '../../utils/fetchPageBySlug';

	export let pageName: string = 'Fallback Titel';
	export let description: string = 'Fallback Beschreibung';
	export let keywords: string[] = [];
	export let imgUrl: string = '';
	export let imgAlt: string = '';

	if (typeof keywords === 'string') {
		keywords = keywords.split(',');
	} else if (!Array.isArray(keywords)) {
		keywords = [];
	}

	let metaData: any = {};

	function buildOpenGraphImage() {
		if (!imgUrl)
			return [
				{
					url: config.defaultSeoImageUrl,
					alt: config.appDescription,
					width: 1200,
					height: 630,
					secureUrl: config.defaultSeoImageUrl,
					type: 'image/jpeg'
				}
			];

		return [
			{
				url: imgUrl,
				alt: imgAlt || '',
				width: 1200,
				height: 630,
				secureUrl: imgUrl,
				type: 'image/jpeg'
			}
		];
	}

	onMount(async () => {
		try {
			const pageData = await fetchPageBySlug(pageName ? pageName.toLowerCase() : undefined);

			if (pageData) {
				pageName = pageData.title?.rendered || pageName;
				description = pageData.meta?.rank_math_description || config.appDescription;

				// RankMath SEO-Keywords aus den Meta-Daten extrahieren
				const metaKeywords = pageData.meta?.rank_math_focus_keyword;
				keywords = Array.isArray(metaKeywords) ? metaKeywords : metaKeywords?.split(',') || [];

				imgUrl = pageData.featured_media
					? pageData._embedded['wp:featuredmedia'][0]?.source_url
					: '';
				imgAlt = pageData.featured_media ? pageData._embedded['wp:featuredmedia'][0]?.alt_text : '';
			}
		} catch (error) {
			console.error('Fehler beim Abrufen der Meta-Daten:', error);
		}
	});
</script>

<MetaTags
	title={config.appName + (pageName ? ' | ' + pageName : '')}
	description={description || config.appDescription}
	canonical={config.appUrl + (pageName ? '/' + pageName : '')}
	keywords={keywords || config.keywords}
	openGraph={{
		type: 'website',
		url: config.appUrl,
		locale: 'de_DE',
		title: pageName,
		description: description,
		siteName: config.appName,
		images: buildOpenGraphImage()
	}}
/>

<JsonLd
	schema={[
		{
			'@context': 'https://schema.org',
			'@type': 'WebPage',
			name: config.appName,
			description: config.appDescription,
			publisher: {
				'@type': 'Person',
				name: config.ownerFullName,
				contactPoint: {
					'@type': 'ContactPoint',
					email: config.ownerEmail,
					telephone: config.ownerTelephone
				}
			}
		},
		{
			'@context': 'https://schema.org',
			'@type': 'WebApplication',
			name: config.appName,
			url: config.appUrl,
			applicationCategory: config.appCategory,
			operatingSystem: config.appOS,
			copyrightHolder: {
				'@type': 'Person',
				name: config.ownerFullName,
				contactPoint: {
					'@type': 'ContactPoint',
					email: config.ownerEmail,
					telephone: config.ownerTelephone
				}
			}
			// @ts-ignore
			// We disable ts checker because we can't validate the JsonLd schema's type
			// offers: { ...buildOffersSEO() }
		}
	]}
/>
