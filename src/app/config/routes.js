/* @flow */
import React from 'react';
import Main from '../components/Main/index';
import Home from '../components/Home/index';
import Profile from '../components/Profile/index';
import Github from '../components/Github/index';
import createBrowserHistory from 'history/createBrowserHistory';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const history = createBrowserHistory();

class Routes extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div className="container">
          <nav className='navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse'>
            <button className='navbar-toggler navbar-toggler-right' type='button' data-toggle='collapse'
                    data-target='#navbarsExampleDefault' aria-controls='navbarsExampleDefault' aria-expanded='false'
                    aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <Link className='navbar-brand' to='/'>Ritter Software</Link>
            <div className='collapse navbar-collapse' id='navbarsExampleDefault'>
              <ul className='navbar-nav mr-auto'>
                <li className='nav-item'>
                  <Link className='nav-link' to="/">Home<span className='sr-only'>(current)</span></Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to="/Main">Main</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link disabled' to="/Profile">Profile</Link>
                </li>
                <li className='nav-item dropdown'>
                  <a className='nav-link dropdown-toggle' href='#' id='dropdown01' data-toggle='dropdown'
                     aria-haspopup='true' aria-expanded='false'>Examples</a>
                  <div className='dropdown-menu' aria-labelledby='dropdown01'>
                    <Link className='dropdown-item' to="/Github">Github Battle</Link>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          <hr/>
          <Route exact path="/" component={Home}/>
          <Route path="/Main" component={Main}/>
          <Route path="/Profile" component={Profile}/>
          <Route path="/Github" component={Github}/>
        </div>
      </Router>
    );
  }
}

module.exports = Routes;
