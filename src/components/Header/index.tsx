import './index.css'
import Logo from './../../assets/img/Logo.svg'
import Wrapper from '../Layouts/Wrapper'
import { useState } from 'react'
function Header() {
  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(prev => !prev)
  }
  return (
    <header className="Header">
      <Wrapper>
        <img className="Header__logo" src={Logo} alt=" Brayan Forero" />
        <nav className={`Header__navigation${show ? ' show' : ''}`}>
          <a href="#" className="Header__link active">
            Go 🏠
          </a>
          <a href="#" className="Header__link">
            Experience 🏅
          </a>
          <a href="#" className="Header__link">
            Me 😉
          </a>
          <a href="#" className="Header__link">
            Contact Me 📇
          </a>
          <a href="#" className="Header__link">
            CV 📄
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
