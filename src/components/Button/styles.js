import styled, {css} from 'styled-components';
import media from '../../media';
import {Link as RLink} from 'react-router-dom';



const Cart = css`
	width: 200px;
	min-height: 35px;
	margin: 20px 0;
	border-radius: 30px;
	padding: 5px 10px;
	color: white;
	font-size: 16px;
	font-weight: bolder;
	background-color: var(${ ({color}) => color || '--color-success'});
	border: 1px solid var(--color-grey);
	text-transform: uppercase;
	line-height: 35px;
`;

const Create = css`
	width: 100%;
	height: 35px;
	margin: 20px 0;
	border-radius: 30px;
	padding: 5px 10px;
	color: white;
	font-size: 16px;
	font-weight: bolder;
	background-color: var(${ ({color}) => color || '--color-success'});
	border: 1px solid var(--color-grey);
	text-transform: uppercase;
	line-height: 35px;

	${media.tablet`
		width: 200px;
	`};
	${media.desktop`
		width: 200px;
		cursor: pointer;
	`};
`; 

export const Container = styled(RLink)`
	${ (props) => {
		if(props.buttontype === 'cart') {
			return Cart;
		}
		switch(props.buttontype) {
			case 'cart': {
				return Cart;
			}
			case 'create': {
				return Create;
			}
			default:
				return Cart;
		}
	}}
	text-decoration: none;
	text-align: center;
	vertical-align: middle;
	user-select: none;
	outline: 0;
	
    ${media.tablet`
		cursor: pointer;
	`};
	${media.desktop`
		cursor: pointer;
	`};
`;