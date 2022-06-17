import './styles/App.css'
import { Contact, Header, Me, Wrapper, Xp } from './components'

function App() {
  return (
    <>
      <Header />
      <main className="py-4 lg:py-5">
        <Wrapper>
          <Me />
          <Xp />
          <Contact />
        </Wrapper>
      </main>
    </>
  )
}

export default App
