import { Wrapper } from "./components";
import { AppProvider } from "./context";

import { Header, Hero, FavoriteWorks, AboutMe } from "./sections";

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
      </main>
    </AppProvider>
  );
}

export default App;
