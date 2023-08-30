import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faHouseUser } from '@fortawesome/free-solid-svg-icons';
import logo1 from '../../images/logo/logo.svg';
import footerImg from '../../images/payment/payment (1).png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-section">
            <footer class="container p-5">
                <div class="grid row row-cols-2 row-cols-md-4 g-2">
                    <div class="g-col-4">
                        <div className="footer-Part">
                            <img src={logo1} alt="" />
                            <p><small>Online Food Delivery Usa At Asksly! - Easily Found! Many Products. Easy Acces. Quick Results. Compare Products. Search and Discover.</small></p>
                            <div className="d-flex text-success ">
                                <p><FontAwesomeIcon icon={faEnvelope} /> </p> <p className="ml-2">ashrafulkamran98@gmail.com</p>
                            </div>
                            <div className="d-flex text-success">
                                <p><FontAwesomeIcon icon={faPhone} /></p> <p className="ml-2">+ 78 925-942-2900</p>
                            </div>
                            <div className="d-flex text-success">
                                <p><FontAwesomeIcon icon={faHouseUser} /></p> <p className="ml-2">
                                    70 West Buckingham Ave, NY 11735</p>
                            </div>
                            <p><small>© 2021 Greenmart. All rights reserved.</small></p>
                        </div>
                    </div>
                    <div class="g-col-2">
                        <div>
                            <h6>ABOUT</h6>
                            <p>About Us</p>
                            <p>Contact Us</p>
                            <p>Help Center</p>
                            <p>FAQ</p>
                        </div>
                    </div>
                    <div class="g-col-2">
                        <div className="footer-Part">
                            <h6>HELP & GUIDE</h6>
                            <p>Term Of Use</p>
                            <p>Privacy Policy</p>
                            <p>Shipping & Delivery</p>
                        </div>
                    </div>
                    <div class="g-col-3">
                        <div className="footer-Part">
                            <h6>NEWSLETTER</h6>
                            <p><small>Don’t miss out thousands of great deals & promotions.</small></p>
                            <input type="text" placeholder="Email address..." />
                            <button className="card-btn mt-2">Subscribe</button>
                        </div>
                        <br />
                        <img src={footerImg} alt="" />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;