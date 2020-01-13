import React, {Component} from 'react';
import { getUser } from "../../api/user";
import LoadingIndicator from "../../components/LoadingIndicator";
import Datatable from '../../components/Datatable';

const column = [
    { key: '_id', label: 'ID'},
    { key: 'username', label: 'Username', sort: true},
    { key: 'email', label: 'Email', sort: true}
];

export default class UserManagement extends Component {
    state = { users: [], loading: true};

    componentDidMount = async () => {
        const users = await getUser();
        this.setState({
            users: users
                .filter(user => user.getRole() === 'customer')
                .map(user => user.getData()),
            loading: false
        });
    };

    render() {
        return (
            <div className="AdminView">
                <h2>User management</h2>
                {this.state.loading ?
                    <LoadingIndicator /> :
                    <Datatable
                        tableKey="user"
                        columns={column}
                        data={this.state.users}
                    />
                }
            </div>
        );
    }
}
