import { PUBLIC_BLOG_URL } from '$env/static/public';

const fetchPageBySlug = async (slug: string) => {
	const response = await fetch(`${PUBLIC_BLOG_URL}/pages?_embed&slug=${slug}`);
	const pages = await response.json();
	return pages[0];
};

export default fetchPageBySlug;
