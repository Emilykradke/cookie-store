import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Nav extends Component {
  render() {
    return (
      <nav>
        <h2 className="logo">
          <Link to="/">cookie store</Link>
          <p className="logo-phrase">always eat good cookies</p>
        </h2>

        <ul className="nav-list">
          <li><Link to="/Shop">Shop</Link></li>
          <li><Link to="/Cart">Cart</Link></li>
          <li><Link to="/SignIn">Sign In</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;