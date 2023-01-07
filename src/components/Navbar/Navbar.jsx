import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="nav">
      <a href="/" className="site-title">Technomancers</a>
      <ul>
        <li className="active">
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/teamprofile">Team Profile</a>
        </li>
        <li>  
          <a href="/industrydata">Industry Data</a>
        </li>
        <li>  
          <a href="/itwork">IT Work</a>
        </li>
        <li>  
          <a href="/ittechnologies">IT Technologies</a>
        </li>
        <li>
          <a href="/projectidea">Project Idea</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar