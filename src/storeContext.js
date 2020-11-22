import React, {createContext, useState, useContext, useEffect} from 'react';
import { getToken, getUser } from './helpers/localStorage';


import Cart from './helpers/Cart';

export const StoreContext = createContext();

const StoreProvider = (props) => {
	const [user, setUser] = useState();
	const [token, setToken] = useState();
	const [cart] = useState(new Cart());

	useEffect( () => {
		setToken(getToken());
		setUser(getUser());

        function onSave()
        {
			cart.save();
		}
		
		window.addEventListener('beforeunload', onSave);

		return () => window.removeEventListener('beforeunload', onSave);
	}, []);
	
	const storeData = {
		user, setUser,
		token, setToken,
		
		cart
	};

	return <StoreContext.Provider value={storeData} {...props}/>
}


const useStoreContext = () => {
	return useContext(StoreContext);
}

export {StoreProvider, useStoreContext};