interface Props {
  title: string
  description: string
  preview: string
  repo: string
  cover: string
  actionable?: boolean
}

function Work({
  title,
  description,
  repo,
  preview,
  cover,
  actionable = true,
}: Props) {
  return (
    <article className="Xp__work">
      <picture className="h-1/4 max-h-52 lg:max-h-60">
        <img src={cover} alt={`Brayan Forero ${title}`} />
      </picture>
      <div className="px-4 py-5">
        <h4 className="mb-4 text-grays-600">{title}</h4>
        <p className="mb-4">{description}</p>
        {actionable && (
          <div className="flex flex-col gap-2 md:flex-row">
            <a
              href={preview}
              target="_blank"
              className="p-3 font-bold rounded bg-primary-500 lg:p-4 text-grays-100 "
            >
              🌎 Demo
            </a>
            <a
              href={repo}
              target="_blank"
              className="p-3 font-bold rounded bg-grays-700 text-grays-100 lg:p-3"
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
