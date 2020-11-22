import React, { useEffect, useState } from 'react';

import InputContainer from '../../../components/InputContainer';
import Submit from '../../../components/ButtonSubmit';
import FieldMessage from '../../../components/FieldMessage';

import {
    Container
} 
from './styles';
import userService from '../../../services/userService';
import { setUser as setLUser} from '../../../helpers/localStorage';

import { useStoreContext } from '../../../storeContext';


export default function Profile(props) {
    const errorTime = 5 * 1000;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [inputError, setInputError] = useState();

    const {user, setUser} = useStoreContext();
    
    const onName = (text) => {
        setName(text);
    }
    const onEmail = (text) => {
        setEmail(text);
    }
    const onPassword = (text) => {
        setPassword(text);
    }
    const onSubmit = () => {
        userService.update(name, email, password).then( res => {
            if(res.data) {
                setUser(res.data.user);
                setLUser(res.data.user);
            }
        }, (error) => {
            if(error.response.data.error) {
                setInputError(error.response.data.error);
            }
        });
    }

    useEffect( () => {
        if(user) {
            setName(user.username);
            setEmail(user.email);
        }
        
    }, [user]);
    const showError = (field) => {
		if(inputError) {
			if(inputError.field === field) {
				setTimeout(() => setInputError(undefined), errorTime);
				return <FieldMessage message={inputError.message} type="info"/>;
			}
		}
	}
    return <Container>
        <form>
            { showError('username') || showError('error')}
            <InputContainer placeholder="name" icon="fas fa-user" value={name} onChange={onName}/>
            { showError('email') }
            <InputContainer placeholder="email" icon="fas fa-envelope" value={email} onChange={onEmail}/>
            { showError('password') }
            <InputContainer type="password" placeholder="password" icon="fas fa-lock" value={password} onChange={onPassword}/>
            <Submit onClick={onSubmit} text="update"/>
        </form>
    </Container>
}