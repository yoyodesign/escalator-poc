import cartService, { CartService } from "../services.common/cartService";

export default class CartList extends HTMLElement {
	public static NAME = "cart-list";

	connectedCallback(): void {
        let items = cartService.getItems();

        console.log(items);
	}

	disconnectedCallback(): void {
	}
}

customElements.define(CartList.NAME, CartList);