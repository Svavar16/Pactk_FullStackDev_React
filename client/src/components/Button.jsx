import React, {Component} from 'react';

class Button extends Component {
    render() {
        const {className, children, rest} = this.props;
        return (
            <button className={className} {...rest}>
                {children}
            </button>
        );
    }
}

export class PrimaryButton extends Component{
    render() {
        return(
            <Button
                className="BaseButton PrimaryButton"
                {...this.props}
            />
        )
    }
}

export class SecondaryButton extends Component{
    render() {
        return(
            <Button
                className="BaseButton SecondaryButton"
                {...this.props}
            />
        )
    }
}

export default Button;