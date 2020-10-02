import styled from 'styled-components';
import {Link as RLink}  from 'react-router-dom';

import media from '../../media';



export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
export const ContainerLeft = styled.div`
	display: flex;
	flex-direction: column;
`;
export const ContainerRight = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
export const Title = styled.h1`
	margin: 20px 0;
`;
export const Input = styled.input`
	padding: 5px 10px;
	margin: 10px;
	width: 280px;
	height: 30px;
	border: 1px solid var(--color-grey);
	
	outline: 0;
	user-select: none;
`;
export const TextArea = styled.textarea`
	padding: 10px;
	margin: 10px;
	min-width: 280px;
	max-width: 280px;
	min-height: 200px;
	max-height: 200px;
	border: 1px solid var(--color-grey);

	outline: 0;
	user-select: none;
`;
export const Content = styled.div`
	display: flex;

	flex-direction: column;

	${media.desktop`
		flex-direction: row;
	`};
`;


export const Icon = styled.i`
	margin: 0 10px;
`;
export const SupportContainer = styled.div`
	display: flex;
	align-items: center;
	margin: 20px;
`;

export const Link = styled(RLink)`
	color: var(--color-header);
    text-decoration: none;
	outline: 0;
	user-select: none;

	${media.desktop`
		cursor: pointer;
	`};
`;
