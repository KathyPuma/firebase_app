import React from 'react'
import { NavLink } from 'react-router-dom'
import '../CSS/NavBar.css'

export default function NavBar() {
    return (
        <nav>
            <NavLink exact to={'/'}>Home</NavLink>
            <NavLink to={'/users'}>Show All Users</NavLink>
            <NavLink to={'/login'}>Log In</NavLink>
            <NavLink to={'/signup'}>Sign Up</NavLink>

        </nav>
    )
}