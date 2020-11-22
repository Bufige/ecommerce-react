import React, { useState } from 'react';
import userService from '../../services/userService';
import FieldMessage from '../../components/FieldMessage';
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
	const errorTime = 5 * 1000;

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [cpassword, setCPassword] = useState('');
	const [inputError, setInputError] = useState();

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
		}, (error) => {
			if(error.response.data.error) {
				setInputError(error.response.data.error);
			}
		});
	}
	const showError = (field) => {
		if(inputError) {
			if(inputError.field === field) {
				setTimeout(() => setInputError(undefined), errorTime);
				return <FieldMessage message={inputError.message} type="info"/>;
			}
		}
	}

	return <Container>
		<Title>Sign up</Title>
		<Form>
			{ showError('username') || showError('error')}
			<InputContainer>
				<Icon className="fas fa-user" />
				<Input type="text" placeholder="Your name" onChange={(e) => setName(e.target.value)} />
			</InputContainer>
			{ showError('email') }
			<InputContainer>
				<Icon className="fas fa-envelope" />
				<Input type="text" placeholder="example@example.com" onChange={(e) => setEmail(e.target.value)} />
			</InputContainer>
			{ showError('password') }
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