import { SkillsList, Wrapper } from '@/components'
import { LanguageContext } from '@/context'
import { useContext } from 'react'
import './index.css'

function AboutMe (): JSX.Element {
  const {
    config: { lang }
  } = useContext(LanguageContext)
  const { title, copy } = lang.aboutSection
  const newTitle = title.split(/\s/)
  return (
    <section id="aboutMe" className="AboutMe">
      <Wrapper>
        <div className="AboutMe-cta">
          <h2 className="AboutMe-h2">
            {newTitle.at(0)}
            <span className="text-gradient"> {newTitle.at(-1)}</span>
          </h2>
          {/* <div className="flex flex-col justify-center gap-5 md:flex-row lg:justify-start lg:pl-16">
            <button className="button-primary big">Get in touch</button>
            <button className="button-white big ghost">View all works</button>
          </div> */}
        </div>
        {copy?.map((text, i) => (
          <p
            key={`p-${i}`}
            className="mb-8 text-center lg:text-left lg:text-lg"
          >
            {text}
          </p>
        ))}

        <SkillsList />
      </Wrapper>
    </section>
  )
}

export default AboutMe
