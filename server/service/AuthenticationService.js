require('dotenv').config();
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

class AuthenticationService {
    generate = async (user) => {
        return await jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (7 * 24 * 60 * 60),
            data: user,
        }, secret);
    };
}

const AuthenticationServiceSingleton = new AuthenticationService();

export default AuthenticationServiceSingleton;