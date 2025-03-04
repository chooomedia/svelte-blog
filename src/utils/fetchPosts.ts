import { PUBLIC_BLOG_URL } from '$env/static/public';
import transformWordPressPost from './transformWordPressPost';

const fetchPosts = async (page: number = 1) => {
	const response = await fetch(`${PUBLIC_BLOG_URL}/posts?_embed&page=${page}&per_page=9`);

	if (!response.ok) {
		throw new Error(`Fehler beim Laden des Artikels (Artikels ${page}): ${response.statusText}`);
	}

	const posts = await response.json();
	return posts.map(transformWordPressPost);
};

export default fetchPosts;
