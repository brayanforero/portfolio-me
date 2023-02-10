import { LanguageContext, LanguageProvider } from "@/context";
import { useContext } from "react";
import "./index.css";
import Social from "./Social";
function Contact() {
  const {
    config: { lang },
  } = useContext(LanguageContext);
  const { title } = lang.contact;
  return (
    <section id="talk" className="Contact">
      <h2 className="Contact-h2">
        {`${title.slice(0, title.length / 2)}`}
        <span className="text-gradient">{title.slice(title.length / 2)}</span>
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
