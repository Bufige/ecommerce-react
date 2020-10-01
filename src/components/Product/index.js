import React from 'react';
import { 
	Container,
	ProductImg,
	ProductName,
	ProductCenter,
	ProductPrice,
	CartRound,
	Icon,
 } from './styles';



export default function Product({product}) {
	return <Container>
		<ProductImg src="https://via.placeholder.com/350x370"/>
		<ProductName>{product.name}</ProductName>
		<ProductCenter>
			<ProductPrice>10</ProductPrice>
			<ProductPrice color={'var(--color-active)'}><strike>20</strike></ProductPrice>
		</ProductCenter>
		<ProductCenter>
			<CartRound>
				<Icon className="fas fa-heart badge" color={'var(--color-active)'}></Icon>
			</CartRound>
			<CartRound>
				<Icon className="fas fa-shopping-cart badge" color={'var(--color-primary)'}></Icon>
			</CartRound>
		</ProductCenter>
	</Container>
}