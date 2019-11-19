import React, {Component} from 'react';
import './ProductList.css'
import ProductCard from "./ProductCard";
import products from "../data/products";

class ProductList extends Component {
    render() {
        return (
            <div className="ProductList">
                {products.map((product, index) =>
                    <div className="app">
                    <ProductCard
                    {...product}
                    pull={index % 2 === 0}
                    />
                    </div>
                )}
            </div>
        );
    }
}

export default ProductList;