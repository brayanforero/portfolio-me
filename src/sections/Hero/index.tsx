import { assets } from "@/utils";
import "./index.css";
const Img = assets("img/Profile.png");

function Hero() {
  return (
    <section className="Hero">
      <picture className="Hero-picture">
        <img src={Img} alt="Brayan Forero" />
      </picture>
      <div className="Hero-texts">
        <h2 className="Hero-name">
          <span className="text-gradient">Hello, I'm Brayan Forero </span>
          Fronted Web Developer.
        </h2>
        <p className="Hero-p">JS/TS ⚪ REACT ⚪ TAILWIND CSS</p>
      </div>
      {/* <div className="Hero-cta">
        <button className="button-white big">Get in Touch</button>
        <button className="button-white big ghost">View all works</button>
      </div> */}
    </section>
  );
}

export default Hero;
