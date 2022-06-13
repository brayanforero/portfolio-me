import './index.css'

const IMAGE =
  'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
function Me() {
  return (
    <section className="Me">
      <picture className="Me__image">
        <img src={IMAGE} alt="Man Profile" />
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
        <button className="bg-primary-600">My Projects 💻</button>
        <button className="bg-primary-700">let's work together! 🤝</button>
      </div>
    </section>
  )
}

export default Me
