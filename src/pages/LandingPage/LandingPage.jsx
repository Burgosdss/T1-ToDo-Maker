import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const newTodoStyles = {
  color: "#000000",
  fontSize: "2rem",
};

const userStyles = {
  fontSize: "3rem",
  color: "#000000",
};

const titleStyles = {
  fontSize: "8rem",
  color: "#000000",
};

const LandingPage = (props) => {
  const UserIsLogged = () => (
    <div className="LandingPage">
      <Link to="/newtodo" style={newTodoStyles}>
        Add New To Do List Item{" "}
      </Link>
      &nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      <br />
      <Link to="/user" className="LandLink" style={userStyles}>
        Click here to see your user profile
      </Link>
    </div>
  );
  const UserIsLoggedOut = () => <div></div>;
  const Landing = () => {
    return props.user ? <UserIsLogged /> : <UserIsLoggedOut />;
  };

  return (
    <div>
      <p id="title" style={titleStyles}>Welcome to Task Maker</p>
      <Landing />
    </div>
  );
};

export default LandingPage;
