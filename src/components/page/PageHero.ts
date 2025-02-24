export interface PageHeroProps {
	title?: string;
	meta_description?: string;
	_embedded?: {
		['wp:featuredmedia']?: {
			media_details?: {
				sizes?: {
					medium?: {
						source_url: string;
					};
				};
			};
		}[];
	};
}
