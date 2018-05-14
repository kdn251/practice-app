import React, { Component } from 'react';

class Count extends Component {
    constructor(props) {
       super(props);
    }

    render() {
        return (
            <div>
                <h3>{this.props.count}</h3>
                <button 
                    onClick={() => {this.props.increment()}}
                >
                    +
                </button>
                <button
                    onClick={() => {this.props.decrement()}}
                >
                    -
                </button>
            </div>
        );
    }
}

export default Count;
