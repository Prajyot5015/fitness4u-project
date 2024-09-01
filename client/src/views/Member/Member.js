import React, { useState } from 'react';
import './Member.css';
import Navbar from '../../componets/Navbar/Navbar'
import Footer from '../../componets/Footer/Footer'
import pImg from './payment/p.png'
import gImg from './payment/g-pay.png'
import aImg from './payment/a.png'
import paytmImg from './payment/paytm.png'
import toast from 'react-hot-toast';

function Member() {
    const [amount, setAmount] = useState("");
    const [months, setMonths] = useState("Select Months");
    const [paymentMode, setPaymentMode] = useState('');

    const handleMonthChange = (e) => {
        const selectedMonth = e.target.value;
        setMonths(selectedMonth);

        switch (selectedMonth) {
            case '1 Month':
                setAmount("500");
                break;
            case '2 Months':
                setAmount("800");
                break;
            case '1 Year':
                setAmount("4500");
                break;
            default:
                setAmount("");
                break;
        }
    };

    const handlePaymentModeChange = (e) => {
        setPaymentMode(e.target.value);
    };

    const handleProceed = () => {
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const email = document.getElementById('email').value;
        const mobile = document.getElementById('mobile').value;

       

        if (!name || !age || !email || !mobile || months === "Select Months") {
           toast.error("Please Enter all deatils")
           return
        }
            
        

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const pattern = /^[6-9]\d{9}$/;

        if (!emailRegex.test(email)) {
            toast.error("Please Enter Valide email address");
            return;
        }
        if (!pattern.test(mobile)) {
            toast.error("Please Enter Valide Mobile Number");
            return;
        }
        if (name && age && email && mobile && months) {
            toast.success("Form submitted Successfully!");
         }

    
    };

    return (
        <>
            <Navbar />

            <div className="form-container">
                <div className="form-items form-dark-bg" id="form">
                    <form>
                        <h2>Become a Member Today</h2>
                        <div className="content">
                            <div className="input-box">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" placeholder="Enter Your Name" required />
                            </div>
                            <div className="input-box">
                                <label htmlFor="age">Age</label>
                                <input type="number" id="age" placeholder="Enter Your Age" required />
                            </div>
                            <div className="input-box">
                                <label htmlFor="email">Email</label>
                                <input type="email" placeholder="Enter your Email" id="email" required />
                            </div>
                            <div className="input-box">
                                <label htmlFor="mobile">Mobile Number</label>
                                <input type="text" placeholder="Enter Your Mobile Number" id="mobile" required />
                            </div>
                            <div className="input-box">
                                <label htmlFor="months">Months</label>
                                <select name="months" id="months" value={months} onChange={handleMonthChange}>
                                    <option>Select Months</option>
                                    <option>1 Month</option>
                                    <option>2 Months</option>
                                    <option>1 Year</option>
                                </select>
                            </div>
                            <div className="input-box">
                                <label htmlFor="amount">Total Amount</label>
                                <input type="text" placeholder="Total" id="amount" value={amount} disabled required />
                            </div>
                            <div className="input-box">
                                <label htmlFor="mode">Payment Mode</label>
                                <div className="mode">
                                    <input type="radio" name="mode" value="online" id="online" checked={paymentMode === 'online'} onChange={handlePaymentModeChange} />
                                    <label htmlFor="online">Online</label>
                                    <input type="radio" name="mode" value="offline" id="offline" checked={paymentMode === 'offline'} onChange={handlePaymentModeChange} />
                                    <label htmlFor="offline">Offline</label>
                                </div>
                            </div>
                            <div className="input-box payment">
                                {paymentMode === 'online' && (
                                    <>
                                        <img src={pImg} alt="payment" />
                                        <img src={gImg} alt="payment" />
                                        <img src={aImg} alt="payment" />
                                        <img src={paytmImg} alt="payment" />
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="btn-container">
                            <button type="button" className="btn" onClick={handleProceed}>Proceed</button>
                            <button type="reset" className="btn">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Member;



// import React from 'react'
// import './Member.css'
// import Navbar from '../../componets/Navbar/Navbar'
// import Footer from '../../componets/Footer/Footer'

// function Member() {

//     function showTotal() {
//         const amountElement = document.getElementById('amount');
//         const monthsElement = document.getElementById('months').value;
//         console.log(amountElement);
//         console.log(monthsElement);

//         amountElement.value = "";

//         if (monthsElement == 'Select Months') {
//             amountElement.value = "0";
//         }
//         else if (monthsElement == '1 Month') {
//             amountElement.value = "500";
//         }
//         else if (monthsElement == '2 Months') {
//             amountElement.value = "800";
//         }
//         else if (monthsElement == '1 Year') {
//             amountElement.value = "4500";
//         }

//     }

//     function onlineMode(mode) {
//         const paymodesElement = document.getElementById('paymodes');
//         console.log(paymodesElement);

//         if (mode == 'online') {
//             paymodesElement.innerHTML = `<img src="./../png/payment/p.png" alt="payment" />
//                                          <img src="./../png/payment/g-pay.png" alt="payment" />
//                                         <img src="./../png/payment/a.png" alt="payment" />
//                                         <img src="./../png/payment/paytm.png" alt="payment" /> `;
//         }
//         else if (mode == 'offline') {
//             paymodesElement.innerHTML = "";
//         }
//     }

//     function validate() {
//         const name = document.getElementById('name').value;
//         const age = document.getElementById('age').value;
//         const email = document.getElementById('email').value;
//         const mobile = document.getElementById('mobile').value;
//         const months = document.getElementById('months').value;

//         if (!name || !age || !email || !mobile || months === "Select Months") {
//             alert("Please fill all fields");
//         }

//     }


//     return (
//         <>
//             <Navbar />


//             <div className="form-container">
//                 <div className="form-items form-dark-bg" id="form">
//                     <form>
//                         <h2>Become a Member Today</h2>
//                         <div className="content">
//                             <div className="input-box">
//                                 <label for="name">Full Name</label>
//                                 <input type="text" id="name" placeholder="Enter Your Name" required />
//                             </div>
//                             <div className="input-box">
//                                 <label for="age">Age</label>
//                                 <input type="number" id="age" placeholder="Enter Your Age" required />
//                             </div>
//                             <div className="input-box">
//                                 <label for="email">Email</label>
//                                 <input type="email" placeholder="Enter your Email" id="email" required />
//                             </div>
//                             <div className="input-box">
//                                 <label for="mobile">Mobile Number</label>
//                                 <input type="text" placeholder="Enter Your Mobile Number" id="mobile" required />
//                             </div>
//                             <div className="input-box">
//                                 <label for="months">Months</label>
//                                 <select name="months" id="months" onclick="showTotal()">
//                                     <option>Select Months</option>
//                                     <option>1 Month</option>
//                                     <option>2 Months</option>
//                                     <option>1 Year</option>
//                                 </select>
//                             </div>
//                             <div className="input-box">
//                                 <label for="amount">Total Amount</label>
//                                 <input type="text" placeholder="Total" id="amount" disabled required />
//                             </div>
//                             <div className="input-box">
//                                 <label for="mode">Payment Mode</label>
//                                 <div className="mode">
//                                     <input type="radio" name="mode" id="online" onclick="onlineMode('online')" required />
//                                     <label for="online"> online</label>
//                                     <input type="radio" name="mode" id="offline" onclick="onlineMode('offline')" required />
//                                     <label for="offline">offline</label>
//                                 </div>
//                             </div>
//                             <div className="input-box payment" id="paymodes"> </div>
//                         </div>

//                         <div className="btn-container">
//                             <button type="button" className="btn" onclick="validate()">Proceed</button>
//                             <button type="reset" className="btn">Cancle</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>

//             <Footer />
//         </>
//     )
// }

// export default Member