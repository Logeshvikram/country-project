import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className=' header-nav'>
            <NavLink to='/'></NavLink>
            <NavLink to='/Home'>Home</NavLink>
            <NavLink to='/CountryInformation'>CountryInformation</NavLink>
            <NavLink to='/About'>About</NavLink>
            <NavLink to='/Contact'>Contact</NavLink>
            <NavLink to='/Signup'>Signup</NavLink>
            <NavLink to='/Login'>Login</NavLink>

        </nav>
    )
}
