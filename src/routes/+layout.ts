import type { LayoutLoad } from './$types';
import fetchPageBySlug from '../utils/fetchPageBySlug';
import fetchPostBySlug from '../utils/fetchPostBySlug';

export const load: LayoutLoad = async ({ fetch, url }) => {
	console.log('🌍 Aktuelle Route:', url.pathname);

	let seoData = {
		title: 'Fallback Titel',
		description: 'Fallback Beschreibung',
		keywords: [''],
		imgUrl: '',
		imgAlt: ''
	};

	let pageData = null;
	let postData = null;

	try {
		const slug = url.pathname === '/' ? null : url.pathname.split('/').pop();

		if (slug) {
			pageData = await fetchPageBySlug(slug);
		} else {
			console.log('🏠 Lade Startseite mit ID 62...');
			pageData = await fetchPageBySlug();
		}

		if (!pageData && slug) {
			postData = await fetchPostBySlug(slug);
		}

		const source = pageData || postData;
		if (source) {
			seoData = {
				title: source.title?.rendered || 'Standard-Titel',
				description: source.meta?.rank_math_description || 'Keine Beschreibung verfügbar',
				keywords: source.meta?.rank_math_focus_keyword || [],
				imgUrl: source._embedded?.['wp:featuredmedia']?.[0]?.source_url || '',
				imgAlt: source._embedded?.['wp:featuredmedia']?.[0]?.alt_text || ''
			};
		} else {
			console.warn('⚠️ Keine Seite oder Post mit dem Slug gefunden:', slug);
		}
	} catch (error) {
		console.error('❌ Fehler beim Laden der WordPress-Daten:', error);
	}

	return {
		pageData,
		postData,
		seoData
	};
};
