import { AppContext } from '@/context'
import { useContext } from 'react'
import Skill from '../Skill'
import './index.css'
function SkillList (): JSX.Element {
  const {
    state: { skills }
  } = useContext(AppContext)
  return (
    <>
    <h3 className='mb-4 text-2xl text-center'>Skills</h3>
    <div className='Skills-list'>
      {skills.map((s) => (
        <Skill {...s} key={s.name} />
      ))}
    </div>
    </>
  )
}

export default SkillList
