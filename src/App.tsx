import { FavoriteWorks, Header, Hero, Wrapper } from "./components";

function App() {
  return (
    <>
      <Header />
      <main>
        <Wrapper>
          <Hero />
          <FavoriteWorks />
        </Wrapper>
      </main>
    </>
  );
}

export default App;
