import './index.css'
import Logo from './../../assets/img/Logo.svg'
import Wrapper from '../Layouts/Wrapper'
function Header() {
  return (
    <header className="Header">
      <Wrapper>
        <img src={Logo} alt=" Brayan Forero" />
        <nav className="Header__navigation">
          <a href="#" className="Header__link active">
            Item 1
          </a>
          <a href="#" className="Header__link">
            Item 2
          </a>
          <a href="#" className="Header__link">
            Item 3
          </a>
          <a href="#" className="Header__link">
            Item 4
          </a>
        </nav>
        <button className="Header__toogle">
          <i className="bx bx-menu"></i>
        </button>
      </Wrapper>
    </header>
  )
}

export default Header
