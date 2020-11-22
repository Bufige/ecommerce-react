import React,{useEffect, useState} from 'react';
import { useStoreContext } from '../../storeContext';


import {
	Container,
	Content,
	Title,
	Input,
	ContainerLeft,
	ContainerRight,
	SupportContainer,
	Icon, 
	TextArea,
} from './styles';

export default function Contact() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	const {user} = useStoreContext();

	useEffect( () => {
		if(user) {
			setName(user.name);
			setEmail(user.email);
		}
	}, []);

	return <Container>
		<Title>Get in touch</Title>

		<Content>
			<ContainerLeft>
				<Input type="text" value={name} placeholder="Your name" onChange={(e) => setName(e.target.value)}/>
				<Input type="text" value={email} placeholder="example@example.com" onChange={(e) => setEmail(e.target.value)}/>
				<Input type="text" value={subject} placeholder="Subject" onChange={(e) => setSubject(e.target.value)}/>
				<TextArea subject={message} placeholder="Enter message" onChange={(e) => setMessage(e.target.value)}/>
			</ContainerLeft>
			<ContainerRight>
				<SupportContainer>
					<Icon className="fas fa-mobile fa-lg"></Icon>
					<a href="tel:+1234567890" target="_blank" rel="noopener noreferrer">+1234567890</a>
				</SupportContainer>
				<SupportContainer>
					<Icon className="fas fa-envelope fa-lg"></Icon>
					<a href="mailto:bufige1434@gmail.com" target="_blank" rel="noopener noreferrer">bufige1434@gmail.com</a>
					
				</SupportContainer>
			</ContainerRight>
			
		</Content>
	</Container>
}