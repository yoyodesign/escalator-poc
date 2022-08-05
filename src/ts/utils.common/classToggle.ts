export default function classToggle(
	self: any,
	classes: string | string[],
	add = true
): void {
	if (typeof classes === "string") {
		if (classes.indexOf(" ") !== -1) {
			if (add) {
				self.classList.add(...classes.split(" "));
			} else {
				self.classList.remove(...classes.split(" "));
			}

			return;
		}
	}

	if (add) {
		self.classList.add(...classes);
	} else {
		self.classList.remove(...classes);
	}
}
