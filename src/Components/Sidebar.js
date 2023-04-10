import React from 'react'
import { Link } from "react-router-dom";
import "../Styles/Sidebar.css"

const Sidebar = () => {
  return (
    <div className="admin">
        <div className="logo">
            <h1>Admin Portal</h1>
        </div>
        <div className="navlinks">
            <ul>
                <li><Link to="/adminportal/" className="links">Dashboard</Link></li>
                <li><Link to="/adminportal/addbooks" className="links">Add Books</Link></li>
                <li><Link to="/adminportal/adduser" className="links">Add Users</Link></li>
                <li><Link to="/adminportal/booklist" className="links">Book List</Link></li>
                <li><Link to="/adminportal/userlist" className="links">User List</Link></li>
                <li><Link to="/" className="links">Logout</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar
