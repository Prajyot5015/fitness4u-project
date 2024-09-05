import React from 'react'
import './Admin.css'
import MemberTable from '../../componets/MemberTable/MemberTable'
import toast, { Toaster } from 'react-hot-toast'

const Admin = () => {
  return (
    <>
      <header>
        <div class="logosec">
          <i class="fa-solid fa-bars icn menuicn" id="menuicn"></i>
          <div class="logo">Fitness<span className='four'>4</span>U</div>
        </div>
      </header>

      <div class="main-container">
        <div class="navcontainer">
          <nav class="nav">
            <div class="nav-upper-options">
              <div class="nav-option option1">
                <i class="fa-solid fa-users alg"></i>
                <h3> Members</h3>
              </div>

              <div class="option2 nav-option">
                <i class="fa-solid fa-cart-shopping alg"></i>
                <h3>Sellers</h3>
              </div>

              <div class="nav-option alogout" onClick={() => {
                  localStorage.clear()
                  toast.success('Logged out successfully')

                  setTimeout(() => {
                    window.location.href = '/adminlogin'
                  }, 3000)
                }}>
                <i class="fa-solid fa-right-from-bracket fa-rotate-180 alg"></i>
                <h3>
                  Logout
                </h3>
              </div>

            </div>
          </nav>
        </div>
        <div class="main">

          <div class="box-container">
            <div class="box box1">
              <div class="text">
                <h2 class="topic-heading">1000</h2>
                <h2 class="topic">Total Members</h2>
              </div>
              <i class="fa-solid fa-people-group clg"></i>
            </div>

            <div class="box box2">
              <div class="text">
                <h2 class="topic-heading">150</h2>
                <h2 class="topic">Accepted</h2>
              </div>
              <i class="fa-solid fa-circle-check clg"></i>
            </div>

            <div class="box box3">
              <div class="text">
                <h2 class="topic-heading">320</h2>
                <h2 class="topic">Rejected</h2>
              </div>
              <i class="fa-solid fa-circle-xmark clg"></i>
            </div>
          </div>

          <div class="searchbar2">
            <input type="text" placeholder="Search" />
          </div>

          <MemberTable />
        </div>
      </div>

      <Toaster />
    </>



    //<MemberTable />
  )
}

export default Admin