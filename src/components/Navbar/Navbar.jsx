import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to ='/' className='site-title'>The Technomancer's</Link>
      <ul>
        <li className="active">
          <Link to ='/'>Home</Link>
        </li>
        <li>
          <Link to ='/teamprofile'>Team Profile</Link>
        </li>
        <li>  
          <Link to ='/industrydata'>Industry Data</Link>
        </li>
        <li>  
          <Link to ='/itwork'>IT Work</Link>
        </li>
        <li>  
          <Link to ='/ittechnologies'>IT Technologies</Link>
        </li>
        <li>
          <Link to ='/projectidea'>Project Idea</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar