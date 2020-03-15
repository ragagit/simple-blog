import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createBrowserHistory } from 'history';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/home.page';

import {
  faUser,
  faUserPlus,
  faSignInAlt,
  faHome,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

//function App() {
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      history: createBrowserHistory(),
    };
  }

  render() {
    const { history } = this.state;
    return (
      <Router history={history}>
        <div>
          
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <a className="navbar-brand" href="https/reactjs.org">
                <img src={logo} className="App-logo" alt="logo" />
                React
              </a>
              <div className="navbar-nav mr-auto">
                <Link to="/home" className="nav-item nav-link">
                  <FontAwesomeIcon icon={faHome} /> Home
                </Link>
              </div>
              {/* <div className="navbar-nav ml-auto">
                <Link to="/profile" className="nav-item nav-link">
                  <FontAwesomeIcon icon={faUser} /> {currentUser.name}
                </Link>
                <a onClick={() => this.logout()} className="nav-item nav-link">
                  <FontAwesomeIcon icon={faSignOutAlt} /> LogOut
                </a>
              </div> */}
            </nav>
          
          {/* {!this.state.currentUser &&
            <nav className="navbar navbar-expand navbar-dark bg-dark">
              <a className="navbar-brand" href="https/reactjs.org">
                <img src={logo} className="App-logo" alt="logo" />
                React
              </a>
              <div className="navbar-nav mr-auto">
                <Link to="/home" className="nav-item nav-link">
                  <FontAwesomeIcon icon={faHome} /> Home
                </Link>
              </div>
              <div className="navbar-nav ml-auto">
                <Link to="/register" className="nav-item nav-link">
                  <FontAwesomeIcon icon={faUserPlus} /> Register
                </Link>
                <Link to="/login" className="nav-item nav-link">
                  <FontAwesomeIcon icon={faSignInAlt} /> Login
                </Link>
              </div>
            </nav>
          } */}
          <div className="container">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/home" component={HomePage} />
              {/* <Route exact path="/post" component={LoginPage} /> */}
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

