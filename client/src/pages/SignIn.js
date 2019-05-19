import React, { Component } from "react";

class SignIn extends Component {
render(){
  return(
    <div className="form-container">
      <div className="login">
        <h2>Returning Customer</h2>
        <h3>Login</h3>
        <form>
          <label>Email Address</label>
          <br/>
          <input type="email" name="email"></input>
        </form>
        <form>
          <label>Password</label>
          <br/>
          <input type="password" name="password"></input>
        </form>
        <button className="login-button">Login</button>
      </div>
      <div className="sign-up">
        <h2>New Customer?</h2>
        <h3>Sign Up</h3>
        <form>
          <label>First Name</label>
          <br/>
          <input type="text" name="fname"></input>
        </form>
        <form>
          <label>Last Name</label>
          <br/>
          <input type="text" name="lname"></input>
        </form>
        <form>
          <label>Email Address</label>
          <br/>
          <input type="email" name="email"></input>
        </form>
        <form>
          <label>Password</label>
          <br/>
          <input type="password" name="password"></input>
        </form>
        <button className="signup-button">Sign Up</button>
      </div>
    </div>
  )
}
};

export default SignIn;