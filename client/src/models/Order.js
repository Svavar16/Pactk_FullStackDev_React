import Product from './product';

export default class Order {
    /**
     *
     * @param {string} _id
     * @param {string} customer
     * @param {number} timestamp
     * @param {array} Product
     * @param {object} contact
     * @param {object} shippingAddress
     * */

    constructor({_id, customer, timestamp,products, contact, shippingAddress}){
        this._id = _id;
        this._customer = customer;
        this._timestamp = timestamp;
        this._products = products.map(product => new Product(product));
        this._contact = contact;
        this._shippingAddress = shippingAddress;
    }

    /**
     * @return {string}
     */
    getId = () => this._id;

    /**
     * @return {string}
     */
    getCustomer = () => this._customer;

    /**
     * @return {number}
     */
    getTimestamp = () => this._timestamp

    /**
     * @return {Product[]}
     */
    getProducts = () => this._products;

    /**
     * @ return {number}
     */
    getTotalPrice = () => this._products.reduce((sum, product) => sum + product.getPrice(), 0);

    /**
     * @return {string}
     */
    getFormattedPrice = () => `$${String(this.getTotalPrice()/100)}`;

    /**
     * @return {object}
     */
    getContact = () => this._contact;

    /**
     * @return {object}
     */
    getshippingAddress = () => this._shippingAddress;

    /**
     * @return {{_id: String, customer: String, timestamp: Number, product: Array, contact: object, shippingAddress: object}}
     */
    getData = () => ({
        _id: this._id,
        customer: this._customer,
        timestamp: this._timestamp,
        products: this._products.map(_ => _.getDate()),
        contact: this._contact,
        shippingAddress: this._shippingAddress,
    });
}