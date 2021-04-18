import React, { useEffect, useState } from 'react';

import InputContainer from '../../../components/InputContainer';
import Button from '../../../components/Button';
import FieldMessage from '../../../components/FieldMessage';

import {
    Container
} 
from './styles';
import userService from '../../../services/userService';

export default function Address(props) {
	const errorTime = 5 * 1000;
	
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
	const [city, setCity] = useState('');
	const [neighborhood, setNeighborhood] = useState('');
	const [zipcode, setZipcode] = useState('');
	const [address, setAddress] = useState('');
	const [number, setNumber] = useState('');

    const [inputError, setInputError] = useState();
    
    const onCountry = (text) => {
        setCountry(text);
    }
    const onState = (text) => {
        setState(text);
    }
    const onCity = (text) => {
        setCity(text);
	}
	const onNeighborhood = (text) => {
        setNeighborhood(text);
	}
	const onZipcode = (text) => {
        setZipcode(text);
	}
	const onAddress = (text) => {
        setAddress(text);
	}
	const onNumber = (text) => {
        setNumber(text);
	}

    const onSubmit = (e) => {		
		userService.storeAddress(country, state, city, neighborhood, zipcode, address, number).then( res => {
			if(res.data) {
                loadAddress(res.data);
            }
		}, (error) => {
            if(error.response.data.error) {
                setInputError(error.response.data.error);
            }
        });
    }

    useEffect( () => {
		userService.getAddress().then(res => {
			if(res) {
				loadAddress(res);
			}
		});
	}, []);
	
	const loadAddress = (data) => {
		setCountry(data.country);
		setState(data.state);
		setCity(data.city);
		setNeighborhood(data.neighborhood);
		setZipcode(data.zipcode);
		setAddress(data.address);
		setNumber(data.number);
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
        <form>
            { showError('username') || showError('error')}
            <InputContainer placeholder="country" icon="fas fa-flag" value={country} onChange={onCountry}/>
            { showError('country') }
            <InputContainer placeholder="State" icon="fas fa-home" value={state} onChange={onState}/>
            { showError('state') }
            <InputContainer placeholder="City" icon="fas fa-city" value={city} onChange={onCity}/>
            { showError('city') }
			<InputContainer placeholder="Neighborhood" icon="fas fa-map-marker-alt" value={neighborhood} onChange={onNeighborhood}/>
            { showError('neighborhood') }
			<InputContainer placeholder="Zipcode" icon="fas fa-map-marker-alt" value={zipcode} onChange={onZipcode}/>
            { showError('zipcode') }
			<InputContainer placeholder="Address" icon="fas fa-address-card" value={address} onChange={onAddress}/>
            { showError('address') }
			<InputContainer placeholder="Number" icon="fas fa-map-marker-alt" value={number} onChange={onNumber}/>
            { showError('number') }
			<Button onClick={onSubmit} text="update" buttontype="cart"/>
        </form>
    </Container>
}