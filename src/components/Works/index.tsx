import './index.css'
import Work from './Work'

function Xp() {
  return (
    <section className="Xp">
      <h2 className="mb-5 text-center text-primary-500">Experience</h2>
      <div className="Xp__skills">
        <h3 className="mb-4 text-xl text-center md:text-2xl opacity-90">
          ⚡ Skills
        </h3>
        <div className="grid grid-cols-1 gap-5 justify-items-center md:grid-cols-2">
          <span className="Xp__skill">HTML</span>
          <span className="Xp__skill">CSS</span>
          <span className="Xp__skill">Javascript - Typescript</span>
          <span className="Xp__skill">Office 365</span>
        </div>
      </div>
      <div className="Xp_works">
        <h3 className="mb-4 text-xl text-center md:text-2xl opacity-90">
          🗃️ Proyects
        </h3>
        <div className="grid grid-cols-1 gap-5 justify-items-center md:grid-cols-2">
          <Work
            title="Normalize Clone"
            description="Proyecto personal donde desarrolle skills de maquetación web."
            preview="#"
            repo="#"
            cover="https://repository-images.githubusercontent.com/418251932/72b9486a-e13f-4b99-8e6e-317270efb7da"
          />
        </div>
      </div>
    </section>
  )
}

export default Xp
