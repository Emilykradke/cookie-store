import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import BurgerButton from './HamburgerButton';

class Nav extends Component {
  render() {
    return (
      <Fragment>
        <div className="bar"></div>
        <div className="nav-container">

          <div className='burger-nav'>
          <BurgerButton click={this.props.burgerClickHandler} />
          </div>

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
        </div>
      </Fragment>
      
    );
  }
}

export default Nav;