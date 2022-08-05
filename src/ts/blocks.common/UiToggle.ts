export default class UiToggle extends HTMLButtonElement {
	public static NAME = "ui-toggle";

	#target: HTMLElement | null;
    #classes: string[] = [];
    #targetClasses: string[] = [];
	#open: boolean = false;

	connectedCallback(): void {
        this.#target = document.querySelector(`[data-toggle-id=${this.dataset.toggleTarget}]`);
        
        this.#classes = this.dataset.toggleClasses ? this.dataset.toggleClasses.split(", ") : [];
        this.#targetClasses = this.#target.dataset.toggleClasses ? this.#target.dataset.toggleClasses.split(", ") : [];
        
        if(this.#target === null) {
            return;
        }

        this.addEventListener("click", this.#handleClick)
	}

	disconnectedCallback(): void {

	}

	#handleClick = (event: Event): void => {
        if(this.#open === false)
        {
            this.classList.add(...this.#classes);
            this.#target?.classList.add(...this.#targetClasses);
        } else {
            this.classList.remove(...this.#classes);
            this.#target?.classList.remove(...this.#targetClasses);
        }
        this.#open = !this.#open;
	};
}

customElements.define(UiToggle.NAME, UiToggle, {
	extends: "button",
});
