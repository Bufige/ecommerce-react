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

import { useStoreContext } from '../../storeContext';

import ScrollContainer from "react-indiana-drag-scroll";


export default function Product(props) {
	const [amount, setAmount] = useState(1);
	const [imageId, setImageId] = useState(0);
	const [product, setProduct] = useState(undefined);

	const [details, setDetails] = useState([false,false,false]);
	
	const {cart} = useStoreContext();

	const flipDetail = (index) => {
		let tmp = [...details];
		tmp[index] = !tmp[index];
		setDetails(tmp);
	}

	const onChange = (v) => {
		setAmount(v);
		cart.update(product, v);
	}

	useEffect( () => {
		const product_id = parseInt(props.match.params.id);

		productService.show(product_id).then( res => {
			if(res.data) {
				setProduct(res.data);
			}
		});
		const item = cart.get(product_id);
		if(item)
			setAmount(item.amount);
	}, [props.match.params.id]);

	const onShop = () => {
		cart.update(product, amount);
	}

	const onImageSelect = (index) => {
		setImageId(x => index);	
	}
	return product ? <Container>
		<ContainerLeft>
			<ImageContent>
				<Image src={product.images[imageId].path}/>
			</ImageContent>
			<ImageContent>
				<ScrollContainer className="container" horizontal={true}>
      				{product.images.map((image, index) => (
      					<MiniImage key={image.path} src={image.path} id={index} onClick={() => onImageSelect(index)} />
      				))}
    			</ScrollContainer>
			</ImageContent>
		</ContainerLeft>
		<ContainerRight>
			<ProductTitle>{product.name}</ProductTitle>
			<ProductPrice>${product.price}</ProductPrice>
			<ProductDescription>{product.description}</ProductDescription>
			<InputCount value={amount} onChange={onChange}/>
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