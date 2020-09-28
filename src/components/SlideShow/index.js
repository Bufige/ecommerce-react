import React, { useState, useEffect } from 'react';
import { Container, Content, Title, Text, Dots, Dot, Arrow, Actions, Discover, Cart} from './styles';


export default function SlideShow({products, speed = 5000, }) {
	const [id, setId] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			nextImage();
		}, speed);
		return () => clearTimeout(interval);
	 }, [id]);

	const nextImage  = () => {
		let tmp = id + 1;

		if(tmp >= products.length) {
			console.log("entrou aqui")
			tmp = 0;
		}
		setId(tmp);
	}
	const prevImage = () => {
		let tmp = id - 1;

		if(tmp < 0) {
			tmp = products.length - 1;
		}
		setId(tmp);
	}

	const onCart = (id) => {

	}
	const onDiscover = () => {

	}
	return <Container image={products[id].images[0]}>
		<Content>
			<Title>New arrivals</Title>
			<Title>{products[id].name}</Title>
			<Text>{products[id].description}</Text>
		</Content>
		<Actions>
			<Discover onClick={onDiscover}>Discover</Discover>
			<Cart onClick={() => onCart(id)}>Add to cart</Cart>
		</Actions>
		<Dots>
			<Arrow onClick={() => prevImage()}>&lt;</Arrow>
			{products.map( (item, index) => {
				return <Dot key={index} className={index === id ? 'active' : '' } onClick={() => setId(index)}/>
			})}
			<Arrow onClick={() => nextImage()}>&gt;</Arrow>
		</Dots>
	</Container>
}