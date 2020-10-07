import React from 'react';


import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';


import GlobalStyle from './styles/global';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Product from './pages/Product';
import Products from './pages/Products';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import { PrivateRoute } from './components/PrivateRoute';
import { useStoreContext } from './storeContext';


export default function Routes(props) {
	const {user} = useStoreContext();
	return <Router>
		<GlobalStyle />
		<Header/>
		<Switch>
			<Route path="/cart" component={Cart}/>
			<Route path='/contact' component={Contact}/>
			<PrivateRoute path="/signup" component={SignUp} condition={!user ? true : false} redirectTo="/"/>
			<PrivateRoute path="/signin" component={SignIn} condition={!user ? true : false} redirectTo="/"/>
			<Route path='/products' component={Products}/>
			<Route path='/product/:id' component={Product}/>
			<Route path='/' component={Home}/>
		</Switch>
		<Footer/>
	</Router>
} 