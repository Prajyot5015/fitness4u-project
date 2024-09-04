import React, { useState, useEffect } from 'react'
import './Admin.css'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'


function Admin() {

  const [search, setSearch] = useState('');
  const [member, setMember] = useState([])

  const searchMember = async () => {

    const response = await axios.get(`${process.env.REACT_APP_API_URL}/members?memberName=${search}`)

    const allFindMembers = response.data.data

   // console.log(response.data.data);

    setMember(allFindMembers)
  }
  useEffect(() => {
    searchMember()
  }, [search])

  return (
    <>
      <div className='admin-container'>
        <input
          type='text'
          list="techOptions"
          placeholder='Search'
          className='admin-search'
          value={search}
          onChange={(e) => setSearch(e.target.value)} />
        <i className="fa-solid fa-magnifying-glass"></i>

        <datalist id="techOptions">
        {
                    member.map((member) => {
                        const { _id, uname, email, mode, months, number, totalAmount } = member

                        return (<option  key={_id}> {uname} </option>)
                    })
        }
        </datalist>

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