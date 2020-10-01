import React from 'react';
import { 
	Container,
 } from './styles';

import Product from '../Product';

export default function Products({products}) {
	return <Container>
		{products.map((item, index) => {
			return <Product key={index} product={item}/>
		})}
	</Container>
}