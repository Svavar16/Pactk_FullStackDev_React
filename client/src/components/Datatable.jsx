import React, {Component} from 'react';
import SpicyDataTables from 'spicy-datatable';
import './Datatable.css';

export default class ProductManagement extends Component {
    render() {
        return (
            <SpicyDataTables
                tableKey={this.props.tableKey}
                columns={this.props.columns}
                rows={this.props.data}
            />
        );
    }
}