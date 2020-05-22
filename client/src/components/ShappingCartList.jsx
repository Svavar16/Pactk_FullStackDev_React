import React, { Component } from "react";
import Product from "../models/product";
import ProductCard from "./ProductCard";
import { PrimaryButton } from "./Button";

class ShoppingCartList extends Component {
	render() {
		if (this.props.items.length > 0) {
			return (
				<div>
					{this.props.items
						.map((item) => new Product(item))
						.map((item, index) => (
							<ProductCard
								key={`${item.getId()}_${index}`}
								name={item.getName()}
								images={item.getImages()}
								price={item.getFormattedPrice()}
								withRemoveButton
								onRemove={() =>
									this.props.removeFromCart(index)
								}
							/>
						))}
					<PrimaryButton onClick={this.props.startCheckout}>
						Checkout
					</PrimaryButton>
				</div>
			);
		} else {
			return <p>Your cart is empty. Add some awesome products!</p>;
		}
	}
}

export default ShoppingCartList;
