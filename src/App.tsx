import { Wrapper } from "./components";
import { AppProvider } from "./context";

import {
  Header,
  Hero,
  FavoriteWorks,
  AboutMe,
  Contact,
  Footer,
} from "./sections";

function App() {
  return (
    <AppProvider>
      <Header />
      <main>
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
  );
}

export default App;
