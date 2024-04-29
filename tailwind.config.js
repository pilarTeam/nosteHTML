/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: ["./*.{html,js}", "./form-bashar/**/*.{html,js}", "./form-joy/**/*.{html,js}", "./form-raihan/**/*.{html,js}"],
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

			// ---------Kamrul Vai------------

			heading: "#101828",
			text: "#344054",
			lightGray: "#818D93",
			graybg: "#FCFCFD",
			gray: "#E1E1EA",
			green: "#06F9B7",
			darkGray: "#586B74",
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
				input: "0px 0px 5px 2px rgb(81,244,200,44%)",
			},
		},
	},
	plugins: [],
};
