import React, {createContext, useState, useContext, useEffect} from 'react';
 
export const StoreContext = createContext();

const StoreProvider = (props) => {
	const [user, setUser] = useState();
	
	const storeData = {
		user, setUser
	};

	return <StoreContext.Provider value={storeData} {...props}/>
}


const useStoreContext = () => {
	return useContext(StoreContext);
}

export {StoreProvider, useStoreContext};