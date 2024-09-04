import React from 'react'
import './Admin.css'
import toast, { Toaster } from 'react-hot-toast'


function Admin() {

  return (
    <>
      <div className='admin-container'>
        <input type='text' placeholder='Search' className='admin-search' />
        <i class="fa-solid fa-magnifying-glass"></i>

        <span className='admin-logout' onClick={() => {
          localStorage.clear()
          toast.success('Logged out successfully')

          setTimeout(() => {
            window.location.href = '/adminlogin'
          }, 3000)
        }}>
          <i className="fa-solid fa-right-from-bracket"></i>
        </span>
      </div>
      <div className='admin-btn-container'>
        <button className='btn admin-btn'>Members</button>
        <button className='btn admin-btn'>Pusrchase</button>
      </div>
      <Toaster />
    </>
  )
}

export default Admin