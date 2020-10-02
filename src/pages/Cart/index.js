import React, { useState } from 'react';

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


const CItem = (product) => {
	const [value, setValue] = useState(1);

	const onChange = (v) => {
		setValue(v);
	}
	return <CartItem>
		<CartItemImage src="https://via.placeholder.com/300x300" />
		<CartItemFix>
			<CartItemLeft>
				<CartItemContent>
					<CartItemTitle>product name</CartItemTitle>
					<InputCount value={value} onChange={onChange} />
				</CartItemContent>
			</CartItemLeft>
			<CartItemRight>
				<CartItemPrice>${value * 15}</CartItemPrice>
				<Round>
					<CartItemDelete className="fas fa-trash"></CartItemDelete>
				</Round>
			</CartItemRight>
		</CartItemFix>

	</CartItem>
}
export default function Cart(props) {
	const [value, setValue] = useState(1);

	const onChange = (v) => {
		setValue(v);
	}
	return <Container>
		<CartHeader>
			<CartTitle>Cart</CartTitle>
			<CartHeaderRight>
				<Button>Continue Shopping</Button>
			</CartHeaderRight>

		</CartHeader>
		<CartContent>
			<CItem />
			<CItem />
			<CItem />
		</CartContent>
		<CartBottom>
			<CartItemPrice>SUBTOTAL&nbsp;&nbsp;&nbsp;&nbsp;${value * 15}</CartItemPrice>
			<CartItemPrice>SHIPPING&nbsp;&nbsp;&nbsp;&nbsp;${value * 15}</CartItemPrice>
			<CartItemPrice>Total&nbsp;&nbsp;&nbsp;&nbsp;${value * 15}</CartItemPrice>
			<Button>CHECKOUT</Button>
		</CartBottom>
	</Container>
}