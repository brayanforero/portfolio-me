import './ImWorking.css'

function ImWorking (): JSX.Element {
  return (
    <main className="Imworking">
      <section className="p-5 rounded-lg w-xs h-72">
        <div className="flex flex-col items-center gap-4">
          <div className="px-4 py-6 fire">
            <span className="mb-4 transition-all text-9xl">🔥</span>
          </div>
          <p className="text-2xl font-semibold">
            Sorry. I am fixing some things, but do not you worry, soon I come
            back.
          </p>
        </div>
      </section>
    </main>
  )
}

export default ImWorking
