import React from 'react'
import './home.css'
import BEST from '../../assets/Best.PNG'
import BEST3 from '../../assets/Best3.png'
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
          <img src={BEST3}></img>
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
                My name is Sam and my student number is s3987667. My nationality is Australian, as is my whole family. I have lived in Bundaberg, Queensland for
                my whole 21 years of life. My highest level of education is currently Year 12, but I am currently
                enrolled in both IIT and Programming with RMIT University. My primary hobby when I am not
                working retail full time is gaming on my new PC which I built on my own with no experience or
                help apart from YouTube videos. Otherwise, I am spending time with my partner and our cat,
                rats, and fish.
              </p>
              {/*------ THIS IS WHERE YOU STOP ------*/}
            </div>
            <div>
              {/*----- BRODIE'S INTRODUCTION CONTENT ----*/}
              <h3>Brodie W.</h3>
              <p>
                I'm Brodie, I'm 27 years old and I was born in Far North Queensland, Australia. I grew up on a 
                sugar cane farm, in a village of 300 people. My first introduction to anything technology wise was
                watching my friend's older brothers playing games on the computer, and teaching me how to take care
                of our home computer by running disk optimisations and waiting for it to load correctly before use.
                Eventually, I was drawn in to programming and networking by taking ICT in high school on the Sunshine
                Coast. I never took IT at university, which is something I regret. However, I never forgot how much
                I loved the feeling of solving a programming problem or understanding how a network functions. 
                When I was 21, I applied for a Sales position at an IT company, and was shocked when the owner called
                and asked me to apply for the role of Lead Web Developer, despite only casually learning web development
                online and working as a security guard at the time. I applied and was successful, and spent the next 4
                years working closely with software and web developers. It drew me to the field even further, and after
                another small stint in security, settled on formally studying software development at a university. 
                Now, I am studying online at RMIT whilst living in Manchester, England with my fiance and our two year
                old daughter. I love studying online and I love RMIT, I can't wait for each new term to learn something
                completely different.
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
              <p>Hi, my name is Ally Harper, my student number is s3997602 and I am a member of the RMIT student team Technomancers. I was born in Victoria, Austalia but spent some time as a child living in Britain. I attended Bayswater secondary College and then Swinburne studying viticulture and enology. I am currently employed in a number of fields including bar attendent and musician. I have also taught music in the past. I am hoping to be able to work remotely in the future and there is a high demand for IT personnel, which is one of the reasons I am studying IT. I have a great interest in off grid solar technologies. I would also like to develop my own website and an app. I am finding coding fascinating and have quite an interest in security. Being a part of Technomancers is definitely helping me to learn more about IT, they are a great team with plenty of knowlege in IT. 
              
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