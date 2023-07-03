/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			//extend font add poppins,jost,robot-mono
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				jost: ['Jost', 'sans-serif'],
				robot: ['Roboto Mono', 'monospace']
				
			}
		}
	},

	plugins: []
};

module.exports = config;
