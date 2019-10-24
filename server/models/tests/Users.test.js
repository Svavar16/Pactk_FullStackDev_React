import UserModel from '../user';

test('It accepts all params and implements all methods', () => {
    const raw = {id: "123", username:"foo", email: "Someail@mail.com", role:"Admin"};
    const User = new UserModel(raw);
    expect(User.getId()).toBe(raw.id);
    expect(User.getUsername()).toBe(raw.username);
    expect(User.getEmail()).toBe(raw.email);
    expect(User.getRole()).toBe(raw.role);
    expect(User.getData()).toEqual(raw);
});