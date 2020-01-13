import axios from './axios';
import User from "../models/users.js";

export const getUser = async () => {
    try{
        const { data } = await axios.get('/v1/users');
        return data.map(user => new User(user));
    }catch (e) {
        console.error(e);
    }
};