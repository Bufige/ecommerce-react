import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';


import GlobalStyle from './styles/global';
import Header from './components/Header';
import Footer from './components/Footer';

import { StoreProvider } from './storeContext';
import Home from './pages/Home';
import Product from './pages/Product';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Contact from './pages/Contact';
import Cart from './pages/Cart';

function App() {
	return <StoreProvider>
		<Router>
			<GlobalStyle />
			<Header/>
			<Switch>
				<Route path='/cart' component={Cart}/>
				<Route path='/contact' component={Contact}/>
				<Route path='/signup' component={SignUp}/>
				<Route path='/signin' component={SignIn}/>
				<Route path='/product/:id' component={Product}/>
				<Route path='/' component={Home}/>
			</Switch>
			<Footer/>
		</Router>
		
  	</StoreProvider>
}

export default App;
