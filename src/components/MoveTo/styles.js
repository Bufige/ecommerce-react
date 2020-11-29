import styled from 'styled-components';
import media from '../../media';

export const Container = styled.i`
    z-index: 10001;
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    background-color: var(--color-grey);
    border-radius: 30px;

    width: 64px;
    height: 64px;

    bottom: 0;
    right: 0;
    margin: 5px;
    i {

    }

    ${media.tablet`
        cursor: pointer;
	`};
	${media.desktop`
        cursor: pointer;
	`};
`;