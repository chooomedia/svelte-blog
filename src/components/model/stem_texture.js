// Diese Code-Snippets zeigen, wie man die erforderlichen Texturen für die Cannabis-Pflanze erstellen kann
// Diese Texturen sollten im static/textures Ordner gespeichert werden

/*
 * 1. Cannabis Stem Texture (stem_texture.js)
 * Diese Textur erzeugt ein holzähnliches Muster für den Stängel
 */

const canvas = document.createElement('canvas');
canvas.width = 512;
canvas.height = 512;
const ctx = canvas.getContext('2d');

// Hintergrundfarbe (braun)
ctx.fillStyle = '#5D4037';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Vertikale Holzmaserung
for (let y = 0; y < canvas.height; y += 2) {
	// Zufällige Farbvariation
	const colorVariation = Math.random() * 20 - 10;
	const r = 93 + colorVariation;
	const g = 64 + colorVariation;
	const b = 55 + colorVariation;

	ctx.strokeStyle = `rgb(${r}, ${g}, ${b})`;
	ctx.lineWidth = 1;

	// Zufällige Verschiebung
	const xOffset = Math.random() * 5 - 2.5;

	ctx.beginPath();
	ctx.moveTo(xOffset, y);
	ctx.lineTo(canvas.width + xOffset, y);
	ctx.stroke();
}

// Textur als Bild herunterladen
canvas.toBlob(function (blob) {
	const link = document.createElement('a');
	link.download = 'cannabis_stem.png';
	link.href = URL.createObjectURL(blob);
	link.click();
});

/*
 * 2. Cannabis Leaf Texture (leaf_texture.js)
 * Diese Textur erzeugt ein detailliertes Blattmuster
 */

const canvas = document.createElement('canvas');
canvas.width = 512;
canvas.height = 512;
const ctx = canvas.getContext('2d');

// Hintergrundfarbe (grün)
ctx.fillStyle = '#2E7D32';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Blattadern
function drawVeins() {
	// Hauptader
	ctx.strokeStyle = '#1B5E20';
	ctx.lineWidth = 4;
	ctx.beginPath();
	ctx.moveTo(canvas.width / 2, 0);
	ctx.lineTo(canvas.width / 2, canvas.height);
	ctx.stroke();

	// Seitenadern
	ctx.lineWidth = 2;
	for (let i = 1; i < 10; i++) {
		const y = i * (canvas.height / 10);

		// Linke Ader
		ctx.beginPath();
		ctx.moveTo(canvas.width / 2, y);
		ctx.bezierCurveTo(
			canvas.width / 2 - 50,
			y + 10,
			canvas.width / 2 - 100,
			y + 5,
			canvas.width / 2 - 150,
			y - 10
		);
		ctx.stroke();

		// Rechte Ader
		ctx.beginPath();
		ctx.moveTo(canvas.width / 2, y);
		ctx.bezierCurveTo(
			canvas.width / 2 + 50,
			y + 10,
			canvas.width / 2 + 100,
			y + 5,
			canvas.width / 2 + 150,
			y - 10
		);
		ctx.stroke();
	}

	// Feine Strukturen
	ctx.lineWidth = 0.5;
	ctx.strokeStyle = '#388E3C';
	for (let i = 0; i < 100; i++) {
		const x = Math.random() * canvas.width;
		const y = Math.random() * canvas.height;
		const length = 10 + Math.random() * 30;
		const angle = Math.random() * Math.PI;

		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.lineTo(x + Math.cos(angle) * length, y + Math.sin(angle) * length);
		ctx.stroke();
	}
}

// Textur-Variation
function addTexture() {
	// Farbvariation
	for (let x = 0; x < canvas.width; x++) {
		for (let y = 0; y < canvas.height; y++) {
			if (Math.random() > 0.995) {
				ctx.fillStyle = `rgba(255, 255, 255, 0.1)`;
				ctx.fillRect(x, y, 2, 2);
			}
			if (Math.random() > 0.995) {
				ctx.fillStyle = `rgba(0, 0, 0, 0.1)`;
				ctx.fillRect(x, y, 2, 2);
			}
		}
	}
}

drawVeins();
addTexture();

// Textur als Bild herunterladen
canvas.toBlob(function (blob) {
	const link = document.createElement('a');
	link.download = 'cannabis_leaf.png';
	link.href = URL.createObjectURL(blob);
	link.click();
});

/*
 * 3. Cannabis Bud Texture (bud_texture.js)
 * Diese Textur erzeugt ein komplexes Knospenmuster
 */

const canvas = document.createElement('canvas');
canvas.width = 512;
canvas.height = 512;
const ctx = canvas.getContext('2d');

// Hintergrundfarbe (hellgrün)
ctx.fillStyle = '#558B2F';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Trichome (kleine weiße Punkte)
function drawTrichomes() {
	ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';

	for (let i = 0; i < 5000; i++) {
		const x = Math.random() * canvas.width;
		const y = Math.random() * canvas.height;
		const size = Math.random() * 2 + 0.5;

		ctx.beginPath();
		ctx.arc(x, y, size, 0, Math.PI * 2);
		ctx.fill();
	}
}

// Bud-Struktur
function drawBudStructure() {
	// Strukturlinien
	ctx.strokeStyle = '#33691E';

	for (let i = 0; i < 100; i++) {
		const x = Math.random() * canvas.width;
		const y = Math.random() * canvas.height;
		const size = 10 + Math.random() * 30;

		ctx.lineWidth = 1 + Math.random() * 2;

		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.bezierCurveTo(x + size, y + size, x - size, y + size * 2, x + size / 2, y + size * 3);
		ctx.stroke();
	}

	// Orange "Haare" (Pistillen)
	ctx.strokeStyle = '#FF9800';

	for (let i = 0; i < 50; i++) {
		const x = Math.random() * canvas.width;
		const y = Math.random() * canvas.height;
		const length = 5 + Math.random() * 15;
		const angle = Math.random() * Math.PI * 2;

		ctx.lineWidth = 0.5 + Math.random();

		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.quadraticCurveTo(
			x + (Math.cos(angle) * length) / 2 + Math.random() * 10 - 5,
			y + (Math.sin(angle) * length) / 2 + Math.random() * 10 - 5,
			x + Math.cos(angle) * length,
			y + Math.sin(angle) * length
		);
		ctx.stroke();
	}
}

// Textur-Details
function addDetails() {
	// Farbvariationen
	for (let x = 0; x < canvas.width; x += 4) {
		for (let y = 0; y < canvas.height; y += 4) {
			if (Math.random() > 0.7) {
				const green = 120 + Math.random() * 40;
				ctx.fillStyle = `rgba(0, ${green}, 0, 0.1)`;
				ctx.fillRect(x, y, 4, 4);
			}
		}
	}
}

drawBudStructure();
addDetails();
drawTrichomes();

// Textur als Bild herunterladen
canvas.toBlob(function (blob) {
	const link = document.createElement('a');
	link.download = 'cannabis_bud.png';
	link.href = URL.createObjectURL(blob);
	link.click();
});
