import { assets } from '@/utils'
import './index.css'
const Img = assets('img/Profile.png')

function Hero(): JSX.Element {

  return (
    <section className="Hero fadeIn">
      <picture className="Hero-picture">
        <img src={Img} alt="Brayan Forero" />
      </picture>
      <div className="Hero-texts">
        <h2 className="Hero-name">
          Hola, soy <span className="text-gradient">Brayan Forero</span> Desarrolador de Software.
        </h2>
        <p className="Hero-p">Desarrolador Software con experiencia creando soluciones para aplicaciones web</p>
      </div>
      {/* <div className="Hero-cta">
        <button className="button-white big">Get in Touch</button>
        <button className="button-white big ghost">View all works</button>
      </div> */}
    </section>
  )
}

export default Hero
