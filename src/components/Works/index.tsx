import useWorks from '../../hooks/useWorks'
import './index.css'
import Work from './Work'

function Xp() {
  const { loading, works } = useWorks()
  return (
    <section id="xp" className="Xp">
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

        <div className="grid grid-cols-1 gap-5 justify-items-center md:grid-cols-2 lg:grid-cols-3">
          {works.map(w => (
            <Work key={w.title} data={w} />
          ))}
        </div>

        {loading && (
          <span className="p-2 border-b-2 rounded bg-primary-100 border-primary-500">
            Loading...
          </span>
        )}
      </div>
    </section>
  )
}

export default Xp
