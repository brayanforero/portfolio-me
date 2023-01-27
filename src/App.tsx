import { Wrapper } from "./components";
import { Header, Hero, FavoriteWorks, AboutMe } from "./sections";

function App() {
  return (
    <>
      <Header />
      <main>
        <Wrapper>
          <Hero />
          <FavoriteWorks />
        </Wrapper>
        <AboutMe />
      </main>
    </>
  );
}

export default App;
