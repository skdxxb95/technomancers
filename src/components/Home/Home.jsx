import React from 'react'
import './home.css'
import BEST from '../../assets/Best.PNG'
import {VscGithub} from 'react-icons/vsc'

const Home = () => {
  return (
    <section id='home'>
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
            Sarah S.
          </div>
          <div>
            Samuel K.
          </div>
          <div>
            Brodie W.
          </div>
          <div>
            Damian W.
          </div>
          <div>
            Ally H.
          </div>
          <div>
            Samuel B.
          </div>
        </div>
    </section>
  )
}

export default Home