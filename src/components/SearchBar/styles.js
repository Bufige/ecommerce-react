import styled from 'styled-components';
import media from '../../media';

export const Container = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	width: 100%;
`;
export const Input = styled.input.attrs(props => ({
	type: 'text',
}))`
	width: calc(100% - 48px);
	height: 40px;
	border-radius: 50px;
	border: none;
	background: #f0f0f0;
	padding-left: 16px;
	padding-right: 48px;
	font-size: 14px;
	outline: 0;
`


export const Search = styled.i`
	position: absolute;
	top: 0;
	right: 0;
	margin-top: .9rem;
	margin-right: 2.5%;

	${media.tablet`
		margin-right: .7rem;
	`};
	${media.desktop`
		margin-right: .7rem;
	`};
	${media.desktop`
		cursor: pointer;
	`};
`;