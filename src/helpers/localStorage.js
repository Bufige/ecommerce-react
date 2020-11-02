import {
	TOKEN_KEY, 
	CART,
	USER
} from '../services/auth';


export const getUser = () => {
	return JSON.parse(localStorage.getItem(USER));
}
export const setUser = (user) => {
	return localStorage.setItem(USER, JSON.stringify(user));
}


export const getToken = () => {
	return localStorage.getItem(TOKEN_KEY)
}
export const setToken = (token) => {
	return localStorage.setItem(TOKEN_KEY, token);
}
export const logout = () => {
	localStorage.removeItem(TOKEN_KEY);
	localStorage.removeItem(USER);
}

export const CartGet = () => {
	const cart = localStorage.getItem(CART);

	return cart ? JSON.parse(cart) : [];
}
export const CartSave = (products) => {
	localStorage.setItem(CART, JSON.stringify(products));
}

export const CartAdd = (product) => {
	let products =  CartGet();
	if(!products) {
		products = [];
	}

	const index = products.findIndex(x => x.product.id === product.id);

	if(index !== -1) {
		products[index].amount += 1;
	} else {
		products.push({product: product, amount: 1});
	}

	CartSave(products);
}
export const CartUpdate = (product, amount) => {
	let products =  CartGet();
	if(!products) {
		products = [];
	}

	const index = products.findIndex(x => x.product.id === product.id);

	if(index !== -1) {
		products[index].amount = amount;
	}
	CartSave(products);
}
export const CartRemove = (product) => {
	let products =  CartGet();
	if(!products) {
		products = [];
	}
	products = products.filter(x => x.product.id !== product.id);
	CartSave(products);
}