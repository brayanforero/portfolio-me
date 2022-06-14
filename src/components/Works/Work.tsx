import { Work as Model } from '../../types/models/core'

interface Props {
  data: Model
  actionable?: boolean
}
function Work({ data, actionable = true }: Props) {
  return (
    <article className="Xp__work">
      <picture className="h-2/4 max-h-52 lg:max-h-60">
        <img src={data.cover} alt={`Brayan Forero ${data.title}`} />
      </picture>
      <div className="px-4 py-5">
        <h4 className="mb-4 text-grays-600">{data.title}</h4>
        <p className="mb-4">{data.description}</p>
        {actionable && (
          <div className="flex flex-col gap-2 md:flex-row">
            <a
              href={data.preview}
              target="_blank"
              className="px-3 py-2 font-bold rounded bg-primary-500 text-grays-100 "
            >
              🌎 Demo
            </a>
            <a
              href={data.repo}
              target="_blank"
              className="px-3 py-2 font-bold rounded bg-grays-700 text-grays-100 "
            >
              🧰 Repo
            </a>
          </div>
        )}
      </div>
    </article>
  )
}

export default Work
