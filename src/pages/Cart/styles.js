import styled from 'styled-components';
import media from '../../media';


export const Container = styled.div`
	justify-content: center;
	align-items: center;
	margin: 10px;
`;

export const CartTitle = styled.h1`

`;
export const CartHeader = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	padding: 10px;
	border-top: 1px solid var(--color-grey-dark);
	border-bottom: 1px solid var(--color-grey-dark);
`;
export const CartHeaderRight = styled.div`
	position: absolute;
	display: flex;
	right: 0;
`;

export const CartContent = styled.div`
	position: relative;
	margin-top: 10px;
	border-bottom: 1px solid var(--color-grey-dark);
	${media.tablet`
		padding: 30px;
	`};
	${media.desktop`
		padding: 30px;
	`};
`;
export const CartItemFix = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-left: 10px;
	${media.tablet`
		flex-direction: row;
	`};
	${media.desktop`
		flex-direction: row;
	`};
`;
export const CartItem = styled.div`
	display: flex;
	margin-bottom: 35px;


	${media.tablet`
		align-items: center;
	`};
	${media.desktop`
		align-items: center;
	`};
`;
export const CartItemTitle = styled.div`
	display: block;
	flex-wrap: wrap;
	overflow-wrap: break-word;
	font-size: 18px;
	font-weight: bolder;
	width: 150px;
	${media.tablet`
		width: initial;
	`};
	${media.desktop`
		width: initial;
	`};
`;

export const CartItemLeft = styled.div`
	display: flex;
`;

export const CartItemRight = styled.div`
	display: flex;
	align-items: flex-end;
	${media.tablet`
		position: absolute;
		display: flex;
		right: 0;
	`};
	${media.desktop`

	`};
`;
export const CartItemContent = styled.div`
	position: relative;
	:not(:first-child) {
		margin-left: 10px;
	}
`;
export const CartItemImage = styled.img`
	width: 150px;
	height: 150px;

	${media.desktop`
		width: 150px;
		height: 150px;
	
	`}
`;
export const CartBottom = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`;
export const CartItemPrice = styled.h3`
	color: var(--color-grey-dark);
`

export const Round = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 32px;
	height: 32px;
	padding: 5px;
	margin: 0 20px;
	border: 1px solid var(--color-grey-dark);
	border-radius: 20px;
	outline: 0;
	user-select: 0;
	${media.tablet`
		cursor: pointer;
	`};
	${media.desktop`
		cursor: pointer;
	`};
`;
export const CartItemDelete = styled.i`
	color: red;
`;


export const Button = styled.button`
	width: 200px;
	height: 35px;
	padding: 5px 10px;
	background-color: var(--color-success);

	border: 1px solid var(--color-grey);
	border-radius: 20px;
	color: white;
	font-weight: bold;

	outline: 0;
	user-select: 0;

	${media.tablet`
		cursor: pointer;
	`};
	${media.desktop`
		cursor: pointer;
	`};
`;