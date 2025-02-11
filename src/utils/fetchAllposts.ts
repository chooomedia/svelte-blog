import fetchPosts from './fetchPosts';

async function fetchAllPosts(): Promise<Post[]> {
	let page = 1;
	let allPosts: Post[] = [];

	while (true) {
		try {
			const fetchedPosts = await fetchPosts(page);

			if (fetchedPosts.length === 0) {
				console.log(`✅ Keine weiteren Posts ab Seite ${page}.`);
				break; // Stoppt die Schleife, wenn keine weiteren Artikel existieren
			}

			allPosts = [...allPosts, ...fetchedPosts];
			page++;
		} catch (error) {
			console.error(`🚨 Fehler beim Abrufen von Seite ${page}:`, error);
			break; // Stoppt die Schleife bei einem API-Fehler
		}
	}

	console.log(`🔄 Gesamt geladene Posts: ${allPosts.length}`);
	return allPosts;
}

export default fetchAllPosts;
