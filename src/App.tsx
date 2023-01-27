import { FavoriteWorks, Header, Hero, Wrapper, AboutMe } from "./components";

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
