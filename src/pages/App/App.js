import React, { Component} from 'react';
import { BrowserRouter } from 'react-router-dom';

import { UserService } from 'utils';
import { AppRouter } from 'pages';
import { NavBar } from 'components';

import 'pages/App/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: UserService.getUser(),
      todos: [],
    };
  }

  handleSignupOrLogin = () => {
    this.setState({
      user: UserService.getUser()
    });
  }

  handleLogout = () => {
    UserService.logout();
    this.setState({
      user: null
    });
  }

  handleUpdateTodos = (todos) => {
    this.setState({ ...this.state.todos, todos });
  }

  render() {
    const { user, todos } = this.state
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar user={this.state.user} handleLogout={this.handleLogout}/>
          <div id="App-Parent">
            <AppRouter 
              user={user} 
              todos={todos} 
              handleUpdateTodos={this.handleUpdateTodos} 
              handleSignupOrLogin={this.handleSignupOrLogin} 
              handleLogout={this.handleLogout} 
            />
          </div>
          <footer id="sticky-footer"></footer>
        </BrowserRouter>
      </div>
    )
  }
};

export default App;
