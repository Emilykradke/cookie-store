import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer >
        <div className="link-block">
          <Link className="link" to="/AboutUs">About</Link>
          <Link className="link" to="/ContactUs">Contact</Link>
        </div>
        <p className="copyright">
          © 2019 
          <Link to="/AboutUs">Cookie Store - The Premium Cookie Company</Link>
        </p>
      </footer>
    );
  }
}

export default Footer;