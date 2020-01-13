import React, {Component} from 'react';
import {getProducts} from "../../api/Products";
import LoadingIndicator from "../../components/LoadingIndicator";
import Datatable from "../../components/Datatable";

const columns = [
    { key: '_id', label: 'ID'},
    { key: 'name', label: 'Name', sort: true},
    { key: 'formattedPrice', label: 'Price', sort: true}
];

export default class ProductManagement extends Component {
    state = { products: [], loading: true};

    componentDidMount= async () => {
        const products = await getProducts();
        console.log(products);
        this.setState({
            products: products.map(product => product.getData()),
            loading: false
        })

    };

    render() {
        return (
            <div className="AdminView">
                <h2>Product Management</h2>
                {this.state.loading ?
                    <LoadingIndicator /> :
                    <Datatable
                        tableKey="product"
                        columns={columns}
                        data={this.state.products}
                    />
                }
            </div>
        );
    }
}
