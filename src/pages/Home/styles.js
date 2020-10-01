import styled from 'styled-components';
import media from '../../media';

export const Container = styled.div`
	
`;

export const Content = styled.div`
	margin: 10px;
`
export const Title = styled.h1`
	text-align: center;
`;

export const Sort = styled.div`
	display: flex;
	justify-content: center;
	margin: 10px 10px;

	border-bottom: 1px solid var(--color-grey);
`;


export const SortItem = styled.div`
	font-size: 18px;
	padding: 16px 10px;
	color: #8f8f96;
	user-select: none;
	text-transform:capitalize;
	${media.desktop`
		cursor: pointer;
	`};

	&.active {
		color: var(--color-active);
	}
`;

export const ShopDetails = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	${media.tablet`
		flex-direction: row;
	`};
	${media.desktop`
		flex-direction: row;
	`};
`;
export const ShopContent = styled.div`
`;
export const Icon = styled.i`
	margin: 10px 0;
`;
export const ShopTitle = styled.h3`
	text-transform: capitalize;
	margin: 5px 0;
`;

export const ShopDescription = styled.p`
	width: 300px;
	font-size: 16px;
	margin: 5px 0;
	overflow-wrap: wrap;
`;
