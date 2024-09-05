import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable, { createTheme } from 'react-data-table-component';
import './MemberTable.css'

const MemberTable = () => {
    const [members, setMember] = useState([]);
    const [search, setSearch] = useState('')
    const [filterMember, setFilterMember] = useState([])
    // const [plus, setPlus] = useState(0)
    // const [minus, setMinus] = useState(0);
    const [totalMember, setTotalMember] = useState(0)

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
    }, [search, members])


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

    useEffect(() => {
        let total = 0

        members.forEach((member) => {
            total++;
        })
        setTotalMember(total)
    }, [members])


    return (
        <>
            <div className="box-container">
                <div className="box box1">
                    <div className="text">
                        <h2 className="topic-heading">{totalMember}</h2>
                        <h2 className="topic">Total Members</h2>
                    </div>
                    <i className="fa-solid fa-people-group clg"></i>
                </div>

                <div className="box box2">
                    <div className="text">
                        <h2 className="topic-heading">0</h2>
                        <h2 className="topic">Accepted</h2>
                    </div>
                    <i className="fa-solid fa-circle-check clg"></i>
                </div>

                <div className="box box3">
                    <div className="text">
                        <h2 className="topic-heading">0</h2>
                        <h2 className="topic">Rejected</h2>
                    </div>
                    <i className="fa-solid fa-circle-xmark clg"></i>
                </div>
            </div>
            
            <div className="searchbar2">
                <input type="text" placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="report-container">
                <div className="report-header">
                    <h1 className="recent-Articles">Recent</h1>
                    <div className="searchbar">
                        <input type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search Here"
                            className='t-search' />
                    </div>
                </div>

                <div className="report-body">
                    <DataTable
                        columns={columns}
                        data={filterMember}
                        fixedHeader
                        fixedHeaderScrollHeight='400px'
                        pagination
                        highlightOnHover
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