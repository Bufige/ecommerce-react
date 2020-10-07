import React, {useState, useEffect} from 'react';
import { 
	Container
 } from './styles';

import Product from '../Product';

export default function Products({products}) {
	const [tmp, setTmp] = useState([]);

	useEffect( () => {
		setTmp(products);
	}, [products])
	return <Container>
		{tmp && tmp.map((item, index) => {
			return <Product key={item.id} id={item.id} product={item}/>
		})}
	</Container>
}