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
import ProductManagement from "./Pages/admin/ProductManagement";
import UserManagement from "./Pages/admin/UserManagemant";
import Auth from "./Pages/Auth";
import { getCurrentUser } from "./api/Auth";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			itemsInCart: store.get("itemsInCart") || [],
			user: undefined,
		};
		this.ProductPage = Product(this.addToCart);
	}

	componentDidMount = () => {
		this.authUser();
		document.addEventListener("visibilitychange", () => {
			console.log("visibilitychange", document.hidden);
			if (!document.hidden) {
				this.setState({
					itemsInCart: store.get("itemsInCart") || [],
				});
				this.authUser();
			}
		});
	};

	authUser = async () => {
		const result = await getCurrentUser();
		if (result && result.data) {
			this.setState({ user: result.data });
		} else {
			this.setState({ user: undefined });
		}
	};

	addToCart = (item) => {
		const { itemsInCart } = this.state;
		itemsInCart.push(item);
		this.setState({ itemsInCart });
		store.set("itemsInCart", itemsInCart);
	};

	removeFromCart = (index) => {
		const { itemsInCart } = this.state;
		itemsInCart.splice(index, 1);
		this.setState({ itemsInCart });
		store.set("itemsInCart", itemsInCart);
	};

	emptyCart = () => {
		this.setState({ itemsInCart: [] });
		store.set("itemsInCart", []);
	};

	render() {
		const isLoggedIn = this.state.user && this.state.user._id;
		return (
			<Router>
				<div className="App">
					<NavigationBar
						isLoggedIn={isLoggedIn}
						itemsInCart={this.state.itemsInCart.length}
					/>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route
							path="/auth/:token"
							exact
							component={Auth(this.authUser)}
						/>
						<Route path="/forms" exact component={FormDemo} />
						<Route
							path="/cart"
							exact
							render={(props) => (
								<Cart
									{...props}
									items={this.state.itemsInCart}
									removeFromCart={this.removeFromCart}
									emptyCart={this.emptyCart}
								/>
							)}
						/>
						<Route path="/orders" exact component={Orders} />
						<Route path="/account" exact component={Account} />

						{isLoggedIn && this.state.user.role === "admin" && (
							<Route
								path="/admin/users"
								exact
								component={UserManagement}
							/>
						)}
						{isLoggedIn && this.state.user.role === "admin" && (
							<Route
								path="/admin/products"
								exact
								component={ProductManagement}
							/>
						)}
						<Route path="/category/:slug" component={Category} />
						<Route
							path="/product/:id"
							component={this.ProductPage}
						/>
						<Route component={NotFound} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
