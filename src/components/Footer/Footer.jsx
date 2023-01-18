import React from 'react'
import './footer.css'
import {VscGithub, VscGithubInverted, VscGithubAlt} from 'react-icons/vsc'
import {SlSocialGithub} from 'react-icons/sl'
import {FaGithubAlt, FaGithubSquare} from 'react-icons/fa'

{/*------ DON'T CHANGE THIS PAGE (UNLESS YOU WANT TO CHANGE THE FOOTER CONTENT) ------*/}
{/*------ DON'T CHANGE THIS PAGE (UNLESS YOU WANT TO CHANGE THE FOOTER CONTENT) ------*/}
{/*------ DON'T CHANGE THIS PAGE (UNLESS YOU WANT TO CHANGE THE FOOTER CONTENT) ------*/}

const Footer = () => {
  return (
    <section id='footer'>
      <footer>

        <ul className='permalinks'>
          <li><a href="#/">Home</a></li>
          <li><a href="#/teamprofile">Team Profile</a></li>
          <li><a href="#/industrydata">Industry Data</a></li>
          <li><a href="#/itwork">IT Work</a></li>
          <li><a href="#/ittechnologies">IT Technologies</a></li>
          <li><a href="#/projectidea">Project Idea</a></li>
          <li><a href="#/groupreflection">Group Reflection</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://github.com/stinclair" target="_blank"><VscGithub /></a>
          <a href="https://github.com/Skelly12316" target="_blank"><VscGithubInverted /></a>
          <a href="https://github.com/crimson-ghost" target="_blank"><SlSocialGithub /></a>
          <a href="https://github.com/Barrinvorg" target="_blank"><VscGithubAlt /></a>
          <a href="https://github.com/allyharper" target="_blank"><FaGithubAlt /></a>
          <a href="https://github.com/skdxxb95" target="_blank"><FaGithubSquare /></a>
        </div>

        <div className="footer__copyright">
          <small>&copy; Technomancers. All Rights Reserved.</small>
        </div>
      </footer>
    </section>
  )
}

export default Footer