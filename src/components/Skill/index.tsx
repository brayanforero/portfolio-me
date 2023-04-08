import { type Skill as SkillValue } from '@/types'
import './index.css'

function Skill ({ name = 'Lorem Ipsum', icon }: SkillValue): JSX.Element {
  return (
    <article className="Skill">
      <h2 className="Skill-name">{name}</h2>
      <div className="Skill-img">
        <i className={icon}></i>
      </div>
    </article>
  )
}

export default Skill
