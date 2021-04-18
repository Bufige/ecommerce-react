import React from 'react';

import {Container} from './styles';
import {Header, ContentItem} from '../styles';
import Button from '../../../components/Button';

export default function Orders() {
	const onClick = () => {
		console.log('add orders');
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