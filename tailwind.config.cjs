const config = {
	darkMode: "class",
	content: ["./src/**/*.{html,js,svelte,ts}",
						"./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
],

	theme: {
		extend: {
			colors: {
				"primary": "#295D8A",
				"secondary": "#B3B3B3",
				"accent": "#1E3D58",
				"shade": "#374051",
				"gray": {
					somber: "#1f2837",
					dark: "#3A3A3A",
					DEFAULT: "#B3B3B3",
					light: "#C7C7C7",
				},
				"custom": {
					black: "#0B151F",
					white: "#FAFAFA",
				},
			},
			fontSize: {
					"7xl": "5rem",
					"8xl": "5.5rem",
			},
			fontfamily: {
					body: ["Helvetica"],
					sans: ["Open-Sans"],
			},
			dropShadow: {
				'custom': '0px 10px 10px rgba(41, 93, 138, 0.5)',
			},
			screens: {
				sm: "640px",
				md: "968px",
				lg: "1224px",
				xl: "1580px",
				"2xl": "1736px",
			},
			gridAutoRows: {
			'2fr': 'minmax(0, 2fr)',
			},
		},
	},

	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
		require('flowbite/plugin'),
	],
};

module.exports = config;
