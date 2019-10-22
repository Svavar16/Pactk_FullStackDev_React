import UserModel from '../models/user';

const user1 = new UserModel({
    id: "1",
    username: 'jondoe',
    email: 'Something@something.com',
    role: 'Admin'
});

const user2 = new UserModel({
    id: "2",
    username: 'janedoe',
    email: 'Something@something.com',
    role: 'customer'
});

const users = [user1.getData(), user2.getData()];

export default users;