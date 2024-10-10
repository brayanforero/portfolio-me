import { SkillsList, Wrapper } from '@/components'
import './index.css'
const copy = [
  "✔ Ingeniero informático y desempeño como desarrollador de software",
  "✔ Apasionado por la tecnología desde que era un niño, ya que nos permite crear cosas mas allá de nuestra imaginación",
  "✔ He colaborado con comunidades con pocos recursos y les he ayudado con herramientas para ser mejores en sus labores, trabajo que me ha llenado de satisfacción por ayudar a la gente a través de la tecnología, así mismo en una gran empresa donde brindan apoyo a otras corporaciones."
]
function AboutMe(): JSX.Element {

  return (
    <section id="aboutMe" className="AboutMe">
      <Wrapper>
        <div className="AboutMe-cta">
          <h2 className="AboutMe-h2">
            Sobre <span className="text-gradient">Mi</span>
          </h2>

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
