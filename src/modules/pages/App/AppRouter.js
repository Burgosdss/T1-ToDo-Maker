import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import userService from "modules/utils/userService";

import "./App.css";

import {
  SignupPage,
  LoginPage,
  UserSummaryPage,
  LandingPage,
} from "modules/pages";

class AppRouter extends Component {
  SignupPage = ({ history }) => {
    return (
      <SignupPage
        history={history}
        handleSignupOrLogin={this.props.handleSignupOrLogin}
      />
    );
  };

  LoginPage = ({ history }) => {
    return (
      <LoginPage
        history={history}
        handleSignupOrLogin={this.props.handleSignupOrLogin}
      />
    );
  };

  LandingPage = ({ history }) => {
    return <LandingPage user={this.props.user} history={history} />;
  };

  UserSummaryPage = ({ history }) => {
    return userService.getUser() ? (
      <UserSummaryPage
        {...this.props}
        history={history}
        user={this.props.user}
        todos={this.props.todos}
        handleUpdateTodos={this.props.handleUpdateTodos}
      />
    ) : (
      <Redirect to="/login" />
    );
  };

  render() {
    return (
      <Switch>
        <Route exact path="/" render={this.LandingPage} />
        <Route exact path="/signup" render={this.SignupPage} />
        <Route exact path="/login" render={this.LoginPage} />
        <Route exact path="/user" render={this.UserSummaryPage} />
      </Switch>
    );
  }
}

export default AppRouter;
