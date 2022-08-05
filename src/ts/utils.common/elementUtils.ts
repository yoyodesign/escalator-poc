export function CloneAttributes(
	source: HTMLElement,
	target: HTMLElement,
	dontCopy: string[] = ["id", "class"]
) {
	[...source.attributes].forEach((attr: Attr) => {
		if (dontCopy.indexOf(attr.nodeName) === -1) {
			target.setAttribute(attr.nodeName, attr.nodeValue);
		}
	});
}
