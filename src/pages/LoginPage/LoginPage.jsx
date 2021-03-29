import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./LoginPage.css";
import userService from "../../utils/userService";

const initialState = {
  email: "",
  password: "",
};

class LoginPage extends Component {
  state = initialState;

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await userService.login(this.state);
      // Successfully Signed Up
      this.props.handleSignupOrLogin();
      this.props.history.push("/");
    } catch (error) {
      // Invalid user data (probably duplicate email)
      alert("Invalid Credentials!!!");
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="LoginPage">
        <header className="header-footer">Log In</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={this.state.password}
                name="password"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default">Log In</button>
              &nbsp;&nbsp;&nbsp;
              <Link to="/">Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;
