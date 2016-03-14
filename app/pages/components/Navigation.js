import React, {Component} from 'react';
import {Link} from 'react-router';
import AuthPanel from './authpanel';

const Navigation = () => {
     return (
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              <span className="icon-bar"></span>
                  </button>
                  <Link to="/" className="navbar-brand">Lunch N Learn</Link>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav">
                    <li><Link to="/about" activeStyle={{ color: 'red' }}>About</Link></li>
                  <li><Link to="/learn" activeStyle={{ color: 'red' }}>Topics</Link></li>
                  </ul>
                  <div className="nav navbar-nav navbar-right">
                    <AuthPanel />
                  </div>
                </div>

              </div>
            </nav>
    );
};

export default Navigation;
