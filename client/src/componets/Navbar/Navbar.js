import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Navbar.css';
import toast, { Toaster } from 'react-hot-toast'
import { Link } from "react-router-dom";
import './../../views/Home/Home.css'
import swal from 'sweetalert';

function Navbar({ active }) {
    const [msg, setMsg] = useState([]);
    const [notification, setNotification] = useState('notification');

    const currentUser = JSON.parse(localStorage.getItem('currentUser'))

    const getMember = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/member/${currentUser._id}`);
        // console.log(response.data.data.reason);
        // const msg = response.data.data        
        setMsg(response.data.data)

        if (msg.status === 'Accepted') {
            swal({
                title: "Congratulation!",
                text: "Now, You are our Member!",
                icon: "success",
                dangerMode: true
            }).then(()=>{
                setNotification('notification')
            });
           
        }
        else if (msg.status === 'Rejected') {
            swal({
                title: "Sorry!",
                text: msg.reason,
                icon: "error",
                dangerMode: true
            }).then(()=>{
                setNotification('notification')
            });
        }
    }

    useEffect(() => {
        getMember();
    }, [])

    return (
        <div>
            <header className="header" id="header">
                <Link to="/"> <i className="fa-solid fa-dumbbell"></i>Fitness<span>4</span>U </Link>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="menu-bar" id="menu-bar">
                    <i className="fa-solid fa-bars" id="menu-icon"></i>
                    <i className="fa-solid fa-xmark" id="close-icon"></i>
                </label>
                <nav className="navbar" id="navbar">
                    <Link to="/" className={active === "home" ? "activebg" : ""}>Home</Link>
                    <Link to="/about" className={active === "about" ? "activebg" : ""}>About</Link>
                    <Link to="/dietplan" className={active === "diet" ? "activebg" : ""}>Diet Plan</Link>
                    <Link to="/supplememts" className={active === "supplement" ? "activebg" : ""}>Supplements</Link>
                    <Link to="/member" className='blinkn'>Join Us</Link>
                    <span className='home-logout' onClick={() => {
                        localStorage.clear()
                        toast.success('Logged out successfully')

                        setTimeout(() => {
                            window.location.href = '/login'
                        }, 3000)
                    }}>
                        <i className="fa-solid fa-right-from-bracket hlg"></i>
                    </span>
                </nav>

                <i className={`fa-solid fa-bell ${notification}`} onClick={getMember}></i>

            </header>

            <Toaster />
        </div>
    );
}

export default Navbar;


