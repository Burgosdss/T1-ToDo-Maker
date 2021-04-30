import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { UserService } from "utils";
import { AppRouter } from "pages";
import { NavBar } from "components";

import "pages/App/App.css";

export default function App() {
  const [state, setState] = useState({
    user: UserService.getUser(),
    todos: []
  });

  const handleSignupOrLogin = () => {
    setState({
      user: UserService.getUser()
    });
  }

  const handleLogout = () => {
    UserService.logout();
    setState({
      user: null
    });
  }

  const handleUpdateTodos = (todos) => {
    setState({ ...state.todos, todos });
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar user={state.user} handleLogout={handleLogout} />
        <div id="App-Parent">
          <AppRouter
            user={state.user}
            todos={state.todos}
            handleUpdateTodos={handleUpdateTodos}
            handleSignupOrLogin={handleSignupOrLogin}
            handleLogout={handleLogout}
          />
        </div>
        <footer id="sticky-footer"></footer>
      </BrowserRouter>
    </div>
  );
}
