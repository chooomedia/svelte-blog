import fetchPageBySlug from '../../utils/fetchPageBySlug';

export const load = async ({ params }) => {
	const page = await fetchPageBySlug(params.slug);

	if (params.slug === 'favicon.ico') {
		return {
			status: 404,
			error: new Error('Favicon.ico nicht gefunden')
		};
	}

	return { page };
};
