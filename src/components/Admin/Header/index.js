import React from 'react';

import {Container, ItemContainer, Item} from './styles';

export default function Header() {

    const items = [
        {
            name: 'Profile',
            icon: 'fas fa-user',
            to: "/user"
        },
        {
            name: 'Sair',
            icon: 'fas fa-sign-out-alt',
            to: "/"
        }
    ];
    
    return <Container>
        {items.reverse().map( (item) => {
            return <ItemContainer to={item.to} key={item.name}>
                <i className={item.icon}></i>
                <Item>{item.name}</Item>
            </ItemContainer>
        })}
    </Container>
}