import React, { useState, useEffect } from 'react';
import './BuyNow.css';
import Navbar from '../../componets/Navbar/Navbar'
import Footer from '../../componets/Footer/Footer'
import toast, { Toaster } from 'react-hot-toast'
import pImg from './payment/p.png'
import gImg from './payment/g-pay.png'
import aImg from './payment/a.png'
import paytmImg from './payment/paytm.png'


function BuyNow() {
    const [totalPrice, setTotalPrice] = useState(0);
    const [paymentMode, setPaymentMode] = useState('');

    useEffect(() => {
        const price = localStorage.getItem("totalPrice");
        if (price) {
            setTotalPrice(price);
            localStorage.removeItem("totalPrice");
        }
    }, []);

    const display = (mode) => {
        setPaymentMode(mode);
    }

    const validate = () => {
        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const email = document.getElementById('email').value;
        const mobile = document.getElementById('mobile').value;
        const city = document.getElementById('city').value;
        const state = document.getElementById('state').value;
        const pincode = document.getElementById('pincode').value;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const pattern = /^[6-9]\d{9}$/;

        if (!name || !address || !email || !mobile || !city || !state || !pincode) {
            toast.error("Please Fill all fields");
            return;
        }

        if (!emailRegex.test(email)) {
            toast.error("Please Enter Valide email address");
            return;
        }
        if (!pattern.test(mobile)) {
            toast.error("Please Enter Valide Mobile Number");
            return;
        }
        
        if (name && address && email && mobile && city && state && pincode) {
            toast.success("Order Placed!!!");
            return;
        }
    }

    return (
        <>
            <Navbar />
            <div className="form-container">
                <div className="form-items" id="form">
                    <form>
                        <h2>Purchase Details</h2>
                        <div className="content">
                            <div className="input-box">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" placeholder="Enter Your Name" required />
                            </div>
                            <div className="input-box">
                                <label htmlFor="mobile">Mobile Number</label>
                                <input type="tel" placeholder="Enter Your Mobile Number" id="mobile" required />
                            </div>
                            <div className="input-box">
                                <label htmlFor="email">Email</label>
                                <input type="email" placeholder="Enter your Email" id="email" required />
                            </div>
                            <div className="input-box">
                                <label htmlFor="address">Address</label>
                                <textarea name="address" id="address"></textarea>
                            </div>
                            <div className="input-box">
                                <label htmlFor="city">City</label>
                                <input type="text" placeholder="Enter your City" id="city" required />
                            </div>
                            <div className="input-box">
                                <label htmlFor="state">State</label>
                                <input type="text" placeholder="Enter Your State" id="state" required />
                            </div>
                            <div className="input-box">
                                <label htmlFor="pincode">Pin Code</label>
                                <input type="text" placeholder="Enter Your Pin Code" id="pincode" required />
                            </div>
                        </div>

                        <h2>Payment Information</h2>
                        <div className="option">
                            <div className="option-content">
                                <input type="radio" name="option" id="debit-credit" onClick={() => display('credit')} />
                                <label htmlFor="debit-credit">Debit/Credit</label>
                            </div>
                            <div className="option-content">
                                <input type="radio" name="option" id="upi" onClick={() => display('upi')} />
                                <label htmlFor="upi">UPI</label>
                            </div>
                            <div className="option-content">
                                <input type="radio" name="option" id="cash" onClick={() => display('delivery')} />
                                <label htmlFor="cash">Cash On Delivery</label>
                            </div>
                        </div>

                        <div id="show">
                            {paymentMode === 'credit' && (
                                <div className="debit-container content">
                                    <div className="input-box">
                                        <label htmlFor="credit">Credit Card Number</label>
                                        <input type="tel" id="credit" placeholder="**** **** **** ****" required />
                                    </div>
                                    <div className="input-box">
                                        <label htmlFor="cvv">CVV Number</label>
                                        <input type="text" id="cvv" placeholder="CVV" required />
                                    </div>
                                    <div className="input-box">
                                        <label htmlFor="valid">Valid Thru</label>
                                        <input type="text" id="valid" placeholder="MM / YY" required />
                                    </div>
                                </div>
                            )}
                            {paymentMode === 'upi' && (
                                <div className="input-box payment">
                                    <img src={pImg} alt="payment" />
                                    <img src={gImg} alt="payment" />
                                    <img src={aImg} alt="payment" />
                                    <img src={paytmImg} alt="payment" />
                                </div>
                            )}
                            {paymentMode === 'delivery' && (
                                <p className="delivery">Due to handling costs, a nominal fee ₹10 will be charged.</p>
                            )}
                        </div>

                        <h2>Total: ₹ <span id="buy-total">{totalPrice}</span></h2>

                        <div className="btn-container">
                            <button type="button" className="btn" onClick={validate}>Place Order</button>
                            <button type="reset" className="btn">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
            <Toaster />
        </>
    )
}

export default BuyNow;


