import cartServive, { CartService } from "../services.common/cartService";

export default class ProductForm extends HTMLElement {
	public static NAME = "product-form";

    #form: HTMLFormElement;
    #cartDrawerDetails: HTMLDetailsElement;
    #productId: number;
    #quantity: number = 1;

	connectedCallback(): void {
        this.#form = this.querySelector("form");
        this.#productId = Number(this.dataset.productId);
        this.#cartDrawerDetails = document.querySelector("[data-cart-drawer-details]");

       this.#form.onsubmit = this.#handleSubmit;
       this.#form.onchange = this.#handleChange
	}
    
    #handleChange = (event: FormDataEvent): void => {
        this.#productId = Number((this.querySelector('input[name="Color"]:checked') as HTMLInputElement).value);
    }

    #handleSubmit = (event: SubmitEvent): void => {
        event.preventDefault();

        const cartItem = {
            id: this.#productId,
            quantity: this.#quantity
        };

        cartServive.addProducts([cartItem])

        this.#cartDrawerDetails.setAttribute("open", "");
    }

	disconnectedCallback(): void {
	}
}

customElements.define(ProductForm.NAME, ProductForm);
