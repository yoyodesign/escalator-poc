const plugin = require("tailwindcss/plugin");

module.exports = {
	GroupOpen: plugin(function ({ addVariant, e }) {
		addVariant("group-open", ({ container, separator }) => {
			container.walkRules((rule) => {
				const selector = `.group%%REPLACE%% .${e(
					`group-open${separator}`
				)}${rule.selector.slice(1)}`;
				rule.selector = `${selector.replace(
					"%%REPLACE%%",
					".open"
				)}, ${selector.replace("%%REPLACE%%", "[open]")}`;
				rule.walkDecls((decl) => {
					decl["group-open"] = true;
				});
			});
		});
	}),
};
