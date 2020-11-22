import {
	TOKEN_KEY, 
	USER
} from '../utils/localVariables';

export const getUser = () => {
	return JSON.parse(localStorage.getItem(USER));
}
export const setUser = (user) => {
	return localStorage.setItem(USER, JSON.stringify(user));
}

export const getToken = () => {
	return localStorage.getItem(TOKEN_KEY)
}
export const setToken = (token) => {
	return localStorage.setItem(TOKEN_KEY, token);
}
export const logout = () => {
	localStorage.removeItem(TOKEN_KEY);
	localStorage.removeItem(USER);
}