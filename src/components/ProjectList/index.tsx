import { PROJECTS } from '@/context'
import Project from '../Project'
import './index.css'

function ProjectList(): JSX.Element {
  const works = PROJECTS
  return (
    <div className="Project-list">
      {works.map((w, i) => (
        <Project key={`${w.title}-${i}`} item={w} />
      ))}
    </div>
  )
}

export default ProjectList
