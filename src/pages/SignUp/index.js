import React, { useState } from 'react';

import {
	Container,
	Title,
	Input,
	Submit,
	InputContainer,
	Icon
} from './styles';

export default function SignUp(props) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [cpassword, setCPassword] = useState('');


	const onSubmit = () => {
		
	}	
	return <Container>
		<Title>Sign up</Title>
		<InputContainer>
			<Icon className="fas fa-user"/>
			<Input type="text" placeholder="Your name" onChange={(e) => setName(e.target.value)}/>
		</InputContainer>
		<InputContainer>
			<Icon className="fas fa-envelope"/>
			<Input type="text" placeholder="example@example.com" onChange={(e) => setEmail(e.target.value)}/>
		</InputContainer>
		<InputContainer>
			<Icon className="fas fa-lock"/>
			<Input type="password" placeholder="Your password" onChange={(e) => setPassword(e.target.value)}/>
		</InputContainer>
		<InputContainer>
			<Icon className="fas fa-lock"/>
			<Input type="password" placeholder="Confirm your password" onChange={(e) => setCPassword(e.target.value)}/>
		</InputContainer>
		<Submit onClick={onSubmit}>sign up</Submit>
	</Container>
}