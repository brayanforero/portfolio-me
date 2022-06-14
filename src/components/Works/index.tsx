import './index.css'

function Xp() {
  return (
    <section className="Xp">
      <h2 className="text-primary-500 text-center mb-5">Experience</h2>
      <div className="Xp__skills">
        <h3 className="text-center text-xl md:text-2xl mb-4 opacity-90">
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
        <h3 className="text-center text-xl md:text-2xl mb-4 opacity-90">
          🗃️ Proyects
        </h3>
        <div className="grid grid-cols-1 gap-5 justify-items-center md:grid-cols-2">
          <article className="Xp__work">
            <picture className="h-1/4 max-h-52 lg:max-h-60">
              <img
                className="object-cover"
                src="https://repository-images.githubusercontent.com/418251932/72b9486a-e13f-4b99-8e6e-317270efb7da"
                alt=""
              />
            </picture>
            <div className="py-5 px-4">
              <h4 className="mb-4 text-grays-600">Normalize Clone</h4>
              <p className="mb-4">
                Proyecto personal donde desarrolle skills de maquetación web.
              </p>
              <div className="flex flex-col md:flex row gap-2">
                <button className="rounded bg-primary-500 p-3 md:p-4 font-bold text-grays-100 lg:p-5">
                  🌎 Demo
                </button>
                <button className="rounded bg-grays-700 p-3 md:p-4 font-bold text-grays-100 lg:p-5">
                  🧰 Repo
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Xp
