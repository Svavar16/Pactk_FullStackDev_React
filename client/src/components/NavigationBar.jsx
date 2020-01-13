import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

class NavigationBar extends Component {
	render() {
		const { isLoggedIn, itemsInCart } = this.props;
		return (
			<div className="NavigationBar">
				<Link to="/">Home</Link>
				<Link to="/category/sporty">#sporty</Link>
				<Link to="/category/tshirts">#tshirts</Link>
				<Link to="/category/jackets">#jackets</Link>
				<Link to="/category/sweaters">#sweaters</Link>
				<Link to="/category/pants">#pants</Link>
				<Link to="/category/sneakers">#sneakers</Link>
				<Link to="/category/boots">#boots</Link>
				{isLoggedIn ? (
					<Fragment>
						<Link to="/cart">My Cart ({itemsInCart})</Link>
						<Link to="/orders">Orders</Link>
					</Fragment>
				) : (
					<Link to="/account">Accounts</Link>
				)}
			</div>
		);
	}
}

export default NavigationBar;
