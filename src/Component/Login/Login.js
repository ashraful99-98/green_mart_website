import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import payment from '../../images/payment/payment (1).png';
import bannerProduct from '../../images/banner-product.jpg';
import './Login.css';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { user, signInUsingGoogle } = useAuth();
    return (
        <div>
            <div className="login-form">
                <div className="container">
                    <div class="row g-3 my-4">
                        <div class="col-sm-8 col-md-9">
                            <div class="row g-3 bg-light p-2">
                                <div class="col-sm-12 col-md-12">
                                    <div className="contact-info">
                                        <h2 className="span-text">Login</h2>
                                        <h5 className="pb-2">Enter your username and password to login.</h5>
                                        <div class="row g-3">
                                            <div class="col">
                                                <input type="text" class="form-control" placeholder="First name*" aria-label="First name" />
                                            </div>
                                            <div class="col">
                                                <input type="text" class="form-control" placeholder="Last name*" aria-label="Last name" />
                                            </div>
                                            <div class="col-12">
                                                <input type="text" class="form-control" placeholder="Enter Your Email" aria-label="Subject" />
                                            </div>
                                            <div class="col-12">
                                                <input type="password" class="form-control" placeholder="Enter Your Password" aria-label="Write Your Message" />
                                            </div>
                                            <div class="mb-3 form-check">
                                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                <label class="form-check-label" for="exampleCheck1">Remember me</label>
                                            </div>
                                            <div class="col-12">
                                                <button type="submit" class="card-btn">Send</button>
                                            </div>
                                        </div>
                                        <p> Are you new to Central Hospital? <Link to="/register">Create Account</Link></p>
                                        <div>-------------or-------------</div>
                                        <div>
                                            <button
                                                className="card-btn rounded px-2 my-2"
                                                onClick={signInUsingGoogle}
                                            >Google Sign In
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 col-md-3">
                            <div className="bg-success text-dark rounded p-5">
                                <Link to="/login" className="text-white">Login</Link>/<Link to="/register" className="text-white">Register</Link>
                            </div>
                            <div className="bg-light rounded p-4 mt-2">
                                <h6>Online Shopping</h6>
                                <div className="d-flex justify-content-center align-items-center text-success">
                                    <p><FontAwesomeIcon icon={faPhone} /></p> <p>+ 78 925-942-2900</p>
                                </div>
                                <img src={payment} alt="" />
                            </div>
                            <div className="bg-light rounded mt-3 h-30">
                                <img src={bannerProduct} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;