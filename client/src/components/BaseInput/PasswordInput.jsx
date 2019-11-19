import React, {Component} from 'react';
import BaseInput from "./BaseInput";

class PasswordInput extends Component {
    render() {
        return (
            <BaseInput
                {...this.props}
                type="password"
            />
        );
    }
}

export default PasswordInput;