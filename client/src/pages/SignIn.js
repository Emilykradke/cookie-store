import React, { Component } from "react";

class SignIn extends Component {  
  state = {
    loginEmail: null,
    loginEmailErr: null,
    loginPassword: null,
    loginPasswordErr: null,
    signupFName: null,
    signupFNameErr: null,
    signupLName: null,
    signupLNameErr: null,
    signupEmail: null,
    signupEmailErr: null,
    signupPassword: null,
    signupPasswordErr: null
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const inputField = event.target.id;

    switch (inputField) {
      case "login-email":
        this.setState({ loginEmail: value });
        break;
      case "login-password":
        this.setState({ loginPassword: value });
        break;
      case "signup-fname":
        this.setState({ signupFName: value });
        break;
      case "signup-lname":
        this.setState({ signupLName: value });
        break;
      case "signup-email":
        this.setState({ signupEmail: value });
        break;
      case "signup-password":
        this.setState({ signupPassword: value });
        break;
      default:
        break;
    }
  }

  handleLogin = (event) => {
    event.preventDefault();

    if (this.handleLoginValidation()) {
      // Passed Login validation

      //Submit.
    }
  }

  handleLoginValidation = () => {
    let isValid = true;

    //clear error states
    this.setState({ 
      loginEmailErr: null,
      loginPasswordErr: null
     });

    const { loginEmail, loginPassword } = this.state;

    // run email validation
    if (!loginEmail) {
      this.setState({ loginEmailErr: "Email required"});
      isValid = false;
    }

    // run password validation
    if (!loginPassword) {
      this.setState({ loginPasswordErr: "Password required"});
      isValid = false;
    }

    return isValid;
  }

  handleSignup = (event) => {
    event.preventDefault();

    if (this.handleSignupValidation()) {
      // Passed signup validation

      //Submit.
    }
  }

  handleSignupValidation = () => {
    const { signupEmail, signupPassword, signupFName, signupLName } = this.state;
    //clear error states
    this.setState({ 
      signupEmailErr: null,
      signupPasswordErr: null,
      signupFNameErr: null,
      signupLNameErr: null
     });
     
    let isValid = true;

    // run email validation
    if (!signupEmail) {
      this.setState({ signupEmailErr: "Email required"});
      isValid = false;
    }

    // run password validation
    if (!signupPassword) {
      this.setState({ signupPasswordErr: "Password required"});
      isValid = false;
    }

    // run first name validation
    if (!signupFName) {
      this.setState({ signupFNameErr: "First name required"});
      isValid = false;
    }

    // run last mame validation
    if (!signupLName) {
      this.setState({ signupLNameErr: "Last name required"});
      isValid = false;
    }

    return isValid;

    // run input validation
  }

  render() {
    const { loginEmailErr, loginPasswordErr, signupFNameErr, signupLNameErr, signupEmailErr, signupPasswordErr
      } = this.state;

    return(
      <div className="signin-container">

        <form>
          <fieldset className="login">
            <div className="fieldset-container">
              <h2 className="title">Returning Customer</h2>
              <div className="block">
                <legend>Login</legend>
                  <label>Email Address</label>
                  <input type="email" name="email" id="login-email" onChange={this.handleInputChange} />
                  {loginEmailErr ? 
                    <p className="input-error">{loginEmailErr}</p> : null
                  }
                  <label>Password</label>
                  <input type="password" name="password" id="login-password" onChange={this.handleInputChange}/>
                  {loginPasswordErr ? 
                    <p className="input-error">{loginPasswordErr}</p> : null
                  }
                <button className="btn-form"
                  onClick={this.handleLogin}
                >
                  Login
                </button>
              </div>
            </div>
          </fieldset>

          <fieldset className="sign-up">
            <div className="fieldset-container">
              <h2 className="title">New Customer?</h2>
              <div className="block">
                <legend>Sign up</legend>
                <label>First Name</label>
                <input type="text" name="fname" id="signup-fname" onChange={this.handleInputChange}/>
                {signupFNameErr ? 
                  <p className="input-error">{signupFNameErr}</p> : null
                }
                <label>Last Name</label>
                <input type="text" name="lname" id="signup-lname" onChange={this.handleInputChange}/>
                {signupLNameErr ? 
                  <p className="input-error">{signupLNameErr}</p> : null
                }
                <label>Email Address</label>
                <input type="email" name="email" id="signup-email" onChange={this.handleInputChange}/>
                {signupEmailErr ? 
                  <p className="input-error">{signupEmailErr}</p> : null
                }
                <label>Password</label>
                <input type="password" name="password" id="signup-password" onChange={this.handleInputChange}/>
                {signupPasswordErr ? 
                  <p className="input-error">{signupPasswordErr}</p> : null
                }
                <button className="btn-form"
                  onClick={this.handleSignup}
                  >
                  Sign Up
                </button>
              </div>
            </div>
          </fieldset>
        </form>

      </div>
    )
  }
};

export default SignIn;