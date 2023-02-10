import { useContext } from "react";
import { Wrapper } from "./components";
import { AppProvider, LanguageContext } from "./context";

import {
  Header,
  Hero,
  FavoriteWorks,
  AboutMe,
  Contact,
  Footer,
} from "./sections";

function App() {
  const { config } = useContext(LanguageContext);
  const { isChecking } = config;

  if (isChecking) return <WaitPlease />;
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
  );
}

const WaitPlease = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <h4>Just a second...</h4>
    </div>
  );
};

export default App;
