import React, {Component} from 'react';
import './LoadingIncitor.css'
class LoadingIndicator extends Component {
    render() {
        return (
            <div className="LoadingIndicator">
                <div className='LoadingIndicatorInner'> </div>
            </div>
        );
    }
}

export default LoadingIndicator;