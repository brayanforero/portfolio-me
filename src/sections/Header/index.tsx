import { Wrapper } from "@/components";
import { assets } from "@/utils";

import "./index.css";
const CV = assets("assets/CV/BrayanForero.CV.pdf");

function Header() {
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
              <a href="#projects">Projects</a>
            </li>
            <li className="Header-li">
              <a href="#aboutMe">About me</a>
            </li>
            <li className="Header-li">
              <a download={true} href={CV}>
                CV/Resume
              </a>
            </li>
          </ul>
          <a href="#talk" className="button-white Header-button">
            Let's talk
          </a>
        </nav>
      </Wrapper>
    </header>
  );
}

export default Header;
