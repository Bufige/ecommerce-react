import styled from 'styled-components';
import media from '../../media';


export const Container = styled.button`
    width: 200px;
	height: 45px;
	margin: 20px 0;
	border-radius: 30px;
	padding: 10px 20px;
	color: white;
	font-size: 16px;
	font-weight: bolder;
	background-color: var(${ ({color}) => color || '--color-success'});
	border: 1px solid var(--color-grey);
	text-transform: uppercase;
	outline: none;
	user-select: none;

    ${media.tablet`
		cursor: pointer;
	`};
	${media.desktop`
		cursor: pointer;
	`};
`;