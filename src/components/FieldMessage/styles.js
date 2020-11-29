import styled, { css } from 'styled-components'
import media from '../../media';


const success = css`
    background-color: var(--color-success);
`;

const info = css`
    background-color: var(--color-info);
`;
const danger = css`
    background-color: var(--color-danger);
`;

const secondary = css`
    background-color: var(--color-secondary);
`;
export const Container = styled.div`
    width: 320px;
    min-height: 35px;
    border-radius: 10px;
    p {
        font-size: 14px;
        font-weight: 600;
        padding: 5px 10px;
        color: white;
        word-wrap: break-word;
    }

    ${ ({type}) => {
        switch(type) {
            case 'success': {
                return success;
            }
            case 'danger': {
                return danger;
            }
            case 'info': {
                return info;
            }
            default: {
                return secondary;
            }
        }
    }};

    ${media.desktop`
        width: 350px;
    `};
`;