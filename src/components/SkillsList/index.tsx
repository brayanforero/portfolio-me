import { AppContext } from '@/context'
import { useContext } from 'react'
import Skill from '../Skill'

function SkillList (): JSX.Element {
  const {
    state: { skills }
  } = useContext(AppContext)
  return (
    <div>
      {skills.map((s) => (
        <Skill {...s} key={s.name} />
      ))}
    </div>
  )
}

export default SkillList
