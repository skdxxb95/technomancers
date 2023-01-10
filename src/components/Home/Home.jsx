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
                My name is Sam, and I am a student at RMIT with the student number S3992963. I am originally from England, but grew up in Brisbane, Australia. Before starting my studies in the Bachelor of Information Technology, I worked in the hospitality industry. However, I have always had a personal interest in IT and recently decided to pursue a career in this field. I am particularly interested in software development and have a passion for understanding how things work and how they can be improved. In my spare time, I enjoy tinkering with electronics and programming. I have some experience in IT, including my experiences with the Twilight Hack and USB Gecko, which taught me a lot about problem-solving and working with electronics. I also have some experience with programming being something I enjoy doing in my spare time and experience in tech support, being my current career. I am excited to learn more about full stack development and other areas of IT as part of my studies at RMIT. I am part of the team Technomancers for this project. We are a group of dedicated and enthusiastic students with a shared interest in technology. 
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