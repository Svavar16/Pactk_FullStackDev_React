import axios from './axios';
import Product from '../models/product';

export const getProducts = async (categories) => {
    try{
        const { data } = await axios.get(
            `/v1/products${categories ? `?categories=${categories}` : ''}`
        );
        return data.map(product => new Product(product));
    } catch (e) {
        console.log(e);
    }
};
