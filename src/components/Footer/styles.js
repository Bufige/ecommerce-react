import styled from 'styled-components';
import media from '../../media';

export const Container = styled.footer`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-bottom: 20px;
`;

export const FooterContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	margin: 40px 0;
	padding: 10px 10px;
	${media.tablet`
		flex-direction: row;
		
	`};
	${media.desktop`
		flex-direction: row;
	`};
`;

export const FooterContent = styled.div`
	max-width: 250px;
	display: flex;
	flex-direction: column;
	
	${media.tablet`
		margin: 0 30px;
		
	`};
	${media.desktop`
		margin: 0 60px;
	`};
`;

export const FooterTitle = styled.div`
	font-size: 22px;
	text-transform: capitalize;
`;

export const FooterItem = styled.div`
	padding: 5px;
`;
export const FooterLink = styled.a`
	font-size: 16px;
	outline: 0;
	color: ${props => props.color ? props.color : `var(--color-grey-dark)` };
	text-transform: capitalize;
	max-width: 175px;
	
	
	${media.desktop`
		cursor: pointer;
	`};
`;

export const Copyright = styled.div`
	display: flex;
	align-items: center;
	font-size: 14px;
	color: var(--color-grey-dark);
	padding: 10px;
`;

export const Icon = styled.i`
	padding: 5px;
	margin: 0 5px;
`;

export const Social = styled.div`
	display: flex;
	align-items: center;
`;
export const Logo = styled.img`
	vertical-align: center;
	max-width: 100%;
`;