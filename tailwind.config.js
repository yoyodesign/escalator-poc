const {
	FontSizes,
	font,
	rem,
} = require("./src/js/plugins.common/font.plugin");

//const { Touch } = require("./src/js/plugins.common/touch.plugin");
//const { Interaction } = require("./src/js/plugins.common/interaction.plugin");
//const { GroupInteraction } = require("./src/js/plugins.common/group-interaction.plugin");
//const { ParentInteraction } = require("./src/js/plugins.common/parent-interaction.plugin");
//const { Open } = require("./src/js/plugins.common/open.plugin");
//const { GroupOpen } = require("./src/js/plugins.common/group-open.plugin");
const {
	ParentPeer,
} = require("./src/js/plugins.common/parent-peer.plugin");
const { NoJs } = require("./src/js/plugins.common/no-js.plugin");

module.exports = {
	future: {
		purgeLayersByDefault: true,
		removeDeprecatedGapUtilities: true,
	},
	mode: "jit",
	corePlugins: { container: false, fontSize: false }, // Enable to use custom font sizes plugin
	plugins: [
		require("@tailwindcss/aspect-ratio"),
		require("@tailwindcss/forms")({ strategy: "class" }),
		FontSizes,
		//Interaction,
		//GroupInteraction,
		//ParentInteraction,
		//Open,
		//GroupOpen,
		ParentPeer,
		NoJs,
		//Touch,
	],
	content: [
		"./layout/**/*.liquid",
		"./sections/**/*.liquid",
		"./snippets/**/*.liquid",
		"./src/**/*.js",
		"./src/**/*.ts",
		"./src/**/*.sass",
	],
	theme: {
		colors: {
			black: "#000000",
			current: "currentColor",
			error: "#c00",
			"grey-1": "#333",
			"grey-2": "#666",
			"grey-3": "#999",
			"grey-4": "#ccc",
			"grey-5": "#eee",
			transparent: "transparent",
			white: "#ffffff",
		},
		fontFamily: {
			sans: ["sans-serif"],
		},
		fontSize: {
			body: {
				base: font(16, 22, 0),
				screens: {
					lg: font(20, 28, -0.1),
				},
			},
			h1: {
				base: font(44, 44, -2),
				screens: {
					lg: font(120, 120, -6),
				},
			},
			h2: {
				base: font(32, 36, -1.4),
				screens: {
					lg: font(80, 84, -4),
				},
			},
			h3: {
				base: font(26, 30, -1),
				screens: {
					lg: font(48, 52, -2),
				},
			},
			h4: {
				base: font(24, 28, -0.8),
				screens: {
					lg: font(32, 36, -1),
				},
			},
			h5: {
				base: font(20, 24, -0.4),
				screens: {
					lg: font(26, 30, -0.8),
				},
			},
			h6: {
				base: font(16, 22, 0),
				screens: {
					lg: font(20, 28, -0.1),
				},
			},
			pullout: {
				base: font(60, 60, -3.5),
				screens: {
					lg: font(180, 180, -9),
				},
			},
			pre: {
				base: font(18, 18, -0.5),
				screens: {
					lg: font(24, 24, -1),
				},
			},
			nav: {
				base: font(20, 28, -0.1),
				screens: {
					lg: font(18, 25, -0.1),
				},
			},
			small: {
				base: font(14, 20, 0),
				screens: {
					lg: font(16, 22, 0),
				},
			},
			button: {
				base: font(18, 25, -0.5),
			},
		},
		aspectRatio: {
			1: "1",
			3: "3",
			4: "4",
			9: "9",
			16: "16",
			83: "83",
			25: "25",
		},
		extend: {
			spacing: {
				3.75: rem(15),
			},
			gap: {
				3.75: rem(15),
			},
			borderWidth: {
				3: "3px",
				6: "6px",
				7: "7px",
			},
			zIndex: {
				"-1": -1,
				1: 1,
			},
			transitionDuration: {
				0: "0s",
			},
			transitionTimingFunction: {
				//slide: "cubic-bezier(0.95, 0.2, 0.25, 1)",
			},
			transitionProperty: {
				"visibility/opacity": "visibility, opacity",
				nav: "visibility, transform, box-shadow",
			},
		},
	},
	variants: {
		extend: {},
	},
};
