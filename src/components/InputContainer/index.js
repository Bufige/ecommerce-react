import React, { useEffect, useState } from 'react';


import {
    Container,
    Input,
    Icon
} from './styles';

export default function InputContainer(props) {
    const [value, setValue] = useState('');
    useEffect( () => {
        setValue(props.value);
    }, [props.value]);
    
    const onChange = (e) => {
        if(props.onChange) {
            props.onChange(e.target.value);
        }
    }
    return <Container>
        {
            props.icon && <Icon className={props.icon} />
        }
        <Input type={props.type || 'text'} placeholder={props.placeholder} value={value} onChange={onChange} />
    </Container>
}