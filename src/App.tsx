import { Wrapper } from "./components";
import { AppProvider } from "./context";

import { Header, Hero, FavoriteWorks, AboutMe, Contact } from "./sections";

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
    </AppProvider>
  );
}

export default App;
