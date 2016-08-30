import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Project from './Project.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Project theme="#020A02" title="the first one" description="yep yep yep"></Project>
        <Project theme="#DDDDDD" title="one upon a time"></Project>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
