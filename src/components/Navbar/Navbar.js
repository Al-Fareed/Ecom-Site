import './Navbar.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='logo'>
                <img src='' alt='LOGO'/>
            </div>
            <nav className='navbars'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About Us</Link>
            </nav>
        </div>
    )
}

export default Navbar
