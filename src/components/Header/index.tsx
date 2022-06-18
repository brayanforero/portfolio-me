import './index.css'
import Logo from './../../assets/img/Logo.svg'
import Wrapper from '../Layouts/Wrapper'
import { useState } from 'react'
import CV from './../../assets/CV/BrayanForero.CV.pdf'
import useScrollMove from '../../hooks/useScrollMove'
function Header() {
  const [show, setShow] = useState(false)
  const { move } = useScrollMove()
  const handleShow = () => {
    setShow(prev => !prev)
  }

  return (
    <header className="Header">
      <Wrapper>
        <img className="Header__logo" src={Logo} alt=" Brayan Forero" />
        <nav className={`Header__navigation${show ? ' show' : ''}`}>
          <a onClick={move} href="#go" className="Header__link active">
            🏠 Go
          </a>
          <a onClick={move} href="" data-section="xp" className="Header__link">
            🏅 Experience
          </a>
          <a
            onClick={move}
            href=""
            data-section="findMe"
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
