import { LanguageContext } from "@/context";
import { assets } from "@/utils";
import { useContext } from "react";
import "./index.css";
const Img = assets("img/Profile.png");

function Hero() {
  const {
    config: { lang },
  } = useContext(LanguageContext);
  const { title, description } = lang.hero;
  return (
    <section className="Hero fadeIn">
      <picture className="Hero-picture">
        <img src={Img} alt="Brayan Forero" />
      </picture>
      <div className="Hero-texts">
        <h2 className="Hero-name">
          {title.slice(0, title.length / 2.75)}
          <span className="text-gradient">
            {title.slice(title.length / 2.75)}
          </span>
        </h2>
        <p className="Hero-p">{description}</p>
      </div>
      {/* <div className="Hero-cta">
        <button className="button-white big">Get in Touch</button>
        <button className="button-white big ghost">View all works</button>
      </div> */}
    </section>
  );
}

export default Hero;
