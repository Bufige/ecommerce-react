import styled, { css, keyframes } from 'styled-components';
import media from '../../media';

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 10px 0;
`;
export const ContainerLeft = styled.div`
	align-items: center;
`;

export const ContainerRight = styled.div`
	display: flex;
	align-items: center;
	margin-right: 5px;
`

export const Logo = styled.img`
	vertical-align: center;
	max-width: 100%;
	margin: 15px;
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

    	-webkit-transition: all 0.2s ease-out 0s;
    	-moz-transition: all 0.2s ease-out 0s;
    	-ms-transition: all 0.2s ease-out 0s;
    	-o-transition: all 0.2s ease-out 0s;
    	transition: all 0.2s ease-out 0s;
    	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
	}
`;
export const Link = styled.a`
	color: var(--color-header);
    text-decoration: none;
	outline: 0;
	user-select: none;

	${media.desktop`
		cursor: pointer;
	`};
`;


export const Bars = styled(Icon)`
	margin: 10px 5px;
	
	${media.desktop`
		display: none !important;
	`};
`;


export const CartRound = styled.div`
	border-radius: 50%;
	border: 1px solid #eeeeee;
	padding: 10px 10px;
	outline: 0;
	margin-right: 18px;
	position: relative;

	${media.desktop`
		cursor: pointer;
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
	margin-top: 4rem;
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
  	text-align: left;
	padding: 5px 13px;
	font-size: 14px;
	position: relative;
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