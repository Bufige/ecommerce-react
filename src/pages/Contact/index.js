import React,{useState} from 'react';


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
	Link
} from './styles';

export default function Contact() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	return <Container>
		<Title>Get in touch</Title>

		<Content>
			<ContainerLeft>
				<Input type="text" placeholder="Your name" onChange={(e) => setName(e.target.value)}/>
				<Input type="text" placeholder="example@example.com" onChange={(e) => setEmail(e.target.value)}/>
				<Input type="text" placeholder="Subject" onChange={(e) => setSubject(e.target.value)}/>
				<TextArea placeholder="Enter message" onChange={(e) => setMessage(e.target.value)}/>
			</ContainerLeft>
			<ContainerRight>
				<SupportContainer>
					<Icon className="fas fa-mobile fa-lg"></Icon>
					<a href="tel:+1234567890" target="_blank">+1234567890</a>
				</SupportContainer>
				<SupportContainer>
					<Icon className="fas fa-envelope fa-lg"></Icon>
					<a href="mailto:bufige1434@gmail.com" target="_blank">bufige1434@gmail.com</a>
					
				</SupportContainer>
			</ContainerRight>
			
		</Content>
	</Container>
}