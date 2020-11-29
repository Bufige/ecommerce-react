import React, { useState } from 'react';

import {Container, ItemContainer, Item, } from './styles';

export default function SideBar(props) {
    const [selected, setSelected] = useState(0);
    const items = [
        {
            name: 'Dashboard',
            icon: 'fas fa-tachometer-alt'
        },
        {
            name: 'Products',
            icon: 'fas fa-shopping-bag'
        },
        {
            name: 'Users',
            icon: 'fas fa-users'
        },
        {
            name: 'Orders',
            icon: 'fas fa-wallet'
        },
    ]
    const onClick = (item, index) => {
        setSelected(index);
        if(props.onClick) {
            props.onClick(item);
        }
    }
    return <Container>
        {items.map( (item, index) => {
            return <ItemContainer key={item.name} className={index === selected && 'active'} onClick={ () => onClick(item, index) }>
                <i className={item.icon}></i>
                <Item>{item.name}</Item>
            </ItemContainer>
        })}
    </Container>
}