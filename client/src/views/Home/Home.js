import React, { useEffect, useState } from 'react'
import "./Home.css"
import toast, { Toaster } from 'react-hot-toast'


function Home() {
    const [user, setUser] = useState('')
   

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'))

        if (currentUser) {
            setUser(currentUser)
        }

        if (!currentUser) {
            window.location.href = '/login'
        }
    }, [])


    return (
        <div className='main-container'>
            <h1 className='home-greeting'>Hello {user.fullName}</h1>

            <span className='home-logout' onClick={() => {
                localStorage.clear()
                toast.success('Logged out successfully')

                setTimeout(() => {
                    window.location.href = '/login'
                }, 3000)
            }}>
                Logout
            </span>



            <Toaster />
        </div>
    )
}

export default Home