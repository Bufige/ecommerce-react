import React, { useEffect, useState } from 'react';

import {
	Switch,
	Route,
    useLocation
} from 'react-router-dom';

import { PrivateRoute } from './components/PrivateRoute';
import { useStoreContext } from './storeContext';

import GlobalStyle from './styles/global';

// user components
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Product from './pages/Product';
import Products from './pages/Products';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import User from './pages/User';

// admin components
import Admin from './pages/Admin';
import AdminHeader from './components/Admin/Header';
import AdminFooter from './components/Admin/Footer';

export default function Pages(props) {
    const {user} = useStoreContext();
    const [isInAdmin, setIsInAdmin] = useState(false);
    const location = useLocation();
    
    useEffect( () => {
        if(location.pathname.includes('admin')) {
            if(!isInAdmin) {
                setIsInAdmin(true);
            }
        } else {
            if(isInAdmin) {
                setIsInAdmin(false);
            }
        }
    }, [location]);

    return <> 
        <GlobalStyle />
        { user && user.role === 'admin' && isInAdmin ? <AdminHeader/> : <Header/> }
		<Switch>
			<Route path="/cart" component={Cart}/>
			<Route path='/contact' component={Contact}/>
			<PrivateRoute path="/signup" component={SignUp} condition={!user ? true : false} redirectTo="/"/>
			<PrivateRoute path="/signin" component={SignIn} condition={!user ? true : false} redirectTo="/"/>
			<Route path='/products' component={Products}/>
			<Route path='/product/:id' component={Product}/>
			<PrivateRoute path="/user" component={User} condition={user ? true : false} redirectTo="/"/>
			<PrivateRoute path="/admin" component={Admin} condition={user ? true : false} redirectTo="/"/>
			
			<Route path='/' component={Home}/>
		</Switch>
        { user && user.role === 'admin' && isInAdmin ? <AdminFooter/> : <Footer/> }
    </>
}
