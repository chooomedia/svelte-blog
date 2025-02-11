import convertUnicodeTOString from './htmlCodeToSymbol';

const transformWordPressPost = (post: any) => {
	const {
		title,
		content,
		excerpt,
		date_gmt,
		modified_gmt,
		slug,
		categories,
		id,
		featured_media,
		better_featured_image,
		_embedded,
		meta
	} = post;

	const author = _embedded?.author?.[0]?.name || 'Cannachris';
	const metaDescription = meta?.rank_math_description || excerpt?.rendered || '';
	const keywords = meta?.rank_math_focus_keyword
		? meta.rank_math_focus_keyword
				.split(',')
				.map((k: string) => k.trim())
				.filter(Boolean)
		: [];

	return {
		id,
		title: convertUnicodeTOString(title.rendered),
		content: content.rendered,
		excerpt: excerpt.rendered,
		meta_description: metaDescription,
		date: formatDate(date_gmt),
		modified: modified_gmt || date_gmt,
		slug,
		link: post.link,
		featured_media: better_featured_image?.source_url || featured_media,
		categories,
		author: author,
		reading_time: getReadingTime(content.rendered),
		keywords: keywords
	};
};

// convert date to readable format
export const formatDate = (date: string) => {
	const newDate = new Date(date);
	const options = { year: 'numeric', month: 'short', day: 'numeric' };
	return newDate.toLocaleDateString('de-DE', options);
};

// get reading time
export const getReadingTime = (content: string) => {
	const wordsPerMinute = 200;
	const noOfWords = content.split(/\s/g).length;
	const minutes = noOfWords / wordsPerMinute;
	const readTime = Math.ceil(minutes);
	return readTime;
};

export default transformWordPressPost;
