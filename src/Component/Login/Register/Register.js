import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
const Register = () => {
    return (
        <div>
            <div className="login-form">
                <div className="container">
                    <div class="row g-3 my-4">
                        <div class="col-sm-8 col-md-9">
                            <div class="row g-3 bg-light p-2">
                                <div class="col-sm-12 col-md-12">
                                    <div className="contact-info">
                                        <h2 className="span-text">Register</h2>
                                        <h5 className="pb-2">Fill out the form below to register account.</h5>
                                        <div class="row g-3">
                                            <div class="col-12">
                                                <input type="text" class="form-control" placeholder="Enter Your Email" aria-label="Subject" />
                                            </div>
                                            <div class="col-12">
                                                <input type="password" class="form-control" placeholder="Enter Your Password" aria-label="Write Your Message" />
                                            </div>
                                            <div class="col-12">
                                                <button type="submit" class="card-btn">Register</button>
                                            </div>
                                        </div>
                                        <p> Are you new to Central Hospital? <Link to="/login">Create Account</Link></p>
                                        <div>-------------or-------------</div>
                                        <div>
                                            <button
                                                className="card-btn rounded px-2 my-2"
                                            // onClick={signInUsingGoogle}
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;