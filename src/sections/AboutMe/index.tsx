import { SkillsList, Wrapper } from "@/components";
import "./index.css";

function AboutMe() {
  return (
    <section id="aboutMe" className="AboutMe">
      <Wrapper>
        <div className="AboutMe-cta">
          <h2 className="AboutMe-h2">
            About <span className="text-gradient">Me</span>
          </h2>
          {/* <div className="flex flex-col justify-center gap-5 md:flex-row lg:justify-start lg:pl-16">
            <button className="button-primary big">Get in touch</button>
            <button className="button-white big ghost">View all works</button>
          </div> */}
        </div>
        <p className="mb-8 text-center lg:text-left lg:text-lg">
          ✔ Hi! my name is Brayan and I am a web developer.
        </p>
        <p className="mb-8 text-center lg:text-left lg:text-lg">
          ✔ During my 2 years of experience in the technology, I have developed
          and improved digital products and services with business models
          ranging from digital tools to develop solutions for other
          organizations,
        </p>
        <p className="mb-8 text-center lg:text-left lg:text-lg">
          ✔ In addition to collaborate with communities with Internet access and
          help them with tools to be more, work that has filled me with
          satisfaction to help people through technology.
        </p>
        <SkillsList />
      </Wrapper>
    </section>
  );
}

export default AboutMe;
