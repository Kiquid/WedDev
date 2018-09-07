import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Background from './components/background';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        
        <Login/>
        </div>
      </Router>
      
    );
  }
}

export default App;
