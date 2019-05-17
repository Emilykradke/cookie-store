import React, { Component } from 'react';
import { Link } from "react-router-dom"
import "./nav.css"

class Nav extends Component {
  render() {
    return (
      <nav>
        <h2><a href="/">Cookie Store</a></h2>

        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Shop">Shop</Link></li>
          <li><Link to="/AboutUs">About</Link></li>
          <li><Link to="/ContactUs">Contact</Link></li>
          <li><Link to="/SignIn">Sign In</Link></li>
          <li><Link to="/Cart">Cart</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;