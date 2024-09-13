import React from 'react'
import './Welcome.css'
import bgVideo from './bg.mp4'
import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <>
            <div className="herow">
                <video autoPlay loop muted playsInline className="bvideo">
                    <source src={bgVideo} type="video/mp4" height="100vh" />
                </video>
                <div className="contentw">
                    <h1>Fitness<span className='four'>4</span>U</h1>
                    <div>
                        <Link to='/login'>Login</Link>
                        <Link to='/signup'>Signup</Link>
                    </div>
                </div>

                <div className="scroll-message">
                    <p>Welcome to <span>Fitness<span className='four'>4</span>U</span>  |  Contact us: <a href='tel: 7018223938'>+91-7028112938 </a>
                        | Address: <a href="https://maps.app.goo.gl/ZCaLBy9iwxGCiZHYA" target="blank">
                        Nagar Manmad Road, MH SH 10, near Bus Stand,Babhaleshwar,Maharashtra 413737 </a>
                    </p>
                </div>
            </div>


        </>
    )
}

export default Welcome