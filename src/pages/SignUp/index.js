import React, { useState } from 'react';
import userService from '../../services/userService';
import { useStoreContext } from '../../storeContext';
import { setToken as setLToken, setUser as setLUser} from '../../helpers/localStorage';


import {
	Container,
	Form,
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

	const {setToken, setUser} = useStoreContext();
	const onSubmit = (e) => {
		e.preventDefault();
		
		userService.register(name, email, password).then(res => {
			if(res.data) {
				setLToken(res.data.auth.token);
				setToken(res.data.auth.token);

				setLUser(res.data.user);
				setUser(res.data.user);
			}
			else {
				console.log(res.error);
			}
		});
	}
	return <Container>
		<Title>Sign up</Title>
		<Form>
			<InputContainer>
				<Icon className="fas fa-user" />
				<Input type="text" placeholder="Your name" onChange={(e) => setName(e.target.value)} />
			</InputContainer>
			<InputContainer>
				<Icon className="fas fa-envelope" />
				<Input type="text" placeholder="example@example.com" onChange={(e) => setEmail(e.target.value)} />
			</InputContainer>
			<InputContainer>
				<Icon className="fas fa-lock" />
				<Input type="password" placeholder="Your password" onChange={(e) => setPassword(e.target.value)} />
			</InputContainer>
			<InputContainer>
				<Icon className="fas fa-lock" />
				<Input type="password" value={cpassword} placeholder="Confirm your password" onChange={(e) => setCPassword(e.target.value)} />
			</InputContainer>
			<Submit type="submit" onClick={onSubmit}>sign up</Submit>
		</Form>

	</Container>
}