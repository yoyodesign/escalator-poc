import cartService, { CartService } from "../services.common/cartService";

export default class CartList extends HTMLElement {
	public static NAME = "cart-list";

    #data: any;
    #clearButton: HTMLButtonElement;
    #totalPrice: HTMLElement;

    #button: HTMLButtonElement;

	connectedCallback(): void {
        this.#clearButton = this.querySelector("[data-clear-cart]");
        this.#totalPrice = this.querySelector("[data-total-price]");
        this.#displayTotalPrice();
        this.#button = this.querySelector("button");
        this.#data = cartService.getItems();
        this.#button.addEventListener("click", this.#handleClick);
        this.#clearButton.addEventListener("click", cartService.clearCart);

        console.log("hello");
	}

    #displayTotalPrice = async (): Promise<void> => {
        const total = await cartService.getTotalPrice();
        this.#totalPrice.innerText = `${total}`;
        console.log(total);
    }

    #handleClick = (): void => {
        console.log("list", this.#data);
    }

	disconnectedCallback(): void {
        this.#button.removeEventListener("click", this.#handleClick);
        this.#clearButton.removeEventListener("click", cartService.clearCart);
	}
}

customElements.define(CartList.NAME, CartList);