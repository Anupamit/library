import React from 'react'
import { Link } from 'react-router-dom'
import  "../Styles/Home.css"

const Home = () => {
    return (
        <div className='landingpage'>
            <div className="selectLoginType">
                <h1>Login</h1>
                <Link className='btn' to="/userlogin">UserLogin</Link>
                <Link  className='btn' to="/adminlogin">AdminLogin</Link>
            </div>
        </div>
    )
}

export default Home
