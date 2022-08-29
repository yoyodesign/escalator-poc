import cartService, { CartService } from "../services.common/cartService";

export default class ProductForm extends HTMLElement {
	public static NAME = "product-form";

    #testButton: HTMLButtonElement;

    #form: HTMLFormElement;
    #cartDrawerDetails: HTMLDetailsElement;
    #productId: number;
    #productObject: any;

    #variantId: number;
    #variantStock: number = 6;
    #variantOptions: string[];

    #decrementQuantityButton: HTMLButtonElement;
    #incrementQuantityButton: HTMLButtonElement;
    #quantityInput: HTMLInputElement;

	connectedCallback(): void {
        this.#testButton = this.querySelector("[data-test-button]");
        this.#testButton.addEventListener("click", this.#runTest);
        this.#form = this.querySelector("form");
        this.#productId = Number(this.dataset.productId);
        this.#variantId = Number(this.dataset.defaultVariantId);
        this.#cartDrawerDetails = document.querySelector("[data-cart-drawer-details]");

        this.#productObject = fetch(`${cartService.shopUrl}/product?=id${this.#productId}`).then(res => res.json()).then(data => data).catch(err => err);;



        //product quantity
        this.#initProductQuantity();

        console.log(this.#variantId);

       this.#form.onsubmit = this.#handleSubmit;
       this.#form.onchange = this.#handleChange
	}

    #runTest = (): void => {
        console.log(this.#productObject);
    }
    
    #handleChange = (event: FormDataEvent): void => {
        // this.#variantId = Number((this.querySelector('input[name="Color"]:checked') as HTMLInputElement).value);
    }

    
    
    
    #handleSubmit = (event: SubmitEvent): void => {
        event.preventDefault();

        const item = { id: Number(this.dataset.nextVar), quantity: 1 };
        
        const cartItem = {
            id: this.#variantId,
            quantity: parseInt(this.#quantityInput.value)
        };
        
        console.log(cartItem);

        cartService.addProducts([cartItem])

        this.#cartDrawerDetails.setAttribute("open", "");
    }
   
    //PRODUCT QUANTITY FORM
    #initProductQuantity = (): void => {
        this.#decrementQuantityButton = this.querySelector("[data-decrement-quantity]");
        this.#incrementQuantityButton = this.querySelector("[data-increment-quantity]")
        this.#quantityInput = this.querySelector("#product-quantity");
        this.#decrementQuantityButton.addEventListener("click", this.#decrementQuantity);
        this.#incrementQuantityButton.addEventListener("click", this.#incrementQuantity);
    }

    #destroyProductQuantity = (): void => {
        this.#decrementQuantityButton.removeEventListener("click", this.#decrementQuantity);
        this.#incrementQuantityButton.removeEventListener("click", this.#incrementQuantity);
    }

    #incrementQuantity = (e: Event): void => {
        e.preventDefault();
        if(parseInt(this.#quantityInput.value) >= this.#variantStock) {
            return;
        }
        this.#quantityInput.value = `${parseInt(this.#quantityInput.value) + 1}`;
    }

    #decrementQuantity = (e: Event): void => {
        e.preventDefault();
        if(parseInt(this.#quantityInput.value) <= 1) {
            return;
        }
        this.#quantityInput.value = `${parseInt(this.#quantityInput.value) - 1}`;
    }
    
	disconnectedCallback(): void {
        this.#destroyProductQuantity();
	}
}

customElements.define(ProductForm.NAME, ProductForm);
