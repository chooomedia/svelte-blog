import fetchPostBySlug from '../../../utils/fetchPostBySlug';
import fetchCategories from '../../../utils/fetchCategories';

export const load = async ({ params }) => {
	const post = await fetchPostBySlug(params.slug);
	const categories = await fetchCategories();

	return {
		post,
		categories
	};
};
