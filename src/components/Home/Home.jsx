import React from 'react'
import './home.css'
import BEST from '../../assets/Best.PNG'
import {VscGithub, VscGithubInverted, VscGithubAlt} from 'react-icons/vsc'
import {SlSocialGithub} from 'react-icons/sl'
import {FaGithubAlt, FaGithubSquare} from 'react-icons/fa'


const Home = () => {
  return (
    <section id='home'>
      <div className='introduction-title'>
        <h1>Technomancers</h1>
      </div>
      <div className="introduction">
        <div className='main-image'>
          <img src={BEST}></img>
        </div>
        <div className='introduction-content'>
            <div>
              {/*----- SARAH'S INTRODUCTION CONTENT ----*/}
              <h3>Sarah S.</h3>
              <p>
                ....'s introduction
              </p>
              {/*------ THIS IS WHERE YOU STOP ------*/}
            </div>
            <div>
              {/*----- SAMUEL K'S INTRODUCTION CONTENT ----*/}
              <h3>Samuel K.</h3>
              <p>
                ....'s introduction
              </p>
              {/*------ THIS IS WHERE YOU STOP ------*/}
            </div>
            <div>
              {/*----- BRODIE'S INTRODUCTION CONTENT ----*/}
              <h3>Brodie W.</h3>
              <p>
                ....'s introduction
              </p>
              {/*------ THIS IS WHERE YOU STOP ------*/}
            </div>
            <div>
              {/*----- DAMIAN'S INTRODUCTION CONTENT ----*/}
              <h3>Damian W.</h3>
              <p>
                ....'s introduction
              </p>
              {/*------ THIS IS WHERE YOU STOP ------*/}
            </div>
            <div>
              {/*----- ALLY'S INTRODUCTION CONTENT ----*/}
              <h3>Ally H.</h3>
              <p>
                ....'s introduction
              </p>
              {/*------ THIS IS WHERE YOU STOP ------*/}
            </div>
            <div>
              {/*----- SAMUEL B'S INTRODUCTION CONTENT ----*/}
              <h3>Samuel B.</h3>
              <p>
                ....'s introduction
              </p>
              {/*------ THIS IS WHERE YOU STOP ------*/}
            </div>
        </div>
      </div>
      <div className='github-links'>
        <a href='https://stinclair.github.io/assessment_1/' target="_blank">
          <div>
            <VscGithub size='35' />
            <h3>Sarah S.</h3>
          </div>
        </a>
        <a href='https://skelly12316.github.io/MyProfile/' target="_blank">
          <div>
            <VscGithubInverted size='35' />
            <h3>Samuel K.</h3>
          </div>
        </a>
        <a href='https://crimson-ghost.github.io/Assignment/' target="_blank">
          <div>
            <SlSocialGithub size='35' />
            <h3>Brodie W.</h3>
          </div>
        </a>
        <a href='https://barrinvorg.github.io/COSC2196---Assignment-1/' target="_blank">
          <div>
            <VscGithubAlt size='35' />
            <h3>Damian W.</h3>
          </div>
        </a>
         <a href='https://allyharper.github.io/Assignment-1/' target="_blank">
          <div>
            <FaGithubAlt size='35' />
            <h3>Ally H.</h3>
          </div>
        </a>
        <a href='https://skdxxb95.github.io/skdxxb95/' target="_blank">
          <div>
            <FaGithubSquare size='35' />
            <h3>Samuel B.</h3>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Home