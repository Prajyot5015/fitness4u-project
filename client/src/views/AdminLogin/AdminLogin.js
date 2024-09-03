import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import './AdminLogin.css'

function AdminLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginNow = async () => {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/adminlogin`, {
            email: email,
            password: password
        })


        if (response.data.success) {
            toast.success(response.data.message)

            localStorage.setItem('currentUser', JSON.stringify(response.data.data))

            toast.loading('Redirecting to dashboard...')

            setTimeout(() => {
                window.location.href = '/admin'
            }, 3000)
        } else {
            toast.error(response.data.message)
        }
    }

    return (
        <div className='login-main-div'>
            <div className="login-container">
                <div className='lg'>
                    <div className='user '>
                        <Link to='/login' className='admin'>User Login</Link>
                    </div>
                    <div className='user active'>
                        <Link to="/adminlogin" className='admin'>Admin</Link>
                    </div>
                </div>

                <form >
                    <input
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        type='button'
                        onClick={loginNow}
                    >
                        Login
                    </button>
                </form>
                <Toaster />
            </div>
        </div>
    )
}

export default AdminLogin