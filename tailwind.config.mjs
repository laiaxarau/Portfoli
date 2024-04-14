/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		"./node_modules/flowbite/**/*.js"],
	theme: {
		extend: {
			colors: {
				
				'verd': '#032b40',
				'verdclar': '#29607D',
				// 'verd':'#646A6D',
				'lila': '#180340',
				'granate': '#400322',
				'mostassa': '#5c5104',
				'rosa':'#5c0430',
				'verdplom':'#043d5c',

				'fondo': '#355070',
				'fondo2': '#1d273f',
				'headers':'#243c5a',
				'lletra':'#333',
				


			}
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
