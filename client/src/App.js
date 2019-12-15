import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import FormDemo from "./Pages/FormDemo";
import NotFound from './Pages/NotFound';
import Cart from "./Pages/Cart";
import Orders from "./Pages/Orders";
import Account from './Pages/Account';
import Category from "./Pages/Category";
import NavigationBar from "./components/NavigationBar";
import Product from "./Pages/Product";


class App extends Component {
    render(){
      return (
        <Router>
            <div>
            <NavigationBar isLoggedIn={true} />
                <Switch>
                <Route path="/" exact component={Home}/>
                <Route path='/forms' exact component={FormDemo}/>
                <Route path='/cart' exact component={Cart}/>
                <Route path='/orders' exact component={Orders}/>
                <Route path='/account' exact component={Account}/>
                <Route path='/category/:slug' exact component={Category}/>
                <Route path='/product/:id' exact component={Product}/>
                <Route component={NotFound}/>
                </Switch>
            </div>
        </Router>

        )
    };
}

export default App;
