import React, { useState } from 'react';

import Profile from './Profile';
import Address from './Address';
import Orders from './Orders';

import {
    Container,
    Bar,
    BarItem,
    Icon,
    Content
} from './styles';

export default function User(props) {
    const items = [
        {
            className: 'fas fa-user',
            text: 'Profile'
        },
        {
            className: 'fas fa-list',
            text: 'Orders'
        },
        {
            className: 'fas fa-address-card',
            text: 'Address'
        },
    ];
    const [cItem, setCItem] = useState(items[0].text);

    const showItem = () => {
        switch(cItem){
            case 'Profile': {
                return <Profile/>;
            }
            case 'Orders': {
                return <Orders/>;
            }
            case 'Address': {
                return <Address/>
            }
            default: {
                return <Profile/>;
            }
        }
    }
    return <Container>
        <Bar>
            { 
                items.map( (item, index) => {
                    return <BarItem key={index} onClick={() => setCItem(item.text)} className={item.text === cItem ? 'active' : ''}><Icon className={item.className}/>{item.text}</BarItem>
                })
            }
        </Bar>
        
        <Content>
            { showItem() }
        </Content>
    </Container>
}