import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import TopBar from './components/layout/TopBar';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import LogoutPage from './components/logout/LogoutPage';
import BatchesPage from './components/batches/BatchesPage';




class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <nav>
          <TopBar />
        </nav> 
        <main style={{marginTop:75}}>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/logout" component={LogoutPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/batches" component={BatchesPage} />
        <Route exact path="/" render={ () => <Redirect to="/login" /> } />

        </main>

      </div>
      </Router>
  )
}
}


export default App;
