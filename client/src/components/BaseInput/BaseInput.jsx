import React, {Component} from 'react';
import './BaseInput.css'

class BaseInput extends Component {
    render() {
        return (
            <div className={`BaseInput ${this.props.type === 'checkbox' ? 'BaseInputReverse': ''}`}>
                <label htmlFor={this.props.name}>
                    {this.props.label || ''}
                </label>
                <input
                    id={this.props.name}
                    {...this.props}
                />
            </div>
        );
    }
}

export default BaseInput;