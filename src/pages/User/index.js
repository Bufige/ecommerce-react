import React, { useState } from 'react';
import Profile from './Profile';

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
                return items[1].text;
            }
            case 'Address': {
                return items[2].text;
            }
            default: {
                return items[0].text;
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