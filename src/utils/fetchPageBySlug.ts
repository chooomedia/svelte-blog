import { PUBLIC_BLOG_URL } from '$env/static/public';

const fetchPageBySlug = async (slug?: string) => {
	let url;

	if (!slug) {
		// Wenn kein Slug vorhanden ist (Startseite), lade die Seite mit ID 62
		url = `${PUBLIC_BLOG_URL}/pages/2554?_embed`; //TODO Cleaner!
		console.log('🏠 Lade Startseite mit ID 2554...');
	} else {
		url = `${PUBLIC_BLOG_URL}/pages?_embed&slug=${slug}`;
	}

	try {
		const response = await fetch(url);
		if (!response.ok) {
			console.error(`❌ Fehler beim Laden der Seite: ${response.statusText}`);
			return null;
		}

		const data = await response.json();
		return slug ? data[0] : data; // Falls ein Slug vorhanden ist, nimm das erste Ergebnis
	} catch (error) {
		console.error('❌ Fehler beim Abrufen der Seite:', error);
		return null;
	}
};

export default fetchPageBySlug;
