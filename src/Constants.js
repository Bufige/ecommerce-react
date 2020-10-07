const prod = {
	API_URL: `https://bufige-ecommerce-api.herokuapp.com`
};


const dev = {
	API_URL: `http://127.0.0.1:3333`
};



export const Config = process.env.NODE_ENV === `development` ? dev : prod;