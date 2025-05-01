import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/timer">Timer</Link>
                </li>
                <li>
                    <Link to="/form">Form</Link>
                </li>
            </ul>
        </nav>

        <Outlet />
    </div>
  )
}

export default Layout