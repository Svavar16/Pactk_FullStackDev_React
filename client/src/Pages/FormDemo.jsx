import React, {Component} from 'react';
import TextInput from "../components/BaseInput/TextInput";
import PasswordInput from "../components/BaseInput/PasswordInput";
import CheckboxInput from "../components/BaseInput/CheckboxInput";

class FormDemo extends Component {
    state = { firstName : '', lastName: '', password: '', sendEmail: false};
    handleTextChange = e => {
        this.setState({[e.target.name]: e.target.value})
    };

    handleBooleanChange = e => {
        this.setState({[e.target.name]: e.target.checked})
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state)
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <TextInput
                        label="First name"
                        value={this.state.firstName}
                        name="firstName"
                        onChange={this.handleTextChange}
                    />
                    <TextInput
                        label="Last name"
                        value={this.state.lastName}
                        name="lastName"
                        onChange={this.handleTextChange}
                    />
                    <PasswordInput
                        label='Password'
                        value={this.state.password}
                        name="password"
                        onChange={this.handleTextChange}
                    />
                    <CheckboxInput
                        label='can we send you promo email?'
                        checked={this.state.sendEmail}
                        name="sendEmail"
                        onChange={this.handleBooleanChange}
                    />
                    <button>
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default FormDemo;