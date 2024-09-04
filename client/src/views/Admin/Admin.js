import React, { useState, useEffect } from 'react';
import './Admin.css';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

function Admin() {
  const [search, setSearch] = useState('');
  const [members, setMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);

  useEffect(() => { 
    const fetchMembers = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/members`);
        setMembers(response.data.data);
        setFilteredMembers(response.data.data);
      } catch (error) {
        toast.error('Failed to fetch members.');
      }
    };

    fetchMembers();
  }, []);

  useEffect(() => {
    const filtered = members.filter(member =>
      member.uname.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredMembers(filtered);
  }, [search, members]);

 
  return (
    <>
      <div className='admin-container'>
        <input
          type='text'
          list="techOptions"
          placeholder='Search'
          className='admin-search'
          value={search}
          onChange={ (e) => setSearch(e.target.value)}
        />
        <i className="fa-solid fa-magnifying-glass"></i>


        <datalist id="techOptions">
          {filteredMembers.map(member => (
            <option key={member._id}>{member.uname}</option>
          ))}
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
  );
}

export default Admin;

