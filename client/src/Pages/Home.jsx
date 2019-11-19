import React, {Component} from 'react';
import ProductList from "../components/ProductList";
import product from "../data/products";

class Home extends Component {
    render() {
        return (
            <ProductList products={product} />
        );
    }
}

export default Home;