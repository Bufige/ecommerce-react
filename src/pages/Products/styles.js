import styled from 'styled-components';
import media from '../../media';


export const Container = styled.div`
	position: relative;
	margin: 0 5px;
	${media.desktop`
		padding: 30px 0;
	`};
`;

export const SearchOptions = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-bottom: 20px;

	${media.tablet`
		margin: 0 5px;
	`};

	${media.desktop`
		margin: 0 5px;
	`};
`;

export const SearchContent = styled.div`
	display: flex;
	justify-content: center;
	margin: 20px 0px;
`;
export const SearchContainer = styled.div`
	width: 100%;

	${media.tablet`
		width: 500px;
	`};

	${media.desktop`
		width: 625px;
	`};
`;
export const SortBy = styled.select`
	width: 150px;
	height: 40px;
	padding: 5px 15px;
	border-radius: 20px;
	margin-left: 30px;
	text-transform: uppercase;

	${media.tablet`
		user-select: none;
		outline: none;
	`};

	${media.desktop`
		user-select: none;
		outline: none;
	`};
`;