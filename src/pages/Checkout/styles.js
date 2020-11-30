import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 5px;
`;
export const Title = styled.div`
    font-size: 22px;
    margin: 10px 0;
`; 

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
`;

export const InputContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    input{
        :first-child {
            margin-right: 15px;
        }
    }
    i {
        position: absolute;
        margin-left: 7px;
    }
`;

export const Input = styled.input.attrs(props => ({
    type: props.type || 'text' ,
})) `
    padding: ${ ({padding}) => padding || '10px 15px'};
    border: 1px solid var(--color-grey);
    border-radius: 20px;

    width: ${ ({width}) => width || 'calc(100% - 30px)'};

    user-select: none;
    outline: 0;

    margin: 10px 0;
`;