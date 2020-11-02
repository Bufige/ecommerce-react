import React, {createContext, useState, useContext, useEffect} from 'react';
import { getToken, getUser } from './helpers/localStorage';
 
export const StoreContext = createContext();

const StoreProvider = (props) => {
	const [user, setUser] = useState();
	const [token, setToken] = useState();

	useEffect( () => {
		setToken(getToken());
		setUser(getUser());
	}, []);
	
	const storeData = {
		user, setUser,
		token, setToken
	};

	return <StoreContext.Provider value={storeData} {...props}/>
}


const useStoreContext = () => {
	return useContext(StoreContext);
}

export {StoreProvider, useStoreContext};