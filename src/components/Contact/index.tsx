import './index.css'
import Social from './Social'
function Contact() {
  return (
    <section className="Contact">
      <h2 className="mb-5 text-center text-primary-500">Find Me!</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Social url="https://wa.me/584160353742" name="whatsapp">
          <i className="bx bxl-whatsapp"></i>
        </Social>
        <Social url="https://www.linkedin.com/in/brayanforero/" name="linkedin">
          <i className="bx bxl-linkedin"></i>
        </Social>
        <Social url="https://github.com/brayanforero" name="github">
          <i className="bx bxl-github"></i>
        </Social>
        <Social url="https://m.me/brayan.foreroosorio" name="messenger">
          <i className="bx bxl-messenger"></i>
        </Social>
      </div>
    </section>
  )
}

export default Contact
