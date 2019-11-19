import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import './NavigationBar.css'

class NavigationBar extends Component {
    render() {
        const {isLoggedIn} = this.props;
        return (
            <div className='NavigationBar'>
                <Link to="/">Home</Link>
                {isLoggedIn ?
                <Fragment>
                    <Link to='/cart'>My Cart</Link>
                    <Link to='/orders'>Orders</Link>
                </Fragment> :
                <Fragment>
                    <Link to='/account'>Accounts</Link>
                </Fragment>
                }
            </div>
        );
    }
}

export default NavigationBar;