import React, { useState } from 'react';
import FieldMessage from '../../components/FieldMessage';
import { setToken as setLToken, setUser as setLUser} from '../../helpers/localStorage';
import userService from '../../services/userService';
import { useStoreContext } from '../../storeContext';

import {
	Container,
	Form,
	Title,
	Input,
	Submit,
	InputContainer,
	Icon
} from './styles';

export default function SignIn(props) {
	const errorTime = 5 * 1000;

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [inputError, setInputError] = useState();

	const {setToken, setUser} = useStoreContext();
	const onSubmit = (e) => {
		e.preventDefault();

		
		if (email && password) {
			userService.login(email, password).then(res => {

				if(res.data) {
					setLToken(res.data.auth.token);
					setToken(res.data.auth.token);

					setLUser(res.data.user);
					setUser(res.data.user);
				}
				else {
					if(res.error) {
						setInputError(res.error);
					}
				}

			});
		}
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
		<Title>Sign in</Title>
		<Form>
			{ showError('email') || showError('failed')}
			<InputContainer>
				<Icon className="fas fa-user" />
				<Input type="text" placeholder="example@example.com" onChange={(e) => setEmail(e.target.value)} />
			</InputContainer>
			{ showError('password') }
			<InputContainer>
				<Icon className="fas fa-lock" />
				<Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
			</InputContainer>
			<Submit type="submit" onClick={onSubmit}>sign in</Submit>
		</Form>

	</Container>
}