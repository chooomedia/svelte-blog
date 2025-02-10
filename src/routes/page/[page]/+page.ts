import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const page = Number(params.page);

	// Falls `page` ungültig ist oder kleiner als 1 → Fehler werfen
	if (isNaN(page) || page < 1) {
		throw error(404, 'Seite nicht gefunden');
	}

	return { page };
}
