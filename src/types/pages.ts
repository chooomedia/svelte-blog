export interface Page {
	id: number;
	title: string;
	slug: string;
	content: string;
	excerpt: string;
	meta_description?: string;
	keywords?: string[];
	date: string;
	date_gmt: string;
	modified: string;
	modified_gmt: string;
	link: string;
	better_featured_image?: {
		source_url: string;
		sizes?: {
			large?: string;
		};
	};
}

export interface PageData {
	page: number;
	pages: Page[];
}
