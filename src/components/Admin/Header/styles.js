import styled from 'styled-components';

import {
	Link as RLink
} from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    flex-direction: row-reverse;
    height: 40px;
    width: 100%;
    background-color: white;
`;
export const ItemContainer = styled(RLink)`
    display: flex;
    align-items: center;
    height: 40px;
    
    padding: 0 15px;
    
    color: var(--color-header);
    text-decoration: none;
	outline: 0;
	user-select: none;

    :hover {
        background-color: var(--color-info);
    }
    i {
        width: 24px;
        color: var(--color-grey-dark);
    }

    cursor: pointer;
`;
export const Item = styled.div`

`;