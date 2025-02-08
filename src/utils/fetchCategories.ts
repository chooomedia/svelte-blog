import { PUBLIC_BLOG_URL } from '$env/static/public';

const transformWordPressCategory = (category: any) => ({
	id: category.id,
	name: category.name,
	slug: category.slug
});

const fetchCategories = async () => {
	const response = await fetch(`${PUBLIC_BLOG_URL}/categories`);
	const categories = await response.json();
	return categories.map(transformWordPressCategory);
};

export default fetchCategories;
