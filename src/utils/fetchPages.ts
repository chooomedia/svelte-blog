import { PUBLIC_BLOG_URL } from '$env/static/public';
import transformWordPressPage from './transformWordPressPage';

const fetchPages = async (page: number) => {
	const response = await fetch(`${PUBLIC_BLOG_URL}/posts?_embed&page=${page}&per_page=9`);

	if (!response.ok) {
		throw new Error(`Fehler beim Laden des Artikels (Artikels ${page}): ${response.statusText}`);
	}

	const pages = await response.json();
	return pages.map(transformWordPressPage);
};

export default fetchPages;
