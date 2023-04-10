import React from 'react'
import { Link } from "react-router-dom";
import "../Styles/Sidebar.css"

const UserSidebar = () => {
  return (
    <div className="admin">
        <div className="logo">
            <h1>User Portal</h1>
        </div>
        <div className="navlinks">
            <ul>
                <li><Link to="/userportal/" className="links">Dashboard</Link></li>
                <li><Link to="/userportal/booklist" className="links">Book List</Link></li>
                <li><Link to="/" className="links">Logout</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default UserSidebar
