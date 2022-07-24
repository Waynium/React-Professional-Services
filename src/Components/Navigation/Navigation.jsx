import React from 'react'
import './Navigation.css'
import { NavLink } from 'react-router-dom'

const Navigation = () => {

    return (
        <nav className="Navigation">
            <ul className="Navbar">
                <li className="Navigation__item">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="Navigation__item">
                    <NavLink to="/DesignArtworks">Design Artworks</NavLink>
                </li>
                <li className="Navigation__item">
                    <NavLink to="/SoftwareServices">Software Services</NavLink>
                </li>
                <li className="Navigation__item">
                    <NavLink to="/GuitarBookings">Guitar Bookings</NavLink>
                </li>
                <li className="Navigation__item">
                    <NavLink to="/Contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation