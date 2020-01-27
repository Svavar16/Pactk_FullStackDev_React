import store from 'store2';
import React, { Component } from 'react';
import { getCurrentUser } from "../api/Auth";

class Auth extends Component {
    componentDidMount = async () => {
        if(this.props.match.params.token){
            await store.set('authToken', this.props.match.params.token);
            const result = await getCurrentUser();
            console.log(result);
        }
        this.props.history.push('/');
    };

    render() {
        return null;
    }
}

export default (authUser) => (props) =>
    <Auth authUser={authUser} {...props} />;