import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Should I have Cafe Rio?</h1>
        <button onClick={() => window.location='https://www.caferio.com/'}>YES</button>
      </div>
    );
  }
}

export default App;
