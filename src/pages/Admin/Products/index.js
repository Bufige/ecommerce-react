import React, {useState, useEffect} from 'react';

import {Container} from './styles';
import {Header, ContentItem, Table, THead, TBody} from '../styles';

import Button from '../../../components/Button';

import productService from '../../../services/productService';

const THItems = (data) => {
	return <tr>
		{data.map(item => <th>{item.toUpperCase()}</th>)}
	</tr>
}

const TBItem = (columns, data) => {
	console.log(data);
	return <tr>
		{columns.map(item => <th>{data[item]}</th>)}
	</tr>
} 

export default function Products() {
	const columns = ['id', 'name', 'price', 'price', 'created_at', 'updated_at'];
	const items = [{
		id: 1,
		name: 'name 1'	
	},
	{
		id: 2,
		name: 'name 2'
	}];
	const [products, setProducts] = useState([]);

	useEffect( () => {
		productService.index().then( res => {
			if(res.data) {
				setProducts(res.data.slice(0,10));
			}
			console.log(res.data[0]['id']);
		});
	},[])
	const onClick = () => {
		console.log('add product');
	}
    return <Container>
		<Header>
			<Button onClick={onClick} to="/" text="Create" buttontype="create"/>
		</Header>
		<ContentItem>
			<Table>
				<THead>
					{THItems(columns)}
				</THead>
				<TBody>
					{products.length > 0 && products.map( (item) => TBItem(columns, item))}
				</TBody>
			</Table>
		</ContentItem>
    </Container>
}