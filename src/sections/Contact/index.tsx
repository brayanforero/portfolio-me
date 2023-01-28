import "./index.css";
import Social from "./Social";
function Contact() {
  return (
    <section id="talk" className="Contact">
      <h2 className="Contact-h2">
        Let's <span className="text-gradient">Talk</span>
      </h2>
      <div className="Contact-rrss">
        <Social url="https://wa.me/584160353742" name="whatsapp">
          <i className="bx bxl-whatsapp"></i>
        </Social>
        <Social url="https://www.linkedin.com/in/brayanforero/" name="linkedin">
          <i className="bx bxl-linkedin"></i>
        </Social>
        <Social url="https://github.com/brayanforero" name="github">
          <i className="bx bxl-github"></i>
        </Social>
      </div>
    </section>
  );
}

export default Contact;
