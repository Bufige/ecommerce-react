import styled, {css} from 'styled-components';
import media from '../../media';


export const Container = styled.div`
	display: flex;
	align-items: center;
`;

export const Input = styled.input.attrs(props => ({
	type: 'number',
	min: '1',
})) `
	position: relative;
	display: block;
	margin: 20px 0;
	padding: 0 30px;
	border-radius: 30px;
	width: 50px;
	height: 30px;
	outline: 0;
	border: 1px solid var(--color-grey);
	text-align: center;
`;

const inputLeft= css`
	margin-right: -32px;
	color: red;
`;
 const inputRight = css`
	margin-left: -32px;
	color: var(--color-success);
 `;
export const InputUpdate = styled.div`
	z-index: 9999;
	border-radius: 30px;
	width: 32px;
	height: 32px;
	text-align: center;
	font-weight: bolder;
	font-size: 20px;
	outline: none;
	user-select: none;
	${props => props.side === 'left' ? inputLeft : inputRight};

	${media.tablet`
		cursor: pointer;
	`};
	${media.desktop`
		cursor: pointer;
	`};
`;

