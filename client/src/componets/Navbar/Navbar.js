import React from 'react';
import './Navbar.css';
import toast, { Toaster } from 'react-hot-toast'
import { Link } from "react-router-dom";
import './../../views/Home/Home.css'
// import darkModeImg from './dark-mode.png';
// import nightModeImg from './night-mode.png';

function Navbar() {

    // useEffect(() => {
    //     const themeOfLocalStorage = localStorage.getItem("theme");
    //     if(themeOfLocalStorage) {
    //         changeMode(themeOfLocalStorage);
    //     }
    // }, []);

    // function changeMode(theme) {
    //     const bodyElement = document.getElementById('body');
    //     const headerElement = document.getElementById('header');
    //     const navbarElement = document.getElementById('navbar');
    //     const menuBarElement = document.getElementById('menu-bar');
    //     const teamElement1 = document.getElementById('team1');
    //     const teamElement2 = document.getElementById('team2');
    //     const cardElement1 = document.getElementById('card');
    //     const cardElement2 = document.getElementById('card2');
    //     const cardElement3 = document.getElementById('card3');
    //     const pcard1Element = document.getElementById('pcard1');
    //     const pcard2Element = document.getElementById('pcard2');
    //     const pcard3Element = document.getElementById('pcard3');
    //     const pcard4Element = document.getElementById('pcard4');
    //     const darkLightElement = document.getElementById('darkLight');

    //     if (theme === 'dark') {
    //         bodyElement.className = "theme-dark";
    //         headerElement.className = "header-dark";
    //         navbarElement.className = "navbar-dark";
    //         menuBarElement.className = "menu-bar-dark";
    //         teamElement1.className = "team1-dark";
    //         teamElement2.className = "team1-dark";
    //         cardElement1.className = "card-dark";
    //         cardElement2.className = "card-dark";
    //         cardElement3.className = "card-dark";
    //         pcard1Element.className = "card-dark";
    //         pcard2Element.className = "card-dark";
    //         pcard3Element.className = "card-dark";
    //         pcard4Element.className = "card-dark";
    //         darkLightElement.innerHTML = `<img src={darkModeImg} alt="dark/light image" className="darkLight" onClick={() => changeMode('light')} />`;
            
    //         localStorage.setItem('theme', 'dark');

    //     } else if(theme === 'light') {
    //         bodyElement.classList.remove("theme-dark");
    //         headerElement.classList.remove("header-dark");
    //         headerElement.classList.add("header");
    //         navbarElement.classList.remove("navbar-dark");
    //         navbarElement.classList.add("navbar");
    //         menuBarElement.classList.remove("menu-bar-dark");
    //         menuBarElement.classList.add("menu-bar");
    //         teamElement1.classList.remove("team1-dark");
    //         teamElement1.classList.add("team1");
    //         teamElement2.classList.remove("team1-dark");
    //         teamElement2.classList.add("team1");
    //         cardElement1.classList.remove("card-dark");
    //         cardElement1.classList.add("card");
    //         cardElement2.classList.remove("card-dark");
    //         cardElement2.classList.add("card");
    //         cardElement3.classList.remove("card-dark");
    //         cardElement3.classList.add("card");
    //         pcard1Element.classList.remove("card-dark");
    //         pcard1Element.classList.add("card");
    //         pcard2Element.classList.remove("card-dark");
    //         pcard2Element.classList.add("card");
    //         pcard3Element.classList.remove("card-dark");
    //         pcard3Element.classList.add("card");
    //         pcard4Element.classList.remove("card-dark");
    //         pcard4Element.classList.add("card");
    //         darkLightElement.innerHTML = `<img src={darkModeImg} alt="dark/light image" className="darkLight" onClick={() => changeMode('dark')} />`;
            
    //         localStorage.setItem('theme', 'light');
    //     }
    // }
   
    return (
        <div>        
            <header className="header" id="header">
                <a href="./index.html"> <i className="fa-solid fa-dumbbell"></i>Fitness<span>4</span>U </a>
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




// import React from 'react'
// import './Navbar.css'
// import darkModeImg from './dark-mode.png'
// import nightModeImg from './night-mode.png'

// function Navbar() {

    
//     const themeOfLocalStorage = localStorage.getItem("theme");
//     if(themeOfLocalStorage) {
//        changeMode(themeOfLocalStorage);
//     }

    
//     function changeMode(theme)
//     {
//         const bodyElement = document.getElementById('body');
//         const headerElement = document.getElementById('header');
//         const navbarElement = document.getElementById('navbar');
//         const menuBarElement = document.getElementById('menu-bar');
//         const teamElement1 = document.getElementById('team1');
//         const teamElement2 = document.getElementById('team2');
//         const cardElement1 = document.getElementById('card');
//         const cardElement2 = document.getElementById('card2');
//         const cardElement3 = document.getElementById('card3');
//         const pcard1Element = document.getElementById('pcard1');
//         const pcard2Element = document.getElementById('pcard2');
//         const pcard3Element = document.getElementById('pcard3');
//         const pcard4Element = document.getElementById('pcard4');
//         const darkLightElement = document.getElementById('darkLight');

//         if (theme === 'dark') {
//             bodyElement.classNameName = "theme-dark";
//             headerElement.classNameName = "header-dark";
//             navbarElement.classNameName = "navbar-dark";
//             menuBarElement.classNameName = "menu-bar-dark";
//             teamElement1.classNameName = "team1-dark";
//             teamElement2.classNameName = "team1-dark";
//             cardElement1.classNameName = "card-dark";
//             cardElement2.classNameName = "card-dark";
//             cardElement3.classNameName = "card-dark";
//             pcard1Element.classNameName = "card-dark";
//             pcard2Element.classNameName = "card-dark";
//             pcard3Element.classNameName = "card-dark";
//             pcard4Element.classNameName = "card-dark";
//             darkLightElement.innerHTML = ` <img src="./png/themes.png" alt="dark/light image" className="darkLight" onclick="changeMode('light')" />`;
            
//             localStorage.setItem('theme', 'dark');

//         } else if(theme == 'light'){
//             bodyElement.classNameList.remove("theme-dark");
//             headerElement.classNameList.remove("header-dark");
//             headerElement.classNameList.add("header");
//             navbarElement.classNameList.remove("navbar-dark");
//             navbarElement.classNameList.add("navbar");
//             menuBarElement.classNameList.remove("menu-bar-dark");
//             menuBarElement.classNameList.add("menu-bar");
//             teamElement1.classNameList.remove("team1-dark");
//             teamElement1.classNameList.add("team1");
//             teamElement2.classNameList.remove("team1-dark");
//             teamElement2.classNameList.add("team1");
//             cardElement1.classNameList.remove("card-dark");
//             cardElement1.classNameList.add("card");
//             cardElement2.classNameList.remove("card-dark");
//             cardElement2.classNameList.add("card");
//             cardElement3.classNameList.remove("card-dark");
//             cardElement3.classNameList.add("card");
//             pcard1Element.classNameList.remove("card-dark");
//             pcard1Element.classNameList.add("card");
//             pcard2Element.classNameList.remove("card-dark");
//             pcard2Element.classNameList.add("card");
//             pcard3Element.classNameList.remove("card-dark");
//             pcard3Element.classNameList.add("card");
//             pcard4Element.classNameList.remove("card-dark");
//             pcard4Element.classNameList.add("card");
//             darkLightElement.innerHTML = ` <img src="./png/dark-mode.png" alt="dark/light image" className="darkLight" onClick="changeMode('dark')" />`;
            
//             localStorage.setItem('theme', 'light');
//         }
//     }
   
//   return (
//     <div>        
//         <header className="header" id="header">
//                 <a href="./index.html"> <i className="fa-solid fa-dumbbell"></i>Fitness<span>4</span>U </a>
//                 <input type="checkbox" id="check" />
//                 <label for="check" className="menu-bar" id="menu-bar">
//                     <i className="fa-solid fa-bars" id="menu-icon"></i>
//                     <i className="fa-solid fa-xmark" id="close-icon"></i>
//                 </label>
//                 <nav className="navbar" id="navbar">
//                     <a href="./index.html" className="active">Home</a>
//                     <a href="./pages/about.html">About Us</a>
//                     <a href="./pages/supplement.html">Supplements</a>
//                     <a href="./pages/diet.html">Diet Plan</a>
//                     <a href="./pages/member.html"><button type="button" className="btn">Join Now</button></a>
//                 </nav>
//                 <div id="darkLight">
//                     <img src={darkModeImg} alt="dark/light image" className="darkLight" onClick={changeMode('dark')} />
//                 </div>
//             </header>
//     </div>
//   )
// }

// export default Navbar