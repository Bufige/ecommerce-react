import React, { useState } from 'react';


import {Container, Content, Title, Description, Input, Subscribe} from './styles';

export default function NewsLatter(props) {
	const [email, setEmail] = useState('');

	const onSubmit = () => {
		console.log("send news latter to:" + email);
	}

	return <Container>
		<Content>
			<Title>Get our lastest offers news</Title>
			<Description>Subscribe news latter</Description>
		</Content>

		<Content>
			<Input placeholder="Your email here" value={email} onChange={ (e) => setEmail(e.target.value)}/>
			<Subscribe>Shop Now</Subscribe>
		</Content>
	</Container>
}