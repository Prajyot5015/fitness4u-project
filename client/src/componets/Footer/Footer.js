import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div>
            <footer>
                <div className="footer-container">
                    <div className="footer-content">
                        <h3>Contact Us</h3>
                        <div className="contact">
                            <i className="far fa-envelope"></i>
                            <p><a href="mailto:fitness4u@gmail.com">fitness4u@gmail.com</a></p>
                        </div>
                        <div className="contact">
                            <i className="fas fa-phone-volume"></i><a href="tel:7028112938">
                                7028112938
                            </a>
                        </div>
                        <div className="contact">
                            <i className="fas fa-map-marker-alt"></i>
                            <p><a href="https://maps.app.goo.gl/ZCaLBy9iwxGCiZHYA" target="blank">
                                Nagar Manmad Road, MH SH 10, near Bus Stand,Babhaleshwar,Maharashtra 413737 </a></p>
                        </div>

                    </div>

                    <div className="footer-content">
                        <h3>Quick Links</h3>
                        <ul className="list">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/dietplan">Diet Plan</Link>
                            </li>
                            <li>
                                <Link to="/supplememts">Supplements</Link>
                            </li>
                            <li>
                                <Link to="/member">Join Us</Link>
                            </li>

                        </ul>
                    </div>
                    <div className="footer-content">
                        <h3>Follow Us</h3>
                        <div className="social-media">
                            <ul>
                                <li><a href="https://www.facebook.com/mayur.darndale" target="_blank"><i
                                    className="fa-brands fa-facebook-f"></i></a> </li>
                                <li><a href="https://www.instagram.com/md_mayur93?igsh=MWl6dDFpeDlldWxnMw==" target="_blank"><i
                                    className="fa-brands fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-youtube"></i> </a></li>
                            </ul>
                        </div>
                    </div>
                </div >
                <div className="footer-bottom">
                    <p>Made With Love <i className="fas fa-heart"></i> By Fitness<span className="four">4</span>U</p>
                </div>
            </footer >
        </div>
    )
}

export default Footer