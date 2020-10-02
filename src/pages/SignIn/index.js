import React,{useState} from 'react';

import {
	Container,
	Title,
	Input,
	Submit,
	InputContainer,
	Icon
} from './styles';

export default function SignIn(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return <Container>
		<Title>Sign in</Title>
		<InputContainer>
			<Icon className="fas fa-user"/>
			<Input type="text" placeholder="example@example.com" onChange={(e) => setEmail(e.target.value)}/>
		</InputContainer>
		<InputContainer>
			<Icon className="fas fa-lock"/>
			<Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
		</InputContainer>
		<Submit>sign in</Submit>
	</Container>
}