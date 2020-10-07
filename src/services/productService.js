import api from './api';


const productService = {
	index: async () => {
		return await api.get('/products').then(res => res.data);
	},
	store: async (name, description, price, discount = null, images = []) =>  {
		return await api.post('/products', name, description, price, discount, images).then(res => res.data);
	},
	show: async (id) => {
		return await api.get(`/products/${id}`).then(res => res.data);
	},
	update: async (id, name, description, price, discount = null, images = []) => {
		return await api.patch(`/products/${id}`, name, description, price, discount, images).then(res => res.data);
	},
	delete: async (id) => {
		return await api.delete(`/products/${id}`).then(res => res.data);
	}
};

export default productService;