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
	}
};

export default userService;