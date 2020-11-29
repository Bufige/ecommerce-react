import React, { useState } from 'react';

import {Container, Content} from './styles';
import SideBar from '../../components/Admin/SideBar';


import Dashboard from './Dashboard';
import Products from './Products';
import Users from './Users';
import Orders from './Orders';

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
            default: {
                return <Dashboard/>
            }
        }
    }
    return <Container>
        <SideBar onClick={onSideBarItem}/>
        <Content>
            {updateContent()}
        </Content>
    </Container>
}