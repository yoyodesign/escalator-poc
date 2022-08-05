const plugin = require("tailwindcss/plugin");

module.exports = {
	Touch: plugin(function ({ addVariant, e }) {
		addVariant("touch", ({ container, separator }) => {
			container.walkRules((rule) => {
				rule.selector = rule.selector
					.split(", ")
					.map((item) => {
						const lastIndex = item.lastIndexOf(" ");
						return `[data-whatinput="touch"] ${item.substring(
							0,
							lastIndex
						)}${lastIndex > -1 ? " " : ""}.${e(
							`touch${separator}`
						)}${item.substring(lastIndex + 2)}`;
					})
					.join(", ");
				rule.walkDecls((decl) => {
					decl.touch = true;
				});
			});
		});
	}),
};
