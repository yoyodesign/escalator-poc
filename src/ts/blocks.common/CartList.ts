import cartService, { CartService } from "../services.common/cartService";

export default class CartList extends HTMLElement {
	public static NAME = "cart-list";

    #data: any;

    #button: HTMLButtonElement;

	connectedCallback(): void {
        this.#button = this.querySelector("button");
        
        this.#data = cartService.getItems();

        this.#button.addEventListener("click", this.#handleClick);

	}

    #handleClick = (): void => {
        console.log(this.#data);
    }

	disconnectedCallback(): void {
	}
}

customElements.define(CartList.NAME, CartList);