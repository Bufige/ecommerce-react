import styled from 'styled-components';
import media from '../../media';


export const Container = styled.div`
	width: calc(100% - 10px);
	height: 250px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: #9ee8ff;
	border-radius: 30px;

	margin: 30px 0;
	${media.tablet`
		flex-direction: row;
		align-items: center;
	`};
	${media.desktop`
		flex-direction: row;
		align-items: center;
	`};
`;

export const Content = styled.div`
	overflow-wrap: wrap;
	margin-top: 20px;
	padding: 0px 10px;
	${media.desktop`

	`};
`;

export const Title = styled.h3`
	text-transform: capitalize;
	margin: 10px 0;
`;

export const Description = styled.p`
	text-transform: capitalize;
	font-size: 18px;
	margin: 10px 0;
`

export const Input = styled.input`
	border-radius: 20px;
	margin-right: 20px;
	padding: 10px 10px;
	border: 2px solid var(--color-grey);
	outline: 0;

	width: 150px;

	${media.tablet`
		width: 200px;
		height: 25px;
	`};	
	${media.desktop`
		width: 300px;
		height: 30px;
	`};	
`;


export const Subscribe = styled.button`
	width: 100px;
	height: 40px;
	text-transform: capitalize;
	background-color: var(--color-primary);
	color: white;
	border-radius: 20px;
	outline: none;
	border: none;
	padding: 5px 5px;

	${media.desktop`
		width: 180px;
		height: 45px;
		cursor: pointer;
	`};
`