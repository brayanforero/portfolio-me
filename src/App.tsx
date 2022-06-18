import { lazy, Suspense } from 'react'
import { Contact, Me, NavSkeleton, Wrapper, Xp } from './components'
import './styles/App.css'

const Header = lazy(() => import('./components/Header'))
function App() {
  return (
    <>
      <Suspense fallback={<NavSkeleton />}>
        <Header />
      </Suspense>

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
