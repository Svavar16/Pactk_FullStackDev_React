import React, {Component} from 'react';
import './ProductView.css'
import {PrimaryButton} from "./Button";

class ProductView extends Component {
    render() {
        return (
            <div className="ProductView">
                <h2>{this.props.product.getName()}</h2>
                <p>{this.props.product.getFormattedPrice()}</p>
                <PrimaryButton>
                    Add to Cart
                </PrimaryButton>
                {this.props.product.getImages().map(src =>
                    <img src={src} key={src} alt=" "/>
                )}
            </div>
        );
    }
}

export default ProductView;