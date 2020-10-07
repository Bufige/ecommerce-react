import axios from 'axios';

import {Config} from '../Constants';

import { getToken } from '../helpers/localStorage';

const BASE_URL = Config.API_URL;

const api = axios.create({
	baseURL: BASE_URL
});

api.interceptors.request.use( (config) => {
	const token = getToken();
	if(token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
}, (error) => {
	return Promise.reject(error);
});

export default api;