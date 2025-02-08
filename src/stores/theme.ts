import { writable } from 'svelte/store';

// Prüfe, ob localStorage verfügbar ist
const storedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : 'light';
export const theme = writable(storedTheme || 'light');

export function toggleTheme() {
	theme.update((current) => {
		const newTheme = current === 'dark' ? 'light' : 'dark';
		localStorage.setItem('theme', newTheme);
		document.documentElement.classList.toggle('dark', newTheme === 'dark');
		return newTheme;
	});
}

// Theme beim Start setzen
if (typeof window !== 'undefined') {
	document.documentElement.classList.toggle('dark', storedTheme === 'dark');
}
