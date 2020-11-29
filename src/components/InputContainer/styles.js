import styled from 'styled-components';
import media from '../../media';


export const Container = styled.div`
	position: relative;
	display: flex;
    width: 100%;
	margin: 10px 0;
	align-items: center;
`;
export const Input = styled.input`
    width: 100%;
	height: 30px;
	padding: 5px 20px 5px 40px;
	border-radius: 30px;
	border: 1px solid var(--color-grey);
	outline: none;
	user-select: none;

	${media.tablet`
		width: 280px;
		height: 30px;
	`};
	${media.desktop`
		width: 300px;
		height: 30px;
	`};
`;
export const Icon = styled.i`
	position: absolute;
	margin-left: 15px;
`;