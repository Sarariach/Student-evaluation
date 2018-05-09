import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import TopBar from './components/layout/TopBar';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <nav>
          <TopBar />
        </nav>
        
      </div>
      </Router>
  )
}
}


export default App;
