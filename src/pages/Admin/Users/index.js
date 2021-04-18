import React from 'react';

import {Container} from './styles';
import {Header, ContentItem} from '../styles';
import Button from '../../../components/Button';

export default function Users() {
	const onClick = () => {
		console.log('add users');
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