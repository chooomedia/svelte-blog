<script lang="ts">
	import * as Accordion from '../components/accordion/index';
	import { config } from '$lib/cannacoding.config';
	import { JsonLd } from 'svelte-meta-tags';

	// Props für die FAQ
	export let faqs: {
		question: string;
		answer: string;
	}[] = [];

	// Svelte 5: `type` direkt exportieren für mehr Flexibilität
	export let type: 'single' | 'multiple' = 'multiple';

	// Structured Data (SEO)
	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqs.map((faq) => ({
			'@type': 'Question',
			name: faq.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: faq.answer
			}
		}))
	};
</script>

<!-- ✅ SEO JSON-LD für strukturierte FAQ-Daten -->
<JsonLd {structuredData} />

<div class="grid grid-cols-1 my-10">
	<div class="text-center mb-5">
		<h3 class="text-2xl lg:text-3xl font-bold">Frequently Asked Questions</h3>
		<p class="text-md text-muted-foreground">
			Have another question? Contact me on the
			<a class="underline hover:text-primary" href="/contact">Contact page</a>
			or by
			<a class="underline hover:text-primary" href={`mailto:${config.emailContact}`}>Email</a>
		</p>
	</div>

	<!-- ✅ Dynamisch geladene FAQs -->
	{#if faqs.length > 0}
		<Accordion.Root {type}>
			{#each faqs as faq, i}
				<Accordion.Item value={`item-${i}`}>
					<Accordion.Trigger class="text-base md:text-lg lg:text-2xl">
						{faq.question}
					</Accordion.Trigger>
					<Accordion.Content class="content text-left text-lg font-thin">
						{@html faq.answer}
					</Accordion.Content>
				</Accordion.Item>
			{/each}
		</Accordion.Root>
	{:else}
		<p class="text-center text-lg text-muted-foreground">No FAQs available.</p>
	{/if}
</div>
