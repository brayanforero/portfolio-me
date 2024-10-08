import './ImWorking.css'

function ImWorking(): JSX.Element {
  return (
    <main className="Imworking">
      <section className="p-5 rounded-lg w-xs h-72">
        <div className="flex flex-col items-center gap-4">
          <div className="px-4 py-6 fire">
            <span className="mb-4 transition-all text-9xl">🚧</span>
          </div>
          <p className="text-2xl font-semibold">
            Hey, I'm improving this website. No worries, I'll see you soon.
          </p>
        </div>
      </section>
    </main>
  )
}

export default ImWorking
