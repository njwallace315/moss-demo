import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Room from './components/Room'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Room />
        </header>
      </div>
    );
  }
}

export default App;
