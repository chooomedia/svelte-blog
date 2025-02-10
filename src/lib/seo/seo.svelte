<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags';
	import { JsonLd } from 'svelte-meta-tags';
	import { config } from '../cannacoding.config';
	//import { type ProductWithVariants } from '$lib/server/database/productService';

	// Props für SEO-Daten
	export let pageName: string = '';
	export let description: string = '';
	export let keywords: string[] = [];
	export let imgUrl: string = '';
	export let imgAlt: string = '';
	//export let products?: ProductWithVariants;

	/*function buildOffersSEO() {
		if (!products) return null;
		const offers = [];

		for (let product of products) {
			for (let variant of product.variants) {
				const newOffer = {
					'@type': 'Offer',
					priceSpecification: {
						'@type': 'UnitPriceSpecification',
						name: product.name,
						url: config.appUrl,
						price: variant.price,
						priceCurrency: 'USD',
						referenceQuantity: {
							'@type': 'QuantitativeValue',
							value: '1',
							unitCode: variant.billingPeriod === 'monthly' ? 'MON' : 'ANN'
						}
					}
				};
				offers.push(newOffer);
			}
		}

		return {
			'@type': 'AggregateOffer',
			offers: offers
		};
	}*/

	function buildOpenGraphImage() {
		if (!imgUrl) return null;

		return [
			{
				url: imgUrl,
				alt: imgAlt ?? '',
				width: 800,
				height: 600,
				secureUrl: imgUrl,
				type: 'image/jpeg'
			}
		];
	}
</script>

<MetaTags
	title={config.appName + (pageName ? ' | ' + pageName : '')}
	description={description || config.appDescription}
	canonical={config.appUrl + (pageName ? '/' + pageName : '')}
	keywords={[...config.appKeywords, ...(keywords || [])]}
	openGraph={{
		type: 'website',
		url: config.appUrl,
		locale: 'de_DE',
		title: pageName,
		description: description,
		siteName: config.appName,
		images: buildOpenGraphImage() || [
			{
				url: config.defaultSeoImageUrl,
				alt: config.appDescription,
				width: 800,
				height: 600,
				secureUrl: config.defaultSeoImageUrl,
				type: 'image/jpeg'
			}
		]
	}}
	facebook={config.seoFacebookAppId ? { appId: config.seoFacebookAppId } : undefined}
	twitter={config.seoTwitterCreator
		? {
				creator: config.seoTwitterCreator,
				site: '@site',
				cardType: 'summary_large_image',
				title: pageName,
				description: description,
				image: config.seoTwitterImage,
				imageAlt: config.seoTwitterAlt
			}
		: undefined}
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
