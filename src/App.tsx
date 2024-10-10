import { Wrapper } from './components'
import { AppProvider } from './context'

import {
  AboutMe,
  Contact,
  FavoriteWorks,
  Footer,
  Header,
  Hero
} from './sections'

function App(): JSX.Element {

  return (
    <AppProvider>
      <Header />
      <main className="fadeIn">
        <Wrapper>
          <Hero />
          <FavoriteWorks />
        </Wrapper>
        <AboutMe />
        <Wrapper>
          <Contact />
        </Wrapper>
      </main>
      <Footer />
    </AppProvider>
  )
}

const WaitPlease: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <h4>Just a second...</h4>
    </div>
  )
}

export default App
