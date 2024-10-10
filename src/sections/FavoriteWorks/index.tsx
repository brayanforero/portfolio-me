import { ProjectList } from '@/components'
import './index.css'

function FavoriteWorks(): JSX.Element {

  return (
    <section id="projects" className="FavoriteWorks">
      <div className="flex flex-col gap-8 mb-8 lg:flex-row">
        <h2 className="FavoriteWorks-h2">
          Proy<span className="text-gradient">ectos</span>
        </h2>
        <p className="FavoriteWorks-p">Proyectos en los que he trabajado como desarrollador</p>
      </div>
      <ProjectList />
    </section>
  )
}

export default FavoriteWorks
