import './index.css'
import Image from './../../assets/img/Proflie.png'
function Me() {
  return (
    <section className="Me">
      <picture className="Me__image">
        <img src={Image} alt="Brayan Forero Profile" />
      </picture>
      <div className="Me__texts">
        <h1 className="Me__name">
          <span className="text-primary-500">Brayan Forero</span>
        </h1>
        <p className="mb-4">
          Software developer, with more than 1+ years of experience in web ⚛️
          technologies and office 365 services. I am passionate about technology
          and being able to help people through it, sports ⚽ and music 🎸 fan
        </p>
      </div>
      <div className="Me__cta">
        <a href="#xp" className="bg-primary-600">
          My Projects 💻
        </a>
        <a href="#findMe" className="bg-primary-700">
          let's work together! 🤝
        </a>
      </div>
    </section>
  )
}

export default Me
