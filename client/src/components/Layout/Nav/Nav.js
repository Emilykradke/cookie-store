import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Nav extends Component {
  render() {
    const { cart } = this.props
    return (
      <nav>
        <h2 className="logo">
          <Link to="/">Cookie Store</Link>
        </h2>

        <ul className="nav-list">
          <li><Link to="/Shop">Shop</Link></li>
          { cart.length !== 0 ? 
            <li><Link to="/Cart">Cart</Link></li>
            :
            null
          }
          <li><Link to="/SignIn">Sign In</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;