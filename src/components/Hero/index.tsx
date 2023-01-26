import { assets } from "@/utils";
import "./index.css";

function Hero() {
  return (
    <section className="Hero">
      <picture className="Hero-picture">
        <img src={assets("img/Profile.png")} alt="Brayan Forero" />
      </picture>
      <div className="Hero-texts">
        <h2 className="Hero-name">
          <span className="Hero-span">Hello, I'am Brayan Forero </span>
          Fronted Web Developer.
        </h2>
        <p className="Hero-p">
          Frontend Web Developer, with 2 years of experience in web technology
          services. I am passionate about technology and quite like react to
          build UI.
        </p>
      </div>
      <div className="Hero-cta">
        <button className="button-white big">Get in Touch</button>
        <button className="button-white big ghost">View all works</button>
      </div>
    </section>
  );
}

export default Hero;