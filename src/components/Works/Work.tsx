import { Work as Model } from '../../types/models/core'

interface Props {
  data: Model
}
function Work({ data }: Props) {
  return (
    <article className="Xp__work">
      <img
        className="block object-cover w-full m-0 h-1/3 max-h-48"
        src={data.cover}
        alt={`Brayan Forero ${data.title}`}
      />

      <div className="px-4 py-5">
        <h4 className="mb-4 text-grays-600">{data.title}</h4>
        <p className="mb-4">{data.description}</p>
        {data.repo && data.preview && (
          <div className="flex flex-col gap-2 md:flex-row">
            <a
              href={data.preview}
              target="_blank"
              className="px-3 py-2 font-bold text-center rounded bg-primary-500 text-grays-100"
            >
              🌎 Demo
            </a>
            <a
              href={data.repo}
              target="_blank"
              className="px-3 py-2 font-bold text-center rounded bg-grays-700 text-grays-100"
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
