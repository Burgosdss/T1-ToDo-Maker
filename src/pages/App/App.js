import React, { Component} from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import UserSummaryPage from '..//UserSummaryPage/UserSummaryPage';
import LandingPage from '../LandingPage/LandingPage';
import NavBar from '../../components/NavBar/NavBar';
import NewToDoPage from '../NewToDoPage/NewToDoPage';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      todos: [],
    };
  }

  handleSignupOrLogin = () => {
    this.setState({
      user: userService.getUser()
    });
  }

  handleLogout = () => {
    userService.logout();
    this.setState({
      user: null
    });
  }

  handleUpdateTodos = (todos) => {
    this.setState({ ...this.state.todos, todos });
  }

  render() {
    return (
      <div className="App">
      <header className="App-header" style={{ fontSize: "2.5rem", color: "#ffffff" }}>Task Maker<NavBar
        user={this.state.user}
        handleLogout={this.handleLogout}
      /></header> 
      <div id="App-Parent">
        <Switch>
        <Route exact path="/" render={({ history }) =>
              <LandingPage
                user={this.state.user}
                history={history}
              />
            }
            />
            <Route exact path='/signup' render={({ history }) => 
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
                
              />
            }/>
            <Route exact path='/login' render={({ history }) => 
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            }/>
            <Route exact path='/newtodo' render={({ history }) => (
                      userService.getUser() ?
                        <NewToDoPage
                          history={history}
                          user={this.state.user}
                        />
                        :
                        <Redirect to="/login" />
                    )
                    }
                    />
            <Route exact path='/user' render={({ history }) => (
                userService.getUser() ?
                  <UserSummaryPage
                    {...this.props}
                    history={history}
                    user={this.state.user}
                    todos={this.state.todos}
                    handleUpdateTodos={this.handleUpdateTodos}
                  />
                  :
                  <Redirect to="/login" />
              )
            }
              />
        </Switch>
        </div>
        <footer id="sticky-footer"></footer>
      </div>
    )
  }
};

export default App;
