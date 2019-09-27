import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React.</h2>
        </div>
        <p className="App-intro">
          Hi There! Wow Test ... meeting port 3000 says hello
        </p>
      </div>
    );
  }
}

export default App;
