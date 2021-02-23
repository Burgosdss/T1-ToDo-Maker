import React, { Component} from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

import userService from '../../utils/userService';

import {
  SignupPage,
  LoginPage,
  UserSummaryPage,
  LandingPage,
  NewToDoPage
} from "pages";
 
// import SignupPage from '../SignupPage/SignupPage';
// import LoginPage from '../LoginPage/LoginPage';
// import UserSummaryPage from '../UserSummaryPage/UserSummaryPage';
// import LandingPage from '../LandingPage/LandingPage';
// import NewToDoPage from '../NewToDoPage/NewToDoPage';

class AppRouter extends Component {

  SignupPage = ({ history }) => {
    return (
      <SignupPage history={history} handleSignupOrLogin={this.props.handleSignupOrLogin} />
    )
  }
  
  LoginPage = ({ history}) => {
    return (
      <LoginPage history={history} handleSignupOrLogin={this.props.handleSignupOrLogin} />
    )
  }
  
  LandingPage = ({history}) => {
    return (
      <LandingPage user={this.props.user} history={history} />
    )
  }
  
  NewTodoPage = ({ history }) => {
    return userService.getUser() ? (
      <NewToDoPage history={history} user={this.props.user} /> 
    ) : (
      <Redirect to="/login" />
    )
  }
  
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
    )
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' render={this.LandingPage}  />
        <Route exact path='/signup' render={this.SignupPage} />
        <Route exact path='/login' render={this.LoginPage} />
        <Route exact path='/newtodo' render={this.NewTodoPage} />
        <Route exact path='/user' render={this.UserSummaryPage} />
      </Switch>
    )
  }
};

export default AppRouter;