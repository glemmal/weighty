import React, { Component } from 'react';
import LogoImage from '../assets/weighty.svg';

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar is-danger" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src={LogoImage} alt="Weighty logo" width="112" height="28" />
          </a>
        </div>
      </nav>
    );
  }
}

export default Navigation