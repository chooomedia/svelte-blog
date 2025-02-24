import fetchPageBySlug from '../../utils/fetchPageBySlug';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	if (params.slug === 'favicon.ico') {
		throw new Error('404: Favicon nicht gefunden');
	}

	const page = await fetchPageBySlug(params.slug);

	if (!page) {
		return {
			status: 404,
			error: new Error(`Seite "${params.slug}" nicht gefunden`)
		};
	}

	return { page };
};
