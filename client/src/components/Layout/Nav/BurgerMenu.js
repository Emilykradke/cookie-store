import React from 'react';
import { Link } from "react-router-dom";


const BurgerMenu = props => (
    <div className='menuList'>
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Shop">Shop</Link></li>
          <li><Link to="/Cart">Cart</Link></li>
          <li><Link to="/SignIn">Sign In</Link></li>
        </ul>
    </div>
)

export default BurgerMenu;