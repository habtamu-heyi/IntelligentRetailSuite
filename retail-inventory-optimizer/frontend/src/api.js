
import axios from 'axios';
const BASE_URL = "http://127.0.0.1:5000";

export const addProduct = (data) => axios.post(`${BASE_URL}/products`, data);
export const logSale = (data) => axios.post(`${BASE_URL}/sales`, data);
export const getPrediction = (productId) => axios.get(`${BASE_URL}/predict/${productId}`);
