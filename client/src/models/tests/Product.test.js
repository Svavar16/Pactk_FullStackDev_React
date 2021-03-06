import ProductModel from '../product';

test('It accepts all params and implements all methods', () => {
    const raw = {id: "123", name:"foo", price: 123, images:["1"]};
    const product = new ProductModel(raw);
    expect(product.getId()).toBe(raw.id);
    expect(product.getName()).toBe(raw.name);
    expect(product.getPrice()).toBe(raw.price);
    expect(product.getImages()).toBe(raw.images);
    expect(product.getData()).toEqual(raw);
});