import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    let nav = props.user ?
        <div style={{
            fontSize: "3vmin",
            fontWeight: "bold"
        }}>
            <Link to="" className="NavBar-link" onClick={props.handleLogout}>LOG OUT</Link>
      &nbsp;&nbsp; | &nbsp;&nbsp;
      <span className="NavBar-welcome">WELCOME,<Link to="user" className='user'>{props.user.name} </Link> </span>
        </div>
        :
        <div className='NavBar' style={{
            fontSize: "3vmin",
            fontWeight: "bold"
        }}>
            <Link to="/login" className='NavBar-link'>LOG IN</Link>
                    &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to="/signup" className='NavBar-link'>SIGN UP</Link>
        </div>
    return (
        <div className="NavBar">
            {nav}
        </div>
    );
}



export default NavBar;