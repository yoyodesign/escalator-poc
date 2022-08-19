import cartServive, { CartService } from "../services.common/cartService";

export default class ProductForm extends HTMLElement {
	public static NAME = "product-form";

    #form: HTMLFormElement;
    #cartDrawerDetails: HTMLDetailsElement;
    #productId: number;
    #variantId: number;
    #quantity: number = 2;

	connectedCallback(): void {
        this.#form = this.querySelector("form");
        this.#productId = Number(this.dataset.productId);
        this.#variantId = Number(this.dataset.defaultVariantId);
        this.#cartDrawerDetails = document.querySelector("[data-cart-drawer-details]");

        console.log(this.#variantId);

       this.#form.onsubmit = this.#handleSubmit;
       this.#form.onchange = this.#handleChange
	}
    
    #handleChange = (event: FormDataEvent): void => {
        // this.#variantId = Number((this.querySelector('input[name="Color"]:checked') as HTMLInputElement).value);
    }

    #handleSubmit = (event: SubmitEvent): void => {
        event.preventDefault();

        const item = { id: Number(this.dataset.nextVar), quantity: 1 };

        const cartItem = {
            id: this.#variantId,
            quantity: this.#quantity
        };

        console.log(cartItem);

        cartServive.addProducts(cartItem)

        this.#cartDrawerDetails.setAttribute("open", "");
    }

	disconnectedCallback(): void {
	}
}

customElements.define(ProductForm.NAME, ProductForm);
