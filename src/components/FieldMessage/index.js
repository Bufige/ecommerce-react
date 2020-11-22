import React from 'react';

import {Container} from './styles';


export default function FieldMessage(props) {
    return <Container type={props.type}>
        <p>
            {props.message}
        </p>
    </Container>;
}