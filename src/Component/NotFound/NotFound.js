import React from 'react';
import './NotFound.css'
import emoji from '../../images/404.png';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found">
            <img className="emoji" src={emoji} alt="" />
            <h1 className="text">404</h1>
            <h2>OOPS! THAT PAGE CAN’T BE FOUND.</h2>
            <p>The page you are looking is not available or has been removed. Try going to Home Page by using the button below.</p>
            <Link to="/home" className="not-found-btn">GO TO HOME PAGE</Link>
        </div>
    );
};

export default NotFound;