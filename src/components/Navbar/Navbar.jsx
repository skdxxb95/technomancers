import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="nav">
      <a href="/" className="site-title">Technomancers</a>
      <ul>
        <li className="active">
          <a href="/technomancers">Home</a>
        </li>
        <li>
          <a href="/technomancers/teamprofile">Team Profile</a>
        </li>
        <li>  
          <a href="/technomancers/industrydata">Industry Data</a>
        </li>
        <li>  
          <a href="/technomancers/itwork">IT Work</a>
        </li>
        <li>  
          <a href="/technomancers/ittechnologies">IT Technologies</a>
        </li>
        <li>
          <a href="/technomancers/projectidea">Project Idea</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar