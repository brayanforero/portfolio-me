import { Wrapper } from '@/components'
import { assets } from '@/utils'

import './index.css'
const CV = assets('assets/CV/BrayanForero.CV.pdf')

function Header(): JSX.Element {

  return (
    <header id="top" className="Header">
      <Wrapper>
        <h1 className="Header-logo">Brayan Forero</h1>
        <nav className="Header-nav">
          <ul className="Header-ul">
            <li className="Header-li">
              <a href="#top">Home</a>
            </li>
            <li className="Header-li">
              <a href="#projects">Proyectos</a>
            </li>
            <li className="Header-li">
              <a href="#aboutMe">Sobre Mi</a>
            </li>
            <li className="Header-li">
              <a download={true} href={CV}>
                Curriculum
              </a>
            </li>
          </ul>
          <div className="Hero-actions">

            <a href="#talk" className="Header-button button-white">
              Contacto
            </a>
          </div>
        </nav>
      </Wrapper>
    </header>
  )
}

export default Header
