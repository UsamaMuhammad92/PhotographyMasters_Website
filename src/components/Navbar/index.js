import React from 'react'
import { NavbarContainer, MenuItem, NavMenu} from './NavbarStyled'
import { Link } from 'react-router-dom'
import '../../App.css'

const Navbar = () => {
    return (
        <>
            <NavbarContainer>
                <NavMenu>
                    <MenuItem><Link className="navLinks" to="/">Home</Link></MenuItem>
                    <MenuItem><Link className="navLinks" to="/about">About Us</Link></MenuItem>
                    <MenuItem><Link className="navLinks" to="/services">Services</Link></MenuItem>
                    <MenuItem><Link className="navLinks" to="/gallery">Gallery</Link></MenuItem>
                    <MenuItem><Link className="navLinks" to="/contactus">Contact Us</Link></MenuItem>
                </NavMenu>
            </NavbarContainer>
        </>
    )
}

export default Navbar