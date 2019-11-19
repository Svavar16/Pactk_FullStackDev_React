import React, {Component} from 'react';
import BaseInput from "./BaseInput";

class CheckboxInput extends Component {
    render() {
        return (
            <BaseInput
                {...this.props}
                type="checkbox"
            />
        );
    }
}

export default CheckboxInput;