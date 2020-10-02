import React, {useState} from 'react';

import {
	Container,
	Input,
	InputUpdate
} from './styles';

export default function InputCount(props) {
	const [value, setValue] = useState(props.value);

	const updateValue = (v) => {
		let x = value + v;
		x = Math.max(1, x);
		setValue(x);

		if(props.onChange) {
			props.onChange(x);
		}
	}
	return <Container>
		<InputUpdate side="left" onClick={() => updateValue(-1)}>-</InputUpdate>
			<Input value={value} readOnly/>
		<InputUpdate onClick={() => updateValue(1)}>+</InputUpdate>
	</Container>
}