interface CartItem {
    id: number;
    quantity: number;
}

interface UpdateCartItems {
    [key: number]: number;
}


export class CartService {


    #shopUrl: string = "https://escalator-poc.myshopify.com";
    #locale: string = "/en-GB";

    constructor() {
    }

    addProducts = (items: CartItem[]): void => {
        console.log("add products:", items);
        fetch(this.#shopUrl + "/cart/add.js", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({ items: items })
        }).then(res => console.log(res)).catch(err => console.log(err));
    }

    removeProducts = ( ids: number[] ): void => {
        let updates: any = {};
        ids.forEach((id): number => updates[`${id}`] = 0)
        fetch(this.#shopUrl + "/cart/update.js", {
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
        fetch(this.#shopUrl + "/cart/clear").then(res => console.log(res)).catch(err => err);
    }

    getItems = (): Promise<any> => {
        let cart: any = fetch(this.#shopUrl + "/cart.js", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
              }
        }).then(res => res.json()).then(data => data).catch(err => err);
        return cart;
    }

    getTotalPrice = (): number => {
        return 100;
    }
}

const cartService = new CartService();

export default cartService; 