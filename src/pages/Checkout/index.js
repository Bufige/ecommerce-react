import React, {useState} from 'react';
import CreditCardType, {
    getTypeInfo,
    types as CardType,
  } from 'credit-card-type';

import ButtonSubmit from '../../components/ButtonSubmit';

import {Container, InputContainer, Form, Input, Title} from './styles';



const getCardType = (type) => {
    switch(type) {
        case CardType.MASTERCARD: {
            return 'fab fa-cc-mastercard';
        }
        case CardType.VISA: {
            return 'fab fa-cc-visa';
        }
        case CardType.AMERICAN_EXPRESS: {
            return 'fab fa-cc-amex';
        }
        case CardType.DISCOVER: {
            return 'fab fa-cc-discover';
        }
        case CardType.JCB: {
            return 'fab fa-cc-jcb';
        }
        default: {
            return "";
        }
    }
}

export default function Checkout() {
    const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cardDate, setCardDate] = useState('');
    const [cardCvc, setCardCvc] = useState('');

    const [cardType, setCardType] = useState('');
    const onSubmit = () => {
        console.log([
            name, 
            cardNumber,
            cardDate,
            cardCvc
        ]);
    }

    const isDisabled = () => {
        if(name.length < 6) {
            return true;
        }
        if(!(cardNumber.length >= 13 && cardNumber.length <= 16)) {
            return true;
        }
        return false;
    }
    const onCard = (e) => {
        setCardNumber(e.target.value);
        try {
            const type = CreditCardType(e.target.value)[0].type;
            setCardType(type);
        }
        catch(e) {

        }
    }
    const onDate = (e) => {
        const input = e.target;
        if(e.charCode < 47 || e.charCode > 57) {
            e.preventDefault();
        }
        const len = input.value.length;

        if(len === 0 && e.charCode > '1'.charCodeAt(0)) {
            e.preventDefault();
        }
        else if(len === 1) {
            if(input.value[0] !== '0' && e.charCode > '2'.charCodeAt(0)) {
                e.preventDefault();
            }
            else if(input.value[0] !== '1' && e.charCode === '0'.charCodeAt(0)) {
                e.preventDefault();
            }
        }
        else if(len === 2) {
            input.value += '/';
        }
    }
    const onCardNumber = (e) => {
        const input = e.target;
        if(e.charCode < 47 || e.charCode > 57) {
            e.preventDefault();
        }

        const len = input.value.length + 1;
        if(len % 5 === 0 && len < 16) {
            input.value += ' ';
        }
    }
    const onCardNumberDown = (e) => {
        const key = e.keyCode;
        // backspace
        if (key === 8) {
            const len = cardNumber.length;
            if(len - 2 >= 0 && cardNumber[len - 2] === ' ') {
                setCardNumber(cardNumber.substring(0, cardNumber.length - 1));
            }
        }
    }
    return <Container>
        <Form>
            <Title>Checkout</Title>

            <Input maxLength="48" placeholder="Card Holder Name" value={name} onChange={e => setName(e.target.value)}/>
            
            <InputContainer>
                <i className={getCardType(cardType)}></i>
                <Input placeholder="Card Number"
                    maxLength="19"
                    type="text" value={cardNumber} 
                    onKeyPress={onCardNumber}
                    onKeyDown={onCardNumberDown}
                    padding={getCardType(cardType) ? "10px 30px" : "10px 15px"} 
                    onChange={onCard}/>
            </InputContainer>
            <InputContainer>
                <Input placeholder="Expiry date (MM/YY)" maxLength="5" onKeyPress={onDate} value={cardDate} onChange={e => setCardDate(e.target.value)}></Input>
                <Input maxLength="4" placeholder="CVC" value={cardCvc} onChange={e => setCardCvc(e.target.value)}></Input>
            </InputContainer>

            <ButtonSubmit text="Checkout" onClick={onSubmit}/>
        </Form>
    </Container>
}