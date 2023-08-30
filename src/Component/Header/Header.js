import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo/logo.svg';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light color-section">
                <div class="container">
                    <img className="logo" src={logo} alt="" />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/home">Home</NavLink>
                            <NavLink className="nav-link" to="/shop">Shop</NavLink>
                            <NavLink className="nav-link" to="/orderReview">Order Review</NavLink>
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            {user.email && <span style={{ color: 'white', margin: '0 10px 0 0', background: '#333', padding: '2px', }}>Hello {user.displayName} </span>}
                            {
                                user.email ?
                                    <button className="card-btn" onClick={logOut}>log out</button>
                                    :
                                    <NavLink className="nav-link" to="/login">Login</NavLink>}
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input
                            type="Search"
                            placeholder="Search For Food.."
                            className="me-2"
                            aria-label="Search" />

                        <Link className="card-btn d-flex align-items-center text-center align-middle" to="/cart"><FontAwesomeIcon icon={faShoppingCart} />Cart</Link>
                        <div>

                        </div>
                    </form>
                </div>
            </nav>
        </div >
    );
};

export default Header;