const plugin = require("tailwindcss/plugin");

module.exports = {
	GroupInteraction: plugin(function ({ addVariant, e }) {
		addVariant("group-interaction", ({ container, separator }) => {
			container.walkRules((rule) => {
				const selector = `%%PREFIX%% .group:%%INTERACTION%% .${e(
					`group-interaction${separator}`
				)}${rule.selector.slice(1)}`;

				rule.selector = `${selector
					.replace("%%PREFIX%%", `[data-whatintent="mouse"]`)
					.replace("%%INTERACTION%%", "hover")}, ${selector
					.replace("%%PREFIX%%", `[data-whatintent="keyboard"]`)
					.replace("%%INTERACTION%%", "focus")}, ${selector
					.replace("%%PREFIX%%", `.no-js`)
					.replace("%%INTERACTION%%", "hover")}, ${selector
					.replace("%%PREFIX%%", `.no-js`)
					.replace("%%INTERACTION%%", "focus")}`;
				rule.walkDecls((decl) => {
					decl["group-interaction"] = true;
				});
			});
		});
	}),
};
