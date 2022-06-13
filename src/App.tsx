import './styles/App.css'
import { Header, Me, Wrapper } from './components'

function App() {
  return (
    <>
      <Header />
      <main className="py-4 lg:py-5">
        <Wrapper>
          <Me />
        </Wrapper>
      </main>
    </>
  )
}

export default App
