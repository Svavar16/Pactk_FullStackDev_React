import React, { Component } from "react";
import { SecondaryButton } from "./Button";
import PropTypes from "prop-types";
import "./ProductCard.css";

class ProductCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			image: this.props.images[0],
		};
	}

	handleMouseover = () => {
		if (this.props.images.length > 1) {
			this.setState({ image: this.props.images[1] });
		}
	};

	handleMouseLeave = () => {
		this.setState({ image: this.props.images[0] });
	};

	render() {
		return (
			<div className="ProductCard">
				<img
					src={this.state.image}
					onMouseOver={this.handleMouseover}
					onMouseLeave={this.handleMouseLeave}
					alt=""
				/>
				<h3>{this.props.name}</h3>
				<p>{this.props.price}</p>
				{this.props.withRemoveButton && (
					<SecondaryButton onClick={this.props.onRemove}>
						Remove
					</SecondaryButton>
				)}
			</div>
		);
	}
}

ProductCard.propTypes = {
	name: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
	images: PropTypes.arrayOf(PropTypes.string),
	withRemoveButton: PropTypes.bool,
	onRemove: PropTypes.func,
};

export default ProductCard;
