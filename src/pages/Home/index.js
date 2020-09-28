import React from 'react';
import { Container } from './styles';


import SlideShow from '../../components/SlideShow';


import Products from '../../data/products';

export default function Home() {
	
	return <Container>
		<SlideShow products={Products}/>
	</Container>
}