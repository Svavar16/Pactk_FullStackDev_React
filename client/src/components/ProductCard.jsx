import React, {Component} from 'react';
import './ProductCard.css'

class ProductCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            image: this.props.images[0],
        };
    }
    state = {image : this.props.images[0]};

    handleMouseover = () => {
        if(this.state.images.length > 1){
            this.setState({image: this.props.images[1]})
        }
    };

    handleMouseLeave = () => {
        this.setState({image: this.props.images[0]})
    };

    render() {
        return (
            <div
                className="ProductCard"
                style={this.props.pull ? {
                    alignSelf: 'flex-end'} :
                    null
                }
            >
                <img
                    src={this.state.image}
                    onMouseOver={this.handleMouseover}
                    onMouseLeave={this.handleMouseLeave}
                    alt = ""
                />
                <h3>{this.props.name}</h3>
                <p>{this.props.price}</p>
            </div>
        );
    }
}

export default ProductCard;