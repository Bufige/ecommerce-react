import styled from 'styled-components';
import media from '../../../media';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40px;
    height: 100%;
    left: 0;

    background-color: var(--color-primary);

    ${media.tablet`
		cursor: pointer;
        width: 200px;
        align-items: initial;
	`};
	${media.desktop`
		cursor: pointer;
        width: 200px;
        align-items: initial;
	`};
`;
export const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    height: 35px;
    padding: 10px 0px;
    cursor: pointer;
    :hover {
        background-color: var(--color-grey-dark);
    }
    &.active {
        background-color: var(--color-info);
    }
    i {
        display: flex;
        justify-content: center;
        width: 40px;
        color: white;

        ${media.tablet`
            width: 48px;
	    `};
	    ${media.desktop`
            width: 48px;
	    `};
    }
    ${media.tablet`
        padding: 10px 5px;
	`};
	${media.desktop`
        padding: 10px 5px;
	`};
`;
export const Item = styled.div`
    display: none;
    color: var(--color-grey);
    ${media.tablet`
		display: flex;
	`};
	${media.desktop`
        display: flex;
	`};
`;