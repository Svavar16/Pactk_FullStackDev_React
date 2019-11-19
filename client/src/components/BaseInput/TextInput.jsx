import React, {Component} from 'react';
import BaseInput from "./BaseInput";

class TextInput extends Component {
    render() {
        return (
            <BaseInput
                {...this.props}
                type="text"
            />
        );
    }
}

export default TextInput;