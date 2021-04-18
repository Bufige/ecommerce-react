import React from 'react';

import {Container} from './styles';

export default function Submit(props) {

    const onSubmit = (e) => {
        //e.preventDefault();
        if(props.onClick) {
            props.onClick();
        }
    }
    return <Container type="submit" onClick={onSubmit} color={props.color} disabled={props.disabled} buttontype={props.buttontype} to={props.to}>
        {props.text}
    </Container>
}