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
                ....'s introduction
              </p>
              {/*------ THIS IS WHERE YOU STOP ------*/}
            </div>
            <div>
              {/*----- BRODIE'S INTRODUCTION CONTENT ----*/}
              <h3>Brodie W.</h3>
              <p>
                Hi I'm Brodie, I'm 27 years old, I live in Manchester England currently with my fiance and our 
                two year old daughter. I love programming, martial arts and music. This year I'll be studying 
                programming even further as well as two minor elected topics in German. 
              </p>
              {/*------ THIS IS WHERE YOU STOP ------*/}
            </div>
            <div>
              {/*----- DAMIAN'S INTRODUCTION CONTENT ----*/}
              <h3>Damian W.</h3>
              <p>
                Hi, I'm Damian Whitman. RMIT Student number S3990599. I am a Huge Geek, whether it Games, Anime, Sci-Fi/Fantsy, or even Tabeltop. I love it all. 
                <br></br><br />
                I have spent the most of my life working in retail, fortunately for me it has been hardware rather the department stores. Even with that I have still been 'into' and love Computers. Every desktop PC I use at home is built by me, for me. I have kept my eye on the changing and evolving nature of the IT universe, and love reading up on the latest breakthroughs in all areas. 
                <br /><br />
                I am Australian born and raised been. I have been living, schooling, working and playing in brisbane nearly my entire life. I have now reached a point in my life where I need to get out of the physical labour work, and find something that will let me keep working without placing any unnecessarily large strains on my body. With my interest in IT, and security concious mindset. Cyberesecurity is where I want to be.
                </p>
              {/*------ THIS IS WHERE YOU STOP ------*/}
            </div>
            <div>
              {/*----- ALLY'S INTRODUCTION CONTENT ----*/}
              <h3>Ally H.</h3>
              <p>Hi, my name is Ally Harper, my student number is s3997602 and I am a member of the RMIT student team Technomancers. I was born in Victoria, Australia but spent some time as a child living in Britain. I attended Bayswater secondary College and then Swinburne studying viticulture and enology. I am currently employed in a number of fields including bar attendent and musician. I have also taught music in the past. I am hoping to be able to work remotely in the future and there is a high demand for IT personnel, which is one of the reasons I am studying IT. I have a great interest in off grid solar technologies. I would also like to develop my own website and an app. I am finding coding fascinating and have quite an interest in security. Being a part of Technomancers is definitely helping me to learn more about IT, they are a great team with plenty of knowlege in IT. 
              
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