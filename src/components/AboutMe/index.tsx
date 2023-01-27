import Wrapper from "../Layouts/Wrapper";
import "./index.css";
import Skills from "./Skills";
function AboutMe() {
  return (
    <section className="AboutMe">
      <Wrapper>
        <div className="AboutMe-cta">
          <h2 className="AboutMe-h2">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="flex justify-center gap-5 lg:justify-start lg:pl-16">
            <button className="button-primary big">Get in touch</button>
            <button className="button-white big ghost">View all works</button>
          </div>
        </div>
        <p className="mb-16 text-center lg:text-left lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam magni
          nulla voluptatum soluta magnam debitis odio, cum aut ipsa explicabo.
        </p>

        <Skills />
      </Wrapper>
    </section>
  );
}

export default AboutMe;
