import { type Work } from '@/types'
import './index.css'
import Company from './Company'

interface Props {
  item: Work
}

function Project ({ item }: Props): JSX.Element {
  const { title, cover, description, preview, repo, meta } = item
  return (
    <article className="Project">
      <i className="bx bxs-star Project-star"></i>
      <picture className="Project-picture">
        <img className="Project-img " src={cover} alt="Picture" />
      </picture>
      <section className="Project-content">
        <h3 className="Project-h3">{title}</h3>
        {
          meta != null && (<Company name={meta.company} />)
        }
        <p className='Project-p'>{description}</p>
        <div className="Project-buttons">
          {preview !== null && (
            <a href={preview} target="_blank" className="button-primary" rel="noreferrer">
              Preview
            </a>
          )}
          {repo !== null && (
            <a href={repo} target="_blank" className="button ghost" rel="noreferrer">
              Repo
            </a>
          )}
        </div>
      </section>
    </article>
  )
}

export default Project
