import { type Skill as SkillValue } from '@/types'
import './index.css'

function Skill ({ name = 'Lorem Ipsum', icon }: SkillValue): JSX.Element {
  return (
    <article className="Skill">
      <i className={icon}></i>
      <p className="Skill-name">{name}</p>
    </article>
  )
}

export default Skill
