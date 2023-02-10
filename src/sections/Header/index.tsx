import { Wrapper } from "@/components";
import { LanguageContext } from "@/context";
import { assets } from "@/utils";
import { useContext } from "react";

import "./index.css";
const CV = assets("assets/CV/BrayanForero.CV.pdf");

function Header() {
  const {
    config: { lang, current },
    dispacher,
  } = useContext(LanguageContext);
  const { navigation, contact } = lang;
  return (
    <header id="top" className="Header">
      <Wrapper>
        <h1 className="Header-logo">Brayan Forero</h1>
        <nav className="Header-nav">
          <ul className="Header-ul">
            <li className="Header-li">
              <a href="#top">{navigation.home}</a>
            </li>
            <li className="Header-li">
              <a href="#projects">{navigation.projects}</a>
            </li>
            <li className="Header-li">
              <a href="#aboutMe">{navigation.aboutMe}</a>
            </li>
            <li className="Header-li">
              <a download={true} href={CV}>
                {navigation.cv}
              </a>
            </li>
          </ul>
          <div className="Hero-actions">
            <div className="flex gap-3">
              <button
                onClick={() => dispacher("en")}
                className={`button lang ${current === "en" ? "active" : null}`}
              >
                🇺🇲
              </button>
              <button
                onClick={() => dispacher("es")}
                className={`button lang ${current === "es" ? "active" : null}`}
              >
                🇻🇪
              </button>
            </div>
            <a href="#talk" className="Header-button button-white">
              {contact.title}
            </a>
          </div>
        </nav>
      </Wrapper>
    </header>
  );
}

export default Header;
