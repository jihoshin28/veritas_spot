import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Home from './containers/About'
import Articles from './containers/About'
import Forum from './containers/About'
import Blog from './containers/About'
import About from './containers/About'
import './App.css';
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
         
          <Router>
            <div className = "app">
            <NavBar/>
            <Route exact path ='/homepage' render= {(props) => <Home {...props} /> }/>
            <Route exact path ="/articles" render={(props) => <Articles {...props} />} />
            <Route exact path ="/forum" render={(props) => <Forum {...props} />} />
            <Route exact path ="/blog" render={(props) => <Blog {...props} />} />
            <Route exact path ="/about" render={(props) => <About {...props} />} />
            </div>
          </Router>
          
        </div>
      </header>
    </div>
  );
}

export default App;
