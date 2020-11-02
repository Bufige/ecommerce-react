import React, { useState, useEffect } from 'react';

import {
	Container, 
	ContainerLeft, 
	ContainerRight, 
	ImageContent,
	Image, MiniImage, 
	ProductTitle, 
	ProductPrice, 
	ProductDescription, 
	ProductShop,
	ProductDetail,
	ProductDetailTitle,
	ProductDetailContent,
	Icon,
	IconDown,
	PaymentIcons
} from './styles';

import InputCount from '../../components/InputCount';
import productService from '../../services/productService';


import { 
	CartAdd
} from '../../helpers/localStorage';



export default function Product(props) {
	const [value, setValue] = useState(1);
	const [imageId, setImageId] = useState(0);
	const [product, setProduct] = useState(undefined);

	const [details, setDetails] = useState([false,false,false]);
	
	const images = [
		"https://via.placeholder.com/100x400",
		"https://via.placeholder.com/200x400",
		"https://via.placeholder.com/300x400",
		"https://via.placeholder.com/400x400",
		"https://via.placeholder.com/500x400"
	];
	const flipDetail = (index) => {
		let tmp = [...details];
		tmp[index] = !tmp[index];
		setDetails(tmp);
	}

	const onChange = (v) => {
		setValue(v);
	}


	useEffect( () => {
		productService.show(props.match.params.id).then( res => {
			if(res.data) {
				setProduct(res.data);
			}
		});
		
	}, [props.match.params.id]);

	const onShop = () => {
		for(let i = 0; i < value; i++) {
			CartAdd(product);
		}
	}
	return product ? <Container>
		<ContainerLeft>
			<ImageContent>
				<Image src={product.images.length ? product.images[imageId].path : images[imageId]}/>
			</ImageContent>
			<ImageContent>
				{(product.images.length ? product.images : images).filter( (x, index) => index !== imageId).map((item,index) => {
					return <MiniImage key={index} src={product.images.length ? item.path : item} onClick={() => setImageId(index)}/>
				})}
			</ImageContent>
		</ContainerLeft>
		<ContainerRight>
			<ProductTitle>{product.name}</ProductTitle>
			<ProductPrice>${product.price}</ProductPrice>
			<ProductDescription>{product.description}</ProductDescription>
			<InputCount value={value} onChange={onChange}/>
			<ProductShop onClick={onShop}>shop now</ProductShop>
			<ProductDetail>
				<ProductDetailTitle onClick={() => flipDetail(0)}>information<IconDown className={details[0] ? "fas fa-arrow-up" : "fas fa-arrow-down"}/></ProductDetailTitle>
				<ProductDetailContent drop={details[0]}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</ProductDetailContent>
			</ProductDetail>
			<ProductDetail>
				<ProductDetailTitle onClick={() => flipDetail(1)}>payment details<IconDown className={details[1] ? "fas fa-arrow-up" : "fas fa-arrow-down"}/></ProductDetailTitle>
				<ProductDetailContent drop={details[1]}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</ProductDetailContent>
			</ProductDetail>
			<ProductDetail>
				<ProductDetailTitle onClick={() => flipDetail(2)}>shipping & returns<IconDown className={details[2] ? "fas fa-arrow-up" : "fas fa-arrow-down"}/></ProductDetailTitle>
				<ProductDetailContent drop={details[2]}>
					<PaymentIcons>
						<Icon className="fab fa-cc-visa fa-2x"/>
						<Icon className="fab fa-cc-paypal fa-2x"/>
					</PaymentIcons>
					
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</ProductDetailContent>
			</ProductDetail>
		</ContainerRight>
	</Container> : null;
}