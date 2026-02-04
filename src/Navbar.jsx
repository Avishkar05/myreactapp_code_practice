import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav>
            <ul>
                <li><Link className='nav-link' to="/home">Home</Link></li>
                <li><Link className='nav-link' to="/about">About us</Link></li>
                <li><Link className='nav-link' to="/contact">Contact us</Link></li>
            </ul>
        </nav>
    </div>
  )
}
