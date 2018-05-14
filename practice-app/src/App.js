import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Count from './Count.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
        count: 0,
    }
  }

  render() {
    return (
        <div className="App">
            <h1>Hello World</h1>
            <p>{this.state.count}</p>
            <Count 
                count={this.state.count}
                increment={this.increment.bind(this)}
                decrement={this.decrement.bind(this)}
            />
        </div>
    );
  }

  increment() {
    const newState = Object.assign({}, this.state);
    newState.count++;
    this.setState(newState);
  }


  decrement() {
    const newState = Object.assign({}, this.state);
    newState.count--;
    this.setState(newState);
  }
}

export default App;
