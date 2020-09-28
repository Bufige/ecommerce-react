import styled, {css} from 'styled-components';
import media from '../../media';



export const Container = styled.div`
	position: relative;
	width: 100%;
	height: 450px;
	background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
	background-image: ${props => `url(${props.image})`};
  	overflow: hidden;
  	text-overflow: ellipsis;

	${media.desktop`
		height: 400px;
	`};
`;


export const Content = styled.div`
	display: flex;
	flex-direction: column;
	padding: 80px 10px;
	max-height: 300px;
`;

export const Title = styled.h2`
	color: white;
	text-transform: uppercase;
`;


export const Text = styled.p`
	color: white;
	font-size: 18px;
    font-weight: 300;
    margin-bottom: 35px;
`; 


export const Dots = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	bottom: 20px;
	left: 50%;
	transform: translateX(-50%);
	
	* {
		margin-left: 10px;
	}

`;

export const Dot = styled.div`
	width: 16px;
	height: 16px;
	opacity: .25;

	border-radius: 50%;
	background-color: white;

	&.active {
		opacity: 1;
	}
	outline: 0;
	user-select: none;
	${media.desktop`
		cursor: pointer;
	`};
`;
export const Arrow = styled.div`
	width: 32px;
	height: 32px;
	opacity: .75;
	border: 2px solid white;
	border-radius: 50%;
	color: white;

	line-height: 30px;
  	text-align: center;
	outline: 0;
	user-select: none;
	
	${media.desktop`
		cursor: pointer;
	`};	
`

export const Actions = styled.div`
	display: flex;
	position: absolute;
	align-items: center;
	bottom: 65px;
	left: 50%;
	transform: translateX(-50%);
	*{
		margin-left: 10px;
	}
`;

const Button = css`
	text-transform: uppercase;
	padding: 15px 30px;
	border-radius: 20px;
	border: none;
	min-width: 170px;
	outline: 0;
	font-size: 14px;
	font-weight: 600;
	${media.desktop`
		cursor: pointer;
	`};	
`;

export const Discover = styled.button`
	${Button};
	color: white;
	background-color: rgba(0,0,0, .2);
	border: 1px solid white;
`;

export const Cart = styled.button`
	${Button};
	background-color: white;
`;