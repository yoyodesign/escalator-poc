export default class AccordionComponent extends HTMLDetailsElement {
	public static NAME = "accordion-component";

	#summary: HTMLElement;
	#open: boolean;

	connectedCallback(): void {
		this.#summary = this.querySelector("summary");
		this.#open = this.open;

		this.#summary.addEventListener("click", this.#handleClick);
		this.addEventListener("transitionend", this.#handleTransitionEnd);
	}

	disconnectedCallback(): void {
		this.#summary, this.removeEventListener("click", this.#handleClick);
		this.removeEventListener("transitionend", this.#handleTransitionEnd);
	}

	#handleClick = (event: Event): void => {
		event.preventDefault();

		this.style.height = `${this.offsetHeight}px`;
		this.style.overflow = "hidden";

		if (this.#open) {
			this.#open = false;
		} else {
			this.#open = true;
			this.open = true;
		}

		this.style.height = `${
			this.#open ? this.scrollHeight : this.#summary.offsetHeight
		}px`;
	};

	#handleTransitionEnd = (event: TransitionEvent): void => {
		if (event.target !== this || event.propertyName !== "height") {
			return;
		}

		this.style.height = "";
		this.style.overflow = "";

		if (this.#open === false) {
			this.open = false;
		}
	};
}

customElements.define(AccordionComponent.NAME, AccordionComponent, {
	extends: "details",
});
