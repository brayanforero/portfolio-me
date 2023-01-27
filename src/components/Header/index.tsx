import { assets } from "@/utils";
import Wrapper from "../Layouts/Wrapper";
import "./index.css";
const CV = assets("assets/CV/BrayanForero.CV.pdf");

function Header() {
  return (
    <header className="Header">
      <Wrapper>
        <h1 className="Header-logo">Brayan Forero</h1>
        <nav className="Header-nav">
          <ul className="Header-ul">
            <li className="Header-li">
              <a href="#">Home</a>
            </li>
            <li className="Header-li">
              <a href="#">Projects</a>
            </li>
            <li className="Header-li">
              <a href="#">About me</a>
            </li>
            <li className="Header-li">
              <a download={true} href={CV}>
                CV/Resume
              </a>
            </li>
          </ul>
          <button className="button-white Header-button">Let's talk</button>
        </nav>
      </Wrapper>
    </header>
  );
}

export default Header;
