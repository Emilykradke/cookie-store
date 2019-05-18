import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="hero">
          <h1 className="hero-title">Cookie Store</h1>
          <h2 className="hero-subtitle">COOOOOOOKIES</h2>
          <Link className="btn-view-products" to="/Shop">
            View all cookies
          </Link>
        </div>
      </div>
    ) 
  }
};

export default Home;