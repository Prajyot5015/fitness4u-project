import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable, { createTheme } from 'react-data-table-component';
import './MemberTable.css'

const MemberTable = () => {
    const [members, setMember] = useState([]);
    const [search, setSearch] = useState('')
    const [filterMember, setFilterMember] = useState([])

    const getMember = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/members`);

        setMember(response.data.data)
        setFilterMember(response.data.data)
    }

    const columns = [
        {
            name: "Name",
            selector: (row) => row.uname,
            //sortable : true
        },
        {
            name: "Email",
            selector: (row) => row.email
        },
        {
            name: "Number",
            selector: (row) => row.number
        },
        {
            name: "Age",
            selector: (row) => row.age
        },
        {
            name: "Months",
            selector: (row) => row.months
        },
        {
            name: "Amount",
            selector: (row) => row.totalAmount
        },
        {
            name: "Mode",
            selector: (row) => row.mode
        },
        {
            name: "Action",
            cell: (row) => (
                <>
                    <i className="fa-solid fa-circle-check w" style={{ color: "#008000", }} ></i>
                    <i className="fa-solid fa-circle-xmark w" style={{ color: "#Ff0000", }}></i>
                </>
            )
        }
    ]

    useEffect(() => {
        getMember();
    }, [])

    useEffect(() => {
        const result = members.filter(member =>
            member.uname.toLowerCase().includes(search.toLowerCase())
        )
        setFilterMember(result);
    }, [search,members])


    const customStyles = {
        headCells: {
            style: {
                fontSize: '20px',
                fontWeight: "bold"
            },
        },

    };

    createTheme('solarized', {
        text: {
            primary: '#fff',
            secondary: '#fff',
        },
        background: {
            default: '#454545',
            color: '#fff'
        },
        context: {
            background: '#cb4b16',
            text: '#FFFFFF',
        },
        divider: {
            default: '#000',
        }
    }, 'dark');


    return (
        <>
            <div class="report-container">
                <div class="report-header">
                    <h1 class="recent-Articles">Recent Articles</h1>
                    <div class="searchbar">
                        <input type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search Here"
                            className='t-search' />
                    </div>
                </div>

                <div class="report-body">
                    <DataTable
                        // title="Member List" 
                        columns={columns}
                        data={filterMember}
                        fixedHeader
                        fixedHeaderScrollHeight='400px' //for height
                        pagination
                        highlightOnHover
                        //   actions={ <button className='btn' >Export</button>}
                        // subHeader
                        // subHeaderComponent={
                        //     <input type='text' placeholder='search'
                        //             value={search} 
                        //             onChange={(e) => setSearch(e.target.value)} 
                        //             className='t-search'/>
                        // }
                        //  subHeaderAlign='center'
                        customStyles={customStyles}
                        className='sc'
                        theme="solarized"
                    />
                </div>
            </div>

        </>

    )
}

export default MemberTable