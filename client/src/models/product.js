export default class product {
    constructor({ _id, name, price, images }) {
        this._id = _id;
        this._name = name;
        this._price = price;
        this._images = images;
    }

    getId = () => this._id;

    getName = () => this._name;

    getPrice = () => this._price;

    getFormattedPrice = () =>
        `$${String(this._price/100)}`;

    getImages = () => this._images;

    getData = () => ({
        _id: this._id,
        name: this._name,
        price: this._price,
        formattedPrice: this.getFormattedPrice(),
        images: this._images
    });
}