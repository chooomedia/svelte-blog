export interface Post {
	id: number;
	title: string;
	content: string;
	excerpt: string;
	date: string;
	date_gmt: string;
	modified: string;
	modified_gmt: string;
	slug: string;
	link: string;
	better_featured_image?: {
		source_url: string;
		sizes?: {
			large?: string;
		};
	};
	categories: number[];
	author: {
		name: string;
	};
	reading_time: number;
}

export interface BlogPageData {
	page: number;
	posts: Post[];
}
