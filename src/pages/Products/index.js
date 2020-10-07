import React, {useState, useEffect} from 'react';

import Products2 from '../../components/Products';
import SearchBar from '../../components/SearchBar';

import productService from '../../services/productService';

import {
	Container,
	SearchContent,
	SearchContainer,
	SearchOptions,
	SortBy
} from './styles';

export default function Products(props) {
	const sortby = [
		'ascending',
		'descending'
	];

	const orderby = [
		'name',
		'price'
	];

	const [products, setProducts] = useState([]);
	
	const [shownProducts, setShowProducts] = useState([]);

	const [selectedOrder, setSelectedOrder] = useState(orderby[0]);
	const [selectedSort, setSelectedSort] = useState(sortby[0]);

	useEffect( () => {
		productService.index().then( res => {
			if(res.data) {
				setProducts(res.data);
				setShowProducts(res.data);
			}
		});
	}, []);

	useEffect( () => {
		sortBy();
	}, [selectedOrder, selectedSort]);

	const onChangeOrder = (e) => {
		setSelectedOrder(e.target.value);
	}
	const onChangeSort= (e) => {
		setSelectedSort(e.target.value);
	}
	const sortBy = (starts = null) => {
		let tmp = [...products];

		tmp.sort( (a,b) => {
			if(selectedSort === 'ascending') {
				if(selectedOrder !== 'price' && (a[selectedOrder] instanceof String || typeof a[selectedOrder] === 'string')) {
					const nameA = a[selectedOrder].toUpperCase(); 
					const nameB = b[selectedOrder].toUpperCase();
					if (nameA < nameB) {
					  return -1;
					}
					if (nameA > nameB) {
					  return 1;
					}				  
					return 0;
				}
				return a[selectedOrder] - b[selectedOrder];
			} else {
				if(selectedOrder !== 'price' && (a[selectedOrder] instanceof String || typeof a[selectedOrder] === 'string')) {
					const nameA = a[selectedOrder].toUpperCase(); 
					const nameB = b[selectedOrder].toUpperCase();
					if (nameA < nameB) {
					  return 1;
					}
					if (nameA > nameB) {
					  return -1;
					}				  
					return 0;
				}
				return b[selectedOrder] - a[selectedOrder];
			}
		});
		console.log(tmp);
		if(starts) {
			tmp = tmp.filter(x => x.name.startsWith(starts));
		}
		setShowProducts([...tmp]);
	}

	const onSearch = (text) => {
		sortBy(text);
	}
	const onChange = (text) => {
		sortBy(text);
	}
	return <Container>
		<SearchContent>
			<SearchContainer>
				<SearchBar onClick={onSearch} onChange={onChange}/>
			</SearchContainer>
		</SearchContent>
		
		<SearchOptions>
			<SortBy name="orderby" value={selectedOrder} onChange={onChangeOrder}>
				{orderby.map((item, index) => <option key={index} value={item}>{item}</option>)}
			</SortBy>
			<SortBy name="sortby" value={selectedSort} onChange={onChangeSort}>
				{sortby.map((item, index) => <option key={index} value={item}>{item}</option>)}
			</SortBy>
		</SearchOptions>
		<Products2 products={shownProducts} />
	</Container>
}