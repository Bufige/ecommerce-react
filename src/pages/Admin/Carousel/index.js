import React from 'react';

import {Container} from "./styles";
import {Header, ContentItem} from '../styles';
import Button from '../../../components/Button';

export default function Carousel() {
	const onClick = () => {
		console.log('add carousel');
	}
    return <Container>
        <Header>
			<Button onClick={onClick} to="/" text="Create" buttontype="create"/>
		</Header>
		<ContentItem>
			Content
		</ContentItem>
    </Container>
}