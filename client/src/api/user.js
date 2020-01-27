import axios from './axios';
import User from "../models/users.js";
import getAuthHeader from './getAuthHeader';

export const getUser = async () => {
    try{
        const { data } = await axios.get(
            '/v1/users',
            {headers: getAuthHeader},
            );
        return data.map(user => new User(user));
    }catch (e) {
        console.error(e);
    }
};