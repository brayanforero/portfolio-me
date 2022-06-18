import './index.css'
import Logo from './../../assets/img/Logo.svg'
import Wrapper from '../Layouts/Wrapper'
import { useState } from 'react'
import CV from './../../assets/CV/BrayanForero.CV.pdf'
import useScrollMove from '../../hooks/useScrollMove'

function Header() {
  const [show, setShow] = useState(false)
  const { move } = useScrollMove(setShow)
  const handleShow = () => {
    setShow(prev => !prev)
  }

  return (
    <header id="go" className="Header">
      <Wrapper>
        <img className="Header__logo" src={Logo} alt=" Brayan Forero" />
        <nav className={`Header__navigation${show ? ' show' : ''}`}>
          <a href="#go" id="go-section" onClick={move} className="Header__link">
            🏠 Go
          </a>
          <a href="#xp" id="xp-section" onClick={move} className="Header__link">
            🏅 Experience
          </a>
          <a
            href="#findMe"
            onClick={move}
            id="findMe-section"
            className="Header__link"
          >
            📇 Find me
          </a>
          <a href={CV} download className="Header__link">
            📄 CV
          </a>
        </nav>
        <button onClick={handleShow} className="Header__toogle">
          <i className="bx bx-menu"></i>
        </button>
      </Wrapper>
    </header>
  )
}

export default Header
