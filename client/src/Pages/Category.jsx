import React, {Component} from 'react';
import {getProducts} from "../api/Products";
import ProductList from "../components/ProductList";
import LoadingIndicator from "../components/LoadingIndicator";

class Category extends Component {
    state = { products: [], loading: true, slug: undefined };

    componentDidMount = async () => {
        const { slug } = this.props.match.params;
        const products = await getProducts(slug);
        this.setState({
            products,
            loading: false,
            slug: slug
        });
    };

    componentDidUpdate = async () => {
        const { slug } = this.props.match.params;
        if( slug !== this.state.slug){
            this.setState({
                loading: true,
                products: [],
                slug: slug
            });
            const products = await getProducts(slug);
            this.setState({ products, loading: false});
            console.log(products)
        }
    };

    render() {
        return (
            this.state.loading ?
                <LoadingIndicator /> :
                <ProductList products={this.state.products}/>
        );
    }
}

export default Category;