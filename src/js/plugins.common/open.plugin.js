const plugin = require("tailwindcss/plugin");

module.exports = {
	Open: plugin(function ({ addVariant, e }) {
		addVariant("open", ({ container, separator }) => {
			container.walkRules((rule) => {
				const selector = `%%REPLACE%%.open${e(
					`${separator}`
				)}${rule.selector.slice(1)}`;
				rule.selector = `${selector.replace(
					"%%REPLACE%%",
					".open"
				)}, ${selector.replace("%%REPLACE%%", "[open]")}`;
				rule.walkDecls((decl) => {
					decl.open = true;
				});
			});
		});
	}),
};
