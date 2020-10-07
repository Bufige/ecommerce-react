import styled from 'styled-components';
import media from '../../media';




export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	margin: 100px 0;
`; 


export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Title = styled.h1`
`;

export const InputContainer = styled.div`
	position: relative;
	display: flex;
	margin: 10px 0;
	align-items: center;
`;
export const Input = styled.input`
	width: 260px;
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
export const Submit = styled.button`
	width: 200px;
	height: 45px;
	margin: 20px 0;
	border-radius: 30px;
	padding: 10px 20px;
	color: white;
	font-size: 16px;
	font-weight: bolder;
	background-color: var(--color-primary);
	border: 1px solid var(--color-grey);
	text-transform: uppercase;
	outline: none;
	user-select: none;
	${media.desktop`
		cursor: pointer;
	`};
`;


export const Icon = styled.i`
	position: absolute;
	margin-left: 15px;
`;