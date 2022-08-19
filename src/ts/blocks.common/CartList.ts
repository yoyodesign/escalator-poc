import cartService, { CartService } from "../services.common/cartService";

export default class CartList extends HTMLElement {
	public static NAME = "cart-list";

    #data: any;
    #clearButton: HTMLButtonElement;

    #button: HTMLButtonElement;

	connectedCallback(): void {
        this.#clearButton = this.querySelector("[data-clear-cart]");
        this.#button = this.querySelector("button");
        this.#data = cartService.getItems();
        this.#button.addEventListener("click", this.#handleClick);
        this.#clearButton.addEventListener("click", this.#clearCart);
	}

    #handleClick = (): void => {
        console.log("list", this.#data);
    }

    #clearCart = (): void => {
        cartService.clearItems();
    }

	disconnectedCallback(): void {
        this.#button.removeEventListener("click", this.#handleClick);
        this.#clearButton.removeEventListener("click", this.#clearCart);
	}
}

customElements.define(CartList.NAME, CartList);