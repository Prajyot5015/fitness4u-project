import React from 'react';
import './Navbar.css';
import toast, { Toaster } from 'react-hot-toast'
import { Link } from "react-router-dom";
import './../../views/Home/Home.css'

function Navbar() {
   
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
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/dietplan">Diet Plan</Link>
                    <Link to="/supplememts">Supplements</Link>
                    <Link to="/member">Join Us</Link>
                    <span className='home-logout' onClick={() => {
                    localStorage.clear()
                    toast.success('Logged out successfully')

                    setTimeout(() => {
                        window.location.href = '/login'
                    }, 3000)
                }}>
                   <i className="fa-solid fa-right-from-bracket"></i>
                </span>
                    
                </nav>
               
            </header>
            <Toaster />
        </div>
    );
}

export default Navbar;


