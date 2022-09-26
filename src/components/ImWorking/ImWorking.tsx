import './ImWorking.css'
export interface ImWorkingProps {}

const ImWorking = (props: ImWorkingProps) => {
  return (
    <main className="Imworking">
      <section className="w-xs h-72 rounded-lg p-5">
        <div className="flex flex-col items-center gap-4">
          <div className="fire px-4 py-6">
            <span className="text-9xl mb-4 transition-all">🔥</span>
          </div>
          <p className="font-semibold text-2xl">
            Sorry. I'm fixing some things, but don't you worry, soon I come
            back.
          </p>
        </div>
      </section>
    </main>
  )
}

export default ImWorking
