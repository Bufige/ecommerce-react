import styled, { css, keyframes } from 'styled-components';

import {
	Link as RLink
} from 'react-router-dom';

import media from '../../media';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-bottom: 10px;
	${media.tablet`
		flex-direction: row;
		margin: 10px 0;
	`};
	${media.desktop`
		flex-direction: row;
		margin: 10px 0;
	`};
`;
export const ContainerLeft = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	${media.tablet`
		margin-bottom: 0;
		margin-left: 10px;
		margin-top: 5px;
	`};
	${media.desktop`
		margin-bottom: 0;
		margin-left: 10px;
		margin-top: 5px;
	`};
`;

export const ContainerRight = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	margin: 0 5px;

	${media.desktop`
		align-items: center;
	`};
`

export const Logo = styled.img`
	vertical-align: center;
	max-width: 100%;
	margin-top: 5px;
	margin-bottom: 12px;

	${media.tablet`
		cursor: pointer;
	`}

	${media.desktop`
		margin: 15px;
		cursor: pointer;
	`};
`;

export const Icon = styled.i`
	margin: 0 5px;
	text-align:center;
    vertical-align:middle;
    position: relative;
	&.badge:after{
    	content: '${props => props.value ? props.value : 0}';
    	position: absolute;
    	width: 25px;
    	height: 25px;
    	background: #00b1ff;
    	color: #fff;
    	line-height: 25px;
    	text-align: center;
    	border-radius: 30px;
    	font-size: 12px;
    	top: 0px;
		left: 0;
		margin-top: -25px;
		margin-left: 30px;
    	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
	}

	outline: 0;
	user-select: none;
`;
export const Link = styled(RLink)`
	color: var(--color-header);
    text-decoration: none;
	outline: 0;
	user-select: none;

	font-size: 18px;

	${media.desktop`
		cursor: pointer;
	`};
`;
export const Link2 = styled(RLink)`
	${media.tablet`
		cursor: pointer;
	`}

	${media.desktop`
		cursor: pointer;
	`};
`;


export const Bars = styled(Icon)`
	margin: 10px 5px;
	
	${media.desktop`
		display: none !important;
		margin: 10px 5px;
	`};
`;


export const CartRound = styled.div`
	border-radius: 50%;
	border: 1px solid #eeeeee;
	padding: 5px 5px;
	margin-right: 22px;
	position: relative;

	outline: 0;
	user-select: none;
	${media.tablet`
		cursor: pointer;
		padding: 10px 10px;
		margin-right: 18px;
	`};
	${media.desktop`
		cursor: pointer;
		padding: 10px 10px;
		margin-right: 18px;
	`};
`;

const growDown = keyframes`
	0% {
    	transform: scaleY(0)
  	}
  	80% {
		transform: scaleY(1.1)
  	}
  	100% {
    	transform: scaleY(1)
  	}
`;
export const Menu = styled.div`
	position: absolute;
	display: ${props => props.open ? 'block' : 'none'};
	top: 0;
	left: 0;
	width:  ${props => props.width ? props.width : `calc(93.5% - 20px)`};
	margin-left: 5%;
	margin-right: 3%;
	margin-top: 3rem;
  	background-color: white;
  	box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
	padding: 5px;
  	z-index: 1;
	animation: .5s ${growDown} ease-in-out;

	${media.desktop`
	  	position: relative;
	  	display: flex;
		margin: 0;
		box-shadow: none;
	`};

	${props => props.width && css`
	  	top: 0;
		left: -15px;
		margin: 0;
		margin-top: 40px;

		${media.desktop`
	  		position: absolute;
	  		display: ${props => props.open ? 'block' : 'none'};
			top: 0;
			left: -15px;
			margin-top: 40px;
			box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
		`};
	`};
`;


export const MenuItem = styled.div`
  	color: black;
	background-color: white;
  	text-decoration: none;

  	display: block;
	position: relative;
  	text-align: left;
	padding: 5px 13px;
	font-size: 14px;
	${media.desktop`
	  	:hover {
			.submenu {
				display: block;

			}
		}
	`};

	:hover {
		.submenu {
			display: block;
		}
	}
`;
export const SubMenu = styled.div`	
	display: none;
	animation: .3s ${growDown} ease-in-out;

	${media.desktop`
		display: block;
		position: absolute;
		width:  150px;
		margin-top: 5px;
		left: 0;
		display: none;
		border-top: 5px solid #ff003c;
	`};
`;
export const SubMenuItem = styled(MenuItem)`
	${media.desktop`
		text-align: center;
		cursor: pointer;
	`};
`; 