import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

const styles = {
  fontSize: "3vmin",
  fontWeight: "bold"
}

const headerStyles = { fontSize: "2.5rem", color: "#ffffff" };

export default function NavBar(props) {
  const UserIsLogged = () => (
    <div style={styles}>
      <Link to="" className="NavBar-link" onClick={props.handleLogout}>
        LOG OUT
      </Link>
      &nbsp;&nbsp; | &nbsp;&nbsp;
      <span className="NavBar-welcome">
        WELCOME,
        <Link to="user" className="user">
          {props.user.name}
        </Link>
      </span>
    </div>
  );

  const UserIsLoggedOut = () => (
    <div className="NavBar" style={styles}>
      <Link to="/login" className="NavBar-link">
        LOG IN
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/signup" className="NavBar-link">
        SIGN UP
      </Link>
    </div>
  );

  const Nav = () => {
    return props.user ? <UserIsLogged /> : <UserIsLoggedOut />;
  }

  return (
    <header className="App-header" style={headerStyles}>
      Task Manager
      <div className="NavBar">
        <Nav />
      </div>
    </header>
  );
}
