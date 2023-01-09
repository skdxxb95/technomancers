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
          <p>
          Animi quas est eum dolore. Aperiam ex fuga sit esse consequuntur quibusdam nulla. Amet sunt voluptas ducimus aliquid ipsum omnis qui. Debitis qui molestias consequatur placeat non omnis beatae expedita.
          <br></br>
          Praesentium neque quasi natus qui voluptas officiis dolor voluptates. Voluptas ad quaerat assumenda qui odit. Doloremque assumenda porro culpa aut et expedita. Totam et voluptas voluptatibus occaecati blanditiis. Repellendus incidunt perferendis consequatur ratione soluta quae voluptas corporis.
          <br></br>
          Occaecati nulla molestias voluptas nostrum facilis est deserunt. Placeat pariatur sint natus ab. Ipsam est repellendus maiores quod. Aut perferendis laborum aut.
          Praesentium neque quasi natus qui voluptas officiis dolor voluptates. Voluptas ad quaerat assumenda qui odit. Doloremque assumenda porro culpa aut et expedita. Totam et voluptas voluptatibus occaecati blanditiis. Repellendus incidunt perferendis consequatur ratione soluta quae voluptas corporis.
          Animi quas est eum dolore. Aperiam ex fuga sit esse consequuntur quibusdam nulla. Amet sunt voluptas ducimus aliquid ipsum omnis qui. Debitis qui molestias consequatur placeat non omnis beatae expedita.
          <br></br>
          Praesentium neque quasi natus qui voluptas officiis dolor voluptates. Voluptas ad quaerat assumenda qui odit. Doloremque assumenda porro culpa aut et expedita. Totam et voluptas voluptatibus occaecati blanditiis. Repellendus incidunt perferendis consequatur ratione soluta quae voluptas corporis.
          <br></br>
          Occaecati nulla molestias voluptas nostrum facilis est deserunt. Placeat pariatur sint natus ab. Ipsam est repellendus maiores quod. Aut perferendis laborum aut.
          Praesentium neque quasi natus qui voluptas officiis dolor voluptates. Voluptas ad quaerat assumenda qui odit. Doloremque assumenda porro culpa aut et expedita. Totam et voluptas voluptatibus occaecati blanditiis. Repellendus incidunt perferendis consequatur ratione soluta quae voluptas corporis.
          </p>
        </div>
      </div>
      <div className='github-links'>
          <div>
            <a href='https://stinclair.github.io/assessment_1/' target="_blank">
              <article>
                <VscGithub size='35' className='personalprofile__details-icon' />
                <h3>Sarah S.</h3>
              </article>
            </a>
          </div>
          <div>
            <a href='https://skelly12316.github.io/MyProfile/' target="_blank">
              <article>
                <VscGithubInverted size='35' className='personalprofile__details-icon' />
                <h3>Samuel K.</h3>
              </article>
            </a>
          </div>
          <div>
            <a href='https://crimson-ghost.github.io/Assignment/' target="_blank">
              <article>
                <SlSocialGithub size='35' className='personalprofile__details-icon' />
                <h3>Brodie W.</h3>
              </article>
            </a>
          </div>
          <div>
            <a href='https://barrinvorg.github.io/COSC2196---Assignment-1/' target="_blank">
              <article>
                <VscGithubAlt size='35' className='personalprofile__details-icon' />
                <h3>Damian W.</h3>
              </article>
            </a>
          </div>
          <div>
            <a href='https://allyharper.github.io/Assignment-1/' target="_blank">
              <article>
                <FaGithubAlt size='35' className='personalprofile__details-icon' />
                <h3>Ally H.</h3>
              </article>
            </a>
          </div>
          <div>
            <a href='https://skdxxb95.github.io/skdxxb95/' target="_blank">
              <article>
                <FaGithubSquare size='35' className='personalprofile__details-icon' />
                <h3>Samuel B.</h3>
              </article>
            </a>
          </div>
        </div>
    </section>
  )
}

export default Home