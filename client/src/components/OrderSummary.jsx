import React, { Component } from "react";
import "./OrderSummary.css";
import ProductCard from "./ProductCard";

class OrderSummary extends Component {
	render() {
		return (
			<div className="OrderSummary">
				<p className="OrderSummaryId">
					Order number: {this.props.order.getId()}
				</p>
				<div className="OrderSummaryProducts">
					{this.props.order.getProducts().map((product, index) => (
						<ProductCard
							key={`${product.getId()}_${index}`}
							name={product.getName()}
							images={product.getImages()}
							price={product.getFormattedPrice()}
						/>
					))}
					<p className="OrderSummaryTotalPrice">
						Total price: {this.props.order.getFormattedTotalPrice()}
					</p>
				</div>
			</div>
		);
	}
}

export default OrderSummary;
