import React,{ useEffect, useState }  from 'react'
import './Admin.css'


function Admin() {
  const [user, setUser] = useState('')

  useEffect(() => {
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))

    if (currentUser) {
        setUser(currentUser)
    }

    if (!currentUser) {
        window.location.href = '/adminlogin'
    }
}, [])
  return (
    <div>
      admin Home
    </div>
  )
}

export default Admin