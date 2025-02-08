/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['"Comfortaa Variable"', 'sans-serif']
		},
		extend: {
			fontSize: {
				h1: '4rem',
				h2: '3.2rem',
				h3: '2.4rem',
				h4: '2rem',
				h5: '1.8rem',
				h6: '1.6rem',
				base: '1.6rem',
				sm: '1rem',
				xs: '0.75rem'
			},
			colors: {
				primary: {
					50: '#e6f4e6',
					100: '#cce9cc',
					200: '#99d399',
					300: '#66bd66',
					400: '#33a733',
					500: '#13890e', // base primary
					600: '#0f6e0b',
					700: '#0b5208',
					800: '#073705',
					900: '#041b03'
				},
				secondary: {
					50: '#e8f5e9',
					100: '#d1ebd2',
					200: '#a3d7a5',
					300: '#75c378',
					400: '#47af4b',
					500: '#388e3c', // base secondary
					600: '#2d7230',
					700: '#225524',
					800: '#163918',
					900: '#0b1c0c'
				},
				accent: {
					50: '#fff3e0',
					100: '#ffe7c2',
					200: '#ffcf85',
					300: '#ffb847',
					400: '#ffb03b',
					500: '#ffa726', // base accent
					600: '#cc861e',
					700: '#996417',
					800: '#66430f',
					900: '#332108'
				},
				surface: {
					50: '#f5f5f5', // text
					100: '#e6e6e6',
					200: '#cccccc',
					300: '#b3b3b3',
					400: '#999999',
					500: '#808080',
					600: '#666666',
					700: '#4d4d4d',
					800: '#333333',
					900: '#212121' // background
				}
			}
		}
	},
	variants: {
		extend: {
			textColor: ['dark'],
			backgroundColor: ['dark']
		}
	},
	plugins: []
};
