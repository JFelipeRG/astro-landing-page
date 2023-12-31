/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
        "BeVietnamPro" : "BeVietnamPro, system-ui "
      },
      colors: {
        "bright-red": "hsl(12, 88%, 59%)",
        "dark-blue": "hsl(228, 39%, 23%)",
        "hard-dark-blue": "hsl(233, 12%, 13%)"
      },
      backgroundImage : {
        "desktop-simplify": "url('../src/assets/images/bg-simplify-section-desktop.svg')"
      }
		},
	},
	plugins: [],
}
