import React, { useState } from 'react';

import {Container, Content, ContentTitle} from './styles';
import SideBar from '../../components/Admin/SideBar';


import Dashboard from './Dashboard';
import Products from './Products';
import Users from './Users';
import Orders from './Orders';
import Carousel from './Carousel';



export default function Admin() {
    const [selected, setSelected] = useState("dashboard");

    const onSideBarItem = (item) => {
        setSelected(item.name.toLowerCase());
    }
    const updateContent  = () => {
        switch(selected) {
            case 'products': {
                return <Products/>
            }
            case 'users': {
                return <Users/>
            }
            case 'orders': {
                return <Orders/>
            }
            case 'carousel': {
                return <Carousel/>
            }
            default: {
                return <Dashboard/>
            }
        }
    }
    return <Container>
        <SideBar onClick={onSideBarItem}/>
        <Content>
			<ContentTitle>{selected.charAt(0).toUpperCase() + selected.slice(1)}</ContentTitle>
            {updateContent()}
        </Content>
    </Container>
}