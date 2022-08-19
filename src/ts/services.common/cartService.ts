interface AddCartItem {
    id: number;
    quantity: number;
}

interface UpdateCartItems {
    [key: number]: number;
}


export class CartService {


    #shopUrl: string = "https://escalator-poc.myshopify.com";
    #endpoint: string;
    #locale: string = "/en-GB";

    constructor() {
        this.#endpoint = this.#shopUrl + "/cart"
    }

    addProducts = (items: AddCartItem[]): void => {
        console.log("add products:", items);
        fetch(this.#endpoint + "/add.js", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(items)
        }).then(res => console.log(res)).catch(err => console.log(err));
    }

    removeProducts = ( ids: number[] ): void => {
        let updates: any = {};
        ids.forEach((id): number => updates[`${id}`] = 0)
        fetch(this.#endpoint + "/update.js", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(updates)
        }).then(res => console.log(res)).catch(err => console.log(err));
    }

    updateProduct = (id: number, quantity: number): void => {
        console.log("updated product");
    }

    clearItems = (): void => {
        console.log("cart cleared");
    }

    getItems = (): AddCartItem[] => {
        return [];
    }

    getTotalPrice = (): number => {
        return 100;
    }
}

const cartService = new CartService();

export default cartService; 