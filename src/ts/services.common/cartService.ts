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

    addProduct = (items: CartItem): void => {
        console.log("add products:", items);
        fetch(this.#shopUrl + "/cart/add.js", {
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
        console.log("cart cleared");
    }

    getItems = (): Promise<any> => {
        let data: any = fetch(this.#shopUrl + "/cart.js", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
              }
        }).then(res => res.body).catch(err => err);
        return data;
    }

    getTotalPrice = (): number => {
        return 100;
    }
}

const cartService = new CartService();

export default cartService; 