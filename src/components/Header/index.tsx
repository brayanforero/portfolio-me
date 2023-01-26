import Wrapper from "../Layouts/Wrapper";
import "./index.css";

function Header() {
  return (
    <header className="Header">
      <Wrapper>
        <h1 className="Header-logo">Brayan Forero</h1>
        <nav className="Header-nav">
          <ul className="Header-ul">
            <li className="Header-li">
              <a href="#">Projects</a>
            </li>
            <li className="Header-li">
              <a href="#">About me</a>
            </li>
            <li className="Header-li">
              <a href="#">CV/Resume</a>
            </li>
          </ul>
          <button>Let's talk</button>
        </nav>
      </Wrapper>
    </header>
  );
}

export default Header;
