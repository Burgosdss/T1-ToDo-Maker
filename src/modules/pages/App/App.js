import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { UserService } from "modules/utils/";
import { AppRouter } from "modules/pages";
import { NavBar } from "modules/components/";

import "modules/pages/App/App.css";

export default function App() {
  const [state, setState] = useState({
    user: UserService.getUser(),
    todos: []
  });

  function handleSignupOrLogin() {
    setState((prevState) => ({
      ...prevState,
      user: UserService.getUser()
    }));
  }

  function handleLogout() {
    UserService.logout();
    setState((prevState) => ({
      ...prevState,
      user: UserService.getUser()
    }));
  }

  function handleUpdateTodos(todos) {
    setState((prevState) => ({
      ...prevState,
      todos
    }));
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
