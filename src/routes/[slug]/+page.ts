import fetchPageBySlug from '../../utils/fetchPageBySlug';

export const load = async ({ params }) => {
	const page = await fetchPageBySlug(params.slug);

	return { page };
};
