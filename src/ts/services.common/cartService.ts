interface CartItem {
    id: number;
    quantity: number;
}

interface UpdateCartItems {
    [key: number]: number;
}

interface CartUpdates {
    updates: UpdateCartItems;
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

    removeProducts = async ( ids: number[] ): Promise<void> => {
        let updates: any = {};
        ids.forEach((id): number => updates[`${id}`] = 0)
        await fetch(this.#shopUrl + "/cart/update.js", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(updates)
        }).then(res => console.log(res)).catch(err => console.log(err));
    }

    updateProducts = async ( updates: CartUpdates ): Promise<void> => {
        await fetch(this.#shopUrl + "/cart/update.js", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(updates)
        }).then(res => console.log(res)).catch(err => console.log(err));
    }

    clearCart = async (): Promise<void> => {
        fetch(this.#shopUrl + "/cart/clear");
    }

    getCart = async (): Promise<any> => {
        return await fetch(this.#shopUrl + "/cart.js", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
              }
        }).then(res => res.json()).then(data => data).catch(err => err);
    }

    getItems = async (): Promise<any> => {
        const cart: any = await fetch(this.#shopUrl + "/cart.js", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
              }
        }).then(res => res.json()).then(data => data).catch(err => err);
        return cart.items;
    }

    getTotalPrice = async (): Promise<number> => {
        const cart: any = await fetch(this.#shopUrl + "/cart.js", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
              }
        }).then(res => res.json()).then(data => data).catch(err => err);

        return cart.total_price;
    }
}

const cartService = new CartService();

export default cartService; 