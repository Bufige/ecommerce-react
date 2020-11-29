import styled from 'styled-components';
import media from '../../media';

import {
	Link as RLink
} from 'react-router-dom';


export const Container = styled.div`
    display: flex;
    flex-direction: column;

    margin: 0 10px;
    ${media.tablet`
        flex-direction: row;
        align-items: normal;
        margin: 25px;
	`};
    ${media.desktop`
        flex-direction: row;
        align-items: normal;
        margin: 25px;
	`};
`;

export const Bar = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #f5f5f5;
    margin-bottom: 20px;

    ${media.tablet`
		min-width: 150px;
        width: 150px;
        height: 100%;

	`};
    ${media.desktop`
        min-width: 150px;
        width: 150px;
        height: 100%;

	`};
`;

export const BarItem = styled.div`
    display: flex;
    height: 35px;
    color: #666;
    text-decoration: none;
	outline: 0;
	user-select: none;
    align-items: center;
    border-bottom: 1px solid var(--color-grey);
    ${media.tablet`
		cursor: pointer;
	`};
	${media.desktop`
		cursor: pointer;
	`};

    &.active {
        border-left: 3px solid var(--color-primary);
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;  
    flex-wrap: wrap;
    word-break: break-all;

    ${media.tablet`
		cursor: pointer;
        width: calc(100% - 150px -  40px);
        align-items: center;
	`};
	${media.desktop`
		cursor: pointer;
        width: calc(100% - 150px - 40px);
        align-items: center;
	`};
`;

export const Icon = styled.i`
    padding: 3px 10px;
`; 