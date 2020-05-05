import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <header></header>
          <Router>
            <div className = "app">
              <Route></Route>
            </div>
          </Router>
          
        </div>
      </header>
    </div>
  );
}

export default App;
