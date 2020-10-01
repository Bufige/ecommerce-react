import React from 'react';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Home from './pages/Home';
import { StoreProvider } from './storeContext';

function App() {
	return <StoreProvider>
		<GlobalStyle />
		<Header/>
		<Home/>
  	</StoreProvider>
}

export default App;
