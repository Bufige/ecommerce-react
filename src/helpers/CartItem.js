class CartItem {
    constructor(product, amount = 1) {
        this.prod = product;
        this.total = amount;
    }

    set product(product) {
        this.prod = product;
    }

    get product() {
        return this.prod;
    }

    set amount(amount) {
        this.total = amount;
    }

    get amount() {
        return this.total;
    }

    get price() {
        return this.prod.price * this.total;
    }

    get obj() {
        return {
            product: this.prod,
            amount: this.total
        };
    }
}

export default CartItem;