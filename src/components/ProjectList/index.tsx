import useWorks from '@/hooks/useWorks'
import Project from '../Project'
import './index.css'

function ProjectList (): JSX.Element {
  const { loading, works } = useWorks()

  if (loading) return <p className="text-2xl text-gradient">Loading...</p>
  return (
    <div className="Project-list">
      {works.map((w, i) => (
        <Project key={`${w.title}-${i}`} item={w} />
      ))}
    </div>
  )
}

export default ProjectList
