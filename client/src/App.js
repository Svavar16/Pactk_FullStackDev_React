import React, { Component } from "react";
import store from "store2";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import FormDemo from "./Pages/FormDemo";
import NotFound from "./Pages/NotFound";
import Cart from "./Pages/Cart";
import Orders from "./Pages/Orders";
import Account from "./Pages/Account";
import Category from "./Pages/Category";
import NavigationBar from "./components/NavigationBar";
import Product from "./Pages/Product";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { itemsInCart: store.get('itemsInCart') || [] };
		this.ProductPage = Product(this.addToCart);
	}

	componentDidMount = () => {
		document.addEventListener("visibilitychange", () => {
			console.log('visibilitychange', document.hidden);
			if (!document.hidden) {
				this.setState({
					itemsInCart: store.get("itemsInCart") || []
				});
			}
		});
	};

	addToCart = item => {
		const { itemsInCart } = this.state;
		itemsInCart.push(item);
		this.setState({ itemsInCart });
		store.set("itemsInCart", itemsInCart);
	};

	removeFromCart = index => {
		const { itemsInCart } = this.state;
		itemsInCart.splice(index, 1);
		this.setState({ itemsInCart });
		store.set("itemsInCart", itemsInCart);
	};

	render() {
		return (
			<Router>
				<div className="App">
					<NavigationBar
						isLoggedIn={true}
						itemsInCart={this.state.itemsInCart.length}
					/>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/forms" exact component={FormDemo} />
						<Route
							path="/cart"
							exact
							component={props =>
								<Cart {...props} items={this.state.itemsInCart} />
							}
						/>
						<Route path="/orders" exact component={Orders} />
						<Route path="/account" exact component={Account} />
						<Route path="/category/:slug" component={Category} />
						<Route path="/product/:id" component={this.ProductPage} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
