import convertUnicodeToString from './htmlCodeToSymbol';

const transformWordPressPage = (page: any) => {
	const {
		title,
		content,
		excerpt,
		date_gmt,
		modified_gmt,
		slug,
		id,
		better_featured_image,
		_embedded,
		meta
	} = page;

	// Fallback für fehlende SEO-Metadaten
	const metaDescription = meta?.meta_description || excerpt?.rendered || '';
	const keywords = meta?.keywords || [];
	const featuredImage =
		better_featured_image?.source_url || _embedded?.['wp:featuredmedia']?.[0]?.source_url || '';

	return {
		id,
		title: convertUnicodeToString(title.rendered),
		content: content.rendered,
		excerpt: excerpt.rendered || '',
		meta_description: metaDescription,
		keywords: keywords,
		date: formatDate(date_gmt),
		modified: modified_gmt || date_gmt,
		slug,
		link: page.link,
		featured_media: featuredImage
	};
};

// Datum ins richtige Format konvertieren
export const formatDate = (date: string) => {
	const newDate = new Date(date);
	const options = { year: 'numeric', month: 'short', day: 'numeric' };
	return newDate.toLocaleDateString('de-DE', options);
};

export default transformWordPressPage;
