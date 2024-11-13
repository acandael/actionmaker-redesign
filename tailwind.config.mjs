/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#242222',
				action: '#FA1600'
			},
			fontFamily: {
				avantExtraBold: ['Avantt-ExtraBold', 'sans-serif'],
				
				body: ['Inter', 'sans-serif']
			}
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
