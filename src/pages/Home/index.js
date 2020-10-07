import React, { useEffect, useState } from 'react';
import { Container, Content, Title, Sort, SortItem, Icon, ShopDetails,ShopTitle,ShopDescription, ShopContent } from './styles';


import SlideShow from '../../components/SlideShow';


import ProductsData from '../../data/products';
import Product from '../../components/Product';
import Products from '../../components/Products';
import NewsLatter from '../../components/NewsLatter';


import productService from '../../services/productService';

export default function Home() {
	const sort = ['all', 'new', 'featured'];
	const [selected, setSelected] = useState(0);
	const [products, setProducts] = useState([]);

	useEffect( () => {
		productService.index().then( res => {
			if(res.data) {
				console.log(res.data);

				setProducts(res.data);
			}
		});
	},[])
	return <Container>
		<SlideShow products={ProductsData} />

		<Content>
			<Title>Products</Title>
			<Sort>
				{sort.map((item, index) => {
					return <SortItem key={index} className={index === selected ? 'active' : ''} onClick={() => setSelected(index)}>{item}</SortItem>
				})}
			</Sort>
			<Products products={products} />
			<NewsLatter/>
			<ShopDetails>
				<ShopContent>
					<Icon className="fas fa-shipping-fast fa-2x"/>
					<ShopTitle>Free Shipping Method</ShopTitle>
					<ShopDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus-pendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</ShopDescription>
				</ShopContent>	
				<ShopContent>
					<Icon className="fas fa-lock fa-2x"/>
					<ShopTitle>Secure payment system</ShopTitle>
					<ShopDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus-pendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</ShopDescription>
				</ShopContent>		
				<ShopContent>
					<Icon className="fas fa-shield-alt fa-2x"/>
					<ShopTitle>Your data is safe.</ShopTitle>
					<ShopDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus-pendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</ShopDescription>
				</ShopContent>					
			</ShopDetails>
		</Content>
	</Container>
}