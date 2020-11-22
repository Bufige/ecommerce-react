import {
	CART,
} from '../utils/localVariables';

import CartItem from './CartItem';


class Cart {
    constructor() {
        this.cart = [];
        this.load();
    }   
    load() {
        const items = JSON.parse(localStorage.getItem(CART)) || [];

        for(const item of items) {
            this.cart.push(new CartItem(item.product, item.amount));
        }
    }
    save() {
        localStorage.setItem(CART, JSON.stringify(this.toObjects()));
    }
    add(product) {
        const index = this.cart.findIndex(item => item.product.id === product.id);

	    if(index !== -1) {
		    this.cart[index].amount = this.cart[index].amount + 1;
	    } else {
		    this.cart.push(new CartItem(product));
	    }
    }
    remove(product) {
	    this.cart = this.cart.filter(x => x.product.id !== product.id);
    }
    update(product, amount) {
        const index = this.cart.findIndex(item => item.product.id === product.id);

	    if(index !== -1) {
		    this.cart[index].amount = amount;
	    } else {
            this.cart.push(new CartItem(product, amount));
        }
    }
    get(id) {
        return this.cart.find(x => x.product.id === id);
    }

    getAll() {
        return this.cart;
    }
    
    get totalPrice() {
        let total = 0;
        for(const item of this.cart) {
            total += item.price;
        }
        return total;
    }

    get totalItems() {
        let total = 0;
        for(const item of this.cart) {
            total += item.amount;
        }
        return total;
    }

    toObjects() {
        return this.cart.map(item => item.obj);
    }
}

export default Cart;