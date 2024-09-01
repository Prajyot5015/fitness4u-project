import React from 'react'
import './Footer.css'

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
                            <i className="fas fa-phone-volume"></i><a href="tel:09960014512">
                                09960014512
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
                            <li><a href="./index.html">Home</a></li>
                            <li><a href="./pages/about.html">About Us</a></li>
                            <li><a href="./pages/supplement.html">Supplements</a></li>
                            <li><a href="./pages/diet.html">Diet Plan</a></li>
                            <li><a href="./pages/dietForm.html">Your Diet</a></li>

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