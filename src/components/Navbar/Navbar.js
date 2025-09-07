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
                <Link to='/' onClick={() => window.scrollTo(0, 0)}>Home</Link>
                <Link to='/about' onClick={() => window.scrollTo(0, 0)} >About Us</Link>
            </nav>
        </div>
    )
}

export default Navbar
