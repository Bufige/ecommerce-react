import styled from 'styled-components';
import {Link as RLink} from 'react-router-dom';
import media from '../../media';

export const Container = styled.div`
	width: 100%;

	border-radius: 20px;
	box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
	
	${media.tablet`
		width: calc(50% - 20px);
		margin: 25px 10px;
	`}
	${media.desktop`
		width: calc(25% - 20px);
		margin: 25px 10px;
	`};
`;

export const ProductContainer = styled.div`
	position: relative;

	:hover {
		.show {
			display: block;
		}
	}
`;
export const ProductHover = styled(RLink)`
	display: none;
	position: absolute;
	z-index: 9999;
	width: calc(100% - 30px);
	height: 40px;
	padding: 10px 15px;
	
	top: 40%;
	left: 50%;

	text-align: center;
	font-weight: bolder;
	line-height: 40px;
	text-transform: uppercase;
	transform: translate(-50%);
	background-color: rgba(0,0,0, 0.3);

	outline: 0;
	user-select: none;
	text-decoration: none;
	color: var(--color-grey);
`;
export const ProductImg = styled.img`
	width: 100%;
	height: 250px;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	margin-bottom: 10px;
`;
export const ProductName = styled.p`
	font-size: 18px;
	font-weight: bolder;
	text-align: center;
	max-height: 100px;
	overflow: hidden;
  	text-overflow: ellipsis;

	text-transform: capitalize;
`;

export const ProductCenter= styled.div`
	display: flex;
	justify-content: center;
	margin: 10px 0;
`;
export const ProductPrice = styled.div`
	font-size: 18px;
	:before {
		content: '$';
	}
	margin-left: 20px;
	color: ${props => props.color ? props.color : ''};
`;

export const ProductCart = styled.button`
	padding: 16px 16px;
	border-radius: 20px;
	border: none;
	background-color: var(--color-primary);
	text-transform: uppercase;
	color: white;
	font-weight: bolder;


	outline: 0;
	user-select: none;
`;

export const Icon = styled.i`
	padding: 0 5px;
	text-align:center;
    vertical-align:middle;
    position: relative;
	color: ${props => props.color ? props.color : ''};
`;

export const CartRound = styled.div`
	border-radius: 50%;
	border: 1px solid #eeeeee;
	padding: 10px 10px;
	outline: 0;
	position: relative;
	margin-left: 20px;
	${media.desktop`
		cursor: pointer;
	`};
`;
