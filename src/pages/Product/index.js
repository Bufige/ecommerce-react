import React, { useState } from 'react';

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
	InputContainer,
	Input,
	InputUpdate,
	ProductDetail,
	ProductDetailTitle,
	ProductDetailContent,
	Icon,
	IconDown,
	PaymentIcons
} from './styles';

import InputCount from '../../components/InputCount';


export default function Product(props) {
	const [value, setValue] = useState(1);
	const [imageId, setImageId] = useState(0);

	const [details, setDetails] = useState([false,false,false]);

	const updateValue = (v) => {
		let x = value + v;
		x = Math.max(1, x);
		setValue(x);
	}

	const flipDetail = (index) => {
		let tmp = [...details];
		tmp[index] = !tmp[index];
		setDetails(tmp);
		console.log(details);
	}

	const onChange = (v) => {
		setValue(v);
	}
	return <Container>
		<ContainerLeft>
			<ImageContent>
				<Image src="https://via.placeholder.com/300x400"/>
			</ImageContent>
			<ImageContent>
				<MiniImage src="https://via.placeholder.com/300x400"/>
				<MiniImage src="https://via.placeholder.com/300x400"/>
				<MiniImage src="https://via.placeholder.com/300x400"/>
				<MiniImage src="https://via.placeholder.com/300x400"/>
				<MiniImage src="https://via.placeholder.com/300x400"/>
				<MiniImage src="https://via.placeholder.com/300x400"/>
				<MiniImage src="https://via.placeholder.com/300x400"/>
				<MiniImage src="https://via.placeholder.com/300x400"/>
			</ImageContent>
		</ContainerLeft>
		<ContainerRight>
			<ProductTitle>Product 1</ProductTitle>
			<ProductPrice>33$</ProductPrice>
			<ProductDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ProductDescription>
			<InputCount value={value} onChange={onChange}/>
			<ProductShop>shop now</ProductShop>
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
	</Container>
}