import React, { Component } from 'react';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom'
import Question from './Question.jsx';
import About from './About';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/' component={ Question } />
          <Route path='/about' component={ About } />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
