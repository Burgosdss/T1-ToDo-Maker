import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'

const LandingPage = (props) => {
    let landing = props.user ?
            <div className="LandingPage" >
            <Link to="/newtodo" style={{ color: '#000000', fontSize: '2rem'}}>Add New To Do List Item </Link>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <br />
            <br />
            <Link to="/user" className="LandLink" style={{ fontSize: '3rem', color: '#000000'}}>Click here to see your user profile</Link>
            </div>
         :
            <div>
            </div>
            return (
                <div>
                    {landing}
                <p  id="title" style={{ fontSize: "8rem", color: '#000000'}}> Welcome to Task Maker</p>
                </div>
            )
};

export default LandingPage;