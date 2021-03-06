import styled, { css, keyframes } from 'styled-components';
import media from '../../media';


export const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px;
	${media.desktop`
		flex-direction: row;
		margin: 100px;
	`};
`;

export const ContainerLeft = styled.div`
	${media.desktop`
		width: 40%;
	`};
`;
export const ContainerRight = styled.div`
	width: 100%;

	${media.tablet`
	`};
	${media.desktop`
		margin-left: 40px;
	`};
`;

export const ProductTitle = styled.h1`

`;
export const ProductPrice = styled.h2`

`;

export const ProductDescription = styled.p`
	font-size: 16px;
`;

export const ImageContent = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	.container {
		display: flex;
	}
`;
export const Image =  styled.img`
	width: 100%;
	height: 400px;

	${media.desktop`
		height: 400px;
	`};

	user-select: none;
	outline: none;
`;

export const MiniImage = styled.img`
	width: 90px;
	height: 150px;
	margin: 10px 10px;

	${media.tablet`
		cursor:pointer;
	`};
	${media.desktop`
		cursor:pointer;
	`};

	user-select: none;
	outline: none;
`;

export const ProductShop = styled.button`
	width: 150px;
	height: 40px;
	color: white;
	font-weight: bolder;
	text-transform: uppercase;
	padding: 5px 15px;
	border-radius: 30px;
	border:none;
	background-color: var(--color-primary);
	outline: none;

	${media.desktop`
		cursor: pointer;
	`};
`;

const inputLeft= css`
	margin-right: -32px;
`;
 const inputRight = css`
	margin-left: -32px;
 `;

export const ProductDetail = styled.div`
	display: block;
	border-top: 1px solid var(--color-grey);
	border-bottom: 1px solid var(--color-grey);
	margin: 10px 0;
	padding: 10px 0;
`;
export const ProductDetailTitle = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	text-transform: uppercase;
	font-size: 20px;
	font-weight: bolder;


	${media.tablet`
	  cursor:pointer;
	`};	
	${media.desktop`
	  cursor:pointer;
	`};	
`;


const growDown = keyframes`
	0% {
    	transform: scaleY(0);
  	}
	25% {
		transform: scaleY(.25);
  	}
  	66% {
		transform: scaleY(.66);
  	}
  	100% {
    	transform: scaleY(1);
  	}
`;


export const ProductDetailContent = styled.div`
	display: ${props => props.drop ? 'block' : 'none'};
 	transform-origin: top;
	animation: .3s ${growDown} ease-in-out;
	font-size: 14px;
	color: var(--color-grey-dark);
	margin: 10px 0;
`;

export const Icon = styled.i`
	margin: 5px;
`;
export const IconDown = styled.i`
	position: absolute;
	right: 10px;
`;

export const PaymentIcons = styled.div`
	display: flex;
`;