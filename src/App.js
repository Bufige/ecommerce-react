import React from 'react';

import { StoreProvider } from './storeContext';

import Routes from './routes';

function App() {
	return <StoreProvider>
		<Routes/>		
  	</StoreProvider>
}

export default App;
