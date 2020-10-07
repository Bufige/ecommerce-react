import React from 'react';
import { CartAdd } from '../../helpers/localStorage';
import Rating from '../Rating';
import { 
	Container,
	ProductContainer,
	ProductHover,
	ProductImg,
	ProductName,
	ProductCenter,
	ProductPrice,
	CartRound,
	Icon,
 } from './styles';



export default function Product({product, id}) {
	const addToCart = () => {
		CartAdd(product);
	}
	return <Container>
		<ProductContainer>
			{product.images.length ? 
				<ProductImg src={product.images[0].path}/>
				:
				<ProductImg src="https://via.placeholder.com/350x370"/>
			}
			<ProductHover className="show" to={{pathname: `/product/${id}`}} >visit</ProductHover>
		</ProductContainer>
		<ProductName>{product.name}</ProductName>
		<ProductCenter>
			<ProductPrice>{product.price}</ProductPrice>
			{product.discount ?
				<ProductPrice color={'var(--color-active)'}><strike>{product.price - (product.price * (product.discount/100))}</strike></ProductPrice>
				: 
				null
			}
		</ProductCenter>
		<ProductCenter>
			<Rating value={55}/>
		</ProductCenter>		
		<ProductCenter>
			{/* 
			<CartRound>
				<Icon className="fas fa-heart badge" color={'var(--color-active)'}></Icon>
			</CartRound>
			*/}

			<CartRound onClick={addToCart}>
				<Icon className="fas fa-shopping-cart badge" color={'var(--color-primary)'}></Icon>
			</CartRound>
		</ProductCenter>
	</Container>
}