import React, { Component } from 'react';
import "./nav.css"

class Nav extends Component {
  render() {
    return (
      <nav>
        <h2><a href="/">Cookie Store</a></h2>

        <ul className="nav-list">
          <li><a href="/">Home</a></li>
          <li><a href="/Shop">Shop</a></li>
          <li><a href="/AboutUs">About Us</a></li>
          <li><a href="/ContactUs">Contact Us</a></li>
          <li><a href="/SignIn">Sign In</a></li>
          <li><a href="/Cart">Cart</a></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;