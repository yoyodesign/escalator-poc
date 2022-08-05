const plugin = require("tailwindcss/plugin");
const _pluginUtils = require("tailwindcss/lib/util/pluginUtils");

module.exports = {
	ParentPeer: plugin(function ({ addVariant, e }) {
		let pseudoVariants = [
			// Positional
			["first", "first-child"],
			["last", "last-child"],
			["only", "only-child"],
			["odd", "nth-child(odd)"],
			["even", "nth-child(even)"],
			"first-of-type",
			"last-of-type",
			"only-of-type", // State
			"visited",
			"target", // Forms
			"default",
			"checked",
			"indeterminate",
			"placeholder-shown",
			"autofill",
			"required",
			"valid",
			"invalid",
			"in-range",
			"out-of-range",
			"read-only", // Content
			"empty", // Interactive
			"focus-within",
			"hover",
			"focus",
			"focus-visible",
			"active",
			"disabled",
		];

		//let peerMarker = (0, _prefixSelector.default)(config("prefix"), ".test");
		let peerMarker = ".peer";

		for (let variant of pseudoVariants) {
			let [variantName, state] = Array.isArray(variant)
				? variant
				: [variant, variant];
			let peerVariantName = `parent-peer-${variantName}`;

			addVariant(
				peerVariantName,
				(0, transformAllSelectors)((selector) => {
					let variantSelector = (0, _pluginUtils.updateAllClasses)(
						selector,
						(className) => {
							if (`.${className}` === peerMarker)
								return className;
							//return `${peerVariantName}${config("separator")}${className}`;
							return `${peerVariantName}:${className}`;
						}
					);

					if (variantSelector === selector) {
						return null;
					}

					return (0, applyPseudoToMarker)(
						variantSelector,
						peerMarker,
						state,
						(marker, selector) =>
							selector.trim().startsWith("~")
								? `${marker}${selector}`
								: `${marker} ~ * ${selector}`
					);
				})
			);
		}
	}),
};

// Tailwind 3.0 removed these plugin utils
function transformAllSelectors(transformSelector, { wrap, withRule } = {}) {
	return ({ container }) => {
		container.walkRules((rule) => {
			let transformed = rule.selector
				.split(",")
				.map(transformSelector)
				.join(",");
			rule.selector = transformed;

			if (withRule) {
				withRule(rule);
			}

			return rule;
		});

		if (wrap) {
			let wrapper = wrap();
			let nodes = container.nodes;
			container.removeAll();
			wrapper.append(nodes);
			container.append(wrapper);
		}
	};
}

function applyPseudoToMarker(selector, marker, state, join) {
	let states = [state];
	let markerIdx = selector.indexOf(marker + ":");

	if (markerIdx !== -1) {
		let existingMarker = selector.slice(
			markerIdx,
			selector.indexOf(" ", markerIdx)
		);
		states = states.concat(
			selector
				.slice(markerIdx + marker.length + 1, existingMarker.length)
				.split(":")
		);
		selector = selector.replace(existingMarker, "");
	}

	return join(`${[marker, ...states].join(":")}`, selector);
}
