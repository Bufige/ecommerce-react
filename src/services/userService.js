import api from './api';

const userService = {
	login: async (email, password) => {
		return await api.post('/users/login', {email, password}).then(res => res.data);
	},
	register: async (username, email, password) => {
		return await api.post('/users/register', {username, email, password}).then(res => res.data);
	},
	update: async (username, email, password) => {
		return await api.put('/users/update', {username, email, password}).then(res => res.data);
	},
	getAddress: async () => {
		return await api.get('/address').then(res => res.data);
	},
	storeAddress: async (country, state, city, neighborhood, zipcode, address, number) => {
		return await api.post('/address', {country, state, city, neighborhood, zipcode, address, number}).then(res => res.data);
	}
};

export default userService;