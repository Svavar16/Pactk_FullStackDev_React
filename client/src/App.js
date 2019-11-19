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


class App extends Component {
    render(){
      return (
          <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path='/forms' exact component={FormDemo}/>
                    <Route component={NotFound}/>
                </Switch>
            </Router>
          </div>
        )
    };
}

export default App;
