interface CartItem {
    id: number;
    quantity: number;
}

export class CartService {


    #shopUrl: string = "https://escalator-poc.myshopify.com/";
    #endpoint: string;
    #locale: string = "GBP";

    constructor() {
        this.#endpoint = this.#shopUrl + "/cart"
    }

    addProducts = (items: CartItem[]): string => {
        console.log("added product");
        fetch(this.#endpoint + "/add.js", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(items)
        }).then(res => console.log(res));
        return "added product";
    }

    removeProduct = (id: number): string => {
        console.log("removed product");
        return "removed product";
    }

    updateProduct = (id: number, quantity: number): string => {
        console.log("updated product");
        return "updated successfully";
    }

    clearItems = (): void => {
        console.log("cart cleared");
    }

    getItems = (): CartItem[] => {
        return [];
    }

    getTotalPrice = (): number => {
        return 100;
    }
}

const cartService = new CartService();

export default cartService; 