import React, { useState } from "react";
import { Link } from "react-router-dom";
import userService from "modules/utils/userService";

import "./LoginPage.css";

export default function LoginPage(props) {
  const [state, setState] = useState({
    email: "",
    pw: ""
  });

  function handleChange(event) {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await userService.login(state);
      /* Successfully Signed Up */
      props.handleSignupOrLogin();
      props.history.push("/");
    } catch (error) {
      /* Invalid user data (probably duplicate email) */
      alert("Invalid Credentials!!!");
    }
  }

  return (
    <div className="LoginPage">
      <header className="header-footer">Log In</header>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="col-sm-12">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={props.email}
              name="email"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={props.pw}
              name="pw"
              onChange={handleChange}
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

