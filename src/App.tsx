import './styles/App.css'
import { Header, Me, Wrapper, Xp } from './components'

function App() {
  return (
    <>
      <Header />
      <main className="py-4 lg:py-5">
        <Wrapper>
          <Me />
          <Xp />
        </Wrapper>
      </main>
    </>
  )
}

export default App
