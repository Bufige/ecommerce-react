import React, { useState, useEffect} from 'react';

import {
	Container,
	CartTitle,
	CartHeader,
	CartHeaderRight,
	Button,
	CartItem,
	CartItemContent,
	CartItemTitle,
	CartItemImage,
	CartItemLeft,
	CartItemRight,
	CartContent,
	CartItemPrice,
	CartItemDelete,
	Round,
	CartBottom,
	CartItemFix

} from './styles';

import InputCount from '../../components/InputCount';

import { 
	CartGet,
	CartUpdate,
	CartRemove
} from '../../helpers/localStorage';

const CItem = (props) => {
	const [value, setValue] = useState(props.amount);

	const onUpdate = (v) => {
		setValue(v);

		if(props.onUpdate)
			props.onUpdate(props.product, v);
	}
	const onRemove = () => {
		if(props.onRemove)
			props.onRemove(props.product);
	}
	return <CartItem>
		<CartItemImage src={props.product.images.length ? props.product.images[0].path : "https://via.placeholder.com/300x300"}/>
		<CartItemFix>
			<CartItemLeft>
				<CartItemContent>
					<CartItemTitle>{props.product.name}</CartItemTitle>
					<InputCount value={value} onChange={onUpdate} />
				</CartItemContent>
			</CartItemLeft>
			<CartItemRight>
				<CartItemPrice>${(value * props.product.price).toFixed(2)}</CartItemPrice>
				<Round onClick={onRemove}>
					<CartItemDelete className="fas fa-trash"></CartItemDelete>
				</Round>
			</CartItemRight>
		</CartItemFix>

	</CartItem>
}
export default function Cart(props) {
	const [products, setProducts] = useState([])
	const [shipping, setShipping] = useState(10);

	useEffect( () => {
		const tmp = CartGet();
		setProducts(tmp);
	}, []);

	const onUpdate = (item, amount) => {
		CartUpdate(item, amount);

		const tmp = CartGet();
		setProducts(tmp);
	}

	const onRemove = (item) => {
		CartRemove(item);
		const tmp = CartGet();
		setProducts(tmp);
	}

	const getTotal = () => {
		let total = 0;
		for(let product of products) {
			total += (product.product.price * product.amount);
		}
		return total;
	}
	return <Container>
		<CartHeader>
			<CartTitle>Cart</CartTitle>
			<CartHeaderRight>
				<Button to="/">Continue Shopping</Button>
			</CartHeaderRight>

		</CartHeader>
		<CartContent>
			{products && products.map( (item, index) => {
				const product = item.product;
				return <CItem key={item.product.id} product={product} amount={item.amount} onUpdate={onUpdate} onRemove={onRemove}/>
			})}
		</CartContent>
		<CartBottom>
			<CartItemPrice>SUBTOTAL&nbsp;&nbsp;&nbsp;&nbsp;${getTotal().toFixed(2)}</CartItemPrice>
			<CartItemPrice>SHIPPING&nbsp;&nbsp;&nbsp;&nbsp;${products.length ? shipping : 0}</CartItemPrice>
			<CartItemPrice>Total&nbsp;&nbsp;&nbsp;&nbsp;${(getTotal() + (products.length ? shipping : 0)).toFixed(2)}</CartItemPrice>
			<Button>CHECKOUT</Button>
		</CartBottom>
	</Container>
}