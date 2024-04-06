/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: ["./*.{html,js}"],
	theme: {
		container: {
			center: true,
		},
		colors: {
			accent: "#00B2A9",
			white: "#FFFFFF",
			offwhite: "#818d93",
			black: "#08202C",
			black1: "#5F6E75",
			black2: "#EAECF0",
			gray: "#F1F1F5",
			active: "#F0F9FF",
			inactive: "#ECFDF3",
			archive: "#F9FAFB",
			bodyBg: "#FCFCFD",
			line: "#00000014",
			transparent: "#00000000",
		},
		fontFamily: {
			roboto: ["Roboto", "sans-serif"],
		},
		extend: {
			borderRadius: {
				std: "0.6rem",
				"std-1/2": "0.3rem",
			},
			boxShadow: {
				component: "1px 1px 3px #818D9314",
			},
		},
	},
	plugins: [],
};
